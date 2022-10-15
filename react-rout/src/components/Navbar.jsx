import {Link , NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>

{/* #######  Creating  UI  ###### */}

{/* In this case , Page Reloads  or  Refresh */}
        <ul>
            <li> <a href="/">Home </a> </li>
            <li> <a href="/about"> about </a> </li>
            <li> <a href="/contact">contact </a> </li>
            <li> <a href="/blog">Blog </a></li> 
            <li> <a href="/connect">Connect </a> </li>
            <li> <a href="/service">Service </a> </li>
        </ul>

{/* For removing the problem like Page Reloading  or Refreshing , use Link tag */}
<h3>In this case , page not Reloads</h3>
        <ul className='style'>
            
            <li><Link to="/blog" >Blog2 </Link></li>
            <li><Link to="/connect">Connect2 </Link></li>
            <li><Link to="/service">Service2 </Link></li>

        </ul>


{/* For special styling or creating  Active Link, we use  NavLink tag */}

        <ul className='list'>
            
            <li><NavLink to="/blog"  style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'red' : 'magenta'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Blog-3 </NavLink></li>


            <li><NavLink to="/connect" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Connect-3 </NavLink></li>


            <li><NavLink to="/service"  style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'black' : 'gold'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Service-3 </NavLink></li>


<li><NavLink to="/post" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Post-category </NavLink></li>


<li><NavLink to="/post/mobile" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'yellow' : ' '
                }
            }}>Post-with-ID </NavLink></li>


{/* example of conditional Rendering */}

<li><NavLink to="/dashboard" style={({isActive}) => {
                return {
                    backgroundColor : isActive ? 'green' : 'hotpink'
                }
            }}>Dashboard </NavLink></li>

        </ul>
        </>
    )

} ;

export default Navbar ;

