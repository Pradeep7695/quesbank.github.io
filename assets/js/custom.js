jQuery(document).ready(function($){"use strict";$('a[data-rel]').each(function(){$(this).attr('rel',$(this).data('rel'));});if($('#cp_side-menu-btn, #cp-close-btn').length){$('#cp_side-menu-btn, #cp-close-btn').on('click',function(e){var $navigacia=$('body, #cp_side-menu'),val=$navigacia.css('left')==='410px'?'0px':'410px';$navigacia.animate({left:val},410)});}
if($('#content-1').length){$("#content-1").mCustomScrollbar({horizontalScroll:false});$(".content.inner").mCustomScrollbar({scrollButtons:{enable:true}});}
if($('.gallery').length){$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000,autoplay_slideshow:true});$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000,hideflash:true});}
if($('.element').length){$(".element").kenburnsy({fullscreen:true});}
if($('#testimonials-slider').length){$("#testimonials-slider").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true});}
if($('#popular-job-slider').length){var owl=$("#popular-job-slider");owl.owlCarousel({itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,3],[1200,4],[1400,4],[1600,4]],navigation:true});}
if($('#popular-companies-slider').length){var owl=$("#popular-companies-slider");owl.owlCarousel({itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,3],[1200,4],[1400,4],[1600,4]],navigation:true});}
if($('.header-2').length){var stickyNavTop=$('.header-2').offset().top;var stickyNav=function(){var scrollTop=$(window).scrollTop();if(scrollTop>stickyNavTop){$('.header-2').addClass('cp_sticky');}else{$('.header-2').removeClass('cp_sticky');}};stickyNav();$(window).scroll(function(){stickyNav();});}
if($('.counter').length){$('.counter').counterUp({delay:10,time:1000});}
if($('#blog-slider-post').length){$("#blog-slider-post").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true});}
if($('#testimonials-style-3').length){$("#testimonials-style-3").owlCarousel({autoPlay:3000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]});}
if($('#map_contact_4').length){var map;var myLatLng=new google.maps.LatLng(48.85661,2.35222);var myOptions={zoom:12,center:myLatLng,zoomControl:true,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,styles:[{stylers:[{hue:'#abe3b6'},{saturation:-30},{lightness:10}]}],}
map=new google.maps.Map(document.getElementById('map_contact_4'),myOptions);var marker=new google.maps.Marker({position:map.getCenter(),map:map,icon:'images/map-icon.png'});marker.getPosition();}
if($('#blog-masonrywrap').length){jQuery(function($){function attWookGrid(){var options={itemWidth:260,autoResize:true,container:$('#blog-masonrywrap'),offset:30,flexibleWidth:260};var handler=$('#blog-masonrywrap li');handler.wookmark(options);}
$(window).load(function(){attWookGrid();});});}
if($('.txtEditor').length){$(".txtEditor").Editor();}
$.fn.slideFadeToggle=function(speed,easing,callback){return this.animate({opacity:'toggle',height:'toggle'},speed,easing,callback);};if($('.accordion_cp').length){$('.accordion_cp').accordion({defaultOpen:'section1',cookieName:'nav',speed:'slow',animateOpen:function(elem,opts){elem.next().stop(true,true).slideFadeToggle(opts.speed);},animateClose:function(elem,opts){elem.next().stop(true,true).slideFadeToggle(opts.speed);}});}});
if(jQuery('#myList li').length)
{
	$(document).ready(function(){
	/*size_li=$("#myList li").size();
	x=10;//8;
	$('#myList li:lt('+x+')').show();
	$('#loadMore').click(function(){
		x=(x+ 5<=size_li)?x+ 5:size_li;
		$('#myList li:lt('+x+')').addClass('animated fadeInDown').slideDown('slow');
		//$('#loadMore').animate({ scrollTop: $('#loadMore')[0].scrollHeight }, 1000);
		if(x==size_li){
			$(this).hide();
			//$('.feedback-form.feedback-form-user').show();
		}
		
		return false;
	});*/
		
	});
}


jQuery(function(){
	tp_clock();
	jQuery('.upload-box .hold a').click(function(){
		var file=jQuery(this).parent().find('input[type="file"]');
		file.trigger('click');   
		console.log(file);
		return false;
	});
});
var tp_clock = function(){
    
    function tp_clock_time(){
        var now     = new Date();
        var hour    = now.getHours();
        var minutes = now.getMinutes();                    
        var ampm = hour >= 12 ? 'pm' : 'am';
        hours = hour % 12;
        //hour = hour < 10 ? '0'+hour : hour;
        hour= hour < 10 ? '0':''+hour;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        
        jQuery(".plugin-clock").html(hour+"<span class=\"clock-seperator\">:</span>"+minutes+' '+ampm);
    }
    if(jQuery(".plugin-clock").length > 0){
        
        tp_clock_time();
        
        window.setInterval(function(){
            tp_clock_time();                    
        },10000);
        
    }
}