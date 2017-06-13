/**
 * Created by Administrator on 2017/3/20.
 */

Alipay.controller("KouBeiController", function ($scope,$http) {

    $http.get("data/data2.json")
        .success(function (response) {
            $scope.ul1=response.ulone.ul1;
            $scope.ul2=response.ulone.ul2;
            $scope.ul3=response.ultwo.ul1;
            $scope.ul4=response.ultwo.ul2;
        })
    
    ;(function ($) {

        // var content=new IScroll("#content")

        // content.refresh();

        img = $(".LunBo_one>ul>li")
        boxw = $(".LunBo_one").height()
        // alert(boxw)
        var len = img.length

        var next = 0
        var index = 0

        var t = setInterval(move, 3000)

        img.css({"top": boxw}).eq(0).css({"top": 0})

        function move() {
            next++
            if (next == len) {
                next = 0
            }
            img.eq(next).css({"top": boxw})
            img.eq(index).animate({"top": -boxw})
            img.eq(next).animate({"top": 0})

            index = next
        }


        // 2
        img2 = $(".LunBo_two>.box_one>ul>li")
        boxw2 = $(".LunBo_two>.box_one>ul").height()
        // alert(boxw2)
        var len2 = img2.length

        var next2 = 0
        var index2 = 0

        var t2 = setInterval(move2, 2000)

        img2.css({"top": boxw2}).eq(0).css({"top": 0})

        function move2() {
            next2++
            if (next2 == len2) {
                next2 = 0
            }
            img2.eq(next2).css({"top": boxw2})
            img2.eq(index2).animate({"top": -boxw2})
            img2.eq(next2).animate({"top": 0})

            index2 = next2
        }


        // 3
        img3 = $(".LunBo_two>.box_two>ul>li")
        boxw3 = $(".LunBo_two>.box_two>ul").height()
        // alert(boxw3)
        var len3 = img3.length

        var next3 = 0
        var index3 = 0

        var t3 = setInterval(move3, 1000)

        img3.css({"top": boxw3}).eq(0).css({"top": 0})

        function move3() {
            next3++
            if (next3 == len3) {
                next3 = 0
            }
            img3.eq(next3).css({"top": boxw3})
            img3.eq(index3).animate({"top": -boxw3})
            img3.eq(next3).animate({"top": 0})

            index3 = next3
        }


        //  4
        img4 = $(".content_box>.box_two>dl>dd>a")
        boxw4 = $(".content_box>.box_two>dl>dd").height()
        // alert(boxw4)
        var len4 = img4.length
        var next4 = 0
        var index4 = 0
        var t4 = setInterval(move4, 1500)
        img4.css({"top": boxw4}).eq(0).css({"top": 0})
        function move4() {
            next4++
            if (next4 == len4) {
                next4 = 0
            }
            img4.eq(next4).css({"top": boxw4})
            img4.eq(index4).animate({"top": -boxw4})
            img4.eq(next4).animate({"top": 0})
            index4 = next4
        }

        var key = true;
        $(".DianJi").click(function () {
            if (key == true) {
                $(this).attr("src", "img/KouBei/righta.png");
                $(".dianD").css("display", "block");
                key = false;
            }
            else {
                $(this).attr("src", "img/KouBei/right.png");
                $(".dianD").css("display", "none");
                key = true;
            }
        })

        
        $("#ul").swipeLeft(function () {
            // alert(1);
            $(".ul_box_one").css({"left": "-100%", "transition": ".5s"})
            $(".ul_box_two").css({"left": "2.5%", "transition": ".5s"})
            $("#yuan>li:eq(1)").css("background", "#FB6165").siblings().css("background", "#CCCCCC")
        }).swipeRight(function () {
            // alert(2);
            $(".ul_box_one").css({"left": "2.5%", "transition": ".5s"})
            $(".ul_box_two").css({"left": "100%", "transition": ".5s"})
            $("#yuan>li:eq(0)").css("background", "#FB6165").siblings().css("background", "#CCCCCC")
        })

        $("#yuan>li").click(function () {
            var index = $(this).index();
            if (index == 1) {
                $(".ul_box_one").css({"left": "-100%", "transition": ".5s"})
                $(".ul_box_two").css({"left": "2.5%", "transition": ".5s"})
                $(this).css("background", "#FB6165").siblings().css("background", "#CCCCCC")
            }
            else {
                $(".ul_box_one").css({"left": "2.5%", "transition": ".5s"})
                $(".ul_box_two").css({"left": "100%", "transition": ".5s"})
                $(this).css("background", "#FB6165").siblings().css("background", "#CCCCCC")
            }
        })


        var img5 = $(".box_six>#lb>li")
        var boxw5 = $(".box_six").width()
        // alert(boxw5)
        var len5 = img5.length

        var li = $(".box_six>.xiaoDian>li");

        var next5 = 0
        var index5 = 0

        var t5 = setInterval(move5, 3000)

        img5.css({"left": boxw5}).eq(0).css({"left": 0})

        li.css({"background": "white"}).eq(0).css({"background": "orange"})

        function move5() {
            next5++
            if (next5 == len5) {
                next5 = 0
            }
            img5.eq(next5).css({"left": boxw5})
            img5.eq(index5).animate({"left": -boxw5})
            img5.eq(next5).animate({"left": 0})

            li.eq(next5).css({"background": "orange"}).siblings().css({"background": "white"})

            index5 = next5
        }
        

        $("#lb").swipeLeft(function () {
            // alert(1);
            next5++
            if (next5 == len5) {
                next5 = 0
            }
            img5.eq(next5).css({"left": boxw5})
            img5.eq(index5).animate({"left": -boxw5})
            img5.eq(next5).animate({"left": 0})

            li.eq(next5).css({"background": "orange"}).siblings().css({"background": "white"})

            index5 = next5

        }).swipeRight(function () {
            // alert(2);
            next5--
            if (next5 == 0) {
                next5 = 0
            }
            img5.eq(next5).css({"left": -boxw5})
            img5.eq(index5).animate({"left": boxw5})
            img5.eq(next5).animate({"left": 0})

            li.eq(next5).css({"background": "orange"}).siblings().css({"background": "white"})

            index5 = next5

        })

    })(Zepto)

})
