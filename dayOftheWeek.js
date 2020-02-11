function solutions(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const idx = arr.indexOf(S)
  const actualDay = idx + (K % 7)
  return arr[actualDay % 7]
}

console.log(solutions('Sat', 23))
