import React from 'react';
import PropTypes from 'prop-types';
import {
  NavWrapper,
  H,
  Img,
  ImageWrapper,
  LogoutButton,
  NavCenter,
} from './styledElements';
import { GOOGLE_CLIENT_ID } from '../../config';
import { GoogleLogout } from 'react-google-login';

function NavBar({ sticky, logoImg, showLogout, handleLogout }) {
  return (
    <NavWrapper sticky={sticky}>
      <NavCenter>
        <ImageWrapper>
          <Img src={logoImg} alt="Huddl AI" />
        </ImageWrapper>
        <H>Huddl</H>
      </NavCenter>
      {showLogout ? (
        <GoogleLogout
          render={renderProps => (
            <LogoutButton
              onClick={renderProps.onClick}
            >{`Logout`}</LogoutButton>
          )}
          clientId={GOOGLE_CLIENT_ID}
          onLogoutSuccess={handleLogout}
        />
      ) : null}
    </NavWrapper>
  );
}

NavBar.defaultPorps = {
  sticky: false,
};

NavBar.propTypes = {
  sticky: PropTypes.bool,
  logoImg: PropTypes.string,
};

export default NavBar;
