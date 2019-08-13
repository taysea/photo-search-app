import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ResponsiveContext,
  Text,
} from 'grommet';
import { ColorExtractor } from 'react-color-extractor';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import config from '../config';

const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Palette = (props) => {
  const [data, setData] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(STATUSES.LOADING);
  const [copyStatus, setCopyStatus] = useState(false);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchPhoto() {
      try {
        setLoadingStatus(STATUSES.LOADING);
        setCopyStatus(false);
        const res = await fetch(`https://api.unsplash.com/photos/${props.match.params.id}?client_id=${config.apiKey}`);
        const photo = await res.json();
        if (res.ok) {
          setData(photo);
          setLoadingStatus(STATUSES.SUCCESS);
        } else {
          setLoadingStatus(STATUSES.ERROR);
        }
      } catch (e) {
        setLoadingStatus(STATUSES.ERROR);
      }
    }
    fetchPhoto();
  }, [props.history.location, props.match.params.id]);

  function getColors(colorSwatch) {
    setColors(colorSwatch);
  }

  switch (loadingStatus) {
    case STATUSES.LOADING:
      return (
        <Box fill justify="center" align="center" />
      );
    case STATUSES.SUCCESS:
      return (
        <ResponsiveContext.Consumer>
          {size => (
            <Box
              background={size !== 'small' ? 'light-2' : 'white'}
              round="small"
              pad={size !== 'small' ? 'large' : 'none'}
              gap="medium"
              width="100%"
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
                  width={(size !== 'small' && data.height >= 0.85 * data.width) ? 'small' : 'medium'}
                  overflow="hidden"
                >
                  <ColorExtractor getColors={getColors}>
                    <img src={data.urls.regular} width="100%" alt={data.alt_description} />
                  </ColorExtractor>
                </Box>
                <Text
                  color="dark-5"
                  size="xsmall"
                >
                  photo by
                  {' '}
                  <Button
                    href={data.user.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.user.name}
                  </Button>
                  {' '}
                   from

                  {' '}
                  <Button
                    href="https://unsplash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unsplash
                  </Button>
                </Text>
              </Box>
              <Box
                direction={size !== 'small' ? 'row' : 'column'}
                gap="small"
                justify="center"
                wrap
              >
                {colors.map((color, id) => (
                  <Box>
                    <Button
                      margin={{ bottom: 'small' }}
                      onClick={() => {
                        copy(color);
                        setCopyStatus(true);
                      }}
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
                  </Box>
                ))}
              </Box>
              {copyStatus && (
                <Text
                  color="status-ok"
                  textAlign="center"
                >
  copied to clipboard!
                </Text>
              )}

            </Box>
          )}

        </ResponsiveContext.Consumer>
      );
    default:
      return (
        <Box fill justify="center" align="center">Oh no! We couldn't load the image you clicked on. Please try again in a little while.</Box>
      );
  }
};

export default Palette;

Palette.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.object.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
