
$(document).ready(function() {
    
    /* 문서번호조회 */
    $("#btn_cer").click(function(){
        $("#btn_cer").toggleClass("on");
        
        if($("#btn_cer").hasClass("on") == true){
            /* 조회성공 팝업메세지 */
            $(".pop_message").fadeIn();
            $(".pop_message .success").show();
            $(".bg").fadeIn();
            $("div.cer").show();
            $(".back").show();
            $("#btn_cer").hide();
            $("div.doc li:nth-of-type(1) input").css("background","#005bc1");
        } else {
            /* 조회실패 팝업메세지 
            $(".pop_message").fadeIn();
            $(".pop_message .fail").show();
            $(".bg").show();
            */
            $("div.doc li:nth-of-type(1) input").css("background","#fff");
        }
    });
    /* 조회 팝업닫기 */
    $(".close").click(function() {
        $(".pop_message").fadeOut();
        $(".pop_message .success").fadeOut();
        $(".pop_message .fail").fadeOut();
        $(".bg").fadeOut();
    });
    $(".bg").click(function() {
        $(".pop_message").fadeOut();
        $(".pop_message .success").fadeOut();
        $(".pop_message .fail").fadeOut();
        $(".bg").fadeOut();
    });
    
    
    /* 재전송 */
    $(".re").click(function(){
        $(".pop_message_re").fadeIn();
        $(".bg").fadeIn();
    });
    /* 재전송 팝업닫기 */
    $(".close").click(function() {
        $(".pop_message_re").fadeOut();
        $(".bg").fadeOut();
    })
    $(".bg").click(function() {
        $(".pop_message_re").fadeOut();
        $(".bg").fadeOut();
    });
    
    
    /* 탭메뉴 */
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });
    
    /* 모바일 셀렉트박스 */
    $(document).on("change", "select.mobile", function(){
        var idx = $(this).val();
        var $parent = $(this.parentNode);
        toggleTabContent(idx, $parent);
    });
    function toggleTabContent(idx, parent){
        parent.find(".tabs li").removeClass("active").eq(idx).addClass("active");
        parent.find(".tab_content").hide().eq(idx).show();
    }
    
    
    /* 스크롤      
    var scrollTop = $(".back_m");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    }); */
    
    /* 모바일 화면이동 */
    $(".back_m").css("opacity","0");

    var s1 = $("#s1").position();
    var s2 = $("#s2").position();
    var s3 = $("#s3").position();
    
    /* 모바일 뒤로가기 버튼 이벤트 */  
    $('.back_m').click(function() {
        $("#s1").animate({opacity:"1"}, 100).animate({left: "0px"}, 300); 
        $("#s2").animate({opacity:"0"}, 800).animate({left: "-0px"}, 0); 
        $("#s3").animate({opacity:"0"}, 800).animate({left: "-0px"}, 0); 
        $(".back_m").css("opacity","0");
        
        timer = setTimeout(function(){
            $("header .logo_m a img").show();
            $("header .logo_m a img.g").hide();

            $("header .qmark_m a img").show();
            $("header .qmark_m a img.g").hide();

            $("header .back_m a img").show();
            $("header .back_m a img.g").hide();

            $("header .qmark_m a span").css("color","#fff");
        }, 200);
        
        $('html, body').animate({
            scrollTop: s1.top
        }, 500);
        
        return false;
    });
    
    
    /* 모바일 문서조회 버튼 이벤트 */  
    $('.doc_m').click(function() {
        $("#s1").animate({opacity:"1"}, 100).animate({left: "-1000px"}, 400); 
        $("#s2").animate({opacity:"1"}, 100).animate({left: "0px"}, 0); 
        $("#s3").animate({opacity:"0"}, 100).animate({left: "-1000px"}, 400); 
        $(".back_m").css("opacity","1");

        /* 버튼 반응형 width < 1068 */
        $(window).resize(function() {     
            if($(window).width() < 1068) {
                $("#s1").animate({opacity:"1"}, 0).animate({left: "-1000px"}, 0); 
                $("#s2").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s3").animate({opacity:"1"}, 0).animate({left: "-1000px"}, 0); 
                $("#s1_two").animate({opacity:"1"}, 0).animate({left: "-1000px"}, 0); 
            } else {
                $("#s1").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s2").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s3").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s1_two").fadeIn(600);
            }
        });
        /*
        $('html, body').animate({
            scrollTop: s2.top
        }, 500);
        */
        //return false;
    });
    
    
    /* 모바일 조회서비스란? 버튼 */  
    $('.service_m').click(function() {
        $("#s1").animate({opacity:"1"}, 100).animate({left: "-1000px"}, 400);
        $("#s2").animate({opacity:"0"}, 100).animate({left: "-1000px"}, 400);
        $("#s3").animate({opacity:"1"}, 100).animate({left: "0px"}, 0);
        $(".back_m").css("opacity","1");
                
        // 헤더 아이콘 색상 변경
        timer = setTimeout(function(){
            if ($("#s3").css("display","block")) {
                $("header .logo_m a img").hide();
                $("header .logo_m a img.g").show();

                $("header .qmark_m a img").hide();
                $("header .qmark_m a img.g").css("display","inline");

                $("header .back_m a img").hide();
                $("header .back_m a img.g").show();

                $("header .qmark_m a span").css("color","#666");
            } else {
                $("header .logo_m a img").show();
                $("header .logo_m a img.g").hide();

                $("header .qmark_m a img").css("display","inline");
                $("header .qmark_m a img.g").hide();

                $("header .back_m a img").show();
                $("header .back_m a img.g").hide();

                $("header .qmark_m a span").css("color","#fff");
            }
        }, 200);
        
        /* 버튼 반응형 width < 1068 */
        $(window).resize(function() {     
            if($(window).width() < 1068) {
                $("#s1").animate({opacity:"0"}, 0).animate({left: "-1000px"}, 0);
                $("#s2").animate({opacity:"0"}, 0).animate({left: "-1000px"}, 0);
                $("#s3").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s1_two").animate({opacity:"0"}, 0).animate({left: "-1000px"}, 0);
                /*
                $("header .logo_m a img").hide();
                $("header .logo_m a img.g").show();
                $("header .qmark_m a img").hide();
                $("header .qmark_m a img.g").show();
                $("header .qmark_m a span").css("color","#666");
                */
            } else {
                $("#s1").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s2").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s3").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 
                $("#s1_two").animate({opacity:"1"}, 0).animate({left: "0px"}, 0); 

                $(".header_m .logo_m a img").show();
                $(".header_m .logo_m a img.g").hide();
                $(".header_m .qmark_m a img").css("display","inline");
                $(".header_m .qmark_m a img.g").hide();
                $(".header_m .qmark_m a span").css("color","#fff");
            }
        });
        /*
        $('html, body').animate({
            scrollTop: s3.top
        }, 500);
        */
        //return false;
    });
    
    
    /* 모바일 문서정보 보기 */
    $(".sec2_m").click(function(){
        $(".sec2_two").fadeIn();
        $(".bg").fadeIn();
    });
    /* 팝업닫기 */
    $(".close").click(function() {
        $(".sec2_two").fadeOut();
        $(".bg").fadeOut();
    });
    $(".bg").click(function() {
        $(".sec2_two").fadeOut();
        $(".bg").fadeOut();
    });
    
    
    /* 오토포커스 */
    $(function() {
        $(".inputs").keyup (function () {
            var charLimit = $(this).attr("maxlength");
            if (this.value.length >= charLimit) {
                $(this).next('.inputs').focus();
                return false;
            }
        });
    });
        
    
});

    

/* 스크롤커스텀 */
(function($){
    $(window).on("load",function(){
        $(".content_scroll").mCustomScrollbar();
    });
})(jQuery);