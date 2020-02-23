const arr = [[0, 'ab'],
  [6, 'cd'],
  [0, 'ef'],
  [6, 'gh'],
  [4, 'ij'],
  [0, 'ab'],
  [6, 'cd'],
  [0, 'ef'],
  [6, 'gh'],
  [0, 'ij'],
  [4, 'that'],
  [3, 'be'],
  [0, 'to'],
  [1, 'be'],
  [5, 'question'],
  [1, 'or'],
  [2, 'not'],
  [4, 'is'],
  [2, 'to'],
  [4, 'the']
]

// function countSort (arr) {
//   const strOfArr = []
//   const len = arr.length
//   for (let i = 0; i < len / 2; i++) {
//     strOfArr.push(arr[i].join(''))
//   }
//   // console.log(strOfArr)
//   //   const len = arr.length
//   //   const discardArr = []
//   //   for (let i = 0; i < len / 2; i++) {
//   //     discardArr.push(arr[i][1])
//   //   }
//   //   // arr.sort((a, b) => a[0] - b[0])
//   //   // console.log(sortedArr)

//   //   console.log(discardArr)
//   //   const arrMap = new Map()
//   //   for (let i = 0; i < len; i++) {
//   //     if (arrMap.has(arr[i][0])) {
//   //       // console.log(typeof arrMap.get(arr[i][0]))
//   //       arrMap.set(arr[i][0], arrMap.get(arr[i][0]).concat(arr[i][1]))
//   //     } else {
//   //       arrMap.set(arr[i][0], [arr[i][1]])
//   //     }
//   //   }
//   //   console.log(arrMap)
//   //   var newArr = new Map([...arrMap.entries()].sort())
//   //   console.log(newArr)
//   //   let ans = ''
//   //   for (const key of newArr.keys()) {
//   //     const val = arrMap.get(key)
//   //     // let tempLen = val.length
//   //     for (const str of val) {
//   //       const temp = discardArr.indexOf(str)
//   //       if (temp !== -1) {
//   //         discardArr.splice(temp, 1)
//   //         ans += '- '
//   //       } else {
//   //         ans += str + ' '
//   //       }
//   //     }
//   //   }
//   //   console.log(ans)
//   // arr.sort()
//   // console.log(arr)
//   let ans = ''
//   const arrMap = new Map()
//   for (let i = 0; i < len; i++) {
//     if (arrMap.has(arr[i][0])) {
//       // console.log(typeof arrMap.get(arr[i][0]))
//       arrMap.set(arr[i][0], arrMap.get(arr[i][0]).concat(arr[i][1]))
//     } else {
//       arrMap.set(arr[i][0], [arr[i][1]])
//     }
//   }
//   var newArr = new Map([...arrMap.entries()].sort())
//   console.log(newArr)
//   //   for (const ele of arr) {
//   //     const temp = strOfArr.indexOf(ele.join())
//   //     if (temp !== -1) {
//   //       ans += '- '
//   //       strOfArr.splice(temp, 1)
//   //     } else {
//   //       ans += ele[1] + ' '
//   //     }
//   //   }
//   for (const key of newArr.keys()) {
//     const val = arrMap.get(key)
//     // let tempLen = val.length
//     for (const str of val) {
//       const temp = strOfArr.indexOf(key + str)
//       if (temp !== -1) {
//         strOfArr.splice(temp, 1)
//         ans += '- '
//       } else {
//         ans += str + ' '
//       }
//     }
//   }
//   console.log(ans)
// }
function countSort (arr) {
  const len = arr.length
  const ans = []
  for (let i = 0; i < len; i++) {
    if (i < len / 2) {
      ans.push(arr[i][0] + ',-')
    } else {
      ans.push(arr[i][0] + ',' + arr[i][1])
    }
  }
  console.log(ans.sort())
}

countSort(arr)
