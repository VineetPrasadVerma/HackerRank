function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b)
  if (A[A.length - 1] <= 0) {
    return 1
  }
  const mapObj = new Map()
  for (const ele of A) {
    if (mapObj.has(ele)) {
      mapObj.set(ele, mapObj.get(ele) + 1)
    } else {
      mapObj.set(ele, 1)
    }
  }
  console.log(mapObj)
  let ans = 1
  console.log(mapObj.keys())
  for (const ele of mapObj.keys()) {
    // console.log(ele)
    if (ele === ans) {
      ans += 1
      continue
    } else if (ele < ans) {
      continue
    } else {
      return ans
    }
  }

  return ans++
}

console.log(solution([1, 2, 3]))
