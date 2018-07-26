import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import RegisterForm from './components/RegisterForm/RegisterForm';

class App extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <div>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
