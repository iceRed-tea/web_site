import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import quasar from '@/utils/quasar.config.js';
import './style.css';
import 'quasar/src/css/index.sass'; //quasar样式

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(quasar);
app.mount('#app');
