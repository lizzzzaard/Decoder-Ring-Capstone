// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  let lookup = "abcdefghijklmnopqrstuvwxyz"
  
  const uniqueChar = function(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //create a result variable to hold the values in the new string
    let result = ""
    // the given alphabet needs to exist and has to contain exactly 26 characters
    if (!alphabet || alphabet.length !== 26 || !uniqueChar(alphabet)){
      return false
    }
    // for encoding
    if (encode === true){
    // first look through the lookup string to evalute each character one by one
      for (let i = 0; i<input.length; i++){
      //capital letters can be ignored
        let lowerChar = input[i].toLowerCase();
      // if the current character is in lookup string, then find the index of that character
      if(lookup.includes(lowerChar)){
        let foundChar = lookup.indexOf(lowerChar);

        // then find the matching character in the given alphabet that is also at that same index
        let matchingChar = alphabet.charAt(foundChar);

        result = result.concat(matchingChar)
        } else {
          result += lowerChar;
        }
      }
      //for decoding 
    } else if (encode === false){
      // using the same though process as before, but loop through the given alphabet
      for (let i = 0; i<input.length; i++){
        let lowerAlphabet = input[i].toLowerCase();

        // if the current character is in the given alphabet, then find the index of that character
        if(alphabet.includes(lowerAlphabet)){
          let foundAlphabet = alphabet.indexOf(lowerAlphabet)

          // find the matching character in the lookup string that is also at the same index

          let matchingAlphabet = lookup.charAt(foundAlphabet);

          result = result.concat(matchingAlphabet)
        } else {
          result += lowerAlphabet
        }
      }
    }
    // add it to the result
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
