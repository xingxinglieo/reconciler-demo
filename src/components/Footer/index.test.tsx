import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('Footer test', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();

  const footerElement = screen.getByText(/Powered by IES/i);
  expect(footerElement).toBeInTheDocument();
});