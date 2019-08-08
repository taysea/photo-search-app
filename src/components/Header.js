import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
} from 'grommet';
import logo from '../assets/logo.png';
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
          <Box width="xxsmall" height="xxsmall">
            <Image src={logo} alt="Color Palette Generator Logo" fit="cover" />
          </Box>
          <Heading size="small" color="dark-1">color palette generator</Heading>
        </Box>

      </Link>
      <Text color="dark-1">created using Grommet, Unsplash, and React Color Palette</Text>
    </Box>
    <SearchForm />
  </Box>
);

export default Header;
