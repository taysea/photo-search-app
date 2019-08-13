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
  <Box flex as="footer" align="center" justify="end" pad={{ top: 'medium' }}>
    <Box align="center">
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

  </Box>
);

export default Footer;
