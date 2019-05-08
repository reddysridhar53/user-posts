import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from './constants';

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
    default:
      return state;
  }
};
