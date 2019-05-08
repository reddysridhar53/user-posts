import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PostCard,
  PostActionWrapper,
  PostComment,
  PostTitle,
  PostItem,
  PostUserName,
} from './styledElements';

function PostItemDetails({ title, postId, name, userId, commentsString, onPostClick }) {
    const handlePostClick = () => {
        onPostClick && onPostClick(postId);
    }

    return (
        <PostCard onClick={handlePostClick}>
          <PostItem to={`/posts/${postId}`}>
            <PostTitle>{title}</PostTitle>
            <PostActionWrapper>
              <PostComment>{commentsString}</PostComment>
              <PostUserName to={`/users/${userId}`}>{name}</PostUserName>
            </PostActionWrapper>
          </PostItem>
        </PostCard>
    )
}

PostItemDetails.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    commentsString:PropTypes.string.isRequired,
    onPostClick: PropTypes.func.isRequired,
}

export default PostItemDetails;