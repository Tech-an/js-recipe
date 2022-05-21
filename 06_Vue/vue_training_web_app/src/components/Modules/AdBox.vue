<template>
  <div class="ad">
    <a href="https://www.charity-santa.com/">
      <div class="adImg"></div>
      <div class="adContent">
        <img src="@/assets/charity_santa_logo.png" alt="" />
        <div class="textContent">
          <h4>スタッフ募集</h4>
          <p>クリスマスイブ、一緒に子どもたちに愛された記憶を残しませんか？</p>
        </div>
        <button>開く</button>
      </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style>
.ad {
  border-bottom: rgb(214, 214, 214) solid 2px;
  margin-bottom: 20px;
}
.ad:hover {
  cursor: pointer;
}
.adImg {
  background-image: url("@/assets/charity_santa.png");
  height: 66px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
}
.adContent {
  display: flex;
  text-align: left;
  padding: 16px 0;
}
.adContent > img {
  height: 48px;
  width: 48px;
  padding: 3px;
  margin-right: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.14) 2px 2px 10px;
}
.textContent {
  flex-grow: 1;
}
.textContent > h4 {
  font-weight: normal;
}
.textContent > p {
  font-size: 0.75em;
  color: rgb(100, 100, 100);
  overflow: hidden;
  height: 1.5em;
}

.adContent > button {
  background-color: rgb(58, 96, 247);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px;
  width: 72px;
}
</style>
