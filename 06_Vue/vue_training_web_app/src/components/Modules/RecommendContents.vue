<template>
  <div class="recommendContents">
    <div
      class="recommendContent"
      v-for="content in recommendContents"
      :key="content"
    >
      <ThumbNailVue :img-name="content.img" />
      <img src="@/assets/img1.png" alt="" />
      <DiscriptionContentVue />
    </div>
  </div>
</template>

<script>
import ThumbNailVue from "./ThumbNail.vue"
import DiscriptionContentVue from "./DiscriptionContent.vue"

export default {
  components: {
    ThumbNailVue,
    DiscriptionContentVue,
  },
  data() {
    return {
      imgPath: "@/assets/",
      recommendContents: [
        {
          img: this.imgPath + "img1.png",
          title: "test1",
          name: "testtesttest1",
          watchNum: "50万",
          posted: "1カ月前",
        },
        {
          img: "img2.png",
          title: "test2",
          name: "testtesttest2",
          watchNum: "30万",
          posted: "2カ月前",
        },
        {
          img: "img3.png",
          title: "test3",
          name: "testtesttest3",
          watchNum: "3万",
          posted: "3日前",
        },
      ],
    }
  },
}
</script>

<style>
.recommendContent {
  display: flex;
}
</style>
