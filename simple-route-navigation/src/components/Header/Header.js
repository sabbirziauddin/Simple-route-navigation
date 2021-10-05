import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link to="/home" className="Header-style"> home</Link>
            <Link to="/friends" className="Header-style">Friends</Link>
            <Link to="/aboutUs" className="Header-style">About us</Link>
            <Link to="/notFound" className="Header-style">Not found</Link>

        </div>
    );
};


export default Header;