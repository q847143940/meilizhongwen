var carousel ={
    dom:{},
    index: 0,
    timer:null,
    flag: false,
    init: function(){
        this.initDom();
        this.bindEvent();
        this.timer = setInterval(function(){
            if(!carousel.flag){
              carousel.changePic();
            }
        },3000)
    },
    initDom: function(){
        var dom = this.dom;
        dom.banner = $('.banner');
        dom.oLi = $('.banner .piclist li');
        dom.btn = $('.banner .subshow li');
        dom.prev = $('.banner .preBtn');
        dom.next = $('.banner .nextBtn');
    },
    bindEvent: function(){
        var dom = this.dom;
        dom.btn.click(function(){
            carousel.flag = true;
            var index = $(this).index();
            carousel.index = index;
            dom.oLi.hide();
            dom.oLi.eq(index).show();
            dom.btn.removeClass('active');
            dom.btn.eq(index).addClass('active');
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })
        dom.banner.mouseover(function() {
            dom.prev.show();
            dom.next.show();
        });
        dom.banner.mouseout(function(){
            dom.prev.hide();
            dom.next.hide();
        })
        dom.prev.click(function(){
            carousel.flag = true;
            if(carousel.index == 0){
                carousel.index = dom.oLi.length - 2;
            }else{
               carousel.index -= 2;
            }
            carousel.changePic();
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })
        dom.next.click(function(){
            carousel.flag = true;
            carousel.changePic();
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })

    },
    changePic: function(){
        var dom = this.dom;
        this.index++;
        if(this.index >= dom.oLi.length){
            this.index = 0;
        }
        dom.oLi.slideUp();
        dom.btn.removeClass('active');
        dom.oLi.eq(this.index).slideDown();
        dom.btn.eq(this.index).addClass('active');
    }
}
$(function(){
    carousel.init();
})
