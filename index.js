function game(row , column){
   
    var isi='XO'
    var hasil=[]
    let x=0
        let o = 0
    for(let i=0;i<row;i++){
        let tampung=[]
        
        for(let j=0;j<column;j++){
            var acak =isi.charAt(Math.floor(Math.random() * isi.length))
            
            if(acak === 'X' && x !==5 ){
                x++
                // tampung.push('X')
            }
            else if(acak  === 'O' && o !== 5){            
                o++
                // tampung.push('O') 
            }
            else if(o === 5){
                // tampung.push('X')
                acak ='X'
            }
            else if(x === 5 ){  
                // tampung.push('O')
               acak ='O'
            }
            tampung.push(acak)
               
        }
        hasil.push(tampung)
    }
   console.log(hasil)

}
game(3,3)
