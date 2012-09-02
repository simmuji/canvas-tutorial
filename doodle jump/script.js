window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();


var canvas = document.getElementById('canvas');
var	ctx = canvas.getContext('2d');
var image = document.getElementById('sprite');

var width = 422;
var	height = 552;

canvas.width = width;
canvas.height = height;



//Player object
var Player = function() {
	//v as vertical velocity
	this.vy = 11;
	this.vx = 0;

	this.isMovingLeft = false;
	this.isMovingRight = false;
	this.isDead = false;
	
	//Character size
	this.width = 55;
	this.height = 40;

	//Sprite clipping
	this.cx = 0;
	this.cy = 0;
	this.cwidth = 110;
	this.cheight = 80;

	this.dir = "left";

	this.x = width / 2 - this.width / 2; //center the character
	this.y = height - this.height;

	//Function to draw it
	this.draw = function() {
		try {
			if (this.dir == "right") this.cy = 121;
			else if (this.dir == "left") this.cy = 201;
			else if (this.dir == "right_land") this.cy = 289;
			else if (this.dir == "left_land") this.cy = 371;
			ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
		} catch (e) {}
	};

	this.jump = function() {
		this.vy = -8;
	};

	this.jumpHigh = function() {
		this.vy = -16;
	};

};

player = new Player();
player.draw();



