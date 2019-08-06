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

const statuses = {
  loading: 'loading',
  none: 'no images',
  success: 'success',
  error: 'error',
};

const ImageList = ({ ...props }) => {
  const {
    loading, none, success, error,
  } = statuses;

  const [data, setData] = useState({ photos: [] });
  const [loadingStatus, setLoadingStatus] = useState(loading);

  const query = props.history.location.search.substr(1);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        let res = {};
        if (query) {
          res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${query}`);
        } else {
          res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`);
        }
        const photos = await res.json();
        if (res.ok && photos.length > 0) {
          setData(photos);
          setLoadingStatus(success);
        } else if (res.ok && photos.length === 0) {
          setLoadingStatus(none);
        } else {
          setLoadingStatus(error);
        }
      } catch (e) {
        setLoadingStatus(error);
      }
    }
    fetchPhotos();
  }, [error, none, query, success]);

  if (loadingStatus === loading) {
    return (
      <Box full align="center" justify="center">
        <Spinner />
      </Box>
    );
  } if (loadingStatus === none) {
    return (
      <Box>
        <Text alignSelf="center">
          Hmmm, we could not find any images about that.
        </Text>
      </Box>
    );
  } if (loadingStatus === success) {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid rows="medium" columns={size !== 'small' ? 'medium' : '100%'} gap="small">
            {data.map(photo => <Thumbnail key={photo.id} photo={photo} />)}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
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
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
