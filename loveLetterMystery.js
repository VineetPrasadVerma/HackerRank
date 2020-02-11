function theLoveLetterMystery(s) {
  let totalCost = 0
  const len = s.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    totalCost += Math.abs(s.charCodeAt(i) - s.charCodeAt(len - 1 - i))
  }
  return totalCost
}

console.log(theLoveLetterMystery('abcba'))
