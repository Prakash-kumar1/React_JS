// ######   Starting  28 - september sessions => " Fetching Data"   ######
// ######  This sessions is important for Creating Projects  ######


// ######  Using method =>> The method attribute specifies the method of submitting form data: GET or POST.

// The GET method uses URL name/value pairs to send data. This is the default method. The default value. It sends data using URL name/value pairs which is visible. Therefore, GET should not be used when handling sensitive data (e.g. passwords, bank information).

// The POST method use an HTTP post transaction with data in the body of the request.Sends data using an HTTP post transaction with data in the request body, which is invisible. The POST method is more secure.



import React , { useState , useEffect }  from  "react" ;
import  axios   from  "axios"  ;

export function DataFetch() {
    // const [posts , setPosts]  =  useState([]) ;

// $$$ --->>>>  ====>>>  only for one data and changing in other data
const [post , setPost]  =  useState([]) ;
const [id , setId]  =  useState(1) ;
const [btnId , setBtnId]  =  useState(1) ;


    // useEffect(() => {
    // axios
    // .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // .then((response) => {
    //     console.log(response.data) ;
    //     setPost(response.data)
    // })
    // .catch((err) => console.log(err)) ;
    // } , [id]) ;


{/* OR  You can also use this =>> this is for input data*/}


    useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response.data) ;
        setPost(response.data)
    })
    .catch((err) => console.log(err)) ;
    } , [btnId]) ;


// $$$ --->>>>  ====>>>  for showing All the data 

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
{/* <button onClick={() => setId((prev) => prev + 1)}>click - {id}</button> */}

{/* OR  You can also use this */}

<input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
<button onClick={() => setBtnId(id)}>Change</button>



{/* // $$$ --->>>>  ====>>>  for showing all the data  */}
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



// In this Important  28th September session "Vasant sir" teaches Filtering the item 
// ater 01:30 hours  above . so, please go and watch once more ..
