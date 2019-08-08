import React, { Component } from 'react';
import {
  Box,
  Button,
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
      src,
      user,
    } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            gap="medium"
            width={size !== 'small' ? 'xlarge' : '100%'}
            alignSelf="center"
            direction={size !== 'small' ? 'row' : 'column'}
            // justify="center"
            margin={{ bottom: 'medium' }}
          >
            <Box
              width={size !== 'small' ? '50%' : '100%'}
              gap="small"
              margin={{ bottom: 'medium' }}
            >
              <Box
                width="large"
                overflow="hidden"
              >
                <ColorExtractor getColors={this.getColors}>
                  <img src={src} width="100%" alt={alt} />
                </ColorExtractor>
              </Box>
              <Text
                color="dark-3"
                size="small"
              >
                {`photo by ${user} from Unsplash`}
              </Text>

            </Box>

            <Box
              width={size !== 'small' ? '50%' : '100%'}
            >
              <Box
                direction={size !== 'small' ? 'row' : 'column'}
                gap="small"
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
                      width={size !== 'small' ? 'small' : '100%'}
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
