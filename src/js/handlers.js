import { setActiveElem, hideAllDropdowns, hideOtherDropdowns, resetListControl, hasClass, toggleClass } from './helpers'

document.addEventListener('click', function (e) {
  const target = e.target

  if (target.classList.contains('navigation__item')) {
    const active = document.querySelector('.navigation__item_active')
    setActiveElem(target, active, 'navigation__item_active', 'navigation__item_default')
  }

  const closestDropdown = target.closest('.dropdown')
  const inDropdown = e.composedPath().includes(closestDropdown)
  const targetDropdown = target.parentNode.querySelector('.dropdown')
  const dropdowns = document.querySelectorAll('.dropdown')
  const listItemControls = document.querySelectorAll('.list-item__more-icon')
  const navUser = document.querySelector('.navigation-user');

  if (hasClass(target, 'navigation-user')) {
    toggleClass(target, 'navigation-user_active')
    listItemControls.forEach((el) => {
      resetListControl(el)
    })
    hideOtherDropdowns(dropdowns, targetDropdown)
  } else if (hasClass(target, 'list-item__more-icon')) {
    navUser.classList.remove('navigation-user_active')
    listItemControls.forEach((el) => {
      if (el == target) {
        toggleClass(target, 'button_secondary_default', 'button_secondary_active')
      } else {
        resetListControl(el)
      }
    })
    hideOtherDropdowns(dropdowns, targetDropdown)
  } else if (!inDropdown) {
    hideAllDropdowns(dropdowns)
  }
})
