import React from 'react';
import {
  Box,
  Heading,
  Image,
  ResponsiveContext,
  Text,
} from 'grommet';
import logo from '../assets/logo.png';
import {
  Link,
  SearchForm,
} from '.';

const Header = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box as="header" direction="row-responsive" gap="medium" pad={{ bottom: 'medium' }} justify="between">
        <Box>
          <Link
            to="/"
          >
            <Box direction={size !== 'small' ? 'row' : 'column'} gap="small" align="center">
              <Box width="xxsmall" height="xxsmall">
                <Image src={logo} alt="Color Palette Generator Logo" fit="cover" />
              </Box>
              <Heading
                size="small"
                color="dark-1"
                margin="none"
              >
            color palette generator
              </Heading>
            </Box>
          </Link>

          {size !== 'small'
          && <Text color="dark-1">created using Grommet, Unsplash, and React Color Extractor</Text>
          }
        </Box>
        <SearchForm />
      </Box>
    )}

  </ResponsiveContext.Consumer>
);

export default Header;
