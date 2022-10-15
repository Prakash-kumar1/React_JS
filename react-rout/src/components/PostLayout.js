// Showing Post-Layout page inside Feed , means we have given the path of Feed

import { Outlet } from "react-router-dom";

 const PostLayout = () =>{
    return(
        <>
        <h2>This is Post-Layout page  </h2>
        <Outlet />
        </>
    )
} ;

export default PostLayout