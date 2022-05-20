<template>
  <div class="home">
    <CounterButton></CounterButton>
    <CounterButton :defaultNum="100">カウンター2</CounterButton>
  </div>
</template>

<script>
// @ is an alias to /src
import CounterButton from "@/components/CounterButton.vue"

export default {
  name: "HomeView",
  components: {
    CounterButton,
  },
}
</script>
