//
// ImageViewer
//

const ImageViewer = {
	_images: [{
			name: '국화',
			file: 'Chrysanthemum.jpg'
		},

		{
			name: '사막',
			file: 'Desert.jpg'
		},

		{
			name: '수국',
			file: 'Hydrangeas.jpg'
		},

		{
			name: '해파리',
			file: 'Jellyfish.jpg'
		},

		{
			name: '코알라',
			file: 'Koala.jpg'
		},

		{
			name: '등대',
			file: 'Lighthouse.jpg'
		},

		{
			name: '펭귄',
			file: 'Penguins.jpg'
		},

		{
			name: '툴립',
			file: 'Tulips.jpg'
		}],

	_changeImage: function() {
		let index = Math.floor(Math.random() * ImageViewer._images.length);
		let info = ImageViewer._images[index];

		$('.image-viewer img').attr({
			src: 'images/' + info.file,
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
			$('.image-viewer #btn-change').click(ImageViewer._changeImage);

			$('.image-viewer #btn-slide').click(ImageViewer._slideShow);


			// 디폴트 이미지 선택하기
			ImageViewer._changeImage();
		});

	}

};