$.extend({
    getUrlVars: function(){
        var vars = [];
        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        $.each(hashes, function(key1, val1) {
            hash = val1.split('=');
            vars[hash[0]] = [];
        });
        $.each(hashes, function(key2, val2) {
            hash = val2.split('=');
            vars[hash[0]].push(hash[1]);
        });
        return vars;
    },
    getUrlSelect: function(name){
        return $.getUrlVars()[name];
    }
});

var str_ellipsis = function (str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.substring(0, maxLength) + '...';
};

var init_swiper_museums = function (bullet) {
    var swiper = new Swiper(".mySwiper", {
        //effect : 'fade',
        spaceBetween : 0,
        slidesPerView : 'auto',
        allowTouchMove : true,
        loop : false,
        speed : 0,
        touchRatio: 0,
        /*
         autoplay : {
         delay : 3000,
         disableOnInteraction : false,
         },
         */
        autoplay: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
    });
};

var init_mobile_swiper_bullet_museums = function () {
    var width = $(window).width();
    if (width<=1400) {
        /* 모바일 이색박물관 슬라이드 모바일 버튼 */
        $('.mySwiper .swiper-pagination .swiper-pagination-bullet').click(function(){
            $(this).parent().toggleClass('on');
            if($(this).parent().hasClass('on')){
                $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','relative');
                $(this).removeClass('swiper-pagination-bullet-active');
                $(this).css('z-index','9');
            }else{
                $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','absolute');
                $(this).addClass('swiper-pagination-bullet-active');
                $(this).css('z-index','99');
            }
        });
    }
    if (width>=1401) {
        $('.mySwiper .swiper-pagination .swiper-pagination-bullet').click(function(){
            $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','');
        });
        $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','');
    }
};

var init_swiper_uniquejob = function (bullet) {
    var swiperjob = new Swiper(".swiperjob", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-txt',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
    });
};

$(function() {
    window.onload=function(){
        this.setTimeout(function(){
            scrollTo(0,0);
        },10);
    };

    // 박물관찾기 팝업
    $(".btn-museum").click(function(){
        $(".popup").fadeIn();
    });
    $(".pop-close").click(function(){
        $(".popup").fadeOut();
    });

    // 한국의 강 팝업
    $(".river-1").click(function(){
        $(".pop-river-1").fadeIn();
        $('body').addClass('scrollhidden');
    });
    $(".river-2").click(function(){
        $(".pop-river-2").fadeIn();
        $('body').addClass('scrollhidden');
    });
    $(".river-3").click(function(){
        $(".pop-river-3").fadeIn();
        $('body').addClass('scrollhidden');
    });
    $(".river-4").click(function(){
        $(".pop-river-4").fadeIn();
        $('body').addClass('scrollhidden');
    });
    $(".river-5").click(function(){
        $(".pop-river-5").fadeIn();
        $('body').addClass('scrollhidden');
    });
    $(".pop-close").click(function(){
        $(".popup").fadeOut();
        $('body').removeClass('scrollhidden');
    });

    // mobile selectbox
    $(document).on('click', '.section6 .tabs li', function(){
        var $parent = $(this.parentNode.parentNode);
        var idx = $(this).index();
        toggleTabContent(idx, $parent);
    });
    $(document).on('change', 'select.mobile', function(){
        var idx = $(this).val();
        var $parent = $(this.parentNode);
        toggleTabContent(idx, $parent);
    });
    function toggleTabContent(idx, parent){
        parent.find('.tabs li').removeClass('current').eq(idx).addClass('current');
        parent.find('.tabs_item').hide().eq(idx).show();
        parent.find('.tabs_item_pop').hide().eq(idx).show();
    }

    // 철문화 : 한반도 제철유적 현황 카운팅
    $(window).scroll(function() {
        var sectionTwo = $('.iron-culture-section2');
        if (sectionTwo.length > 0) {

            var sectionTwoOffset = sectionTwo.offset().top;
            var windowHeight = $(window).height();
            var windowScroll = $(this).scrollTop();

            if ((sectionTwoOffset + 400) >= (windowHeight + windowScroll) && sectionTwoOffset <= (windowHeight + windowScroll)) {
                // console.log("hi");
                // $(window).off("scroll");
                $('.count').each(function() {
                    var $this = $(this);
                    jQuery({
                        Counter: 0
                    }).animate({
                        Counter: $this.attr("data")
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function() {
                            $this.text(this.Counter.toFixed(1));
                        }
                    });
                });
            }
        }
    });

    /* 탭 */
    $(document).ready(function(){
        $('ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();
            g.preventDefault();
        });
    });

    /* 이색박물관 탭 */
    (function ($) {
        $('div.tabs').addClass('active').find('> .list-area:eq(0)').addClass('current');
        $('.tab_content .con-box').find('div.area-active:eq(0)').addClass('on');
        $('div.tabs .list-area').hover(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('.list-area').index();

            tab.find('div.tabs > .list-area').removeClass('current');
            $(this).closest('.list-area').addClass('current');

            tab.find('.tab_content').find('div.area-active').not('div.area-active:eq(' + index + ')').removeClass('on');
            tab.find('.tab_content').find('div.area-active:eq(' + index + ')').addClass('on');

            var area = $(this).find('.area').text();
            tab.find('.tab_content').find('div.tabs_item_pop').not('div.tabs_item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tabs_item_pop:eq(' + index + ')').show();
            tab.find('#selectBox').find('option:first-child').text(area);
            $('#selectBox').click(function(){
                $(this).find('option:first-child').text('서울특별시');
                var result = $('#selectBox option:selected').val();
                if (result == '0') {
                    $('.tab_content .tabs_item_pop').hide();
                    $('.tab_content .tabs_item_pop:nth-of-type(1)').show();
                }
            });
            $('.pop-museum .pop-close').click(function(){
                $('#selectBox option').prop("selected", false);
            });
            g.preventDefault();
        });
    })(jQuery);

    // 한국의 강과 바다 헤더영역
    $('.bigdata-detail.sea-river .header-visual .header-box .river-box').hover(function(){
        $('.bigdata-detail.sea-river .header-visual .header-box .sea-box').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active')){
            $(this).parent().addClass('river');
            $(this).parent().removeClass('sea');
        }else{
            $(this).parent().removeClass('river');
            $(this).parent().addClass('sea');
        }
    });
    $('.bigdata-detail.sea-river .header-visual .header-box .sea-box').hover(function(){
        $('.bigdata-detail.sea-river .header-visual .header-box .river-box').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active')){
            $(this).parent().removeClass('river');
            $(this).parent().addClass('sea');
        }else{
            $(this).parent().addClass('river');
            $(this).parent().removeClass('sea');
        }
    });
    // 한국의 강과 바다 인트로 이동
    $('.river-box').click(function(){
        $('.sea-content').hide();
        $('.river-content').fadeIn().css('left','0');
    });
    $('.sea-box').click(function(){
        $('.river-content').hide();
        $('.sea-content').fadeIn().css('right','0');
    });
    // 한국의 강과 바다 메뉴 이동
    $('.nav-box .nav-home-btn').click(function(){
        $('html').scrollTop(0);
        $('.sea-content').fadeOut().css('right','-100%');
        $('.river-content').fadeOut().css('left','-100%');
    });
    $('.nav-box .nav-sea-btn').click(function(){
        $('html').scrollTop(0);
        $('.sea-content').fadeIn().css('right','0%');
        $('.river-content').fadeOut().css('left','-100%');
    });
    $('.nav-box .nav-river-btn').click(function(){
        $('html').scrollTop(0);
        $('.river-content').fadeIn().css('left','0%');
        $('.sea-content').fadeOut().css('right','-100%');
    });
    // 한국의 강과 바다 메뉴 버튼
    $('.nav-left-box .menu').mouseenter(function(){
        $(this).find('.Img').show('fast');
        $(this).css('background','rgba(0,0,0,0.4)').css('padding','20px 20px 20px 80px');
    });
    $('.nav-right-box .menu').mouseenter(function(){
        $(this).find('.Img').show('fast');
        $(this).css('background','rgba(0,0,0,0.4)').css('padding','20px 80px 20px 20px');
    });
    $('.nav-box .menu').mouseleave(function(){
        $(this).find('.Img').hide('fast');
        $(this).css('background','rgba(0,0,0,0.0)').css('padding','0px 0px');
    });
    // 한국의 강과 바다 정답보기
    $('.btn-answer').click(function(){
        var an = $('.q-list .q-text .answer span b');
        $(this).parent().toggleClass('on');
        if($(this).parent().hasClass('on')){
            $(an).fadeIn();
            $('.btn-answer span').text('초기화');
            $('.btn-answer').css('background','#aaa');
            $('.reset').show();
        }else{
            $(an).fadeOut();
            $('.btn-answer span').text('정답보기');
            $('.btn-answer').css('background','#E7B200');
            $('.reset').hide();
        }
    });

    //header-change
    var $header=$('#header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('header-change');
        }else{
            $header.removeClass('header-change');
        }
        $header.css({left: 0 - $(this).scrollLeft()});
    });

    //header 검색
    var $btnSearch = $('.header-right .search');
    $btnSearch.click(function(){
        $('#header').toggleClass('active-search');
    })

    // 카드/테이블 유형 보기 버튼
    // var $button = $('.list-view-change button');
    // $button.eq(0).addClass('active');
    // $button.click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     if($(this).hasClass('btn-vcard')) {
    //         $(this).parents('.title').siblings('ul').addClass('card');
    //     } else {
    //         $(this).parents('.title').siblings('ul').removeClass('card');
    //     }
    // });

    // 선택조건
    // depth-1 열고 닫기
    // $('.filter-tit .btn-toggle').addClass('on');
    // $('.filter-tit .btn-toggle').on('click', function() {
    //     if($(this).text() == '닫기') {
    //         $(this).removeClass('on').text('열기');
    //         $(this).parent('.filter-tit').siblings('.filter-list').stop().slideUp();
    //         $('.filter .btn-toggle-more').css('display','none');
    //     } else {
    //         $(this).addClass('on').text('닫기');
    //         $(this).parent('.filter-tit').siblings('.filter-list').stop().slideDown();
    //         $('.filter .btn-toggle-more').css('display','block');
    //     }
    // });

    // // depth-2 열고 닫기
    // $('.filter .depth-1 .btn-toggle').addClass('on');
    // $('.filter .depth-1 .btn-toggle').on('click', function () {
    //     var _this = $(this).parents('li').index();
    //     if ($(this).text() == '닫기') {
    //         $(this).removeClass('on').text('열기');
    //         $(this).parent('.depth-1').siblings('.depth-2').stop().slideUp();
    //     } else {
    //         $(this).addClass('on').text('닫기');
    //         $(this).parent('.depth-1').siblings('.depth-2').stop().slideDown();
    //     }
    // });

    $('.filter-wrap .tab-name').on('click', function() {
        if ($('body').hasClass('pop-filter')) {
            $(this).parents('.depth-1').removeClass('on');
        }
    });

    //더보기 버튼
    $('.filter .btn-toggle-more').on('click', function() {
        if($(this).text() == '더보기') {
            $(this).text('접기');
            $(this).siblings('.filter-list').children('ul').children('li').css('display', 'block');
        } else {
            $(this).text('더보기');
            $(this).siblings('.filter-list').children('ul').children('li').each(function () {
                if($(this).index() > 3) {
                    $(this).css('display','none');
                }
            })
        }
    });

    // 문화원 전체보기 팝업 열기
    // $('.filter .btn-all-view').on('click', function() {
    //     $('body').addClass('pop-filter');
    //     $(".pop-filter .pop-culture-center .filter-list > ul > li:first-child .tab-name").trigger("click");
    // });
    //
    // // 문화원 전체보기 팝업 닫기
    // $('.filter .pop-btn-wrap .btn-gray').on('click', function () {
    //     $('body').removeClass('pop-filter');
    //     $(".line-1 , .line-2, .line-3").attr("style" , '');
    // });

    // $(document).on('click', '.pop-filter .depth-1 .btn-toggle' , function () {
    //     $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
    //     $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
    //     $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
    // });

    // 문화원 팝업 체크된 지역 하위 리스트 보기
    // $('.filter-wrap .depth-1 .check input').each(function () {
    //     var tabLabel = $(this).next().text();
    //     if($(this).parents('.depth-1').siblings('.depth-2').length > 0) { //하위 조건이 있을 경우만 버튼 생성
    //         $(this).parent('.check').append('<button type="button" class="tab-name">' + tabLabel + '</button>');
    //     }
    //     $(this).siblings('.tab-name').on('click', function () {
    //         var _this = $(this).parents('li').index();
    //         $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
    //         if (!$('body').hasClass('pop-filter')) {
    //             if ($(this).parents('.depth-1').hasClass('on')) {
    //                 $(this).parents('.depth-1').removeClass('on');
    //             } else {
    //                 $(this).parents('.depth-1').addClass('on');
    //             }
    //         } else {
    //             $(this).parents('.depth-1').addClass('on');
    //         }
    //
    //         // 줄구분용 data 추가
    //         $(".pop-culture-center .line-1").data("idx", "1");
    //         $(".pop-culture-center .line-2").data("idx", "2");
    //         $(".pop-culture-center .line-3").data("idx", "3");
    //
    //         target = $(".pop-filter li.line-" + $(this).parents("li").data("idx") + "");
    //         size = $(this).parents("div.depth-1").next().outerHeight() + 50 ;
    //         $(".line-1 , .line-2, .line-3").attr("style" , '');
    //         target.css("height" , size );
    //
    //     });
    //     $(this).change( function () {
    //         var _this = $(this).parents('li').index();
    //         if ($(this).is(":checked")) {
    //             $(this).parents('.depth-1').next().stop().slideDown(0);
    //             $(this).parents('.depth-1').addClass('on');
    //             $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
    //             $(this).parents('li').find('.depth-1').children('.btn-toggle').text('닫기');
    //             $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
    //             $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
    //         }
    //     });
    // });

    // $('.filter-wrap .depth-2 input').change(function () {
    //     if ($(this).is(':checked')) {
    //         $(this).parents('.depth-2').siblings('.depth-1').find('input').prop('checked', true);
    //     } else {
    //         if ($(this).parents('.depth-2').find('input:checked').length <= 0) {
    //             $(this).parents('.depth-2').siblings('.depth-1').find('input').prop('checked', false);
    //         }
    //     }
    // });

    //SNS 더보기
    $('.util .btn-share').click(function(){
        $(this).toggleClass('on');
        if($('.util .btn-share').hasClass('on')){
            $(this).siblings().stop().animate({left:'240px'});
            $('.sns-menu').animate({width:'toggle'},300);
            $(this).children(":first").find('img').attr('src','/images/btn/btn-share-on.png');
        }else{
            $(this).siblings().stop().animate({left:'0'});
            $('.sns-menu').animate({width:'toggle'},300);
            $(this).children(":first").find('img').attr('src','/images/btn/btn-share.png');
        }
    });

    // scroll top button
    var $window = $(window);
    var $document = $(document);
    var $footer = $('#footer');
    var $scrollBtn = $('#btn-go-top');

    $scrollBtn.on('click', function () {

        $("html, body").stop().animate({
            scrollTop: 0
        }, 600);

        return false;
    });

    btnXPosition();
    // btnAIPosition();

    $window.resize(function () {
        btnXPosition();
        // btnAIPosition();

        // var width = $(window).width();
        // if (width<=1400) {
        //     // 모바일 한국의 강과 바다 인트로 이동버튼
        //     $(".river-box").unbind("click");
        //     $(".sea-box").unbind("click");
        //
        //     // 모바일 한국의 강과 바다 컨텐츠 이동버튼
        //     $('.river-box .title-box .Tit span.arr').click(function(){
        //         $('.sea-content').hide();
        //         $('.river-content').fadeIn().css('left','0');
        //     });
        //     $('.sea-box .title-box .Tit span.arr').click(function(){
        //         $('.river-content').hide();
        //         $('.sea-content').fadeIn().css('right','0');
        //     });
        //
        //     // 모바일 한국의 강과 바다 메뉴버튼 마우스호버취소
        //     $(".nav-left-box .menu").unbind("mouseenter");
        //     $(".nav-right-box .menu").unbind("mouseenter");
        //     $(".nav-box .menu").unbind("mouseleave");
        //
        //     // 모바일 한국의 강 마우스호버
        //     $('.river-box .river-list').mouseenter(function (){
        //         $('.river-box .river-list').removeClass('on');
        //         $(this).addClass('on');
        //     });
        //     $('.river-box .river-list').mouseleave(function (){
        //         $(this).removeClass('on');
        //     });
        // }
    });

    // top버튼 x좌표설정
    function btnXPosition() {
        var rightPosition = ($document.width() - 1756) / 2

        // X position
        if($document.width() > 1756) {
            $scrollBtn.css('right', rightPosition);
        } else {
            $scrollBtn.css('right', '15px');
        }
    }

    // AI, VR 버튼 설정
    function btnAIPosition() {
        var width = $(window).width();
        if (width<=1400) {
            /* 모바일 헤더 AI 버튼 */
            if($(".header-visual .inner-wrap button").hasClass("btn-ai") === true){
                $(".detail .header-visual").css("height","300px");
                $(".detail .util").css("bottom","65px");
                $(".detail .header-visual .con-title h2").css("top","125px");
            }
            /* 모바일 헤더 VR 버튼 */
            if($(".header-visual .inner-wrap a").hasClass("btn-vr-view") === true){
                $(".detail .header-visual").css("height","300px");
                $(".detail .util").css("bottom","65px");
                $(".detail .header-visual .con-title h2").css("top","125px");
                $(".header-visual .inner-wrap .btn-ai").css("left","90px");
            }
        }
        if (width>=1401) {
            if($(".header-visual .inner-wrap button").hasClass("btn-ai") === false){
                $(".header-visual .inner-wrap .btn-vr-view").css("right","0px");
            }
            $(".header-visual .inner-wrap .btn-ai").css("left","");
            $(".detail .header-visual").css("height","");
            $(".detail .util").css("bottom","");
            $(".detail .header-visual .con-title h2").css("top","");
        }
    }

    $window.on('scroll', function () {
        if ($window.scrollTop() < $document.height() - $window.height() - $footer.outerHeight() + 37) {
            $scrollBtn.addClass('go-top-fix');
        } else {
            $scrollBtn.removeClass('go-top-fix');
        }

        if ($window.scrollTop() < ($window.height() / 3)) {
            $scrollBtn.addClass('go-top-hide');
        } else {
            $scrollBtn.removeClass('go-top-hide');
        }
    });

    //select 옵션 선택
    var selectTarget = $('.select-box select');
    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // 한국의 산과 샘 슬라이드
    var swipero = new Swiper(".mountainSwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        autoplay: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiperi = new Swiper(".innerSwiper", {
        effect : 'fade',
        loop: true,
        spaceBetween : 0,
        slidesPerView : 'auto',
        centeredSlides: true,
        touchRatio: 0,
        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // 한국의 산과샘 슬라이드
    swipero.on('transitionStart', function() {
        $('.graph-sec').removeClass('mountain0 mountain1 mountain2 mountain3 mountain4');
        if($('.mountainSwiper .swiper-slide').eq(swipero.realIndex)){
            $('.graph-sec').addClass('mountain' + swipero.realIndex);
        }
    });

    //AI추천
    //$('.btn-ai').addClass('active');
    $('.btn-ai').click(function(){
        $('.btn-ai').toggleClass('active');
        if($(this).hasClass('active')){
            $(this).parents('.header-visual').siblings('.ai-recommend').show();
        }else{
            $(this).parents('.header-visual').siblings('.ai-recommend').hide();
        }
    })

    // 위치정보
    // $('.around-box button').click(function(){
    //     $(this).toggleClass('active');
    //     if($(this).hasClass('active')){
    //         $(this).siblings('ul').css('display','block');
    //     }else{
    //         $(this).siblings('ul').css('display','none');
    //     }
    // });

    // 이야기자료 상세 더보기
    var btnList =$('.detail .btn-more'),
        moreList=$('.detail .article-main .list-box .card > li:nth-child(3) ~ li');
    btnList.click(function(){
        moreList.toggle();
    });

    // 멀티미디어 더보기
    // var flexImages=$('.media-list .btn-more');
    // flexHeight=$('.tabContent .flex-images');
    // flexImages.click(function(){
    //     $(this).toggleClass('open');
    //     if($(this).hasClass('open')){
    //         $('.flex-images').flexImages({ maxRows:6});
    //     }else{
    //         $('.flex-images').flexImages({ maxRows:4});
    //     }
    // });


    // 노동요 | 소개페이지 tab
    var $tab = $('div.tab-menu ul li');
    $tab.eq(0).addClass('active');
    $('.tabContent').eq(0).addClass('active');
    $tab.click(function () {
        var i = $(this).index();
        $tab.removeClass('active').eq(i).addClass('active');
        $('.tabContent').removeClass('active').eq(i).addClass('active');
        $tab.hasClass('active',function () {
            $(this).show();
        });
    });

    // 멀티미디어 tab
    $('.mSection li').click(function () {
        var i = $(this).index();
        //$('.mSection li').removeClass('active').eq(i).addClass('active');
        //console.log($(this).parent());
        $(this).parent().children('li').removeClass('active');
        //$('.mSection li').removeClass('active');
        $(this).addClass('active');

        var content_element = $(this).parent().parent();
        if (this.parentNode.parentNode.tagName == 'DD') {
            if (content_element.children('div').hasClass('tabContent')) {
                $('.tabContent').removeClass('active').eq(i).addClass('active');
            }
        } else if (this.parentNode.parentNode.tagName == 'DIV') {
            content_element.children('div').removeClass('active').eq(i).addClass('active');
        }

        $('.mSection li').hasClass('active',function () {
            $(this).show();
        });
    });

    // 지역의 오래된 가게 tab
    $('.tabs-sec2 li').eq(0).addClass('active');
    $('.tabContent-sec2').eq(0).addClass('active');
    $('.tabs-sec2 li').click(function () {
        var i = $(this).index()+1;

        $('.tabs-sec2 li, .tabContent-sec2').removeClass('active');
        $('.tabs-sec2 li:nth-of-type('+i+'), .tabContent-sec2:nth-of-type('+i+')').addClass('active');
    });

    // 지역의 오래된 가게 섹션1 BG
    var sec1bg = $('.bigdata-detail.oldshop .section1');
    $('.bigdata-detail.oldshop .section1 div.tab-menu ul > li:nth-of-type(1) > a').click(function(){
        $(sec1bg).addClass('bg1').removeClass('bg2').removeClass('bg3').removeClass('bg4');
    });
    $('.bigdata-detail.oldshop .section1 div.tab-menu ul > li:nth-of-type(2) > a').click(function(){
        $(sec1bg).addClass('bg2').removeClass('bg1').removeClass('bg3').removeClass('bg4');
    });
    $('.bigdata-detail.oldshop .section1 div.tab-menu ul > li:nth-of-type(3) > a').click(function(){
        $(sec1bg).addClass('bg3').removeClass('bg1').removeClass('bg2').removeClass('bg4');
    });
    $('.bigdata-detail.oldshop .section1 div.tab-menu ul > li:nth-of-type(4) > a').click(function(){
        $(sec1bg).addClass('bg4').removeClass('bg1').removeClass('bg2').removeClass('bg3');
    });

    // 지역의 오래된 가게 아코디언 이미지
    var images2 = document.querySelectorAll(".section2 .tabContent-sec2:nth-of-type(1) .image-accordion .acc-list img");
    var images2_1 = document.querySelectorAll(".section2 .tabContent-sec2:nth-of-type(2) .image-accordion .acc-list img");
    var images4 = document.querySelectorAll(".section4 .image-accordion .acc-list img");
    var images6 = document.querySelectorAll(".section6 .image-accordion .acc-list img");
    // 아코디언 섹션2
    images2.forEach(function(image2){
        /*
         image.onclick = function(event){
         document.querySelector(".selected-image").classList.remove("selected-image");
         var clickParent = event.target.parentNode.parentNode;
         clickParent.classList.add("selected-image");
         };
         */
        $(image2).mouseover(function(){
            $('.section2 .tabContent-sec2:nth-of-type(1) .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
        $(image2).bind("touchend",function(){
            $('.section2 .tabContent-sec2:nth-of-type(1) .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
    });
    // 아코디언 섹션2-1
    images2_1.forEach(function(image2_1){
        $(image2_1).mouseover(function(){
            $('.section2 .tabContent-sec2:nth-of-type(2) .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
        $(image2_1).bind("touchend",function(){
            $('.section2 .tabContent-sec2:nth-of-type(2) .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
    });
    // 아코디언 섹션4
    images4.forEach(function(image4){
        $(image4).mouseover(function(){
            $('.section4 .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
        $(image4).bind("touchend",function(){
            $('.section4 .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
    });
    // 아코디언 섹션6
    images6.forEach(function(image6){
        $(image6).mouseover(function(){
            $('.section6 .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
        $(image6).bind("touchend",function(){
            $('.section6 .image-accordion .acc-list').removeClass("selected-image");
            var clickParent = event.target.parentNode.parentNode;
            clickParent.classList.add("selected-image");
        });
    });

    // 멀티미디어 popup
    $('.explanation-body .list > li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // // 정보상세페이지 추가이미지 슬라이드
    // function detailImgBoxSwiper() {
    //     var relativeOrgan = new Swiper('.local-festival .detail .img-box .swiper-container', {
    //         slidesPerView: 2,
    //         navigation: {
    //             nextEl: '.local-festival .detail .img-box .btn-next',
    //             prevEl: '.local-festival .detail .img-box .btn-prev',
    //         },
    //         pagination: {
    //             el: '.local-festival .detail .img-box .swiper-pagination',
    //             type: 'fraction',
    //         },
    //         breakpoints: {
    //             768: {
    //                 slidesPerView: 1,
    //                 freeMode: true,
    //             },
    //         }
    //     });
    //
    //     $('.local-festival .detail .img-box .thmub-imgs .img-wrap').on('click', function () {
    //         var clickImg = $(this).find('img').attr('src');
    //         $('.local-festival .detail .img-box .gallery-img img').attr('src', clickImg);
    //     });
    // }
    // detailImgBoxSwiper();

    //통합검색결과 tab
    // var $tabList=$('.result-search .tab-result li'),
    //     $tabCont=$('.result-search .tabCont');
    //
    // $tabList.eq(0).addClass('active');
    // $tabCont.eq(0).addClass('active');
    // $tabList.click(function () {
    //     var i = $(this).index();
    //     $tabList.removeClass('active').eq(i).addClass('active');
    //     $tabCont.removeClass('active').eq(i).addClass('active');
    //     $tabList.hasClass('active',function(){
    //         $(this).show();
    //     });
    // });


    //scroll // 이 플러그인 안씀
    // $(window).on('load',function(){
    //     $('.yScroll').mCustomScrollbar({
    //         setWidth:false,
    //         setHeight:false,
    //         setTop:0,
    //         setLeft:0,
    //         axis:"y",
    //         scrollbarPosition:"inside",
    //         scrollInertia:950,
    //         autoDraggerLength:true,
    //         autoHideScrollbar:false,
    //         autoExpandScrollbar:false,
    //         alwaysShowScrollbar:0,
    //         snapAmount:null,
    //         snapOffset:0,
    //         mouseWheel:{
    //             enable:true,
    //             scrollAmount:"auto",
    //             axis:"y",
    //             preventDefault:false,
    //             deltaFactor:"auto",
    //             normalizeDelta:false,
    //             invert:false,
    //             disableOver:["select","option","keygen","datalist","textarea"]
    //         }
    //     });
    // });

    $(function(){
        $(window).resize(function() {
            var width = $(window).width();
            // if (width<=640) {
            if (width<=753) {
                /* 모바일 헤더 AI 버튼 */
                if($(".header-visual .inner-wrap button").hasClass("btn-ai") === true){
                    $(".detail .header-visual").css("height","300px");
                    $(".detail .util").css("bottom","65px");
                    $(".detail .header-visual .con-title h2").css("top","125px");
                }
                /* 모바일 헤더 VR 버튼 */
                if($(".header-visual .inner-wrap a").hasClass("btn-vr-view") === true){
                    $(".detail .header-visual").css("height","300px");
                    $(".detail .util").css("bottom","65px");
                    $(".detail .header-visual .con-title h2").css("top","125px");
                    $(".header-visual .inner-wrap .btn-ai").css("left","90px");
                }

                /* 모바일 이색박물관 슬라이드 모바일 버튼 */
                $('.mySwiper .swiper-pagination .swiper-pagination-bullet').click(function(){
                    $(this).parent().toggleClass('on');
                    if($(this).parent().hasClass('on')){
                        $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','relative');
                        $(this).removeClass('swiper-pagination-bullet-active');
                        $(this).css('z-index','9');
                    }else{
                        $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','absolute');
                        $(this).addClass('swiper-pagination-bullet-active');
                        $(this).css('z-index','99');
                    }
                });

                // 모바일 한국의 강과 바다 인트로 이동버튼
                $(".river-box").unbind("click");
                $(".sea-box").unbind("click");

                // 모바일 한국의 강과 바다 컨텐츠 이동버튼
                $('.river-box .title-box .Tit span.arr').click(function(){
                    $('.sea-content').hide();
                    $('.river-content').fadeIn().css('left','0');
                });
                $('.sea-box .title-box .Tit span.arr').click(function(){
                    $('.river-content').hide();
                    $('.sea-content').fadeIn().css('right','0');
                });

                // 모바일 한국의 강과 바다 메뉴버튼 마우스호버취소
                $(".nav-left-box .menu").unbind("mouseenter");
                $(".nav-right-box .menu").unbind("mouseenter");
                $(".nav-box .menu").unbind("mouseleave");

                // 모바일 한국의 강 마우스호버
                $('.river-box .river-list').mouseenter(function (){
                    $('.river-box .river-list').removeClass('on');
                    $(this).addClass('on');
                });
                $('.river-box .river-list').mouseleave(function (){
                    $(this).removeClass('on');
                });

            }
            // if (width>=641) {
            if (width>=754) {
                if($(".header-visual .inner-wrap button").hasClass("btn-ai") === false){
                    $(".header-visual .inner-wrap .btn-vr-view").css("right","0px");
                }
                $(".header-visual .inner-wrap .btn-ai").css("left","");
                $(".detail .header-visual").css("height","");
                $(".detail .util").css("bottom","");
                $(".detail .header-visual .con-title h2").css("top","");

                $('.mySwiper .swiper-pagination .swiper-pagination-bullet').click(function(){
                    $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','');
                });
                $('.mySwiper .swiper-pagination .swiper-pagination-bullet').css('position','');
            }
        });
        $(window).resize();
    });

    //원본보기
    var $aside = $('.viewer-list'),
        $frame = $('.viewer-frame'),
        $button = $aside.find('.btn-toggle');

    $button.click(function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $(this).stop().animate({width:'15px',marginLeft:'340px'});
            $aside.stop().animate({width:'340px',marginLeft:'0'});
            $frame.stop().animate({width:'auto',marginLeft:'340px'});
        }else{
            $(this).stop().animate({width:'15px',marginLeft:'0'});
            $aside.stop().animate({width:'340px',marginLeft:'-340px'});
            $frame.stop().animate({width:'auto',marginLeft:'0'});
        }
    });

    $('.viewer-list .btn-toggle').click(function(){
        $(this).parent('viewer-list').toggleClass('open');
    });

    $('.viewer-list .depth1 > .icon-folder > a').click(function(e){
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            $(this).next('.depth2').slideDown();
        }else{
            $(this).addClass('active');
            $(this).next('.depth2').slideUp();
        }
    });

    // 모바일일때 메뉴 버튼
    $(".header-right .menu").click(function() {
        $("#header").addClass("mobile-menu");
        $('.mobile-menu .nav-wrap').stop().animate({right:'0'},300);
    });
    $(".gnb .btn-close").click(function() {
        $("#header").removeClass("mobile-menu");
        $('.nav-wrap').stop().animate({right:'-75%'},300);
    });

    // 모바일일때 선택조건
    $(".mobile-filter").click(function() {
        $('html, body').css({overflow:'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
        $(".selection").css({display:'block'});
    });

    $(".filter-head .btn-close").click(function() {
        $('html, body').css({overflow:'auto'}); //scroll hidden 해제
        $(".selection").css({display:'none'});
    });

    // 모바일일때 원문보기
    var $mBtnOpen = $('.viewer-contents .btn-m-menu');
    $mBtnColse= $('.viewer-contents .btn-pop-close');

    $mBtnOpen.click(function() {
        $('html,body').css({overflow:'hidden'});
        $(".m-demmed").fadeIn();
    });
    $mBtnColse.click(function() {
        $('html,body').css({overflow:'auto'});
        $(".m-demmed").fadeOut();
    });
});

//빅데이터 상세
$(function() {
    //Click Move Mouse Scroll Animation Button
    $('.btn-scroll-action').on('click', function() {
        $('html, body').animate({
            scrollTop : $('.section2').offset().top - 80
        }, 500, 'easeOutExpo');
    });

    var $header=$('.page-header');
    $btnScroll=$('.btn-scroll-action');
    $header.stop().animate({opacity:1,top:50+'%'},500, "linear");
    $btnScroll.stop().animate({opacity:1}, 800, "linear");
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $header.fadeOut();
            $btnScroll.fadeOut();
        }else{
            $header.fadeIn();
            $btnScroll.fadeIn();
        }
    });


    function scrollHeaderAnimation() {
        var mainScroll = Math.floor($(window).scrollTop());

        // 메인페이지, 서브페이지 구분
        // 메인페이지는 mainWrap 클래스를 가진다.
        // 서브페이지는 subWrap  클래스를 가진다.
        if($('.wrap').hasClass('mainWrap')) {
            if(mainScroll > 60) {
                $('.mainHeader').addClass('active').removeAttr('style');
            } else {
                $('.mainHeader').removeClass('active');
            }
        } else {
            $('.mainHeader').addClass('active')
        }

        // 검색 팝업이 호출되었을 경우 상단 헤더는 활성화상태를 유지한다.
        if($('.layerSearch').hasClass('active')) {
            $('.mainHeader').addClass('active');
        }
    }
    /**
     * =============================
     * TabMenu Event & Animation
     * =============================
     */
    function tabMenu01() {
        var tabMenu = $('.tabMenu01Wrap'),
            tabMenuBar = tabMenu.find('.bar'),
            tabMenuBtn = $('.tabMenu01Wrap a'),
            activeBtn,
            parentIdx,
            arr = [],
            barWidth = [69, 36, 69, 140];

        // 탭 메뉴 li의 각 width값을 배열에 담는다.
        // 하일라이트바의 width값을 배열에 담는다.
        $.each(tabMenuBtn, function(idx, elem) {
            arr.push(Math.floor($(this).parent().innerWidth()));

            // 페이지 초기 진입시 활성탭의 index를 구한다.
            if ($(this).hasClass('active')) {
                activeBtn = $(this).parent().index();

                // 모바일모드 Button 텍스트 바꾼다.
                $('.btnMobileTab').text($(this).text());
            }
        });

        // 하일라이트바의 초기 이동 위치를 설정한다.
        tabMenuBar.css({'width' : Math.floor(barWidth[activeBtn]) + 'px', 'left' : sumPosX(activeBtn) + 'px'});

        // 탭 a 요소 클릭시 WAI-ARIA 설정 및 하일라이트바 위치 이동한다.
        tabMenuBtn.on('click', function() {
            parentIdx = $(this).parent().index();
            $(this).addClass('active')
                .parent().siblings('li').find('a').removeClass('active');
            tabMenuBar.css({'width' : Math.floor(barWidth[parentIdx]) + 'px', 'left' : sumPosX(parentIdx) + 'px'});
        });


        /**
         * ============================
         * 하일라이트바 위치 설정함수
         * @param el
         * @returns {number}
         * ============================
         */
        function sumPosX(el) {
            var posX = 0,
                rightPadding = 35,
                arr2 = arr.slice(0, el + 1);

            if (el == 0) {
                posX = -1;
            } else if (el == 1) {
                posX = 130;
            } else if (el == 2) {
                posX = 226;
            } else if (el == 3) {
                posX = 360;
            }

            return posX;
        }
    }

});

$(document).ready(function(){
    /* 반응형 말줄임 */
    (function(factory) {
            'use strict';
            if (typeof define === 'function' && define.amd) {
                define(['jquery'], factory);
            } else {
                factory(jQuery);
            }
        }(function($) {
            'use strict';

            var namespace = 'ellipsis',
                span = '<span style="white-space: nowrap;">',
                defaults = {
                    lines: 'auto',
                    ellipClass: 'ellip',
                    responsive: false
                };

            /* Ellipsis() */
            function Ellipsis(el, opts) {
                var base = this,
                    currLine = 0,
                    lines = [],
                    setStartEllipAt,
                    startEllipAt,
                    resizeTimer,
                    currOffset,
                    lineHeight,
                    contHeight,
                    words;

                base.$cont = $(el);
                base.opts = $.extend({}, defaults, opts);

                function create() {
                    base.text = base.$cont.text();
                    base.opts.ellipLineClass = base.opts.ellipClass + '-line';
                    base.$el = $('<span class="' + base.opts.ellipClass + '" />');
                    base.$el.text(base.text);
                    base.$cont.empty().append(base.$el);
                    init();
                }

                /* init() */
                function init() {
                    if (typeof base.opts.lines === 'number' && base.opts.lines < 2) {
                        base.$el.addClass(base.opts.ellipLineClass);
                        return;
                    }
                    contHeight = base.$cont.height();
                    if (base.opts.lines === 'auto' && base.$el.prop('scrollHeight') <= contHeight) {
                        return;
                    }
                    if (!setStartEllipAt) {
                        return;
                    }
                    words = $.trim(base.text).split(/\s+/);
                    base.$el.html(span + words.join('</span> ' + span) + '</span>');
                    base.$el.find('span').each(setStartEllipAt);
                    if (startEllipAt !== null) {
                        updateText(startEllipAt);
                    }
                }

                function updateText(nth) {
                    words[nth] = '<span class="' + base.opts.ellipLineClass + '">' + words[nth];
                    words.push('</span>');
                    base.$el.html(words.join(' '));
                }

                if (base.opts.lines === 'auto') {
                    var setStartEllipByHeight = function(i, word) {
                        var $word = $(word),
                            top = $word.position().top;
                        lineHeight = lineHeight || $word.height();
                        if (top === currOffset) {
                            lines[currLine].push($word);
                        } else {
                            currOffset = top;
                            currLine += 1;
                            lines[currLine] = [$word];
                        }
                        if (top + lineHeight > contHeight) {
                            startEllipAt = i - lines[currLine - 1].length;
                            return false;
                        }
                    };
                    setStartEllipAt = setStartEllipByHeight;
                }

                if (typeof base.opts.lines === 'number' && base.opts.lines > 1) {
                    var setStartEllipByLine = function(i, word) {
                        var $word = $(word),
                            top = $word.position().top;
                        if (top !== currOffset) {
                            currOffset = top;
                            currLine += 1;
                        }
                        if (currLine === base.opts.lines) {
                            startEllipAt = i;
                            return false;
                        }
                    };
                    setStartEllipAt = setStartEllipByLine;
                }

                if (base.opts.responsive) {
                    var resize = function() {
                        lines = [];
                        currLine = 0;
                        currOffset = null;
                        startEllipAt = null;
                        base.$el.html(base.text);
                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(init, 100);
                    };
                    $(window).on('resize.' + namespace, resize);
                }
                create();
            }

            $.fn[namespace] = function(opts) {
                return this.each(function() {
                    try {
                        $(this).data(namespace, (new Ellipsis(this, opts)));
                    } catch (err) {
                        if (window.console) {
                            console.error(namespace + ': ' + err);
                        }
                    }
                });
            };
        })
    );

    $('.Box-respon').ellipsis({
        responsive: true
    });
    /* 반응형 말줄임 끝*/

    $(".list-view-change").click(function(){
        $(window).resize();
    });
});