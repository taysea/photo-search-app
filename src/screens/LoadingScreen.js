import React from 'react';
import {
  Box,
  Layer,
  Text,
} from 'grommet';

import {
  Spinner,
} from '../components';

const LoadingScreen = () => (
  <Layer
    animation="fadeIn"
    full
  >
    <Box
      fill
      justify="center"
      align="center"
      gap="medium"
    >
      <Spinner />
      {/* <Text>just a sec, getting everything ready for you!</Text> */}
    </Box>

  </Layer>
);

export default LoadingScreen;
