export function setActiveElem(target, active, activeClass, defaultClass) {
  if (!target.classList.contains(activeClass)) {
    active.classList.remove(activeClass)
    active.classList.add(defaultClass)

    target.classList.remove(defaultClass)
    target.classList.add(activeClass)
  }
}

export function hideDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown')
  document.querySelector('.navigation-user').classList.remove('navigation-user_active')
  document.querySelectorAll('.list-item__more-icon').forEach(el=>{
    el.classList.add('button_secondary_default')
    el.classList.remove('button_secondary_active')
  });
  dropdowns.forEach((el) => {
    el.classList.remove('dropdown_active')
    el.classList.add('dropdown_hidden')
  })
}



