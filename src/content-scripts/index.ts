import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount(createRootElement())

function createRootElement() {
  const root = document.createElement('div')

  root.id = 'crx-app'
  document.body.append(root)

  return root
}
