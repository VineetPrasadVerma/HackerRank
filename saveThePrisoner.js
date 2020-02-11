function saveThePrisoner(n, m, s) {
  let prisonerToBeWarned = s
  let start = s
  const end = m + s
  while (start < end) {
    prisonerToBeWarned = s % n
    start += 1
    s += 1
  }
  return prisonerToBeWarned
}

console.log(saveThePrisoner(7, 19, 2))
