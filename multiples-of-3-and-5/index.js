function sumMultiplesOf3And5 () {
  return Uint16Array.from({length: 999}, (value, index) => index + 1)
    .filter(value => value % 3 === 0 || value % 5 === 0)
    .reduce((sum, value) => sum + value, 0)
}

console.log(sumMultiplesOf3And5())

module.exports = sumMultiplesOf3And5
