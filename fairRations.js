function fairRations(B) {
  const evenOddArray = []

  for (const ele of B) {
    if (ele % 2 === 0) {
      evenOddArray.push(0)
    } else {
      evenOddArray.push(1)
    }
  }

  for (let i = 0; i < evenOddArray.length - 2; i++) {
    if (
      evenOddArray[i] === 1 &&
      evenOddArray[i + 1] === 0 &&
      evenOddArray[i + 2] === 1
    ) {
      evenOddArray[i + 1] = 2
      evenOddArray.unshift(0)
      evenOddArray.push(0)
    }
  }

  console.log(evenOddArray)
  for (let i = 0; i < evenOddArray.length - 2; i++) {
    if (
      evenOddArray[i] === 0 &&
      evenOddArray[i + 1] === 1 &&
      evenOddArray[i + 2] === 0
    ) {
      evenOddArray[i] = 2
      evenOddArray.unshift(0)
      evenOddArray.push(0)
    }
  }

  console.log(evenOddArray.reduce((a, b) => a + b))
}

fairRations([4, 5, 6, 7])
