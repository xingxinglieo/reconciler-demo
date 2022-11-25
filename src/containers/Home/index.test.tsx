import { render, screen } from '@testing-library/react';
import React from 'react';
import Index from './Home';

test('Index test', () => {
  const { asFragment } = render(<Index />);
  expect(asFragment()).toMatchSnapshot();

  const edenElement = screen.getByText(/Eden!/i);
  expect(edenElement).toBeInTheDocument();

  const linkElement = screen.getByText(/Documentation/i);
  expect(linkElement).toBeInTheDocument();

  const gitLabLinkElement = screen.getByText(/GitLab/i);
  expect(gitLabLinkElement).toBeInTheDocument();
});