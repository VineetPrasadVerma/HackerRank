function migratoryBirds(arr) {
  arr.sort((a, b) => a - b)
  const mapObj = new Map()
  for (const ele of arr) {
    if (mapObj.has(ele)) {
      mapObj.set(ele, mapObj.get(ele) + 1)
    } else {
      mapObj.set(ele, 1)
    }
  }
  console.log(mapObj)
  let max = -1
  let id = -1
  for (const keys of mapObj.keys()) {
    if (mapObj.get(keys) > max) {
      max = mapObj.get(keys)
      id = keys
    }
  }
  return id
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
