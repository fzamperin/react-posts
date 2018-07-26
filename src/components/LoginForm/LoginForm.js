import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Posts: new social network based on react
              </h1>
              <h2 class="subtitle">
                Register and login, and posts here your thoughts
              </h2>
            </div>
          </div>
        </section>
        <section class="hero">
          <div class="hero-body">
            <form>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email" placeholder="Email"></input>
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="password" placeholder="Password"></input>
                      <span class="icon is-small is-left">
                        <i class="fas fa-key"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns buttons">
                <div class="column has-text-centered is-4 is-offset-4">
                  <button class="button is-link">Login</button>
                  <Link class="button is-text" to="/register">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginForm;
