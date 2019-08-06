import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import {
  Guideline,
  ImageList,
} from '../components';

const MainScreen = ({ searchTerm, searched }) => (
  <Box gap="medium">
    <Guideline tip="This application fetches images from Unsplash using Unsplash's API and uses Grommet Grid to create a responsive image layout. Below is a random set of images generated from Unsplash's featured images. The search bar can also be used to search Unsplash's library for a specific topic (e.g. dog, island, purple flower)." />

    <ImageList
      searchTerm={searchTerm}
      searched={searched}
    />
  </Box>
);

export default MainScreen;

MainScreen.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searched: PropTypes.bool.isRequired,
};
