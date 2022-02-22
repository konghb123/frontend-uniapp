// #ifndef VUE3
import App from './App'

// const app = new Vue({
//     ...App
// })
// app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
// #endif