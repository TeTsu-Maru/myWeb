var judge = 0;
var window_height = $(window).height();
// document.getElementById("game-block").style.height = $(window).height();
// document.write(window_height);
function changeTag(){
		if(judge==1){
			$('#game-block').hide();
			$('.content').show();
			$('.scrollToTop').show();
			judge = 0;
		}
}

function getHeight(){
	return $(window).height();
}

$(document).ready(function(){ //網頁讀取完畢後
	$('#game-block').hide();
 	$('#game1').click(function(){
 		$('.content').toggle(500);
		$('#game-block').toggle(500);
		$('.scrollToTop').toggle(500);
		judge = 1;
	});	
});
