<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup" :beverage="currentBaseBeverage" />
    <ul>
      <li>
        <strong> Temperature: </strong>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong> Creamer: </strong>
        <template v-for="milk in Creamers" :key="milk">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`r${milk}`"
              :value="milk"
              v-model="currentCreamer"
            />
            {{ milk }}
          </label>
        </template>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong> Syrup: </strong>
        <template v-for="syrup in Syrup" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <strong> Base Beverage: </strong> 
        <template v-for="beverage in baseBeverage" :key="beverage">
          <label>
            <input
              type="radio"
              name="BaseBeverage"
              :id="`r${beverage}`"
              :value="beverage"
              v-model="currentBaseBeverage"
            />
            {{ beverage }}
          </label>
        </template>
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
