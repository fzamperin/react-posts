class Auth {
  static loggedIn() {
    return sessionStorage.getItem('jwt');
  }
}

export default Auth;
