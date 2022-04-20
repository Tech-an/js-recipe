// 小テスト6
const str = "0101101"
console.log(toMorseCode(str))

function toMorseCode(str) {
  // 馴染みあるパターン
  let output = "" //  "-・-・・-・" を返却するための入れ物
  const arr = Array.from(str) //  Array.from(str)をすることによって、str="0101101" -> ["0", "1","0","1","1","0","1"]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      output += "・"
    } else if (arr[i] === "0") {
      output += "-"
    }
  }
  return output

  //   Array.from(str).forEach((character) => {
  //     switch (character) {
  //       case "1":
  //         output += "・"
  //         break
  //       case "0":
  //         output += "-"
  //         break
  //       default:
  //     }
  //   })
}

// 小テスト7
const formula1 = "1-2-3" //6
const formula2 = "12-34-5" //51

console.log(calc(formula1))
console.log(calc(formula2))

function calc(formula) {
  const numArr = formula.split("-")
  let sum = 0
  numArr.forEach((num) => {
    sum += parseInt(num)
  })
  return sum
}
