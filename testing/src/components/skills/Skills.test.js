//#####@@@@@@@@ =>>  8 November Tuesday  Sessions  <<== @@@@@#####

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
            name : "Sign In" ,
        }) ;
        expect(loginButton).toBeInTheDocument() ;
    }) ;


    test("not render start learning button" , () => {
        render(<Skills skills={skills}/>)
        const startLearningBtn = screen.queryByRole("button" , {
            name : "Start Learning"
        }) ;
        expect(startLearningBtn).not.toBeInTheDocument() ;
    });

    test("start learning should display after some delay", async () => {
        render(<Skills skills={skills} />);
        const startLearningBtn = await screen.findByRole(
          "button",
          {
            name : "Start Learning",
          },
          {
            timeout: 2000,
          }
        );
        // default time is 1sec , means it will wait for only 1 second
        expect(startLearningBtn).toBeInTheDocument();
      });

}) ;





