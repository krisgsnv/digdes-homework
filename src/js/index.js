import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'

import { createRoot } from './helpers.js'
import { createMain } from './helpers.js'

import { navigation } from '../components/navigation/index.js'
import { projectItem } from '../components/project-item/index.js'
import { taskItem } from '../components/task-item/index.js'
import { projectsEmpty } from '../components/projects-empty/index.js'

const app = createRoot()
const main = createMain()

app.insertAdjacentHTML('beforeend', navigation())
app.appendChild(main)

main.insertAdjacentHTML('beforeend', projectItem())
main.insertAdjacentHTML('beforeend', taskItem())
main.insertAdjacentHTML('beforeend', projectsEmpty())
