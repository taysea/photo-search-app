import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text,
} from 'grommet';

const Guideline = ({ tip, ...rest }) => (
  <Box
    background="light-2"
    round="small"
    pad="medium"
    alignSelf="center"
    margin={{ bottom: 'medium' }}
    {...rest}
  >
    <Text color="dark-1" textAlign="center">{tip}</Text>
  </Box>
);

export default Guideline;

Guideline.propTypes = {
  tip: PropTypes.string,
};

Guideline.defaultProps = {
  tip: '',
};
