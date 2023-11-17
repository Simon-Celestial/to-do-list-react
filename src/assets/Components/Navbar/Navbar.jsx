// Navbar.jsx
import React from 'react';
import "./Navar.scss";

const Navbar = ({
                    count
                }) => {
    return (
        <div className="app-navbar">
            <h1>To do List</h1>
            <p>Total List count: <span>{count}</span></p>
        </div>
    );
}


export default Navbar;
