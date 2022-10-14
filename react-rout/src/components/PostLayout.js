import { Outlet } from "react-router-dom";

 const PostLayout = () =>{
    return(
        <>
        <h2>This is Post-Layout  </h2>
        <Outlet />
        </>
    )
} ;

export default PostLayout