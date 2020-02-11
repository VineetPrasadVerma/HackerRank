function makingAnagrams(s1, s2) {
  const firstArray = new Array(26)
  const secondArray = new Array(26)
  firstArray.fill(0)
  secondArray.fill(0)

  for (let i = 0; i < s1.length; i++) {
    firstArray[97 - s1.charCodeAt(i)] += 1
  }

  for (let i = 0; i < s1.length; i++) {
    secondArray[97 - s1.charCodeAt(i)] += 1
  }

  let totalDeletionRequired = 0
  for (let i = 0; i < firstArray.length; i++) {
    totalDeletionRequired += Math.abs(firstArray[i] - secondArray[i])
  }

  return totalDeletionRequired
}
