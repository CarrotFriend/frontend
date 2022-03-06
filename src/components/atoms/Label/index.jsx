import React from 'react';
import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;
const Label = ({ child, target, ...rest }) => {
  return (
    <StyledLabel htmlFor={target} {...rest}>
      {child}
    </StyledLabel>
  );
};

export default Label;
