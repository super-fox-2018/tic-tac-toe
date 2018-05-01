function ticTacToe(){
let board = []
let counterX = 0;
let counterO = 0;
let XO = 'XO'
	for(var i=0;i<3;i++){
		board.push([])
		for(var j=0;j<3;j++){
			board[i].push(XO[Math.floor(Math.random()*2)])
			if (board[i][j]==='X') {
				counterX++
				if (counterX>5) {
					board[i][j]='O'
				}
			}
			else if (board[i][j]==='O') {
				counterO++
				if (counterO>5) {
					board[i][j]='X'				}
			}
		}
	}
	console.log(board);
}

ticTacToe()