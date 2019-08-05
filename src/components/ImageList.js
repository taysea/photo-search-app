import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Text,
} from 'grommet';
import {
  Spinner,
} from '.';
import Thumbnail from './Thumbnail';
import config from '../config';

function ImageList({ columns }) {
  const [data, setData] = useState({ photos: [] });
  const [loadingStatus, setLoadingStatus] = useState('loading');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`);
        const photos = await res.json();
        if (res.ok && photos.length > 0) {
          setData(photos);
          setLoadingStatus('success');
        } else if (res.ok && photos.length === 0) {
          setLoadingStatus('No images found');
        } else {
          setLoadingStatus('Error');
        }
      } catch (e) {
        setLoadingStatus('Error');
      }
    };
    fetchPhotos();
  }, []);

  if (loadingStatus === 'loading') {
    return (
      <Box full align="center" justify="center">
        <Spinner />
      </Box>
    );
  } if (loadingStatus === 'Error') {
    return (
      <Box>
        <Text alignSelf="center" color="status-error">Oh no! Something went wrong. Please try again in a little while.</Text>
      </Box>
    );
  }
  return (
    <Grid rows="medium" columns={columns} gap="small">
      {data.map(photo => <Thumbnail key={photo.id} photo={photo} />)}
    </Grid>
  );
}

export default ImageList;

// ImageList.propTypes = {
//   foundImages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       alt_description: PropTypes.string,
//       urls: {
//         regular: PropTypes.string.isRequired,
//       },
//     }).isRequired,
//   ).isRequired,
//   columns: PropTypes.string.isRequired,
// };
