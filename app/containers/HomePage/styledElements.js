/*
    Styles Components to Design Home Page Components and Sections.
*/

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 964px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const InputContainer = styled.div`
  padding: 2em 1em;
  position: relative;
`;

export const UsersContainer = styled.div`
  position: absolute;
  z-index: 2;
  background: #fff;
  border-radius: 0.5em;
  min-height: 10em;
  max-height: 20em;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  width: calc(100% - 2em);
  left: 1em;
  top: 8.1em;
  transition: 250ms all ease-in;
  transform: translateY(10%);
  overflow: hidden;
  overflow-y: auto;
  ${({ visible }) =>
    visible &&
    css`
      height: auto;
      transform: translateY(0%);
    `};
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 1em;
  width: 100%;
  height: 4em;
  border: 0;
  font-size: 1.5em;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
`;

export const PostsContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PostCard = styled.div`
  width: 33.3%;
  padding: 1em;
  display: flex;
  flex: 1 0 33.3%;
  &:nth-child(3n + 1) {
    padding-left: 0;
  }
  @media only screen and (max-width: 964px) and (min-width: 424px) {
    width: 50%;
    flex: 1 0 50%;
  }
  @media only screen and (max-width: 424px) {
    width: 100%;
    padding: 1em 0;
    flex: 1 0 100%;
  }
`;

export const PostItem = styled.div`
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  background: #fff;
  flex-direction: column;
  transition: 250ms all ease-in;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 4px 8px 8px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;

export const PostTitle = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 1em;
  text-decoration: none;
  transition: 250ms all ease-in;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const PostActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostComment = styled.div`
  font-size: 1.4em;
  color: rgba(0, 0, 0, 0.6);
`;

export const PostUserName = styled(Link)`
  color: rgb(83, 77, 253);
  font-weight: 500;
  font-size: 1.6em;
  transition: 250ms all ease-in;
  text-decoration: none;
  &:hover {
    color: rgb(162, 103, 214);
  }
`;

export const UserLink = styled(Link)`
  padding: 1em;
  display: flex;
  align-items: left;
  cursor: pointer;
  font-size: 1.8em;
  text-trasnform: capitalize;
  color: rgb(162, 103, 214);
  &:hover {
    color: rgb(83, 77, 253);
    background: #f5f5f5;
  }
`;
