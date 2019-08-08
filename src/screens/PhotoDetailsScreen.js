import React from 'react';
import {
  Box,
  Text,
} from 'grommet';
import {
  Guideline,
  ImageList,
} from '../components';

import { Palette } from '../components/Palette';

const PhotoDetailsScreen = props => (
  <Box
    gap="medium"
  >
    {/* <Guideline tip="This page fetches data specific to the image that was clicked— including information about the user who uploaded the image and statistics regarding number of views, likes, and downloads." width="large" /> */}

    <Palette {...props} />

    <Text as="h2" size="xlarge" textAlign="center">other photos you might like</Text>

    <ImageList {...props} />
  </Box>
);

export default PhotoDetailsScreen;
