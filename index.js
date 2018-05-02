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
    var limX = mid+1;
    var limO = mid;
    var x = 0;
    var o = 0;
    console.log(mid, x, o)

    for(let a=0; a<=row-1; a++){
        tic_tac_toeBoard.push([])
        
        for(let b=0; b<=col-1; b++){
            var randomPins = randomPin()
            console.log(randomPins)
            
                if(randomPins === 'X'){
                   if(x<=limX){
                    x += 1
                    tic_tac_toeBoard[a].push(randomPins)           
                   }
                   
                }else if(randomPins === 'O'){
                    if(o<=limO){
                     o += 1
                     tic_tac_toeBoard[a].push( randomPins)           
                    }
                }
            
            
        }
    }

    return tic_tac_toeBoard
}


console.log(tic_tac_toe(3,3))