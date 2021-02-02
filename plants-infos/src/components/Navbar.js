import React from 'react';
import  {RiPlantFill} from 'react-icons/ri';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    
    return ( 
        <nav className="nav-wrapper green ">
            <div className="container ">
            <NavLink className="no-link no-blue brand-logo" to="/"  > <RiPlantFill/> Plants Little Infos </NavLink>
            <ul className="right">
                <li><NavLink className="no-link no-blue" to="/">Home of the Plants</NavLink></li>
                <li><NavLink className="no-link no-blue" to="/about">About the Gardener</NavLink></li>
                <li><NavLink className="no-link no-blue" to="/contact">Contact the Gardener  </NavLink></li>
                <li> :)</li>
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;