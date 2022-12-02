import React, { useState } from "react";
import '../App.css'

export const Favourite = ({ id, data, favProperty, setfavProperty }) => {
  const [color, setcolor] = useState(false)
  let fevArray = [];

  function Cart(e) {
    if (color === false) {
      const property = data.find(item => item.id === id);
      setfavProperty([...favProperty, property]);
      fevArray.push(property)
      setcolor(!color)
    }
    else {
      setcolor(!color)
      let removeFev = favProperty;
      removeFev = removeFev.filter((remove) => remove.id !== id)
      setfavProperty(removeFev);
    }

  }

  return (
    <>
      <div id="fevIcon">
        {color ? <i className="fa fa-heart" value={id} onClick={Cart}></i> : <i className="fa fa-heart-o" onClick={Cart}></i>}
      </div>
    </>
  )
}

