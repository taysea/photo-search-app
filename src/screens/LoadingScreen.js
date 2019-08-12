import React from 'react';
import {
  Box,
  Layer,
} from 'grommet';

import {
  Spinner,
} from '../components';

const LoadingScreen = () => (
  <Layer
    animate="false"
    full
  >
    <Box
      fill
      justify="center"
      align="center"
      gap="medium"
    >
      <Spinner />
    </Box>

  </Layer>
);

export default LoadingScreen;
