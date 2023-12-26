// Solution 1
// function displayLikes(names) {
//   const length = names.length

//   if (length === 0) {
//     return 'no one likes this'
//   } else if (length === 1) {
//     return `${names[0]} likes this`
//   } else if (length === 2) {
//     return `${names[0]} and ${names[1]} like this`
//   } else if (length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else {
//     return `${names[0]}, ${names[1]} and ${length - 2} others like this`
//   }
// }

// Solution 2
function displayLikes(names) {
  let str

  switch (names.length) {
    case 0:
      str = 'no one likes this'
      break
    case 1:
      str = `${names[0]} likes this`
      break
    case 2:
      str = `${names[0]} and ${names[1]} like this`
      break
    case 3:
      str = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break
    default:
      str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }

  return str
}

module.exports = displayLikes
