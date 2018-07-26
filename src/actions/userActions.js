import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/auth';


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      debugger
      sessionStorage.setItem('token', response.tokenJWT);
      sessionStorage.setItem('user', JSON.stringify(response.User));
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return { type: types.LOG_OUT }
}
