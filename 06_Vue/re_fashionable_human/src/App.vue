<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <CounterButton>カウンター1</CounterButton>
  <CounterButton :defaultNum="100">カウンター2</CounterButton>
</template>

<script>
import CounterButton from "./components/CounterButton.vue"

export default {
  name: "App",
  components: {
    CounterButton,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
