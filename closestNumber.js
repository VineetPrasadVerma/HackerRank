function closestNumbers(arr) {
  arr.sort((a, b) => a - b)
  let pairsArr = []
  let flag = 0
  let minDifference = 10000000000
  for (let i = 0; i < arr.length - 1; i++) {
    if (minDifference > arr[i + 1] - arr[i]) {
      if (flag) {
        pairsArr = []
        flag = 0
      }
      minDifference = arr[i + 1] - arr[i]
      pairsArr.push([arr[i], arr[i + 1]])
    } else if (minDifference === arr[i + 1] - arr[i]) {
      pairsArr.push([arr[i], arr[i + 1]])
    } else {
      flag = 1
    }
  }
  console.log(pairsArr)
}
closestNumbers([
  -20,
  -3916237,
  -357920,
  -3620601,
  7374819,
  -7330761,
  30,
  6246457,
  -6461594,
  266854,
  -520,
  -470
])
