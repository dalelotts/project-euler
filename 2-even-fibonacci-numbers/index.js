const PHI = 1.6180339887498948
const ONE_MINUS_PHI = -0.6180339887498949
const SQUARE_ROOT_OF_5 = 2.23606797749979

function sumEvenFibonacciNumbers () {
  let sum = 0
  let index = 3
  let currentFibonacci = 2

  // every third Fibonacci number is even so calculate that number and it to the sum.
  while (currentFibonacci < 4000000) {
    sum += currentFibonacci
    index += 3
    currentFibonacci = nthFibonacci(index)
  }
  return sum
}

function nthFibonacci (n) {
  return Math.round((Math.pow(PHI, n) - Math.pow(ONE_MINUS_PHI, n)) / SQUARE_ROOT_OF_5)
}

console.log(sumEvenFibonacciNumbers())

module.exports = sumEvenFibonacciNumbers
