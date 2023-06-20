import { button } from "../button"

export function projectsEmpty() {
  return `<section class="projects-empty">
    <p class="projects-empty__message">Не создан ни один проект</p>
    ${button('Добавить', ' projects-empty__button button button_primary button_primary_default')}
  </section>`
}
