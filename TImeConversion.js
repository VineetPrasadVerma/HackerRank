function timeConversion(s) {
  /*
   * Write your code here.
   */
  const currentProblem = s.slice(8, 10)
  if (currentProblem === 'PM') {
    const diff = 12 - parseInt(s.slice(0, 2))
    if (diff === 0) {
      return s.slice(0, 8)
    }
    return String(24 - diff).concat(s.slice(2, 8))
  } else {
    if (s.slice(0, 2) === '12') {
      return '00'.concat(s.slice(2, 8))
    }
    return s.slice(0, 8)
  }
}

console.log(timeConversion('12:05:45AM'))
