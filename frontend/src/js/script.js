$(document).ready(function () {
	$(".book").click(function () {
		var win = $("#window");
		var wall = $("#windowBack");
		wall.css("display","block");
		win.css("display","flex");
		wall.animate({opacity:"0.6"},"normal");
		
		win.animate({top:"+100px", opacity:"1"},"normal");
	});
});

function closeWindow() {
	 $("#windowBack").css({"display":"none","opacity":"0"});
	 $("#window").css({"display":"none","opacity":"0"});
}