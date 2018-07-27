import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions.js';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password } = this.state;
    let { loginError } = this.props;
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Posts: new social network based on react
              </h1>
              <h2 className="subtitle">
                Register and login, and posts here your thoughts
              </h2>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <form onSubmit={this.onSubmit}>
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <div className="field">
                    <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} value={email}>
                      </input>
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <div className="field">
                    <label className="label">Password</label>
                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} value={password}>
                      </input>
                      <span className="icon is-small is-left">
                        <i className="fas fa-key"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns buttons">
                <div className="column has-text-centered is-4 is-offset-4">
                  <button className="button is-link" type="submit">Login</button>
                  <Link className="button is-text" to="/register">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            {loginError && <div className="notification is-danger">
              {loginError}
            </div>}
          </div>
        </div>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.actions.loginUser(this.state);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
