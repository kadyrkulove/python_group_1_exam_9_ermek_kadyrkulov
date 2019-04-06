import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import './Navbar.css';


const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
        <Logo/>
        <Menu/>
    </nav>
);


export default Navbar;
