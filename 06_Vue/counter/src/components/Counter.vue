<template>
  <div>
    <slot></slot>
    <p>{{ this.count }}</p>
  </div>
  <button v-on:click="countUp">+1</button>
</template>

<script>
export default {
  data() {
    return {
      count: this.initialValue,
    }
  },
  props: {
    initialValue: {
      type: Number,
      default: 0,
      required: false,
      validator(value) {
        return typeof value === Number
      },
    },
  },
  methods: {
    countUp() {
      this.count++
    },
  },
}
</script>
