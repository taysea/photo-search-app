import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  ResponsiveContext,
  Text,
} from 'grommet';
import {
  Spinner,
} from '.';
import Thumbnail from './Thumbnail';
import config from '../config';

const ImageList = ({ columns, searchTerm, searched }) => {
  const [data, setData] = useState({ photos: [] });
  const [loadingStatus, setLoadingStatus] = useState('Loading');

  useEffect(() => {
    async function fetchPhotos() {
      try {
        let res = {};
        if (searchTerm && searched) {
          res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${searchTerm}`);
        } else {
          res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`);
        }
        const photos = await res.json();
        if (res.ok && photos.length > 0) {
          setData(photos);
          setLoadingStatus('Success');
        } else if (res.ok && photos.length === 0) {
          setLoadingStatus('No images found');
        } else {
          setLoadingStatus('Error');
        }
      } catch (e) {
        setLoadingStatus('Error');
      }
    }
    fetchPhotos();
  }, [searchTerm, searched]);

  if (loadingStatus === 'Loading') {
    return (
      <Box full align="center" justify="center">
        <Spinner />
      </Box>
    );
  } if (loadingStatus === 'No images found') {
    return (
      <Box>
        <Text alignSelf="center">
          Hmmm, we could not find any images about that.
        </Text>
      </Box>
    );
  } if (loadingStatus === 'Success') {
    return (
      <ResponsiveContext>
        {size => (
          <Grid rows="medium" columns={size !== 'small' ? 'medium' : '100%'} gap="small">
            {data.map(photo => <Thumbnail key={photo.id} photo={photo} />)}
          </Grid>
        )}
      </ResponsiveContext>
    );
  }
  return (
    <Box>
      <Text alignSelf="center">Oh no! Something went wrong. Please try again in a little while.</Text>
    </Box>
  );
};

export default ImageList;

ImageList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searched: PropTypes.bool.isRequired,
};
