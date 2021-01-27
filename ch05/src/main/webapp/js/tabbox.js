  
// DOM Level 2 Event 처리 : element의 event listener를 등록하는 방식
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있다.  
const TabBox = {
	onWindowLoad: function(){
		let divTabBox = document.getElementsByClassName('tab-box')[0];
		let ulTabBox = divTabBox.childNodes[1];
		let liTabs = ulTabBox.getElementsByTagName('li');
		Array.prototype.forEach.call(liTabs, function(li){
			li.addEventListener('click', TabBox.onTabClicked);
		});
	},
	onTabClicked: function(){
		// unselect
		let liSelecteds = document.getElementsByClassName('selected');
		(liSelecteds.length == 1) && (liSelecteds[0].className = '');
		
		// select
		this.className = "selected";
	},	
	init: function(){
		window.addEventListener('load', TabBox.onWindowLoad);		
	}	
}