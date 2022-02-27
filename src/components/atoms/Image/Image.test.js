import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Image from './index';

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

describe('renders a image with right src or wrong src or without src', () => {
  it('renders a image with right src', async () => {
    const { getByAltText } = await render(<Image src="/item.jpg" alt="item" />);
    const image = getByAltText('item');

    expect(image.src).toContain('item.jpg');
  });
});
