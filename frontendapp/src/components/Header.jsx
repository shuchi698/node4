import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


const Header = () => {

    return (
        <div className='header-comp'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Header;