import { Counter3 } from "./Counter3";
import { render, screen} from "@testing-library/react" ;
import user from "@testing-library/user-event" ;


describe('Counter 3', () => {
    test('renders properly' , () =>{
        render(<Counter3 count={10} />) ;
        const countElement = screen.getByRole("heading" , {
            level: 2,
        }) ;
        expect(countElement).toHaveTextContent("10") ;

        const headingElement = screen.getByText("Counter-3") ;
        expect(countElement).toBeInTheDocument() ;
    }) ;

    test('renders properly with handlers', () =>{
        const handleIncrement = jest.fn() ;
        const handleDecrement = jest.fn() ;

        render(
            <Counter3 count={0} 
            handleIncrement = {handleIncrement}  
            handleDecrement = {handleDecrement} />
        ) ;

        const incrementBtn = screen.getByRole('button' , {
            name: "increment"
        }) ;
         
        const decrementBtn = screen.getByRole('button' , {
            name: "decrement"
        }) ;

        user.click(incrementBtn) ;
        user.click(decrementBtn) ;

        expect(handleIncrement).toHaveBeenCalledTimes(1) ;
        expect(handleDecrement).toHaveBeenCalledTimes(1) ;

    }) ;

}) ;






















