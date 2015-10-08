//Accordion Exercise
$(document).ready(function() {
	$(".accordion-header > a").click (function() {
		
		// Current clicked header
		var clickedHeader = $(this).next('div');
		
		// Show/Hide based on current state
		if (clickedHeader.is(":hidden")) {
			clickedHeader.slideDown();
		} else {
			clickedHeader.slideUp();
		}
	});
})