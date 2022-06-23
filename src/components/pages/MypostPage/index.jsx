import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MypostPage = () => {
  const navigate = useNavigate();
  return <StyledMypostPage>hihi</StyledMypostPage>;
};

const StyledMypostPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 6rem;
`;

export default MypostPage;
