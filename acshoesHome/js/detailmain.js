KISSY.use(["gallery/slide/1.2/", "dom"], function($, c, d) {
    new c("ven-detaillist-slide", {
        eventype: "click",
        effect: "hSlide",
        autoSlide: 0,
        timeout: 3000,
        speed: 500,
        hoverStop: !0,
        touchmove: !0,
        adaptive_fixed_width: !0,
        carousel: !0,
        adaptive_width: function(){
            return document.body.offsetWidth;
        }
    });
    $.all("li.ven-menu").on('click', function () { 
        var secList = $.one(this).children('dl');
        var modal = $.one('.masklayer_div');
        if (secList.css('display') === 'none') {
            secList.show()
            .parent()
            .addClass('ven-click')
                .siblings().removeClass('ven-click');
            modal.show();
         } else {
            $.one(this).removeClass('ven-click');
            modal.hide();
         }
    });
    $.one('.masklayer_div').on('click', function () {
        $.one(this).hide();
        $.one('li.ven-click').removeClass('ven-click');
    });
    //微信浏览器检测
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) === 'micromessenger';
    }
    if (isWeiXin()) {
        $.one('#wxsharecontent1').show();
    }
    $.one('#mcover').on('click', function () {
        $.one(this).hide();
    });
    $.one('#wxsharecontent1').on('click', function () {
        $.one('#mcover').show();
    });

    KISSY.ready(function() {
        KISSY.each($.all(".tab-pannel img"), function(obj) {
            $.one(obj).attr("src") != $.one(obj).attr("lazy-src") && $.one(obj).attr("src", $.one(obj).attr("lazy-src"));
        });
    });
})