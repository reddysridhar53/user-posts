import React from 'react';
import PropTypes from 'prop-types';
import { NavWrapper, H, Img, ImageWrapper } from './elements';

function NavBar({ sticky, logoImg }) {
  return (
    <NavWrapper sticky={sticky}>
      <ImageWrapper>
        <Img src={logoImg} alt="Huddl AI" />
      </ImageWrapper>
      <H>Huddl</H>
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
