import React from 'react';
import {
  Box,
  Heading,
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
    <Palette {...props} />

    <Box>
      <Text size="large" textAlign="center" margin="none">still looking for something different?</Text>
    </Box>


    <ImageList {...props} />
  </Box>
);

export default PhotoDetailsScreen;
