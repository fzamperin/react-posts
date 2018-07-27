class UserApi {

  static requestHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = sessionStorage.getItem('token');
    if (token) {
      headers.append('AUTHORIZATION', `Bearer ${token}`);
    }
    return headers;
  }

  static login(credentials) {

    const request = new Request('http://localhost:3001/login', {
      method: 'POST',
      headers: UserApi.requestHeaders(),
      body: JSON.stringify(credentials)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      console.log(error);
      return error;
    });
  }

  static register(User) {

    const request = new Request('http://localhost:3001/register', {
      method: 'POST',
      headers: UserApi.requestHeaders(),
      body: JSON.stringify(User)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UserApi;
