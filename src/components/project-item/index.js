import { dropdown } from "../dropdown";
import { moreIcon } from "../more-icon";

export function projectItem(title, num, created, modified) {
  const dropdownActions = [
    {
      link: '#',
      text: 'Редактировать',
    },
    {
      link: '#',
      text: 'Удалить',
      accent: true
    }
  ] 
  return ` <div class="list-item">
            <div class="list-item__content">
              <p class="list-item__title">${title}</p>
              <div class="list-item__info">
                <span class="list-item__num">#${num}</span>
                <span class="list-item__status">${created}</span>
                <span class="list-item__status list-item__status_right">${modified}</span>
              </div>
            </div>
            ${moreIcon(' list-item__more-icon list-item__more-icon_default button_secondary button_secondary_default')}
            ${dropdown(dropdownActions, ' list-item__dropdown dropdown_hidden')}
          </div>`
}
