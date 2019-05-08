/*
  Postpage selectors for post Details & comments of post.
*/

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const PostPageInitialState = state => state.get('postPage', initialState);

const selectLoadingPost = () =>
  createSelector(PostPageInitialState, nextState =>
    nextState.get('loadingPost'),
  );

const selectGetPost = () =>
  createSelector(PostPageInitialState, nextState =>
    // console.log('Next: ', nextState.get('post'));
    nextState.get('post').toJS(),
  );

const selectLoadingComments = () =>
  createSelector(PostPageInitialState, nextState =>
    nextState.get('loadingComments'),
  );

const selectGetComments = () =>
  createSelector(PostPageInitialState, nextState =>
    // console.log('Next: ', nextState.get('comments'));
    nextState.get('comments').toJS(),
  );

export {
  selectLoadingPost,
  selectGetPost,
  selectLoadingComments,
  selectGetComments,
};
