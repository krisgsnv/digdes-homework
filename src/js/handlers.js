import { setActiveElem, hideAllDropdowns, hideOtherDropdowns, resetListControl, hasClass, toggleClass } from '@/js/helpers.js'
import { getToken, testDataId } from '@/js/api/api.js'
import { createItemFetch, getItemListFetch, editItemFetch, deleteItemFetch } from '@/js/api/fetch.js'
import { createItemXml, getItemListXml, editItemXml, deleteItemXml} from '@/js/api/xmlHttpRequest.js'
import { createItemAxios, getItemListAxios, editItemAxios, deleteItemAxios } from '@/js/api/axios.js'

const token = await getToken()

document.addEventListener('click', function (e) {
  const target = e.target

  if (target.classList.contains('navigation__item')) {
    const active = document.querySelector('.navigation__item_active')
    setActiveElem(target, active, 'navigation__item_active', 'navigation__item_default')
  }

  const closestDropdown = target.closest('.dropdown')
  const inDropdown = e.composedPath().includes(closestDropdown)
  const targetDropdown = target.parentNode.querySelector('.dropdown')
  const dropdowns = document.querySelectorAll('.dropdown')
  const listItemControls = document.querySelectorAll('.list-item__more-icon')
  const navUser = document.querySelector('.navigation-user');
  const projects = document.querySelector('.projects')
  const tasks = document.querySelector('.tasks')

  if (hasClass(target, 'navigation-user')) {
    toggleClass(target, 'navigation-user_active')
    listItemControls.forEach((el) => {
      resetListControl(el)
    })
    hideOtherDropdowns(dropdowns, targetDropdown)
  } else if (hasClass(target, 'list-item__more-icon')) {
    navUser.classList.remove('navigation-user_active')
    listItemControls.forEach((el) => {
      if (el == target) {
        toggleClass(target, 'button_secondary_default', 'button_secondary_active')
      } else {
        resetListControl(el)
      }
    })
    hideOtherDropdowns(dropdowns, targetDropdown)
  } else if (!inDropdown) {
    hideAllDropdowns(dropdowns)
  }

  if (hasClass(target, 'navigation_projects') || hasClass(target, 'navigation_tasks')) {
    toggleClass(projects, 'page_hidden')
    toggleClass(tasks, 'page_hidden')
  }
  
  if (hasClass(target, 'button_xml-create-project')) {
    createItemXml(token, 'project', { name: 'project', code: 'code' })
  }

  if (hasClass(target, 'button_fetch-create-project')) {
    createItemFetch(token, 'project', { name: 'project', code: 'code' })
  }

  if (hasClass(target, 'button_axios-create-project')) {
    createItemAxios(token, 'project', { name: 'project', code: 'code' })
  }

  if (hasClass(target, 'button_xml-get-project-list')) {
    getItemListXml(token, 'project')
  }
  
  if (hasClass(target, 'button_fetch-get-project-list')) {
    getItemListFetch(token, 'project')
  }

  if (hasClass(target, 'button_axios-get-project-list')) {
    getItemListAxios(token, 'project')
  }

  if (hasClass(target, 'button_xml-edit-project')) {
    editItemXml(token, 'project', testDataId.project, {name: 'newName'})
  }
  
  if (hasClass(target, 'button_fetch-edit-project')) {
    editItemFetch(token, 'project', testDataId.project, {name: 'newName'})
  }

  if (hasClass(target, 'button_axios-edit-project')) {
    editItemAxios(token, 'project', testDataId.project, {name: 'newName'})
  }

  if (hasClass(target, 'button_xml-delete-project')) {
    deleteItemXml(token, 'project', testDataId.project)
  }
  
  if (hasClass(target, 'button_fetch-delete-project')) {
    deleteItemFetch(token, 'project', testDataId.project)
  }

  if (hasClass(target, 'button_axios-delete-project')) {
    deleteItemAxios(token, 'project', testDataId.project)
  }

  if (hasClass(target, 'button_xml-create-task')) {
    createItemXml(token, 'task', { name: 'task', description: 'desc', projectId: testDataId.project})
  }

  if (hasClass(target, 'button_fetch-create-task')) {
    createItemFetch(token, 'task', { name: 'task', description: 'desc', projectId: testDataId.project})
  }

  if (hasClass(target, 'button_axios-create-task')) {
    createItemAxios(token, 'task', { name: 'task', description: 'desc', projectId: testDataId.project})
  }

  if (hasClass(target, 'button_xml-get-task-list')) {
    getItemListXml(token, 'task')
  }
  
  if (hasClass(target, 'button_fetch-get-task-list')) {
    getItemListFetch(token, 'task')
  }

  if (hasClass(target, 'button_axios-get-task-list')) {
    getItemListAxios(token, 'task')
  }

  if (hasClass(target, 'button_xml-edit-task')) {
    editItemXml(token, 'task', testDataId.task, {name: 'newName'})
  }
  
  if (hasClass(target, 'button_fetch-edit-task')) {
    editItemFetch(token, 'task', testDataId.task, {name: 'newName'})
  }

  if (hasClass(target, 'button_axios-edit-task')) {
    editItemAxios(token, 'task', testDataId.task, {name: 'newName'})
  }

  if (hasClass(target, 'button_xml-delete-task')) {
    deleteItemXml(token, 'task', testDataId.task)
  }
  
  if (hasClass(target, 'button_fetch-delete-task')) {
    deleteItemFetch(token, 'task', testDataId.task)
  }

  if (hasClass(target, 'button_axios-delete-task')) {
    deleteItemAxios(token, 'task', testDataId.task)
  }
})
