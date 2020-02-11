function taumBday(b, w, bc, wc, z) {
  // let totalCost = 0
  // if (bc > wc) {
  //   if (wc + z < bc) {
  //     totalCost += b * (wc + z)
  //     totalCost += w * wc
  //     return totalCost
  //   } else if (wc + z > bc) {
  //     totalCost += b * bc
  //     totalCost += w * wc
  //     return totalCost
  //   } else {
  //     totalCost = b * bc + w * wc
  //     return totalCost
  //   }
  // } else if (bc < wc) {
  //   if (bc + z < wc) {
  //     totalCost += w * (bc + z)
  //     totalCost += b * bc
  //     return totalCost
  //   } else if (bc + z > wc) {
  //     totalCost += w * wc
  //     totalCost += b * bc
  //     return totalCost
  //   } else {
  //     totalCost = b * bc + w * wc
  //     return totalCost
  //   }
  // } else {
  //   return (totalCost = b * bc + w * wc)
  // }
  if (bc > wc && wc + z < bc) {
    return b * (wc + z) + w * wc
  } else if (wc > bc && bc + z < wc) {
    return b * bc + w * (bc + z)
  }
  return b * bc + w * wc
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924))
