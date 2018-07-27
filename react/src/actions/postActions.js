import * as types from './actionTypes';
import PostApi from '../api/postApi';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function createPostSuccess(post) {
  return {type: types.CREATE_POST_SUCCESS, post}
}

export function deletePostSuccess(post) {
  return {type: types.DELETE_POST_SUCCESS, post}
}

export function loadPosts() {
  return function(dispatch) {
    return PostApi.getAllPosts().then(Posts => {
      dispatch(loadPostsSuccess(Posts));
    }).catch(err => {
      return err
    });
  };
}

export function createPost(Post) {
  return function (dispatch) {
    return PostApi.createPost(Post).then(Post => {
      dispatch(createPostSuccess(Post));
      return Post;
    }).catch(err => {
      return err
    });
  };
}

export function deletePost(Post) {
  return function(dispatch) {
    return PostApi.deletePost(Post).then(() => {
      dispatch(deletePostSuccess(Post));
      return;
    }).catch(err => {
      throw(err);
    })
  }
}
