<template>
  <div class="header">
    <MainMenuVue />
    <SearchBoxVue />
    <SubMenuVue />
  </div>
</template>

<script>
import MainMenuVue from "../Modules/MainMenu.vue"
import SearchBoxVue from "../Modules/SearchBox.vue"
import SubMenuVue from "../Modules/SubMenu.vue"

export default {
  components: {
    MainMenuVue,
    SearchBoxVue,
    SubMenuVue,
  },
}
</script>

<style>
.header {
  height: 56px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
