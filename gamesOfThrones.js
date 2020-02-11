function gameOfThrones(s) {
  const map = new Map()
  for (const ele of s) {
    if (map.has(ele)) {
      map.set(ele, map.get(ele) + 1)
    } else {
      map.set(ele, 1)
    }
  }
  console.log(map)
  let count = 0
  for (const key of map.keys()) {
    if (map.get(key) % 2 === 0) {
      continue
    } else {
      count += 1
      if (count > 1) {
        return 'NO'
      }
    }
  }

  return 'YES'
}

console.log(gameOfThrones('cdcdcdcdeeeef'))
