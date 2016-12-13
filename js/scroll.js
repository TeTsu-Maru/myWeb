//自動滑動
$(document).ready(function(){ //網頁讀取完畢後
 	$('#background').click(function(){
		$('html,body').animate({scrollTop:$('#background_block').offset().top}, 600);
	});
	$('#experience').click(function(){
		$('html,body').animate({scrollTop:$('#experience_block').offset().top}, 600);
	});
	$('#license').click(function(){
		$('html,body').animate({scrollTop:$('#license_block').offset().top}, 600);
	});
	$('.scrollToTop').click(function(){
		$('html,body').animate({scrollTop:0}, 400);
	});

	$('.scrollToButtom').click(function(){
		$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
	});
});


// $(function(){
// 　$(window).load(function(){
	
// 　　$(window).bind('scroll resize', function(){
// 　　var $this = $(this);
// 　　var $this_Top=$this.scrollTop();

// 　　//當高度小於100時，關閉區塊 
// 　　if($this_Top > 100){	
// 　　　$('#top-bar').stop().animate({margin-top:"0px"});
// 　　  }
// 　　}).scroll();
// 　});
// });