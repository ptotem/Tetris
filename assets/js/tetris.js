var tetris = {
	
	
	//initialize the grid
	init: function() {
		var x = templates.grids.x, y = templates.grids.y, map = createArray(y, x);
		for(var i=1; i<=y; i++) {
			$('#grid').append('<tr></tr>');
			for(var j=1; j<=x; j++) {
				$('#grid tr:last-child').append('<td class="' + i + '' + j + ' color-primary"></td>');
				map[i-1][j-1] = 0;
			}
	  	}
		tetris.map = map;
	},
	
	//set initial position of shape
	draw: function(shape, row, col, color) {
//		$('#grid td').removeClass(color).addClass('color-primary');
		var x = shape.length, y = shape[0].length;
		for(var i=1; i<=x; i++) {
			for(var j=1; j<=y; j++) {
				var row_ = (row+1)+i;
				var col_ = (col+1)+j
				if(((row+1)+i)===templates.grids.y)
					clearInterval(tetris.timer)
				if(shape[i-1][j-1]!==0 && row_-1 > -1) {
					$('.'+ row_ + col_).addClass(color).removeClass('color-primary');
					tetris.map[row_-1][col_-1] = 1;
				}
				else {
					$('.'+ row_ + col_).removeClass(color).addClass('color-primary');
				}
				$('.'+(row_-x)+col_).removeClass(color).addClass('color-primary');
				if(row_-1 > (-1+x))
					tetris.map[(row_-x)-1][col_-1] = 0;
			}
		}
		
		return row+1;
	},
	
	moveDown: function(shape, x, y) {
		tetris.duration = 100;
		var c = tetris.shapes.randColor();
		y = randBetween(1, templates.grids.x-shape[0].length);
		tetris.timer = setInterval(function() {
			x = tetris.draw(shape, x, y, c);
		}, tetris.duration);
	}
};

var templates = {
	
	grids: {
		x: 10,
		y: 20
	}
};

$(function() {
	var gridMap = tetris.init();
})