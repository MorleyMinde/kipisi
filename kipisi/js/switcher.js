/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".orange" ).on('click',function(){
			$("#colors" ).attr("href", "css/orange.css" );
			$("#logo" ).attr("src", "images/logo-orange.png" );
			$("#logo-footer" ).attr("src", "images/logo-orange.png" );
			return false;
		});
		$(".green" ).on('click',function(){
			$("#colors" ).attr("href", "css/green.css" );
			$("#logo" ).attr("src", "images/logo-green.png" );
			$("#logo-footer" ).attr("src", "images/logo-green.png" );
			return false;
		});
		$(".blue" ).on('click',function(){
			$("#colors" ).attr("href", "css/blue.css" );
			$("#logo" ).attr("src", "images/logo-blue.png" );
			$("#logo-footer" ).attr("src", "images/logo-blue.png" );
			return false;
		});
		$(".purple" ).on('click',function(){
			$("#colors" ).attr("href", "css/purple.css" );
			$("#logo" ).attr("src", "images/logo-purple.png" );
			$("#logo-footer" ).attr("src", "images/logo-purple.png" );
			return false;
		});

		$("#style-switcher h2 a").on('click',function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-206px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-206px"
				});
			}
		});


		$(".colors li a").on('click',function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		});
    
	});