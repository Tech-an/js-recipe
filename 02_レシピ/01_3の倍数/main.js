const FizzBuzz = (num) => {
  return num % 15 == 0
    ? "FizzBuzz"
    : num % 5 == 0
    ? "Buzz"
    : num % 3 == 0
    ? "Fizz"
    : num
}

const maxNum = 30
for (let i = 1; i <= maxNum; i++) console.log(FizzBuzz(i))
