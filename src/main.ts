import { createApp } from 'vue'
import './styles/mug.scss'
import App from './App.vue'

import { createPinia } from "pinia";
import { defineStore } from "pinia";

type Drink = {
  drinkName: string,
  isIced: boolean,
  creamer: string,
  syrup: string,
  base: string
}

export const useStore = defineStore('useDrinks', {
  state: () => ({
    drinks: [] as Drink[], 
  }),
});

createApp(App).use(createPinia()).mount("#app");