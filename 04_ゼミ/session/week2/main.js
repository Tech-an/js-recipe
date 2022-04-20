const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = () => {
  addToDo(memoInput.value)
}

function addToDo(value) {
  const memoBlock = document.createElement("div")
  memoBlock.id = "flex"
  const inputForm = document.createElement("div")
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = () => {
    deleteToDo(memoContainer, memoBlock)
  }

  inputForm.textContent = value
  appendToDo(memoBlock, [inputForm, deleteButton])

  memoInput.value = "" // 発展★（inputタグ）
  memoContainer.appendChild(memoBlock)
}

function deleteToDo(parentNode, childNode) {
  parentNode.removeChild(childNode)
}

function appendToDo(parentNode, childNodes) {
  childNodes.forEach((childNode) => {
    parentNode.appendChild(childNode)
  })
}
