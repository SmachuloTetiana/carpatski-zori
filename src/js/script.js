
(function($) {

new WOW().init();

//*** Background-icon ***//

function wpc_add_img_bg( img_sel, parent_sel){
	if (!img_sel) {
	  console.info('no img selector');
	  return false;
	}
	var $parent, _this;
	$(img_sel).each(function(){
	  _this = $(this);
	  $parent = _this.closest( parent_sel );
	  $parent = $parent.length ? $parent : _this.parent();
	  $parent.css( 'background-image' , 'url(' + this.src + ')' );
	  _this.hide()
	});
}

$(window).on('load', function(){
	wpc_add_img_bg('.bg-image');
});


$(".vertical-center").slick({
	dots: true,
	autoplay: false,
	horizontal: true,
	centerMode: true,
	arrows: false
});

//*** Tabs ***//


$('.tabs-header').on('click', 'li:not(.active)', function() {
	
	var index_el = $(this).index();

	$(this).addClass('active').siblings().removeClass('active');
	$(this).closest('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
	return false;
	
});

//*** Mobile Menu ***//

$(".mobile-button").on('click', function(){

	$(this).parents().find(".header-menu").toggle();

})

//*** Date ***//

 var picker = new Pikaday({
	field: document.getElementById('datepicker-from')
});

 var picker2Pikaday = new Pikaday({
	field: document.getElementById('datepicker-to')
});


})(window.jQuery);