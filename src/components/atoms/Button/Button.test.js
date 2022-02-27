import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('renders a button with or without text', () => {
  it('renders without text', () => {
    const { getByTestId } = render(<Button />);
    const btn = getByTestId('button');
    expect(btn.textContent).toBe('');
  });
  it('renders with text', () => {
    const { getByText } = render(<Button text="로그인" />);
    getByText('로그인');
  });
});

// let container = null;
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe('renders a button with or without text', () => {
//   it('renders without text', () => {
//     act(() => {
//       render(<Button />, container);
//     });

//     const button = document.querySelector('[data-testid=button]');
//     expect(button.innerHTML).toBe('');
//   });

//   it('renders with text', () => {
//     act(() => {
//       render(<Button text="로그인" />, container);
//     });

//     // const button = document.querySelector('[data-testid=button]');
//     // expect(button.innerHTML).toBe('로그인');
//     // textContent는 해당 태그 모든 자손의 text 가져옴
//     expect(container.textContent).toBe('로그인');
//   });
// });
