// n is an Integer denoting the NUMBER of TOWERS
// m is an Interger denoting the HEIGHT of EACH tower

// Players can reduce their tower height of x by y. And y must evenly divide into x.
// Remove a number greater than or equal to 1 but less than x.
// When the tower is evenly divided by height: newTowerHeight = towerHeight - y;

// 2 Players. Player 1 always goes first

function towerBreakers(n, m) {
  // Write your code here
  if(m === 1) {
    return 2;
  }
  if(n % 2 === 0) {
    return 1;
  } else {
    return 2;
  }
  // Player 1 Turn
  // Player 2 Turn
  // Repeat turns until game ends

  // Return 1 if Player 1 wins, or 2 if Player 2 wins
}

//tests
console.log("test1:", towerBreakers(2,2)); //expecting player 2
console.log("test2:", towerBreakers(1,4)); //expecting player 1