

const TabBox = {
	init: function(){
		$(this._init);
	},
	_init: function(){
		$('.tab-box li').click(TabBox.onTabClicked);
		TabBox._changeTab();
	},
	
	onTabClicked: function(){
	// unselect
	$('.selected').toggleClass('selected');
	
	// select
	let $liTab = (this == TabBox) ? $('.tab-box li:first-child') : $(this);
	console.log($liTab.attr('no'));
	$('.ta-box div').text($liTab.data('no')+"의 탭뷰입니다.");
	$(this).toggleClass("selected");
	
	}


}




let currentTab;
$( function() {
	$('ul li').click(function(){
		if(currentTab){
			currentTab.toggleClass("selected");
		}

		 $(this).toggleClass("selected");
		 currentTab = $(this);
	})
} );  