var judge = 0;
// var window_height = $(window).height();
// document.getElementById("game-block").style.height = $(window).height();
// document.write(window_height);
function changeTag(){
	if(judge==1){
		$('#game-block').hide();
		$('#algorithm').hide();
		$('.content').show();
		$('.scrollToTop').show();
		$('.scrollToButtom').show();
		judge = 0;
	}
}

$(document).ready(function(){ //網頁讀取完畢後
	$('#game-block').hide();
 	$('#game1').click(function(){
 		$('.content').hide(500);
 		$('#algorithm').hide();
		$('#game-block').show(500);
		$('.scrollToTop').hide(500);
		$('.scrollToButtom').hide(500);
		judge = 1;
	});	
});
