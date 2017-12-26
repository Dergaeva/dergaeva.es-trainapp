const BASE_URL = 'http://localhost:8081/';

export const request = (url = '', type = 'get', data = null) => {
  const types = ['post', 'put'];
  let contentType = 'application/x-www-form-urlencoded; charset=UTF-8';

  if (types.includes(type) && data) {
    contentType = 'application/json; charset=utf-8';
    data = JSON.stringify(data);
  }

  return $.ajax({
    type,
    url: `${BASE_URL}${url}`,
    data,
    contentType,
    xhrFields: {
      withCredentials: true
    }
  });
};
