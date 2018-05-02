function tic_tac_toe(num1, num2){
    function randomPin(){
        
        var alp = 'XO';
        var alpRandom = Math.ceil(Math.random() * alp.length-1);
        return alp[alpRandom];
    }


    var tic_tac_toeBoard = [];
    var row = num1;
    var col = num2;
    var mid = Math.floor(row * col/2)
    var limX = mid;
    var limO = mid;
    var x = 0;
    var o = 0;
    console.log(mid, limX, limO)

    for(let a=0; a<row; a++){
        tic_tac_toeBoard.push([])
        
        for(let b=0; b<col; b++){
            var randomPins = randomPin()
            // console.log(randomPins)
            
                if(randomPins === 'X'){
                    //console.log(a, 'X', x)
                   if(x<=4){
                    x += 1
                    tic_tac_toeBoard[a].push(randomPins)           
                   }else{
                    tic_tac_toeBoard[a].push('O')
                   }
                
                   
                   
                }
                
                if(randomPins === 'O'){
                    //console.log(a, 'O', o)
                    if(o<=5){
                     o += 1
                     tic_tac_toeBoard[a].push( randomPins)           
                    }else{
                        tic_tac_toeBoard[a].push('X')
                    }
                }
            
            
        }
    }

    return tic_tac_toeBoard
}


console.log(tic_tac_toe(3,3))