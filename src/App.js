import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Router, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Posts from './components/Posts/Posts';
import history from './history';

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/posts" component={Posts}/>
        </div>
      </Router>
    );
  }
}

export default App;
