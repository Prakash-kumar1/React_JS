import { render, screen } from "@testing-library/react" ;
import { Counter2 } from "./Counter2";


describe("Counter2 Element" , ()=> {
    test("renders Correctly" , () =>{
        render(<Counter2/>)
        const countElement = screen.getByRole("heading" , {name: /0/i}) ;
        expect(countElement).toBeInTheDocument() ;
        const incrementBtn = screen.getByRole("button" , {
            name : "Add" ,
        }) ;
        expect(incrementBtn).toBeInTheDocument() ;

        const decrementBtn = screen.getByRole("button" , {
            name : "Subtract" ,
        }) ;
        expect(decrementBtn).toBeInTheDocument() ;

    })


    test("renders 0 properly", () => {
        render (<Counter2/>) ;
        const countElement = screen.getByRole("heading" , {name: /0/i}) ;
    expect(countElement).toHaveTextContent("0") ;
    }) ;

    



}) ;





