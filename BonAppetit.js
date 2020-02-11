function bonAppetit(bill, k, b) {
  // let currentProblem = bill.slice();
  console.log(bill.splice(k, 1, 45, 56, 7))
  console.log(bill)
  // const a = 10
  const actualPrice = bill.reduce((a, b) => a + b) / 2
  if (actualPrice === b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - actualPrice)
  }
}

bonAppetit([3, 10, 2, 9], 1, 7)
