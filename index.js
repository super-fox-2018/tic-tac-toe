'use strict'
function ticTacToe(row, col) {
    let arrColumn = [];
    let countX = 0;
    let countO = 0;
    let xo = '';
    for (let i = 0; i < row; i++) {
        let arrRow = [];
        for (let j = 0; j < col; j++) {
            xo = randomGenerator();
            if (xo === 'X') {
                if (countX === 5) {
                    arrRow.push('O')
                } else {
                    countX++;
                    arrRow.push(xo);
                }
            }
            if (xo === 'O') {
                if (countO === 5) {
                    arrRow.push('X');
                } else {
                    countO++;
                    arrRow.push(xo);
                }
            }
        }
        arrColumn.push(arrRow);
    }
    return arrColumn;
}

function randomGenerator() {
    const rand = 'XO';
    return rand.charAt(Math.round(Math.random()));
}

console.log(ticTacToe(3, 3));