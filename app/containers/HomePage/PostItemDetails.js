import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PostCard,
  PostActionWrapper,
  PostComment,
  PostTitle,
  PostItem,
  PostUserName,
} from './styledElements';

function PostItemDetails({
  title,
  postId,
  name,
  userId,
  commentsString,
  onPostClick,
}) {
  const handlePostClick = () => {
    onPostClick && onPostClick(postId);
  };

  const handlePostUserClick = event => {
    event.stopPropagation();
  };

  return (
    <PostCard onClick={handlePostClick}>
      <PostItem to={`/posts/${postId}`}>
        <PostTitle>{title}</PostTitle>
        <PostActionWrapper>
          <PostComment>{commentsString}</PostComment>
          <PostUserName to={`/users/${userId}`} onClick={handlePostUserClick}>
            {name}
          </PostUserName>
        </PostActionWrapper>
      </PostItem>
    </PostCard>
  );
}

PostItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  commentsString: PropTypes.string.isRequired,
  onPostClick: PropTypes.func.isRequired,
};

export default PostItemDetails;
