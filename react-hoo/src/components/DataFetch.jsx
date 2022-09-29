// ######   Starting  28 - september sessions   ######

import React , { useState , useEffect }  from  "react" ;
import  axios   from  "axios"  ;

export function DataFetch() {
    // const [posts , setPosts]  =  useState([]) ;

// $$$ --->>>>  ====>>>  only for one data 
const [post , setPost]  =  useState([]) ;
const [id , setId]  =  useState(1) ;


    useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => setPost(response.data)) 
    .catch((err) => console.log(err)) ;
    }) ;


// $$$ --->>>>  ====>>>  for All the data 

    // useEffect(() => {

    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    // // .then((response) => console.log(response)) 
    // .then((response) => {
    //     console.log(response.data) ;
    //     setPost([...response.data]) ;

    // }) ;

    // } , []) ;



    return (
        <div>

{/* // $$$ --->>>>  ====>>>  only for one data  */}
       <h1> Data-Fetching for a single ID</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>


{/* // $$$ --->>>>  ====>>>  for all the data  */}
      {/* <h1> Data-Fetching</h1>
       {posts.map((post) =>(
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

        </div>
       ))} */}

        </div> 

    ) ;
    
}

