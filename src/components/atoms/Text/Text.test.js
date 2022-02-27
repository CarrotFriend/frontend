import React from 'react';
import { render } from '@testing-library/react';
import Text from './index';

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
