function luckBalance(k, contests) {
  const notImportantContest = []
  let importantContest = []
  for (const ele of contests) {
    if (ele[1] === 0) {
      notImportantContest.push(ele[0])
    } else {
      importantContest.push(ele[0])
    }
  }
  importantContest.sort((a, b) => a - b)
  const winContest = importantContest.slice(0, importantContest.length - k)
  importantContest = importantContest.slice(importantContest.length - k)
  console.log(importantContest)
  console.log(notImportantContest)
  let totalLuck = 0
  if (importantContest.length) {
    totalLuck += importantContest.reduce((a, b) => a + b)
  }

  if (notImportantContest.length) {
    totalLuck += notImportantContest.reduce((a, b) => a + b)
  }
  if (winContest.length) {
    totalLuck -= winContest.reduce((a, b) => a + b)
  }
  return totalLuck
}

console.log(
  luckBalance(5, [
    [13, 1],
    [10, 1],
    [9, 1],
    [8, 1],
    [13, 1],
    [12, 1],
    [18, 1],
    [13, 1]
  ])
)
