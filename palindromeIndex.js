function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start += 1
    end -= 1
  }
  return true
}

function palindromeIndex(s) {
  const len = s.length
  let start = 0
  let end = len - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      if (isPalindrome(s, start + 1, end)) return start
      if (isPalindrome(s, start, end - 1)) return end
      return -1
    } else {
      start += 1
      end -= 1
    }
  }

  return -1

  //   let flag = 0
  //   for (let i = 0; i < Math.floor(len / 2); i++) {
  //     if (s[i] !== s[len - 1 - i]) {
  //       flag = 1
  //     }
  //   }
  //   if (flag) {
  //     for (let i = 0; i < s.length; i++) {
  //       const temp = s.slice(0, i) + s.slice(i + 1)
  //       console.log(temp)
  //       const len = temp.length
  //       let flag = 1
  //       for (let j = 0; j < Math.floor(len / 2); j++) {
  //         if (temp[j] !== temp[len - 1 - j]) {
  //           flag = 0
  //           break
  //         }
  //       }
  //       if (flag) {
  //         return i
  //       }
  //       if (i === len) {
  //         return -1
  //       }
  //     }
  //   } else {
  //     return -1
  //   }
}

console.log(palindromeIndex('aaab'))
