import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AccountEditPage = () => {
  const navigate = useNavigate();

  return <StyledAccountEditPage>헤헤</StyledAccountEditPage>;
};

const StyledAccountEditPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 6rem;
`;

export default AccountEditPage;
