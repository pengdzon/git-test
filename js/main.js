$(function(){
	// load header & disable self link
	$("header").load('./include/header.html',function(){
		$('.nav a[href="'+window.location.pathname+'"]').css({'color':'#aaa','pointer-events':'none'});
	});

	// load footer
	$('.home').length ? $('footer').load('/include/footer_home.html') : $('footer').load('/include/footer.html');
});