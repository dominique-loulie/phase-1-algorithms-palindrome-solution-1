function isPalindrome(word) {
  // Write your algorithm here

  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

  return true

}

/* 
  Add your pseudocode here
  => looping through a string
  => check if the last element of a list does not equal the element at its beginning.
  => if elements do not match it means return false or else return true
  => increment start or decrement end
*/

/*
  Add written explanation of your solution here
  => My approach to creating a palindrome function is relatively simple. I start by checking if the length of the word is less than 2, 
  as words with one letter or an empty string are considered palindromes. If this is true, then I return true without doing any further work. 
  If not, then I loop through the string once and check that each element matches its corresponding opposite element in order to determine whether 
  it's a palindrome or not - this happens in O(n) time and does not require any extra space for running my function effectively. Finally, 
  if at least one pair of elements do not match up when compared against each other during my looping process, then false will be returned as an 
  indication that it isn't a valid palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
