function isPalindrome(word) {
    // Convert the word to lowercase to make the check case-insensitive
    const lowercasedWord = word.toLowerCase();
  
    // Reverse the characters of the word
    const reversedWord = lowercasedWord.split('').reverse().join('');
  
    // Check if the original word is the same as its reversed version
    return lowercasedWord === reversedWord;
  }
  
  // Example usage:
  const testWord = "level";
  if (isPalindrome(testWord)) {
    console.log(`${testWord} is a palindrome.`);
  } else {
    console.log(`${testWord} is not a palindrome.`);
  }
  