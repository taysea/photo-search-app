import React, { useState } from 'react';
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

const PhotoDetailsScreen = (props) => {
  const [isPalleteLoading, setPalleteLoading] = useState(true);
  const [isListLoading, setListLoading] = useState(true);

  return (
    <Box
      gap="medium"
    >
      {(isPalleteLoading || isListLoading) && <LoadingScreen />}
      <Palette setPageLoadingStatus={status => setPalleteLoading(status)} {...props} />

      <Box>
        <Text size="large" textAlign="center" margin="none">still looking for something different?</Text>
      </Box>

      <ImageList setPageLoadingStatus={status => setListLoading(status)} {...props} />
    </Box>
  );
};

export default PhotoDetailsScreen;
