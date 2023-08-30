$(document).ready(function() {
	$('.tabs-nav a').on('click', function (event) {
		event.preventDefault(); 
		$('.tab-active').removeClass('tab-active');
		$(this).parent().addClass('tab-active');
		$('.tabs-stage .tabContent').hide();
		$($(this).attr('href')).show();
	});
	
	$('.tabs-nav a:first').trigger('click');
 
	
var panels = jQuery('.has-sub-menu .sub-menu');
panels.hide(); 
jQuery('.has-sub-menu > a').click(function() {
	var headingBtn = jQuery(this);
	var activePanel = jQuery(this).next(panels); 
	jQuery('.has-sub-menu > a').removeClass('active');
	headingBtn.addClass('active');
	if ( activePanel.is(':visible')) {
		activePanel.slideUp('slow').removeClass('active'); 	
		headingBtn.removeClass('active');
	}
	else {
		panels.slideUp('slow').removeClass('active');
		activePanel.slideDown('slow').addClass('active'); 
	}
});

	
	$('.accordion .accordion_title').click(function() {  
		if($(this).next('.accordion_content').is(':visible')) {
			$(this).next('.accordion_content').slideUp('slow');
			$(this).closest('.accordion').removeClass('collapsed');
		}
		else {
			$(this).next('.accordion_content').slideDown('slow'); 
			$(this).closest('.accordion').addClass('collapsed');
		}
	}); 
	


	$('.sidebar_Switch').click(function() { 
		$('.page_sidebar').toggleClass('closed');
	});
	if($(window).width() < 768) {
		$('.sb_menu').hide();
	}
	$('.menuToggleBtn').click(function() { 
		//$('.sidebar_menu').toggleClass('closed');
		$('.sb_menu').slideUp('slow');
		if($('.sb_menu').is(':visible')) { 
		$('.sb_menu').slideUp('slow');
		}
		else {
			$('.sb_menu').slideDown('slow');
		}
		
		
	});
	
	
});