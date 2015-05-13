tetris.shapes = {
	
	//L block
	L: [
		[1,0],
		[1,0],
		[1,1]
	],
	
	
	//Z block
	Z: [
		[1,1,0],
		[0,1,1]
	],
	
	
	//S block
	S: [
		[0,1,1],
		[1,1,0]
	],
	
	//T block
	T: [
		[1,1,1],
		[0,1,0]
	],
	
	//I block
	I: [
		[1],
		[1],
		[1]
	],
	
	//O block
	O: [
		[1,1],
		[1,1]
	],
	
	
	//Shapes helper functions
	getRandom: function() {
		var ltrs=['L', 'Z', 'S', 'T', 'I', 'O'];
		return tetris.shapes[ltrs[randBetween(0,ltrs.length-1)]];
	},
	
	randColor: function() {
		var colors=['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6']
		return colors[randBetween(0,colors.length-1)];
	}
	
	
};