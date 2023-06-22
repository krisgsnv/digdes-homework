import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'

import { navigation } from '../components/navigation/index.js'
import { createPrimaryButton } from './helpers.js'

const app = document.getElementById('app')
const main = document.createElement('main')
main.classList.add('main')

app.insertAdjacentHTML('beforeend', navigation())
app.appendChild(main)

main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Создать с XML', ' button_xml-create-project'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Создать с Fetch', ' button_fetch-create-project'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Получить список с XML', ' button_xml-get-project-list'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Получить список с Fetch', ' button_fetch-get-project-list'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Редактировать с XML', ' button_xml-edit-project'),
)
main.insertAdjacentHTML(
    'beforeend',
    createPrimaryButton('Редактировать с Fetch', ' button_fetch-edit-project'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Удалить через XML', ' button_xml-delete-project'),
)
main.insertAdjacentHTML(
  'beforeend',
  createPrimaryButton('Удалить через fetch', ' button_fetch-delete-project'),
)
