import React, { useEffect, useReducer, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { reducer } from './reducer';
import { findUserById, getUserStats } from '../../helpers/apis';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_STATS,
  GET_USER_STATS_SUCCESS,
  GET_USER_STATS_ERROR,
} from './constants';
import UserDetails from './UserDetails';
import UserStatsDetails from './UserStatsDetails';
import { UserPageWrapper, ErrorMessageWrapper, UserDetailsStatsWrapper } from './styledElements';

function UsersPage(props) {
  const initialState = {
    loading: true,
    user: {},
    errorMessage: null,
    loadingUserStats: false,
    userStats: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const userId = props.match.params.userId;

  useEffect(() => {
    dispatch({
      type: GET_USER,
    });
    findUserById(userId)
    .then(response => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: response,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_ERROR,
        payload: err,
      });
    });
    dispatch({
      type: GET_USER_STATS,
    });
    getUserStats(userId)
    .then(response => {
      dispatch({
        type: GET_USER_STATS_SUCCESS,
        payload: response,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_STATS_ERROR,
        payload: err,
      });
    });
  }, []);

  const { user, errorMessage, loading, loadingUserStats, userStats } = state;

  return (
    <UserPageWrapper>
      {loading && !errorMessage ? (
        <LoadingIndicator />
      ) : errorMessage ? (
        <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
      ) : (
        <UserDetailsStatsWrapper>
          <UserDetails user={user} />
          <UserStatsDetails userStats={userStats} loading={loadingUserStats} />
        </UserDetailsStatsWrapper>
      )}
    </UserPageWrapper>
  );
}

export default withRouter(UsersPage);
