// @@@###$$$%%%^^&&&***   Forms    @@@###$$$%%%^^&&&***  


// HTML form elements work a little bit differently from other DOM elements in React , because form elements
// naturally keep some internal state . 
// In HTML , form elements such as <input> , <textarea> and <select> typically maintain their own state  and update
// it based on user input . In React , mutable (changeable) state is typically kept in the state property of 
// components , and only updated with setState() . 


// (1) => Controlled Component :=>  the component which controlled whole form ( like <input> , <textarea> and <select> )
//                                  Form has the default HTML form behavior of browsing to a new page when the user
//                                  submits the form . if you want this behaviour in react , it just works .
//  But in most cases , it's convenient  to have a JS function that handles the submission of the form and has
//  Access to the data that the user entered into the form . the standard  way to achieve this is with a 
//  Technique  called  " Controlled Components "  .
//  In Controlled Components , form data is handled by a  React Component .


// <<===>> When use Controlled  components -- : you need  to write an event handler for every way your data can 
//                                              change  and pipe all of the input state through  React Component .



// (1) => Un-Controlled Component :=>   In Controlled Components , form data is handled by a  React Component But 
//                                   In Un-Controlled Components , form data is handled by  the  DOM  itself .
//                                   To write an  Un-Controlled Components , instead of writting an event handler
//                                   for every state update , you can use a ref to get form values from the DOM .


// <<===>> When use Un-Controlled  components -- : you do not need  to write an event handler for every way your 
//                                          data can change  and pipe all of the input state through  React Component .
//            Converting a pre-existing  codebase  to react , or  integrating a React application with  a
//             non - React  Library .


// Definition of " refs " :- Refs provide a way to access DOM Nodes or React element in the Render method .

// <<===>> <<===>>  when to use Refs :-  (1) Triggering  imperative  animations
//                                     (2)  Managing Focus , text-Selection , or media playback .
//                                     (3)  Intergrating with 3rd party DOM-libaries .


// Creating  Refs ==>>  Refs are created using   React.createRef()  and  attached  to React elements  via the 
//                       ref  attribute . Refs  are commonly assigned to an instance property when a component
//                       is contructed . so, they can be referenced  throughout the component .


// Accessing  Refs  ==>>  when a ref is passed to an element in render , a refernce to the node becomes accessible
//                       at the current attribute to the ref . the value of ref differs  depending on the type 
//                         of node .

// Un-Controlled  components is not important but you can read from  => " Geeky Shows "





