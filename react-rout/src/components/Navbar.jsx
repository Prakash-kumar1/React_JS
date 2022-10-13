import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>

{/* In this case , Page Reloads  or  Refresh */}
        <ul>
            <li> <a href="/">Home </a> </li>
            <li> <a href="/about"> about </a> </li>
            <li> <a href="/contact">contact </a> </li>
            <li> <a href="/Blog">Blog </a></li> 
            <li> <a href="/Connect">Connect </a> </li>
            <li> <a href="/Service">Service </a> </li>
        </ul>


{/* For without Reloading or Refreshing , we use  Link tag */}
        <ul className='list'>
            
            <li><Link to="/Blog">Blog2 </Link></li>
            <li><Link to="/Connect">Connect2 </Link></li>
            <li><Link to="/Service">Service2 </Link></li>

        </ul>
        </>
    )

} ;

export default Navbar ;