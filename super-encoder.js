// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher} = require('./encryptors.js');

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let firstMsg = caesarCipher(str, 6);
  let secondMsg = symbolCipher(firstMsg);
  let thirdMsg = reverseCipher(secondMsg);
  return thirdMsg
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let first = reverseCipher(str);
  let second = symbolCipher(first);
  let third = caesarCipher(second, -6);
  return third
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);