function tictactoe() {
  function makeid() {
    var text = '';
    var abjad = ['X', 'O'];

    var isi = Math.floor(Math.random() * abjad.length);

    return abjad[isi];
  }

  var luar = [];

  var x = 0;
  var o = 0;

  for (let k = 0; k < 3; k++) {
    var dalam = [];
    for (let l = 0; l < 3; l++) {
      var ran = makeid();

      if (x === 5) {
        dalam.push('O');
        o++
      } else if (o === 5) {
        dalam.push('X');
        x++
      } else {
        dalam.push(ran);

        if (ran === 'X') {
          x++;
        } else if (ran === 'O') {
          o++;
        }

      }


    }
    luar.push(dalam);
  }

  return luar;
}
console.log(tictactoe()); //
