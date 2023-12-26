function findMissingNumber(arr) {
  if (!arr.length) {
    return 1
  } else {
    const n = arr.length + 1
    const expectedSum = (n * (n + 1)) / 2

    // Summing 1
    // let actualSum = 0
    // for (let i = 0; i < arr.length; i++) {
    //   actualSum += arr[i]
    // }

    // Summing 2
    const actualSum = arr.reduce((sum, num) => sum + num, 0)

    return expectedSum - actualSum
  }
}

module.exports = findMissingNumber
