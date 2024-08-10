import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import App1 from './App1';
import App2 from './App2';

test('renders learn react link', () => {
  render(<App />);
  render(<App1 />);
  render(<App2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
