import { useParams } from "react-router-dom";

const PostDetail = () =>{
    let {category} = useParams() ;
    return(
        <>
        <h2>All {category}  post details are present here .  </h2>
        <h3> {category}  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente recusandae iste. Incidunt, magni. Obcaecati eveniet qui fugiat. Culpa excepturi dicta quae laudantium eius molestiae, corrupti distinctio ducimus! In eveniet dignissimos minus saepe doloribus sunt, at assumenda optio impedit veniam, rem sequi voluptas error quam iure sint praesentium?</h3>
        </>
    )
} ;

export default PostDetail