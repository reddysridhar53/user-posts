import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../config';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { selectLoggingIn, selectGetLoggedIn } from './selectors';
import { setLogin } from './actions';
import saga from './saga';
import reducer from '../App/reducer';
import {
  LoginWrapper,
  LoginWrapperInner,
  PageTitle,
  LoginForm,
  LoginContainer,
  Button,
  Error,
} from './styledElements';

class LoginPage extends Component {
  state = {
    error: '',
  };
  constructor(props) {
    super(props);
  }

  onLoginSuccess = res => {
    const { onLogin } = this.props;

    onLogin && onLogin(res.googleId);
  };

  onLoginFailure = err => {
    this.setState({
      error: 'Something went wrong. Please try after sometime.',
    });
  };

  render() {
    const { location, isLoggedIn, loggingIn } = this.props;
    const from = location.state.from ? location.state.from.pathname : '/';

    if (isLoggedIn) {
      return <Redirect to={{ pathname: from }} />;
    }

    return (
      <LoginWrapper>
        <LoginWrapperInner>
          <LoginContainer>
            <PageTitle>Login</PageTitle>
            <LoginForm>
              <GoogleLogin
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >{`Login with google`}</Button>
                )}
                clientId={GOOGLE_CLIENT_ID}
                onSuccess={this.onLoginSuccess}
                onFailure={this.onLoginFailure}
              />
              {this.state.error ? <Error>{this.state.error}</Error> : null}
            </LoginForm>
          </LoginContainer>
        </LoginWrapperInner>
      </LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loggingIn: selectLoggingIn(),
  isLoggedIn: selectGetLoggedIn(),
});

const mapDispatchToProps = dispatch => ({
  onLogin: googleId => dispatch(setLogin(googleId)),
});
const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
