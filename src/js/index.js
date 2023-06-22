import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'

import page from '@/components/page'
import row from '@/components/row'
import primaryButton from '@/components/primary-button'

import { renderContent } from '@/js/helpers.js'

renderContent(
  page(
    ['projects'],
    row(
      primaryButton('Создать с XML', ' button_xml-create-project'),
      primaryButton('Создать с Fetch', ' button_fetch-create-project'),
      primaryButton('Создать с Axios', ' button_axios-create-project'),
    ),
    row(
      primaryButton('Получить список с XML', ' button_xml-get-project-list'),
      primaryButton('Получить список с Fetch', ' button_fetch-get-project-list'),
      primaryButton('Получить список с Axios', ' button_axios-get-project-list'),
    ),
    row(
      primaryButton('Редактировать с XML', ' button_xml-edit-project'),
      primaryButton('Редактировать с Fetch', ' button_fetch-edit-project'),
      primaryButton('Редактировать с Axios', ' button_axios-edit-project'),
    ),
    row(
      primaryButton('Удалить через XML', ' button_xml-delete-project'),
      primaryButton('Удалить через Fetch', ' button_fetch-delete-project'),
      primaryButton('Удалить через Axios', ' button_axios-delete-project'),
    ),
  ),
  page(
    ['tasks', 'page_hidden'],
    row(
      primaryButton('Создать с XML', ' button_xml-create-task'),
      primaryButton('Создать с Fetch', ' button_fetch-create-task'),
      primaryButton('Создать с Axios', ' button_axios-create-task'),
    ),
    row(
      primaryButton('Получить список с XML', ' button_xml-get-task-list'),
      primaryButton('Получить список с Fetch', ' button_fetch-get-task-list'),
      primaryButton('Получить список с Axios', ' button_axios-get-task-list'),
    ),
    row(
      primaryButton('Редактировать с XML', ' button_xml-edit-task'),
      primaryButton('Редактировать с Fetch', ' button_fetch-edit-task'),
      primaryButton('Редактировать с Axios', ' button_axios-edit-task'),
    ),
    row(
      primaryButton('Удалить через XML', ' button_xml-delete-task'),
      primaryButton('Удалить через Fetch', ' button_fetch-delete-task'),
      primaryButton('Удалить через Axios', ' button_axios-delete-task'),
    ),
  ),
)
