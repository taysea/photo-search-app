import React from 'react';
import {
  Box,
  Heading,
  Text,
} from 'grommet';
import {
  Link,
  SearchForm,
} from '.';

const Header = ({ onReload, ...rest }) => (
  <Box as="header" direction="row-responsive" gap="medium" pad={{ bottom: 'medium' }} justify="between">
    <Box>
      <Link
        to="/"
        onClick={onReload}
      >
        <Heading size="small" color="dark-1">a responsive photo gallery</Heading>
      </Link>
      <Text color="dark-1">created using Grommet and Unsplash's API</Text>
    </Box>
    <SearchForm {...rest} />
  </Box>
);

export default Header;
