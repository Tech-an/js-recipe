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
    console.log(`${arr[i]}, ${output}`)
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
