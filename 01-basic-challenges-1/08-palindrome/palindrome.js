// Solution 1
// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//   const reversedStr = formattedStr.split('').reverse().join('')
//   return reversedStr === formattedStr
// }

// Solution 2
function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase())
  const reverseStr = reverseString(formattedStr)
  return reverseStr === formattedStr
}

function removeNonAlphaNumeric(str) {
  let formattedStr = ''

  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      formattedStr += str[i]
    }
  }

  return formattedStr
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) || // Number 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  )
}

function reverseString(str) {
  let reversed = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }

  return reversed
}

module.exports = isPalindrome
