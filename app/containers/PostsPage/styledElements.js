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

export const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentButton = styled.button`
  color: white;
  align-self: center;
  transition: 250ms all ease-in;
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

export const ModalWrapper = styled.div`
  font-size: 14px;
`;

export const ModalHeader = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Btn = styled.button`
  transition: 250ms all ease-in;
  outline: 0;
  cursor: pointer;
  font-size: 15px;
  height: 40px;
  padding: 0 2em;
  border-radius: 4px;
`;
export const ModalContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;
export const ModalFooter = styled.div``;
export const SaveCommentButton = styled(Btn)`
  margin-right: 1em;
  background: linear-gradient(to right, rgb(134, 93, 234), rgb(183, 110, 255));
  color: rgba(255, 255, 255, 0.8);
  &:hover {
    transform: translateY(-1px);
    color: rgba(255, 255, 255, 1);
  }
`;
export const CancelButton = styled(Btn)`
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(-1px);
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
`;
export const Input = styled.input`
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 5px 10px;
  outline: none;
  font-size: 15px;
`;
export const TextArea = styled.textarea`
  height: 120px;
  resize: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
export const ModalInner = styled.div`
  padding: 2em;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;