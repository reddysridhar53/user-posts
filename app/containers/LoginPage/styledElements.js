import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 80px);
`;

export const LoginWrapperInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    justify-content: center;
`;

export const LoginContainer = styled.div`
    width: 30em;
    height: 30em;
    background: #fff;
    display: flex;
    border-radius: 0.5em;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const LoginForm = styled.form`
    padding: 2em;

`;

export const Button = styled.button`
    background: rgba(214, 45, 32, 0.8);
    height: 50px;
    padding: 0 1em;
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 600;
    color: #fff;
    border-radius: 2.5em;
    border: 1px solid rgba(214,45,32, 1);;
    cursor: pointer;
    transition: 250ms all ease-in;
    &:hover {
        background: rgba(214, 45, 32, 1);
        transform: translateY(-1px);
    }
`;

export const Error = styled.div`
    font-size: 1em;
    text-align: center;
    color: red;
`;