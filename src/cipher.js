window.cipher = {
  encode: encode,
  decode: decode
};


function encode (offSet, writtenMsg) {
  let letters = "";
  let result = "";
  
  for (let i = 0; i < writtenMsg.length; i++) {
    const asciiCode = writtenMsg.charCodeAt(i);
    const isUpperCase = asciiCode >= 65 && writtenMsg.charCodeAt(i) <= 90
    const isTinyCase = asciiCode >= 97 && writtenMsg.charCodeAt(i) <= 122

    if (isUpperCase) {
      letters = (asciiCode - 65 + offSet) % 26 + 65;
      result += String.fromCharCode(letters);

    } else if (isTinyCase) {
      letters = (asciiCode - 97 + offSet) % 26 + 97;
      result += String.fromCharCode(letters); 
    } else {
      result += writtenMsg[i];      
    }
  }
  return result;
}


function decode (offSet, writtenMsg) {
  let letters = "";
  let result = "";
  
  for (let i = 0; i < writtenMsg.length; i++) {
    const asciiCode = writtenMsg.charCodeAt(i);
    const isUpperCase = asciiCode >= 65 && writtenMsg.charCodeAt(i) <= 90
    const isTinyCase = asciiCode >= 97 && writtenMsg.charCodeAt(i) <= 122

    if (isUpperCase) {
      letters = (asciiCode + 65 - offSet) % 26 + 65;
      result += String.fromCharCode(letters);
    } else if (isTinyCase) {
      letters = (asciiCode -122 - offSet ) % 26 + 122;
      result += String.fromCharCode(letters); 
    } else {
      result += writtenMsg[i];      
    }
  }
  return result;
}