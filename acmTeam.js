function acmTeam(topic) {
  let maxKnowledgeSubject = 0
  let pairCount = 0
  const len = topic.length
  // const lenM = topic[0].length
  for (let i = 0; i < len; i++) {
    // console.log('df' + i)
    for (let j = i + 1; j < len; j++) {
      let count = 0
      const temp = parseInt(topic[i], 2) | parseInt(topic[j], 2)
      // console.log(temp)
      const binTemp = temp.toString(2)
      // console.log(binTemp)
      for (let k = 0; k < binTemp; k++) {
        // console.log(topic[i][k], topic[j][k])
        if (binTemp[k] === '1') {
          count += 1
        }
      }
      // console.log(count)
      if (maxKnowledgeSubject === count) {
        pairCount += 1
      }

      if (maxKnowledgeSubject < count) {
        maxKnowledgeSubject = count
        pairCount = 1
      }
    }
  }
  return [maxKnowledgeSubject, pairCount]
}

console.log(acmTeam(['10101', '11110', '00010']))
