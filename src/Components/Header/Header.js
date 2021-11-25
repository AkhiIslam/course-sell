import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header sticky-top">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Course</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>

        </div>
    );
};

export default Header;