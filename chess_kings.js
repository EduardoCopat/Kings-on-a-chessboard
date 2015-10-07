function calculateChessKings() {
	var possiblePositions = 0;
	var mutuallyAttacking = 0;


	function scan_board(x, y) {
		for (var i = 1; i <= 8; i++) { 
			for (var j = 1; j <= 8; j++) { 
				if(i == x && j == y){ //i.e. white king in same spot as black king. Invalid position
					continue;
				}
				possiblePositions++;
				if(is_attackable(x,y,i,j)){
					mutuallyAttacking++;			
				}               
			}
		}
	}

	function is_attackable(x,y,i,j){
		//north-west
		if(x-1==i && y-1==j)
			return true;
		//north
		else if(x-1==i && y==j)
			return true;
		//north-east
		else if(x-1==i && y+1==j)
			return true;
		//east
		else if(x==i && y+1==j)
			return true;
		//south-east
		else if(x+1==i && y+1==j)
			return true;
		//south
		else if(x+1==i && y==j)
			return true;
		//south-west
		else if(x+1==i && y-1==j)
			return true;
		//west
		else if(x==i && y-1==j)
			return true;
		else
			return false;
	}


	for (var i = 1; i <= 8; i++) { 
		for (var j = 1; j <= 8; j++) { 
			scan_board(i,j);
		}
	}

	console.log(possiblePositions); //Will print 4035
	console.log(mutuallyAttacking); //Will print 420
	console.log(possiblePositions - mutuallyAttacking); // Will print 3612
}