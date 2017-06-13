/**
 * Created by Administrator on 2017/3/21.
 */

Alipay.controller("PengYouController", function ($scope) {
    var key = true;
    $("#jia").click(function () {
        if (key == true) {
            $(".jiaHao").css("display", "block");
            key = false;
        }
        else {
            $(".jiaHao").css("display", "none");
            key = true;
        }
    })
})
