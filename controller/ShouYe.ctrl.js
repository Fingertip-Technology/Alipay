/**
 * Created by Administrator on 2017/3/17.
 */
Alipay.controller("ShouYeController",function ($scope) {
    
    ;(function ($) {

        var key=true;
        $("#jia").click(function () {
            if(key==true){
                $(".jiaHao").css("display","block");
                key=false;
            }
            else{
                $(".jiaHao").css("display","none");
                key=true;
            }
        })
        var key2=true;
        $(".dian").click(function () {
            if(key2==true){
                $(this).parents("dl").next(".dianDian").css("display","block");
                key2=false;
            }
            else{
                $(this).parents("dl").next(".dianDian").css("display","none");
                key2=true;
            }
        })
        var key3=true;
        $(".xiangJiDianJi").click(function () {
            if(key3==true){
                $(".xiangJiD").css("display","block");
                key3=false;
            }
            else{
                $(".xiangJiD").css("display","none");
                key3=true;
            }
        })


    })(Zepto)
})