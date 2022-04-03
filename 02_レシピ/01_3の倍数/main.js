const maxNum = 24

genkiFunc(maxNum)

const genkiFunc = (maxNum) => {
  for (let i = 1; i <= maxNum; i++) {
    console.log(specialStrOnly3Multiple(i))
  }
}

const specialStrOnly3Multiple = (num) => {
  return num % 3 === 0 ? `${num}!!!!!` : num
}
