export const testDataId = {
  project: '',
  task: '',
}

export function getUrl(action) {
  return `http://45.12.239.156:8081/api/${action}`
}

export function getHeaders(token) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  }
  if (token) headers.authorization = `Bearer ${token}`
  return headers
}

export async function getToken(login = 'gasanova.k', password = 'jc63fk') {
  return new Promise((resolve) => {
    fetch(getUrl('login'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((data) => resolve(data.token))
      .catch((error) => console.log(error))
  })
}
