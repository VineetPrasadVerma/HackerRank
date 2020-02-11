function gemstones(arr) {
  const sortedMinealsRocksArr = []
  for (const rocks of arr) {
    sortedMinealsRocksArr.push(
      new Set(
        rocks
          .toLowerCase()
          .split('')
          .sort()
          .join('')
      )
    )
  }
  //   console.log(sortedMinealsRocksArr)
  //   let gemstones = 0
  //   const firstRock = sortedMinealsRocksArr[0]
  //   for (let minerals = 0; minerals < firstRock.length; minerals++) {
  //     let flag = 1
  //     for (let rocks = 1; rocks < sortedMinealsRocksArr.length; rocks++) {
  //       flag = 1
  //       for (let i = 0; i < sortedMinealsRocksArr[rocks].length; i++) {
  //         if (sortedMinealsRocksArr[rocks][i] === firstRock[minerals]) {
  //           flag = 0
  //           break
  //         }
  //       }
  //       if (flag) {
  //         break
  //       }
  //     }
  //     if (flag === 0) {
  //       gemstones += 1
  //     }
  //   }
  //   return gemstones
  let gemstone = 0
  const minerals = sortedMinealsRocksArr[0].keys()
  console.log(minerals)
  for (const min of minerals) {
    let flag = 0
    for (let i = 1; i < sortedMinealsRocksArr.length; i++) {
      if (sortedMinealsRocksArr[i].has(min)) {
        flag = 1
        continue
      } else {
        flag = 0
        break
      }
    }
    if (flag) {
      gemstone += 1
    }
  }
  return gemstone
}

console.log(gemstones(['abcSEWd', 'bccca', 'badce']))
