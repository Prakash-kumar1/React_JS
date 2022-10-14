import {NavLink} from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <h1>React Router V6</h1>
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



<li><NavLink to="/Post" style={({isActive}) => {
                return {
                    // backgroundColor : isActive ? 'green' : 'blue'
                    backgroundColor : isActive ? 'red' : ' '
                }
            }}>Posts </NavLink></li>




        </ul>
        </>
    )

} ;

export default Layout ;

