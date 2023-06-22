export default function dropdown(actions, classes = '') {
  return `<ul class="dropdown${classes}"> 
            ${actions.map(
              (action) =>
                `<li class="dropdown__action${action.accent ? ' dropdown__action_accent' : ''}">
                <a href=${action.link}>${action.text}</a>
            </li>`,
            ).join('')}
        </ul>`
}
