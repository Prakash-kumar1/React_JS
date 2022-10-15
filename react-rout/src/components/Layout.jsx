import {NavLink,Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <h1>React Router V6 Basic Layout Project</h1>
        <ul className='list'>
            
            <li><NavLink to="/Home" style={({isActive}) => {
                return {
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Home </NavLink></li>


            <li><NavLink to="/About"  style={({isActive}) => {
                return {
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>About</NavLink></li>


            <li><NavLink to="/Contact"  style={({isActive}) => {
                return {
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Contact</NavLink></li>



<li><NavLink to="/Feed" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Feeds </NavLink></li>

{/* line no- 70 is parent , every one is child . for showing child we import and use Outlet */}

<Outlet/>


        </ul>
        </>
    )

} ;

export default Layout ;

