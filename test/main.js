KISSY.use(["gallery/slide/1.2/", "dom"], function($, c, d) {
    new c("slide", {
        eventype: "click",
        effect: "hSlide",
        autoSlide: !0,
        timeout: 3000,
        speed: 500,
        hoverStop: !0,
        touchmove: !0,
        adaptive_fixed_width: !0,
        carousel: !0
    });
    $.all(".menu").on('click', function () {    
        var secList = $.one(this).children('.secList');
         secList.css('display') === 'none' ?
            secList.removeClass('hide')
            .parent()
            .addClass('click')
                .siblings().removeClass('click') :
            $.one(this).removeClass('click');
        return false;
    });
})