const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
addButton.onclick = () => {
  addCard(inputElement.value)
}

// Enterキーを押したときの処理を登録
inputElement.onkeydown = (e) => {
  if (e.keyCode === 13) {
    addCard(inputElement.value)
  }
}

// カードをtodoリストに追加する
const addCard = (text) => {
  // カードを作成する
  const card = createCard(text)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
