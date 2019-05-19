import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_STATS,
  GET_USER_STATS_SUCCESS,
  GET_USER_STATS_ERROR,
} from './constants';

const constructChart = (data) => {
  const posts = data[0];
  const comments = data[1];

  return [
    {
      value: posts.length,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Posts"
    },
    {
      value: comments.length,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Comments"
    },
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case GET_USER_STATS:
      return {
        ...state,
        loadingUserStats: true,
        errorMessage: null,
      };
    case GET_USER_STATS_SUCCESS:
      return {
        ...state,
        loadingUserStats: false,
        userStats: constructChart(action.payload),
      };
    case GET_USER_STATS_ERROR:
      return {
        ...state,
        loadingUserStats: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
