// Solution 1
// function validateEmail(email) {
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
//   return emailRegex.test(email)
// }

// Solution 2
function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false
  }

  const [localPart, domain] = email.split('@')

  if (!localPart.length || domain.length < 3) {
    return false
  }

  const domainExt = domain.split('.')

  if (domainExt.length < 2 || domainExt[1] < 2) {
    return false
  }

  return true
}

module.exports = validateEmail
