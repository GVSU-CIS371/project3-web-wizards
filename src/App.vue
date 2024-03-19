<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'"  :creamer="currentCreamer"/>
    <ul>
      <li>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";

// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

const Creamers = ref(["Milk", "Cream", "Half & Half"])
const currentCreamer = ref("Milk");


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
