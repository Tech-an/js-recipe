<template>
  <div class="serachBox">
    <TextInputVue />
    <VoiceInputVue />
  </div>
</template>

<script>
import TextInputVue from "./TextInput.vue"
import VoiceInputVue from "./VoiceInput.vue"

export default {
  components: {
    TextInputVue,
    VoiceInputVue,
  },
}
</script>

<style>
.serachBox {
  display: flex;
  flex-grow: 1;
  margin-left: 40px;
  height: 80%;
}
</style>
