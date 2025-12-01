var controlScroll = function () {
  var scroH = $(document).scrollTop();
  if(scroH > 0){
	$('header').addClass('front')
  } else {
  	$('header').removeClass('front')
  }

  if(scroH > 400){
	$('.footbutton').addClass('show')
  } else {
  	$('.footbutton').removeClass('show')
  }
}
$(document).scroll(function() {
	controlScroll()
});
controlScroll()
var showHidden = function () {
	var header = $('header')
	if (header.hasClass('show')) {
		header.removeClass('show')
	} else {
		header.addClass('show')
	}
}
$('.menu').click(showHidden)
$('nav a').click(showHidden)
