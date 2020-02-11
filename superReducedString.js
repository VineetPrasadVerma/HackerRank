function superReducedString(s) {
  let ans = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      i += 1
    } else {
      if (ans[ans.length - 1] === s[i]) {
        ans = ans.splice(ans.length - 1, 0)
      } else {
        ans.push(s[i])
      }
    }
  }
  if (ans.length === 0) return 'Empty String'
  return ans.join('')
  //   for (let i = 1; i < s.length; i++) {
  //     if (s[i] === s[i - 1]) {
  //       s = s.slice(0, i - 1) + s.slice(i + 1)
  //       i = 0
  //     }
  //   }
  //   if (s === '') {
  //     console.log('Empty String')
  //   } else {
  //     console.log(s)
  //   }
}

console.log(superReducedString('baab'))
