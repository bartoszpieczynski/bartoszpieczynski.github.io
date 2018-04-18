
$(document).ready(function() {
	$('#fullpage').fullpage({
		fitToSection: false,
		slidesNavigation: true,
		navigation: true,
		responsiveWidth: 700,
		onLeave: function(index, nextIndex, direction){
			fadeSection();
			backgroundTransition(nextIndex);
		}
	});
});
