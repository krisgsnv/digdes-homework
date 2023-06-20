export function moreIcon(classes='') {
  return `<button class="more-icon button button_small${classes}" type="button" title="Действия">
            <svg class="more-icon__svg more-icon__svg_secondary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#more-icon" />
            </svg>
          </button>`
}
