/*
    Styles Components to Design Home Page Components and Sections.
*/

import styled from 'styled-components';
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
  padding: 20px 10px;
`;

export const TextInput = styled.input`
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 1em;
  width: 100%;
  height: 50px;
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
  padding: 15px;
  display: flex;
  flex: 1 0 33.3%;
`;

export const PostItem = styled(Link)`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: 350ms all ease-in;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 4px 8px 8px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
  }
`;

export const PostTitle = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 2.4em;
  line-height: 1.2;
  margin-bottom: 1em;
  text-decoration: none;
  transition: 250ms all ease-in;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const PostUserName = styled(Link)`
  color: #009688;
  font-weight: 500;
  font-size: 1.8em;
  transition: 250ms all ease-in;
  &:hover {
    color: rgba(#009688 0.8);
  }
`;

export const UserItem = styled.div``;
