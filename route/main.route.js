/**
 * Created by Administrator on 2017/3/17.1
 */
Alipay.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/ShouYe", {
            templateUrl: "home/ShouYe.html",
            controller: "ShouYeController"
        })
        .when("/KouBei", {
            templateUrl: "home/KouBei.html",
            controller: "KouBeiController"
        })
        .when("/PengYou", {
            templateUrl: "home/PengYou.html",
            controller: "PengYouController"
        })
        .when("/WoDe", {
            templateUrl: "home/WoDe.html",
            controller: "WoDeController"
        })
        .when("/KaBao", {
            templateUrl: "home/KaBao.html",
            controller: "KaBaoController"
        })
        .when("/KaJuan", {
            templateUrl: "home/KaJuan.html",
            controller: "KaJuanController"
        })
        .when("/ZhuanZhang", {
            templateUrl: "home/ZhuanZhang.html",
            controller: "ZhuanZhangController"
        })
        .when("/HuanKuan", {
            templateUrl: "home/HuanKuan.html",
            controller: "HuanKuanController"
        })
        .when("/ChongZhi", {
            templateUrl: "home/ChongZhi.html",
            controller: "ChongZhiController"
        })
        .when("/YuE", {
            templateUrl: "home/YuE.html",
            controller: "YuEController"
        })
        .when("/QuanBu", {
            templateUrl: "home/QuanBu.html",
            controller: "QuanBuController"
        })
        .when("/YinDao", {
            templateUrl: "home/YinDao.html",
            controller: "YinDaoController"
        })
        .when("/DengLu", {
            templateUrl: "home/DengLu.html",
            controller: "DengLuController"
        })
        .when("/ZhuCe", {
            templateUrl: "home/ZhuCe.html",
            controller: "ZhuCeController"
        })
        .otherwise({ redirectTo: "/ShouYe" })
}])