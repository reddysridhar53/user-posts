import React from 'react';
import PropTypes from 'prop-types';
import { PostItem, PostTitle, PostContent, PostUser } from './styledElements';

function CommentItem({ comment }) {
  const { title, content, user } = comment;

  return (
    <PostItem>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostUser to={`/users/${user.id}`}>{user.name}</PostUser>
    </PostItem>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
