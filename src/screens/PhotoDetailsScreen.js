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

// see https://medium.com/front-end-weekly/data-fetcher-component-using-hooks-and-render-props-aacf3162dfc2
/*

const PhotoData = ({ photoId }) => {
  let isLoading = true; 
 const res = async () => {
   await fetch('')
  };
  // fetching logic

  return { myPhotoData, isLoading };

}

*/

const PhotoDetailsScreen = (props) => {
  const [isPalleteLoading, setPalleteLoading] = useState(true);
  const [isListLoading, setListLoading] = useState(true);

  return (
    <Box
      gap="medium"
    >
      {(isPalleteLoading || isListLoading) && <LoadingScreen />}
      <Palette setPageLoadingStatus={status => setPalleteLoading(status)} {...props} />
      {/* Render props pattern
      <PhotoData photoId={123445}>
        {({myPhotoData, isLoading}) => isLoading ? <MyLoader> : <Pallete photo={myPhotoData}>}
      </PhotoData>
      */}
      <Box>
        <Text size="large" textAlign="center" margin="none">still looking for something different?</Text>
      </Box>

      <ImageList setPageLoadingStatus={status => setListLoading(status)} {...props} />
    </Box>
  );
};

export default PhotoDetailsScreen;
