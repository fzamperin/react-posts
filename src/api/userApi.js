class UserApi {

  requestHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let token = sessionStorage.getItem('jwt');
    if(token) {
      headers.append({ 'AUTHORIZATION' : `Bearer ${sessionStorage.getItem('jwt')}` });
    }
    return headers;
  }

  static login(credentials) {

    const request = new Request(`${process.env.API_HOST}/login`, {
      method: 'POST',
      headers: requestHeaders(),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static logout() {

    const request = new Request(`${process.env.API_HOST}/logout`, {
      method: 'DELETE',
      headers: requestHeaders(),
    });
    return fetch(request).the
    n(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UserApi;
