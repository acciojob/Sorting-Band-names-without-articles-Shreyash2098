function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Decode the character by shifting it back by 13 places
      const decodedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
      return decodedChar;
    } else {
      // If the character is not an uppercase letter, return it unchanged
      return char;
    }
  });
}

// Example usage:
const encodedString = 'SERR PBQR PNZC';
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: 'FREE CODE CAMP'

