import React, { Component, Fragment } from 'react';
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
import { getPostById, getCommentsByPostId, addComment } from './actions';

import BackButton from '../../components/BackButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import AddCommentModal from './AddCommentModal';
import {
  H,
  PageTitle,
  PostPageWrapper,
  PostCommentWrapper,
  PostContainer,
  PostContent,
  CommentsContainer,
  CommentsContent,
  PageTitleWrapper,
  CommentButton,
  ModalWrapper,
} from './styledElements';

export class PostPage extends Component {
  state = {
    openAddCommentModal: false,
    commentForm: {},
  }
  componentDidMount() {
    const { postId } = this.props.match.params;

    this.postContainer = React.createRef();
    this.props.onGetPost(postId);
    this.props.onGetComments(postId);
  }

  closeAddCommentModal = () => {
    this.setState({ openAddCommentModal: false })
  }

  handleAddCommentModal = () => {
    this.setState({ openAddCommentModal: true })
  }

  handleContentChange = (form) => {
    this.setState({ commentForm: form });
  }

  handleSaveComment = () => {
    const { onAddComment } = this.props;
    const { postId } = this.props.match.params;
    let { commentForm } = this.state;
    const { title, content } = commentForm;

    if (!title || !content) {
      return;
    }
    commentForm = {
      ...commentForm,
      user: {
        id: 100,
        name: 'dummy',
      }
    }
    onAddComment && onAddComment({ postId, comment: commentForm });
    this.setState({ openAddCommentModal: false });
  }

  highlightText = () => {
    const { location } = this.props;

    if (location.search) {
      if ('URLSearchParams' in window) {
        const params = new URLSearchParams(location.search);

        if (params.get('query')) {
          this.highlightSearchedtext(params.get('query'));
        }
      } else {
        
      }
    }
  }

  highlightSearchedtext = (searchQuery) => {
    const elm = this.postContainer.current;

    if (elm) {
      const originalText = elm.innerHTML;
      const keyRegex = new RegExp(searchQuery,'gi');
      const textForChange = originalText;

      let marked = textForChange.replace(keyRegex, `<mark>${searchQuery}</mark>`);
      // elm.innerHTML = marked;	
    }
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
      <Fragment>
      <PostPageWrapper>
        <Helmet>
          <title>Huddl Post Page - Sample post(Frontend Task)</title>
          <meta name="description" content="Sample Post Detail Page" />
        </Helmet>
        <PostCommentWrapper>
          <BackButton to={`/`}>{`Go to Posts`}</BackButton>
          <PostContainer ref={this.postContainer}>
            <PageTitleWrapper>
              <PageTitle>{`Post`}</PageTitle>
              <CommentButton onClick={this.handleAddCommentModal}>{`Add Comment`}</CommentButton>
            </PageTitleWrapper>
            <PostContent>{this.renderPostDetails()}</PostContent>
          </PostContainer>
          <CommentsContainer>
            <PageTitle>{`Comments`}</PageTitle>
            <CommentsContent>{this.renderComments()}</CommentsContent>
          </CommentsContainer>
        </PostCommentWrapper>
      </PostPageWrapper>
        {
          this.state.openAddCommentModal ? (
            <AddCommentModal 
              openAddCommentModal={this.state.openAddCommentModal}
              closeAddCommentModal={this.closeAddCommentModal}
              handleContentChange={this.handleContentChange}
              handleSaveComment={this.handleSaveComment}
              commentForm={this.state.commentForm}
            />
          ) : null
        }
      </Fragment>
    );
  }
}

PostPage.propTypes = {
  onGetPost: PropTypes.func.isRequired,
  onGetComments: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
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
  onAddComment: comment => dispatch(addComment(comment)),
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
