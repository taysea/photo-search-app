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
  ScrollToTop,
} from './components';

import PhotoDetailsScreen from './screens/PhotoDetailsScreen';
import MainScreen from './screens/MainScreen';

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
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <MainScreen
                          searchTerm={this.state.searchTerm}
                          searched={this.state.searched}
                        />
                      )}
                    />
                    {/* <Route
                      path="/?:query"
                      render={() => (
                        <Box>
                        <Guideline tip={`Showing Unsplash results for: ${this.state.searchTerm}. Click on an image for more details about it.`} />
                          <ImageList
                            columns={size !== 'small' ? 'medium' : '100%'}
                            searchTerm={this.state.searchTerm}
                            searched={this.state.searched}
                          />
                        </Box>
                      )}
                    /> */}
                    <Route
                      path="/:id"
                      render={props => (
                        <PhotoDetailsScreen
                          columns={size !== 'small' ? 'medium' : '100%'}
                          searchTerm={this.state.searchTerm}
                          searched={this.state.searched}
                          {...props}
                        />
                      )}
                    />
                  </Switch>
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
