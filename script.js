$(document).ready(function(){

	$('#19').click(function(){
		$('#2').fadeIn(1000);
		$('#active, #3').hide();
	});
	$('#all').click(function(){
		$('#active').fadeIn(1000);
		$('#2, #3').hide();
	});
	$('#91').click(function(){
		$('#3').fadeIn(1000);
		$('#2, #active').hide();
	});

	$("#nav-btn").click(function(){
		$(".mysticky").hide();
	});

});