$(function(){
	getshop();

	$('.del').on('click',function(){
		var tr = $(this).parents('tr');
		var shopInfo = tr.find('td').eq(1).html();
		console.log(shopInfo);
		var shop = JSON.parse($.cookie('shop'));
		for(var i =0;i<shop.length;i++){
			if(shopInfo==shop[i].shopInfo){
				shop.splice(i,1);
				break;
			}
		}
		console.log(shop.length);
		if(shop.length==0){
			$.cookie('shop', JSON.stringify(shop), {expires: -1,path:'/'});
		}else{
			$.cookie('shop', JSON.stringify(shop), {expires: 7,path:'/'});
		}
		getshop();
	});
});


function getshop(){
	$('.textleft').find('tbody').html('');
	var shop = $.cookie('shop');
	if(shop!=null){
		shop = JSON.parse(shop);
		var total = 0;
		for(var i =0;i<shop.length;i++){
			total += parseInt(shop[i].num)*parseInt(shop[i].price);
			var tr = $('.textleft').find('.bgcolor2').clone(true);
			tr.show();
			tr.find('td').eq(0).find('img').attr('src',shop[i].shopImg);
			tr.find('td').eq(1).html(shop[i].shopInfo);
			tr.find('td').eq(2).find('b').html(shop[i].price);
			tr.find('td').eq(3).html(shop[i].num);
			tr.find('td').eq(4).html(parseInt(shop[i].num)*parseInt(shop[i].price));
			$('.textleft').find('tbody').append(tr);
		}
		var trFoot = $('.bgcolor3').clone(true);
		trFoot.find('.total').html(total);
		trFoot.show();
		$('.textleft').find('tbody').append(trFoot);
	}
};