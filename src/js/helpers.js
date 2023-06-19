export function createMain() {
  const main = document.createElement('main')
  main.classList.add('main')
  return main
}

export function createRoot() {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
  return app
}
