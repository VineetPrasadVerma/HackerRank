function quickSort(array, low, high) {
  if (low >= high) {
    return array
  }

  let pivotPosition = low
  let current = low
  const pivot = array[high]

  while (current < high) {
    if (array[current] < pivot) {
      const temp = array[current]
      array[current] = array[pivotPosition]
      array[pivotPosition] = temp
      pivotPosition += 1
      current += 1
    } else {
      current += 1
    }
  }

  array[high] = array[pivotPosition]
  array[pivotPosition] = pivot
  quickSort(array, low, pivotPosition - 1)
  quickSort(array, pivotPosition + 1, high)

  return array
}
const arr = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
console.log(quickSort(arr, 0, arr.length - 1))
