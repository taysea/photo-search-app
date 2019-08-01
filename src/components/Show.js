import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';
// import theme from 'root/theme';

const Show = styled(
  ({ maxWidth, minWidth, on, children, ...rest }) => // eslint-disable-line
    <Box {...rest}>{children}</Box>,
)`
  display: none;

  ${({ maxWidth, on }) => (on === 'mobile'
    && `@media(max-width: ${maxWidth}) {
      display: inherit;
    }`
  )}
  ${({ minWidth, on }) => (on === 'desktop'
    && `@media(min-width: ${minWidth}) {
      display: inherit;
    }`
  )}
`;

Show.propTypes = {
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  on: PropTypes.oneOf(['desktop', 'mobile']),
};

Show.defaultProps = {
  maxWidth: '768px',
  minWidth: '768px',
};

export default Show;
