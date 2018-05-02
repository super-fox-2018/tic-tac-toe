function ticTacToe() {
  const options = 'OX';
  const result = [];
  let xCounter = 0;
  let oCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    result.push([]);
    for (let j = 0; j < 3; j += 1) {
      let filling;
      if (oCounter === 5) filling = 'X';
      else if (xCounter === 5) filling = 'O';
      else {
        filling = options[Math.floor(Math.random() * options.length)];
      }

      if (filling === 'O') oCounter += 1;
      else xCounter += 1;

      result[i].push(filling);
    }
  }

  return result;
}

function printPerRow(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

printPerRow(ticTacToe());