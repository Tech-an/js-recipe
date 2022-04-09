const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiplyButton = document.getElementById("multiply-button")

let count = 0

plusButton.onclick = () => {
  count += 1
  display.textContent = count
}

minusButton.onclick = () => {
  count -= 1
  display.textContent = count
}

multiplyButton.onclick = () => {
  count *= 2
  display.textContent = count
}
