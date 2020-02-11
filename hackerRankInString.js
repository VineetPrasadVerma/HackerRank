function hackerrankInString(s) {
  const str = 'hackerrank'
  let idx = 0
  for (let i = 0; i < str.length; i++) {
    idx = s.indexOf(str[i], idx + 1)
    if (idx === -1) {
      return 'NO'
    }
  }
  return 'YES'
}

console.log(hackerrankInString('hereiamstackerrank'))
