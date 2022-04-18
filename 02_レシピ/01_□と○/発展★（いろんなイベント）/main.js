const figure = document.getElementById("figure")

// onclick を oncbclick に変更
figure.ondblclick = () => {
  figure.classList.toggle("rounded")
}
