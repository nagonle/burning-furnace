const isPalindrome = (word) => {
  a = 0
  b = word.length - 1
  while (a < b) {
    if (word[a] !== word[b]) return false
    a++;
    b--;
  }
  return true
}


module.exports.isPalindrome = isPalindrome;
