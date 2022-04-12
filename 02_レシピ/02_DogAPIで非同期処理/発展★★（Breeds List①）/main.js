const imageElement = document.getElementById("dog-image")
const dogSelector = document.getElementById("dog-selector")

window.onload = () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // 犬種を選択するOptionを作成する
      createDogOption(data.message)
      // 初期値を元に犬の画像を表示する
      dogAPI(dogSelector.value)
    })
}

// 犬種を選択するOptionを作成します
const createDogOption = (dogObjs) => {
  Object.keys(dogObjs).forEach((dogName) => {
    const dogOption = document.createElement("option")
    dogOption.value = dogName
    dogOption.text = dogName
    dogSelector.appendChild(dogOption)
  })
}

// 犬種が変更された場合にその犬種の犬の画像を表示する
dogSelector.onchange = (e) => {
  dogAPI(e.target.value)
}

// 引数で指定された犬種の犬の画像を表示する
const dogAPI = (dogName) => {
  // 指定したサーバーにデータを取りに行く
  fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    //1つめのthenでreturnした値が2つめのthenの引数(data)に渡されている
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
