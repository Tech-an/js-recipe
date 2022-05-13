Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp: () => {
      this.count += 1
    },
  },
}).mount("#app")
