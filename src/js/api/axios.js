import { getUrl, getHeaders, testDataId } from '@/js/api/api.js'
import axios from 'axios'

function createAxiosRequest(token, method, url, body, success) {
  const params = {
    method,
    url: getUrl(url),
    headers: getHeaders(token),
  }
  if (body) params.data = JSON.stringify(body)
  
  axios(params)
    .then((response) => success(response.data))
    .catch((error) => console.log(error))
}

export function createItemAxios(token, mode, params) {
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
      console.log(`${message} через axios: `, response)
      testDataId[mode] = response._id
      resolve(response)
    }
    createAxiosRequest(token, 'POST', url, body, success)
  })
}

export function getItemListAxios(token, mode, page = 1) {
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
    console.log(`${message} на странице ${page} через axios: `, response)
  }
  createAxiosRequest(token, 'POST', url, { page }, success)
}

export function editItemAxios(token, mode, id, newProperties) {
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
    console.log(`${message} через axios: `, response)
  }
  createAxiosRequest(token, 'PUT', url, body, success)
}

export function deleteItemAxios(token, mode, id) {
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
    console.log(`${message} через axios: `)
  }
  createAxiosRequest(token, 'DELETE', url, false, success)
}
