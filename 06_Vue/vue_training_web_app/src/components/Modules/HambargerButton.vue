<!-- 概要：youtube用のハンバーガーメニューを作成します -->

<template>
  <div class="hambargerButton">
    <img @click="changeMenuState" src="@/assets/hambarger_menu.png" alt="" />
    <HambargerMenuVue v-if="doOpen" />
  </div>
</template>

<script>
import HambargerMenuVue from "./HambargerMenu.vue"

export default {
  components: {
    HambargerMenuVue,
  },
  data: function () {
    return {
      doOpen: false,
    }
  },
  methods: {
    changeMenuState: function () {
      this.doOpen = !this.doOpen
    },
  },
}
</script>

<style>
img {
  vertical-align: bottom;
}
.hambargerButton {
  padding: 8px;
}

/* ハンバーガーメニューを押したときに、全体を暗くする */
/* ハンバーガーメニューを押したときに、ハンバーガーメニューの内容を表示させる */
</style>
