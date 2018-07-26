import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Register
              </h1>
              <h2 class="subtitle">
                Please fill your info to be able to create and see posts.
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
                    <label class="label">Name</label>
                    <p class="control">
                      <input class="input" type="text" placeholder="Name"></input>
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <div class="field">
                    <label class="label">Surname</label>
                    <p class="control">
                      <input class="input" type="text" placeholder="Surname"></input>
                    </p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left">
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
                    <p class="control has-icons-left">
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
                  <button class="button is-link">Register</button>
                  <Link class="button is-text" to="/">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default RegisterForm;
