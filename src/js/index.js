import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'

import { projectItem } from '@/components/project-item/index.js'
import { taskItem } from '@/components/task-item/index.js'
import { projectsEmpty } from '@/components/projects-empty/index.js'

import { renderContent } from '@/js/helpers.js'

renderContent(
  projectItem(
    'Название',
    '2345432345456',
    'Иванов И.И. создал 1 час назад',
    'Баранов В.В. изменил 1 минуту назад',
  ),
  taskItem(
    'Название',
    '2345432345456',
    'Иванов И.И. создал 1 час назад',
    'Баранов В.В. изменил 1 минуту назад',
  ),
  projectsEmpty(),
)
