<template>
  <div class="watch">
    <HeaderVue />
    <div class="main">
      <PrimaryContainerVue />
      <SecondaryContainerVue />
    </div>
  </div>
</template>

<script>
import HeaderVue from "@/components/Containers/HeaderContainer.vue"
import PrimaryContainerVue from "@/components/Containers/PrimaryContainer.vue"
import SecondaryContainerVue from "@/components/Containers/SecondaryContainer.vue"

export default {
  components: {
    HeaderVue,
    PrimaryContainerVue,
    SecondaryContainerVue,
  },
}
</script>

<style>
.main {
  display: flex;
  padding: 24px 15px 0;
  background-color: rgb(248, 248, 248);
}
</style>
