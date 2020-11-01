import React from 'react';
import logo from './img/bpm_logo.png';
import {Link} from 'react-router-dom';


function Nav(props) {

    // will add props to pass client names
    
    return (<>
        <div className='nav_bar'>
            <div className='nav_container'>
                <div className='logo_container'>
                    <img className='logo_img' alt='Blue Peak Media overlaid with mountains in the background' src={logo} />
                </div>
                <div className='nav_links'>
                    <Link to='/'>Instructions</Link>
                    <Link to='/name'>Your Details</Link>
                    <Link to='/shoot-details'>Shoot Details</Link>
                </div>
            </div>
        </div>
    
        
        </>)
}

export default Nav;