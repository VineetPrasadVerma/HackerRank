function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let totalGames = -1
  let totalBalanceUsed = 0
  while (totalBalanceUsed <= s) {
    totalGames += 1
    if (p > m) {
      totalBalanceUsed += p
      p = p - d
    } else {
      p = m
      totalBalanceUsed += m
    }
  }
  return totalGames
}

console.log(howManyGames(20, 3, 6, 85))
