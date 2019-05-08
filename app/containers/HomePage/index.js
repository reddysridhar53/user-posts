import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import debounce from 'lodash/debounce';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  selectPosts,
  selectFindUsers,
  selectLoadingPosts,
  selectFindingUsers,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPosts, findUsers } from './actions';

import LoadingIndicator from '../../components/LoadingIndicator';
import PostItemDetails from './PostItemDetails';
import {
  PageTitle,
  HomePageWrapper,
  InputContainer,
  TextInput,
  PostsContainer,
  PostsContent,
  UserLink,
  UsersContainer,
  LoaderWrapper,
} from './styledElements';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends PureComponent {
  state = {
    query: '',
    showUserListContainer: '',
  };

  constructor(props) {
    super(props);
    this.debounceSearch = debounce(this.debounceSearch, 500);
    this.userListContainer = React.createRef();
    document.addEventListener('click', this.handleOutSideClick, false);
  }

  debouncedSearch(fn, time) {
    // eslint-disable-next-line func-names
    return function() {
      const context = this;
      // eslint-disable-next-line prefer-rest-params
      const args = arguments;
      // eslint-disable-next-line func-names
      const later = function() {
        timeout = null;
        if (!time) fn.apply(context, args);
      };
      const callNow = !time && !timeout;
      clearTimeout(timeout);
      let timeout = setTimeout(later, time);
      if (callNow) fn.apply(context, args);
    };
  }

  componentDidMount() {
    this.props.onGetPosts();
  }

  handleSearchQueryChange = e => {
    const query = e.currentTarget.value;

    this.setState({ showUserListContainer: true });
    if (!query) return;
    this.setState({ query });
    this.debounceSearch();
  };

  handleOutSideClick = event => {
    if (
      event.target &&
      this.userListContainer && this.userListContainer.current && 
      !this.userListContainer.current.contains(event.target) &&
      this.state.showUserListContainer
    ) {
      this.setState({ showUserListContainer: false });
    }
  };

  handlePostClick = (postId) => {
    const { history } = this.props;

    history.push(`/posts/${postId}`);
  }

  debounceSearch = () => {
    const { onFindUsers } = this.props;

    onFindUsers(this.state.query);
  };

  renderPosts = () => {
    const { posts, loadingPosts } = this.props;

    if (loadingPosts) {
      return <LoadingIndicator />;
    }
    return posts.map(post => {
      const {
        id: postId,
        title,
        commentIds = [],
        user: { name, id: userId },
      } = post;
      const totalComments = commentIds.length;
      const commentsString =
        totalComments === 0
          ? 'No Comments'
          : totalComments > 1
            ? `${totalComments} Comments`
            : '1 Comment';

      return (
        <PostItemDetails 
          key={postId}
          title={title}
          postId={postId}
          name={name}
          userId={userId}
          onPostClick={this.handlePostClick}
          commentsString={commentsString}
        />
      );
    });
  };

  renderUsers = () => {
    const { users, findingUsers } = this.props;
    if (findingUsers) {
      return (
        <LoaderWrapper>
          <LoadingIndicator mini />
        </LoaderWrapper>
      );
    }
    if (!findingUsers && this.state.query && !users.length) {
      return (
        <LoaderWrapper>
          {`No Users found with query ${this.state.query}`}
        </LoaderWrapper>
      );
    }
    return users.map(user => {
      const { id, name } = user;
      return (
        <UserLink key={id} to={`/users/${id}`}>
          {name}
        </UserLink>
      );
    });
  };

  render() {
    const { users } = this.props;

    return (
      <HomePageWrapper>
        <Helmet>
          <title>Huddl Home Page - Sample posts(Frontend Task)</title>
          <meta name="description" content="Sample Posts List" />
        </Helmet>
        <InputContainer ref={this.userListContainer}>
          <TextInput
            onChange={this.handleSearchQueryChange}
            placeholder="Search for users"
          />
          {this.state.showUserListContainer ? (
            <UsersContainer
              visible={!!users.length || this.state.showUserListContainer}
            >
              {this.renderUsers()}
            </UsersContainer>
          ) : null}
        </InputContainer>
        <PostsContainer>
          <PageTitle>{`Posts`}</PageTitle>
          <PostsContent>{this.renderPosts()}</PostsContent>
        </PostsContainer>
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  onGetPosts: PropTypes.func.isRequired,
  onFindUsers: PropTypes.func.isRequired,
  loadingPosts: PropTypes.bool.isRequired,
  findingUsers: PropTypes.bool.isRequired,
  posts: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  users: selectFindUsers(),
  loadingPosts: selectLoadingPosts(),
  findingUsers: selectFindingUsers(),
});

const mapDispatchToProps = dispatch => ({
  onGetPosts: () => dispatch(getPosts()),
  onFindUsers: query => dispatch(findUsers(query)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
