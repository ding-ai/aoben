import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import lazyLoad from './directives/lazyLoad'
import '@/assets/fonts/fonts.css'

const app = createApp(App)

// 注册全局指令
app.directive('lazy', lazyLoad)

app.use(createPinia())
app.use(router)

app.mount('#app')
