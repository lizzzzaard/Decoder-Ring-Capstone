// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //create a lookup that matches the alphabet with the assigned numbers by creating an object

  let lookup = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55,
  }

  // create a reverse lookup that corresponds to the decods

  let reverseLookup = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  }

  function polybius(input, encode = true) {
    // when decoding, it should return false if the length of the characters in the string (excluding spaces) are odd
    let noSpacesInput = input.split(" ").join("")

    if (encode === false){
      if (noSpacesInput.length % 2 == 1){
        return false;
      }
    }

    let result = ""
    // if the letter that was provided in the input is in the lookup object, find the matching value of the key that represents the letter in the lookup
    if (encode === true){
    // look at each key: value pair in the lookup one by one using a for/in loop
      for (let i = 0; i<input.length; i++){
        const currentChar = input[i];
      // capital letters can be ignored
        const letterLower = currentChar.toLowerCase();
        // check to make sure the current character is key in the lookup object
        if(lookup.hasOwnProperty(letterLower) === true){
          let matchingValue = lookup[letterLower]
          //add the matching value (which is a number) to the result string
          result = result.concat(matchingValue)
        // if the character provided is not in the lookup, then leave that character as is (either a space or special character)
          }   else {
          result += letterLower;
        }
      }
      // if encode = false, then we are decoding (find the number (key) that matches the letter (value))
    } else if (encode === false){
      // look at each key: value pair in the lookup one by one using a for/in loop
      for (let i = 0; i<input.length; i++){
        // set a variable to hold the current number + the next number combined so we get a two digit number
        const currentNumber = input[i] + input[i+1]
        // check to make sure the current number is key in the lookup objec
        if(reverseLookup.hasOwnProperty(currentNumber) === true){
          let matchingNumber = reverseLookup[currentNumber]
          //add the matching value (which is a letter) to the result string
          result = result.concat(matchingNumber)
        }
        // leaves spaces as is
        if (input[i] === " "){
          result += input[i];
        } else {
          i++
        }
      }
    }
      //add the final value to the result string
    return result;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
