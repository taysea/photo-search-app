import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Favorite, InstallOption, View } from 'grommet-icons';
import {
  Box, Text,
} from 'grommet';

const Statistic = styled(Text)`
  font-family: sans-serif;
`;

const ImageStats = ({
  views, likes, downloads, ...rest
}) => (
  <Box {...rest}>
    <Box direction="row" gap="xsmall" pad="small" round="small">
      <View />
      <Statistic>{`${views} Views`}</Statistic>
    </Box>

    <Box direction="row" gap="xsmall" pad="small" round="small">
      <Favorite />
      <Statistic>{`${likes} Likes`}</Statistic>
    </Box>

    <Box direction="row" gap="xsmall" pad="small" round="small">
      <InstallOption />
      <Statistic>{`${downloads} Downloads`}</Statistic>
    </Box>
  </Box>
);

export default ImageStats;

ImageStats.propTypes = {
  views: PropTypes.number,
  likes: PropTypes.number,
  downloads: PropTypes.number,
};

ImageStats.defaultProps = {
  views: 0,
  likes: 0,
  downloads: 0,
};
