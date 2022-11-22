function superReducedString(s) {
  let newString = "Empty String";
  // Checks argument string
  if(s.length > 0) {
    newString = s.split('');
  } else {
    return newString;
  }

  console.log('thisHappened', newString);
  // Runs string reducing function
  let updatedString = '';
  for(let k = 0; k < newString.length-1; k++) {
    let index0 = newString[k];
    let index1 = newString[k+1];
    if (index0 !== index1) {
      updatedString += index0;
    }
  }

  if(updatedString === '') {
    return "Empty String"
  }
  console.log('thisHappened', updatedString);
  return newString;

}


// Tests
superReducedString('abba');