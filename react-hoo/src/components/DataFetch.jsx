// ######   Starting  28 - september sessions   ######

import React , { useState , useEffect }  from  "react" ;
import  axios   from  "axios"  ;

export function DataFetch() {
    const [posts , setPosts]  =  useState([]) ;

    useEffect(() => {

    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => console.log(response)) 
    .then((response) => setPosts([...response.data])) ;

    }) ;

    return (
        <div>

       <h1> Data-Fetching</h1>
       {posts.map((post) =>(
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            
        </div>
       ))}

        </div> 

    )
    
}

