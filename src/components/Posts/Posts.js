import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../../actions/postActions';
import './Posts.css';

class Posts extends Component {

  componentWillMount() {
    this.props.actions.loadPosts();
  }

  renderDelete(post) {
    if (this.props.User.id === post.UserId) {
      return (
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              Delete
            </span>
          </p>
        </footer>
      )
    }
  }
  toggleModal = () => {
    const element = this.refs.modal;
    if(!element.classList.contains('is-active'))
      element.classList.add('is-active');
    else
      element.classList.remove('is-active');
  }
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Posts!!!
              </h1>
              <h2 className="subtitle">
                Here you can see all posts from other users.
              </h2>
              <div className="columns">
                <div className="column has-text-centered is-4 is-offset-4">
                  <button onClick={this.toggleModal} className="button" id="button-add">Add Post</button>
                </div>
              </div>
              <div className="modal" ref="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Add new Post</p>
                    <button className="delete" onClick={this.toggleModal} aria-label="close"></button>
                  </header>
                  <section className="modal-card-body">
                    <input className="input" type="text" placeholder="Title" onChange={e => this.props.newPost.title = e.target.value }></input>
                    <textarea className="textarea" placeholder="Type you post" onChange={e => this.props.newPost.text = e.target.value }></textarea>
                  </section>
                  <footer className="modal-card-foot">
                    <button className="button is-success" onClick={this.savePost}>Save</button>
                    <button className="button" onClick={this.toggleModal}>Cancel</button>
                  </footer>
                </div>
              </div>
              {this.props.posts.map(post =>
                <div className="columns">
                  <div className="column is-4 is-offset-4">
                    <div className="card">
                      <div className="card-content">
                        <p className="title">
                          {post.title}
                        </p>
                        <p className="subtitle">
                          {post.text}
                        </p>
                      </div>
                      {this.renderDelete(post)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  if(state.postReducer.length > 0) {
    return {
      User: state.userReducer,
      posts: state.postReducer,
      newPost: {title: '', email: ''}
    }
  }
  else {
    return {
      User: state.userReducer,
      posts: [],
      newPost: {title: '', email: ''}
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(postActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
