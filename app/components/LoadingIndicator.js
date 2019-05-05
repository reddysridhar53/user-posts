import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 8px solid #f5f7f9;
  border-radius: 50%;
  border-top: 8px solid rgb(83, 77, 253);
  width: 60px;
  height: 60px;
  animation: ${rotate} 2s linear infinite;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoadingIndicator() {
  return (
    <LoadingWrapper>
      <Loader />
    </LoadingWrapper>
  );
}

export default LoadingIndicator;
