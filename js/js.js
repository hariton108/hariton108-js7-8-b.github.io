$(function() {

	$('input').each(function() {

		var $tooltip = $(this).parent().append('<div>'+$(this).attr('title')+'</div>')
                  .find('div').addClass('tooltip').hide();

		$(this).removeAttr("title").mouseenter(function() {

			$tooltip.fadeIn(300);
    });

    $(this).mouseleave(function() {

  		$tooltip.fadeOut(300);
    });

    $(this).siblings('label').click(function() {

    	$('.tooltip').hide();
    	$tooltip.fadeIn(300);
    });

    $(this).click(function() {

    	$('.tooltip').hide();
    	$tooltip.show();
    });

    $('.help').click(function() {

    	$('.tooltip').fadeIn(300);
    });	
	});
})