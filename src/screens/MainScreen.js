import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import {
  Guideline,
  ImageList,
} from '../components';

const MainScreen = ({ ...props }) => (
  <Box gap="medium">
    <Guideline tip={props.history.location.search ? `Showing Unsplash results for: ${props.history.location.search.substr(1)}. Click on an image for more details about it.`
      : "This application fetches images from Unsplash using Unsplash's API and uses Grommet Grid to create a responsive image layout. Below is a random set of images generated from Unsplash's featured images. The search bar can also be used to search Unsplash's library for a specific topic (e.g. dog, island, purple flower)."}
    />
    <ImageList
      {...props}
    />
  </Box>
);

export default MainScreen;

MainScreen.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
