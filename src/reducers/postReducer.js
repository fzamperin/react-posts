import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return Object.assign([], state, {
        posts: action.posts,
        newPost: { title: '', text: ''}
      });
    case types.CREATE_POST_SUCCESS:
    return [
      ...state.filter(post => post.id !== action.post.id),
      Object.assign({}, action.post)
    ]
    case types.DELETE_POST_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfpostToDelete = state.findIndex(post => { return post.id === action.post.id });
      newState.splice(indexOfpostToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
