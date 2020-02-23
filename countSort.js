const arr = [[1, 'e'],
  [2, 'a'],
  [1, 'b'],
  [3, 'a'],
  [4, 'f'],
  [1, 'f'],
  [2, 'a'],
  [1, 'e'],
  [1, 'b'],
  [1, 'c']
]

function countSort (arr) {
  const len = arr.length
  const discardArr = []
  for (let i = 0; i < len / 2; i++) {
    discardArr.push(arr[i][1])
  }
  // arr.sort((a, b) => a[0] - b[0])
  // console.log(sortedArr)

  console.log(discardArr)
  const arrMap = new Map()
  for (let i = 0; i < len; i++) {
    if (arrMap.has(arr[i][0])) {
      // console.log(typeof arrMap.get(arr[i][0]))
      arrMap.set(arr[i][0], arrMap.get(arr[i][0]).concat(arr[i][1]))
    } else {
      arrMap.set(arr[i][0], [arr[i][1]])
    }
  }
  console.log(arrMap)
  var newArr = new Map([...arrMap.entries()].sort())
  console.log(newArr)
  let ans = ''
  for (const key of newArr.keys()) {
    const val = arrMap.get(key)
    // let tempLen = val.length
    for (const str of val) {
      const temp = discardArr.indexOf(str)
      if (temp !== -1) {
        discardArr.splice(temp, 1)
        ans += '- '
      } else {
        ans += str + ' '
      }
    }
  }
  console.log(ans)
}

countSort(arr)
