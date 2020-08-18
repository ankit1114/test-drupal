/************************
MODAL
************************/
jQuery(document).ready(function(){
  jQuery(".about-col").click(function(){ 
   jQuery('.about-modal').fadeIn('fast');
    var img = jQuery(this).find('img').attr('src');
    var title = jQuery(this).find('h6').text();
    var post = jQuery(this).find('span').text();
    var des = jQuery(this).find('div.about-body').html();

    /*set content*/
    jQuery('.about-modal-body').find('h6').text(title);
    jQuery('.about-modal-body').find('span').text(post);
    jQuery('.about-modal-body').find('p').html(des);
    jQuery('.about-modal-body').find('figure').find('img').attr('src', img);
  });
});

jQuery(document).ready(function(){
  jQuery(".close-modal-btn").click(function(){
  	jQuery('.about-modal').fadeOut('fast');
  });
});  


/**************************
STICKY MENU
**************************/
jQuery(document).ready(function(){
	var hm = jQuery('header').height() + 26;
	jQuery('body').css('padding-top', hm);
});  


jQuery(window).scroll(function($){
	var headerHeight = jQuery('header').height() + 100;
    if (jQuery(window).scrollTop() >= headerHeight) {
       jQuery('header').addClass('sticky');
    }
    else {
       jQuery('header').removeClass('sticky');
    }

    var width = jQuery(window).width();
  	if (width < 768){
  		if (jQuery(window).scrollTop() <= 0) {
	       jQuery('header').removeClass('sticky');
	    }
  	}	
});

/**************************
RESPONSIVE MENU
**************************/

jQuery(window).bind('resize load',function() {
  var width = jQuery(window).width();
  if (width < 768){
	    var html = jQuery('.th-btn').html();
	    var btnLng = jQuery('.mob-th-btn').length;

	    if (btnLng < 1) {
			jQuery('.navigation nav').append('<div class="mob-th-btn">'+html+'</div>');
			jQuery('.th-btn').before('<button class="menu-btn"><span></span></button>');

			jQuery('.menu-btn').click(function(){
				jQuery('.navigation').slideToggle('fast');
			});	
		}
  }
});

/**************************
NEWS MENU
**************************/

jQuery(window).bind('resize load',function() {
  
  var width = jQuery(window).width();
  if (width < 768){
	var btnLng = jQuery('.news-nav button').length;
  	if (btnLng < 1) {
	  	jQuery('.news-nav').find('ul').before('<button>All</button>');
	  	jQuery('.news-nav').click(function(){
	  		jQuery('.news-nav').find('li').toggle();
	  		jQuery(this).toggleClass('open');
	  	});
	  	jQuery('.news-nav li').click(function(){
	  		var navItem = jQuery(this).find('a').text();
	  		jQuery('.news-nav').find('button').text(navItem);
	  	});

  	}
  }
});
/**************************
WHAT WE DO TESTIMONIAL	
**************************/
jQuery(window).bind('resize load',function() {
	var width = jQuery(window).width();
  	if (width > 768){

		jQuery(".testimonial-col").each(function(index){
			var ch = jQuery(this).find('article').outerHeight() + 200;
			jQuery(this).find('figure').height(ch);
		});

	}
});
/**************************
NEWS MENU
**************************/

jQuery(window).bind('resize load',function() {
  
  var width = jQuery(window).width();
  if (width < 768){
	var btnLng = jQuery('.news-nav button').length;
  	if (btnLng < 1) {
	  	jQuery('.news-nav').find('ul').before('<button>All</button>');
	  	jQuery('.news-nav').click(function(){
	  		jQuery('.news-nav').find('li').toggle();
	  		jQuery(this).toggleClass('open');
	  	});
	  	jQuery('.news-nav li').click(function(){
	  		var navItem = jQuery(this).find('li').text();
	  		jQuery('.news-nav').find('button').text(navItem);
	  		jQuery('.news-nav').removeClass('open');

	  	});

  	}
  }
});
/**************************
NEWS
**************************/
jQuery(document).ready(function(){
	jQuery('.news-nav li').click(function(){
		
		var hh = jQuery('header').height() + 26;
		jQuery('html, body').animate({
	        scrollTop: jQuery(".news-nav").offset().top - hh
	    }, 500);

		var cId = jQuery(this).find('a').attr('data-id');	
		var itemId = cId.substring(1, cId.length);
		
		jQuery('.news-row .news-col').each(function(index){
			if (jQuery(this).attr('id') == itemId) {
				jQuery(this).show();
			}else if(itemId == 'all'){
				jQuery(this).show();
			}else{
				jQuery(this).hide();
			}
		});

	});
});	
