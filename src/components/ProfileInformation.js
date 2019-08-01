import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Box, Text,
} from 'grommet';

const ProfileInformation = ({ profilePic, name, username }) => (
  <Box direction="row" gap="small">
    <Box
      height="50px"
      width="50px"
      round="full"
      background={`url(${profilePic})`}
    />
    <Box>
      <Text>{name}</Text>
      <Handle>{`@${username}`}</Handle>
    </Box>
  </Box>
);

export default ProfileInformation;

ProfileInformation.propTypes = {
  profilePic: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
};

ProfileInformation.defaultProps = {
  profilePic: 'None',
  name: 'None',
  username: 'None',
};

const Handle = styled.p`
  font-family: Euclid-Light;
  font-size: 0.8em;
  color: #333;
`;
