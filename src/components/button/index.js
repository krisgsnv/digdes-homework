export default function button(text, classes='', type='button') {
  return `<button class="button${classes}" type=${type}>${text}</button>`
}
