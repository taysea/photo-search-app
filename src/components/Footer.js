import React from 'react';
import {
  Box,
  Button,
  Text,
} from 'grommet';

import {
  Github,
} from 'grommet-icons';

const Footer = () => (
  <Box as="footer" align="center" pad={{ top: 'medium' }}>
    <Text color="light-5">
      made by Taylor Seamans
    </Text>
    <Button
      icon={<Github color="light-5" size="large" />}
      href="https://github.com/taysea"
      target="_blank"
      rel="noopener noreferrer"
    />
  </Box>
);

export default Footer;
