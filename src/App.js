import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route exact path='/' component={HomePage} />
            <Route path='/HomePage' component={HomePage} />
          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
