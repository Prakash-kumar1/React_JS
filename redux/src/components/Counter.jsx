import { useSelector, useDispatch } from 'react-redux' ;

const Counter = () => {

    // const counter = 1;
    // useSelector - it takes in the global state and 
    //                selects the counter state from it .

    const prakashDispatch = useDispatch() ;

    const counter = useSelector((state) => {
        return state.counter
    })

    const handleIncrement = () => {
        prakashDispatch({"type":"increment", "payload": {"step": 5}})
        // parakashDispatch({"type":"increment", "payload": {"steps": 5}})
    }

    const handleDecrement = () => {
        prakashDispatch({"type":"decrement", "payload": {"step": 10}})
    }

  return (
    <main style={{"textAlign":"center"}}>
        <h1>{counter}</h1>

        <button style={{"margin":"20px"}} onClick={handleIncrement}>Increment</button>
        <button style={{"margin":"20px"}} onClick={handleDecrement}>Decrement</button>

    </main>
  ) ;
} ;

export default Counter ;


