/*
example:

var tic_tac_toe = [
                    ["X", "X", "O"],
                    ["O", "X", "O"],
                    ["O", "O", "X"]
                  ]
in 3x3 tictactoe, jumlah yang seimbang adalah memiliki
5 X dan 4 O ATAU 4 X dan 5 O
*/

function ticTacToe (grid) {
  let board = []
  let xo = "XO";
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < grid; i++) {
    let row = [];

    for (let j = 0; j < grid; j++) {
      let randomize = xo.charAt(Math.floor(Math.random() * xo.length));
      if (randomize === 'X') {
        if (countX === 5) {
          row.push('O');
          countO++;
        }
        else {
          countX++;
          row.push(randomize);
        }
      } else {
        if (countO === 5) {
          row.push('X');
          countX++;
        }
        else {
          countO++;
          row.push(randomize);
        }
      }
    }

    board.push(row)
  }

  console.log(`X: ${countX}, O: ${countO}`);
  return board;
}

console.log(ticTacToe(3));
