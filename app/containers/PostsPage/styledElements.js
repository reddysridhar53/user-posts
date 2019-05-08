import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostPageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const H = styled.h1`
  font-size: 2.4em;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  text-transform: capitalize;
`;
export const PostCommentWrapper = styled.div`
  width: 100%;
  max-width: 964px;
  margin: 0 auto;
  @media screen and (max-width: 964px) {
    padding: 10px;
  }
`;
export const PostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const PostContent = styled.div`
  font-size: 1.4em;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const CommentsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const CommentsContent = styled.div`
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const PostItem = styled.div`
  background: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.01);
`;
export const PostTitle = styled.h2`
  font-size: 2em;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
  margin-bottom: 0.5em;
  @media screen and (max-width: 964px) {
    font-size: 1.5em;
  }
`;
export const PostBody = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
  text-transform: capitalize;
  @media screen and (max-width: 964px) {
    font-size: 1.2em;
  }
`;
export const PostUser = styled(Link)`
  color: rgb(83, 77, 253);
  font-weight: 500;
  font-size: 1.6em;
  display: flex;
  align-self: flex-end;
  transition: 250ms all ease-in;
  margin-top: 0.5em;
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    color: rgb(162, 103, 214);
  }
  @media screen and (max-width: 964px) {
    font-size: 1.2em;
  }
`;
export const PageTitle = styled.div`
  display: flex;
  flex: 1;
  font-size: 2em;
  margin: 1em 0 0.5em;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  text-transform: capitalize;
`;
