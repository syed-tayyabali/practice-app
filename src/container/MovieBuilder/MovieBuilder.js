import React, { Component } from 'react';

import Movie from '../../components/Movie/Movie';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

class MovieBuilder extends Component {

    render() {
        return (
            <div>
                <Movie />
            </div>
        );
    }
}

export default MovieBuilder;