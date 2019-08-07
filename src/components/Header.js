import React from 'react';
import {
  Box,
  Heading,
} from 'grommet';
import {
  Camera,
} from 'grommet-icons';
import {
  Link,
  SearchForm,
} from '.';

const Header = () => (
  <Box as="header" direction="row-responsive" gap="medium" pad={{ bottom: 'medium' }} justify="between">
    <Box>
      <Link
        to="/"
      >
        <Box direction="row" gap="small" align="center">
          <Camera size="large" color="dark-1" />
          <Heading size="small" color="dark-1">a responsive photo gallery</Heading>
        </Box>

      </Link>
      <Heading size="xsmall" color="dark-1">created using Grommet and Unsplash's API</Heading>
    </Box>
    <SearchForm />
  </Box>
);

export default Header;
