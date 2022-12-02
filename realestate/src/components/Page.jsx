import React from "react";
import {Favourite} from "./Favourite";
import '../App.css'

export const Page = ({ favProperty, setfavProperty }) => {

  return (
    <>
    <div id="property_container">
      {favProperty.map(({ image, price, address, PropertyName, bathroom, bed, area, city, id }) => {
        return (
          <>
            <div id="property_box">
              <div id="image">
                <img src={image} alt="" />
              </div>
              <div id="price_heart">
                <p><strong>{price}</strong>/month</p>
                <Favourite id={id} data={favProperty} favProperty={favProperty} setfavProperty={setfavProperty} />
              </div>
              <h3 id="property">{PropertyName}</h3>
              <p id="adress" >{address}</p>
              <div id="services">
                <p><i className="fa fa-bed"></i>{bed} Bed</p>
                <p> <i className="fa fa-shower"></i>{bathroom} Bathroom</p>
                <p> <i className="fa fa-circle-o"></i>{area} Area</p>

              </div>
            </div>
          </>
        )
      })}
      </div>
    </>
  )
}
