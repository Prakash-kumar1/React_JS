import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// There are 3 types of testing :-
// (1) Unit testing => Each Component / function working properly or not .
// (2) Integration testing => 