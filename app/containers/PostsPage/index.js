import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PostDetails from './PostDetails';
// import CommentItem from './CommentItem';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  selectGetPost,
  selectLoadingPost,
  selectGetComments,
  selectLoadingComments,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPostById, getCommentsByPostId } from './actions';

import BackButton from '../../components/BackButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
  H,
  PageTitle,
  PostPageWrapper,
  PostCommentWrapper,
  PostContainer,
  PostContent,
  CommentsContainer,
  CommentsContent,
} from './styledElements';

export class PostPage extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;

    this.props.onGetPost(postId);
    this.props.onGetComments(postId);
  }

  renderPostDetails = () => {
    const { post, loadingPost } = this.props;

    if (loadingPost) {
      return <LoadingIndicator />;
    }
    if (!Object.keys(post).length) {
      return <H>{`No Post Found.`}</H>;
    }
    return <PostDetails data={post} />;
  };

  renderComments = () => {
    const { comments, loadingComments } = this.props;

    if (loadingComments) {
      return <LoadingIndicator />;
    }
    if (!comments.length) {
      return <H>{`No Comments.`}</H>;
    }
    return comments.map(comment => {
      return <PostDetails data={comment} key={comment.id} />;
    });
  };

  render() {
    return (
      <PostPageWrapper>
        <Helmet>
          <title>Huddl Post Page - Sample post(Frontend Task)</title>
          <meta name="description" content="Sample Post Detail Page" />
        </Helmet>
        <PostCommentWrapper>
          <BackButton to={`/`}>{`Go to Posts`}</BackButton>
          <PostContainer>
            <PageTitle>{`Post`}</PageTitle>
            <PostContent>{this.renderPostDetails()}</PostContent>
          </PostContainer>
          <CommentsContainer>
            <PageTitle>{`Comments`}</PageTitle>
            <CommentsContent>{this.renderComments()}</CommentsContent>
          </CommentsContainer>
        </PostCommentWrapper>
      </PostPageWrapper>
    );
  }
}

PostPage.propTypes = {
  onGetPost: PropTypes.func.isRequired,
  onGetComments: PropTypes.func.isRequired,
  loadingPost: PropTypes.bool.isRequired,
  loadingComments: PropTypes.bool.isRequired,
  post: PropTypes.object,
  comments: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  post: selectGetPost(),
  comments: selectGetComments(),
  loadingPost: selectLoadingPost(),
  loadingComments: selectLoadingComments(),
});

const mapDispatchToProps = dispatch => ({
  onGetPost: postId => dispatch(getPostById(postId)),
  onGetComments: postId => dispatch(getCommentsByPostId(postId)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postPage', reducer });
const withSaga = injectSaga({ key: 'postPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostPage);
