// For getting user's data
import { useParams } from "react-router-dom";

// Query Parameter :- When in URL we write "?" Question mark and after that we write something that is Query Parameter
// For getting Query Parameter we use  " useSearchParams "

import { useSearchParams } from "react-router-dom";

const Post = () => {
// for getting Category and ID , which is given by user
    let {category,id} = useParams() ;

    let[searchParams , setSearchParams] = useSearchParams() 
    console.log(searchParams) ;

// for writing multiple Query Parameter =>  ?price=12345&sort=asc   in URL
    console.log(searchParams.get('price')) ;
    console.log(searchParams.get('sort')) ;
    
    return(
        <>

        <h1>This is an example for error pages.</h1>

{/* getting user's data */}
<h3><em>Post Page - {category}</em></h3>
<h3><em>Post ID - {id}</em></h3>

        </>
    )
} ;

export default Post ;


