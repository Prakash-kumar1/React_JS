import { Greet } from "./Greet";
import { render, screen } from "@testing-library/react";


describe("Greet", () => {
  test("renders properly", () => {
    render(<Greet />);
    // const text = screen.getByText("Hello");          //By Default
    const text = screen.getByText("Guest");
    expect(text).toBeInTheDocument();
  });
});

// using  .only  we can run a  Single  command .  
// using  .skip  we can Skip a  command .  

describe("Greet with name", () => {
  test("renders properly with name", () => {
    render(<Greet name={"Air campus"} />);
    const text = screen.getByText("Hello Air campus");
    expect(text).toBeInTheDocument();  
// expect is called "Assert Statement"
  });
});



