function encryption(s) {
  const sqrt = Math.sqrt(s.length)
  // const floor = Math.floor(sqrt)
  const ceil = Math.ceil(sqrt)
  const len = s.length
  let sliceStart = 0
  let sliceEnd = ceil
  const ans = []
  while (sliceStart < len) {
    ans.push(s.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd
    sliceEnd += ceil
  }
  console.log(ans)
  let str = ''
  for (let i = 0; i < ceil; i++) {
    for (const ele of ans) {
      if (ele[i] !== undefined) str += ele[i]
    }
    str += ' '
  }

  return str
}

console.log(encryption('chillout'))
