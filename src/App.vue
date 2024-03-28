<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup" :beverage="currentBaseBeverage" />
    <ul>
      <li>
        <strong>Temperature:</strong>
        <select v-model="currentTemp">
          <option v-for="temp in temps" :key="temp" :value="temp">{{ temp }}</option>
        </select>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong>Creamer:</strong>
        <select v-model="currentCreamer">
          <option v-for="milk in Creamers" :key="milk" :value="milk">{{ milk }}</option>
        </select>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong>Syrup:</strong>
        <select v-model="currentSyrup">
          <option v-for="syrup in Syrup" :key="syrup" :value="syrup">{{ syrup }}</option>
        </select>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong>Base Beverage:</strong>
        <select v-model="currentBaseBeverage">
          <option v-for="beverage in baseBeverage" :key="beverage" :value="beverage">{{ beverage }}</option>
        </select>
      </li>
    </ul>
  </div>
  <input type="text" v-model="drinkName" placeholder="Enter drink name">
  <button @click="addDrink">Add Drink</button>
  <div>
    <h2>Created Drinks:</h2>
    <ul>
      <li v-for="(drink, index) in drinks" :key="index">
        {{ drink.drinkName }}
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";

// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

const Creamers = ref(["None", "Milk", "Cream", "Half & Half"])
const currentCreamer = ref("None");

const Syrup = ref(["None", "Vanilla", "Caramel", "Hazelnut"])
const currentSyrup = ref("None")

const baseBeverage = ref(["Coffee", "Green Tea", "Black Tea"])
const currentBaseBeverage = ref("Coffee")

const drinkName = ref("");
const drinks = useStore().drinks

import { useStore } from "./main.ts";
const drinkStore = useStore();
const addDrink = () => {
  const newDrink = {
    drinkName: drinkName.value,
    isIced: currentTemp.value === 'Cold',
    base: currentBaseBeverage.value,
    creamer: currentCreamer.value,
    syrup: currentSyrup.value
  };

  drinkStore.$patch((state) => {
    state.drinks.push(newDrink);
  });
};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
