import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Loader from 'react-loader-spinner';
import { customTheme } from './theme';

import {
  Guideline,
  ImageList,
  Link,
  PhotoDetails,
  ScrollToTop,
  SearchForm,
} from './components';
import config from './config';

// No CSS
import './reset.css';

const initialState = {
  photos: [],
  searched: false,
  searchTerm: '',
  loading: false,
};

class App extends Component {
  state = { ...initialState }

  componentDidMount() {
    this.generateRandomImages();
  }

  // componentUmount -- explore

  onSearchSubmit = async (term) => {
    try {
      this.setState({
        loading: true,
      });
      const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${term}`);
      const photos = await response.json();

      this.setState({
        photos,
        searched: true,
        searchTerm: term,
        loading: false,
      });
    } catch (e) {
      // Handle errors more properly (ex: display error message to user)
      // console.log(e);
    }
  }

  resetState = () => {
    this.setState({ ...initialState });

    this.generateRandomImages();
  }

  generateRandomImages = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`);
    const photos = await res.json();
    this.setState({
      photos,
      loading: false,
    });
  }

  render() {
    return (
      <Grommet theme={customTheme}>
        <ResponsiveContext.Consumer>
          {size => (
            <Router>
              <ScrollToTop>
                <Box className="App">
                  {/* If page is loading, show loader, otherwise load content */}
                  {this.state.loading ? (
                    <Box full height="100vh" align="center" justify="center">
                      <Loader type="TailSpin" color="#000" height={80} width={80} />
                    </Box>
                  ) : (
                    <Box gap="medium" pad="large">
                      {/* Start of main content */}
                      <Box as="header" direction="row-responsive" gap="medium" pad={{ bottom: 'medium' }} justify="between">
                        <Box>
                          <Link
                            to="/"
                            onClick={() => {
                              this.resetState();
                            }}
                          >
                            <Heading size="small" color="dark-1">a responsive photo gallery</Heading>
                            <Text color="dark-1">created using Grommet and Unsplash's API</Text>
                          </Link>
                        </Box>
                        {/* <Box> */}
                        <SearchForm
                          // searchTerm={this.state.searchTerm}
                          searched={this.state.searched}
                          userSubmit={this.onSearchSubmit}
                        />
                        {/* </Box> */}
                      </Box>
                      <Box as="article">
                        <Switch>
                          <Route
                            exact
                            path="/"
                            render={props => (
                              <Box>
                                {(this.componentDidUpdate || !this.state.searched)
                                  ? <Guideline width={size !== 'small' ? 'large' : '100%'} tip="This application fetches images from Unsplash using Unsplash's API and uses Grommet Grid to create a responsive image layout. Below is a random set of images generated from Unsplash's featured images. The search bar can also be used to search Unsplash's library for a specific topic (e.g. dog, island, purple flower)." />
                                  : <Guideline width={size !== 'small' ? 'large' : '100%'} tip={`Showing Unsplash results for: ${this.state.searchTerm}. Click on an image for more details about it.`} />
                                }

                                <ImageList
                                  {...props}
                                  foundImages={this.state.photos}
                                  generateRandomImages={this.generateRandomImages}
                                  columns={size !== 'small' ? 'medium' : '100%'}
                                />
                              </Box>

                            )}
                          />
                          <Route
                            path="/:id"
                            render={props => (
                              <PhotoDetails
                                {...props}
                                photos={this.state.photos}
                                generateRandomImages={this.generateRandomImages}
                                columns={size !== 'small' ? 'medium' : '100%'}
                                size={size}
                              />
                            )}
                          />
                        </Switch>
                      </Box>
                      <Box as="footer" align="center" pad={{ top: 'medium' }}>
                        <Text color="light-5">made by Taylor Seamans</Text>
                      </Box>
                    </Box>
                  )}
                </Box>
              </ScrollToTop>
            </Router>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
