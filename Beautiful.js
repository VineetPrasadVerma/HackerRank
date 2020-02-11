function beautifulTriplets(d, arr) {
  const len = arr.length
  let triplets = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < len; k++) {
          if (arr[k] - arr[j] === d) {
            triplets += 1
          }
        }
      }
    }
  }
  return triplets
}

console.log(beautifulTriplets(1, [2, 2, 3, 4, 5]))
