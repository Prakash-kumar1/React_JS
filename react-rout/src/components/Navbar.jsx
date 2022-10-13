import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/about"> about</a></li>
            <li> <a href="/contact">contact</a> </li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Connect">Connect</a></li>
            <li><a href="/Service">Service</a></li>
        </ul>
        <ul className='list'>
            
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Connect">Connect</Link></li>
            <li><Link to="/Service">Service</Link></li>

        </ul>
        </>
    )

} ;

export default Navbar ;