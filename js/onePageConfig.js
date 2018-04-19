
$(document).ready(function() {
	$('#fullpage').fullpage({
		fitToSection: false,
		slidesNavigation: true,
		navigation: true,
		responsiveWidth: 1500,
		onLeave: function(index, nextIndex, direction){
			fadeSection(nextIndex);
			backgroundTransition(nextIndex);
		}
	});
});
