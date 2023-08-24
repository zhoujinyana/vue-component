
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
//全局注册

const app = createApp(App)
//在中间写组件注册
app.component("Header",Header)


app.mount('#app')

