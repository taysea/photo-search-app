import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import {
  Guideline,
  ImageList,
} from '../components';

const SearchResultsScreen = ({ ...props }) => (
  <Box gap="medium">
    <Guideline tip={props.history.location.search && `Showing Unsplash results for: ${props.history.location.search.substr(1)}.`} />
    <ImageList
      {...props}
    />
  </Box>
);

export default SearchResultsScreen;

SearchResultsScreen.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
