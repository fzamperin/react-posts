class Auth {
  static loggedIn() {
    return sessionStorage.getItem('jwt');
  }

  static logOut() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('user');
  }
}

export default Auth;
