import {Link , NavLink} from 'react-router-dom';

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


{/* For special styling , we use  NavLink tag */}
        <ul className='style'>
            
            <li><Link to="/Blog" >Blog2 </Link></li>
            <li><Link to="/Connect">Connect2 </Link></li>
            <li><Link to="/Service">Service2 </Link></li>

        </ul>

        <ul className='list'>
            
            <li><NavLink to="/Blog"  style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'red' : 'magenta'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Blog-3 </NavLink></li>

            <li><NavLink to="/Connect" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Connect-3 </NavLink></li>

            <li><NavLink to="/Service"  style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'black' : 'gold'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Service-3 </NavLink></li>


<li><NavLink to="/Post" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Post-category </NavLink></li>


<li><NavLink to="/Post" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'yellow' : ' '
                }
            }}>Post-with-ID </NavLink></li>

        </ul>
        </>
    )

} ;

export default Navbar ;