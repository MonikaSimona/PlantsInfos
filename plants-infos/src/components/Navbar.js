import React from 'react';
import  {RiPlantFill} from 'react-icons/ri';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    
    return ( 
        <nav className="nav-wrapper green darken-3">
            <div className="container">
            <a  className="brand-logo"> <RiPlantFill/> Plants Little Infos </a>
            <ul className="right">
                <li><NavLink to="/">Home of the Plants</NavLink></li>
                <li><NavLink to="/about">About the Gardener</NavLink></li>
                <li><NavLink to="/contact">Contact the Gardener  </NavLink></li>
                <li> :)</li>
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;