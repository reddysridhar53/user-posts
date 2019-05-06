import styled , { css } from 'styled-components';

export const UserPageWrapper = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    background: #f5f7f9;
`;

export const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const UserDetailsWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 964px;
    margin: 0 auto;
`;

export const UserItemRow = styled.div`
    display: flex;
    margin-bottom: 1em;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const UserItemCol = styled.div`
    display: flex;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.8);
    font-size: 2em;
    flex: 1 0 75%;
    ${({ main }) => 
    main && 
    css`
        flex: 1 0 25%;
        font-size: 1.8em;
        color: rgba(0, 0, 0, 0.6);
    `};
`;

export const ErrorMessageWrapper = styled.div`
    display: flex;
`;
