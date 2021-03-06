function largestPrimeFactor (value) {
  let maxFactor = 1

  while (value % 2 === 0) {
    maxFactor = 2
    value /= 2
  }

  const sqrtOfValue = Math.sqrt(value)

  for (let x = 3; x <= sqrtOfValue; x += 2) {
    while (value % x === 0) {
      maxFactor = value
      value /= x
    }
  }

  return Math.max(value, maxFactor)
}

console.log(largestPrimeFactor(600851475143))
