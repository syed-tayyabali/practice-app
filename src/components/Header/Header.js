import React from 'react';

import classes from './Header.module.css';

const header = () => {
    return (
        <div className={classes.Header}>
            <h1>Movie Hub</h1>
        </div>
    );
}

export default header;