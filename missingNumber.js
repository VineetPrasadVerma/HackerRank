function missingNumbers(arr, brr) {
  const originalArray = Array(100001).fill(0)
  const missingNumberArray = Array(100001).fill(0)
  for (let i = 0; i < brr.length; i++) {
    originalArray[brr[i]] += 1
  }

  for (let i = 0; i < arr.length; i++) {
    missingNumberArray[arr[i]] += 1
  }

  const ans = []
  for (let i = 0; i < 100001; i++) {
    if (originalArray[i] !== missingNumberArray[i]) {
      ans.push(i)
    }
  }

  return ans
}
