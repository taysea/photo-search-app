import React, { Component, useState, useEffect } from 'react';
import {
  Box,
  ResponsiveContext,
  Text,
} from 'grommet';
import { ColorExtractor } from 'react-color-extractor';
import PropTypes from 'prop-types';
import config from '../config';

const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  NONE: 'no images',
  ERROR: 'error',
};

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
    } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            gap="medium"
            width={size !== 'small' ? 'xxlarge' : '100%'}
            alignSelf="center"
            direction={size !== 'small' ? 'row' : 'column'}
          >
            <Box
              width={size !== 'small' ? '50%' : '100%'}
            >
              <ColorExtractor getColors={this.getColors}>
                <img src={src} width="100%" alt={alt} />
              </ColorExtractor>
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
                  <Box
                    key={id}
                    background={color}
                    round="small"
                    width={size !== 'small' ? 'small' : '100%'}
                    height="xsmall"
                    align="center"
                    justify="center"
                    margin={{ bottom: 'small' }}
                  >
                    <Text>{color}</Text>
                  </Box>
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
