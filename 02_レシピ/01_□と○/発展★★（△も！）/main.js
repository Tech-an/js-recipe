const figure = document.getElementById("figure")

// ロジック：今の図形の状態を覚えて、今の図形の状態に応じて、次の図形を表示させる（□→〇→△→□）
figure.onclick = () => {
  const isRounded = figure.classList.contains("rounded")
  const isTriangle = figure.classList.contains("triangle")
  const isSquare = !isRounded && !isTriangle

  // 状態の識別：roundedもtriangleも含んでいない場合は □ と判断できる
  // 状態の変化：□ → 〇
  if (isSquare) {
    // 〇を描画するために付与するクラスを変更する
    figure.classList.add("rounded")
  }

  // 状態の識別：roundedを含んでいる場合は 〇 と判断できる
  // 状態の変化：〇 → △
  if (isRounded) {
    // △を描画するために付与するクラスを変更する
    figure.classList.remove("rounded", "square")
    figure.classList.add("triangle")
  }
  // 状態の識別：triangleを含んでいる場合は △ と判断できる
  // 状態の変化：△ → □
  if (isTriangle) {
    // □ を描画するために付与するクラスを変更する
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
