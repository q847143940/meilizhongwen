$(function(){
  $('.addshop').on('click',function(){
    var data =  $.cookie('shop');
    if(data==null){
      data = '[]';
    }
    data = JSON.parse(data);
    var json = {};
    json.shopImg = $('.pic2').attr('src');
    json.shopInfo = $('.shopInfo').text();
    json.price = $('.price').text().slice(1);
    json.num = 1;

    var count = 0;
    for(var i=0;i<data.length;i++){
         if(json.shopInfo == data[i].shopInfo){
           count ++;
           data[i].num += 1;
           $.cookie('shop', JSON.stringify(data), {expires: 7,path:'/'});
           break;
         }
    }
    if(count==0){
        data.push(json);
        $.cookie('shop',JSON.stringify(data), {expires: 7,path:'/'});
    }
  });
});