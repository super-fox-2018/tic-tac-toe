function generateTictactoe() {
  let tictactoe = [];
  let xo = 'XO';
  let x = 0;
  let o = 0;
  for (var i = 0; i < 3; i++) {
    tictactoe.push([]);
    for (var j = 0; j < 3; j++) {
      if (x === 5) {
        tictactoe[i].push('O');
      } else
      if (o === 5) {
        tictactoe[i].push('X');
      } else {
        tictactoe[i].push(xo[Math.floor(Math.random() * 2)]);
      }
      if (tictactoe[i][j] === 'X') {x++;}
      if (tictactoe[i][j] === 'O') {o++;}
    }
  }
  console.log(`${x} and ${o}`);
  return tictactoe;
}

console.log(generateTictactoe());
