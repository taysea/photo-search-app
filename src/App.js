import './reset.css';
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

import { customTheme } from './theme';

import {
  Guideline,
  ImageList,
  Link,
  PhotoDetails,
  ScrollToTop,
  SearchForm,
  Spinner,
} from './components';

import config from './config';

const initialState = {
  photos: [],
  searched: false,
  searchTerm: '',
  // loading: true,
};

class App extends Component {
  state = { ...initialState }
  // componentUmount -- explore

  onSearchSubmit = async (term) => {
    try {
      this.toggleLoading();
      const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${term}`);
      const photos = await response.json();

      this.setState({
        photos,
        searched: true,
        searchTerm: term,
      });

      this.toggleLoading();
    } catch (e) {
      // Handle errors more properly (ex: display error message to user)
      // console.log(e);
    }
  }

  resetState = () => {
    this.setState({ ...initialState });
  }

  toggleLoading() {
    this.setState(state => ({ loading: !state.loading }));
  }

  render() {
    const { loading } = this.state;

    return (
      <Grommet theme={customTheme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Router>
              <ScrollToTop>
                <Box className="App">
                  {/* If page is loading, show loader, otherwise load content */}
                  {loading ? (
                    <Box full height="100vh" align="center" justify="center">
                      <Spinner />
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
                          </Link>
                          <Text color="dark-1">created using Grommet and Unsplash's API</Text>
                        </Box>
                        <SearchForm
                          searched={this.state.searched}
                          userSubmit={this.onSearchSubmit}
                        />
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
