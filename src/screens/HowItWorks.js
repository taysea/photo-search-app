import React from 'react';
import {
  Box,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';

const HowItWorks = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        width={size !== 'small' ? 'large' : '100%'}
        alignSelf="center"
        gap="medium"
      >
        <Heading
          size="large"
          textAlign="center"
          margin="none"
        >
           how it works
        </Heading>

        <Box gap="small">
          <Heading
            size="small"
            margin="none"
          >
                grommet
          </Heading>
          <Text>
              Grommet is used to create the UI. The components from its library make it easy to create a responsive layout. Grommet is an open-source project run by HPE.
          </Text>
        </Box>

        <Box gap="small">
          <Heading
            size="small"
            margin="none"
          >
            unsplash
          </Heading>
          <Text>
              Unsplash's API is used to pull the images that populate the layout. On the home page, a random selection of images categorized by Unsplash as "featured" are displayed. However, a specific topic can also be searched for using the search bar. In all cases, the images displayed are coming from Unsplash. The user who uploaded the image is credited on the page that loads when an image is clicked on.
          </Text>
        </Box>

        <Box gap="small">
          <Heading
            size="small"
            margin="none"
          >
            react-color-extractor
          </Heading>
          <Text>
              This npm package is used to extract six dominant colors from a selected image.
          </Text>
        </Box>
      </Box>
    )}

  </ResponsiveContext.Consumer>

);

export default HowItWorks;
