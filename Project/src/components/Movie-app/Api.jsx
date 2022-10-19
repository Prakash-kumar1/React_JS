import { useEffect } from "react";
import "./Api.css";
// import  "SearchIcon"  from './search.svg'


const API_URL = 'https://www.omdbapi.com?apikey=43b61648' ;

const Api = () =>{

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json() ;

        console.log(data.Search) ;
        // console.log(data) ;
    }

    useEffect(() =>{
        searchMovies('Spiderman')
        searchMovies('Superman')

    }, []) ;


    return(
        <>

        <div className="app"> 
        <h1> MovieLand </h1> 
        
        <div className="search">
            <input type="text" placeholder="Search for Movies"/>

        </div>
        </div>



        </>
    )

}




export default Api ;