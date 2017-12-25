const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const request = (url = '', type = 'get', data = null) => $.ajax({
  type,
  //url: 'http://localhost:8081/public/login',
  url: `${BASE_URL}${url}`,
  data,
  xhrFields: {
    withCredentials: true
  }
});
