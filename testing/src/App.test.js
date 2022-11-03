// Staring  of  31 October  and  1 November  class 

import { render, screen } from '@testing-library/react';
// render => render method is for rendering the component .
// screen =>  In Screen , only my component get rendered .
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// toBeInTheDocument() is a " Matching functions " . there are other Matching functions also present . 


// There are 3 types of testing :-
// (1) Unit testing => Each Component / function working properly or not .
// (2) Integration testing => Combining  more component and checking them .
// (3) End to end (e2e) testing => From opening Closing means checking Completely .


// For testing we use a test library  " Jest "

// For creating testing files we use 3 types of Extensions :
// (1)  .test.js  =>  Most times we used only this
// (2)  .spec.js             (3) __Testing_module__




// Test  Driven  Development :  it is also known as  TDD 
// (1) => we will create all possible senario
// (1) => we will write all Test Cases First .
// (3) =>  Build  Our  Product .












