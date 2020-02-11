function utopianTree(n) {
  let height = 1
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      height = 1
    } else if (i % 2 === 0) {
      height += 1
    } else {
      height *= 2
    }
  }
  return height
}

console.log(utopianTree(1))
console.log(utopianTree(2))
console.log(utopianTree(3))
console.log(utopianTree(4))
console.log(utopianTree(5))
console.log(utopianTree(6))
console.log(utopianTree(7))
console.log(utopianTree(8))
console.log(utopianTree(9))
