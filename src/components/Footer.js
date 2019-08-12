import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Text,
} from 'grommet';

const FooterLink = styled.a`
  color: #DADADA,
  text-decoration: none,
  :hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <Box as="footer" align="center" pad={{ top: 'medium' }}>
    <Text color="light-5">
      made by Taylor Seamans
    </Text>

  </Box>
);

export default Footer;
