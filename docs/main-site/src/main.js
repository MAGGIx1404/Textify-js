import '@/library/Textify.min.css'
import '@/assets/styles/index.scss'

import FontFaceObserver from 'fontfaceobserver'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const font = new FontFaceObserver('Inter')

font.load().then(() => {
  app.mount('#app')
})
