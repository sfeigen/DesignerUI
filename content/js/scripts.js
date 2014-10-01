$(document).ready(function() {

//Navbar Auto-close
$('.navbar-collapse').click('li', function() {
	$('.navbar-collapse').collapse('hide');
});

//Footer Date Copyright
$('.footer').append(new Date().getFullYear(), " &copy;  Web Site. All Rights Reserved.");

});