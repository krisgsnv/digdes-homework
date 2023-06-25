export function getUrl(action) {
  return `http://45.12.239.156:8081/api/${action}`;
}

export function getHeaders() {
  return new Promise((resolve) => {
    getToken()
      .then((token) => {
        resolve({
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${token}`,
        });
      })
      .catch((error) => console.log(error));
  });
}

export function getToken(login = "gasanova.k", password = "jc63fk") {
  return new Promise((resolve) => {
    fetch(getUrl("login"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((data) => resolve(data.token))
      .catch((error) => console.log(error));
  });
}
