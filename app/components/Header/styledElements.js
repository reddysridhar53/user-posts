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

export const LogoutButton = styled.button`
  color: white;
  align-self: center;
  position: absolute;
  right: 0;
  transition: 250ms all ease-in;
  transform: translateX(-50px);
  height: 4rem;
  width: 16rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px, rgba(0, 0, 0, 0.23) 0px 1px 3px;
  background: linear-gradient(to right, rgb(134, 93, 234), rgb(183, 110, 255));
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
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

export const NavCenter=styled.div`
  display: flex;
`;
