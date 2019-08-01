import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import {
  TextInput, Box, FormField, Button,
} from 'grommet';
import { Search } from 'grommet-icons';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    searchTerm: '',
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // Don't allow blank search
    if (this.state.searchTerm.length <= 0) {
      return;
    }
    // sends the searchTerm back to App.js
    this.props.userSubmit(this.state.searchTerm);

    // This clears the value in the input
    // so the placeholder returns
    this.setState({
      searchTerm: '',
    });

    this.props.history.push('/');
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Box>
        <form onSubmit={this.onFormSubmit}>
          <Box direction="row" align="stretch">
            <Box width="100%">
              <FormField htmlFor="search">
                <TextInput
                  type="text"
                  id="search"
                  name="search"
                  value={searchTerm}
                  placeholder="Search Unsplash..."
                  onChange={this.onInputChange}
                />
              </FormField>
            </Box>

            <Button type="submit">
              <Search size="medium" color="dark-2" />
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
}

export default withRouter(SearchForm);

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  userSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

SearchForm.defaultProps = {
  searchTerm: '',
};
