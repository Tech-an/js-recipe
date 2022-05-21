<template>
  <div class="mainMenu">
    <HambargerButtonVue />
    <LogoButtonVue />
  </div>
</template>

<script>
import LogoButtonVue from "./LogoButton.vue"
import HambargerButtonVue from "./HambargerButton.vue"

export default {
  components: {
    LogoButtonVue,
    HambargerButtonVue,
  },
}
</script>

<style>
.mainMenu {
  display: flex;
  align-items: center;
}

.mainMenu > *:hover {
  cursor: pointer;
}
</style>
