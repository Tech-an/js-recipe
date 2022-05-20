<template>
  <!-- ボタンを作る -->
  <button v-on:click="countUp"><slot>カウンターx</slot></button>
  <div>
    <p>カウント</p>
    <p>{{ count }}</p>
  </div>
</template>

<style></style>

<script>
export default {
  props: {
    defaultNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      count: this.defaultNum,
    }
  },
  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}
</script>
