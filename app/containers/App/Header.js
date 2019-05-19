import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
    selectGetLoggedIn,
} from './selectors';
import { setLogout } from './actions';
import saga from './saga';
import reducer from './reducer';
import NavBar from 'components/Header/NavBar';

function Header({ isLoggedIn, onLogout }) {
  const sticky = false;
  // eslint-disable-next-line global-require
  const logoImg = require('.../../images/logo.png');
  const handleLogoutClick = () => {
    onLogout && onLogout();
  }

  return (
    <Fragment>
      <NavBar
        sticky={sticky}
        logoImg={logoImg}
        showLogout={isLoggedIn}
        handleLogout={handleLogoutClick}
      />
    </Fragment>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
}


Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectGetLoggedIn()
});

const mapDispatchToProps = dispatch => ({
  onLogout: googleId => dispatch(setLogout(googleId)),
})

const withReducer = injectReducer({ key: 'appPage', reducer });
const withSaga = injectSaga({ key: 'appPage', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Header);