
const isPalindromo = (word) => {
  a = 0
  b = word.length - 1
  while (a < b) {
    if (word[a] !== word[b]) return false
    a++;
    b--;
  }
  return true
}

/*
console.log(true === isPalindromo('abba'))
console.log(true === isPalindromo('aba'))
console.log(false === isPalindromo('aaba'))
*/

module.exports.isPalindromo = isPalindromo;
