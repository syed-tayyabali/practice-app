import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Movie.module.css';
import movie1 from '../../assets/images/movie1.png';

const movie = (props) => {
    return (
        <div className={`row`}>
            <div className={`${classes.Side}`}>
                <ul>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                    <li><NavLink to='/login' >Movies</NavLink></li>
                </ul>
            </div>

            <div className={`${classes.Movie}`}>
                <div className={`${classes.Movie}`} onClick={props.clicked}>
                    <div className={`row ${classes.Movie1}`}>
                        <img src={movie1} alt='movie1' />
                    </div>
                </div>

                <div className={`${classes.Movie}`} onClick={props.clicked}>
                    <div className={`row ${classes.Movie1}`}>
                        <img src={movie1} alt='movie1' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default movie;