import './App.css';

// There are 4 main part in Redux
// store => Globalized State (there is every data and states is present).

// Actions => like Increment , decrement and anything 
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
// Reducers => Check which action is performing and modify and Update the store .
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1 ;
    case 'DECREMENT':
      return state - 1 ;
    default :
      return state ;
  }
}

// Dispatch => Execute action

function App() {
  return (
    <div>
      <h1>Prakash Kumar</h1>
    </div>
  );
}

export default App;
