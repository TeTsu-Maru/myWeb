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

$(document).ready(function(){
	$('#algorithm').hide();

	$('#coun, #matr, #radix, #binary').click(function(){
		$('#game-block').hide();
		$('.content').hide();
		$('#algorithm').show();
		$('.scrollToTop').show(500);
		$('.scrollToButtom').show(500);
		judge = 1;
	});

	//演算法Block
	$('#coun').click(function(){
		$('html,body').animate({scrollTop:$('#exp_counting').offset().top}, 400);
	});

	$('#matr').click(function(){
		$('html,body').animate({scrollTop:$('#exp_matrix').offset().top}, 400);
	});

	$('#radix').click(function(){
		$('html,body').animate({scrollTop:$('#exp_radix').offset().top}, 400);
	});

	$('#binary').click(function(){
		$('html,body').animate({scrollTop:$('#exp_binary').offset().top}, 400);
	});

	//code 隱藏
	$('#code_counting, #code_matrix, #code_binary').hide();
	//code顯示
	$('#btn_counting').click(function(){
		$('#code_counting').toggle(500);
		$('html,body').animate({scrollTop:$('#exp_counting').offset().top}, 400);
	});
	$('#btn_matrix').click(function(){
		$('#code_matrix').toggle(500);
		$('html,body').animate({scrollTop:$('#exp_matrix').offset().top}, 400);
	});
	// $('#btn_counting').click(function(){
	// 	$('#code_counting').toggle(500);
		$('html,body').animate({scrollTop:$('#exp_radix').offset().top}, 400);
	// });
	$('#btn_binary').click(function(){
		$('#code_binary').toggle(500);
		$('html,body').animate({scrollTop:$('#exp_binary').offset().top}, 400);
	});

});