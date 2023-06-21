import '@/scss/index.scss'
import '@/js/register.js'
import '@/js/handlers.js'
import '@/js/api.js'

import { navigation } from '../components/navigation/index.js'

const app = document.getElementById('app');
const main = document.createElement('main');
main.classList.add('main');

app.insertAdjacentHTML('beforeend', navigation())
app.appendChild(main)
