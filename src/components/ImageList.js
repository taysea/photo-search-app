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

const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  NONE: 'no images',
  ERROR: 'error',
};

const ImageList = (props) => {
  const [data, setData] = useState({ photos: [] });
  const [loadingStatus, setLoadingStatus] = useState(STATUSES.LOADING);
  const { setPageLoadingStatus } = props;
  const query = props.history.location.search.substr(1);

  async function fetchPhotos() {
    try {
      setLoadingStatus(STATUSES.LOADING);
      let res = {};
      if (query) {
        res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${query}`);
      } else {
        res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`);
      }
      const photos = await res.json();
      if (res.ok && photos.length > 0) {
        setData(photos);
        setLoadingStatus(STATUSES.SUCCESS);
        setPageLoadingStatus(false);
      } else if (res.ok && photos.length === 0) {
        setLoadingStatus(STATUSES.NONE);
        setPageLoadingStatus(false);
      } else {
        setLoadingStatus(STATUSES.ERROR);
        setPageLoadingStatus(false);
      }
    } catch (e) {
      setLoadingStatus(STATUSES.ERROR);
      setPageLoadingStatus(false);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, [query, props.history.location]);

  switch (loadingStatus) {
    case STATUSES.LOADING:
      return (
        <Box full align="center" justify="center">
          <Spinner />
        </Box>
      );
    case STATUSES.NONE:
      return (
        <Box>
          <Text alignSelf="center">
            Hmmm, we could not find any images about that.
          </Text>
        </Box>
      );
    case STATUSES.SUCCESS:
      return (
        <ResponsiveContext.Consumer>
          {size => (
            <Grid rows="medium" columns={size !== 'small' ? 'medium' : '100%'} gap="small">
              {data.map(photo => <Thumbnail key={photo.id} photo={photo} />)}
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      );
    default:
      return (
        <Box>
          <Text alignSelf="center">Oh no! Something went wrong. Please try again in a little while.</Text>
        </Box>
      );
  }
};

export default ImageList;

ImageList.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setPageLoadingStatus: PropTypes.func.isRequired,
};
