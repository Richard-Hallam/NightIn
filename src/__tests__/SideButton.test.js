import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideButton from '../components/matchButtons';

test('SideButton component renders correctly', () => {
  const { container } = render(<SideButton />);
  expect(container).toMatchSnapshot();
});