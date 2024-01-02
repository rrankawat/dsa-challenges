// Solution 1
// function generateHashtag(str) {
//   if (str.trim() === '') {
//     return false
//   }

//   const words = str.trim().split(/\s+/)

//   const capitalizedWords = words.map(
//     word => word.charAt(0).toUpperCase() + word.slice(1)
//   )

//   const hashtag = '#' + capitalizedWords.join('')

//   return hashtag.length > 140 ? false : hashtag
// }

// Solution 2
function generateHashtag(str) {
  const hashtag = str
    .trim()
    .split(' ')
    .reduce(
      (tag, word) => tag + word.charAt(0).toUpperCase() + word.slice(1),
      '#'
    )
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag
}

module.exports = generateHashtag
