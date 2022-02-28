import React from 'react';
import { render } from '@testing-library/react';
import Text from './index';

// 선언적으로 작성되는 간단한 UI는 굳이 테스트는 필요 없음
// 대신 props에 따라 경우의 수가 많이 발생할 수 있다면 필요
// UI는 코드 테스트보다 스토리북 사용

describe('renders a text', () => {
  it('renders with text props', () => {
    const { getByText } = render(<Text text="당근친구" />);
    getByText('당근친구');
  });

  it('renders without text props', () => {
    const { getByTestId } = render(<Text />);
    const text = getByTestId('text');
    expect(text.textContent).toBe('');
  });
});
