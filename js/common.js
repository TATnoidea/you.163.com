/**
 * Created by Czc on 2017/10/14.
 */
// 客户服务下拉菜单
$(function(){
    $("#client-service").mouseenter(function(){
        $(".client-service").show()
            .siblings().find("i").html("&#xe60d;");
    })
    $("#client-service").mouseleave(function(){
        $(".client-service").hide()
            .siblings().find("i").html("&#xe60c;");
    })
})

// 下载APP
$(function(){
    $("#download").mouseenter(function(){
        $(".code").show();
    })
    $("#download").mouseleave(function(){
        $(".code").hide();
    })
})

//搜索框
$(function(){
    $(".search-inp>input").click(function(e){
        $("#search-think").stop().slideDown(300);
        e.stopPropagation();
    })
    $(".search-inp").mouseleave(function(e){
        $("#search-think").stop().slideUp(300);
        e.stopPropagation()
    })
})

//nav下拉菜单
$(function() {
        $(".nav-h>li").mouseover(function(){
            if($(this).find(".drop-down").length) {
                $(this).children("a").addClass("current");
                $(this).children(".drop-down").stop().fadeIn(100);
            }
        })
        $(".nav-h>li").mouseout(function(){
            if($(this).children(".drop-down").length) {
                $(this).children("a").removeClass("current");
                $(this).children(".drop-down").stop().fadeOut(100);
            }
        })
    }
)
//固定顶部 返回显示与隐藏
$(function(){
    var topH = $("header").outerHeight();
    // console.log(topH);
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();
        // console.log(scrollT);
        //顶部固定
        if(scrollT >= topH) {
            $("#nav-bar").fadeIn(200);
        } else {
            $("#nav-bar").hide();
        }
        //返回的显示与隐藏
        if(scrollT >= 800) {
            $("#backTop").show();
        } else {
            $("#backTop").hide();
        }
    })
})

//返回
$(function() {
    $("#backTop").click(function(){
        $('html , body').animate({
            scrollTop:0 //直接滚动到0
        },1000);
    })
})
//底部二维码
$(function() {
    $(".follow").mouseenter(function(){
        $(this).children(".qr").show();
    })
    $(".follow").mouseleave(function(){
        $(this).children(".qr").hide();
    })
})

//固定栏位变色
$(function(){
    $(".help-m").mouseover(function(){
        $(this).find("i, p").css("color", "#B49F78")
    })
    $(".help-m").mouseout(function(){
        $(this).find("i, p").css("color", "#666")
    })
})

//放大镜



