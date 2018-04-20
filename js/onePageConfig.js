
$(document).ready(function() {
	$('#fullpage').fullpage({
		fitToSection: false,
		slidesNavigation: true,
		navigation: true,
		responsiveWidth: 720,
		afterLoad: function(anchorLink, index) {
			responsiveFade(index);			
		},
		onLeave: function(index, nextIndex, direction){
			backgroundTransition(nextIndex);
			notResponsiveFade(nextIndex)
		},
		afterResize: function(){
			location.reload();
		}
	});
});
