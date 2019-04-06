import React from 'react'
import {NavLink} from "react-router-dom";
import './MenuItem.css';


const MenuItem = (props) => {
    return <li className="nav-item active">
        <NavLink className="menuItem nav-link" to={props.to} exact>{props.children}</NavLink>
    </li>
};


export default MenuItem;