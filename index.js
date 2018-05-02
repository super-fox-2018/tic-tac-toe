function ticTacToe(jumlahRow, jumlahCol) {
  var alphabetTicTacToe = 'XO'
  var array = []
  var countX = 0
  var countO = 0
  for (var i = 0; i < jumlahRow; i++) {
    var ticTacToe = []
    for (var j = 0; j < jumlahCol; j++) {
      var random = alphabetTicTacToe[Math.floor(Math.random(alphabetTicTacToe) * 2)]
      if (random === 'X') {
        countX++
      } else if (random === 'O') {
        countO++
      }
      //======== pengecekan jumlah O & X======
      if (countO === 5) {
        ticTacToe.push('X')
      } else if (countX === 5) {
        ticTacToe.push('O')
      }
      else {
        ticTacToe.push(random)
      }
    }
    array.push(ticTacToe)
  }
  console.log(array);
}

ticTacToe(3, 3)
