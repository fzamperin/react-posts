import * as types from './actionTypes';
import userApi from '../api/userApi';
import history from '../history';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function registerUserSuccess() {
  return { type: types.REGISTER_USER_SUCCESS }
}

export function loginError(err) {
  return {
    type: types.LOG_IN_ERROR,
    message: err.message
  }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return userApi.login(credentials)
    .then(response => {
      sessionStorage.setItem('token', response.Session.token);
      sessionStorage.setItem('user', JSON.stringify(response.User));
      dispatch(loginSuccess(response));
      history.push('/posts');
    }).catch(err => {
      dispatch(loginError(err));
    });
  };
}

export function registerUser(User) {
  return function(dispatch) {
    return userApi.register(User).then(response => {
      sessionStorage.setItem('token', response.Session.token);
      sessionStorage.setItem('user', JSON.stringify(response.User));
      dispatch(registerUserSuccess());
      history.push('/posts');
    }).catch(err => {
      return err;
    });
  };
}
