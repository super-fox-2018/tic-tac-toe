'use strict'

function ticTacToe() {

    var baris = [ [], [], [] ];
    var str = 'xo';
    var counterX = 0;
    var counterO = 0;
    var xoxo = '';

    // for(let i = 0; i < 9; i++) {

    // }

    for(let i = 0; i < baris.length; i++) {
        for(let j = 0; j < 3; j++) {
            let randomXO = str.charAt(Math.floor(Math.random() * str.length));
            if(randomXO == 'x' && counterX != 5 && counterO != 5) {
                counterX++;
                baris[i].push(randomXO);
            } else if(randomXO == 'o' && counterO !=5 && counterX !=5) {
                counterO++;
                baris[i].push(randomXO);
            } else if(counterO ==  5) {
                baris[i].push('x');
            } else if(counterX == 5) {
                baris[i].push('o');
            }
        }
    }
    
    console.log(baris);
}

ticTacToe();
/*[ [ 'm', 'b', 'f' ],
  [ 'c', 't', 'i' ],
  [ 'b', 'g', 'w' ],
  [ 'f', 'n', 'i' ],
  [ 't', 'j', 's' ] ]
*/
