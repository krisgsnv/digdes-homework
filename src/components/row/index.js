export default function row(...elements) {
    const row = document.createElement('div')
    row.classList.add('row')
    elements.forEach((el) => row.insertAdjacentHTML('beforeend', el))
    return row
}
