;(function ($){
	/*init b-popup*/
	$('._js-btn-open-modal').on('click', function(){
	 $('#modal-order').bPopup({
	 	closeClass:'modal-close'
	 });
	});
	/*init styler*/
	 $('select').styler();
})(jQuery);