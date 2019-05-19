import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { selectGetLoggedIn } from './selectors';

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            rest.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    )
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
    isLoggedIn: selectGetLoggedIn()
});

const withReducer = injectReducer({ key: 'privateRoute', reducer });
const withConnect = connect(mapStateToProps, {});

export default compose(
    withReducer,
    withConnect
)(PrivateRoute);
