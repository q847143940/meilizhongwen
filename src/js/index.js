$(function(){
	//国籍选择
	$('.l1').on('mouseenter',function(){
		$('.l2').css({width:100,height:180}).slideDown()
	})
	$('.l1').on('mouseleave',function(){
				setTimeout(function(){
				$('.l2').css({width:0,height:0}).slideUp()
		},2000)
	})
	//中英文选择
	$('.li1').on('mouseenter',function(){
		$('.l3').css({width:100,height:80}).slideDown()
	})
	$('.li1').on('mouseleave',function(){
				setTimeout(function(){
				$('.l3').css({width:0,height:0}).slideUp()
		},2000)
	})
	
	
//回到顶部
$('#turntop').on('click',function(){
		$('html,body').animate({scrollTop:0});
})


//主页显示登录的名字

var user=JSON.parse($.cookie('user'))//数组，对象
var user1 = $.cookie('user');
if(user1==null)
{
	user1=[]//字符串
}
else
{
	$('.come').html(user[0].username)
}
	


//console.log(user[0].username)
//console.log($.cookie('user[0].username')
//console.log($.cookie('user.username'))
//console.log($.cookie('user'))
})//function的结尾