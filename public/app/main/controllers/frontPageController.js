//module which controls the front page of the application
app.controller("FrontPageController", function($scope){
	var height = $(document).height() - $(".nav").height(); //sets the height of the menu
	$(".menu").css("height", height.toString());
});