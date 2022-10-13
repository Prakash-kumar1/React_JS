import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <ul>
            {/* <li> <a href="/"></a>Home </li>
            <li> <a href="/about"></a> about</li>
            <li> <a href="/contact"></a> contact</li> */}
            {/* <li><a href="/Blog"></a>Blog</li>
            <li><a href="/Connect"></a>Connect</li>
            <li><a href="/Service"></a>Service</li> */}
            <li><Link to="/"></Link>Blog</li>
            <li><Link to="/Connect"></Link>Connect</li>
            <li><Link to="/Service"></Link>Service</li>
        </ul>
        </>
    )
} ;

export default Navbar ;