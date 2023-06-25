import axios from "axios";
import { getUrl, getHeaders } from "@/common/api/api.js";

function createRequest(method, url, body) {
  return new Promise((resolve) => {
    getHeaders().then((headers) => {
      const params = {
        method,
        url: getUrl(url),
        headers,
      };
      if (body) params.data = JSON.stringify(body);

      axios(params)
        .then((response) => resolve(response.data))
        .catch((error) => console.log(error.response));
    });
  });
}

export function createItem(mode, params) {
  let url = "",
    body = {},
    message = "";
  switch (mode) {
    case "project": {
      const { name, code } = params;
      url = "projects";
      body = { name, code };
      message = "Новый проект создан";
      break;
    }
    case "task": {
      const { name, description, projectId } = params;
      url = "tasks";
      body = { name, description, projectId };
      message = "Новая задача создана";
      break;
    }
  }

  return new Promise((resolve) => {
    function success(response) {
      console.log(`${message} через axios: `, response);
      // testDataId[mode] = response._id;
      resolve(response);
    }
    createRequest("POST", url, body, success);
  });
}

export function getItemList(mode, body) {
  return createRequest("POST", `${mode}/search`, body);
}

export function editItem(mode, id, newProperties) {
  let url = "",
    body = {
      _id: id,
      ...newProperties,
    },
    message = "";
  switch (mode) {
    case "project": {
      url = "projects";
      message = "Изменённый проект";
      break;
    }
    case "task": {
      url = "tasks";
      message = "Изменённая задача";
      break;
    }
  }

  function success(response) {
    console.log(`${message} через axios: `, response);
  }
  createRequest("PUT", url, body, success);
}

export function deleteItem(mode, id) {
  let url = "",
    message = "";
  switch (mode) {
    case "project": {
      url = `projects/${id}`;
      message = `Проект с id ${id} удален`;
      break;
    }
    case "task": {
      url = `tasks/${id}`;
      message = `Задача с id ${id} удалена`;
      break;
    }
  }

  function success() {
    console.log(`${message} через axios`);
  }
  createRequest("DELETE", url, false, success);
}
