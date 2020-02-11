function beautifulDays(i, j, k) {
  // let count = 0
  for (let start = i; start <= j; start++) {
    const currentProblem = String(start).split('')
    currentProblem.reverse()
    let rev = currentProblem.join('')
    const str = String(start)
    rev = ''
    for (
      let currentProblem = str.length - 1;
      currentProblem >= 0;
      currentProblem--
    ) {
      rev += str[currentProblem]
    }
    console.log(rev)

    console.log(beautifulDays(20, 23, 6))
  }
}
