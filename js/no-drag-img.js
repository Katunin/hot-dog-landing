jQuery(document).ready(function($) {

	 $('.no-drag').each(function (){
	    $(this).bind('dragstart', function(e) {
	        if (window.event) event.preventDefault();
	        e.cancelBubble = true; return false;
	    });
	});

});
