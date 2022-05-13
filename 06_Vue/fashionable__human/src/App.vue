<template>
  <div class="container">
    <Human cloth="👕"></Human>
    <Human cloth="👗"></Human>
    <Human cloth="👚"></Human>
  </div>
</template>

<script>
import Human from "@/components/Human.vue"
// @ は srcディレクトリを指す：srcディレクトリの中にcompomentファイルを入れるのは固定なため、@/...のような指定方法が推奨される

export default {
  components: {
    Human,
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>

<!-- <template>
  <simple-memo v-for="memo in memos" v-bind:key="memo.id">
    {{ memo.text }}
  </simple-memo>
  <simple-memo>
    <button>ボタン</button>
  </simple-memo>
  <simple-memo>
    <button>
      <simple-memo>simple-memoの中にsimple-memo入れてみた</simple-memo>
    </button>
  </simple-memo>
  <simple-memo>
    <button>
      <simple-memo>
        <button>
          <simple-memo>
            <button><simple-memo>めー－っちゃ入れてみた</simple-memo></button>
          </simple-memo>
        </button>
      </simple-memo>
    </button>
  </simple-memo>
  <simple-memo bgColor="green">背景色変えてみた</simple-memo>
  <simple-memo bgColor="blue">もういっちょ！</simple-memo>
  <simple-memo v-bind:bgColor="inputColor">
    ユーザー入力で背景色を変えてみた！
  </simple-memo>
  <input type="text" v-model="inputColor" v-on:input="log" />
</template>

<script>
import SimpleMemo from "@/components/SimpleMemo.vue";
export default {
  components: { SimpleMemo },
  data() {
    return {
      memos: [
        { id: 0, text: "メモ1" },
        { id: 1, text: "メモ2" },
        { id: 2, text: "メモ3" },
      ],
    };
  },
};
</script> -->
