export default function page(classes, ...elements) {
    const page = document.createElement('div')
    classes.forEach(className => page.classList.add(className))
    elements.forEach((el) => page.insertAdjacentElement('beforeend', el))
    return page
}
