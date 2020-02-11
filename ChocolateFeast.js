function chocolateFeast(n, c, m) {
  let bars = Number(n / c)
  let wrappers = bars
  // const barsFromWrappers = 1
  while (wrappers !== 0) {
    if (wrappers < m) {
      return bars
    } else {
      const leftWrappers = wrappers - m
      bars += 1
      wrappers = leftWrappers + 1
    }
  }
  return bars
}

console.log(chocolateFeast(15, 3, 2))
