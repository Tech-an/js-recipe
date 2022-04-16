const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choices = document.getElementById("choices")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容（内容：ひとつにまとめている）
const quiz = {
  text: "このドリンクの名前は何でしょう？",
  image: "フルーツポンチアメリカーノ.jpg",
  choices: [
    {
      text: "さくらマキアート",
      feedback: "残念！さくらっぽくなくね？笑",
    },
    {
      text: "シトラスハーモニーラテ",
      feedback: "残念！そもそもシトラスハーモニーってなに？",
    },
    {
      text: "フルーツポンチアメリカーノ",
      feedback: "正解！これだー！！",
    },
  ],
}

// quiz を画面に表示する関数（処理）
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の要素を作成
  quiz.choices.forEach(({ text }, i) => {
    const choice = document.createElement(`button`)
    choice.id = `choice${i + 1}`
    choice.textContent = text
    choices.appendChild(choice)
    choice.onclick = () => choose(i)
  })
}

const choose = (choiceNum) => {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNum].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
