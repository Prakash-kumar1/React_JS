import React from "react";
import "./Main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Like from "./Like";
// import { type } from "@testing-library/user-event/dist/type";

function Main() {
  const [data, setData] = useState([]);
  let[loading,setLoading]= useState(false)
  let [search, setSearch] = useState("");
  let [filtered, setfilteredData] = useState([]);
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      setLoading(false)
      console.log(response.data.articles);
      setfilteredData([data,...response.data.articles]);
    }
    getData();
  }, []);
  let handleDelete = (title)=>{
    let newArr = filtered.filter((x)=> x.title!==title)
    setfilteredData(newArr)
  }
  
  useEffect(() => {
    let searched = data.filter((item) => {
      if (item.title) {
        return item.title.includes(search);
      }
    });
    setfilteredData(searched);
  }, [search]);

  return (
    <div className="wrapper">
      <Header />
      {loading?<img className="loader_img" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />:
      <div className="wrapper_of_news">
          <div className="search_div">
        <input onChange={(e)=>{
         setSearch(e.target.value)
        }}
          placeholder="Search for News"
          className="input_search"
          type="text"
        />
        <button className="search_btn">search</button>
      </div>
      {filtered.map((item) => {
        if(item.urlToImage){
        return (
          <div id={item.title} className="main">
            <h1 className="heading">{item.title}</h1>
            <p>{item.author}</p>
            <img className="image" src={item.urlToImage} alt="Not found" />
            <p>{item.content} </p>
            <div className="buttons">
           
                <Like/>

              <button className="delete_btn" id={item.title} onClick={()=>{
                handleDelete(item.title)
              }}>Delete</button>
            </div>
          </div>
        );
      }})}
      </div>
}
      <Footer/>
    </div>
  );
    
}

export default Main;