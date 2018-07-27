class PostApi {


  static requestHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = sessionStorage.getItem('token');
    if (token) {
      headers.append('AUTHORIZATION', `Bearer ${token}`);
    }
    return headers;
  }

  static getAllPosts() {

    const request = new Request('http://localhost:3001/posts', {
      method: 'GET',
      headers: PostApi.requestHeaders()
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createPost(Post) {

    const request = new Request('http://localhost:3001/create/post', {
      method: 'POST',
      headers: PostApi.requestHeaders(),
      body: JSON.stringify(Post)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deletePost(id) {

    const request = new Request('http://localhost:3001/post/' + id, {
      method: 'DELETE',
      headers: PostApi.requestHeaders()
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default PostApi;
