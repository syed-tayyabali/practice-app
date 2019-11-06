import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import Login from './container/Login/Login';
import MovieBuilder from './container/MovieBuilder/MovieBuilder';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' exact component={MovieBuilder} />
          </Switch>
        </Layout>
      </div >
    );
  }
}

export default App;
