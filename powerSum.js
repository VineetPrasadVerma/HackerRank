function powerSum(X, N) {
  let count = 0
  for (let i = 1; i <= Math.ceil(X / N); i++) {
    for (let j = i; j <= Math.ceil(X / N); j++) {
      if (Math.pow(i, N) + Math.pow(j, N) > X) {
        break
      }

      if (Math.pow(i, N) + Math.pow(j, N) === X) {
        console.log(i, j)
        count += 1
      }
    }
  }

  return count
}

console.log(powerSum(101, 2))
