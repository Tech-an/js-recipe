const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
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

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = (choiceNum) => {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNum].feedback
}

choice1.onclick = () => choose(0)
choice2.onclick = () => choose(1)
choice3.onclick = () => choose(2)

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
