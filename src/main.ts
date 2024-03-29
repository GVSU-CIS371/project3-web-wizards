import { createApp } from 'vue'
import './styles/mug.scss'
import App from './App.vue'

import { createPinia } from "pinia";
import { defineStore } from "pinia";

export type Drink = {
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
  actions: {
    addDrink(drink: Drink) {
      this.drinks.push(drink);
    },
    removeDrink(index: number) {
      this.drinks.splice(index, 1);
    },
    displayDrink() {
      console.log(this.drinks);
    }
  }
});

createApp(App).use(createPinia()).mount("#app");