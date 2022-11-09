import { screen, render } from "@testing-library/react" ;
import {Skills} from "./Skills"

// For grouping in test , we use " describe "

describe("Skills component", () => {
    const  skills = ["HTML","CSS","JavaScript","React"] ;
    
    test("renders correctly", () => {
        render(<Skills skills={skills}/>) ;
        const listElement = screen.getByRole("list") ;
        expect(listElement).toBeInTheDocument() ;
    }) ;

   
    test("renders all skills", () => {
        render(<Skills skills={skills} />);
        const listElements = screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length);
    });

    test("renders Log In button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button" , {
            name : "Log in" ,
        }) ;
        expect(loginButton).toBeInTheDocument() ;
    }) ;

    
})










