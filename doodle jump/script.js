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


