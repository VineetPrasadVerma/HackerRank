function superDigit(n, k) {
  const num = String(n).repeat(k)
  console.log(num)
  if (num.length <= 1) {
    return num
  }
  let ans = 0
  for (let i = 0; i < num.length; i++) {
    ans += Number(num[i])
  }
  return superDigit(ans, 1)
}

console.log(superDigit(123, 3))
