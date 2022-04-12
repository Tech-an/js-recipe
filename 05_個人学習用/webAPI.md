# WebAPI について

```bash
WebAPIを自由に使えるようになると、一気にブラウザでできることの幅が広がる！

WebAPIの例：
・DogAPI

WebAPIとは？
> 「Web 上で公開されていて、プログラムから利用できるアプリケーション」のこと

WebAPIの種類
・「データを提供する」WebAPI

WebAPIの使い方
1. プログラム上からURLで指定したサーバーに対してデータを要求する
2. サーバーを要求に応じてデータを返す

各WebAPIの使い方
> 「公式ドキュメントにすべてが記されている！」


WebAPIのコードの仕組み
ひとつめのthen()では、レスポンスresに含まれるデータを JSON として読み込んでオブジェクトに変換。
そして、ふたつめのthen()に渡している（以下コード参照）。

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  // 1つめのthenでreturnした値が2つめのthenの引数(data)に渡されている
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

```

# 用語メモ

```bash
・fetch：特定の場所からデータなどを読みだす動作のことを指す


```
