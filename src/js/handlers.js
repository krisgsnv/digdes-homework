import { setActiveElem, hideDropdowns } from './helpers'

document.addEventListener('click', function (e) {
  const target = e.target

  const dropdown = target.closest('.dropdown');
  const inDropdown = e.composedPath().includes(dropdown);
  if (!target.classList.contains('dropdown') && !target.classList.contains('navigation-user') && !target.classList.contains('list-item__more-icon')) {
		hideDropdowns()
	} 

  if (target.classList.contains('navigation-user')) {
    const dropdown = target.parentNode.querySelector('.dropdown')
    target.classList.toggle('navigation-user_active')
    dropdown.classList.toggle('dropdown_active')
  }

  else if (target.classList.contains('list-item__more-icon')) {
    const dropdown = target.parentNode.querySelector('.dropdown')
    target.classList.toggle('button_secondary_default')
    target.classList.toggle('button_secondary_active')
    dropdown.classList.toggle('dropdown_active')
    dropdown.classList.toggle('dropdown_hidden')
  }
  else {
    hideDropdowns()
  }

 
    // if (!(target.classList.contains('.dropdown') || target.classList.contains('navigation-user'))) {
    //   hideDropdowns()
    //   //document.querySelector('.navigation-user').classList.remove('navigation-user_active')
    // }

  if (target.classList.contains('navigation__item')) {
    const active = document.querySelector('.navigation__item_active')
    setActiveElem(target, active, 'navigation__item_active', 'navigation__item_default')
  }

})
function showDropdown() {
  
}