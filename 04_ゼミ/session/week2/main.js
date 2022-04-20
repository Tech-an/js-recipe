const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")

addButton.onclick = () => {
  //   console.dir(memoInput)
  console.log(memoInput.value)
  const memoContainer = document.getElementById("memo-container")
  const div = document.createElement("div")
  div.textContent = memoInput.value
  memoInput.value = "" // 発展★（inputタグ）
  memoContainer.appendChild(div)
}
