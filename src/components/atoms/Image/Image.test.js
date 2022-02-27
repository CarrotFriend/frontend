import React from 'react';
import { render } from '@testing-library/react';
import Image from './index';

describe('renders a image', () => {
  it('renders a image with right source', () => {
    const { getByAltText } = render(<Image src="/item.jpg" alt="item" />);
    const image = getByAltText('item');
    expect(image.src).toContain('item.jpg');
  });

  it('renders a image without source', () => {
    const { getByAltText } = render(<Image alt="item" />);
    const image = getByAltText('item');
    expect(image.src).toBe('');
  });

  it('renders a image without alt', () => {
    const { getByRole } = render(<Image src="/item.jpg" />);
    const image = getByRole('img');
    expect(image.alt).toBe('');
  });
});
