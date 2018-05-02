function random(){
  var arr = ["X", "O"];
  var xo = arr[Math.floor(Math.random() * arr.length)];

  return xo;
}

console.log(random());

function tictactoe(){
  var board = [[],[],[]];
  var countX = 0;
  var countO = 0;
  var temp = "";

  for(var i = 0; i < 3; i++){
    for (var k = 0; k < 3; k++){
      if(countX < 5 && countO < 5){
        board[i].push(random());
        if(board[i][k] === "X"){
          countX++;
        }
        else if (board[i][k] === "O"){
          countO++;
        }
      }

      else if( countX === 5){
        board[i].push("O");
      }

      else if( countO === 5){
        board[i].push("X");
      }

    }
  }
  return board;
}

console.log(tictactoe());
