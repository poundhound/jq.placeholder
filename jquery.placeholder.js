/*
 * jquery.placeholder.js
 * 
 * Editor Poundhound
 *
 * ご自由にご利用ください。利用方法は当ブログをご覧ください。
 * 
 * http://www.nk0206.com/life/
 * 
 * permalink
 * http://www.nk0206.com/life/2012/03/placeholder.html
 *
 */

(function($) {
	$.fn.placeholder = function(options) {
		var o = $.extend({
			placeholderSelector: 'form',
			placeholderClassName: 'placeholder',
			className: 'focused'
		}, options);
			
		$(o.placeholderSelector).each(function() {
			$(this).find('[placeholder]').each(function() {
				
				$(this).attr('placeholder');
				if($(this).val() == '') {
					$(this).val($(this).attr('placeholder')).addClass(o.placeholderClassName);
				}
				
				$(this).focus(function() {
					if($(this).val() == $(this).attr('placeholder')) {
						$(this).val('').addClass(o.className);	
					}
				});
					
				$(this).blur(function() {
					if($(this).val() == '') {
						$(this).val($(this).attr('placeholder')).removeClass(o.className);	
					}
				});
			});
		});
		return this;
	}

})(jQuery);
