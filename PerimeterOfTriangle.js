function maximumPerimeterTriangle(sticks) {
  sticks.sorted((a, b) => a - b)
  let len = sticks.length
  while (len - 3 > 0) {
    if (sticks[len - 3] + sticks[len - 2] > sticks[len - 1]) {
      return [sticks[len - 3], sticks[len - 2], sticks[len - 1]]
    } else {
      len = len - 1
    }
  }

  return -1
}
