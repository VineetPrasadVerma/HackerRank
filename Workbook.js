function workbook(n, k, arr) {
  const problemsOnPagePerChapter = new Map()
  let count = 0
  for (let i = 1; i <= n; i++) {
    let currentProblem = 0
    while (arr[i - 1] > k) {
      count += 1
      problemsOnPagePerChapter.set(count, [currentProblem, currentProblem + k])
      arr[i - 1] -= k
      currentProblem += k
    }
    count += 1
    problemsOnPagePerChapter.set(count, [
      currentProblem,
      currentProblem + arr[i - 1]
    ])
    currentProblem = 0
  }

  console.log(problemsOnPagePerChapter)

  let superProblems = 0
  for (const key of problemsOnPagePerChapter.keys()) {
    const setOfProblems = problemsOnPagePerChapter.get(key)
    // console.log(setOfProblems)
    for (let i = setOfProblems[0] + 1; i < setOfProblems[1] + 1; i++) {
      if (key === i) {
        superProblems += 1
      }
    }
  }

  return superProblems
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]))
