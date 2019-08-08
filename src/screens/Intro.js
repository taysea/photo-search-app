import React from 'react';
import {
  Box,
  Heading,
  ResponsiveContext,
} from 'grommet';
// import styled from 'styled-components';
import {
  FormNext,
} from 'grommet-icons';
import {
  Link,
  ImageList,
} from '../components';


const colorRowOne = [
  'neutral-3', 'accent-4', '#E36588',
  //   '#087E8B', '#FF9770', '#9BC1BC',
];

const colorRowTwo = [
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
            gap="small"
            width="100%"
            align="center"
            margin={{ bottom: 'medium' }}
            animation={{ type: 'fadeIn', delay: '100' }}
          >
            <Box
              width={size !== 'small' ? 'large' : '100%'}
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
                  height="xsmall"
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
                  height="xsmall"
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
            <Link to="/how-it-works">how it works</Link>
            <FormNext />
          </Box>


        </Box>
        <ImageList {...props} />
      </Box>

    )}
  </ResponsiveContext.Consumer>
);

export default Intro;
