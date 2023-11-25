import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from '../components/title';

test('Title component renders correctly', () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});