import React from 'react';

import classes from './Movie.module.css';
import movie1 from '../../assets/images/movie1.png';

const movie = (props) => {
    return (
        <div>
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
    );
}

export default movie;