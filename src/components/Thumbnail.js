import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumbnail = ({ photo }) => (
  <Link to={`/${photo.id}`}>
    <Image src={photo.urls.regular} alt={photo.alt_description} />
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

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
