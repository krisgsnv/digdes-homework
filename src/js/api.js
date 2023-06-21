const projectId = ''

function getUrl(action) {
  return `http://45.12.239.156:8081/api/${action}`
}

function getToken(login = 'gasanova.k', password = 'jc63fk') {
  return new Promise((resolve) => {
    fetch(getUrl('login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => resolve(data.token))
      .catch((error) => console.log(error))
  })
}

function createProject(name, code) {
  return new Promise((resolve) => {
    getToken().then((token) => {
      fetch(getUrl('projects'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          code: code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Новый проект создан через fetch: ', data)
          resolve(data)
        })
        .catch((error) => console.log(error))
    })
  })
}

function getProjectList(page = '1') {
  getToken().then((token) => {
    fetch(getUrl(`projects/search`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        page: page,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Список проектов через fetch: ', data))
      .catch((error) => console.log(error))
  })
}

function editProject() {
  createProject('Проект2', 2)
    .then((newProject) => newProject._id)
    .then((id) =>
      getToken().then((token) => {
        fetch(getUrl(`projects`), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            _id: id,
            name: 'newName',
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log('Измененный проект через fetch: ', data))
          .catch((error) => console.log(error))
      }),
    )
}

function deleteProject() {
  createProject('Проект3', 3)
    .then((newProject) => newProject._id)
    .then((id) =>
      getToken().then((token) => {
        fetch(getUrl(`projects/${id}`), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data.message))
          .catch((error) => console.log(error))
      }),
    )
}

//createProject('Проект', 1)
//getProjectList()
//editProject()
//deleteProject()
