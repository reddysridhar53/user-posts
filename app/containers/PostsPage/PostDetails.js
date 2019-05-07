import React from 'react';
import PropTypes from 'prop-types';
import { PostItem, PostTitle, PostBody, PostUser } from './styledElements';

function PostDetails({ data }) {
  const { title, content, user } = data;

  return (
    <PostItem>
      <PostTitle>{title}</PostTitle>
      <PostBody>{content}</PostBody>
      <PostUser to={`/users/${user.id}`}>{user.name}</PostUser>
    </PostItem>
  );
}

PostDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostDetails;
