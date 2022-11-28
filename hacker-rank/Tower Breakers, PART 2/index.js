function towerBreakers(arr) {
  // Write your code here
  let maxTowerHeight = Math.max(arr);
  let arrayLength = arr.length;
    if(maxTowerHeight === 1) {
      return 2;
    }
    if(arrayLength % 2 === 0) {
      return 1;
    } else {
      return 2;
    }
    // Player 1 Turn
    // Player 2 Turn
    // Repeat turns until game ends
  

}