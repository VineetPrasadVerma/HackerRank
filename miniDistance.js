function minimumDistances(a) {
  let mini = 100000000
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        if (mini > Math.abs(i - j)) {
          mini = Math.abs(i - j)
        }
      }
    }
  }
  if (mini === 100000000) {
    return -1
  }
  return mini
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))
