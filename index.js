function tictactoe(a,b) {
  var tic_tac_toe=[];
  var xo = ['X','X','X','X','O','O','O','O','O'];
  for (var i = 0; i < a; i++) {
    var tampung = [];
    for (var j = 0; j < b; j++) {
      var test = Math.floor(Math.random()*(xo.length-1));
      tampung.push(xo[test]);
      xo.splice(test,1);
    }
    tic_tac_toe.push(tampung);
  }

  return (tic_tac_toe);
}
console.log(tictactoe(3,3));
