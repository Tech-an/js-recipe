const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  //1つめのthenでreturnした値が2つめのthenの引数(data)に渡されている
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
