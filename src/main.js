import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import setupInterceptors from '@/services/setupInterceptors';
import store from "@/store/index.js";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

setupInterceptors(store);
// const pinia = createPinia()
const options = {
  position: 'top-right',
  timeout: 2000
};

createApp(App)
  .use(store)
  .use(Toast, options)
  // .use(pinia)
  .mount('#app')
