<template>
  <div class="recommendSearch">
    <button v-for="text in recommendSearch" :key="text">{{ text }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendSearch: ["すべて", "関連動画"],
    }
  },
}
</script>

<style>
.recommendSearch {
  display: flex;
  margin-bottom: 20px;
}
.recommendSearch > button {
  border-radius: 16px;
  background-color: rgb(230, 230, 230);
  border: rgb(220, 220, 220) solid 1px;
  padding: 0 12px;
  margin-right: 8px;
  height: 30px;
  cursor: pointer;
}
</style>
