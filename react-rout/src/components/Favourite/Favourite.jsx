import React, { useState } from "react";

import "./favourite.css";

export const Favourite = ({ id, data, favProperty, setFavProperty }) => {
  const [color, setcolor] = useState(false);
  let newArray = [];

  const addFavourite = (e) => {
    const property = data.find((item) => item.id === id);
    setFavProperty([...favProperty, property]);
    newArray.push(property);
    setcolor(!color);
  };

  const removeFavourite = () => {
    let removeFav = favProperty;
    removeFav = removeFav.filter((remove) => remove.id !== id);
    setFavProperty(removeFav);
    setcolor(false);
  };

  return (
    <>
      <div id="fevIcon">
        <i
          className={`fa fa-heart${!color ? "-o" : ""}`}
          value={id}
          onClick={color ? removeFavourite : addFavourite}
        />
      </div>
    </>
  );
};
