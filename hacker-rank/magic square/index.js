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

function formingMagicSquare(s) {
    // Write your code here
    // Only need to change so many numbers. Will assume the most common value is the target.
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

    // return difference

}

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
