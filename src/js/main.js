(function(){
	var autoheightBlocks = {
		init: function() {
			$(window).resize(function() {
				var $items = $('.js-height-auto');
				if ($items.length) {
					$items.each(function() {
						var $children = $(this).find('.js-ha-children').length ? $(this).find('.js-ha-children') : $(this).children();
						$children.css('height','initial');
						$children.css({
							'height': Math.max.apply(null,
								$children.map(function () {
									return $(this).outerHeight();
								})
							) + 'px'
						});	
					});			
				}	
			}).trigger('resize');
		}
	}.init();
	$('.js-select-card').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.card-wrap').find('.card-checkbox').click();
	});

	$('.card').on('click', function(event) {
		$(this).addClass('clicked').mouseleave(function(event) {
			$(this).removeClass('clicked');
		});
	});
})();