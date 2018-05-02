'use strict'

var generatetictactoe = () =>{
    var XO = 'XXXXXOOOOO'.split('')
    var board = [[],[],[]]
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            var input = Math.round(Math.random()*(XO.length-1))
            console.log(input)
            board[i].push(XO[input])
            XO.splice(input,1)
        }
    }
    return board
}

console.log(generatetictactoe())