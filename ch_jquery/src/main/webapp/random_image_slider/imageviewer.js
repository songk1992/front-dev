//
// ImageViewer
//

// 이미지 갯수
let countImage = 20;
let countRow = 20;
const ImageViewer = {
	
	_makeFileName: function(index){
		if(index < 10){
			index = "00" + index;
		}
		else if(index < 100){
			index = "0" + index;
		}
		return index;
	},
	
	_createImage: function(items){
		
		let index = Math.floor(Math.random() * countImage);
		index = ImageViewer._makeFileName(index);
		
				
		let str = '<img src="../images/slide/image-' + index
		+ '.png" width="50px" alt="image-.png" title="image-.png">';

		items.push(str);
		
		return items;

	},
	
	_createImageRow: function(items){		
		items.push('<div class=\'image-row\'>')
		for(let i=0;i<countRow;i++){
			items = ImageViewer._createImage(items);
		}
		items.push('</div>')
		return items;
	},
	
	_createSection: function(){
		$('#p1').append('<div class=\'image-viewer\'></div>')
		let items = [];
		for(let i=0;i<countRow;i++){
			items = ImageViewer._createImageRow(items);
		}
		console.log(items);
		$('.image-viewer').append(items.join(' '));
	},
	

	_moveImage: function(){
		
		console.log("hdsadal");
		let direction_bool =false;
		let letf_val = 173.2;
		let top_val = 100;
		
		hello();
		setInterval(
		hello, 10000);
		
		function hello(){
		console.log(direction_bool);
		direction_bool = !direction_bool;
		if(direction_bool){
			$('.image-row:nth-child(2n)').animate({left: '-='+letf_val+'px', top: '+='+top_val+'px'}, 10000, 'linear');
			$('.image-row:nth-child(2n+1)').animate({left: '+='+letf_val+'px', top: '-='+top_val+'px'}, 10000, 'linear');
		}
		else{
			$('.image-row:nth-child(2n)').animate({left: '+='+letf_val+'px', top: '-='+top_val+'px'}, 10000, 'linear');
			$('.image-row:nth-child(2n+1)').animate({left: '-='+letf_val+'px', top: '+='+top_val+'px'}, 10000, 'linear');
		}}	

	},
	
	
	_changeImage: function() {
		
		
		let index = Math.floor(Math.random() * countImage);
		
		
		$('.image-viewer img').attr({
			src: 'images/slide' + _makeFileName(index),
			'alt': info.name,
			'title': info.name
		});

	},
	
	_slideShow: function() {
		
		if(typeof intervalId == 'undefined'){
			$('.image-viewer #btn-slide').text("슬라이드 중지");
				intervalId = setInterval(function(){
				ImageViewer._changeImage();
				}, 1000);
		}

		else{
			$('.image-viewer #btn-slide').text("슬라이드 시작");
			clearInterval(intervalId);
			intervalId = undefined;
		}


	},

	init: function() {
		$(function() {
			
			setTimeout(function(){
			ImageViewer._createSection();
			ImageViewer._moveImage();
			}, 1000);

			
			
			
			
			$('.image-viewer #btn-change').click(ImageViewer._changeImage);

			$('.image-viewer #btn-slide').click(ImageViewer._slideShow);

		});

	}

};