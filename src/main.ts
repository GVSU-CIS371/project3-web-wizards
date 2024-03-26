import { createApp } from 'vue'
import './styles/mug.scss'
import App from './App.vue'

createApp(App).mount('#app')

import createPinia from "pinia";
import {defineStore} from "pinia";

export const useStore = defineStore("choiceStore", {
  state: () => {
    return {
      drinkname: "",
      isCold: "",
      creamer: "",
      syrup: "",
      base: "",
    };
  }
})