const DOMAIN = "http://localhost:3000"

export function get(url) {
  // json方法把响应体转成json
  return fetch(DOMAIN + url).then(response => response.json())
}

export function post(url, data) {
  return fetch(DOMAIN + url, {
    method: 'POST',
    headers: {
      'content-type': "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}