// For getting user's data
import { useParams } from "react-router-dom";

const Post = () => {
    let {category} = useParams() 
    return(
        <>
        <h1>This is an example for error pages.</h1>
{/* getting user's data */}
<h3><em>Post Page - {category}</em></h3>
        </>
    )
} ;

export default Post ;