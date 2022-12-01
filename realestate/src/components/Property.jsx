import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Footer } from "./Footer";
// import {Favourite} from "./Favourite";

import '../App.css'

export const Property = ({favProperty,setfavProperty}) => {

  const [SearchedData, SetSearchedData] = useState([]);

  const [data, SetData] = useState([]);
  const [query, setquery] = useState("");

  const [item, setItem] = useState([])

  const [price, setprice] = useState({ "lowerlimit": null, "upperlimit": null, })

  const [filter, setfilter] = useState({
    "Location": "",
    "Type": "",
    "date": "",
  })


  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/houseDetails")
      .then((response) => {
        SetData(response.data);
        setItem(response.data)
        SetSearchedData(response.data)
      })
  }, []) 


  useEffect(() => {
    SetSearchedData(item.filter(user => user.PropertyName.toLowerCase().includes(query)))
    SetData(item.filter(user => user.PropertyName.toLowerCase().includes(query)))
  }, [query])

  const handleChange = (e) => {
    setfilter({ ...filter, [e.target.name]: e.target.value })
  }

  const handlePriceChange = (e) => {
    setprice({
      lowerlimit: parseInt(e.target.value.split("-")[0]),
      upperlimit: parseInt(e.target.value.split("-")[1])
    })
  }

  const convertToNumber = (number) => {
    return (parseInt(number.split("$")[1].replace(/,/g, "")))
  }

  const filterSearch = () => {
    const filteredData = SearchedData.filter((result) => {
      if ((filter.Location === "" || result.city === filter.Location) &&
        (filter.Type === "" || result.category === filter.Type) &&
        (((price.lowerlimit === null) || (price.upperlimit === null) || (price.lowerlimit < convertToNumber(result.price))) && (convertToNumber(result.price) < price.upperlimit))) {
        return result;
      }
    })
    SetData(filteredData)
  }


  return (
    <>
      <div id="main_container">
        <div id="content_container">
          <main>
            <div id="Searchbar">
              <h1 style={{color : "red"}}>Don’t wait to buy real estate, buy real estate and wait.</h1>
              <input type={"text"} placeholder="Search" onChange={(e) => setquery(e.target.value)} />
            </div>

            <div id="filter_section">
              <div>
                <p>Location</p>
                <select name="Location" onChange={handleChange}>
                  <option value="All">All</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Noida">noida</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Patna">Patna</option>
                </select>
              </div>

              <div ><p>Date-Time</p><input type={"date"} name="date" onChange={handleChange} /></div>

              <div>
                <p>Price</p>
                <select name="price" onChange={handlePriceChange}>
                <option value="" disabled> select</option>
                  <option value="5000-8000">$5000-8000</option>
                  <option value="2000-4500">$2000-4500</option>
                  <option value="100-900">$100-900</option>
                  <option value="7200-12000">$7200-12000</option>
                  <option value="20000-62000">$20000-62000</option>
                </select>
              </div>

              <div>
                <p>Property type</p>
                <select name="Type" onChange={handleChange}>
                <option value="" disabled> select</option>                 
                  <option value="Palace">Palace</option>
                  <option value="Bunglow">Bunglow</option>
                  <option value="FarmHouse">FarmHouse</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
              
              <div>
                <button onClick={filterSearch}>Apply</button>
              </div>
            </div>

            <div id="property_container">

              {data.map(({ image, price, address, PropertyName, bathroom, bed, area, city, id }) => {
                return (
                  <>
                    <div id="property_box" className={city} key={id}>
                      <div id="image">
                        <img src={image} alt="" />
                      </div>
                      <div id="price_heart">
                        <p><strong>{price}</strong>/month</p>
                        {/* <Favourite id={id} data={data} favProperty={favProperty} setfavProperty={setfavProperty} /> */}
                      </div>
                      <h3 id="property">{PropertyName}</h3>
                      <p id="adress">{address}</p>
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
          </main>
        </div>
<Footer />
      </div>
    </>
  )

}

