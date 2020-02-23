function funnyString (s) {
  const len = s.length
  let arrayOfAscii = []
  const diffOrdinalArray = []
  const diffReverseArray = []
  for (let i = 0; i < len; i++) {
    arrayOfAscii.push(s.charCodeAt(i))
    if (i !== 0) {
      diffOrdinalArray.push(Math.abs(arrayOfAscii[i] - arrayOfAscii[i - 1]))
    }
  }
  // console.log(arrayOfAscii)
  // console.log(diffOrdinalArray)
  arrayOfAscii = []
  for (let i = len - 1; i >= 0; i--) {
    arrayOfAscii.push(s.charCodeAt(i))
    if (i !== len - 1) {
      diffReverseArray.push(
        Math.abs(arrayOfAscii[len - 1 - i] - arrayOfAscii[len - 1 - (i + 1)])
      )
    }
  }
  // console.log(arrayOfAscii)
  // console.log(diffReverseArray)
  for (let i = 0; i < diffReverseArray.length; i++) {
    if (diffReverseArray[i] !== diffOrdinalArray[i]) {
      return 'Not Funny'
    }
  }
  return 'Funny'
}

console.log(funnyString('acxz'))
