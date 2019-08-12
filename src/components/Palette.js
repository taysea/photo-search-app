import React, { Component, useState, useEffect } from 'react';
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
import { Spinner } from '.';

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
  const { setPageLoadingStatus } = props;

  const fetchPhoto = async () => {
    try {
      setLoadingStatus(STATUSES.LOADING);
      setCopyStatus(false);
      const res = await fetch(`https://api.unsplash.com/photos/${props.match.params.id}?client_id=${config.apiKey}`);
      const photo = await res.json();
      if (res.ok) {
        setData(photo);
        setLoadingStatus(STATUSES.SUCCESS);
        setPageLoadingStatus(false);
      } else {
        setLoadingStatus(STATUSES.ERROR);
        setPageLoadingStatus(false);
      }
    } catch (e) {
      setLoadingStatus(STATUSES.ERROR);
      setPageLoadingStatus(false);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, [props.history.location, props.match.params.id]);

  function getColors(colors) {
    setColors(colors);
  }

  switch (loadingStatus) {
    case STATUSES.LOADING:
      return (
        <Spinner />
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
                  {`photo by ${data.user.name} from Unsplash`}
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
        <Box>Hmmm, something went wrong</Box>
      );
  }
};

export default Palette;

Palette.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setPageLoadingStatus: PropTypes.func.isRequired,
};
