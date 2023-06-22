import { getUrl, getHeaders, testDataId } from '@/js/api/api.js'

function createFetchRequest(token, method, url, body, success) {
  const params = {
    method: method,
    headers: getHeaders(token),
  }
  if (body) params.body = JSON.stringify(body)

  fetch(getUrl(url), params)
    .then((response) => {
      if (response.status == 200) {
        response.json()
        .then((data) => success(data))
      } else {
        console.log('Error status ' + response.status)
      }
    })
    .catch((error) => console.log(error))
}

export function createItemFetch(token, mode, params) {
  let url = '',
    body = {},
    message = ''
  switch (mode) {
    case 'project': {
      const { name, code } = params
      url = 'projects'
      body = { name, code }
      message = 'Новый проект создан'
      break
    }
    case 'task': {
      const { name, description, projectId } = params
      url = 'tasks'
      body = { name, description, projectId }
      message = 'Новая задача создана'
      break
    }
  }

  return new Promise((resolve) => {
    function success(response) {
      console.log(`${message} через fetch: `, response)
      testDataId[mode] = response._id
      resolve(response)
    }
    createFetchRequest(token, 'POST', url, body, success)
  })
}

export function getItemListFetch(token, mode, page = 1) {
  let url = '',
    message = ''
  switch (mode) {
    case 'project': {
      url = 'projects/search'
      message = 'Список проектов'
      break
    }
    case 'task': {
      url = 'tasks/search'
      message = 'Список задач'
      break
    }
  }

  function success(response) {
    console.log(`${message} на странице ${page} через fetch: `, response)
  }
  createFetchRequest(token, 'POST', url, { page }, success)
}

export function editItemFetch(token, mode, id, newProperties) {
  let url = '',
    body = {
      _id: id,
      ...newProperties,
    },
    message = ''
  switch (mode) {
    case 'project': {
      url = 'projects'
      message = 'Изменённый проект'
      break
    }
    case 'task': {
      url = 'tasks'
      message = 'Изменённая задача'
      break
    }
  }

  function success(response) {
    console.log(`${message} через fetch: `, response)
  }
  createFetchRequest(token, 'PUT', url, body, success)
}

export function deleteItemFetch(token, mode, id) {
  let url = '',
    message = ''
  switch (mode) {
    case 'project': {
      url = `projects/${id}`
      message = `Проект с id ${id} удален`
      break
    }
    case 'task': {
      url = `tasks/${id}`
      message = `Задача с id ${id} удалена`
      break
    }
  }

  function success() {
    console.log(`${message} через fetch: `)
  }
  createFetchRequest(token, 'DELETE', url, false, success)
}
