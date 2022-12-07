// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let lookup = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false;
    }
    // decodes in the opposite direction 
    if(encode === false){
      shift = 0 - shift;
    }

    let result = ""
    // look at each character in the string one by one
    for (let i = 0; i<input.length; i++){
        // captial letters should be irrelevant (use toLowerCase to make sure everything is evaluated at the lower case level)
      const inputLower = input[i].toLowerCase();
      // if the current character is in the lookup, find the index of the current character in the lookup
      if (lookup.includes(inputLower)) {
        let foundCharacter = lookup.indexOf(inputLower)
        // add the shift to that index number
        let newCharacter = foundCharacter + shift
         // once we have reached index of 25(which represents z), we need to find a way to go back around to letter a and represent that as 26
        if (newCharacter > 25) {
          newCharacter = newCharacter - 26;
        } else if (newCharacter < 0){
          newCharacter = newCharacter +26
        }
         // find the character at the shifted index and add it to the result
         let foundNewCharacter = lookup.charAt(newCharacter)
         result = result.concat(foundNewCharacter)
      } else {
        // any character not in the lookup can be added to the result (i.e space or special character)
        result += inputLower;
      }
    }
      return result;
    // ENCODING
    // look at each character in the string one by one
    // if the current character is in the alphabet, find the index of the current character in the lookup
    // add the shift to that index number
    // find the character at the shifted index and add it to the result

    //DECODING
    //if the encode value is false, then it should switch the signs of shift (positive to negative or negative to positive)
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
