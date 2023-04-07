import React from 'react';
import logo from '/Logo.svg';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='link'>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>

        </nav>
    );
};

export default Header;