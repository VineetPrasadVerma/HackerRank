function cutTheSticks(arr) {
  // function cutTheSticks(arr) {
  //   const ans = []
  //   ans.push(arr.length)
  //   while (arr.length > 1) {
  //     const mini = Math.min(...arr)
  //     const currentProblem = []
  //     const removedIdx = []
  //     for (let i = 0; i < arr.length; i++) {
  //       if (Math.abs(arr[i] - mini) !== 0) {
  //         currentProblem.push(arr[i] - mini)
  //       } else {
  //         removedIdx.push(i)
  //       }
  //     }
  //     for (const ele in removedIdx) {
  //       arr.splice(ele, 1)
  //     }
  //     ans.push currentProblem.length)
  //     arr = currentProblem
  //   }
  //   return ans
  // }
  const ans = []
  ans.push(arr.length)

  while (arr.length > 0) {
    arr.sort((a, b) => a - b)

    const arrToBeReplaced = []
    const currentProblem = arr.map(x => x - arr[0])
    for (const ele of currentProblem) {
      if (ele !== 0) {
        arrToBeReplaced.push(ele)
      }
      arr = arrToBeReplaced
    }
    if (arr.length !== 0) {
      ans.push(arr.length)
    }
  }

  return ans
}

console.log(cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]))
