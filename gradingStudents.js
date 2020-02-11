function gradingStudents(grades) {
  // Write your code here
  let arr = []
  console.log(grades)
  for (let ele of grades) {
    if (ele < 38) {
      arr.push(ele)
    } else {
      if (ele % 5 === 0) {
        arr.push(ele)
      } else if (ele % 5 === 3) {
        arr.push(ele + 2)
      } else if (ele % 5 === 4) {
        arr.push(ele + 1)
      } else {
        arr.push(ele)
      }
    }
  }
  console.log(arr)
  return arr
}

console.log(gradingStudents([73, 67, 38, 33]))
