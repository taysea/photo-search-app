import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'grommet';
import Thumbnail from './Thumbnail';

const ImageList = ({ foundImages, columns }) => {
  const imgs = foundImages.map(img => <Thumbnail key={img.id} photo={img} />);
  return (
    <Grid rows="medium" columns={columns} gap="small">{imgs}</Grid>
  );
};

export default ImageList;

ImageList.propTypes = {
  foundImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alt_description: PropTypes.string,
      urls: {
        regular: PropTypes.string.isRequired,
      },
    }).isRequired,
  ).isRequired,
  columns: PropTypes.string.isRequired,
};
