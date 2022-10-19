import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import "./Api.css";
// import  "searchcon"  from './search.svg'


const API_URL = 'https://www.omdbapi.com?apikey=43b61648' ;

const movie1 = {

            "Title": "Italian Spiderman",
            "Year": "2007",
            "imdbID": "tt2705436",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
        
}


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
            <input type="text" placeholder="Search for Movies"
            value= "spiderman"  onChange={() => {}} />
            
    <img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcflbVkrqVp1dQ_wU5PzXou3Hx2EG7zu014g&usqp=CAU'} 
    alt="search" onClick={() => {}} />

        </div>

        <div className="container">
        {/* <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                <img  src={movie1.Poster} alt={movie1.Title} /> 
                </div>
                <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
                </div>
            </div> */}

            <MovieCard />

        </div>
        </div>



        </>
    )

}




export default Api ;