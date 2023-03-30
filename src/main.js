import { createApp } from 'vue';
import App from './App.vue';
import Vue3ScrollMagic from "./plugins/scrollmagic.js";

const app = createApp(App);

app.use(Vue3ScrollMagic);
// console.log(app.config.globalProperties.$scrollmagic);
app.mount('#app');