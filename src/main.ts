import { createApp } from 'vue'
import './styles/mug.scss'
import App from './App.vue'

createApp(App).mount('#app')
App.use(createPinia());

import {createPinia} from "pinia";
import {defineStore} from "pinia";

export const useStore = defineStore("useDrinks", {
  state: () => {
    return {
      drinkName: "",
      temps: "",
      base: "",
      creamer: "",
      syrup: ""
    };
  }
})