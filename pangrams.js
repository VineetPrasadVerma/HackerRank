function pangrams(s) {
  let totalLetters = 0
  const mapObj = new Map()
  for (const ele of s) {
    if (ele === ' ') {
      continue
    }
    if (mapObj.has(ele)) {
      mapObj.set(ele, mapObj.get(ele) + 1)
    } else {
      mapObj.set(ele, 1)
      totalLetters += 1
    }
  }
  console.log(mapObj)

  if (totalLetters === 26) {
    return 'pangram'
  } else {
    return 'not pangram'
  }
}

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
)
