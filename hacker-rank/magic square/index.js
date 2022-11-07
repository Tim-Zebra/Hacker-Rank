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

// all possible magic squares
const square1 = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
const square2 = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];
const square3 = [[2, 9, 4], [7, 5, 3], [6, 1, 8]];
const square4 = [[6, 7, 2], [1, 5, 9], [8, 3, 4]];
const square5 = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];
const square6 = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
const square7 = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
const square8 = [[6, 1, 8], [7, 5, 3], [2, 9, 4]];

const squares = [square1, square2, square3, square4, square5, square6, square7, square8];

// ToDo: Create outline
function formingMagicSquare(s) {
    // Write your code here
    // Maximum minimum different will be 45, assuming an array of 0's is passed.
    let minimumDif = 45;
    // let row1Sum = 0;
    // let row2Sum = 0;
    // let row3Sum = 0;
    // let col1Sum = 0;
    // let col2Sum = 0;
    // let col3Sum = 0;

    // // From top left to bottom right
    // let diag1Sum = 0;
    // // From top right to bottom left
    // let diag2Sum = 0;

    // Compares all arrays
    for(let k = 0; k < squares.length; k++) {
        let currentDif = 0;
        let currentArray = squares[k];

        currentDif = differenceFinder(s, currentArray);
        // updates minimum different if necessary
        if(currentDif < minimumDif) {
            minimumDif = currentDif;
        }
    }

    // Need to get all values of rows and columns and diagonals
    // Need to evaluate rows and columns whether they're greater or less than the target number
    // Determine numbers to change.

    // subtract correct array from old array to find difference
    // console.log("input array: ", s)
    // console.log("minimum difference returned: ", minimumDif, + "\n\n\n");
    return minimumDif;
}

const differenceFinder = (s, array) => {
    let difference = 0;
    difference += checkRows(s, array);
    difference += checkColumns(s, array);
    difference += checkDiagnoals(s, array);

    //console.log("Here is the original array: ", s, "\nHere is the subtracting array: ", array, "\n\n Here is the difference: ", difference, "\n\n");
}

// Checks rows and returns difference of each row. [r1, r2, r3]
const checkRows = (s, array) => {
    let difference = 0;
    // console.log('thisHappened', s.length);
    for(let k = 0; k < s.length; k++) {
        for(let l = 0; l < s[0].length; l++) {
            difference += Math.abs(s[k][l] - array[k][l]);
        }
    }
    return difference;
}

// Checks columns and returns array value of each column [c1, c2, c3]
const checkColumns = (s, array) => {
    // variables for array columnn conversion
    let newS = [[], [], []];
    let newArray = [[], [], []];

    // convert columns into rows, then can use the checkRows method
    let count = 0;
    while(count < s.length) {
        
        
        count++;
    }


    let difference = 0;
    // console.log('thisHappened', s.length);
    for(let k = 0; k < s.length; k++) {
        for(let l = 0; l < s[0].length; l++) {
            difference += Math.abs(s[k][l] - array[k][l]);
        }
    }
    return difference;
}
// Checks diagonals and returns arrray value of each diagnoal [top left to bottom right, top right to bottom left]
const checkDiagnoals = (s, array) => {
    
}


// Testing
const testArray1 = [[5,3,4], [1,5,8], [6,4,2]]; //Expecting 7
const testArray2 = [[4,9,2], [3,5,7], [8,1,5]]; //Expecting 1
const testArray3 = [[4,8,2], [4,5,7], [6,1,6]]; //Expecting 4
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
