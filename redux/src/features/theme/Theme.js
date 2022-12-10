import { useState } from "react" ;
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";

export const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch() 

  return (
    <div>
        <input type="text" onChange={(e) => setColor(e.target.value)}/>
        <button onClick={() => { dispatch(changeTextColor(color)) }}>Change Text Color</button>
        <h2>{color}</h2>
    </div>
  )
}
