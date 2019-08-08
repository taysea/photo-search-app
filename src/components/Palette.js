import React, { Component } from 'react';
import {
  Box,
  Button,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';
import { ColorExtractor } from 'react-color-extractor';
import PropTypes from 'prop-types';
import config from '../config';

export class Palette extends Component {
  state = { colors: [] };

  componentDidMount() {
    this.getImage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getImage();
    }
  }

  getImage = async () => {
    try {
      this.setState({
        colors: [],
      });
      const res = await fetch(`https://api.unsplash.com/photos/${this.props.match.params.id}?client_id=${config.apiKey}`);
      const photo = await res.json();
      this.setState({
        src: photo.urls.regular,
        user: photo.user.name,
        alt: photo.alt_description,
        height: photo.height,
        width: photo.width,
      });
    } catch (e) {
      // console.log(e);
    }
  }

  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }));

  render() {
    const {
      alt,
      colors,
      height,
      src,
      user,
      width,
    } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            background={size !== 'small' ? 'light-2' : 'white'}
            round="small"
            pad={size !== 'small' ? 'large' : 'none'}
            gap="medium"
            width="100%"
            // width={size !== 'small' ? 'xlarge' : '100%'}
            alignSelf="center"
            margin={{ bottom: 'small' }}
          >
            <Box>
              <Text
                size={size !== 'small' ? 'xxlarge' : 'large'}
                textAlign="center"
              >
                based on this photo, we think you'll like these colors:
              </Text>
            </Box>
            <Box
              align="center"
              gap="xsmall"
            >
              <Box
                width={(size !== 'small' && height >= 0.85 * width) ? 'small' : 'medium'}
                overflow="hidden"
              >
                <ColorExtractor getColors={this.getColors}>
                  <img src={src} width="100%" alt={alt} />
                </ColorExtractor>
              </Box>
              <Text
                color="dark-5"
                size="xsmall"
              >
                {`photo by ${user} from Unsplash`}
              </Text>
            </Box>

            <Box
              direction={size !== 'small' ? 'row' : 'column'}
              gap="small"
              justify="center"
              wrap
            >
              {colors.map((color, id) => (
                <Button
                  margin={{ bottom: 'small' }}
                >
                  <Box
                    key={id}
                    background={color}
                    round="small"
                    width={size !== 'small' ? 'xsmall' : '100%'}
                    height="xsmall"
                    align="center"
                    justify="center"
                  >
                    <Text>{color}</Text>
                  </Box>
                </Button>

              ))}
            </Box>

          </Box>
        )}

      </ResponsiveContext.Consumer>
    );
  }
}

Palette.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
