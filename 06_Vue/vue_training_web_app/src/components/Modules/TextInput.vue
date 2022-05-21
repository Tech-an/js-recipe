<template>
  <div class="textInput">
    <input type="text" placeholder="検索" />
    <img src="@/assets/search_logo.webp" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.textInput {
  display: flex;
  flex-grow: 1;
}
.textInput > * {
  border: 1px rgb(211, 211, 211) solid;
  background-color: rgb(248, 248, 248);
}
.textInput > input {
  flex-grow: 1;
}
.textInput > input:focus {
  background-color: aquamarine;
}
</style>
