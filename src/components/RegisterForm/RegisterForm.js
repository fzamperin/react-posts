import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions.js';

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.registerUser(this.state);
  }

  render() {
    let { email, password, firstname, surname } = this.state;
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Register
              </h1>
              <h2 className="subtitle">
                Please fill your info to be able to create and see posts.
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
                    <label className="label">Firstname</label>
                    <p className="control">
                      <input className="input" type="text" placeholder="Firstname" onChange={e => this.setState({firstname: e.target.value})} value={firstname}></input>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <div className="field">
                    <label className="label">Surname</label>
                    <p className="control">
                      <input className="input" type="text" placeholder="Surname" onChange={e => this.setState({surname: e.target.value})} value={surname}></input>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <div className="field">
                    <label className="label">Email</label>
                    <p className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} value={email}></input>
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
                    <p className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} value={password}></input>
                      <span className="icon is-small is-left">
                        <i className="fas fa-key"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns buttons">
                <div className="column has-text-centered is-4 is-offset-4">
                  <button className="button is-link">Register</button>
                  <Link className="button is-text" to="/">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.actions.registerUser(this.state);
    this.setState({ email: '', password: '', firstname: '', surname: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RegisterForm);
