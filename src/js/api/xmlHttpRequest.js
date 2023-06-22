import { getUrl, getHeaders, testDataId } from '@/js/api/api.js'

function setXmlHeaders(headers, xhr) {
  for (const name in headers) {
    const value = headers[name]
    xhr.setRequestHeader(name, value)
  }
}

function createXmlHttpRequest(token, method, url, body, success) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, getUrl(url))
  xhr.responseType = 'json'
  setXmlHeaders(getHeaders(token), xhr)

  xhr.send(body ? JSON.stringify(body) : '')
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('error', xhr.response)
    } else {
      success(xhr.response)
    }
  }

  xhr.onerror = (error) => console.log(error)
}

export function createItemXml(token, mode, params) {
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
      console.log(`${message} через xmlHttpRequest: `, response)
      testDataId[mode] = response._id
      resolve(response)
    }
    createXmlHttpRequest(token, 'POST', url, body, success)
  })
}

export function getItemListXml(token, mode, page = 1) {
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
    console.log(`${message} на странице ${page} через xmlHttpRequest: `, response)
  }
  createXmlHttpRequest(token, 'POST', url, { page }, success)
}

export function editItemXml(token, mode, id, newProperties) {
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
    console.log(`${message} через xmlHttpRequest: `, response)
  }
  createXmlHttpRequest(token, 'PUT', url, body, success)
}

export function deleteItemXml(token, mode, id) {
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
    console.log(`${message} через xmlHttpRequest`)
  }
  createXmlHttpRequest(token, 'DELETE', url, false, success)
}
