/**
 * 
 */

var hello;

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
	const rectEl = document.createElement("div");
	rectEl.style.left = this.x1 + "px";
	rectEl.style.top = this.y1 + "px";
	rectEl.style.width = (this.x2 - this.x1) + "px";
	rectEl.style.height = (this.y2 - this.y1) + "px";
}




// 랜덤하게 만들어서 100개 정도 찍어내보기
