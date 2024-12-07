import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/users">
                <i className="fas fa-users"></i> User Management
            </Link>
            <Link to="/roles">
                <i className="fas fa-user-shield"></i> Role Management
            </Link>
        </nav>
    );
};

export default Navbar;
