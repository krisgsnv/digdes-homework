import navigation from '@/components/navigation'

export function toggleClass(elem, ...classes) {
  classes.map((el) => elem.classList.toggle(el))
}

export function hasClass(elem, className) {
  return elem.classList.contains(className)
}

export function setActiveElem(target, active, activeClass, defaultClass) {
  if (!hasClass(target, activeClass)) {
    active.classList.remove(activeClass)
    active.classList.add(defaultClass)

    target.classList.remove(defaultClass)
    target.classList.add(activeClass)
  }
}

export function hideAllDropdowns(dropdowns) {
  const navUser = document.querySelector('.navigation-user')
  navUser.classList.remove('navigation-user_active')
  document.querySelectorAll('.list-item__more-icon').forEach((el) => {
    resetListControl(el)
  })
  dropdowns.forEach((el) => {
    hideDropdown(el)
  })
}

export function hideOtherDropdowns(dropdowns, target) {
  dropdowns.forEach((el) => {
    if (el == target) {
      toggleClass(target, 'dropdown_active', 'dropdown_hidden')
    } else {
      hideDropdown(el)
    }
  })
}

export function hideDropdown(target) {
  target.classList.remove('dropdown_active')
  target.classList.add('dropdown_hidden')
}

export function resetListControl(target) {
  target.classList.add('button_secondary_default')
  target.classList.remove('button_secondary_active')
}

export function renderContent(...elements) {
  const app = document.getElementById('app')
  app.insertAdjacentHTML('beforeend', navigation())

  const main = document.createElement('main')
  main.classList.add('main')
  app.appendChild(main)

  elements.forEach((el) => {
    main.insertAdjacentElement('beforeend', el)
  })
}