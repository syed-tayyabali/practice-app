import React, { Component } from 'react';

import Movie from '../../components/Movie/Movie';
import Footer from '../../components/Footer/Footer';

class MovieBuilder extends Component {
    render() {
        return (
            <div>
                <Movie />
                <Footer />
            </div>
        );
    }
}

export default MovieBuilder;