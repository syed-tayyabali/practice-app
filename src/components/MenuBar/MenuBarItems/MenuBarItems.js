import React from 'react';

import classes from './MenuBarItems.module.css';
import MenuBarItem from './MenuBarItem/MenuBarItem';

const MenuBarItems = (props) => {
    return (
        <ul className={classes.MenuBarItems}>
            <MenuBarItem link="/" exact>Home</MenuBarItem>
            <MenuBarItem link='/collection' >Collection</MenuBarItem>
            <MenuBarItem link="/login" >Login</MenuBarItem>
        </ul>
    );
}

export default MenuBarItems;