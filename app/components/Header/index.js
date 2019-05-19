import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import NavBar from './NavBar';

function Header({ isLoggedIn, handleLogoutClick }) {
  const sticky = false;
  // eslint-disable-next-line global-require
  const logoImg = require('.../../images/logo.png');

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


App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
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