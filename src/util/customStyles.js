import { css } from 'styled-components';

const customStyles = css`
  ${({ customStyles }) =>
    // custom할 Style의 배열을 받아 reduce 함수로 하나의 css 문자열로 만듦
    customStyles &&
    customStyles.reduce((acc, { key, value }) => {
      return (
        acc +
        `
          ${key}: ${value};
        `
      );
    }, css``)}
`;

export default customStyles;
