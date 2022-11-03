import { render, screen } from '@testing-library/react';
// Render  method is for rendering the component 
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// There are 3 types of testing :-
// (1) Unit testing => Each Component / function working properly or not .
// (2) Integration testing => Combining  more component and checking them .
// (3) End to end (e2e) testing => From opening Closing means checking Completely .


// For testing we use a test library  " Jest "

// For creating testing files we use 3 types of Extensions :
// (1) .test.js  =>  Most times we used only this
// (2)  .spec.js             (3) __Testing_module__


