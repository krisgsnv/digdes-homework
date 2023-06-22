import button from '@/components/button'

export default function primaryButton(text, classes) {
  return button(text, ` projects-empty__button button_primary button_primary_default${classes}`)
}
