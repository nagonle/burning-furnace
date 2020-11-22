const { isPalindrome } = require('../utils/utils');

describe('Palindrome function', () => {
  it('recognizes an odd length palindrome', () => {
    expect(isPalindrome('aba')).toEqual(true);
  });
  it('recognizes an even length palindrome', () => {
    expect(isPalindrome('abba')).toEqual(true);
  })
  it('recognizes a false odd length palindrome', () => {
    expect(isPalindrome('asd')).toEqual(false);
  })
  it('recognizes a false even length palindrome', () => {
    expect(isPalindrome('qwerty')).toEqual(false);
  })
});
