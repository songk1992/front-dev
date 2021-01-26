
let div_counter = 1;
	
let Rect = function(x1, y1, x2, y2, color) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.color = color;
}

Rect.prototype.show = function() {
	console.log("[width: " + (this.x2 - this.x1) + ", height: " + (this.y2 - this.y1) + ", color: " + this.color + "]");
}

Rect.prototype.show2 = function() {
make_square(this.x1, this.y1, this.x2, this.y2, this.color);
}

Rect.prototype.make_100_squares = function() {
	
	for(i=0;i<100;i++){
		let x1 = makeRandomNumber(10, 500);
		let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		make_square(x1, this.y1, (x1+10), this.y2, randomColor);
	}
}

const makeRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1), 10) + min;




make_square = function(x1, y1, x2, y2, color) {
	const rectEl = document.createElement("div_" + div_counter++);
	rectEl.style.position = "absolute";
	rectEl.style.left = x1 + "px";
	rectEl.style.top = y1 + "px";
	rectEl.style.width = (x2 - x1) + "px";
	rectEl.style.height = (y2 - y1) + "px";
	rectEl.style.backgroundColor = color;
	k = makeRandomNumber(1, 30);
	rectEl.style.animation = "mymove "+  k + "s infinite";

	document.body.appendChild(rectEl);
}






// 랜덤하게 만들어서 100개 정도 찍어내보기
