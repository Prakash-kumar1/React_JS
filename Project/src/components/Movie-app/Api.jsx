import { useEffect } from "react";

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
        <h1>Creating a Movie App . </h1>
        </>
    )

}




export default Api ;