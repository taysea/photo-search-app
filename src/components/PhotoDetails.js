import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Image,
} from 'grommet';
import ImageList from './ImageList';
import config from '../config';
import Guideline from './Guideline';
import ProfileInformation from './ProfileInformation';
import ImageStats from './ImageStats';

class PhotoDetails extends Component {
  state = {
    photo: {},
  }

  componentDidMount = async () => {
    // Fetch the photo data from the API then mount the component
    this.getImage();
    this.props.generateRandomImages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getImage();
      this.props.generateRandomImages();
    }
  }

  getImage = async () => {
    try {
      const res = await fetch(`https://api.unsplash.com/photos/${this.props.match.params.id}?client_id=${config.apiKey}`);
      const photo = await res.json();
      this.setState({
        photo,
        src: photo.urls.regular,
        profilePic: photo.user.profile_image.medium,
        name: photo.user.name,
        username: photo.user.username,
        likes: photo.likes,
        views: photo.views,
        downloads: photo.downloads,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      photo, src, profilePic, name, username, likes, views, downloads,
    } = this.state;

    const {
      size, columns,
    } = this.props;

    return (
      <Box gap="medium">
        <Guideline tip="This page fetches data specific to the image that was clicked— including information about the user who uploaded the image and statistics regarding number of views, likes, and downloads." width="large" />

        <Box
          gap="medium"
          border={size === 'small' && { side: 'bottom', color: 'light-5', style: 'solid' }} // Create bottom-border on mobile
          pad={{ bottom: 'large' }}
        >
          <Box direction="row" justify="between">
            <ProfileInformation
              profilePic={profilePic}
              name={name}
              username={username}
            />
            {size !== 'small'
            // Only show this on desktop
            // These are the stats in a row above featured image
            && <ImageStats
              views={views}
              likes={likes}
              downloads={downloads}
              direction="row"
              wrap
            />
            }
          </Box>

          <Box width={size !== 'small' ? 'large' : '100%'} alignSelf="center">
            <Image src={src} alt={photo.alt_description} width="100%" />
          </Box>

          {size === 'small'
          // These are the mobile version of stats that appear under
          // the image
          && <ImageStats
            views={views}
            likes={likes}
            downloads={downloads}
          />
          }
        </Box>

        {/* Rest of page */}
        <Box alignSelf="center">
          <Text as="h2" size="xlarge" textAlign="center">
            other photos you might like
          </Text>
        </Box>
        <ImageList
          foundImages={this.props.photos}
          columns={columns}
        />
      </Box>
    );
  }
}

export default PhotoDetails;

PhotoDetails.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alt_description: PropTypes.string,
      urls: {
        regular: PropTypes.string.isRequired,
      },
    }).isRequired,
  ).isRequired,
  generateRandomImages: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  columns: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  size: PropTypes.string.isRequired,
};
