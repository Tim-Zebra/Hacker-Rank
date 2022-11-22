function superReducedString(s) {
  let newString = "Empty String";
  // Checks argument string
  if(s.length > 0) {
    newString = s.split('');
  } else {
    return newString;
  }

  // Runs string reducing function
  let changeHappened = true;
  while(changeHappened === true) {
    changeHappened = false;
    for(let k = 0; k < newString.length-1; k++) {
      let index0 = newString[k];
      let index1 = newString[k+1];
      if (index0 === index1) {
        newString.splice(k, 2);
        changeHappened = true;
      }
    }

  }
  newString = newString.join('');
  if(newString === '') {
    newString = "Empty String";
  }

  return newString;
}


// Tests
superReducedString('abcba');