const specialStrWhen3 = (num) => {
  /**3の倍数もしくは3を含む時に特殊な文字列を返します */
  return !(num % 3) || String(num).includes("3") ? `${num}!!!!!` : num
}

function genkiFunc(endNum = -1, delay = 1000) {
  let [num, loopNum] = [1, endNum]
  const intervalId = setInterval(() => {
    console.log(specialStrWhen3(num++))
    if (--loopNum == 0) clearInterval(intervalId)
  }, delay)
}

genkiFunc(13)
// genkiFunc()
