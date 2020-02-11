function sansaXor(arr) {
  const temp = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      temp.push(arr.slice(i, j))
    }
  }

  const xorArr = []
  for (const ele of temp) {
    let t = 0
    for (let i = 0; i < ele.length; i++) {
      t ^= ele[i]
    }
    xorArr.push(t)
  }

  console.log(xorArr)
  console.log(temp)
  let ans = 0
  for (const ele of xorArr) {
    ans ^= ele
  }

  return ans
}

console.log(sansaXor([1, 2, 3]))
