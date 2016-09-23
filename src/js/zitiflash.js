$(function(){
	
	//脸部保养
    $('.t2').on('mouseenter','li',function(){
    	$(this).addClass('animated wobble');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('wobble');
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
    	$(this).addClass('animated pulse');
 }).on('mouseleave',function(){
  	$(this).removeClass('pulse');
  })
 
 //观看全部
  $('.p2').on('mouseenter',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave',function(){
  	$(this).removeClass('rubberBand');
  })

//商品列表货品分类浏览
//$('.leftlist_1').on('mouseenter','li',function(){
//  	$(this).addClass('animated rubberBand');
// }).on('mouseleave',function(){
//	$(this).removeClass('rubberBand');
//})

//海蓝之谜
 $('.bestuser').on('mouseenter',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave',function(){
  	$(this).removeClass('rubberBand');
  })
  //首页大div列表
 $('.d1').on('mousedown',function(){
    	$(this).addClass('animated flipInX');
 }).on('mouseleave',function(){
  	$(this).removeClass('flipInX');
  })
  //列表页大div列表
// $('.div1').on('mousedown',function(){
//  	$(this).addClass('animated flipInX');
// }).on('mouseleave',function(){
//	$(this).removeClass('flipInX');
//})
 //优惠红色框
 $('.cheaper').on('mousedown',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave',function(){
  	$(this).removeClass('rubberBand');
  })
 
 
   //商品详情页左侧列表
 $('.u_li').on('mouseover','li',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('rubberBand');
  })
 $('.u6').on('mouseover','li',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('rubberBand');
  })
  $('.u8').on('mouseover','li',function(){
    	$(this).addClass('animated rubberBand');
 }).on('mouseleave','li',function(){
  	$(this).removeClass('rubberBand');
  })
});//function结束