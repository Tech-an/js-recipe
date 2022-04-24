const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextButton = document.getElementById("next-quiz")

// クイズの内容（内容：ひとつにまとめている）
const quizDef = [
  {
    text: "これは何？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "わくせい",
        feedback: "そりゃそーじゃ",
        isCorrect: true,
      },
      {
        text: "ひと",
        feedback: "ざんねん",
        isCorrect: false,
      },
      {
        text: "からす",
        feedback: "もういっちょ",
        isCorrect: false,
      },
    ],
  },
  {
    text: "これは何？",
    image: "maruoka.png",
    choices: [
      {
        text: "しろ",
        feedback: "そりゃそーじゃ",
        isCorrect: true,
      },
      {
        text: "抹茶フラペチーノ",
        feedback: "ざんねん",
        isCorrect: false,
      },
      {
        text: "もずく",
        feedback: "もういっちょ",
        isCorrect: false,
      },
    ],
  },
  {
    text: "これは何？",
    image: "Two.jpeg",
    choices: [
      {
        text: "ちょき",
        feedback: "そりゃそーじゃ",
        isCorrect: true,
      },
      {
        text: "ぐー",
        feedback: "ざんねん",
        isCorrect: false,
      },
      {
        text: "ぱー",
        feedback: "もういっちょ",
        isCorrect: false,
      },
    ],
  },
]

// quiz を画面に表示する関数（処理）
const reloadQuiz = function (quizs) {
  // もし問題が全て出題されたらリセットされる
  const quizStock = quizs.length !== 0 ? quizs : [...quizDef]
  const quiz = quizStock.splice(
    Math.floor(Math.random() * quizStock.length),
    1,
  )[0]
  // 次の問題へ行くボタンを非表示にする
  nextButton.classList.add("hidden")
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text

  // 選択肢（ボタン）のオンクリックイベントを追加
  choice1.onclick = () => choose(quiz, 0, quizStock)
  choice2.onclick = () => choose(quiz, 1, quizStock)
  choice3.onclick = () => choose(quiz, 2, quizStock)
}

const choose = (quiz, choiceNum, quizStock) => {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNum].feedback
  // 次の問題へ行くボタンを表示する
  if (quiz.choices[choiceNum].isCorrect) {
    nextButton.classList.remove("hidden")
    nextButton.onclick = () => {
      reloadQuiz(quizStock)
    }
  }
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz([...quizDef])
