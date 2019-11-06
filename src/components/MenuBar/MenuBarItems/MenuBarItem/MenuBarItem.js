import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuBarItem.module.css';

const MenuBarItem = (props) => {
    return (
        <li className={classes.MenuBarItem}>
            <NavLink to={props.link} exact>{props.children}</NavLink>
        </li>
    );
}

export default MenuBarItem;