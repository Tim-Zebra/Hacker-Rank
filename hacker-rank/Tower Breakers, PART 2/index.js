function towerBreakers(arr) {
  // Write your code here
  let maxTowerHeight = Math.max(...arr);
  let arrayLength = arr.length;
    if(maxTowerHeight === 1) {
      return 2;
    }
    if(arrayLength % 2 === 0) {
      return 1;
    } else {
      return 2;
    }
}

console.log("test1:", towerBreakers([1,2])); //expecting player 1
console.log("test2:", towerBreakers([1,2,3])); //expecting player 2

// Tests pass locally. Same logic as is used in part 1, however, logic does not carry over for some reason. Need to investigate further