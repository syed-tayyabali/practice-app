import React from 'react';

import classes from './Footer.module.css';

const footer = () => {
    return (
        <footer className={`${classes.Footer}`}>
            <div className={`row ${classes.marginAround}`}>
                <div className={`col-sm-4 ${classes.paraOne}`}>
                    <p>In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity, focus, and coherence. For this exercise, the paragraph should be quick to read--say, not be more than 100 words long.</p>
                </div>

                <div className={`col-sm-4 ${classes.paraOne}`}>
                    <p>In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity, focus, and coherence. For this exercise, the paragraph should be quick to read--say, not be more than 100 words long.</p>
                </div>

                <div className={`col-sm-4 ${classes.paraOne}`}>
                    <p>In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity, focus, and coherence. For this exercise, the paragraph should be quick to read--say, not be more than 100 words long.</p>
                </div>
            </div>

            <div>
                <p style={{ margin: 0, paddingBottom: 15 }}> tayyab.ali98@hotmail.com</p>
            </div>
        </footer>
    );
}

export default footer;