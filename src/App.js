import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { customTheme } from './theme';

import {
  Footer,
  Header,
  ScrollToTop,
} from './components';

import {
  Intro,
  PhotoDetailsScreen,
  SearchResultsScreen,
  HowItWorks,
} from './screens';

const App = () => (
  <Grommet theme={customTheme} full>
    <Router>
      <ScrollToTop>
        <Box gap="medium" pad="large" style={{ minHeight: '100vh' }}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Intro {...props} />
              )}
            />
            <Route
              path="/search/"
              render={props => (
                <SearchResultsScreen {...props} />
              )}
            />
            <Route
              path="/how-it-works"
              render={props => (
                <HowItWorks {...props} />
              )}
            />
            <Route
              path="/:id"
              render={props => (
                <PhotoDetailsScreen {...props} />
              )}
            />
          </Switch>
          <Footer />
        </Box>
      </ScrollToTop>
    </Router>
  </Grommet>
);

export default App;
