import { avatar } from '../avatar/index'

export function navigation() {
  return ` <header class="navigation">
            <button class="navigation__item_default button button_primary button_primary_default" type="button">Проекты</button>
            <button class="navigation__item_default button button_primary button_primary_default" type="button">Задачи</button>
            <button class="navigation__item_active button" type="button">Пользователи</button>
            <button class="navigation-user" type="button" title="Профиль">
              ${avatar()}
              <svg class="navigation-user__arrow" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <use xlink:href="#nav-arrow" />
              </svg>
            </button>
          </header>`
}