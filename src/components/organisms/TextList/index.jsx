import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../atoms/Text';

const flex = css`
  ${({ flex }) =>
    flex === 'column' &&
    css`
      flex-direction: column;
    `}
`;

const StyledTextList = styled.div`
  display: flex;
  ${flex}
  justify-content: space-around;
  margin-left: 1rem;
`;

const TextList = ({ flex, list }) => {
  return (
    <StyledTextList key={list[0][0]} flex={flex}>
      {list.map(({ id, text, ...rest }) => {
        return (
          <Text key={id} {...rest}>
            {text}
          </Text>
        );
      })}
    </StyledTextList>
  );
};

export default TextList;
