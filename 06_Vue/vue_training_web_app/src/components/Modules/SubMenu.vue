<template>
  <div class="subMenu">
    <SubMenuContentVue />
    <SubMenuContentVue />
    <SubMenuContentVue />
    <SubMenuContentVue />
  </div>
</template>

<script>
import SubMenuContentVue from "./SubMenuContent.vue"

export default {
  components: {
    SubMenuContentVue,
  },
}
</script>

<style>
.subMenu {
  display: flex;
}
.subMenu > :first-child {
  margin-left: 10px;
}
</style>
