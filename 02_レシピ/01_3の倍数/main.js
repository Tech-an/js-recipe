const specialStrWhen3 = (num) => {
  /**3の倍数もしくは3を含む時に特殊な文字列を返します */
  return !(num % 3) || String(num).includes("3") ? `${num}!!!!!` : num
}

const maxNum = 40
for (let i = 1; i <= maxNum; i++) {
  console.log(specialStrWhen3(i))
}
