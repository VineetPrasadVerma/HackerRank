function toys(w) {
  let totalContainer = 1
  w.sort((a, b) => a - b)
  let ele = w[0] + 4
  for (const i of w) {
    if (i > ele) {
      ele = i + 4
      totalContainer += 1
    }
  }
  return totalContainer
}
