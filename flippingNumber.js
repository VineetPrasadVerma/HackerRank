function flippingBits(N) {
  const binNum = String(N.toString(2))
  const len = binNum.length
  let actualBin = ''
  for (let i = 0; i < 32 - len; i++) {
    actualBin += '0'
  }
  actualBin += binNum

  let newString = ''
  for (let i = 0; i < actualBin.length; i++) {
    if (actualBin[i] === '0') {
      newString += '1'
    } else {
      newString += '0'
    }
  }
  console.log(newString)

  console.log(parseInt(newString, 2))
}

console.log(flippingBits(10))
