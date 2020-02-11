function powerSum(X, N, num) {
  // let count = 0
  // for (let i = 1; i <= Math.ceil(X / N); i++) {
  //   for (let j = i; j <= Math.ceil(X / N); j++) {
  //     if (Math.pow(i, N) + Math.pow(j, N) > X) {
  //       break
  //     }
  //     if (Math.pow(i, N) + Math.pow(j, N) === X) {
  //       console.log(i, j)
  //       count += 1
  //     }
  //   }
  // }
  // return count
  const val = X - Math.pow(num, N)
  if (val === 0) {
    return 1
  }
  if (val < 0) {
    return 0
  }
  return powerSum(val, N, num + 1) + powerSum(X, N, num + 1)
}

console.log(powerSum(100, 2, 1))
