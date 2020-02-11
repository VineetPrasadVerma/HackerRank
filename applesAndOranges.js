function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(
    apples.filter(apple => apple > 0 && apple + a >= s && apple + a <= t).length
  )
  console.log(
    oranges.filter(orange => orange < 0 && orange + b >= s && orange + b <= t)
      .length
  )
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
