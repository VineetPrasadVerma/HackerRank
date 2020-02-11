function jumpingOnClouds(c, k) {
  const len = c.length
  let energy = 100
  let i = k
  while (i % len !== 0) {
    if (c[i] === 1) {
      energy -= 3
    } else {
      energy -= 1
    }
    i += k
  }
  return energy - 1
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
