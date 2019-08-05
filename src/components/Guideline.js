import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, ResponsiveContext,
} from 'grommet';

const Guideline = ({ tip, ...rest }) => (
  <ResponsiveContext>
    { size => (
      <Box
        background="light-2"
        round="small"
        pad="medium"
        alignSelf="center"
        margin={{ bottom: 'medium' }}
        width={size !== 'small' ? 'large' : '100%'}
        {...rest}
      >
        <Text color="dark-1" textAlign="center">{tip}</Text>
      </Box>
    )}
  </ResponsiveContext>

);

export default Guideline;

Guideline.propTypes = {
  tip: PropTypes.string,
};

Guideline.defaultProps = {
  tip: '',
};
