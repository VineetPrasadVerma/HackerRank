function equalizeArray(arr) {
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
  let maxi = 0
  let key = 0
  for (const keys of mapObj.keys()) {
    if (maxi < mapObj.get(keys)) {
      maxi = mapObj.get(keys)
      key = keys
    }
  }

  console.log(maxi)
  console.log(key)

  let ans = 0
  for (const keys of mapObj.keys()) {
    if (keys !== key) {
      ans += mapObj.get(keys)
    }
  }
  return ans
}

console.log(equalizeArray([3, 3, 2, 1, 3])