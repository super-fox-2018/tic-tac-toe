function ticTacToe () {
  const XO = 'XXXXXOOOOO'.split('');
  const rows = [[],[],[]];

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
      let input = (Math.floor(Math.random() * XO.length));
      // console.log(input)
      rows[i].push(XO[input]);
      XO.splice(input,1);
    }
  }
  return rows;
}

console.log(ticTacToe());
