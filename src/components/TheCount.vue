<script setup lang="ts">
import { defineStore } from 'pinia';

const useA = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Counter',
  }),
});

const store = useA();
store.count = 10;

store.$subscribe(() => { console.log(12321312) })

function clickMe() {
  store.count++ 
  // store.$patch({count:100})
  console.log(store.count)
}
// const clickMe = () => { 
//      store.count++ 
// }

</script>

<template>
  <div class="greetings">
    <h1>这是个计数器:  store.count: {{ store.count }}</h1>
    <button :style="{margin: '50px'}" type="button" @click="clickMe"> 点我 </button>
  </div>
</template>

<style scoped>

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

</style>
