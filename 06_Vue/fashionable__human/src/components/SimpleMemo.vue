<template>
  <div class="simple-memo" v-bind:style="{ backgroundColor: bgColor }">
    <slot></slot>
  </div>
</template>

<style scoped>
.simple-memo {
  margin: 4px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: orange;
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      inputColor: "aaa",
    }
  },
  methods: {
    log() {
      console.log(this.inputColor)
    },
  },
  props: {
    bgColor: String,
    // 以下のような書き方もあるよ！
    // bgColor: {
    //   type: String,
    //   default: "orange",
    //   required: true,
    //   validator(value) {
    //     return ["orange", "pink", "green"].includes(value)
    // }
    // },
  },
  created() {
    console.log(this.bgColor)
  },
}
</script>
