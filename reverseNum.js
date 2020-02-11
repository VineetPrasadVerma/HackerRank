function reverse(num) {
  let currentProblem = 0
  let rem = 0
  while (num !== 0) {
    currentProblem = num % 10
    rem = rem * 10 + currentProblem
    num = Math.floor(num / 10)
  }
  return rem
}

console.log(reverse(102))
