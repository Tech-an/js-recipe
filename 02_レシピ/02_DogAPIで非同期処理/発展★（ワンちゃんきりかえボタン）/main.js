const changeButton = document.getElementById("change-button")
const catImageElement = document.getElementById("cat-image")
const cocktailImageElement = document.getElementById("cocktail-image")

const imageApi = () => {
  // 指定したサーバーにデータを取りに行く
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      catImageElement.src = data[0].url // 画像を表示する
    })

  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      cocktailImageElement.src = data.drinks[0].strDrinkThumb
    })
}

window.onload = () => {
  imageApi()
}

changeButton.onclick = () => {
  imageApi()
}
