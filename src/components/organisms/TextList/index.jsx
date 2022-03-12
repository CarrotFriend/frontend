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

const TextList = ({ flex, data }) => {
  const { id, title, regdate, tag, ...rest } = data;
  return (
    <StyledTextList key={id} flex={flex}>
      <Text key={id} size="medium" {...rest}>
        {title}
      </Text>
      <Text key={id + 1} {...rest}>
        {regdate}
      </Text>
      <Text key={id + 2} {...rest}>
        {tag}
      </Text>
    </StyledTextList>
  );
};

export default TextList;
