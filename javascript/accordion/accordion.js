//accordion.js

// Accordion Functionality
$(document).ready(function() {

	$(".accordion-header > a").click (function() {		
		
		// Set current clicked header child
		var clickedHeader = $(this).next('div');
		
		// Show/Hide based on current state
		if (clickedHeader.is(":hidden")) {
			clickedHeader.slideDown();
		} else {
			clickedHeader.slideUp();
		}
	});
})