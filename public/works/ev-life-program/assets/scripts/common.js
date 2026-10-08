const breakpoint = 980;


/*
* ページ内リンク
*/
// $(function () {

// 	return $('a[href*="#"]').on('click', function(e) {
// 		var $elem, fullPath, hash, href, position, target ,headerHeight;
// 		$elem = $(e.currentTarget);
// 		href = $elem.attr('href');
// 		fullPath = href.slice(0, href.indexOf('#'));
// 		hash = href.slice(href.indexOf('#'));
// 		if (location.origin + location.pathname === fullPath || fullPath === '') {
// 			e.preventDefault();
// 			target = $(hash === '#' ? 'html' : hash);

// 			if ($(window).width() >= breakpoint) {
// 				headerHeight = 110 + 20;
// 			} else {
// 				headerHeight = 44 + 10;
// 			}

// 			position = target.offset().top;
// 			position = position === 0 ? 0 : position - headerHeight;

// 			return $('html, body').stop().animate({
// 				scrollTop: position
// 			}, {
// 				duration: 400
// 			});

// 		}
// 	});
// });


/*
バーガーメニュー
*/
$(function () {

	var $body = $('body');
	var scrollTop;
	var $menu  = $('.js-burgerMenu');
	var $navigation  = $('.js-navigation');
	//
	$menu.on('click', function(){

	  $('#navigation').scrollTop(0);

		if($menu.hasClass('-open')){
	    // open -> close
			$menu.removeClass('-open');
			$navigation.removeClass('-open');
			$body.removeClass('-open');
	    // bg start
	    $body.css({
	      position: 'static',
	      top: ''
	    });
	    $(window).scrollTop(scrollTop);

		}else{
	    // close -> open
			$menu.addClass('-open');
			$navigation.addClass('-open');
			$body.addClass('-open');
	    // bg stop
	    scrollTop = $(window).scrollTop();
	    $body.css({
	      position: 'fixed',
	      top: -scrollTop
	    });

		}
	});


	// SPハンバーガーメニュー内のアコーディオン
	$('.EVC_Header__navigation__item dt').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().stop().slideToggle();
	});

	// SP時の固定バナー
	$pictureArea_top = $('.pictureArea').offset().top;
	$(window).scroll(function(){
		// if ($(this).scrollTop() > 200) {
			// $('.spFixed').addClass('active');
			// footer付近でバナーを非表示にする。
			if ($(this).scrollTop() > $pictureArea_top) {
				$('.spFixed').removeClass('active');
			} else {
				$('.spFixed').addClass('active');
			}
		// } else {
		// 	$('.spFixed').removeClass('active');
		// }
	});

});





/*
FAQ
*/
$(function() {

	if($('.js-faq').length){
		$('.js-question').on('click', function(){
			if($(this).hasClass('-open')){
				// open -> close
				$(this).removeClass('-open')
				.next().stop().slideUp(200);
			}else{
				// close -> open
				$(this).addClass('-open')
				.next().stop().slideDown(200);
			}
		})
	}

});

/*
スクロールに応じた処理
*/
$(function() {

	// var scrollTop;
	// var $body = $('body');
	// var $header = $('.Header');
	//
	// $(window).on('scroll', function(e) {
	// 	scrollTop = $(window).scrollTop();
	// 	// console.log(scrollTop);
	//
	// 	if($(window).height() / 2 < scrollTop ){
	// 		$body.addClass('-scrolled');
	// 		$header.addClass('-scrolled');
	// 	}else{
	// 		$body.removeClass('-scrolled');
	// 		$header.removeClass('-scrolled');
	// 	}
	// });

});


/*
ios で、ダブルタップで拡大を禁止
*/
$(function() {
	document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });
});






/*
InView
*/
$(function () {
	// if($('.js-inview').length){
	// 	$('.js-inview').on('inview', function (event, isInView) {
	// 		if (isInView) {
	// 			$(this).stop().addClass('-show');
	// 		}else{
	// 			$(this).stop().removeClass('-show');
	// 		}
	// 	});
	// }
});
