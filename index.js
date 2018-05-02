function tic_tac_toe() {
	var random="XO"
	var countX=0
	var countO=0
	var finalArr=[]
	for(var i=0;i<3;i++) {
		var subArr=[]
		for(var j=0;j<3;j++) {
			var rowValue = random[Math.round(Math.random())]
			if(countX>=5) {
				subArr.push("O")	
			}else if(countO >= 5) {
				subArr.push("X")
			}else{
				subArr.push(rowValue)
			}

			if(rowValue == "X") {
				countX++
			}else{
				countO++
			}
			
		}
	finalArr.push(subArr)	
	}
	return finalArr 	
}

console.log(tic_tac_toe())