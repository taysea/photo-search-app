import React, { useContext } from 'react';
import {
  Box,
  Heading,
  ResponsiveContext,
} from 'grommet';
import {
  FormNext,
} from 'grommet-icons';
import styled from 'styled-components';
import {
  Link,
  ImageList,
} from '../components';

const colorRowOne = [
  'neutral-3', 'accent-4', '#E36588',
];

const colorRowTwo = [
  'status-ok', 'accent-2', 'brand',
];

const StyledLink = styled(Link)`
  color: #7D4CDB;
  &:hover {
    text-decoration: underline;
  }

`;
const Intro = props => {
  const size = useContext(ResponsiveContext);
  
  return (
    <Box gap="medium">
      <Box
        width={size !== 'small' ? 'xlarge' : '100%'}
        justify="center"
        align="center"
        alignSelf="center"
        gap="medium"
        pad={{ top: 'small' }}
      >
        <Box
          gap="small"
          width={size !== 'small' ? '100%' : 'small'}
          align="center"
          margin={{ bottom: 'medium' }}
          animation={{ type: 'fadeIn', delay: '100' }}
        >
          <Box
            width={size !== 'small' ? 'large' : 'medium'}
            direction="row"
            gap="small"
            justify="center"
            wrap
          >
            {colorRowOne.map(color => (
              <Box
                key={color}
                background={color}
                round="small"
                basis="1/4"
                height={size !== 'small' ? 'xsmall' : 'xxsmall'}
              />
            ))}
          </Box>

          <Box
            width={size !== 'small' ? 'large' : '100%'}
            direction="row"
            gap="small"
            justify="center"
            wrap
          >
            {colorRowTwo.map(color => (
              <Box
                key={color}
                background={color}
                round="small"
                basis="1/4"
                height={size !== 'small' ? 'xsmall' : 'xxsmall'}
              />
            ))}
          </Box>
        </Box>

        <Heading
          size="large"
          textAlign="center"
          margin="none"
        >
          change the way you choose color palettes
        </Heading>

        <Heading
          size="small"
          textAlign="center"
          margin="none"
        >
          Let photos you like help you find the right color palette for your project.
          Go ahead. Click on a photo you like, or search for one.
        </Heading>

        <Box
          direction="row"
          wrap
        >
          <StyledLink to="/how-it-works">how it works</StyledLink>
          <FormNext />
        </Box>


      </Box>
      <ImageList {...props} />
    </Box>
  );
};

export default Intro;
