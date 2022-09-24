import React from "react";
import "./Class.css"         //importing class.css 



// Functional Component

export const WelcomeFn = () => (
    <h5 className="head">my first file which i am exporting and importing in React.js</h5>
)

// here , i am not importing any CSS , but it will work (className="head" properties , given in app.css and 
// className in app.js)