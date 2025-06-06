import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/routes'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
