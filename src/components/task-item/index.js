import avatarSrc from '@/assets/images/profile.jpg'
import avatar from '@/components/avatar/index'
import statusLabel from '@/components/status-label'
import dropdown from '@/components/dropdown';
import moreIcon from '@/components/more-icon';

export default function taskItem(title, num, created, modified) {
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
  return `<div class="list-item">
              <div class="list-item__content">
                <div class="task-item__heading">
                  <p class="list-item__title">${title}</p>
                  ${avatar(avatarSrc)}
                </div>
                <div class="list-item__info">
                  <span class="list-item__num">#${num}</span>
                  <span class="list-item__status">${created}</span>
                  ${statusLabel('Черновик', ' status-label_draft')}
                  <span class="list-item__status list-item__status_right">${modified}</span>
                </div>
              </div>
              ${moreIcon(' list-item__more-icon list-item__more-icon_default button_secondary button_secondary_default')}
              ${dropdown(dropdownActions, ' list-item__dropdown dropdown_hidden')}
            </div>`
}
