import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.User, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return state;
    case types.LOG_IN_ERROR:
      return Object.assign({}, state, { message: action.message });
    case types.REGISTER_USER_SUCCESS:
      return sessionStorage.getItem('user');
    default:
      return state;
  }
}
