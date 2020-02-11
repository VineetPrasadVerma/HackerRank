function anagram(s) {
  const len = s.length
  console.log(s)
  if (len % 2 !== 0) {
    return -1
  } else {
    const s1 = s
      .slice(0, len / 2)
      .split('')
      .sort()
      .join('')

    let s2 = s
      .slice(len / 2)
      .split('')
      .sort()
      .join('')

    // console.log(s1)
    // console.log(s2)
    for (const ele of s1) {
      const temp = s2.indexOf(ele)
      if (temp !== -1) {
        s2 = s2.slice(0, temp) + s2.slice(temp + 1)
      }
    }

    return s2.length
  }
  // console.log(s1)
  // console.log(s2)

  //   const mapObj1 = new Map()
  //   const mapObj2 = new Map()
  //   for (const ele of s1) {
  //     if (mapObj1.has(ele)) {
  //       mapObj1.set(ele, mapObj1.get(ele) + 1)
  //     } else {
  //       mapObj1.set(ele, 1)
  //     }
  //   }

  //   for (const ele of s2) {
  //     if (mapObj2.has(ele)) {
  //       mapObj2.set(ele, mapObj2.get(ele) + 1)
  //     } else {
  //       mapObj2.set(ele, 1)
  //     }
  //   }

  //   let totalChanges = 0
  //   for (const letter of mapObj1.keys()) {
  //     if (mapObj2.has(letter)) {
  //       totalChanges += Math.abs(mapObj2.get(letter) - mapObj1.get(letter))
  //       mapObj2.set(letter, Math.abs(mapObj2.get(letter) - mapObj1.get(letter)))
  //     } else {
  //       totalChanges += mapObj1.get(letter)
  //     }
  //   }

  //   for (const letter of mapObj2.keys()) {
  //     totalChanges += mapObj2.get(letter)
  //   }
  //   return totalChanges
  // }
}

console.log(anagram('asdfjoieufoa'))
