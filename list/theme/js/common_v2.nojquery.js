// $.extend({
// TODO 
// });

$(function() {
    window.onload=function(){
        this.setTimeout(function(){
            scrollTo(0,0);
        },10);
    };

    // 만약 jsi 값이 넘어온다면
    // TODO 

    // header-change
    window.addEventListener('scroll', function(e) {        
        var header = document.getElementById('header');
        var posY = window.scrollY || window.pageYOffset;
        if( posY > 0 ){
            header.classList.add('header-change');
        }else{
            header.classList.remove('header-change');
        }
        var posX = window.scrollX || window.pageXOffset;
        header.style.left = 0 - posX;
    });

    // $('.filter-wrap .tab-name').on('click', function() {
    //     if ($('body').hasClass('pop-filter')) {
    //         $(this).parents('.depth-1').removeClass('on');
    //     }
    // });

    // //더보기 버튼
    // $('.filter .btn-toggle-more').on('click', function() {
    //     if($(this).text() == '더보기') {
    //         $(this).text('접기');
    //         $(this).siblings('.filter-list').children('ul').children('li').css('display', 'block');
    //     } else {
    //         $(this).text('더보기');
    //         $(this).siblings('.filter-list').children('ul').children('li').each(function () {
    //             if($(this).index() > 3) {
    //                 $(this).css('display','none');
    //             }
    //         })
    //     }
    // });

    // //SNS 더보기
    // $('.util .btn-share').click(function(){
    //     $(this).toggleClass('on');
    //     if($('.util .btn-share').hasClass('on')){
    //         $(this).siblings().stop().animate({left:'240px'});
    //         $('.sns-menu').animate({width:'toggle'},300);
    //         $(this).children(":first").find('img').attr('src','/images/btn/btn-share-on.png');
    //     }else{
    //         $(this).siblings().stop().animate({left:'0'});
    //         $('.sns-menu').animate({width:'toggle'},300);
    //         $(this).children(":first").find('img').attr('src','/images/btn/btn-share.png');
    //     }
    // });

    // // scroll top button
    // var $window = $(window);
    // var $document = $(document);
    // var $footer = $('#footer');
    // var $scrollBtn = $('#btn-go-top');

    // $scrollBtn.on('click', function () {

    //     $("html, body").stop().animate({
    //         scrollTop: 0
    //     }, 600);

    //     return false;
    // });

    // btnXPosition();

    // $window.resize(function () {
    //     btnXPosition();
    // });

    // // top버튼 x좌표설정
    // function btnXPosition() {
    //     var rightPosition = ($document.width() - 1756) / 2

    //     // X position
    //     if($document.width() > 1756) {
    //         $scrollBtn.css('right', rightPosition);
    //     } else {
    //         $scrollBtn.css('right', '15px');
    //     }
    // }

    // $window.on('scroll', function () {
    //     if ($window.scrollTop() < $document.height() - $window.height() - $footer.outerHeight() + 37) {
    //         $scrollBtn.addClass('go-top-fix');
    //     } else {
    //         $scrollBtn.removeClass('go-top-fix');
    //     }

    //     if ($window.scrollTop() < ($window.height() / 3)) {
    //         $scrollBtn.addClass('go-top-hide');
    //     } else {
    //         $scrollBtn.removeClass('go-top-hide');
    //     }
    // });

    // //select 옵션 선택
    // var selectTarget = $('.select-box select');
    // selectTarget.change(function(){
    //     var select_name = $(this).children('option:selected').text();
    //     $(this).siblings('label').text(select_name);
    // });

    // // swiper
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'fraction',
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     }
    // });

    // //AI추천
    // //$('.btn-ai').addClass('active');
    // $('.btn-ai').click(function(){
    //     $('.btn-ai').toggleClass('active');
    //     if($(this).hasClass('active')){
    //         $(this).parents('.header-visual').siblings('.ai-recommend').show();
    //     }else{
    //         $(this).parents('.header-visual').siblings('.ai-recommend').hide();
    //     }
    // })

    // // 이야기자료 상세 더보기
    // var btnList =$('.detail .btn-more'),
    //     moreList=$('.detail .article-main .list-box .card > li:nth-child(3) ~ li');
    // btnList.click(function(){
    //     moreList.toggle();
    // });

    // // 멀티미디어 tab
    // $('.mSection li').click(function () {
    //     var i = $(this).index();
    //     //$('.mSection li').removeClass('active').eq(i).addClass('active');
    //     //console.log($(this).parent());
    //     $(this).parent().children('li').removeClass('active');
    //     //$('.mSection li').removeClass('active');
    //     $(this).addClass('active');

    //     var content_element = $(this).parent().parent();
    //     if (this.parentNode.parentNode.tagName == 'DD') {
    //         if (content_element.children('div').hasClass('tabContent')) {
    //             $('.tabContent').removeClass('active').eq(i).addClass('active');
    //         }
    //     } else if (this.parentNode.parentNode.tagName == 'DIV') {
    //         content_element.children('div').removeClass('active').eq(i).addClass('active');
    //     }

    //     $('.mSection li').hasClass('active',function () {
    //         $(this).show();
    //     });
    // });

    // // 멀티미디어 popup
    // $('.explanation-body .list > li').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    // //원본보기
    // var $aside = $('.viewer-list'),
    //     $frame = $('.viewer-frame'),
    //     $button = $aside.find('.btn-toggle');

    // $button.click(function(){
    //     $aside.toggleClass('open');
    //     if($aside.hasClass('open')){
    //         $(this).stop().animate({width:'15px',marginLeft:'340px'});
    //         $aside.stop().animate({width:'340px',marginLeft:'0'});
    //         $frame.stop().animate({width:'auto',marginLeft:'340px'});
    //     }else{
    //         $(this).stop().animate({width:'15px',marginLeft:'0'});
    //         $aside.stop().animate({width:'340px',marginLeft:'-340px'});
    //         $frame.stop().animate({width:'auto',marginLeft:'0'});
    //     }
    // });

    // $('.viewer-list .btn-toggle').click(function(){
    //     $(this).parent('viewer-list').toggleClass('open');
    // });

    // $('.viewer-list .depth1 > .icon-folder > a').click(function(e){
    //     if( $(this).hasClass('active') ){
    //         $(this).removeClass('active');
    //         $(this).next('.depth2').slideDown();
    //     }else{
    //         $(this).addClass('active');
    //         $(this).next('.depth2').slideUp();
    //     }
    // });

    // // 모바일일때 메뉴 버튼
    // $(".header-right .menu").click(function() {
    //     $("#header").addClass("mobile-menu");
    //     $('.mobile-menu .nav-wrap').stop().animate({right:'0'},300);
    // });
    // $(".gnb .btn-close").click(function() {
    //     $("#header").removeClass("mobile-menu");
    //     $('.nav-wrap').stop().animate({right:'-75%'},300);
    // });

    // // 모바일일때 선택조건
    // $(".mobile-filter").click(function() {
    //     $('html, body').css({overflow:'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
    //     $(".selection").css({display:'block'});
    // });

    // $(".filter-head .btn-close").click(function() {
    //     $('html, body').css({overflow:'auto'}); //scroll hidden 해제
    //     $(".selection").css({display:'none'});
    // });

    // // 모바일일때 원문보기
    // var $mBtnOpen = $('.viewer-contents .btn-m-menu');
    // $mBtnColse= $('.viewer-contents .btn-pop-close');

    // $mBtnOpen.click(function() {
    //     $('html,body').css({overflow:'hidden'});
    //     $(".m-demmed").fadeIn();
    // });
    // $mBtnColse.click(function() {
    //     $('html,body').css({overflow:'auto'});
    //     $(".m-demmed").fadeOut();
    // });
});

//빅데이터 상세
// $(function() {


//     //Click Move Mouse Scroll Animation Button
//     $('.btn-scroll-action').on('click', function() {
//         $('html, body').animate({
//             scrollTop : $('.section2').offset().top - 80
//         }, 500, 'easeOutExpo');
//     });

//     var $header=$('.page-header');
//     $btnScroll=$('.btn-scroll-action');
//     $header.stop().animate({opacity:1,top:50+'%'},500, "linear");
//     $btnScroll.stop().animate({opacity:1}, 800, "linear");
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 200){
//             $header.fadeOut();
//             $btnScroll.fadeOut();
//         }else{
//             $header.fadeIn();
//             $btnScroll.fadeIn();
//         }
//     });


//     function scrollHeaderAnimation() {
//         var mainScroll = Math.floor($(window).scrollTop());

//         // 메인페이지, 서브페이지 구분
//         // 메인페이지는 mainWrap 클래스를 가진다.
//         // 서브페이지는 subWrap  클래스를 가진다.
//         if($('.wrap').hasClass('mainWrap')) {
//             if(mainScroll > 60) {
//                 $('.mainHeader').addClass('active').removeAttr('style');
//             } else {
//                 $('.mainHeader').removeClass('active');
//             }
//         } else {
//             $('.mainHeader').addClass('active')
//         }

//         // 검색 팝업이 호출되었을 경우 상단 헤더는 활성화상태를 유지한다.
//         if($('.layerSearch').hasClass('active')) {
//             $('.mainHeader').addClass('active');
//         }
//     }
//     /**
//      * =============================
//      * TabMenu Event & Animation
//      * =============================
//      */
//     function tabMenu01() {
//         var tabMenu = $('.tabMenu01Wrap'),
//             tabMenuBar = tabMenu.find('.bar'),
//             tabMenuBtn = $('.tabMenu01Wrap a'),
//             activeBtn,
//             parentIdx,
//             arr = [],
//             barWidth = [69, 36, 69, 140];

//         // 탭 메뉴 li의 각 width값을 배열에 담는다.
//         // 하일라이트바의 width값을 배열에 담는다.
//         $.each(tabMenuBtn, function(idx, elem) {
//             arr.push(Math.floor($(this).parent().innerWidth()));

//             // 페이지 초기 진입시 활성탭의 index를 구한다.
//             if ($(this).hasClass('active')) {
//                 activeBtn = $(this).parent().index();

//                 // 모바일모드 Button 텍스트 바꾼다.
//                 $('.btnMobileTab').text($(this).text());
//             }
//         });

//         // 하일라이트바의 초기 이동 위치를 설정한다.
//         tabMenuBar.css({'width' : Math.floor(barWidth[activeBtn]) + 'px', 'left' : sumPosX(activeBtn) + 'px'});

//         // 탭 a 요소 클릭시 WAI-ARIA 설정 및 하일라이트바 위치 이동한다.
//         tabMenuBtn.on('click', function() {
//             parentIdx = $(this).parent().index();
//             $(this).addClass('active')
//                 .parent().siblings('li').find('a').removeClass('active');
//             tabMenuBar.css({'width' : Math.floor(barWidth[parentIdx]) + 'px', 'left' : sumPosX(parentIdx) + 'px'});
//         });


//         /**
//          * ============================
//          * 하일라이트바 위치 설정함수
//          * @param el
//          * @returns {number}
//          * ============================
//          */
//         function sumPosX(el) {
//             var posX = 0,
//                 rightPadding = 35,
//                 arr2 = arr.slice(0, el + 1);

//             if (el == 0) {
//                 posX = -1;
//             } else if (el == 1) {
//                 posX = 130;
//             } else if (el == 2) {
//                 posX = 226;
//             } else if (el == 3) {
//                 posX = 360;
//             }

//             return posX;
//         }
//     }

// });

/**
 * Cookie 추가
 * @param {string} cookieName
 * @param {string|number} value
 * @param {string|number} [exdays] 만료일. +n일
 */
function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

/**
 * Cookie 값 반환
 * @param {string} cookieName
 * @returns {mixed}
 */
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

/**
 * Cookie 삭제
 * @param {string} cookieName
 */
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
