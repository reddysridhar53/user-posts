import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
  text-align: center;
  height: 8em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  font-weight: 500;
  transition: 250ms height ease-in;
  background: linear-gradient(
    60deg,
    rgb(162, 103, 214) 36%,
    rgb(83, 77, 253) 80%
  );
  box-shadow: 2px 4px 2px 0px rgba(0, 0, 0, 0.05);
  ${({ sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      height: 6em;
      ${ImageWrapper} {
        max-width: 4em;
      }
      ${H} {
        font-size: 1.5em;
      }
    `};
`;

export const H = styled.h1`
  font-size: 2em;
  color: #fff;
  text-transform: capitalize;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  max-width: 6em;
`;
export const Img = styled.img`
  max-width: 100%;
`;
