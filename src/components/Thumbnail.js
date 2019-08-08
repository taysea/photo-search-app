import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
} from 'grommet';

const Thumbnail = ({ photo }) => (
  <Link to={`/${photo.id}`}>
    <Box height="100%" width="100%" overflow="hidden">
      <Image src={photo.urls.regular} alt={photo.alt_description} fit="cover" />
    </Box>

  </Link>
);

export default Thumbnail;

Thumbnail.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    alt_description: PropTypes.string,
    urls: {
      regular: PropTypes.string.isRequired,
    },
  }).isRequired,
};
