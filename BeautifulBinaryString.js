function beautifulBinaryString(b) {
  let count = 0
  while (b.indexOf('010') !== -1) {
    b = b.slice(b.indexOf('010') + 3)
    count += 1
  }
  return count
}

console.log(beautifulBinaryString('0101010'))
