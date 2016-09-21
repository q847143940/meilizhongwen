$(function(){
	
	//脸部保养
    $('.t2').on('mouseenter','li',function(){
    	$(this).addClass('animated shake');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('shake');
  })
//登录注册
    $('.rtop').on('mouseenter','li',function(){
    	$(this).addClass('animated swing');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('swing');
  })
 //买满五十美金
 $('.pic1').on('mouseenter',function(){
    	$(this).addClass('animated tada');
 }).on('mouseleave',function(){
  	$(this).removeClass('tada');
  })
 /*商品图片*/
 $('.list1').on('mouseenter',function(){
    	$(this).addClass('animated flip');
 }).on('mouseleave',function(){
  	$(this).removeClass('flip');
  })
 
 //观看全部
  $('.p2').on('mouseenter',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave',function(){
  	$(this).removeClass('rubberBand');
  })


});