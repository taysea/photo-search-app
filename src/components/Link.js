import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'grommet';

const LinkLayout = styled(RouterLink)`
  text-decoration: none;
`;

const Link = ({
  to, onClick, children, ...rest
}) =>
  <LinkLayout to={to} onClick={onClick} {...rest}>
    <Box color="dark-1">{children}</Box>
  </LinkLayout>;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  onClick: null,
};

export default Link;
