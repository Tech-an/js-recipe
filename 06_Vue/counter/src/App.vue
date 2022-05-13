<template>
  <Counter> <h1>初期値なしのカウンター</h1> </Counter>
  <Counter v-bind:initialValue="100"> <h1>初期値=100のカウンター</h1> </Counter>
</template>

<script>
import Counter from "@/components/Counter.vue"

export default {
  name: "App",
  components: {
    Counter,
  },
}
</script>

<style></style>
