function kaprekarNumbers(p, q) {
  const kaprekar = []
  if (p <= 9) {
    kaprekar.push(1, 9)
    p = 10
  }
  for (let i = p; i <= q; i++) {
    const squareNumber = String(i * i)
    // console.log(squareNumber)
    const len = squareNumber.length - String(i).length
    const firstHalf = Number(squareNumber.slice(0, len))
    const secondHalf = Number(squareNumber.slice(len))
    // console.log(firstHalf, firstHalfSum, secondHalf, secondHalfSum)
    if (firstHalf + secondHalf === i) {
      // console.log(firstHalf, firstHalfSum, secondHalf, secondHalfSum)
      kaprekar.push(i)
    }
  }

  if (kaprekar.length === 0) {
    console.log('INVALID RANGE')
    return
  }
  console.log(kaprekar.join(' '))
}

kaprekarNumbers(1, 100)
