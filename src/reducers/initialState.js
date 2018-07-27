export default {
  posts: [],
  User: JSON.parse(sessionStorage.getItem('user')) || null,
  token: sessionStorage.getItem('token') || null
}
