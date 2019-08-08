import React from 'react';
import {
  Box,
  Heading,
  Text,
  ResponsiveContext,
} from 'grommet';
import styled from 'styled-components';
import {
  FormNext,
} from 'grommet-icons';
import {
  Link,
  ImageList,
} from '../components';


const colors = [
  'neutral-3', 'accent-4', '#E36588',
  //   '#087E8B', '#FF9770', '#9BC1BC',
  'status-ok', 'accent-2', 'brand',
];
const Intro = props => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box gap="large">
        <Box
          width={size !== 'small' ? 'xlarge' : '100%'}
          justify="center"
          align="center"
          alignSelf="center"
          gap="medium"
          pad={{ top: 'medium' }}
        >

          <Box
            width={size !== 'small' ? 'large' : '100%'}
            direction="row"
            gap="small"
            justify="center"
            wrap
          >
            {colors.map(color => (
              <Box
                key={color}
                background={color}
                round="small"
                width={size !== 'small' ? 'small' : '100%'}
                height="xsmall"
                animation={{ type: 'fadeIn', delay: '100' }}
                margin={{ bottom: 'small' }}
              />
            ))}
          </Box>
          <Heading
            size="large"
            textAlign="center"
          >
           change the way you choose color palettes
          </Heading>

          <Heading
            size="small"
            textAlign="center"
          >
           Let photos you like help you find the right color palette for your project. Go ahead. Click on a photo you like, or search for one.
          </Heading>

          <Box
            direction="row"
            wrap
          >
            <Link to="/">how it works</Link>
            <FormNext />
          </Box>


        </Box>
        <ImageList {...props} />
      </Box>

    )}
  </ResponsiveContext.Consumer>
);

export default Intro;
