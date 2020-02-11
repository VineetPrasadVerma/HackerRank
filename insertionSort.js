function insertionSort2(n, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i
    while (arr[temp] > arr[temp + 1]) {
      const ele = arr[temp]
      arr[temp] = arr[temp + 1]
      arr[temp + 1] = ele
      temp -= 1
    }
  }

  console.log(arr)
}

insertionSort2(6, [1, 4, 3, 5, 6, 2])
