function ticTacToe(){
    var arr="XO"
    var result=[]
    var countX=0
    var countO=0

    for(var i=0; i<3; i++){
        var arrKecil=[]
        for (var j=0; j<3; j++){
            var acak= arr[Math.floor((Math.random() * arr.length))]
            // console.log(acak)
            if(acak=== "X"){
                countX+=1
            }
            else if(acak=== "O"){
                countO+=1
            }

            if(countO === 5){
                acak="X"
            }
            if(countX === 5){
                acak="O"
            }
            arrKecil.push(acak)
        }
        result.push(arrKecil)       
    }
    return result
}
console.log(ticTacToe())