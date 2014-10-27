KISSY.use("gallery/slide/1.2/", function($, c) {
    new c("slide", {
        eventype: "click",
        effect: "hSlide",
        autoSlide: !0,
        timeout: 3000,
        speed: 500,
        hoverStop: !0,
        touchmove: !0,
        adaptive_fixed_width: !0,
        adaptive_fixed_height: !0,
        carousel: !0,

    });

    $.one(".menu").on('singleTap', function () {
        var secList = $.one(".secList");
        if(secList.css('display') === 'none') {
            $.one(".secList").show();
        } else {
            $.one(".secList").hide();
        }
        return false;
    });
})