import React, { useEffect, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { reducer } from './reducer';
import { findUserById } from '../../helpers/apis';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
} from './constants';
import UserDetails from './UserDetails';
import {
    UserPageWrapper,
    ErrorMessageWrapper,
} from './styledElements';

function UsersPage(props) {
    const initialState = {
        loading: true,
        user: {},
        errorMessage: null
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
                payload: response
            });
        })
        .catch(err => {
            dispatch({
                type: GET_USER_ERROR,
                payload: err
            });
        })
    }, []);

    const { user, errorMessage, loading } = state;

    return (
        <UserPageWrapper>
            {
                loading && !errorMessage ? (
                    <LoadingIndicator />
                ) : errorMessage ? (
                    <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
                ) : (
                    <UserDetails user={user} />
                )
            }
        </UserPageWrapper>
    );
}

export default withRouter(UsersPage);