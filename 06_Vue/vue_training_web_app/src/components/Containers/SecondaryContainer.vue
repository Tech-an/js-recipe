<template>
  <div class="secondaryContainer">
    <AdBoxVue />
    <RecommendBoxVue />
  </div>
</template>

<script>
import AdBoxVue from "../Modules/AdBox.vue"
import RecommendBoxVue from "../Modules/RecommendBox.vue"

export default {
  components: {
    AdBoxVue,
    RecommendBoxVue,
  },
}
</script>

<style>
.secondaryContainer {
  width: 400px;
}
</style>
