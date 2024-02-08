import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import setupInterceptors from '@/services/setupInterceptors';
import store from "@/store/index.js";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

setupInterceptors(store);

const options = {
  position: 'top-right',
  timeout: 2000
};

createApp(App)
  .use(store)
  .use(Toast, options)
  .mount('#app')
