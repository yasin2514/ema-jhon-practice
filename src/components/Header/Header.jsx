import React from 'react';
import logo from '/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='link'>
                <a href="/1">Order</a>
                <a href="/2">Order Review</a>
                <a href="/3">Manage Inventory</a>
                <a href="/4">Login</a>
            </div>

        </nav>
    );
};

export default Header;