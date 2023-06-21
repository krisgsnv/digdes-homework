import avatarSrc from '@/assets/images/profile.jpg'
import { avatar } from '@/components/avatar'
import { button } from '@/components/button'
import { dropdown } from '@/components/dropdown'

export function navigation() {
  const dropdownActions = [
    {
      link: '#',
      text: 'Профиль',
    },
    {
      link: '#',
      text: 'Выход',
    }
  ]
  return ` <header class="navigation">
            ${button('Проекты', ' navigation__item navigation__item_default')}
            ${button('Задачи', ' navigation__item navigation__item_default')}
            ${button('Пользователи', ' navigation__item navigation__item_active')}
            <button class="navigation-user" type="button" title="Профиль">
              ${avatar(avatarSrc, ' navigation-user__avatar')}
              <svg class="navigation-user__arrow" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <use xlink:href="#nav-arrow" />
              </svg>
            </button>
            ${dropdown(dropdownActions, ' navigation__dropdown dropdown_hidden')}
          </header>`
}
