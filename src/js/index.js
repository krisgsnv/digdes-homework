import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'

import { createRoot } from './helpers.js'
import { createMain } from './helpers.js'

import { navigation } from '../components/navigation/index.js'
import { projectItem } from '../components/project-item/index.js'
import { taskItem } from '../components/task-item/index.js'
import { projectsEmpty } from '../components/projects-empty/index.js'

const app = document.getElementById('app');
const main = document.createElement('main');
main.classList.add('main');

app.insertAdjacentHTML('beforeend', navigation())
app.appendChild(main)

main.insertAdjacentHTML('beforeend', projectItem('Название', '2345432345456', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад'))
main.insertAdjacentHTML('beforeend', taskItem('Название', '2345432345456', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад'))
main.insertAdjacentHTML('beforeend', projectsEmpty())
