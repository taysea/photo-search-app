import React, { Component } from 'react';
import {
  Box,
  Text,
} from 'grommet';
import {
  ImageList,
  Palette,
} from '../components';
import LoadingScreen from './LoadingScreen';

// import { Palette } from '../components/Palette';

const PhotoDetailsScreen = props => (
  <Box
    gap="medium"
  >
    <Palette {...props} />

    <Box>
      <Text size="large" textAlign="center" margin="none">still looking for something different?</Text>
    </Box>

    <ImageList {...props} />
  </Box>
);

export default PhotoDetailsScreen;
