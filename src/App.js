import './reset.css';
import React, { Component } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
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
  Footer,
  Header,
  PhotoDetails,
  ScrollToTop,
} from './components';

const initialState = {
  searched: false,
  searchTerm: '',
};

class App extends Component {
  state = { ...initialState }

  resetState = () => {
    this.setState({ ...initialState });
  }

  handleSearchSubmit = (searchTerm) => {
    this.setState({
      searched: true,
      searchTerm,
    });
  }

  render() {
    return (
      <Grommet theme={customTheme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Router>
              <ScrollToTop>
                <Box gap="medium" pad="large">
                  <Header
                    onSearchSubmit={this.handleSearchSubmit}
                    onReload={this.resetState}
                  />
                  {/* <Box as="article"> */}
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <Box as="article">
                          {(this.componentDidUpdate || !this.state.searched)
                            ? <Guideline width={size !== 'small' ? 'large' : '100%'} tip="This application fetches images from Unsplash using Unsplash's API and uses Grommet Grid to create a responsive image layout. Below is a random set of images generated from Unsplash's featured images. The search bar can also be used to search Unsplash's library for a specific topic (e.g. dog, island, purple flower)." />
                            : <Guideline width={size !== 'small' ? 'large' : '100%'} tip={`Showing Unsplash results for: ${this.state.searchTerm}. Click on an image for more details about it.`} />
                          }

                          {(!this.state.searched)
                          && <ImageList
                            columns={size !== 'small' ? 'medium' : '100%'}
                            searchTerm={this.state.searchTerm}
                            searched={this.state.searched}
                          />
                          }
                          {/* {(this.state.searched)
                            ? <ImageList
                              columns={size !== 'small' ? 'medium' : '100%'}
                              searchTerm={this.state.searchTerm}
                              searched={this.state.searched}
                            />
                            : <ImageList
                              columns={size !== 'small' ? 'medium' : '100%'}
                              searchTerm={this.state.searchTerm}
                              searched={this.state.searched}
                            />
                          } */}
                        </Box>
                      )}
                    />
                    <Route
                      path="/:id"
                      render={props => (
                        <PhotoDetails
                          as="article"
                          {...props}
                          columns={size !== 'small' ? 'medium' : '100%'}
                          size={size}
                        />
                      )}
                    />
                  </Switch>
                  {/* </Box> */}
                  <Footer />
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
