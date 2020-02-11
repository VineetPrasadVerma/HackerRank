function hurdleRace(k, height) {
  height.sort()
  return height[k.length - 1] - k
}
