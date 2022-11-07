'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter. [[], [], []]
 */

// ToDo: HOW TO SOLVE A MAGIC SQUARE??
// Must have 1-9 only 1 time.
// for 3x3 magic number should be 15. 1+2+3...+8+9/3 = 15.
function formingMagicSquare(s) {
    // Write your code here
    // Only need to change so many numbers. Will assume the most common value is the target.
    let minimumDif = 0;
    let row1Sum = 0;
    let row2Sum = 0;
    let row3Sum = 0;
    let col1Sum = 0;
    let col2Sum = 0;
    let col3Sum = 0;

    // From top left to bottom right
    let diag1Sum = 0;
    // From top right to bottom left
    let diag2Sum = 0;

    // Need to get all values of rows and columns and diagonals
    // Need to evaluate rows and columns whether they're greater or less than the target number
    // Determine numbers to change.

    // subtract correct array from old array to find difference
    console.log("input array: ", s)
    console.log("minimum difference returned: ", minimumDif, + "\n\n\n");
    return minimumDif;

}



// Testing
testArray1 = [[5,3,4], [1,5,8], [6,4,2]]; //Expecting 7
testArray2 = [[4,9,2], [3,5,7], [8,1,5]]; //Expecting 1
testArray3 = [[4,8,2], [4,5,7], [6,1,6]]; //Expecting 4
formingMagicSquare(testArray1);
formingMagicSquare(testArray2);
formingMagicSquare(testArray3);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
