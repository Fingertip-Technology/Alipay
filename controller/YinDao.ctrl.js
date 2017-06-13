/**
 * Created by Administrator on 2017/3/22.
 */

Alipay.controller("YinDaoController",function ($scope) {

    ;(function ($) {
        var width=$(window).width(),
            index=0,
            ul=$("#ul"),
            len=$("#ul>li").length,
            span=$("#p>span");
        //swipeLeft  左切
        $("#content").swipeLeft(function () {
            index++;
            if(index>len-1){
                index=len-1
            }
            var s=index*width+"px";
            ul.css({"-webkit-transform":"translateX(-"+s+")","-webkit-transition":"1s"});
            span.eq(index).addClass("on").siblings().removeClass("on");
            // swipeRight 右切
        }).swipeRight(function () {
            // alert(index)
            if(index>0){
                index--
            }
            if (index < 0) {
                index = 0
            }
            var s2 = index * width + "px"
            ul.css({"-webkit-transform": "translateX(-" + s2 + ")", "-webkit-transition": "1s"})
            span.eq(index).addClass("on").siblings().removeClass("on");
        }).tap(function () {
            if(index==len-1){

                // 从当前 html 开始找 ，而不是 js 文件
                location.href="index.html"
            }
        })
        $("#p>span").click(function () {
            index = $(this).index();
            var s=index*width+"px";
            ul.css({"-webkit-transform":"translateX(-"+s+")","-webkit-transition":"1s"});
            span.eq(index).addClass("on").siblings().removeClass("on");
        })

    })(Zepto)

})
