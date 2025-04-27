import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // 🚀 Aquí importas el router que creaste

createApp(App)
  .use(router)                // 🚀 Aquí le dices a Vue que use ese router
  .mount('#app')
