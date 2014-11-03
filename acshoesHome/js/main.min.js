(function () {
    var webUrl = "http://m.acshoes.org";
    var searchTag = "0"; //0搜产品，1搜公司，2搜品牌，3采购
/*    $(function () {
    
        $("#SearchItems li").click(function () {
            $("#SearchItems li").removeClass("Search_on");
            $(this).addClass("Search_on");
            searchTag = $(this).attr("tag");
        });

        var kw = '';
        if (kw != "") {
            $("#txtkey").val(decodeURI(kw));
        }
    });*/

    function clickSearch() {
        var key = $.trim($("#txtkey").val());
        if (key == '') {
            alert("请输入要搜索的关键词");
            return false;
        }
    }
    /*
　　* 定义ForceWindow类构造函数
　　* 无参数
　　* 无返回值
　　*/
    function ForceWindow() {
        this.r = document.documentElement;
        this.f = document.createElement("FORM");
        this.f.target = "_blank";
        this.f.method = "post";
        this.r.insertBefore(this.f, this.r.childNodes[0]);
    }

    /*
　　* 定义ForceWindow 类的open方法
　　* 参数sUrl：字符串，要打开窗口的URL
　　* 无返回值
　　*/
    ForceWindow.prototype.open = function (sUrl) {
        this.f.action = sUrl;
        this.f.submit();
    }

    function openwindow(targetUrl) {
        var myWindow = new ForceWindow();
        myWindow.open(targetUrl);
    }

    //分析url，获取url的各个参数信息 示例url： http://abc.com:8080/dir/index.html?id=255&m=hello#top
    function parseURL(url) {
        var a = document.createElement("a");
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(":", ""), // = "http" 
            host: a.hostname, // = "abc.com"
            port: a.port, // = "8080" 
            query: a.search, // = "?id=255&m=hello"
            params: (function () {
                var ret = {},
                seg = a.search.replace(/^\?/, "").split("&"),
                len = seg.length, i = 0, s;
                for (; i < len; i++) {
                    if (!seg[i]) { continue; }
                    s = seg[i].split("=");
                    ret[s[0]] = s[1];
                }
                return ret;

            })(),  //  = Object = { id: 255, m: hello }  取值时：myUrl.params.id
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1], // = "index.html" 
            hash: a.hash.replace("#", ""), // = "top" 
            path: a.pathname.replace(/^([^\/])/, "/$1"), // = "/dir/index.html"  
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
            segments: a.pathname.replace(/^\//, "").split("/") //= Array = ["dir", "index.html"]
        };
    }   
})();
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
        carousel: !0,
        adaptive_width: function(){
            return document.body.offsetWidth;
        }
    });
    new c("ven-list-slide", {
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
         console.log($.one(this))
    });
    $.one('.masklayer_div').on('click', function () {
        $.one(this).hide();
        $.one('li.ven-click').removeClass('ven-click');
    });
    $.one('#mcover').on('click', function () {
        $.one(this).hide();
    });
    $.one('#wxsharecontent1').on('click', function () {
        $.one('#mcover').show();
    });
    KISSY.ready(function() {
        KISSY.each($.all(".tab-pannel img"), function(obj) {
            $.one(obj).attr("src") != $.one(obj).attr("lazy-src") && $.one(obj).attr("src", $.one(obj).attr("lazy-src"));
        })
    })
})