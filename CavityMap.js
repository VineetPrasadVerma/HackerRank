function cavityMap(grid) {
  const cavity = []
  const len = grid.length
  for (let row = 0; row < len; row++) {
    let eachLine = ''
    for (let column = 0; column < len; column++) {
      if (row === 0 || row === len - 1) {
        eachLine += grid[row]
        break
      } else if (column === 0 || column === len - 1) {
        eachLine += grid[row][column]
      } else {
        const temp = Number(grid[row][column])
        if (
          Number(grid[row][column - 1]) < temp &&
          Number(grid[row][column + 1] < temp) &&
          Number(grid[row - 1][column] < temp) &&
          Number(grid[row + 1][column] < temp)
        ) {
          eachLine += 'X'
        } else {
          eachLine += String(temp)
        }
      }
    }
    cavity.push(eachLine)
  }
  return cavity
}

console.log(cavityMap(['1112', '1912', '1892', '1234']))
