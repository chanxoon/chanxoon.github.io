/*exported setCookie,getCookie,deleteCookie,throttled,debounced,deleteHtmlTags,getOffsetTop,allTagReplace,existenceValue,regExpReplace,libraryVideoPop,libraryAudioPop,libraryImagePop,mediaTypePopOrLink,clickOpenImgPop,closePop*/
"use strict";
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

/**
* throttle
* @param {number} delay
* @param {function} fn
*/
function throttled(delay, fn) {
    var lastCall = 0;
    return function () {
        var now = (new Date).getTime();
        var args = arguments;
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(args);
    }
}

/**
* debounce
* @param {number} delay
* @param {function} fn
*/
function debounced(delay, fn) {
    var timerId;
    return function () {
        var args = arguments;
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
            fn(args);
            timerId = null;
        }, delay);
    }
}

/**
* 문자열에서 HTML tag 제거
* @param {sting} str
*/
function deleteHtmlTags(str) {
    return str.replace(/(<([^>]+)>)/gi, "");
}

function getOffsetTop(el) {
    /*eslint no-cond-assign: off*/
    var top = 0;
    if (el.offsetParent) {
        do {
            top += el.offsetTop;
        } while (el = el.offsetParent);
        return top;
    }
}

function allTagReplace(str) {
    return str.replace(/(<([^>]+)>)/ig,"");
}

/**
* 대상 변수의 값이 있는지 확인하여 반환
* 대상이 초기화 되지 않았거나 빈 문자열 및 배열 등 출력할 값이 없을 때 false 반환
*
* @param {mixed} val 대상 변수
* @returns {boolean}
*/
function existenceValue(val) {
    if(typeof val != 'undefined' && val != '' && val != null && val != []) {
        return true;
    }
    return false;
}

function libraryVideoPop(this_id, assets_id, asset_type, col_type) {
    var wTop = $(window).scrollTop();
    var url = '/cms/layer/media-layer-popup-nexpoly.php';

    $.ajax({
        url: '/relateve-material-pop?assets_id='+assets_id+'&asset_type='+asset_type+'&ams_type='+col_type,
        type: 'GET',
        async: false,
        success: function(data) {
            var video = JSON.parse(data);

            $('#layer').load(url, {video: video, more: null, click_id: this_id}, function (response, status, xhr) {
                $('#layer').fadeIn(300);
                $('body').addClass('layer');
                $('#container').css('top', -wTop + 'px');

                var first_vod_name = '';
                $.each(video, function (idx, data){
                    if (data['DOCID'] == this_id) {
                        first_vod_name = data['STRE_FILE_NAME'];
                        // 메인 동영상 정보
                        renderLibraryMainMdiaData(data);
                        // 메인 동영상 실행
                        setTimeout(loadPlayer($('.media-box').width(), $('.media-box').height(), first_vod_name), 100);
                    }
                    $('.explanation-body .list').append(createLibraryPopForm(idx, data, this_id));
                });

                layerMediaFn();
            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    })
}

function libraryImagePop(this_id, assets_id, asset_type, col_type) {
    var wTop = $(window).scrollTop();
    var url = '/cms/layer/media-layer-popup.php';

    $.ajax({
        url: '/relateve-material-pop?assets_id='+assets_id+'&asset_type='+asset_type+'&ams_type='+col_type,
        type: 'GET',
        async: false,
        success: function(data) {
            var images = JSON.parse(data);

            //$('#layer').load(url, {images: images, click_id: this_id}, function (response, status, xhr) {
            $('#layer').load(url, function (response, status, xhr) {
                $('#layer').fadeIn(300);
                $('body').addClass('layer');
                $('#container').css('top', -wTop + 'px');

                $.each(images, function(midx, mdata) {
                    // 선택한 데이터를 가져온다.
                    if (mdata.DOCID == this_id) {
                        renderLibraryMainMdiaData(mdata);
                    }
                    $('.explanation-body .list').append(createLibraryPopForm(midx, mdata, this_id));
                });

                layerMediaFn();

            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    })
}

function layerMediaFn() {

    // 팝업 왼쪽 리스트 디자인 스크롤바 적용
    $(".media-explanation .explanation-body .scroll-wrap").mCustomScrollbar({
        theme: "dark-3"
    });
    // 리사이즈 이벤트
    $(window).on('throttle.resize', function (e, data) {
        layerListHeight();
    });

    // 팝업 왼쪽 리스트 브라우저 높이에 맞춰 높이지정
    function layerListHeight() {
        var explanationListH = 0;
        if ($(window).width() > 768) {
            if ($('.media-explanation .explanation-body').find('.layer_tab').length <= 0) {
                explanationListH = $(".media-explanation").height() - $(".media-explanation .explanation-head").height() - 21;

            } else {
                explanationListH = $(".media-explanation").height() - $(".media-explanation .explanation-head").height() - $(".media-explanation .layer_tab").outerHeight() - 21;
            }
        } else {
            explanationListH = "auto"
        }
        $(".media-explanation .explanation-body").height(explanationListH);
    }
    layerListHeight();

    // 더보기, 자막 tab
    function layerTabFn() {
        $(".media-explanation .layer_tab button").on('click', function() {
            $(".media-explanation .layer_tab button").removeClass('on');
            $(this).addClass('on');

            $('.media-explanation .tab').css('display','none');
            $('.media-explanation .tab').eq($(this).index()).css('display','block');
        });
    }
    layerTabFn();

}

function createLibraryPopForm(midx, mdata, click_id) {
    var inner_html = '', active = '';
    if (mdata.DOCID == click_id) {
        active = 'active';
    } else {
        active = '';
    }

    inner_html += '<li class="'+active+'" asset-docid="' + mdata.DOCID + '">';
    inner_html += '<a href="javascript:changeLibraryMainMediaDataInLayerPop(\''+mdata.DOCID+'\',\''+mdata.MEDIA_ID+'\');">';
    inner_html += '<div class="thumb">';
    inner_html += '<img src="'+mdata.MAIN_IMG+'"/>';
    inner_html += '</div>';
    inner_html += '<div class="data-wrap">';
    inner_html += '<div class="data-tit">';
    inner_html += '<p class="classification">';
    if(existenceValue(mdata.SIDO_NAME) || existenceValue(mdata.SIGUNGU_NAME)) {
        inner_html += '<em class="regional">';
        if(existenceValue(mdata.SIDO_NAME) && existenceValue(mdata.SIGUNGU_NAME)) {
            inner_html += mdata.SIDO_NAME+'<span class="sign">&gt;</span>'+mdata.SIGUNGU_NAME;
        } else {
            if(existenceValue(mdata.SIDO_NAME)) inner_html += mdata.SIDO_NAME;
            if(existenceValue(mdata.SIGUNGU_NAME)) inner_html += mdata.SIGUNGU_NAME;
        }
        inner_html += '</em>';
    }
    inner_html += '</p>';
    if(existenceValue(mdata.TITLE)) {
        inner_html += '<em class="tit-txt">'+mdata.TITLE+'</em>';
    }
    inner_html += '</div>';
    inner_html += '<ul class="list-info">';
    if(existenceValue(mdata.FIRST_CATEGORY_NM) || existenceValue(mdata.SECOND_CATEGORY_NM)) {
        inner_html += '<li style="margin-bottom: 0px;"><em>자료유형 : </em>';
        if(existenceValue(mdata.FIRST_CATEGORY_NM) && existenceValue(mdata.SECOND_CATEGORY_NM)) {
            inner_html += mdata.FIRST_CATEGORY_NM + '&gt; ' + mdata.SECOND_CATEGORY_NM;
        } else {
            if(existenceValue(mdata.FIRST_CATEGORY_NM)) inner_html += mdata.FIRST_CATEGORY_NM;
            if(existenceValue(mdata.SECOND_CATEGORY_NM)) inner_html += mdata.SECOND_CATEGORY_NM;
        }
        inner_html += '</li>';
    }
    if(existenceValue(mdata.COUNCIL)) {
        inner_html += '<li style="margin-bottom: 0px;"><em>소장문화원 : </em>'+mdata.COUNCIL+'</li>';
    }
    inner_html += '</ul>';
    inner_html += '</div>';
    inner_html += '</a>';
    inner_html += '</li>';

    return inner_html;
}

function changeLibraryMainMediaDataInLayerPop(click_id, media_id) {
    $('div.explanation-body ul.list li').removeClass('active');
    $('div.explanation-body ul.list > li').each(function(idx, element) {
        if ($(this).attr('asset-docid') == click_id) {
            $(this).addClass('active');

            // 메인내용 변경
            var material = getMaterialByMediaID(media_id);
            renderLibraryMainMdiaData(material[0]);
            if (material[0].ASSET_TYPE == '동영상' || material[0].ASSET_TYPE == '오디오') {
                setTimeout(loadPlayer($('.media-box').width(), $('.media-box').height(), material[0].STRE_FILE_NAME), 100);
            }

            return false;
        }
    });
}

function getMaterialByMediaID(media_id) {
    var material_data = '';
    $.ajax({
        url: '/get-material?media_id='+media_id,
        type: 'GET',
        async:false,
        success: function(data) {
            material_data = JSON.parse(data);
        }
    });
    return material_data;
}

// function renderLibraryMainMdiaData(data) {
//
//     if (data.ASSET_TYPE == '이미지') {
//         renderLibraryMainImage(data);
//     }
//     if (data.ASSET_TYPE == '동영상') {
//         renderLibraryMainVideo(data);
//     }
// }

function renderLibraryMainMdiaData(data) {
    $('div.explanation-head span.btn-label').html(data.ASSET_TYPE);

    if (existenceValue(data.TITLE))
        $('div.explanation-head h1').html(data.TITLE);
    if (existenceValue(data.SUMMARY))
        $('div.explanation-head p.asset-data-desc').html(data.SUMMARY);

    var asset_meta = '';

    if (existenceValue(data.FIRST_CLASS_NM)) {
        asset_meta += '<li><span>주제분야 : </span>';
        asset_meta += '<span>'+data.FIRST_CLASS_NM+'</span>';
        if (existenceValue(data.SECOND_CLASS_NM)) {
            asset_meta += ' &gt; <span>'+data.SECOND_CLASS_NM+'</span>';
        }
        asset_meta += '</li>';
    }

    if (existenceValue(data.FIRST_CATEGORY_NM)) {
        asset_meta += '<li><span>자료유형 : </span>';
        asset_meta += '<span>'+data.FIRST_CATEGORY_NM+'</span>';
        if (existenceValue(data.SECOND_CATEGORY_NM)) {
            asset_meta += ' &gt; <span>'+data.SECOND_CATEGORY_NM+'</span>';
        }
        asset_meta += '</li>';
    }

    if (existenceValue(data.SIDO_NAME) || existenceValue(data.SIGUNGU_NAME)) {
        asset_meta += '<li><span>지역 : </span>';
        asset_meta += '<span>'+data.SIDO_NAME+'</span>';
        if (existenceValue(data.SIDO_NAME) && existenceValue(data.SIGUNGU_NAME)) {
            asset_meta += ' &gt; ';
        }
        if (existenceValue(data.SIGUNGU_NAME))
            asset_meta += '<span>'+data.SIGUNGU_NAME+'</span>';
        asset_meta += '</li>';
    }

    if (existenceValue(data.COUNCIL)) {
        asset_meta += '<li><span>문화원 : </span><span>'+data.COUNCIL+'</span></li>';
    }

    if (existenceValue(data.COPYRIGHT)) {
        asset_meta += '<li><span>출처 : </span><span>'+data.COPYRIGHT+'</span></li>';
    }

    $('div.explanation-head ul.asset-data-meta').html(asset_meta);

    if (data.ASSET_TYPE == '이미지') {
        var img_html = '<img src="'+data.STRE_FILE_NAME+'"/>';
        $('div.media-box div.size-cover').empty();
        $('div.media-box div.size-cover').append(img_html);
    }
    if (data.ASSET_TYPE == '동영상') {

    }
}

// // @fixme
// function createStoryPopForm(midx, mdata) {
//     var inner_html = '';
//     inner_html += '<div class="info-box">';
//     if(existenceValue(mdata.title)) {
//         inner_html += '<h1>'+mdata.title+'</h1>';
//     }
//     inner_html += '<ul class="clearfix">';
//     if(existenceValue(mdata.series) || existenceValue(mdata.first_topic)) {
//         inner_html += '<li><span>자료구분 : </span><span>';
//         if(existenceValue(mdata.series) != 'undefined') {
//             inner_html += mdata.series;
//         }
//         if(existenceValue(mdata.series) && existenceValue(mdata.first_topic)) {
//             inner_html += ' &gt; ';
//         }
//         if(existenceValue(mdata.first_topic) != 'undefined') {
//             inner_html += mdata.first_topic;
//         }
//         inner_html += '</span></li>';
//     }
//     if(existenceValue(mdata.major_category_name) || existenceValue(mdata.minor_category_name)) {
//         inner_html += '<li><span>자료유형 : </span><span>';
//         if(existenceValue(mdata.major_category_name) != 'undefined') {
//             inner_html += mdata.major_category_name;
//         }
//         if(existenceValue(mdata.major_category_name) && existenceValue(mdata.minor_category_name)) {
//             inner_html += ' &gt; ';
//         }
//         if(existenceValue(mdata.minor_category_name) != 'undefined') {
//             inner_html += mdata.minor_category_name;
//         }
//         inner_html += '</span></li>';
//     }
//     if(existenceValue(mdata.city) || existenceValue(mdata.province)) {
//         inner_html += '<li><span>지역 : </span><span>';
//         if(existenceValue(mdata.city) != 'undefined') {
//             inner_html += mdata.city;
//         }
//         if(existenceValue(mdata.city) && existenceValue(mdata.province)) {
//             inner_html += ' &gt; ';
//         }
//         if(existenceValue(mdata.province) != 'undefined') {
//             inner_html += mdata.province;
//         }
//         inner_html += '</span></li>';
//     }
//     inner_html += '</ul>';
//     if(existenceValue(mdata.copyright_owner)) {
//         if(mdata.copyright_owner != '한국문화원연합회') {
//             inner_html += '<p>사진출처:'+mdata.copyright_owner+'</p>';
//         }
//     }
//     inner_html += '</div>';
//
//     return inner_html;
// }


/**
* 팝업 레이어 닫기
* #layer 내용을 비우고 감춤
*/
function closePop() {
    var wTop = $(window).scrollTop();
    $('#layer').empty();
    $('#layer').fadeOut(200);
    $('body').removeClass('layer');
    wTop = parseInt($('#container').css('top')) * -1;
    $('#container').css('top', '0');
    $(window).scrollTop(wTop);
}

function layerPopClose() {
    var wTop = $(window).scrollTop();
    $('#layer').fadeOut(200);
    $('body').removeClass('layer');
    $(window).scrollTop(wTop);
}

/*exported moveTopButton,cardViewTxtShave,dataTxtShave */
"use strict";

$(document).ready(function() {
    // resize, scroll 이벤트 성능 개선을 위한 throttle
    var $window = $(window);
    var throttle = 16;

    // throttle scroll event
    $window.scroll(throttled(throttle, function () {
        $window.triggerHandler('throttle.scroll', {
            top : $window.scrollTop()
        });
    }));

    // throttle resize event
    $window.resize(throttled(throttle, function () {
        $window.triggerHandler('throttle.resize', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }));

    // 640px 이하 모바일 버전으로 보이게 함.
    myViewPort();
    linkIcon();

    //$(window).on('load', function () {
    $(document).ready(function() {  // IE 11에서 동작하지 않아 아래 코드를 사용함.
        $('body').addClass('load-transition');
    });

    // 클릭이벤트
    clickEvent();
    themeSite();
    moveTopButton();

    //스크롤 시 헤더고정 및 스타일 변경
    $(window).scroll(function(){
        var $header=$('#header');
        if($(this).scrollTop() > 0){
            $header.addClass('header-change');
        }else{
            $header.removeClass('header-change');
        }
        $header.css({left: 0 - $(this).scrollLeft()});
    });
    // headerScroll();
    headerSuggestSearchFn();

    // 리사이즈 이벤트
    reSize();

    //header-wrap 자동높이
    autoHeaderwrapHeight();

    // 팝업
    advancedSearchPop();

    //header 검색
    $(document).on('click', '.header-right .search', function () {
        $('#header').toggleClass('active-search');
    });
});

// 리사이즈 이벤트
function reSize() {
    $(window).on('throttle.resize', function () {
        myViewPort();
        autoHeaderwrapHeight();
        linkIcon();
    });
}


// header-visual 높이 해상도별
function autoHeaderwrapHeight() {
    var headerVisualH = 290;
    headerVisualH = ($(window).width() / 1920) * headerVisualH;

    $('.stoy .header-visual, .library .header-visual').height(headerVisualH);
}

//상세검색 팝업
function advancedSearchPop() {
    //닫기버튼 클릭
    $('.pop-advanced-search .btn-close-pop-search').on('click', function() {
        $(this).parents('.popup').fadeOut();
        $('body').removeClass('no-scroll');
    });

    //팝업 열기
    $('#header .btn-search-detail').on('click', function() {
        $('.pop-advanced-search').fadeIn();
        //$('body').addClass('no-scroll');
    });

    var depth2H = 0;
    $('.pop-advanced-search .depth1-check input').each(function() {

        if ($(this).is(":checked")) { // 활성화 line에 높이 잡아주기
            $('.depth1').removeClass('on');
            $(this).parents('.depth1').addClass('on');
            depth2H = $(this).parents('.depth1-check').next('.depth2').outerHeight();
            $(this).parents('.line').siblings('.line').attr('style', '');
            $(this).parents('.line').height(depth2H + 50);
        }

        var tabLabel = $(this).next().text();
        $(this).parent('.depth1-check').append('<button type="button" class="tab-name">' + tabLabel + '</button>');

        $(this).siblings('.tab-name').on('click', function() {
            $('.depth1').removeClass('on');
            $(this).parents('.depth1').addClass('on');
            depth2H = $(this).parents('.depth1-check').next('.depth2').outerHeight();
            $('.line').attr('style', '');
            $(this).parents('.line').height(depth2H + 50);
        });

    });

    $('.pop-advanced-search .depth2 input').change(function() {
        if ($(this).is(':checked')) {
            $(this).parents('.depth2').siblings('.depth1-check').find('input').prop('checked', true);
        } else {
            if ($(this).parents('.depth2').find('input:checked').length <= 0) {
                $(this).parents('.depth2').siblings('.depth1-check').find('input').prop('checked', false);
            }
        }
    });

    // 디자인 스크롤
    scrollWrapHeight();
    $(window).on('throttle.resize', function () {
        scrollWrapHeight();
    });

    // 스크롤 플러그인
    $(".pop-advanced-search .scroll-wrap").mCustomScrollbar({
        theme: "dark-3"
    });

    // 스크롤 영역 높이 설정
    function scrollWrapHeight() {
        $(".pop-advanced-search .scroll-wrap").height(($(window).height() * 0.8) - 124)
    }
}

//모바일에서 링크복사 아이콘 크기 변경
function linkIcon() {
    if ($(window).width() <= 640) {
        $('.link-copy img').attr("src", "/cms/imgs/common/icon/icon-link-mobile.png");
    } else {
        $('.link-copy img').attr("src", "/cms/imgs/common/icon/icon-link.png");
    }
}

// viewport 제어
function myViewPort() {
    if ($(window).width() <= 640) {
        $('#viewport-width').attr("content", "width=640, user-scalable=no");

    } else if ($(window).width() <= 1263 && $(window).width() > 640) {
        $('#viewport-width').attr("content", "width=1263, user-scalable=no");

    } else {
        $('#viewport-width').attr("content", "width=device-width, user-scalable=no");
    }
}

//header 검색 관련
function headerSuggestSearchFn() {

    //검색 input에 포커스
    $('#header .search-input input').focus(function() {
        $('.suggest-wrap').slideDown(0);

        if ($(window).width() <= 768) { // 모바일 자동완성
            $('.suggest-box.auto').show(0);
            $('.suggest-box.auto').addClass('on'); //스타일 변경을 위한 class 추가
        }
    });

    //검색 input에 블러
    $('#header .search-input input').blur(function() {
        if ($(window).width() <= 768) { // 모바일 자동완성
            $('.suggest-box.auto').hide(0);
            $('.suggest-box.auto').removeClass('on'); //스타일 변경을 위한 class 추가
        }

    });


    //검색어 자동완성 끄기 버튼 클릭
    $('.auto-keyword').on('click', function() {
        if ($(this).text() == '자동완성끄기') { // 끄기
            $(this).text('자동완성켜기');
            $('.suggest-box.auto').addClass('off');
            $('.suggest-box.auto ul').css('display', 'none');

        } else { //켜기
            $(this).text('자동완성끄기');
            $('.suggest-box.auto').removeClass('off');
            $('.suggest-box.auto ul').css('display', 'block');
        }
    });


    //최근검색어 끄기 버튼 클릭
    $('.suggest-box .btn-last-off ').on('click', function() {
        if ($(this).text() == '검색어저장 끄기') { // 끄기
            $(this).text('검색어저장 켜기');
            $('.suggest-box.last').addClass('no-save');
            $('.suggest-box.last ul').css('display', 'none');

        } else { //켜기
            $(this).text('검색어저장 끄기');
            $('.suggest-box.last').removeClass('no-save');
            $('.suggest-box.last ul').css('display', 'block');
        }
    });

    //최근검색어 삭제 버튼 클릭
    $('.suggest-box .btn-word-del').on('click', function() {
        $('.suggest-box.last').addClass('del-word');
    });
    // 삭제 완료 버튼 클릭
    $('.suggest-box .btn-complete').on('click', function() {
        $('.suggest-box.last').removeClass('del-word');
    });
    //모바일 검색 tab 클릭
    $('.search-wrap .last').addClass('on');
    $('.search-wrap .suggest-tit h3').on('click', function() {
        $(this).parents('.suggest-box').siblings().removeClass('on');
        $(this).parents('.suggest-box').addClass('on');
    });
}

// 클릭 이벤트
function clickEvent() {
    // // 모바일 메뉴 열기
    // $('#menu').on('click', function() {
    //     $('#header').addClass('mobile-menu');
    // });

    // // 모바일 메뉴 닫기 버튼 클릭 시
    // $('.btn-menu-close').click(function() {
    //     $('#header').removeClass('mobile-menu');
    // });
    // 신규 CMS 코드로 수정
    $(".header-right .menu").click(function() {
        $("#header").addClass("mobile-menu");
        $('.mobile-menu .nav-wrap').stop().animate({right:'0'},300);
    });
    $(".gnb .btn-close").click(function() {
        $("#header").removeClass("mobile-menu");
        $('.nav-wrap').stop().animate({right:'-75%'},300);
    });
}



// footer 사이트 바로가기
function themeSite() {
    // $('.theme-site button').on('click', function () {
    //     if ($(this).hasClass('on')) {
    //         $(this).removeClass('on').next('ul').slideUp();
    //     } else {
    //         $(this).addClass('on').next('ul').slideDown();
    //     }
    // });

    // $('.theme-site li a').on('click', function () {
    //     $('.theme-site > button').removeClass('on');
    //     $(this).parents('.site-list').slideUp();
    // });

    // $(".site-list, .around-info > div").mCustomScrollbar({});

    var selectTarget = $('#footer .select-box select');
    selectTarget.change(function() {
        var select_name = $(this).children('option:selected').text();
        var select_href = $(this).children('option:selected').val();
        $(this).siblings('label').text(select_name);
        $('#footer .btn-link-go').attr('href', select_href);
        $('#footer .btn-link-go').focus();
    });
}

// scroll top button
function moveTopButton() {
    var $window = $(window);
    var $document = $(document);
    var $footer = $('#footer');
    var $scrollBtn = $('#btn-go-top');

    $scrollBtn.on('click', function() {

        $("html, body").stop().animate({
            scrollTop: 0
        }, 600);

        return false;
    });

    // top버튼 x좌표설정
    // function btnXPosition() {
    //     var rightPosition = ($document.width() - 1400) / 2

    //     // X position
    //     if ($document.width() > 1400) {
    //         $scrollBtn.css('right', rightPosition);
    //     } else {
    //         $scrollBtn.css('right', '15px');
    //     }
    // }

    $window.on('throttle.scroll', function(e, data) {
        if (data.top < $document.height() - $window.height() - $footer.outerHeight() + 37) {
            $scrollBtn.addClass('go-top-fix');
        } else {
            $scrollBtn.removeClass('go-top-fix');
            $scrollBtn.attr('style', '');
        }

        if (data.top < ($window.height() / 3)) {
            $scrollBtn.addClass('go-top-hide');
        } else {
            $scrollBtn.removeClass('go-top-hide');
        }
    });

}

// 테마페이지 카드 그리드 말줄임
function cardViewTxtShave() {
    // 카드 제목 말줄임
    dataTxtShave('.card-title', 2);
    // 썸네일 없는 카드 설명 말줄임
    if ($('#container').find('.sort-card-gride-wrap, .card-gride-wrap').length) {
        if ($(window).width() <=640) {
            dataTxtShave('.sort-card-gride-wrap .card-summary, .card-gride-wrap .card-summary', 8);
        } else {
            dataTxtShave('.sort-card-gride-wrap .card-summary, .card-gride-wrap .card-summary', 11);
        }
    }
    // 썸네일 있는 카드 설명 말줄임
    dataTxtShave('.card-thumb + .card-txt .card-summary', 3);
    //
}

// 테마페이지 말줄임
function dataTxtShave(selectTxt, lineCount) {
    var $shaveTxt = $(selectTxt);
    var height;

    if (!$shaveTxt.length) {
        return;
    }

    if(lineCount) {
        var shaveTxtHeight = Math.ceil(parseInt($shaveTxt.css('line-height'), 10));
        height = shaveTxtHeight * lineCount;
    } else {
        height = $shaveTxt.height();
    }

    if( isNaN(height) ) height=14;

    $shaveTxt.shave(height, {
        character: '...'
    });

    if($shaveTxt.data('completedShave') !== true) {
        //$(window).on('load', function () {
        $(document).ready(function() {  // IE 11에서 동작하지 않아 아래 코드를 사용함.
            $shaveTxt.data('completedShave', true);
            dataTxtShave(selectTxt,lineCount);
        });
    }
}

/*exported dimdHoverMenu*/
"use strict";
$(document).ready(function() {
    if(!$('.section-main').length) {
        return;
    }
    mainBgEffect();
    getBodyMinHeight();
    autoMenuHeight();
    removeMainTitleBr();
    centerBgImg();
});

$(window).on('throttle.resize', function () {
    getBodyMinHeight();
    autoMenuHeight();
    removeMainTitleBr();
    centerBgImg();
});

function dimdHoverMenu() {
    $('.visual-menu .menu').on({
        'mouseenter' : function() {
            // $('.visual-menu .menu').removeClass('close-2');
            // $('.visual-menu .menu').removeClass('close-1');
            $('.visual-menu .menu').removeClass('on');
            $(this).siblings('.menu').addClass('close-2');
            $(this).addClass('on');
            differentialOpacity($(this).index());
        },
        'mouseleave' : function() {
            $('.visual-menu .menu').removeClass('close-2');
            $('.visual-menu .menu').removeClass('close-1');
            $('.visual-menu .menu').removeClass('on');
        }
    });
}

function differentialOpacity(idx) {
    idx = idx + 1;

    if ($('.visual-menu .menu').length == 3) { // 메뉴가 3개일때
        // console.log('3개');
        if (idx == 1) {
            $('.visual-menu .menu').eq(2).addClass('close-1');
            $('.visual-menu .menu').eq(3).addClass('close-1');
        } else if (idx == 2) {
            $('.visual-menu .menu').eq(1).addClass('close-1');
        } else if (idx == 3) {
            $('.visual-menu .menu').eq(1).addClass('close-1');
        }
    } else {
        // console.log('3개이상');

        if(idx == 1) {
            $('.visual-menu .menu').eq(2).addClass('close-1');
            $('.visual-menu .menu').eq(4).addClass('close-1');
        } else if(idx == 2) {
            $('.visual-menu .menu').eq(1).addClass('close-1');
            $('.visual-menu .menu').eq(3).addClass('close-1');
            $('.visual-menu .menu').eq(5).addClass('close-1');
        } else if (idx == 3) {
            $('.visual-menu .menu').eq(2).addClass('close-1');
            $('.visual-menu .menu').eq(6).addClass('close-1');
        } else if (idx == 4) {
            $('.visual-menu .menu').eq(1).addClass('close-1');
            $('.visual-menu .menu').eq(5).addClass('close-1');
            $('.visual-menu .menu').eq(7).addClass('close-1');
        } else if (idx == 5) {
            $('.visual-menu .menu').eq(2).addClass('close-1');
            $('.visual-menu .menu').eq(4).addClass('close-1');
            $('.visual-menu .menu').eq(6).addClass('close-1');
            $('.visual-menu .menu').eq(8).addClass('close-1');
        } else if (idx == 6) {
            $('.visual-menu .menu').eq(3).addClass('close-1');
            $('.visual-menu .menu').eq(5).addClass('close-1');
            $('.visual-menu .menu').eq(9).addClass('close-1');
        } else if (idx == 7) {
            $('.visual-menu .menu').eq(4).addClass('close-1');
            $('.visual-menu .menu').eq(8).addClass('close-1');
        } else if (idx == 8) {
            $('.visual-menu .menu').eq(5).addClass('close-1');
            $('.visual-menu .menu').eq(7).addClass('close-1');
        } else if (idx == 9) {
            $('.visual-menu .menu').eq(6).addClass('close-1');
            $('.visual-menu .menu').eq(8).addClass('close-1');
        }

    }
}

// bg 확대 이벤트
function mainBgEffect() {
    /*global Linear*/
    TweenMax.to($('.bg-effect img'), 8, { rotationZ: '0.01deg', ease: Linear.easeNone, scale: 1.1});
}

function centerBgImg() {
    var mL = $('.bg-effect img').width() / 2;
    var mT = $('.bg-effect img').height() / 2;
    $('.bg-effect img').css({ 'margin-left': '-' + mL + 'px', 'margin-top': '-' + mT + 'px' })
}

// min-height 자동
function getBodyMinHeight() {
    $('body').css('min-height',$('.main-con').height() + $('#header').height() + $('#footer').outerHeight());

}

// menu 높이 통일 자동
function autoMenuHeight() {
    var mHarray = [];
    var mH = 0;
    var hMax = 0;
    $('.menu a').each(function() {
        mH = $(this).find('dl').outerHeight();
        if ($(this).find('.shortcuts').is(":visible")) {
            mH += $(this).find('.shortcuts').outerHeight(true);
        }
        mHarray.push(mH);
        hMax = Math.max.apply(null, mHarray);
    });

    $('.menu a').css('min-height',hMax + 50);
}

// 주제 설명글 줄바꿈 제거
function removeMainTitleBr() {
    var pddingCon = $('.contents').css('padding-right');
    pddingCon = parseInt(pddingCon, 10) * 2;
    if ($(window).width() <= $('.main-title p').width() + pddingCon) {
        $('.main-title p').find('br').css('display','none');
    } else {
        $('.main-title p').find('br').css('display', 'block');
    }

}

/*exported createSideDetail,createPavilionPalaceDetail,createMasterDetail,createSlideSwiper,createMediaSwiper,topSliderFetcher,bottomDetailView*/
function createBottomDetail(entry, main_thumn, main_copy) {
    var inner_html = '';

    inner_html += '<div class="inner-wrap">';
    inner_html += '<div class="half-box image-box">';
    inner_html += '<div class="img-wrap">';
    inner_html += '<img src="'+main_thumn+'" alt="'+entry['title']+'">';
    if(main_copy != '한국문화원연합회' && main_copy != '' && typeof main_copy != 'undefined') {
        inner_html += '<p class="source-origin">사진출처: '+main_copy+'</p>';
    }
    inner_html += '</div>';
    inner_html += '</div>';
    inner_html += '<div class="half-box data-box">';
    inner_html += '<dl class="story-data">';
    inner_html += '<dt class="data-tit">'+entry['title']+'</dt>';
    inner_html += '<dd>';
    if(existenceValue(entry['summary'])) {
        inner_html += '<div class="data-txt">'+entry['summary']+'</div>';
    }
    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry['url']+'" target="_blank" class="btn-detail-link">자세히보기</a>';
    inner_html += '</dd>';
    inner_html += '</dl>';

    if(existenceValue(entry['multimedia'])) {
        inner_html += '<div class="media-list">';
        inner_html += '<p class="list-title">멀티미디어 자료 <span>(<em class="count">'+entry['multimedia'].length+'</em>)</span></p>';
        inner_html += '<div class="swiper-container">';
        inner_html += '<div class="swiper-wrapper">';
        $.each(entry['multimedia'], function(supidx2, supdata2) {
            inner_html += '<div class="swiper-slide">';
            inner_html += '<a href="javascript:clickOpenImgPop('+supidx2+', '+"'"+entry['id']+"'"+')">';
            inner_html += '<div class="thumb" data-imageidxset="">';
            inner_html += '<img src="'+supdata2.thumbnail+'" alt="'+supdata2.title+')">';
            inner_html += '</div>';
            inner_html += '<p class="media-caption">';
            if(existenceValue(supdata2.title)) {
                inner_html += supdata2.title;
            }
            if(existenceValue(supdata2.copyright_owner)) {
                if(supdata2.copyright != '한국문화원연합회' && supdata2.copyright != '' && typeof supdata2.copyright != 'undefined') {
                    inner_html += '(사진출처:'+supdata2.copyright+')';
                }
            }
            inner_html += '</p">';
            inner_html += '</a>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
        inner_html += '</div>';
        inner_html += '<div class="swiper-button-prev"></div>';
        inner_html += '<div class="swiper-button-next"></div>';
        inner_html += '</div>';
    }

    if(existenceValue(entry['relateve_material_list'])) {
        inner_html += '<div class="resource-list">';
        inner_html += '<p class="list-title">지방문화원 소장자료 <span>(<em class="count">'+entry['relateve_material_list'].length+'</em>)</span></p>';
        $.each(entry['relateve_material_list'], function(rmidx, eminfo) {
            inner_html += '<div class="list-block clearfix">';
            inner_html += '<div class="block-thumb">';
            if(existenceValue(eminfo.thumbnail)) {
                inner_html += '<div class="thumb">';
                inner_html += '<a href="javascript:mediaTypePopOrLink('+"'"+eminfo.asset_media_type.name+"'"+', '+eminfo.asset_media_type.id+');">';
                inner_html += '<img src="'+eminfo.thumbnail+'" alt="'+eminfo.IMG_ALT+'">';
                inner_html += '</a>';
                inner_html += '</div>';
            }else if(existenceValue(eminfo.thumbnail2)) {
                inner_html += '<div class="thumb">';
                inner_html += '<a href="javascript:mediaTypePopOrLink('+"'"+eminfo.asset_media_type.name+"'"+', '+eminfo.asset_media_type.id+');">';
                inner_html += '<img src="'+eminfo.thumbnail2+'" alt="'+eminfo.IMG_ALT+'">';
                inner_html += '</a>';
                inner_html += '</div>';
            }
            inner_html += '</div>';
            inner_html += '<div class="block-data">';
            // if(existenceValue(eminfo.SIDO_NAME) || existenceValue(eminfo.SIGUNGU_NAME)) {
            //     inner_html += '<span class="local-name">';
            //     if(existenceValue(eminfo.SIDO_NAME)) {
            //         inner_html += eminfo.SIDO_NAME;
            //     }
            //     if(existenceValue(eminfo.SIDO_NAME) && existenceValue(eminfo.SIGUNGU_NAME)) {
            //         inner_html += ' &gt; ';
            //     }
            //     if(existenceValue(eminfo.SIGUNGU_NAME)) {
            //         inner_html += eminfo.SIGUNGU_NAME;
            //     }
            //     inner_html += '</span>';
            // }
            if(existenceValue(eminfo.address)) {
                inner_html += '<span class="local-name">'+ eminfo.address +'</span>';
            }
            inner_html += '<div class="block-name">'+eminfo.title+'</div>';
            inner_html += '<ul class="block-info">';
            if(existenceValue(eminfo.major_category_name) || existenceValue(eminfo.minor_category_name)) {
                inner_html += '<li><em>주제분야:</em>';
                if(existenceValue(eminfo.major_category_name)) {
                    inner_html += eminfo.major_category_name;
                }
                if(existenceValue(eminfo.major_category_name) && existenceValue(eminfo.minor_category_name)) {
                    inner_html += ' &gt; ';
                }
                if(existenceValue(eminfo.minor_category_name)) {
                    inner_html += eminfo.minor_category_name;
                }
                inner_html += '</li>';
            }
            if(existenceValue(eminfo.FIRST_CLASS_NM) || existenceValue(eminfo.SECOND_CLASS_NM)) {
                inner_html += '<li><em>자료유형:</em>';
                if(existenceValue(eminfo.FIRST_CLASS_NM)) {
                    inner_html += eminfo.FIRST_CLASS_NM;
                }
                if(existenceValue(eminfo.FIRST_CLASS_NM) && existenceValue(eminfo.SECOND_CLASS_NM)) {
                    inner_html += ' &gt; ';
                }
                if(existenceValue(eminfo.SECOND_CLASS_NM)) {
                    inner_html += eminfo.SECOND_CLASS_NM;
                }
                inner_html += '</li>';
            }
            if(existenceValue(eminfo.author)) {
                inner_html += '<li><em>저작자:</em>'+eminfo.author+'</li>';
            }
            inner_html += '</ul>';
            inner_html += '</div>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
    }

    inner_html += '</div>';
    inner_html += '</div>';

    return inner_html;
}

function createSideDetail(entry) {
    var inner_html = '';
    inner_html += '<div class="scroll-wrap story-data" id="'+entry['old_cms_id']+'" data-story="'+entry['id']+'">';
    inner_html += '<p class="data-tit">'+allTagReplace(entry['title'])+'</p>';

    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="img-wrap">';
        inner_html += '<img class="'+entry['id']+'-img" data-copyrightset="'+entry['thumbnail_copyright']+'" src="'+entry['thumbnail']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        if(existenceValue(entry['thumbnail_copyright'])){
            if(entry['thumbnail_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    }/* else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="img-wrap">';
        inner_html += '<img class="'+entry['id']+'-img" data-copyrightset="" src="'++entry['replacement']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        inner_html += '</div>';
    }*/

    if(typeof entry['summary'] != 'undefined') {
        inner_html += '<p class="data-txt">'+allTagReplace(entry['summary'])+'</p>';
    }
    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry['url']+'" target="_blank" class="btn-detail-link">자세히보기</a>';

    if(existenceValue(entry['multimedia'])) {
        inner_html += '<div class="media-list">';
        inner_html += '<p class="list-title">멀티미디어 자료 <span>(<em class="count">'+entry['multimedia'].length+'</em>)</span></p>';
        inner_html += '<div class="swiper-container">';
        inner_html += '<div class="swiper-wrapper">';
        $.each(entry['multimedia'], function(supidx2, supdata2) {
            inner_html += '<div class="swiper-slide">';
            inner_html += '<a href="javascript:clickOpenImgPop('+supidx2+', '+"'"+entry['id']+"'"+')">';
            inner_html += '<div class="thumb" data-imageidxset="">';
            inner_html += '<img src="'+supdata2.thumbnail+'" alt="'+supdata2.title+')">';
            inner_html += '</div>';
            inner_html += '<p class="media-caption">';
            if(existenceValue(supdata2.title)) {
                inner_html += supdata2.title;
            }
            if(existenceValue(supdata2.copyright)) {
                if(supdata2.copyright != '한국문화원연합회' && supdata2.copyright != '' && typeof supdata2.copyright != 'undefined') {
                    inner_html += '(사진출처:'+supdata2.copyright+')';
                }
            }
            inner_html += '</p">';
            inner_html += '</a>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
        inner_html += '</div>';
        inner_html += '<div class="swiper-button-prev"></div>';
        inner_html += '<div class="swiper-button-next"></div>';
        inner_html += '</div>';
    }
    if(typeof entry['relateve_material_list'] != 'undefined' && entry['relateve_material_list'] != '' && entry['relateve_material_list'] != []) {
        inner_html += '<div class="resource-list">';
        inner_html += '<p class="list-title">지방문화원 소장자료 <span>(<em class="count">'+entry['relateve_material_list'].length+'</em>)</span></p>';
        $.each(entry['relateve_material_list'], function(rmidx, eminfo) {
            inner_html += '<div class="list-block clearfix">';
            inner_html += '<div class="block-thumb">';
            if(existenceValue(eminfo.MAIN_IMG)) {
                inner_html += '<div class="thumb">';
                inner_html += '<a href="javascript:mediaTypePopOrLink('+"'"+eminfo.ASSET_TYPE+"'"+', '+eminfo.ASSETS_ID+');">';
                inner_html += '<img src="'+/*[TODO]*/'https://cms.nculture.org'+eminfo.MAIN_IMG+'" alt="'+eminfo.IMG_ALT+'">';
                inner_html += '</a>';
                inner_html += '</div>';
            }
            inner_html += '</div>';
            inner_html += '<div class="block-data">';
            if(existenceValue(eminfo.SIDO_NAME) || existenceValue(eminfo.SIGUNGU_NAME)) {
                inner_html += '<span class="local-name">';
                if(existenceValue(eminfo.SIDO_NAME)) {
                    inner_html += eminfo.SIDO_NAME;
                }
                if(existenceValue(eminfo.SIDO_NAME) && existenceValue(eminfo.SIGUNGU_NAME)) {
                    inner_html += ' &gt; ';
                }
                if(existenceValue(eminfo.SIGUNGU_NAME)) {
                    inner_html += eminfo.SIGUNGU_NAME;
                }
                inner_html += '</span>';
            }
            inner_html += '<div class="block-name">'+eminfo.TITLE+'</div>';
            inner_html += '<ul class="block-info">';
            if(existenceValue(eminfo.FIRST_CATEGORY_NM) || existenceValue(eminfo.SECOND_CATEGORY_NM)) {
                inner_html += '<li><em>주제분야:</em>';
                if(existenceValue(eminfo.FIRST_CATEGORY_NM)) {
                    inner_html += eminfo.FIRST_CATEGORY_NM;
                }
                if(existenceValue(eminfo.FIRST_CATEGORY_NM) && existenceValue(eminfo.SECOND_CATEGORY_NM)) {
                    inner_html += ' &gt; ';
                }
                if(existenceValue(eminfo.SECOND_CATEGORY_NM)) {
                    inner_html += eminfo.SECOND_CATEGORY_NM;
                }
                inner_html += '</li>';
            }
            if(existenceValue(eminfo.FIRST_CLASS_NM) || existenceValue(eminfo.SECOND_CLASS_NM)) {
                inner_html += '<li><em>자료유형:</em>';
                if(existenceValue(eminfo.FIRST_CLASS_NM)) {
                    inner_html += eminfo.FIRST_CLASS_NM;
                }
                if(existenceValue(eminfo.FIRST_CLASS_NM) && existenceValue(eminfo.SECOND_CLASS_NM)) {
                    inner_html += ' &gt; ';
                }
                if(existenceValue(eminfo.SECOND_CLASS_NM)) {
                    inner_html += eminfo.SECOND_CLASS_NM;
                }
                inner_html += '</li>';
            }
            if(existenceValue(eminfo.AUTHOR)) {
                inner_html += '<li><em>저작자:</em>'+eminfo.AUTHOR+'</li>';
            }
            inner_html += '</ul>';
            inner_html += '</div>';
            inner_html += '</div>';
        });
    }
    inner_html += '</div>';

    return inner_html;
}

function createPavilionPalaceDetail(entry, img_idx, main_thumn, main_copy) {
    var inner_html = '';

    inner_html += '<div class="inner-wrap">';
    inner_html += '<div class="half-box image-box">';
    inner_html += '<div class="img-wrap">';

    if (img_idx != null) {
        inner_html += '<img src="/cms/imgs/pavilion/img/img-palace-position' + img_idx + '.png" alt="' + entry['title'] + ' 약도">';
    } else {
        inner_html += '<img src="'+main_thumn+'" alt="'+entry['title']+'">';
        if(main_copy != '한국문화원연합회' && main_copy != '' && typeof main_copy != 'undefined') {
            inner_html += '<p class="source-origin">사진출처: '+main_copy+'</p>';
        }
    }
    inner_html += '</div>';
    inner_html += '</div>';
    inner_html += '<div class="half-box data-box">';
    inner_html += '<dl class="story-data">';
    inner_html += '<dt class="data-tit">'+entry['title']+'</dt>';
    inner_html += '<dd>';
    if(existenceValue(entry['summary'])) {
        inner_html += '<div class="data-txt">'+entry['summary']+'</div>';
    }
    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry['url']+'" target="_blank" class="btn-detail-link">자세히보기</a>';
    inner_html += '</dd>';
    inner_html += '</dl>';

    if(existenceValue(entry['multimedia'])) {
        if (img_idx != null) {
            inner_html += '<div class="media-list media-list-palace">';
        } else {
            inner_html += '<div class="media-list media-list-gwana">';
        }
        inner_html += '<p class="list-title">멀티미디어 자료 <span>(<em class="count">'+entry['multimedia'].length+'</em>)</span></p>';
        inner_html += '<div class="swiper-container">';
        inner_html += '<div class="swiper-wrapper">';
        $.each(entry['multimedia'], function(supidx2, supdata2) {
            inner_html += '<div class="swiper-slide">';
            inner_html += '<a href="javascript:clickOpenImgPop('+supidx2+', '+"'"+entry['id']+"'"+')">';
            inner_html += '<div class="thumb" data-imageidxset="">';
            inner_html += '<img src="'+supdata2.thumbnail+'" alt="'+supdata2.title+'">';
            inner_html += '</div>';
            inner_html += '<p class="media-caption">';
            if(existenceValue(supdata2.title)) {
                inner_html += supdata2.title;
            }
            if(existenceValue(supdata2.copyright)) {
                if(supdata2.copyright != '한국문화원연합회' && supdata2.copyright != '' && typeof supdata2.copyright != 'undefined') {
                    inner_html += '(사진출처:'+supdata2.copyright+')';
                }
            }
            inner_html += '</p">';
            inner_html += '</a>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
        inner_html += '</div>';
        inner_html += '<div class="swiper-button-prev"></div>';
        inner_html += '<div class="swiper-button-next"></div>';
        inner_html += '</div>';
    }

    if(typeof entry['relateve_material_list'] != 'undefined' && entry['relateve_material_list'] != '' && entry['relateve_material_list'] != []) {
        inner_html += '<div class="resource-list">';
        inner_html += '<p class="list-title">지방문화원 소장자료 <span>(<em class="count">'+entry['relateve_material_list'].length+'</em>)</span></p>';
        $.each(entry['relateve_material_list'], function(rmidx, eminfo) {
            inner_html += '<div class="list-block clearfix">';
            inner_html += '<div class="block-thumb">';
            if(eminfo.MAIN_IMG != '') {
                inner_html += '<div class="thumb">';
                inner_html += '<a href="javascript:mediaTypePopOrLink('+"'"+eminfo.ASSET_TYPE+"'"+', '+eminfo.ASSETS_ID+');">';
                inner_html += '<img src="'+eminfo.MAIN_IMG+'" alt="'+eminfo.IMG_ALT+'">';
                inner_html += '</a>';
                inner_html += '</div>';
            }
            inner_html += '</div>';
            inner_html += '<div class="block-data">';
            if(eminfo.SIDO_NAME != '' || eminfo.SIGUNGU_NAME != '') {
                inner_html += '<span class="local-name">';
                if(eminfo.SIDO_NAME != '') {
                    inner_html += eminfo.SIDO_NAME;
                }
                if(eminfo.SIDO_NAME != '' && eminfo.SIGUNGU_NAME != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SIGUNGU_NAME != '') {
                    inner_html += eminfo.SIGUNGU_NAME;
                }
                inner_html += '</span>';
            }
            inner_html += '<div class="block-name">'+eminfo.TITLE+'</div>';
            inner_html += '<ul class="block-info">';
            if(eminfo.FIRST_CATEGORY_NM != '' || eminfo.SECOND_CATEGORY_NM != '') {
                inner_html += '<li><em>주제분야:</em>';
                if(eminfo.FIRST_CATEGORY_NM != '') {
                    inner_html += eminfo.FIRST_CATEGORY_NM;
                }
                if(eminfo.FIRST_CATEGORY_NM != '' && eminfo.SECOND_CATEGORY_NM != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SECOND_CATEGORY_NM != '') {
                    inner_html += eminfo.SECOND_CATEGORY_NM;
                }
                inner_html += '</li>';
            }
            if(eminfo.FIRST_CLASS_NM != '' || eminfo.SECOND_CLASS_NM != '') {
                inner_html += '<li><em>자료유형:</em>';
                if(eminfo.FIRST_CLASS_NM != '') {
                    inner_html += eminfo.FIRST_CLASS_NM;
                }
                if(eminfo.FIRST_CLASS_NM != '' && eminfo.SECOND_CLASS_NM != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SECOND_CLASS_NM != '') {
                    inner_html += eminfo.SECOND_CLASS_NM;
                }
                inner_html += '</li>';
            }
            if(eminfo.AUTHOR != '') {
                inner_html += '<li><em>저작자:</em>'+eminfo.AUTHOR+'</li>';
            }
            inner_html += '</ul>';
            inner_html += '</div>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
    }

    inner_html += '</div>';
    inner_html += '</div>';
    return inner_html;
}

function createMasterDetail(entry, main_thumn, main_copy) {
    var inner_html = '';
    inner_html += '<button type="button" class="m-use btn-close">닫기</button>';
    inner_html += '<div class="img-box">';
    if(existenceValue(main_thumn)) {
        inner_html += '<img src="'+main_thumn+'" alt="'+entry['title']+'">';
        if(main_copy != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+main_copy+'</p>';
        }
    }/* else if(existenceValue(entry['replacement'])) {
        inner_html += '<img src="'+entry['replacement']+'" alt="'+entry['title']+'">';
    }*/
    inner_html += '</div>';
    inner_html += '<p class="detail-box-title">'+allTagReplace(entry['title'])+'</p>';
    if(typeof entry['summary'] != 'undefined') {
        inner_html += '<p class="detail-box-summary">'+allTagReplace(entry['summary'])+'</p>';
    }
    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry['url']+'" target="_blank" class="btn-detail-link">자세히보기</a>';

    if(existenceValue(main_thumn) && existenceValue(entry['multimedia'])) {
        inner_html += '<div class="media-list">';
        inner_html += '<p class="list-title">멀티미디어 자료 <span>(<em class="count">'+entry['multimedia'].length+'</em>)</span></p>';
        inner_html += '<div class="swiper-container">';
        inner_html += '<div class="swiper-wrapper">';
        $.each(entry['multimedia'], function(supidx2, supdata2) {
            inner_html += '<div class="swiper-slide">';
            inner_html += '<a href="javascript:clickOpenImgPop('+supidx2+', '+"'"+entry['id']+"'"+')">';
            inner_html += '<div class="thumb" data-imageidxset="">';
            inner_html += '<img src="'+supdata2.thumbnail+'" alt="'+supdata2.title+')">';
            inner_html += '</div>';
            inner_html += '<p class="media-caption">';
            if(existenceValue(supdata2.title)) {
                inner_html += supdata2.title;
            }
            if(existenceValue(supdata2.copyright)) {
                if(supdata2.copyright != '한국문화원연합회' && supdata2.copyright != '' && typeof supdata2.copyright != 'undefined') {
                    inner_html += '(사진출처:'+supdata2.copyright+')';
                }
            }
            inner_html += '</p">';
            inner_html += '</a>';
            inner_html += '</div>';
        });

        inner_html += '</div>';
        inner_html += '</div>';
        inner_html += '<div class="swiper-button-prev"></div>';
        inner_html += '<div class="swiper-button-next"></div>';
        inner_html += '</div>';
    }

    if(typeof entry['relateve_material_list'] != 'undefined' && entry['relateve_material_list'] != '' && entry['relateve_material_list'] != []) {
        inner_html += '<div class="resource-list">';
        inner_html += '<p class="list-title">지방문화원 소장자료 <span>(<em class="count">'+entry['relateve_material_list'].length+'</em>)</span></p>';
        $.each(entry['relateve_material_list'], function(rmidx, eminfo) {
            inner_html += '<div class="list-block clearfix">';
            inner_html += '<div class="block-thumb">';
            if(eminfo.MAIN_IMG != '') {
                inner_html += '<div class="thumb">';
                inner_html += '<a href="javascript:mediaTypePopOrLink('+"'"+eminfo.media_type_name+"'"+', '+eminfo.media_type_name+');">';
                inner_html += '<img src="'+eminfo.thumbnail+'" alt="'+eminfo.title+'">';
                inner_html += '</a>';
                inner_html += '</div>';
            }
            inner_html += '</div>';
            inner_html += '<div class="block-data">';
            if(eminfo.SIDO_NAME != '' || eminfo.SIGUNGU_NAME != '') {
                inner_html += '<span class="local-name">';
                if(eminfo.SIDO_NAME != '') {
                    inner_html += eminfo.SIDO_NAME;
                }
                if(eminfo.SIDO_NAME != '' && eminfo.SIGUNGU_NAME != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SIGUNGU_NAME != '') {
                    inner_html += eminfo.SIGUNGU_NAME;
                }
                inner_html += '</span>';
            }
            inner_html += '<div class="block-name">'+eminfo.TITLE+'</div>';
            inner_html += '<ul class="block-info">';
            if(eminfo.FIRST_CATEGORY_NM != '' || eminfo.SECOND_CATEGORY_NM != '') {
                inner_html += '<li><em>주제분야:</em>';
                if(eminfo.FIRST_CATEGORY_NM != '') {
                    inner_html += eminfo.FIRST_CATEGORY_NM;
                }
                if(eminfo.FIRST_CATEGORY_NM != '' && eminfo.SECOND_CATEGORY_NM != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SECOND_CATEGORY_NM != '') {
                    inner_html += eminfo.SECOND_CATEGORY_NM;
                }
                inner_html += '</li>';
            }
            if(eminfo.FIRST_CLASS_NM != '' || eminfo.SECOND_CLASS_NM != '') {
                inner_html += '<li><em>자료유형:</em>';
                if(eminfo.FIRST_CLASS_NM != '') {
                    inner_html += eminfo.FIRST_CLASS_NM;
                }
                if(eminfo.FIRST_CLASS_NM != '' && eminfo.SECOND_CLASS_NM != '') {
                    inner_html += ' &gt; ';
                }
                if(eminfo.SECOND_CLASS_NM != '') {
                    inner_html += eminfo.SECOND_CLASS_NM;
                }
                inner_html += '</li>';
            }
            if(eminfo.AUTHOR != '') {
                inner_html += '<li><em>저작자:</em>'+eminfo.AUTHOR+'</li>';
            }
            inner_html += '</ul>';
            inner_html += '</div>';
            inner_html += '</div>';
        });
        inner_html += '</div>';
    }

    return inner_html;
}

var createSlideSwiper = function () {
    return new Swiper('.slide-list-box .swiper-container', {
        limitRotation: false,
        slidesPerView: 7,
        centerInsufficientSlides: true,
        spaceBetween: 28,
        navigation: {
            nextEl: '.slide-list-box .swiper-button-next',
            prevEl: '.slide-list-box .swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 640px
            640: {
                slidesPerView: 2,
            },
        }
    });
};

var createMediaSwiper = function (swiper) {
    try {
        swiper && swiper.destroy();
    } catch (err) {} // eslint-disable-line
    
    return new Swiper('.media-list .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: '.media-list .swiper-button-next',
            prevEl: '.media-list .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
        }
    });
};

var topSliderFetcher = {
    cache: {
        ajax: null,
        data: null
    },

    fetch: function (url, callback) {
        var $slideListBox = $('.slide-list-box');

        if (!this.cache.ajax) {
            this.cache.ajax = $.ajax({
                url: url,
                type: 'GET',
                context: this,
                beforeSend: function () {
                    $slideListBox.find('.integrated-list-loading').show();
                }
            });
        }

        this.cache.ajax.done(function (resp) {
            var entries = this.cache.data || (this.cache.data = resp.list_data.list);

            $slideListBox.find('.integrated-list-loading').hide();

            callback(entries);
        });

        this.cache.ajax.fail(function (request, status, error) {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        });
    }
};

var bottomDetailView = {
    ajax_cache: {},
    entries: {},

    render: function (id, detail_box, callback) {
        // var main_thumn = $('.'+id+'-img').attr('src');
        // var main_copy = $('.'+id+'-img').data('copyrightset');
        var main_thumn = $('.img-'+id).attr('src');
        var main_copy = $('.img-'+id).data('copyrightset');

        $('.detail-input-btn').removeClass('selected-list');
        $('[data-detailonset="'+id+'"]').addClass('selected-list');

        if (!this.ajax_cache[id]) {
            this.ajax_cache[id] = $.ajax({
                // url: '/cms/api/themes-page-detail-bottom/'+id,
                // data: {id: id},
                url: '/api/v1/story/'+id,
                type: 'get',
                context: this,
                beforeSend: function () {
                    $('#'+detail_box+'_detail').empty();
                    $('.contents-detail-wrap .integrated-list-loading').show();
                }
            });
        }

        this.ajax_cache[id].done(function (data) {
            var entry = data.content;
            $.ajax({
                url: '/api/v1/story/'+ id +'/multimedia/related',
                type: 'GET',
                success: function(resp2) {
                    entry.multimedia = resp2.media_list;
                    
                    $('.contents-detail-wrap .integrated-list-loading').hide();

                    $('#'+detail_box+'_detail').empty().append(createBottomDetail(entry, main_thumn, main_copy));
        
                    dataTxtShave('.story-data .data-txt', 4);
        
                    callback && callback();
                }
            });
        });

        this.ajax_cache[id].fail(function (request, status, error) {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        });
    },

    render4entries: function (id, detail_box, callback) {
        var main_thumn = $('.img-'+id).attr('src');
        var main_copy = $('.img-'+id).data('copyrightset');
        var entryIdx = $('.img-'+id).data('idx');

        $('.detail-input-btn').removeClass('selected-list');
        $('[data-detailonset="'+id+'"]').addClass('selected-list');

        if (!this.ajax_cache[id]) {
            this.ajax_cache[id] = $.ajax({
                url: '/api/v1/story/'+ id +'/multimedia/related',
                type: 'get',
                context: this,
                beforeSend: function () {
                    $('#'+detail_box+'_detail').empty();
                    $('.contents-detail-wrap .integrated-list-loading').show();
                }
            });
        }

        this.ajax_cache[id].done(function (resp2) {
            var entry = this.entries['all'][entryIdx];

            entry.multimedia = resp2.media_list;
            
            $('.contents-detail-wrap .integrated-list-loading').hide();

            $('#'+detail_box+'_detail').empty().append(createBottomDetail(entry, main_thumn, main_copy));

            dataTxtShave('.story-data .data-txt', 4);

            callback && callback();
        });

        this.ajax_cache[id].fail(function (request, status, error) {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        });
    }
};

// 신형 미디어 모달
function clickOpenImgPop(idx, story_id) {
    window.VueBus.$emit('intro-open-modal-popup', story_id, idx);
}
/*exported createMapAndCardGall,cardGrideEvents*/
function createCardGall(entry) {
    var inner_html = '<li class="card">';
    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry['url']+'" target="_blank" title="'+entry['title']+'">';
    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="card-thumb">';
        inner_html += '<img class="'+entry['old_cms_id']+'-img" data-copyrightset="'+entry['thumbnail_copyright']+'" src="'+entry['thumbnail']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        if(existenceValue(entry['thumbnail_copyright'])) {
            if(entry['thumbnail_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    }/* [AMS2-345]
    else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="card-thumb">';
        inner_html += '<img class="'+entry['old_cms_id']+'-img" data-copyrightset="" src="'+entry['replacement']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        if(existenceValue(entry['replacement_copyright'])) {
            if(entry['replacement_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['replacement_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    }*/
    inner_html += '<div class="card-txt">';
    if(existenceValue(entry['simplify_region']) || existenceValue(entry['sigungu'])) {
        inner_html += '<p class="card-cap">';
        if(existenceValue(entry['simplify_region'])) {
            inner_html += entry['simplify_region'];
        }
        if(existenceValue(entry['simplify_region']) && existenceValue(entry['sigungu'])) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry['sigungu'])) {
            inner_html += entry['sigungu'];
        }
        inner_html += '</p>';
    }
    inner_html += '<p class="card-title">'+allTagReplace(entry['title'])+'</p>';
    if(existenceValue(entry['summary'])) {
        inner_html += '<p class="card-summary ellipsis">'+allTagReplace(entry['summary'])+'</p>';
    }
    inner_html += '</div>';
    inner_html += '</a>';
    inner_html += '</li>';

    return inner_html;
}

function createMapAndCardGall(entry) {
    var inner_html = '<li id="'+entry['old_cms_id']+'" data-story="'+entry['id']+'" class="card">';
    inner_html += '<a href="javascript:void(0);" class="click-map-card" title="'+entry['title']+'" url-data="'+entry['url']+'" onClick="return false;">';
    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="card-thumb">';
        inner_html += '<img class="'+entry['old_cms_id']+'-img img-'+entry['id']+'" data-copyrightset="'+entry['thumbnail_copyright']+'" src="'+entry['thumbnail']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        if(existenceValue(entry['thumbnail_copyright'])) {
            if(entry['thumbnail_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    } /* else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="card-thumb">';
        inner_html += '<img class="'+entry['old_cms_id']+'-img" data-copyrightset="" src="'+entry['replacement']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
        if(existenceValue(entry['replacement_copyright'])) {
            if(entry['replacement_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['replacement_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    }*/
    inner_html += '<div class="card-txt">';
    if(existenceValue(entry['simplify_region']) || existenceValue(entry['sigungu'])) {
        inner_html += '<p class="card-cap">';
        if(existenceValue(entry['simplify_region'])) {
            inner_html += entry['simplify_region'];
        }
        if(existenceValue(entry['simplify_region']) && existenceValue(entry['sigungu'])) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry['sigungu'])) {
            inner_html += entry['sigungu'];
        }
        inner_html += '</p>';
    }
    inner_html += '<p class="card-title">'+allTagReplace(entry['title'])+'</p>';
    if(existenceValue(entry['summary'])) {
        inner_html += '<p class="card-summary">'+allTagReplace(entry['summary'])+'</p>';
    }
    inner_html += '</div>';
    inner_html += '</a>';
    inner_html += '</li>';

    return inner_html;
}

function cardGrideEvents() {
    function cardRelocation() {
        if ($(window).width() <= 640) {
            $('.card-grid').masonry({
                itemSelector: '.card',
                columnWidth: '.card',
                gutter: 10,
                isFitWidth: true,
            });
        } else {
            $('.card-grid').masonry({
                itemSelector: '.card',
                columnWidth: '.card',
                gutter: 40,
                isFitWidth: true,
            });
        }
    }
    cardRelocation();
    $(window).on('throttle.resize', function () {
        cardRelocation();
    });
}

window.views = window.views || {};

window.views.cardGalleryView = {
    url: null,
    from: '', // 기존 api 주소
    entryData: {},
    initData: 'all',
    cache: {
        ajax: null,
        data: null
    },
    render: function (scope, callback) {
        var $card_grid_box = $('.card-grid-box');
        var $card_grid = $card_grid_box.find('[data-scope="'+scope+'"]');

        if (!this.cache.ajax) {
            this.cache.ajax = $.ajax({
                url: this.url,
                type: 'GET',
                context: this,
                beforeSend: function () {
                    $('.integrated-list-loading').show();
                }
            });
        }

        this.cache.ajax.done(function (resp) {
            if(resp.hasOwnProperty('list_data'))
                this.entryData[this.initData] = resp.list_data.list;
            var entries = this.cache.data || (this.cache.data = this.entryData);
            // console.log(entries);
            
            $('.integrated-list-loading').hide();
            $card_grid_box.find('.card-grid').hide();
            $card_grid.show();
            $('#scope-label').text($('#scope-select').find('option[value="' + scope + '"]').text());

            if ($card_grid.children().length === 0) {
                $.each(entries[scope], function(eidx, entry) {
                    $card_grid.append(createCardGall(entry));
                });
            }

            if (entries[scope].length > 0) {
                this.layoutCards($card_grid);
            }

            cardViewTxtShave();

            callback && callback();
        });
    },
    renderWithoutAjax: function (scope, callback) {
        var $card_grid_box = $('.card-grid-box');
        var $card_grid = $card_grid_box.find('[data-scope="'+scope+'"]');

        var entries = this.entryData;
        // console.log(entries);
        
        $('.integrated-list-loading').hide();
        $card_grid_box.find('.card-grid').hide();
        $card_grid.show();
        $('#scope-label').text($('#scope-select').find('option[value="' + scope + '"]').text());

        if ($card_grid.children().length === 0) {
            $.each(entries[scope], function(eidx, entry) {
                $card_grid.append(createCardGall(entry));
            });
        }

        if (entries[scope].length > 0) {
            this.layoutCards($card_grid);
        }

        cardViewTxtShave();

        callback && callback();
    },
    layoutCards: function ($grid) {
        $grid.masonry({
            itemSelector: '.card',
            columnWidth: '.card',
            gutter: $(window).width() <= 640 ? 10 : 40,
            isFitWidth: true,
        });

        cardViewTxtShave();
    }
};

/*exported CreateTimeLineList*/
function CreateTimeLineList(entry) {
    var inner_html = '';
    var entry_title = allTagReplace(entry.title);

    inner_html += '<li class="timeline-block">';
    inner_html += '<div class="block-bullet"></div>';
    inner_html += '<div class="block-wrap">';
    inner_html += '<p class="block-title">'+entry_title+'</p>';

    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="img-cover">';
        /* [AMS2-345]
        if(existenceValue(entry['thumbnail']['origin'])) {
            inner_html += '<img src="'+entry['thumbnail']['origin']+'" alt="'+entry_title+'" title="'+entry_title+'">';
        } */
        inner_html += '<img src="'+entry['thumbnail']+'" alt="'+entry_title+'" title="'+entry_title+'">';
        if(existenceValue(entry['thumbnail_copyright'])) {
            if(entry['thumbnail_copyright'] != '한국문화원연합회') {
                inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
            }
        }
        inner_html += '</div>';
    } /* [AMS2-345]
        else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="img-cover">';
        inner_html += '<img class="'+entry['id']+'-img" data-copyrightset="" src="'+entry['replacement']+'" alt="'+entry_title+'" title="'+entry_title+'">';
        inner_html += '</div>';
    } */

    if(existenceValue(entry['summary'])) {
        inner_html += '<p class="block-summary">'+allTagReplace(entry['summary'])+'</p>';
    }

    entry.url = '/'+ THEME +'/story/'+ entry.id;
    inner_html += '<a href="'+entry.url+'" class="btn-detail-link" target="_blank" title="'+entry_title+' 새창">자세히보기</a>';
    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

/*exported createTopList,createTopTabList*/
function createTopList(entry, index) {
    var inner_html = '';

    inner_html += '<div class="swiper-slide detail-input-btn" data-detailonset="'+entry['old_cms_id']+'" data-story="'+entry['id']+'">';
    inner_html += '<a href="javascript:void(0);" class="click-detail-create" title="'+entry['title']+'">';
    inner_html += '<div class="thumb-img">';
    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<img class="'+entry['old_cms_id']+'-img img-'+entry['id']+'" data-copyrightset="'+entry['thumbnail_copyright']+'" src="'
            +entry['thumbnail']+'" alt="'+entry['title']+'" title="'+entry['title']+'" data-idx="'+index+'">';
        if(entry['thumbnail_copyright'] != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
        }
    }
    /* [AMS2-345]
    else if(existenceValue(entry['replacement'])) {
        inner_html += '<img class="'+entry['old_cms_id']+'-img" data-copyrightset="" src="'+entry['replacement']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
    }*/
    inner_html += '</div>';
    inner_html += '<div class="data-title">'+entry['title']+'</div>';
    inner_html += '</a>';
    inner_html += '</div>';

    return inner_html;
}

function createTopTabList(entry, tab_type, index) {
    var inner_html = '';

    inner_html += '<div class="swiper-slide detail-input-btn" data-'+tab_type+'detailonset="'+entry['old_cms_id']+'" data-story="'+entry['id']+'">';
    inner_html += '<a href="javascript:void(0);" class="click-detail-create" title="'+entry['title']+'">';
    inner_html += '<div class="thumb-img">';
    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<img class="'+entry['old_cms_id']+'-img img-'+entry['id']+'" data-copyrightset="'+entry['thumbnail_copyright']+'" src="'
            +entry['thumbnail']+'" alt="'+entry['title']+'" title="'+entry['title']+'" data-idx="'+index+'">';
        if(entry['thumbnail_copyright'] != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
        }
    }/* else if(existenceValue(entry['replacement'])) {
        inner_html += '<img class="'+entry['old_cms_id']+'-img" data-copyrightset="" src="'+entry['replacement']+'" alt="'+entry['title']+'" title="'+entry['title']+'">';
    }*/
    inner_html += '</div>';
    inner_html += '<div class="data-title">'+entry['title']+'</div>';
    inner_html += '</a>';
    inner_html += '</div>';

    return inner_html;
}

/*exported moduleCoverPage*/
"use strict";

var moduleCoverPage = function () {
    var self = this;
    this.options = {
        visualTabsHeight: 172,
        visualTabsPosition: 110
    }
    this.enableScrollEvent = true;
    this.$pageHeader = null;
    this.$visualTabsWrap = null;
    this.$pageTitleCover = null;

    this.init = function (options) {
        $.extend(self.options, options || {});

        $(function documentReady () {
            // .section--title-cover가 아니면 기능을 수행하지 않음
            if (!$('.section--title-cover').length) return;

            self.$pageTitleCover = $('.page-title-cover');
            self.$pageHeader = $('.page-header');
            self.$visualTabsWrap = $('.visual-tabs-wrap').not('.no-scroll');
            var coverData = self.$pageTitleCover.data();

            if(typeof coverData !== 'undefined' && coverData.fixedHeight) {
                self.options.visualTabsHeight = coverData.fixedHeight;
            }

            if (self.$pageTitleCover.length) {
                self.initCover();
            }

            if (self.$visualTabsWrap.length) {
                self.initVisualTabs();
            }

            //$(window).on('load', function () {
            $(document).ready(function() {  // IE 11에서 동작하지 않아 아래 코드를 사용함.
                // 로드 시 transition
                $('html, body').animate({scrollTop: 0}, 100);
                $('html, body').addClass('load-transition');
            });

            var $btnMobileTab = $('.btn-mobile-tab');
            var $tabConBox = $('.tab-con-box');

            // tab menu position
            $(window).on('throttle.scroll', function (e, data) {
                var currentSection = 0;
                var visibleSection = 0;
                // 스크롤 시 con-chapter transition
                $('.con-chapter:visible').each(function (idx) {
                    // var positionEnd = positionStart + $(this).outerHeight();
                    if (data.top >= $(this).offset().top - (self.$pageTitleCover.height() / 1.0)) {
                        visibleSection = idx;
                    }
                    if (data.top >= $(this).offset().top - $('.visual-tabs-wrap.fixed').outerHeight()) {
                        currentSection = idx
                    }
                });

                if (typeof visibleSection !== 'undefined') {
                    // transition
                    $('.con-chapter:visible:eq(' + visibleSection + ')').addClass('scroll-transition');
                }

                // 현재 섹션이 보여질 때 tab 변경
                if (typeof currentSection !== 'undefined' && !$tabConBox.length) {
                    $('.pc-tab .btn-tab.on').removeClass('on');
                    $('.pc-tab .btn-tab:eq(' + currentSection + ')').addClass('on');
                    // 모바일 탭
                    $btnMobileTab.find('label').text($btnMobileTab.find('select option:eq(' + currentSection + ')').text());
                }
            });
        });
    }

    this.initCover = function () {
        var stateCoverOpacity = 'visible';
        $(window).on('throttle.scroll', function (e, data) {
            // title fade out
            var coverOpacity = 1 - (data.top / (self.$pageTitleCover.height() / 2)); // 타이틀커버 투명도
            if ((stateCoverOpacity === 'visible' && coverOpacity < 1) || (stateCoverOpacity === 'hidden' && coverOpacity > 0)) {
                if (coverOpacity <= 0) {
                    coverOpacity = 0;
                    stateCoverOpacity = 'hidden';
                } else if (coverOpacity >= 1) {
                    coverOpacity = 1;
                    stateCoverOpacity = 'visible';
                }
                $('.page-header, .btn-scroll-action').css('opacity', coverOpacity);
            }
        })
        self.$pageTitleCover.find('.btn-scroll-action').on('click', function () {
            self.coverScrollContent();
        });
    }

    this.initVisualTabs = function () {
        //$(window).on('load', function () {
        $(document).ready(function() {  // IE 11에서 동작하지 않아 아래 코드를 사용함.
            setTimeout(function () {
                self.wrapPosition();
            }, 800);
        });

        // resize
        $(window).on('throttle.resize', function () {
            // visualTabsWrap이 $pageHeader를 따라 움직이도록 함
            self.$visualTabsWrap.css('top', self.$pageHeader.offset().top - $(window).scrollTop() + self.$pageHeader.height() + 80);
        });

        $(window).on('throttle.scroll', function (e, data) {
            if (!self.enableScrollEvent) return;

            // tab menu fixed
            if (data.top >= self.options.visualTabsPosition) {
                self.toggleFixed(true);
            } else {
                self.toggleFixed(false);
            }
            // tab menu bg change
            if (data.top >= self.$pageTitleCover.height() - self.options.visualTabsHeight) {
                self.toggleBg(true);
            } else {
                self.toggleBg(false);
            }
            self.$visualTabsWrap.css('left', '-' + $(window).scrollLeft() + 'px');
        });

        self.$visualTabsWrap.find('.visual-tabs .pc-tab button, .visual-tabs .tab-box a').on({
            click : function(event) {
                event.preventDefault();
                var thisTab = $(this).parent('.tab-box');
                var thisIdx = $(this).index();
                if(thisTab.length) {window
                    thisIdx = thisTab.index();
                }
                $(this).addClass('on').removeClass('off');
                $(this).siblings('button').removeClass('on').addClass('off');
                $(this).closest('.tab-box').siblings().removeClass('on').addClass('off');
                $(this).closest('.tab-box').removeClass('off').addClass('on');
                $('.tab-contents-wrap .tab-con-box').removeClass('on');
                $('.tab-contents-wrap .tab-con-box').eq(thisIdx).addClass('on');
                $('.con-chapter').removeClass('scroll-transition');
                $('.con-chapter:first-child').addClass('scroll-transition');
                self.enableScrollEvent = false;
                self.toggleFixed(true);

                var navOuterHeight = $('.themes-sub-depth-nav').outerHeight() ;
                if( isNaN(navOuterHeight) ) navOuterHeight = 0;
                
                $('html, body').stop().animate({
                    scrollTop: self.$pageTitleCover.height() - $('.visual-tabs-wrap.fixed').outerHeight() - navOuterHeight
                }, 300, 'swing', function () {
                    setTimeout(function () {
                        $('html, body').stop().animate({
                            scrollTop: self.$pageTitleCover.height() - $('.visual-tabs-wrap.fixed').outerHeight() - navOuterHeight
                        }, 10);
                    }, 600)
                    self.toggleBg(true);
                    self.enableScrollEvent = true;
                });

                $('.swiper-container').each(function () {
                    this.swiper.update();
                })
            }
        });

        var $selectTarget = self.$visualTabsWrap.find('.btn-mobile-tab select');
        $selectTarget.change(function(){
            var $this = $(this);
            var selectName = $this.children('option:selected').text();
            var selectIndex = $this.children('option:selected').index();
            if(typeof selectIndex !== 'undefined') {
                $this.siblings('label').text(selectName);
                self.$visualTabsWrap.find('.visual-tabs .pc-tab button, .pc-tab .btn-tab').eq(selectIndex).trigger('click');
            }
        });
    }

    this.wrapPosition = function () {
        self.$visualTabsWrap.animate({ 'opacity': 1 }, 500);
        var offsetTop = self.$pageHeader.offset().top - $(window).scrollTop() + self.$pageHeader.height() + 80;
        self.$visualTabsWrap.css('top', offsetTop);
        // 스크롤 시 탭을 고정할 상단 여백
        self.options.visualTabsPosition = self.$visualTabsWrap.offset().top - 110;
    }

    this.coverScrollContent = function () {
        self.enableScrollEvent = false;

        self.toggleFixed(true);
        self.toggleBg(true);

        $('html, body').stop().animate({
            scrollTop: self.$pageTitleCover.height() - (self.options.visualTabsHeight || self.$visualTabsWrap.outerHeight()) - Number($('.themes-sub-depth-nav').outerHeight())
        }, 500, function () {
            if (!self.options.visualTabsHeight) {
                $('html, body').animate({
                    scrollTop: self.$pageTitleCover.height() - self.$visualTabsWrap.outerHeight() - Number($('.themes-sub-depth-nav').outerHeight())
                }, 100, function () {
                    self.options.visualTabsHeight = self.$visualTabsWrap.outerHeight() + Number($('.themes-sub-depth-nav').outerHeight());
                })
            }

            self.enableScrollEvent = true;
        });
    }

    this.toggleFixed = function (mode) {
        if(mode === true) {
            self.$visualTabsWrap.addClass('fixed');
            self.$visualTabsWrap.removeClass('normal');
        } else if (mode === false) {
            self.$visualTabsWrap.removeClass('fixed');
            self.$visualTabsWrap.addClass('normal');
        } else {
            self.$visualTabsWrap.toggleClass('fixed');
            self.$visualTabsWrap.toggleClass('normal');
        }

        if(self.$visualTabsWrap.hasClass('fixed')) {
            setTimeout(function () {
                self.options.visualTabsHeight = $('.visual-tabs-wrap.fixed').outerHeight();
            }, 500)
        }
    }

    this.toggleBg = function (mode) {
        if(mode === true) {
            self.$visualTabsWrap.addClass('bg');
        } else if (mode === false) {
            self.$visualTabsWrap.removeClass('bg');
        } else {
            self.$visualTabsWrap.toggleClass('bg');
        }
    }

    return {
        init: self.init
    };
}

/*exported scrollEvent*/
"use strict";
var isCheck = true;
$(document).ready(function() {
    if(!$('.section--story-detail').length) {
        return;
    }

    var winWidth = $(window).width();

    // 별점 클릭
    selectsStarScore();

    // 본문 폰트사이즈 조절
    contentText();

    //이미지 플러그인
    // 이미지 캡션
    if(winWidth <= 768){
        myGallerySizeS();
        imgCapSmall();
    }else if(winWidth > 768){
        myGallerySizeB();
        imgCapBig();
    }


    // 클릭 이벤트
    clickDetailPage();
    aroundSelect();

    // 스크롤 이벤트
    // scrollEvent();

    // 리사이즈 이벤트
    reSizeDetail();

    $("html,body").scrollTop(0);
    // $(".related-data").css({'top':'0px'});

    detailHeadTitleHeight();
    headerVisualParallax();

});

function scrollEvent(){
    $(window).on('throttle.scroll', function (e, data){
        // 서비스콘텐츠영역 스크롤할 때 따라다니는 효과
        var position = data.top; // 현재 스크롤바의 위치
        var winWidth = $(window).width();
        var sectionEnd = $('#container').height() + $('#header').height() - $(window).height() - $('#footer').height(); // 본문높이
        var target = $(".related-data");
        var positionEnd = $('#wrap').height() - target.outerHeight() - $('#header').height() - 48; // 본문높이

        if (position > 310 && winWidth > 989) { // 브라우저사이즈가 1007PX 이상이고 아래로 스크롤 할 때
            // console.log($('#wrap').height(),target.outerHeight(),$('#wrap').height()-target.outerHeight());
            target.addClass('aside-fixed');
            if (position >= positionEnd) { // 본문의 높이가 서비스콘텐츠 영역과 동일하게 남았을 때 하단으로 고정
                target.removeClass('aside-fixed');
                target.addClass('aside-nonfixed');

            } else { // 위로 스크롤 할 때
                target.removeClass('aside-nonfixed');
                target.addClass('aside-fixed');
            }

        } else if (position < 310 || winWidth <= 989) { // 최상단이거나 브라우저사이즈가 1007PX 이하일 때
            target.removeClass('aside-fixed');

        }
        if (target.height() > sectionEnd ){ // 본문 높이가 서비스콘텐츠 높이보다 짧을 때

            target.removeClass('aside-nonfixed');
            target.removeClass('aside-fixed');

        }
    });

}

//윈도우 리사이즈 이벤트
function reSizeDetail(){

    $(window).on('throttle.resize', function (e, data){
        var winWidth = data.width;

        if(winWidth <= 768){
            myGallerySizeS();
            imgCapSmall();
        }else if(winWidth > 768){
            myGallerySizeB();
            imgCapBig();
        }

    });

}

// 클릭이벤트
function clickDetailPage(){

    // 주변정보 셀렉트박스 선택
    $('.around-box button').on('click', function () {
        if ($(this).hasClass('around-selected')) {

            $(this).next('ul').slideToggle();

        } else {

            $(this).parents('ul').slideUp();
            $('.around-box > button').text($(this).text());

        }
    });

    // sns 공유하기 버튼 클릭
    $('.social .btn-share button').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $(this).next('ul').animate({ width: 317 });
        } else {
            $(this).removeClass('open');
            $(this).next('ul').animate({ width: 0 });
        }
    });
}


// 별점선택
function selectsStarScore() {
    $('#select-score').on('click', function () {
        $(this).next('ul').slideToggle();
    });

    $('.score-list button').on('click', function () {
        $('#select-score').attr('class', $(this).attr('class'));
        $('#select-score').text($(this).text());
        $(this).parents('ul').slideToggle();
    });

    $('html').click(function (e) {
        if (!$(e.target).parents('div').hasClass('star-score')) {
            $('.score-list').slideUp();
            // alert('영역 밖입니다.');
        }
    });
}

// 웹페이지 본문 폰트사이즈변경
function contentText() {
    var maxFS = 0;
    var minFS = 0;
    if ($(window).width() > 640) {
        maxFS = 24
        minFS = 14

    } else if ($(window).width() <= 640) {
        maxFS = 30
        minFS = 20
    }

    var size = $(".mygallery ,.section,blockquote,.section h3,.con-text .summary p").css("font-size");
    size = parseInt(size, 10);
    $("#up").on("click", function () {
        if ((size + 2) <= maxFS) {
            $(".mygallery,.section,blockquote,.section h3,.con-text .summary p").css("font-size", "+=2");

        }
        size = $(".mygallery,.section,blockquote,.section h3,.con-text .summary p").css("font-size");
        size = parseInt(size, 10);
    });

    $("#down").on("click", function () {
        if ((size - 2) >= minFS) {
            $(".mygallery,.section,blockquote,.section h3,.con-text .summary p").css("font-size", "-=2");
        }
        size = $(".mygallery,.section,blockquote,.section h3,.con-text .summary p").css("font-size");
        size = parseInt(size, 10);
    });
}

// 본문 이미지 플러그인 웹버전
function myGallerySizeB () {
    var gallery_template = 'colorbox'; // swipebox or colorbox
    var winWidth = $(window).width();
    if (winWidth > 768){
        if (gallery_template == 'swipebox') {
            swipeBox();
        } else {
            colorBox(100);
        }
    }
}

// 본문 이미지 플러그인 패드, 모바일버전
function myGallerySizeS () {
    var gallery_template = 'colorbox'; // swipebox or colorbox
    var winWidth = $(window).width();
    if (winWidth <= 768){
        if (gallery_template == 'swipebox') {
            swipeBox();
        } else {
            colorBox(300);
        }
    }
}

function colorBox (rowHeight) {
    $('.mygallery .mygallery2').each(function (i, el) {
        $(el).justifiedGallery({
            rowHeight : rowHeight,
            maxRowHeight: false,
            lastRow : 'justify',
            margins : 3,
            selector : 'figure, div:not(.spinner)',
            captions : false,
            scalePhotos: true,
            rel: 'myGalleryColorBox-' + i
        }).on('jg.complete', function () {
            /*$(this).find('a').colorbox({
                maxWidth : '90%',
                maxHeight : '90%',
                opacity : 0.8,
                transition : 'elastic',
                current : ''
            });*/
        });
    });
}
function swipeBox () {
    $('.mygallery .mygallery2').each(function (i, el) {
        $(el).justifiedGallery({
            lastRow : 'justify',
            margins : 3,
            selector : 'figure, div:not(.spinner)',
            rel: 'myGallerySwipeBox-' + i
        }).on('jg.complete', function () {
            $('.swipeboxImg').swipebox();
        });
    });
}

// 본문 이미지 플러그인 캡션 조정
function imgCapSmall (){ // 패드 및 모바일 버전
    if(isCheck){
        isCheck = false;
        console.log(111);
        setTimeout(function(){
            if($(window).width() <= 768){
                $.each($('.mygallery2'), function(index, value){
                    var max_height = 0;
                    var self = $(value);
                    $(value).css({ 'margin-bottom': '100px'});

                    $.each($(value).find('figcaption') , function(index, value){
                        max_height =  ( (max_height < $(value).height() ) ?  $(value).height() : max_height );
                        $(value).css({ 'bottom': (0 + 'px') });
                    });

                    $.each($(value).find('figure') , function(index, value){

                        if(index == 2){
                            $(value).css( {'top': parseInt($(value).css('top').replace('px','')) + max_height + 10 + 'px'} );
                            self.css({ 'height': self.height() + max_height + 50 +'px'});
                        }else if(index == 1){
                            $(value).css( {'top': parseInt($(value).css('top').replace('px','')) + max_height + 10 + 'px'} );
                            self.css({ 'height': self.height() + max_height + 20 +'px'});
                        }
                    });

                });
            }
            isCheck = true;
        },2000);

    }else{
        return false;
    }
}

function imgCapBig (){
    setTimeout(function(){ // 웹버전
        $.each($('.mygallery2'), function(index, value){
            var max_height = 0;
            $.each($(value).find('figcaption') , function(index, value){
                max_height =  ( (max_height < $(value).height() ) ?  $(value).height() : max_height );
            });

            $(value).find('figcaption').css({'height':('0px')});
            // $(value).find('figure').css( {'padding-bottom':(max_height+'px') } );
            // $(value).find('.captioned').css('margin-top', '-180px');
        });
        var imgCap = $('.mygallery2').children('figure').children('figcaption');
        $.each(imgCap, function(index, value){
            $(value).css({'bottom':(0+'px')});
        });
    },300);
}

// 상단 타이틀 페럴럭스
function headerVisualParallax() {
    var vhH = $('.header-visual').outerHeight();
    var timeing = 0;
    $('.contents-body').css('margin-top', vhH);

    $('.header-visual').css('margin-left', '-' + $(window).scrollLeft() + 'px');
    $(window).on('throttle.resize', function () {
        vhH = $('.header-visual').outerHeight();
        $('.contents-body').css('margin-top', vhH);
    });

    $('.header-inner').append('<h2 class="head-line">' + $('.title-wrap h2').text() + '</h2>');
    $(window).on('throttle.scroll', function (e, data) {
        var nowST = data.top;
        timeing = 1 - (nowST / vhH);
        $('.header-visual').css('background-position', 'center ' + (50 + nowST * 0.03) + '%');
        $('.header-visual .con-title').css('opacity', timeing);
        $('.header-visual').css('margin-left', '-' + $(window).scrollLeft() + 'px');

        if ($(window).width() > 640){
            if ($('#menu').hasClass('on')) {
                $('.header-change .head-line').css({ 'display': 'none' });

            } else {
                $('.header-change .head-line').css({ 'display': 'block' });

            }
        }

    });

}

// 위치정보 리스트선택 이벤트
function aroundSelect() {
    $('.around-select button').off('click').on('click', function () {
        if ($(this).hasClass('around-selected')) {

            $(this).next('ul').slideToggle();

        } else {

            $(this).parents('ul').slideUp();
            $('.around-select > button').text($(this).text());
        }
    });
}

function detailHeadTitleHeight() {
    var visualH = $('.header-visual').height();
    var titleWrapH = $('.title-wrap').height() + $('#header').height() + 60;

    if (visualH < titleWrapH) {
        $('.header-visual').height(titleWrapH);
    }
}

/*exported pageAndPagingReset,callTotalList,inputCmsCard,pagePreBlank,pageNextBlank,pageFirstBlank,pageLastBlank,choiceCouncilBoxInput,deleteChoiceButton*/
"use strict";
// 최근 검색어
$(function() {
    if(!$('.section--search-result').length) {
        return;
    }
    // 검색 결과 페이지 사이드바
    if(getCookie('recent_searches_off') == null || getCookie('recent_searches_off') == '' || getCookie('recent_searches_off') == 'undefined') {
        /* eslint-disable-next-line */
        if(getCookie('recent_searches') == null || getCookie('recent_searches') == '' || getCookie('recent_searches') == 'undefined') {
        } else {
            $('#recent_search_queries').empty();
            var recent_searches = getCookie('recent_searches');
            recent_searches = recent_searches.split('||');
            $.each(recent_searches, function(idx, keyword) {
                var keywords = keyword.split('::');
                var inner_html = '<li><a href="http://kccf-cms.local/faith/search?integrated_query='+keywords[0]+'">'+keywords[0]+'</a></li>';
                $('#recent_search_queries').append(inner_html);
            });
        }
    }

    inputSearchResultText();
});

function pageAndPagingReset(list_type) {
    $('input[name=now_page_'+list_type+']').val(1);
    $('input[name=page_block_num_'+list_type+']').val(0);
}

function inputSearchResultText() {
    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    if(existenceValue($.getUrlSelect('integrated_query'))) {
        query = decodeURIComponent($.getUrlSelect('integrated_query')).replace(/\+/g, ' ');
    }
    var search_query = '<em>'+'"'+query+'"'+'</em>';

    if(existenceValue(search_tag)) {
        search_query = '<em>'+'"'+'#'+(decodeURI(search_tag)).replace("+", " ")+'"'+'</em> 태그';
    }

    if(existenceValue(search_keyword)) {
        search_query = '<em>'+'"'+(decodeURI(search_keyword)).replace("+", " ")+'"'+'</em> 키워드';
    }

    var text_search_box = $('#display_integrated_query_box');
    var inner_text = search_query+'에 대한 ';

    if(exactly != '' && exactly != null) {
        inner_text += '<em>'+'"'+exactly+'"'+'</em>이(가) 정확하게 일치하';
        if(exclude != '' && exclude != null || must != '' && must != null) {
            inner_text += '고 ';
        } else {
            inner_text += '는 ';
        }
    }
    if(must != '' && must != null) {
        inner_text += '<em>'+'"'+must+'"'+'</em>이(가) 반드시 들어가';
        if(exclude != '' && exclude != null) {
            inner_text += '며 ';
        } else {
            inner_text += '는 ';
        }
    }
    if(exclude != '' && exclude != null) {
        inner_text += '<em>'+'"'+exclude+'"'+'</em>을(를) 제외하는';
    }

    text_search_box.find('.integrated-search-except').append(inner_text);
}

function callTotalList(coll_nm) {
    //TODO:: serise 검색 해야함
    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var keyword_set = $('input[name=theme_keywords]').val();
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    var requery = $('input[name=requery]').val(); // 경과내 재검색

    var mgnt_no = $('input[name=mgnt_no]').val();
    var chr_start = $('input[name=chronological_start]').val();
    var chr_end = $('input[name=chronological_end]').val();
    var age = $('input[name=integrated_age]').val();
    var genyear_start = $('input[name=genyear_start]').val();
    var genyear_end = $('input[name=genyear_end]').val();
    var iclass = $('input[name=integrated_class]').val();
    var council = $('input[name=integrated_council]').val();

    var story = $('#total_search_story_list');
    var lib = $('#total_search_lib_list');
    var tags_box = $('#integrated_related_tag');

    var total_count = $('.integrated-search-count');
    var story_count = $('#search_story_count');
    var lib_count = $('#search_lib_count');

    if(typeof search_tag == 'undefined') {
        search_tag = '';
    }

    if(typeof search_keyword == 'undefined') {
        search_keyword = '';
    }

    $.ajax({
        url: '/search/integratedlistsearch',
        data: {
            coll: coll_nm,
            query: query,
            tag: search_tag,
            keyword: search_keyword,
            keyword_set: keyword_set,
            exactly: exactly,
            must: must,
            exclude: exclude,
            requery: requery,
            mgnt_no: mgnt_no,
            chr_start: chr_start,
            chr_end: chr_end,
            age: age,
            genyear_start: genyear_start,
            genyear_end: genyear_end,
            iclass: iclass,
            council: council,
        },
        type: 'GET',
        beforeSend:function() {
            $('#total_search_story_list .integrated-list-loading').show();
            $('#total_search_lib_list .integrated-list-loading').show();

            //$('.story-result-more').css('display', 'none');
            //$('.lib-result-more').css('display', 'none');
        }, success: function(data) {
            $('#total_search_story_list .integrated-list-loading').hide();
            $('#total_search_lib_list .integrated-list-loading').hide();
            story.find('ul.list').empty();
            lib.find('ul.list').empty();
            tags_box.empty();
            story_count.empty();
            lib_count.empty();

            var entries = JSON.parse(data);

            // count
            if(!existenceValue(requery)) {
                $('.m-use.count > em').html(entries['counts']['total']);
                //total_count.html(entries['counts']['total']);
                total_count.html(entries['counts']['cms']);
            }
            if(entries['counts']['cms'] > 5) {
                //$('.story-result-more').css('display', 'block');
            }
            if(entries['counts']['ams'] > 5) {
                //$('.lib-result-more').css('display', 'block');
            }

            story_count.append(entries['counts']['cms']);
            lib_count.append(entries['counts']['ams']);

            if(entries['total_tag'] != []) {
                $.each(entries['total_tag'], function(tidx, tag) {
                    var inner_tag = '<li><a href="/'+coll_nm+'/search?tag='+tag+'" target="_blank">#'+tag+'</a></li>';
                    tags_box.append(inner_tag);
                });
            }

            if(entries['list']['cms'].length == 0) {
                story.append('<ul class="list"><li class="no-message"><p>검색 결과가 없습니다.</p></li></ul>');
                $('.story-result-more').css('display', 'none');
            } else {
                $.each(entries['list']['cms'], function(eidx, entry) {
                    story.find('ul.list').append(inputCmsList(entry));
                });
            }
            if(entries['list']['ams'].length == 0) {
                lib.append('<ul class="list"><li class="no-message"><p>검색 결과가 없습니다.</p></li></ul>');
                $('.lib-result-more').css('display', 'none');
            } else {
                $.each(entries['list']['ams'], function(eidx, entry) {
                    lib.find('ul.list').append(inputAmsList(entry));
                });
            }
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function inputCmsCard(entry) {
    var inner_html = '';

    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="item-box">'
        inner_html += '<div class="thumnail">';
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry['thumbnail']['origin']+'" alt="'+entry.title+'">';
        if(entry['thumbnail_copyright'] != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
        }
        inner_html += '</a>';
        inner_html += '</div>';
    } else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="item-box">'
        inner_html += '<div class="thumnail">';
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry['replacement']+'" alt="'+entry.title+'">';
        inner_html += '</a>';
        inner_html += '</div>';
    }

    if(inner_html == '') {
        inner_html += '<div class="item-box no-image">';
    }

    inner_html += '<div class="item-info clearfix">';
    inner_html += '<div class="clearfix classification">';

    if(existenceValue(entry.region) || existenceValue(entry.city)) {
        // region
        inner_html += '<div class="item-region">';
        inner_html += '<p class="regional">';
        if(existenceValue(entry.region)) {
            inner_html += entry.region;
        }
        if(existenceValue(entry.region) && existenceValue(entry.city)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.city)) {
            inner_html += entry.city;
        }
        inner_html += '</p>';
        // council
        if(existenceValue(entry.culture_council_Name)) {
            var councils_name = entry.culture_council_Name.split('@');
            councils_name = councils_name.join(', ');
            inner_html += '<p>'+councils_name+'</p>';
        }
        inner_html += '</div>';
    }
    inner_html += '</div>';
    inner_html += '<a href="'+entry.url+'" title="'+deleteHtmlTags(entry.title)+'" class="data-title">'+deleteHtmlTags(entry.title)+'</a>';

    // title

    // summary
    if(existenceValue(entry.summary)) {
        inner_html += '<p class="item-summary">'+deleteHtmlTags(entry.summary)+'</p>';
    }

    // theme
    if(existenceValue(entry.first_topic) || existenceValue(entry.second_topic)) {
        inner_html += '<p class="item-subject">';
        if(typeof entry.first_topic == 'string') {
            inner_html += entry.first_topic;
        }
        if(existenceValue(entry.first_topic) && existenceValue(entry.second_topic)) {
            inner_html += ' &gt; ';
        }
        if(typeof entry.second_topic == 'string') {
            inner_html += entry.second_topic;
        }
        inner_html += '</p>';
    }

    if(existenceValue(entry.tags)) {
        inner_html += '<ul class="list-tag">';
        $.each(entry.tags, function(tidx, tag) {
            inner_html += '<li>#'+tag+'</li>';
        })
        inner_html += '</ul>';
    }
    inner_html += '</div></div>';

    return inner_html;
}

function inputCmsList(entry) {
    var inner_html = '';
    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(existenceValue(entry.media)) {
        inner_html += '<div class="thumb">'
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry.media[0]+'" alt="'+entry.title+'">';
        inner_html += '</a>';
        inner_html += '</div>';
    }
    // 썸네일 넣기 끝

    // data
    inner_html += '<div class="data-wrap"><dl><dt>';
    // region
    if(existenceValue(entry.region) || existenceValue(entry.city)) {
        inner_html += '<p class="classification"><em class="regional">';
        if(existenceValue(entry.region)) {
            inner_html += entry.region;
        }
        if(existenceValue(entry.region) && existenceValue(entry.city)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.city)) {
            inner_html += entry.city;
        }
        inner_html += '</em></p>';
    }

    //title
    inner_html += '<a href="'+entry.url+'" target="_blank" title="새창">'+deleteHtmlTags(entry.title)+'</a>';
    //summary
    if(existenceValue(entry.summary)) {
        inner_html += '<dd class="ellipsis">'+deleteHtmlTags(entry.summary)+'</dd>';
    }
    inner_html += '</dt></dl>';
    // theme
    inner_html += '<ul class="list-info">';

    if(existenceValue(entry.first_topic) || existenceValue(entry.second_topic)) {
        inner_html += '<li><em>이야기주제 : </em>';
        if(existenceValue(entry.first_topic)){
            inner_html += entry.first_topic;
        }
        if(existenceValue(entry.first_topic) && existenceValue(entry.second_topic)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.second_topic)){
            inner_html += entry.second_topic;
        }
        inner_html += '</li>';
    }

    // council
    if(existenceValue(entry.culture_council_Name)) {
        var councils_name = entry.culture_council_Name.split('@');
        councils_name = councils_name.join(', ');
        inner_html += '<li><em>관련문화원 : </em>'+councils_name+'</li>';
    }

    inner_html += '</ul>';
    if(typeof entry.tags == 'object') {
        inner_html += '<ul class="list-tag">';
        $.each(entry.tags, function(tidx, tag) {
            inner_html += '<li>#'+tag+'</li>';
        })
        inner_html += '</ul>';
    }

    // data end
    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

function inputAmsList(entry) {
    var inner_html = '';
    var a_href = '';
    if(entry['STRE_FILE_NAME'] != '') {
        if(entry['ASSET_TYPE'] == '이미지') {
            var file_type = "'"+entry['ASSET_TYPE']+"'";
            var file_id = "'"+entry['ASSETS_ID']+"'";

            a_href = 'href="javascript:mediaTypePopOrLink('+file_type+', '+file_id+');" ';
        } else if(entry['ASSET_TYPE'] == '문서') {
            a_href = 'href'+entry['STRE_FILE_NAME']+' target="_blank"';
        // } else if(entry['ASSET_TYPE'] == '동영상') {
        // } else if(entry['ASSET_TYPE'] == '오디오') {
        } else if(entry['ASSET_TYPE'] == '링크') {
            a_href = 'href'+entry['LINK_DATA']+' target="_blank"';
        // } else if(entry['ASSET_TYPE'] == '목록') {
        }
    }

    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(entry['MAIN_IMG'] == '') {
        // inner_html += '<div>';
    } else {
        inner_html += '<div class="thumb">'
        + '<a '+a_href+'title="팝업">'
        + '<img src="'+entry['MAIN_IMG']+'" alt="'+entry['TITLE']+'" />'
        + '</a>'
        + '</div>';
    }
    inner_html += '<div class="data-wrap"><div class="data-tit">';

    if(entry['SIDO_NAME'] != '' || entry['SIGUNGU_NAME'] != '') {
        inner_html += '<p class="classification"><em class="regional">';
        if(entry['SIDO_NAME'] != '') {
            inner_html += entry['SIDO_NAME'];
        }
        if(entry['SIDO_NAME'] != '' && entry['SIGUNGU_NAME'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SIGUNGU_NAME'] != '') {
            inner_html += entry['SIGUNGU_NAME'];
        }
        inner_html += '</em></p>';
    }

    inner_html += '<a '+a_href+'title="팝업">'+entry['TITLE']+'</a>';

    inner_html += '</div>';

    inner_html += '<ul class="list-info">';

    if(entry['FIRST_CATEGORY_NM'] != '' || entry['SECOND_CATEGORY_NM'] != '') {
        inner_html += '<li><em>주제분야 : </em>';
        if(entry['FIRST_CATEGORY_NM'] != '') {
            inner_html += entry['FIRST_CATEGORY_NM'];
        }
        if(entry['FIRST_CATEGORY_NM'] != '' && entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += entry['SECOND_CATEGORY_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['FIRST_CLASS_NM'] != '' || entry['SECOND_CLASS_NM'] != '') {
        inner_html += '<li><em>자료유형 : </em>';
        if(entry['FIRST_CLASS_NM'] != '') {
            inner_html += entry['FIRST_CLASS_NM'];
        }
        if(entry['FIRST_CLASS_NM'] != '' && entry['SECOND_CLASS_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CLASS_NM'] != '') {
            inner_html += entry['SECOND_CLASS_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['COUNCIL'] != '') {
        inner_html += '<li><em>소장문화원 : </em>'+entry['COUNCIL']+'</li>';
    }
    if(entry['PUBLISHER'] != '') {
        inner_html += '<li><em>발행자 : </em>'+entry['PUBLISHER']+'</li>';
    }
    if(entry['GENYEAR'] != '') {
        inner_html += '<li><em>생산년도 : </em>'+entry['GENYEAR']+'</li>';
    }
    if(entry['AUTHOR'] != '') {
        inner_html += '<li><em>저작자 : </em>'+entry['AUTHOR']+'</li>';
    }

    inner_html += '</ul>';

    if(entry['tags'] != '') {
        inner_html += '<ul class="list-tag">';
        $.each(entry['tags'], function(tidx, titem) {
            inner_html += '<li>#'+titem+'</li>';
        });
        inner_html += '</ul>';
    }

    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

function createPaging(coll, now, total, list_type) {
    if(list_type == 1) {
        $('#story_list_paging > div > ul').empty();
    } else if(list_type == 2) {
        $('#lib_list_paging > div > ul').empty();
    }
    // 페이징 만들기
    now = parseInt(now);
    total = parseInt(total);
    coll = "'"+coll+"'";

    var inner_html = '';
    var page_block_name = 'page_block_num_'+list_type;
    var page_block_num = parseInt($('input[name='+page_block_name+']').val());
    var total_page = [];
    var total_block = [];
    var page_block = 0;

    for(var num = 1; num <= total; num++) {
        total_page.push(num);
    }

    total_block[page_block] = [];
    $.each(total_page, function(idx, num) {
        total_block[page_block].push(num);
        if(num % 5 == 0) {
            page_block++;
            if(num != total) {
                total_block[page_block] = [];
            }
        }
    });
    total_block = total_block.filter(function(e){return e});
    var active = '';
    var disabled = '';

    if(now <= 1) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-first">'
        +'<a href="javascript:pageFirstBlank('+coll+', 1, '+total+', '+list_type+');"><span></span></a>'
        +'</li>'
        +'<li class="'+disabled+' btn btn-prev">'
        +'<a href="javascript:pagePreBlank('+coll+', '+now+', '+total+', '+list_type+');"><span></span></a>'
        +'</li>';

    disabled = '';

    $.each(total_block[page_block_num], function(pidx, pnum) {
        if(now == pnum) {
            active = 'on';
        }
        inner_html += '<li class="page-number '+active+'">'
            + '<a href="javascript:pageBlank('+coll+', '+pnum+', '+list_type+');"><span>'+pnum+'</span></a>'
            + '</li>';
        active = '';
    })

    if(now >= total) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-next">'
        +'<a href="javascript:pageNextBlank('+coll+', '+now+', '+total+', '+list_type+', '+total_block.length+');"><span></span></a>'
        +'</li>';
    inner_html += '<li class="'+disabled+' btn btn-last">'
        +'<a href="javascript:pageLastBlank('+coll+', '+now+', '+total+', '+list_type+', '+total_block.length+');"><span></span></a>'
        +'</li>';

    if(list_type == 1) {
        //$('#story_list_paging .pageNum').append(inner_html);
        $('#story_list_paging .pageNum').html(inner_html);
    } else if(list_type == 2) {
        //$('#lib_list_paging .pageNum').append(inner_html);
        $('#lib_list_paging .pageNum').html(inner_html);
    }
}

function pagePreBlank(coll, now, total, list_type) {
    var page_block_num = $('input[name=page_block_num_'+list_type+']').val();

    if(page_block_num == 0) {
        page_block_num = 0;
    } else {
        page_block_num = parseInt(page_block_num) - 1;
    }

    $('input[name=page_block_num_'+list_type+']').val(page_block_num);

    createPaging(coll, now, total, list_type);
}

function pageNextBlank(coll, now, total, list_type, leng) {
    var page_block_num = $('input[name=page_block_num_'+list_type+']').val();

    if(page_block_num == parseInt(leng) - 1) {
        page_block_num = parseInt(leng) - 1;
    } else {
        page_block_num = parseInt(page_block_num) + 1;
    }

    $('input[name=page_block_num_'+list_type+']').val(page_block_num);
    createPaging(coll, now, total, list_type);
}

function pageFirstBlank(coll, now, total, list_type) {
    $('input[name=page_block_num_'+list_type+']').val(0);
    pageBlank(coll, now, list_type);
}
function pageLastBlank(coll, now, total, list_type, leng) {
    $('input[name=page_block_num_'+list_type+']').val(parseInt(leng) - 1);
    pageBlank(coll, total, list_type);
}

function pageBlank(coll, page, list_type) {
    $(window).scrollTop(0);
    $('.contents .filter-wrap.filter-story').removeClass("aside-nonfixed");
    $('.contents .filter-wrap.filter-story').removeClass("aside-fixed");
    if($('input[name=now_page_'+list_type+']').val() != page) {
        $('input[name=now_page_'+list_type+']').val(page);

        if(list_type == 1) {
            callStoryList(coll);
        } else if(list_type == 2) {
            callLibList(coll);
        }
    }
}


/* 공통으로 빠질지도 모르는 함수들 */

/**
* [choiceCouncilBoxInput 문화원 클릭시, 선택조건 창에 값 집어넣기]
* @param  {[array]} arry        [input[name=sojang_council]의 값]
* @param  {[object]} inpu        [클릭한 문화원 코드 값을 가지고 있는 히든]
* @param  {[string]} region      [지역 이름]
* @param  {[string]} contraction [문화원 이름]
* @param  {[string]} coll  [게시판 콜렉션]
*/
function choiceCouncilBoxInput(arry, inpu, region, contraction, coll, list_type) {
    var list_name;
    var choice_box_id;
    if(list_type == 1) {
        list_name = 'story';
        choice_box_id = "'story_choice_condition'";
    } else if(list_type == 2) {
        list_name = 'lib';
        choice_box_id = "'lib_choice_condition'";
    }
    var choice_box = $('#'+list_name+'_choice_condition > ul');
    var choice_pop = $('#'+list_name+'_select_layer_pop_council');
    var coll_str = "'"+coll+"'";
    var arry_name = "'"+arry.prop('name')+"'";
    var inpu_str = "'"+inpu.val()+"'";

    var inner_block = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><em>'+contraction+'</em><button type="button" class="btn-del-filter" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+', '+list_type+');">삭제</button></li>';
    var inner_block_pop = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><button type="button" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+', '+list_type+');" title="삭제">'+region+' <span class="sign">&gt;</span> '+contraction+'</button></li>';

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var topics = arry.val().split('|');
        if($.inArray(inpu.val(), topics) < 0) {
            topics.push(inpu.val());
            choice_box.append(inner_block);
            choice_pop.append(inner_block_pop);

            topics = topics.join('|');
            arry.val(topics);
            if(list_type == 1) {
                callStoryList(coll);
            } else if(list_type == 2) {
                callLibList(coll);
            }
        } else {
            deleteChoiceBlock(choice_box, arry, inpu.val(), coll, list_type);
        }
    } else {
        arry.val(inpu.val());
        choice_box.append(inner_block);
        choice_pop.append(inner_block_pop);
        if(list_type == 1) {
            callStoryList(coll);
        } else if(list_type == 2) {
            callLibList(coll);
        }
    }
}

/**
* [deleteChoiceButton 선택조건 공통 삭제 버튼 클릭]
* @param  {[string]} choice_box_id [선택한 객체의 아이디]
* @param  {[string]} coll_str      [테마 콜렉션]
* @param  {[string]} arry_name     [sojang_council || category || sclass => 히든 인풋의 네임]
* @param  {[string]} inpu_str      [description]
*/
function deleteChoiceButton(choice_box_id, coll_str, arry_name, inpu_str, list_type) {
    var choice_box = $('#'+choice_box_id + ' ul');
    var coll = coll_str;
    var arry = $('input[name='+arry_name+']');
    var inpu = inpu_str;

    deleteChoiceBlock(choice_box, arry, inpu, coll, list_type);
}
/**
* [deleteChoiceBlock 선택조건 공통 삭제 함수]
* @param  {[type]} choice_box [description]
* @param  {[type]} arry       [description]
* @param  {[type]} inpu       [description]
* @param  {[type]} coll       [description]
* @return {[type]}            [description]
*/
function deleteChoiceBlock(choice_box, arry, inpu, coll, list_type) {
    var choice_pop;
    if(list_type == 1) {
        choice_pop = $('#story_select_layer_pop_council');

        choice_box.find('li[data-storychoiceblock="'+inpu+'"]').remove();
        choice_pop.find('li[data-storychoiceblock="'+inpu+'"]').remove();
        $('#story_layer_pop_council').find('input[value="'+inpu+'"] + label').removeClass('turnon');
    } else if(list_type == 2) {
        choice_pop = $('#lib_select_layer_pop_council');

        choice_box.find('li[data-libchoiceblock="'+inpu+'"]').remove();
        choice_pop.find('li[data-libchoiceblock="'+inpu+'"]').remove();
        $('#lib_layer_pop_council').find('input[value="'+inpu+'"] + label').removeClass('turnon');
    }

    var arry_val = arry.val();
    arry_val = arry_val.split('|');
    arry_val = jQuery.grep(arry_val, function(value) {
        return value != inpu;
    });
    arry.val(arry_val.join('|'));
    if(list_type == 1) {
        callStoryList(coll);
    } else if(list_type == 2) {
        callLibList(coll);
    }
}

/*exported callLibFilter,createLibDatas,libDeleteChoiceButton*/
"use strict";
function libListAllDataReset() {
    $('input[name=now_page_2]').val(1);
    $('input[name=page_block_num_2]').val(0);
    $('input[name=second_category]').val('');
    $('input[name=second_class]').val('');
    $('input[name=sojang_council_2]').val('');
    $('#lib_choice_condition > ul').empty();
    $('#lib_select_layer_pop_council').empty();
    $('#lib_filter_topic_depth > li > div').removeClass('on');
    $('#lib_filter_topic_depth').find('input[type=checkbox]').prop('checked', false);
    $('#lib_layer_pop_council > li > div').removeClass('on');
    $('#lib_layer_pop_council').find('input[type=checkbox]').prop('checked', false);
    $('#lib_layer_pop_council').find('.click-council-name').removeClass('turnon');
    $('.click-class-name').removeClass('turnon');
    $('.click-category-name').removeClass('turnon');
}
function callLibFilter(coll) {
    pageAndPagingReset(2);
    var keyword_set = $('input[name=theme_keywords]').val();
    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    var requery = $('input[name=requery]').val(); // 경과내 재검색

    var chr_start = $('input[name=chronological_start]').val();
    var chr_end = $('input[name=chronological_end]').val();
    var age = $('input[name=integrated_age]').val();
    var genyear_start = $('input[name=genyear_start]').val();
    var genyear_end = $('input[name=genyear_end]').val();
    var sojang_council = $('input[name=sojang_council_2]').val();
    var second_class = $('input[name=second_class]').val();

    if(typeof search_tag == 'undefined') {
        search_tag = '';
    }

    if(typeof search_keyword == 'undefined') {
        search_keyword = '';
    }

    $.ajax ({
        url: '/search/integratedlibfiltersearch',
        data: {
            coll: coll,
            keyword_set: keyword_set,
            query: query,
            tag: search_tag,
            keyword: search_keyword,
            exactly: exactly,
            must: must,
            exclude: exclude,
            requery: requery,
            chr_start: chr_start,
            chr_end: chr_end,
            age: age,
            genyear_start: genyear_start,
            genyear_end: genyear_end,
            sojang_council: sojang_council,
            second_class: second_class,
        },
        type: 'GET',
        success: function(data) {
            $('#lib_filter_topic_depth').empty();
            $('.filter-lib .clear-region-count').empty();
            $('.filter-lib .clear-region-count').append('(0)');
            $('#lib_layer_pop_council > li > .clear-relact-data').empty();

            var filters = JSON.parse(data);

            // filter councils
            $.each(filters['councils'], function(region, councils) {
                libInsertCouncil(region, councils);
            });

            $.each(filters['categories'], function(top, middles) {
                insertLibFilters('category', top, middles);
            });

            var class_obj_leg = 0;
            $.each(filters['class'], function(top, middles) {
                insertLibFilters('class', top, middles);
                class_obj_leg++;
            });

            if(class_obj_leg <= 5) {
                $('#class_more_btn').css('display', 'none');
            }

            // 필터 열기 닫기
            integratedFilterFn('lib');

            $('.click-council-name').click(function() {
                pageAndPagingReset(2);
                var choice_councils = $('input[name=sojang_council_2]');
                var choice_council = $(this).parent().find('input');
                var contraction_council = $(this).parent().data('libleadingname');
                var contraction_region = $(this).parent().data('libregionname');
                $(this).toggleClass('turnon');
                choiceCouncilBoxInput(choice_councils, choice_council, contraction_region, contraction_council, coll, 2);
            });
            $('.click-category-name').click(function() {
                pageAndPagingReset(2);
                var search_cate = $('input[name=second_category]');
                var choice_cate_code = $(this).parent().find('input').val();
                var choice_cate_name = $(this).parent().data('libleadingname');
                $(this).toggleClass('turnon');
                choiceBoxInput('category', search_cate, choice_cate_code, choice_cate_name, coll);
            });
            $('.click-class-name').click(function() {
                pageAndPagingReset(2);
                var search_cate = $('input[name=second_class]');
                var choice_cate_code = $(this).parent().find('input').val();
                var choice_cate_name = $(this).parent().data('libleadingname');
                $(this).toggleClass('turnon');
                choiceBoxInput('class', search_cate, choice_cate_code, choice_cate_name, coll);
            });

            $('#lib_select_reset').click(function() {
                libListAllDataReset();
                callLibList(coll);
            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function callLibList(coll) {
    $('.integrated-ams-searched-list').find('ul.list').empty();
    $('#search_lib_count').empty();

    var keyword_set = $('input[name=theme_keywords]').val();
    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    var requery = $('input[name=requery]').val(); // 경과내 재검색

    var chr_start = $('input[name=chronological_start]').val();
    var chr_end = $('input[name=chronological_end]').val();
    var age = $('input[name=integrated_age]').val();
    var genyear_start = $('input[name=genyear_start]').val();
    var genyear_end = $('input[name=genyear_end]').val();

    var now_page = $('input[name=now_page_2]').val();
    var amount = $('input[name=amount_2]').val();
    var second_category = $('input[name=second_category]').val();
    var second_class = $('input[name=second_class]').val();
    var sojang_council = $('input[name=sojang_council_2]').val();

    if(typeof search_tag == 'undefined') {
        search_tag = '';
    }

    if(typeof search_keyword == 'undefined') {
        search_keyword = '';
    }

    $.ajax ({
        url: '/search/integratedliblistsearch',
        data: {
            coll: coll,
            keyword_set: keyword_set,
            now: now_page,
            amount: amount,
            query: query,
            tag: search_tag,
            keyword: search_keyword,
            exactly: exactly,
            must: must,
            exclude: exclude,
            requery: requery,
            chr_start: chr_start,
            chr_end: chr_end,
            age: age,
            genyear_start: genyear_start,
            genyear_end: genyear_end,
            sojang_council: sojang_council,
            second_category: second_category,
            second_class: second_class,
        },
        type: 'GET',
        beforeSend:function() {
            $('.integrated-ams-searched-list .integrated-list-loading').show();

            $('#search_lib_count').append('<em>0</em>');
        },
        success: function(data) {
            $('.integrated-ams-searched-list .integrated-list-loading').hide();
            $('.integrated-ams-searched-list').find('ul.list').empty();

            var entries = JSON.parse(data);
            var total = entries['count'];

            if(!existenceValue(requery)) {
                $('#search_lib_count').html('<em>'+total+'</em>');
            }

            if(entries['list'].length == 0 || entries['list'] == [] || entries['list'] == null) {
                var inner_message = '<ul class="list"><li class="no-message"><p>검색 결과가 없습니다.</p></li></ul>';
                $('.integrated-ams-searched-list').empty();
                $('.integrated-ams-searched-list').append(inner_message);
            } else {
                var total_page = Math.ceil(total/amount);
                createPaging(coll, now_page, total_page, 2);

                $.each(entries['list'], function(eidx, entry) {
                    $('.integrated-ams-searched-list').find('ul.list').append(inputAmsList(entry));
                });
            }
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

/**
* [libInsertCouncil 지역 / 문화원 필터 입력]
* @param  {[string]} region   [지역 영문 이름]
* @param  {[array]} councils [문화원 정보 배열]
*/
function libInsertCouncil(region, councils) {
    $('#lib_region_count_'+region).empty();

    var inner_layer = '';
    var idx = 0;
    var amount = 0;

    if(typeof councils != 'undefined' && councils != [] && councils != '') {
        $.each(councils['list'], function(ccode, cinfo){
            $.each(cinfo, function(cname, ccount) {
                amount = amount + parseInt(ccount);
                idx++;
                inner_layer += '<li>';
                inner_layer += '<div class="check" data-libregionname="'+councils['city_kr']+'" data-libleadingname="'+cname+'"><input type="checkbox" id="local-'+region+'-'+idx+'" value="'+ccode+'" /><label for="local-'+region+'-'+idx+'" class="click-council-name">'+cname+'('+ccount+')</label></div>';
                inner_layer += '</li>';
            })
        });
    }

    $('#lib_region_count_'+region).append('('+amount+')');
    $('#lib_council_region_'+region).append(inner_layer);
}

/**
* [insertLibFilters 필터 주제분야]
* @param  {[type]} top     [대주제분야]
* @param  {[type]} middles [중주제분야 정보]
*/
function insertLibFilters(type, top, middles) {
    if(top != '') {
        var inid;
        var main_id;
        if(type == 'category') {
            inid = 'lib_filter_list_category';
            main_id = 'ct_';
        } else {
            inid = 'lib_filter_list_class';
            main_id = 'cl_';
        }

        var inner_category = '';
        var amount = 0;

        inner_category += '<li>';
        inner_category += '<div class="depth-1">';
        inner_category += '<div class="check"><input type="checkbox" id="'+main_id+middles['code']+'" /><label for="'+main_id+middles['code']+'" class="toggle-dep2-controll">'+top+' <span id="'+main_id+'count_'+middles['code']+'" class="filters-clear-count"></span></label></div>';
        inner_category += '<button type="button" class="btn-toggle" disabled="disabled">열기</button>';
        inner_category += '</div>';

        inner_category += '<ul class="depth-2">';

        $.each(middles['list'], function(mcode, minfo) {
            $.each(minfo, function(mname, mcount) {
                if(mname != '') {
                    inner_category += '<li><div data-libleadingname="'+mname+'" class="check"><input type="checkbox" id="'+main_id+middles['code']+'_'+mcode+'" value="'+mcode+'" /><label for="'+main_id+middles['code']+'_'+mcode+'" class="click-'+type+'-name">'+mname+' ('+mcount+')</label></div></li>';
                    amount = amount + parseInt(mcount);
                }
            });
        });

        inner_category += '</ul>'
        inner_category += '</li>';

        $('#'+inid).append(inner_category);
        $('#'+inid).find('#'+main_id+'count_'+middles['code']).append('('+amount+')');
    }
}

/**
* [createLibDatas 리스트 만들기]
* @param  {[array]} entry [리스트 데이터]
*/
function createLibDatas(entry) {
    var inner_html = '';
    var a_href = '';
    if(entry['STRE_FILE_NAME'] != '') {
        var file_type = "'"+entry['ASSET_TYPE']+"'";
        var file_title = "'"+entry['TITLE']+"'";
        var file_link = "'"+entry['STRE_FILE_NAME']+"'";
        var file_sub = '';
        if(entry['SUMMARY'] != '') {
            file_sub = "'"+entry['SUMMARY']+"'";
        }

        a_href = 'href="javascript:callMediaPop('+file_type+', '+file_title+', '+file_link+', '+file_sub+');" ';
    }

    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(entry['MAIN_IMG'] == '') {
        // inner_html += '<div>';
    } else {
        inner_html += '<div class="thumb">'
        + '<a '+a_href+'title="팝업">'
        + '<img src="'+entry['MAIN_IMG']+'" alt="'+entry['TITLE']+'" />'
        + '</a>'
        + '</div>';
    }
    inner_html += '<div class="data-wrap"><div class="data-tit">';

    if(entry['SIDO_NAME'] != '' || entry['SIGUNGU_NAME'] != '') {
        inner_html += '<p class="classification"><em class="regional">';
        if(entry['SIDO_NAME'] != '') {
            inner_html += entry['SIDO_NAME'];
        }
        if(entry['SIDO_NAME'] != '' && entry['SIGUNGU_NAME'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SIGUNGU_NAME'] != '') {
            inner_html += entry['SIGUNGU_NAME'];
        }
        inner_html += '</em></p>';
    }

    inner_html += '<a '+a_href+'title="팝업">'+entry['TITLE']+'</a>';

    inner_html += '</div>';

    inner_html += '<ul class="list-info">';

    if(entry['FIRST_CATEGORY_NM'] != '' || entry['SECOND_CATEGORY_NM'] != '') {
        inner_html += '<li><em>주제분야 : </em>';
        if(entry['FIRST_CATEGORY_NM'] != '') {
            inner_html += entry['FIRST_CATEGORY_NM'];
        }
        if(entry['FIRST_CATEGORY_NM'] != '' && entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += entry['SECOND_CATEGORY_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['FIRST_CLASS_NM'] != '' || entry['SECOND_CLASS_NM'] != '') {
        inner_html += '<li><em>자료유형 : </em>';
        if(entry['FIRST_CLASS_NM'] != '') {
            inner_html += entry['FIRST_CLASS_NM'];
        }
        if(entry['FIRST_CLASS_NM'] != '' && entry['SECOND_CLASS_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CLASS_NM'] != '') {
            inner_html += entry['SECOND_CLASS_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['COUNCIL'] != '') {
        inner_html += '<li><em>소장문화원 : </em>'+entry['COUNCIL']+'</li>';
    }
    if(entry['PUBLISHER'] != '') {
        inner_html += '<li><em>발행자 : </em>'+entry['PUBLISHER']+'</li>';
    }
    if(entry['GENYEAR'] != '') {
        inner_html += '<li><em>생산년도 : </em>'+entry['GENYEAR']+'</li>';
    }
    if(entry['AUTHOR'] != '') {
        inner_html += '<li><em>저작자 : </em>'+entry['AUTHOR']+'</li>';
    }

    inner_html += '</ul>';

    if(entry['tags'] != '') {
        inner_html += '<ul class="list-tag">';
        $.each(entry['tags'], function(tidx, titem) {
            inner_html += '<li>#'+titem+'</li>';
        });
        inner_html += '</ul>';
    }

    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

/* 공통은 아니야 */

function choiceBoxInput(block_type, arry, code, name, coll) {
    var choice_box = $('#lib_choice_condition > ul');
    var choice_box_id = "'lib_choice_condition'";
    var arry_name_str = "'"+arry.prop('name')+"'";
    var block_type_str = "'"+block_type+"'";
    var coll_str = "'"+coll+"'";
    var inpu_str = "'"+code+"'";

    var inner_block = '<li data-lib'+block_type+'choiceblock="'+code+'"><em>'+name+'</em><button type="button" class="btn-del-filter" onclick="javascript:libDeleteChoiceButton('+block_type_str+', '+choice_box_id+', '+coll_str+', '+arry_name_str+', '+inpu_str+');">삭제</button></li>';

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var vlaues = arry.val().split('||');
        if($.inArray(code, vlaues) < 0) {
            vlaues.push(code);
            choice_box.append(inner_block);

            vlaues = vlaues.join('||');
            arry.val(vlaues);
            callLibList(coll);
        } else {
            libDeleteChoiceBlock(block_type, choice_box, arry, code, coll);
        }
    } else {
        arry.val(code);
        choice_box.append(inner_block);
        callLibList(coll);
    }
}

/**
* [deleteChoiceButton 선택조건 공통 삭제 버튼 클릭]
* @param  {[string]} choice_box_id [선택한 객체의 아이디]
* @param  {[string]} coll_str      [테마 콜렉션]
* @param  {[string]} arry_name     [sojang_council || category || sclass => 히든 인풋의 네임]
* @param  {[string]} inpu_str      [description]
*/
function libDeleteChoiceButton(block_type_str, choice_box_id, coll_str, arry_name, inpu_str) {
    var choice_box = $('#'+choice_box_id + ' ul');
    var coll = coll_str;
    var arry = $('input[name='+arry_name+']');
    var inpu = inpu_str;

    libDeleteChoiceBlock(block_type_str, choice_box, arry, inpu, coll);
}
/**
* [deleteChoiceBlock 선택조건 공통 삭제 함수]
* @param  {[type]} choice_box [description]
* @param  {[type]} arry       [description]
* @param  {[type]} inpu       [description]
* @param  {[type]} coll       [description]
* @return {[type]}            [description]
*/
function libDeleteChoiceBlock(block_type_str, choice_box, arry, inpu, coll) {
    choice_box.find('li[data-lib'+block_type_str+'choiceblock="'+inpu+'"]').remove();
    $('#lib_filter_list_'+block_type_str).find('input[value="'+inpu+'"] + label').removeClass('turnon');

    var arry_val = arry.val();
    arry_val = arry_val.split('|');
    arry_val = jQuery.grep(arry_val, function(value) {
        return value != inpu;
    });
    arry.val(arry_val.join('|'));
    callLibList(coll);
}

/*exported integratedFilterFn*/
"use strict";
$(document).ready(function() {
    if(!$('.section--search-result').length) {
        return;
    }

    // 필터 스크롤시 고정
    scrollEventFilter();
    scrollEventFilter2();

    // 리사이즈 이벤트
    reSizeList();

    // 필터
    // filterFn();
    filterScroll();

    // 추천자료 스와이퍼
    recoSwiper();

    // 리스트 카드 탭
    seeListCard();

});



function reSizeList(){
    $(window).on('throttle.resize', function (){
        recoSwiper();
    });
}

function seeListCard(){

    if($(window).width() > 640){
        $('.list-view-change button').on('click', function(){
            $(this).siblings().removeClass('on');
            $(this).addClass('on');

        });
    }
}

// 지방문화원 소장자료 추천자료 스와이퍼
function recoSwiper(){
    new Swiper('.reco-content.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 25,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            // window width <= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            }
        }
    });
}

// 검색 필터 관련
function integratedFilterFn(list_name) {
    // 검색필터 클릭 시 따라다니는 스크롤 해제
    $('.filter .depth-2 .check input[type="checkbox"] + label').on('click', function (){
        $('.filter-wrap').removeClass('aside-fixed');
    });

    // depth-1 열고 닫기
    $('.filter-tit .btn-toggle').on('click', function () {
        if ($(this).text() == '닫기') {
            $(this).text('열기');
            $(this).addClass('on');
            $(this).parent('.filter-tit').siblings('.filter-list').stop().slideUp();
            $(this).parents('.filter').find('.btn-all-view').css('display', 'none');
            $(this).parents('.filter').find('.btn-toggle-more').css('display', 'none');
        } else {
            $(this).text('닫기');
            $(this).removeClass('on');
            $(this).parent('.filter-tit').siblings('.filter-list').stop().slideDown();
            $(this).parents('.filter').find('.btn-all-view').css('display', 'block');
            $(this).parents('.filter').find('.btn-toggle-more').css('display', 'block');
        }
    });

    // depth-2 보이는지 check 후 버튼 값 설정
    /*$('.filter .depth-1 .btn-toggle').each(function () {
        if ($(this).parent('.depth-1').next('ul').is(':visible')) {
            $(this).text('닫기');
        } else {
            $(this).text('열기');
        }
    });*/

    // depth-2 열고 닫기
    /*$('.filter .depth-1 .btn-toggle').on('click', function () {
        var _this = $(this).parents('li').index();
        if ($(this).text() == '닫기') {
            $(this).text('열기');
            $(this).parent('.depth-1').next().stop().slideUp(0);
            $(this).parent('.depth-1').removeClass('on');
            $('.line-1').removeClass('on');
            $('.line-2').removeClass('on');
            $('.line-3').removeClass('on');
        } else {
            $(this).text('닫기');
            $(this).parent('.depth-1').next().stop().slideDown(0);
            $(this).parent('.depth-1').addClass('on');
            console.log(_this);
            if (_this < 6) {
                $('.line-1').addClass('on');
                $('.line-2').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 6 && _this < 12) {
                $('.line-2').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 12) {
                $('.line-3').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-2').removeClass('on');
            }
        }
    });*/

    //더보기 버튼
    $('.filter .btn-toggle-more').on('click', function () {
        if ($(this).text() == '더보기') {
            $(this).text('접기');
            $(this).siblings('.filter-list').children('ul').children('li').css('display', 'block');
        } else {
            $(this).text('더보기');
            $(this).siblings('.filter-list').children('ul').children('li').each(function () {
                if ($(this).index() > 4) {
                    $(this).css('display', 'none');
                }
            })
        }
    });

    // 문화원 전체보기 팝업 열기
    $('.filter .btn-all-view').on('click', function () {
        $('body').addClass('pop-filter');
        $('.pop-filter .pop-culture-center .filter-list > ul > li:first-child .depth-1').addClass('on');
        $('.pop-filter .pop-culture-center .filter-list > ul > li:first-child .depth-1 .btn-toggle').trigger('click');
        $('.filter-wrap .filter .depth-1').css({background:"none"});
        $('.pop-culture-center .filter-list').css('display','block');
        if ($('.filter-wrap').hasClass('aside-fixed')) {
            $('.filter-wrap').css('position','relative');
        }
    });

    // 문화원 전체보기 팝업 닫기
    $('.filter .pop-btn-wrap .btn-gray').on('click', function () {
        $('body').removeClass('pop-filter');
        $('.filter-wrap .filter .depth-1').css({ background: "url(/cms/imgs/common/icon/icon-bullet.png) no-repeat left center" });
        if ($('.filter-wrap').hasClass('aside-fixed')) {
            $('.filter-wrap').css('position', 'fixed');
        }

        if ($('.filter-wrap .filter-tit .btn-toggle').hasClass('on')){
            $('.pop-culture-center .filter-list').css('display', 'none');

        }else{
            $('.pop-culture-center .filter-list').css('display', 'block');

        }
    });

    /*$(document).on('click', '.pop-filter .depth-1 .btn-toggle', function () {
        $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
    });*/

    // 문화원 팝업 체크된 지역 하위 리스트 보기
    /*$('.depth-1 .check input').each(function () {
        $(this).change(function () {
            var _this = $(this).parents('li').index();
            if ($(this).is(":checked")) {
                $(this).parents('.depth-1').next().stop().slideDown(0);
                $(this).parents('.depth-1').addClass('on');
                $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
                $(this).parents('li').find('.depth-1').children('.btn-toggle').text('닫기');
                $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
                $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
                if (_this < 6) {
                    $('.line-1').addClass('on');
                    $('.line-2').removeClass('on');
                    $('.line-3').removeClass('on');
                } else if (_this >= 6 && _this < 12) {
                    $('.line-2').addClass('on');
                    $('.line-1').removeClass('on');
                    $('.line-3').removeClass('on');
                } else if (_this >= 12) {
                    $('.line-3').addClass('on');
                    $('.line-1').removeClass('on');
                    $('.line-2').removeClass('on');
                }
            }
        });

    });*/

    /* new click event start */
    $('.topic-toggle-dep2-controll').click(function() {
        $(this).parents('li').find('.depth-1').toggleClass('on');
        $(this).parents('li').find('.depth-2').slideToggle();
    });

    $('#layer_pop_council .btn-toggle').each(function () {
        if ($(this).parent('.depth-1').next('ul').is(':visible')) {
            $(this).text('닫기');
        } else {
            $(this).text('열기');
        }
    });

    $('#integrated_'+list_name+'_filter').find('.council-toggle-dep2-controll').off();
    $('#integrated_'+list_name+'_filter').find('.council-toggle-dep2-controll').on('click', function () {
        $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');

        var _this = $(this).parents('li').index();
        var button = $(this).parents('li').find('button');
        if (button.text() == '닫기') {
            button.text('열기');
            button.parent('.depth-1').next().stop().slideUp(0);
            button.parent('.depth-1').removeClass('on');

            $('.line-1').removeClass('on');
            $('.line-2').removeClass('on');
            $('.line-3').removeClass('on');
        } else {
            button.text('닫기');
            button.parent('.depth-1').next().stop().slideDown(0);
            button.parent('.depth-1').addClass('on');

            if (_this < 6) {
                $('.line-1').addClass('on');
                $('.line-2').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 6 && _this < 12) {
                $('.line-2').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 12) {
                $('.line-3').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-2').removeClass('on');
            }
        }
    });

    $('.toggle-dep2-controll').on('click', function () {
        $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');

        var _this = $(this).parents('li').index();
        var button = $(this).parents('li').find('button');
        if (button.text() == '닫기') {
            button.text('열기');
            button.parent('.depth-1').next().stop().slideUp(0);
            button.parent('.depth-1').removeClass('on');

            $('.line-1').removeClass('on');
            $('.line-2').removeClass('on');
            $('.line-3').removeClass('on');
        } else {
            button.text('닫기');
            button.parent('.depth-1').next().stop().slideDown(0);
            button.parent('.depth-1').addClass('on');

            if (_this < 6) {
                $('.line-1').addClass('on');
                $('.line-2').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 6 && _this < 12) {
                $('.line-2').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 12) {
                $('.line-3').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-2').removeClass('on');
            }
        }
    });
    /* new click event end */

    if($(window).width() <= 640){

        $('.mobile-filter').css('display','block');
        $('.list-view-change').css('display','block');
        $('.list-view-change .btn-vtalbe').addClass('on');
        $('.integrated-cms-searched h2').css('display','block');
        $('.integrated-cms-searched .count').css('display','block');
        //$('.list-view-change .btn-vcard','.list-view-change .btn-vtalbe').removeClass('on');

        $('.btn-vcard').on('click', function(){
            $('.list-view-change .btn-vcard').removeClass('on');
            $(this).css({ 'display': 'none'});
            $('.btn-vtalbe').css({ 'display': 'block' });

            $('.integrated-cms-searched-list').find('ul.list').css('display', 'none');
            $('.integrated-cms-searched-list').find('div.related-item').css('display', 'block');
        });

        $('.btn-vtalbe').on('click', function(){
            $('.list-view-change .btn-vtalbe').removeClass('on');
            $(this).css({ 'display': 'none'});
            $('.btn-vcard').css({ 'display': 'block' });

            $('.integrated-cms-searched-list').find('ul.list').css('display', 'block');
            $('.integrated-cms-searched-list').find('div.related-item').css('display', 'none');
        });

        $('.story-box .mobile-filter').on('click', function(){
            $('.filter-wrap').css({'position':'fixed'});
            $('.filter-story').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
        });

        $('.library-box .mobile-filter').on('click', function(){
            $('.filter-wrap').css({'position': 'fixed'});
            $('.filter-library').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
        });

        $('.filter-head .btn-filter-close').on('click', function(){
            $('.filter-wrap').css({ 'position': 'absolute' });
            $('.filter-wrap').css({ 'display': 'none'});
            $('body').css({ 'overflow': 'visible' });
        });
    } else {
        var filter = "win16|win32|win64|mac|macintel";
        if (navigator.platform ) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                // MOBILE
            } else {
                // PC
                $('.list-view-change').css('display','block');
                $('.list-view-change .btn-vtalbe').addClass('on');

                $('.btn-vcard').on('click', function(){
                    $('.list-view-change .btn-vcard').addClass('on');
                    $('.list-view-change .btn-vtalbe').removeClass('on');

                    $('.integrated-cms-searched-list').find('ul.list').css('display', 'none');
                    $('.integrated-cms-searched-list').find('div.related-item').css('display', 'block');
                });

                $('.btn-vtalbe').on('click', function(){
                    $('.list-view-change .btn-vtalbe').addClass('on');
                    $('.list-view-change .btn-vcard').removeClass('on');

                    $('.integrated-cms-searched-list').find('ul.list').css('display', 'block');
                    $('.integrated-cms-searched-list').find('div.related-item').css('display', 'none');
                });
            }
        }
    }
}

function scrollEventFilter(){
    var target = $(".filter-story");

    $(window).on('throttle.scroll', function (e, data){
        // 이야기자료 필터 스크롤할 때 따라다니는 효과
        var position = data.top;
        var winWidth = $(window).width();
        // @note unused
        // var sectionEnd = $('#container').height() + $('#header').height() - $(window).height() - $('#footer').height(); // 본문높이
        // var winHeight = $(window).height();
        // @fixme 리스너 밖으로 이동. 사이드 이펙트 우려
        var positionEnd = $('#wrap').height() - target.outerHeight() - $('#header').height() - 48; // 본문높이
        var rightSectionH = $('.filter-wrap').outerHeight();
        var centerSectionH = $('.article-main').outerHeight();

        target.removeClass('aside-fixed');

        if ( centerSectionH >= rightSectionH ) {

            if (position > 204 && winWidth > 989) { // 브라우저사이즈가 1007PX 이상이고 아래로 스크롤 할 때
                // console.log($('#wrap').height(),target.outerHeight(),$('#wrap').height()-target.outerHeight());
                target.addClass('aside-fixed');
                if (position >= positionEnd) { // 본문의 높이가 서비스콘텐츠 영역과 동일하게 남았을 때 하단으로 고정
                    target.removeClass('aside-fixed');
                    target.addClass('aside-nonfixed');

                } else { // 위로 스크롤 할 때
                    target.removeClass('aside-nonfixed');
                    target.addClass('aside-fixed');

                }

            } else if (position < 204 || winWidth <= 640) { // 최상단이거나 브라우저사이즈가 640PX 이하일 때
                target.removeClass('aside-fixed');

            }
        }

    });

}
function scrollEventFilter2(){
    var target = $(".filter-library");

    $(window).on('throttle.scroll', function (e, data){
        // 소장자료 필터 스크롤할 때 따라다니는 효과
        var position = data.top; // 현재 스크롤바의 위치
        var winWidth = $(window).width();
        // @note unused
        // var sectionEnd = $('#container').height() + $('#header').height() - $(window).height() - $('#footer').height(); // 본문높이
        // var winHeight = $(window).height();
        // @fixme 리스너 밖으로 이동. 사이드 이펙트 우려
        var positionEnd = $('#wrap').height() - target.outerHeight() - $('#header').height() - 48; // 본문높이
        var rightSectionH = $('.filter-wrap').outerHeight();
        var centerSectionH = $('.article-main').outerHeight();

        if ( centerSectionH >= rightSectionH ) {

            if (position > 716 && winWidth > 989) { // 브라우저사이즈가 1007PX 이상이고 아래로 스크롤 할 때
                // console.log($('#wrap').height(),target.outerHeight(),$('#wrap').height()-target.outerHeight());
                target.addClass('aside-fixed');
                if (position >= positionEnd) { // 본문의 높이가 서비스콘텐츠 영역과 동일하게 남았을 때 하단으로 고정
                    target.removeClass('aside-fixed');
                    target.addClass('aside-nonfixed');

                } else { // 위로 스크롤 할 때
                    target.removeClass('aside-nonfixed');
                    target.addClass('aside-fixed');

                }

            } else if (position < 716 || winWidth <= 640) { // 최상단이거나 브라우저사이즈가 640PX 이하일 때
                target.removeClass('aside-fixed');

            }
        }

    });

}

function filterScroll() {
    $(window).on('throttle.scroll', function () {
        if ($('.filter-wrap').hasClass('aside-fixed')){
            $('.filter-wrap').css('margin-left', '-' + $(window).scrollLeft() + 'px');

        }
    });
}

/*exported callStoryFilter,createFormStory*/
"use strict";
/**
* 검색결과 페이지 폼 reset
*/
function StoryListAllDataReset() {
    $('input[name=now_page_1]').val(1);
    $('input[name=page_block_num_1]').val(0);
    $('input[name=second_topics]').val('');
    $('input[name=sojang_council_1]').val('');
    $('#story_choice_condition > ul').empty();
    $('#story_select_layer_pop_council').empty();
    $('#story_filter_topic_depth > li > div').removeClass('on');
    $('#story_filter_topic_depth').find('input[type=checkbox]').prop('checked', false);
    $('#story_layer_pop_council > li > div').removeClass('on');
    $('#story_layer_pop_council').find('input[type=checkbox]').prop('checked', false);
    $('.click-second-topic').removeClass('turnon');
    $('#story_layer_pop_council').find('.click-council-name').removeClass('turnon');
}

/**
*
* @param {string} coll
*/
function callStoryFilter(coll) {
    pageAndPagingReset(1);
    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    var requery = $('input[name=requery]').val(); // 경과내 재검색

    var chr_start = $('input[name=chronological_start]').val();
    var chr_end = $('input[name=chronological_end]').val();
    var age = $('input[name=integrated_age]').val();
    var genyear_start = $('input[name=genyear_start]').val();
    var genyear_end = $('input[name=genyear_end]').val();

    if(typeof search_tag == 'undefined') {
        search_tag = '';
    }

    if(typeof search_keyword == 'undefined') {
        search_keyword = '';
    }

    $.ajax({
        url: '/search/integratedstoryfiltersearch',
        data: {
            coll : coll,
            query : query,
            tag : search_tag,
            keyword : search_keyword,
            exactly : exactly,
            must : must,
            exclude : exclude,
            requery : requery,
            chr_start : chr_start,
            chr_end : chr_end,
            age : age,
            genyear_start : genyear_start,
            genyear_end : genyear_end,
        },
        type: 'GET',
        success: function(data) {
            $('#story_filter_topic_depth').empty();
            $('.filter-story .clear-region-count').empty();
            $('.filter-story .clear-region-count').append('(0)');
            $('#story_layer_pop_council > li > .clear-relact-data').empty();

            var filters = JSON.parse(data);

            // filter topic
            var topic_idx = 0;
            $.each(filters['topics'], function(first_key, tsecond) {
                topic_idx++;
                insertTopic(first_key, tsecond, topic_idx);
            });

            // filter councils
            var counc_count = 1;
            var line_depth = 1;
            $.each(filters['councils'], function(region, councils) {
                insertCouncil(region, councils, counc_count, line_depth);
                counc_count = counc_count + 1;
                if(counc_count % 6 == 1) {
                    line_depth = line_depth + 1;
                }
            });

            // 필터 열기 닫기
            integratedFilterFn('story');

            $('.filter-story .click-second-topic').click(function() {
                pageAndPagingReset(1);
                var second_topics = $('input[name=second_topics]');
                var topic_dataset = $(this).parent().data('secondset');
                var second_topic = $(this).parent().find('input');

                $(this).toggleClass('turnon');
                choiceTopicBoxInput(second_topics, topic_dataset, second_topic, coll);
            });

            $('.filter-story .click-council-name').click(function() {
                pageAndPagingReset(1);
                var choice_councils = $('input[name=sojang_council_1]');
                var choice_council = $(this).parent().find('input');
                var contraction_council = $(this).parent().data('councilset');
                var contraction_region = $(this).parent().data('storyregionname');

                $(this).toggleClass('turnon');
                choiceCouncilBoxInput(choice_councils, choice_council, contraction_region, contraction_council, coll, 1);
            });

            $('#story_select_reset').click(function() {
                StoryListAllDataReset();
                callStoryList(coll);
            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function choiceTopicBoxInput(arry, inpu, select, coll) {
    var choice_box = $('#story_choice_condition > ul');
    var coll_str = "'"+coll+"'";
    var arry_name = "'"+arry.prop('name')+"'";
    var select_str = "'"+select.val()+"'";
    var choice_box_id = "'story_choice_condition'";
    var inner_block = [];
    inner_block.push('<li data-storychoiceblock="'+select.val()+'">');
    inner_block.push('<em>'+inpu+'</em>');
    inner_block.push('<button type="button" class="btn-del-filter" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+select_str+', 1);">삭제</button>');
    inner_block.push('</li>');
    inner_block = inner_block.join('');

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var topics = arry.val().split('|');
        if($.inArray(select.val(), topics) < 0) {
            topics.push(select.val());
            choice_box.append(inner_block);

            topics = topics.join('|');
            arry.val(topics);
            callStoryList(coll);
        } else {
            deleteChoiceBlock(choice_box, arry, select.val(), coll, 1);
        }
    } else {
        arry.val(select.val());
        choice_box.append(inner_block);
        callStoryList(coll);
    }
}

function callStoryList(coll) {
    $('.integrated-cms-searched-list').find('ul.list').empty();
    $('#search_story_count').empty();

    var search_tag = $.getUrlSelect('tag');
    var search_keyword = $.getUrlSelect('keyword');
    var query = $('input[name=integrated_query]').val(); // 검색어
    var exactly = $('input[name=exactly_query]').val(); // 정확히
    var must = $('input[name=must_query]').val(); // 반드시
    var exclude = $('input[name=exclude_query]').val(); // 제외
    var requery = $('input[name=requery]').val(); // 경과내 재검색

    var chr_start = $('input[name=chronological_start]').val();
    var chr_end = $('input[name=chronological_end]').val();
    var age = $('input[name=integrated_age]').val();
    var genyear_start = $('input[name=genyear_start]').val();
    var genyear_end = $('input[name=genyear_end]').val();

    var now_page = $('input[name=now_page_1]').val();
    var amount = $('input[name=amount_1]').val();
    var second_topics = $('input[name=second_topics]').val();
    var sojang_council = $('input[name=sojang_council_1]').val();

    if(typeof search_tag == 'undefined') {
        search_tag = '';
    }

    if(typeof search_keyword == 'undefined') {
        search_keyword = '';
    }

    $.ajax({
        url: '/search/integratedstorylistsearch',
        data: {
            coll: coll,
            now: now_page,
            amount: amount,
            query: query,
            tag: search_tag,
            keyword: search_keyword,
            exactly: exactly,
            must: must,
            exclude: exclude,
            requery: requery,
            chr_start: chr_start,
            chr_end: chr_end,
            age: age,
            genyear_start: genyear_start,
            genyear_end: genyear_end,
            topics: second_topics,
            council: sojang_council,
        },
        type: 'GET',
        beforeSend:function() {
            $('.integrated-cms-searched-list .integrated-list-loading').show();
            $('#search_story_count').append('<em>0</em>');
        },
        success: function(data) {
            $('.integrated-cms-searched-list .integrated-list-loading').hide();
            $('.integrated-cms-searched-list').find('ul.list').empty();
            $('.integrated-cms-searched-list').find('div.related-item').empty();

            var entries = JSON.parse(data);
            var total = entries['count'];

            // if(!existenceValue(requery)) {
            //     $('#search_story_count').html('<em>'+total+'</em>');
            // }
            $('#search_story_count').html('<em>'+total+'</em>');

            if(entries['list'].length == 0 || entries['list'] == [] || entries['list'] == null) {
                var inner_message = '<ul class="list"><li class="no-message"><p>검색 결과가 없습니다.</p></li></ul>';
                $('.integrated-cms-searched-list').empty();
                $('.integrated-cms-searched-list').append(inner_message);
            } else {
                var total_page = Math.ceil(total/amount);
                createPaging(coll, now_page, total_page, 1);

                $.each(entries['list'], function(eidx, entry) {
                    //$('.integrated-cms-searched-list').find('ul.list').append(inputCmsList(entry));
                    $('.integrated-cms-searched-list').find('ul.list').append(inputCmsList(entry));
                    $('.integrated-cms-searched-list').find('div.related-item').append(inputCmsCard(entry));
                });

                dataTxtShave('.item-box .item-summary', 2);
            }
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function insertTopic(first_key, tsecond, topic_idx) {
    var inner_html = '';
    inner_html += '<li>';
    inner_html += '<div class="depth-1 on">';
    // label에 넣는 class="click-first-topic"
    inner_html += '<div class="check" data-firstset="'+first_key+'">'
        + '<label class="topic-toggle-dep2-controll" for="topic_list'+topic_idx+'">'+first_key+' ('+tsecond['count']+')</label>'
        + '<input type="checkbox" id="topic_list'+topic_idx+'" value="'+first_key+'" />'
        + '</div>';
    if(typeof tsecond['list'] != 'undefined' && tsecond['list'] != [] && tsecond['list'] != '') {
        inner_html += '<button type="button" class="btn-toggle" disabled>닫기</button>';
    }
    inner_html += '</div>';
    if(typeof tsecond['list'] != 'undefined' && tsecond['list'] != [] && tsecond['list'] != '') {
        inner_html += '<ul class="depth-2" style="display:block;">';
        var second_idx = 1;
        $.each(tsecond['list'], function(second_key, scount) {
            if(existenceValue(second_key)) {
                inner_html += '<li><div class="check" data-secondset="'+second_key+'"><input type="checkbox" id="topic_list'+topic_idx+'-'+second_idx+'" value="'+first_key+'^'+second_key+'" /><label for="topic_list'+topic_idx+'-'+second_idx+'" class="click-second-topic">'+second_key+' ('+scount+')</label></div></li>';
                second_idx++;
            }
        });
        inner_html += '</ul>';
    }
    inner_html += '</li>';
    $('#story_filter_topic_depth').append(inner_html);
}

function insertCouncil(region, councils) {
    $('#story_region_count_'+region).empty();

    var inner_layer = '';
    var idx = 0;
    var amount = 0;

    if(typeof councils != 'undefined' && councils != [] && councils != '') {
        $.each(councils['list'], function(ccode, cinfo){
            $.each(cinfo, function(cname, ccount) {
                amount = amount + parseInt(ccount);
                idx++;
                inner_layer += '<li>';
                inner_layer += '<div class="check" data-storyregionname="'+councils['city_kr']+'" data-councilset="'+cname+'"><input type="checkbox" id="local-'+region+'-'+idx+'" value="'+ccode+'" /><label for="local-'+region+'-'+idx+'" class="click-council-name">'+cname+'('+ccount+')</label></div>';
                inner_layer += '</li>';
            })
        });
    }

    $('#story_region_count_'+region).append('('+amount+')');
    $('#story_council_region_'+region).append(inner_layer);
}

function createFormStory(entry) {
    var inner_html = '';
    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(existenceValue(entry.media)) {
        inner_html += '<div class="thumb">'
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry.media[0]+'" alt="'+entry.title+'">';
        inner_html += '</a>';
        inner_html += '</div>';
    }
    // 썸네일 넣기 끝

    // data
    inner_html += '<div class="data-wrap"><dl><dt>';
    // region
    if(existenceValue(entry.region) || existenceValue(entry.city)) {
        inner_html += '<p class="classification"><em class="regional">';
        if(existenceValue(entry.region)) {
            inner_html += entry.region;
        }
        if(existenceValue(entry.region) && existenceValue(entry.city)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.city)) {
            inner_html += entry.city;
        }
        inner_html += '</em></p>';
    }

    //title
    inner_html += '<a href="'+entry.url+'" target="_blank" title="새창">'+deleteHtmlTags(entry.title)+'</a>';
    //summary
    if(existenceValue(entry.summary)) {
        inner_html += '<dd class="ellipsis">'+deleteHtmlTags(entry.summary)+'</dd>';
    }
    inner_html += '</dt></dl>';
    // theme
    inner_html += '<ul class="list-info">';

    if(existenceValue(entry.first_topic) || existenceValue(entry.second_topic)) {
        inner_html += '<li><em>이야기주제 : </em>';
        if(existenceValue(entry.first_topic)){
            inner_html += entry.first_topic;
        }
        if(existenceValue(entry.first_topic) && existenceValue(entry.second_topic)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.second_topic)){
            inner_html += entry.second_topic;
        }
        inner_html += '</li>';
    }

    // council
    if(existenceValue(entry.culture_council_Name)) {
        var councils_name = entry.culture_council_Name.split('@');
        councils_name = councils_name.join(', ');
        inner_html += '<li><em>관련문화원 : </em>'+councils_name+'</li>';
    }

    inner_html += '</ul>';
    if(typeof entry.tags == 'object') {
        inner_html += '<ul class="list-tag">';
        $.each(entry.tags, function(tidx, tag) {
            inner_html += '<li>#'+tag+'</li>';
        })
        inner_html += '</ul>';
    }

    // data end
    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

/*exported moduleIntegreatedSearch*/
// 통합 검색 스크립트
var moduleIntegreatedSearch = function (element, options) {
    var state = {
        initialized: false,
        loadPopularityDayKeywords: false
    };

    $(function documentReady () {
        if(!state.initialized) {
            state.initialized = true;

            // 폼 초기화
            initializeForm();
        }

        // 검색 버튼(아이콘) 클릭 - 검색 UI 토글
        $('#search').on('click', function() {
            // 검색 패널 열기
            panelToggle();
        });

        // 모바일 검색 닫기
        $('#header .btn-close-suggest').on('click', function() {
            panelToggle();
        });

        /* 상세검색 시작 */
        /* 시대 항목의 전체 및 세부 항목의 체크 박스 토글 */
        $('#age_click_input').find('input').change(function() {
            var integrated_age = $('input[name=integrated_age]');
            var integrated_age_arr = $.trim(integrated_age.val()).split('|');
            var this_obj = $(this);

            if(this_obj.is(':checked')) {
                if(integrated_age.val() == '') {
                    integrated_age.val(this_obj.val());
                } else {
                    if(this_obj.val() == '전체') {
                        $('#age_click_input').find('input').prop('checked', false);
                        $('#age_click_input').find('input[value='+this_obj.val()+']').prop('checked', true);
                        integrated_age.val();
                        integrated_age.val(this_obj.val());
                    } else {
                        $('#age_click_input').find('input[value=전체]').prop('checked', false);
                        integrated_age_arr = jQuery.grep(integrated_age_arr, function(value) {
                            return value != '전체';
                        });
                        if($.inArray(integrated_age_arr, this_obj.val()) < 0) {
                            integrated_age_arr.push(this_obj.val());
                        }
                        integrated_age.val(integrated_age_arr.join('|'));
                    }
                }
            } else {
                integrated_age_arr = jQuery.grep(integrated_age_arr, function(value) {
                    return value != this_obj.val();
                });
                integrated_age.val(integrated_age_arr.join('|'));
            }
        });

        // 상세 검색 > 자료 유형. 체크 박스 선택 시
        $('#class_click_input').find('input').change(function() {
            integratedSearchSelect('class', $(this));
        });

        // 상세 검색 > 지역/문화원. 체크 박스 선택 시
        $('#council_click_input').find('input').change(function() {
            integratedSearchSelect('council', $(this));
        });

        // 검색어 입력 시 자동완성
        // debounced
        $('input[name=integrated_query]').keyup(debounced(600, function () {
            if(!existenceValue(getCookie('auto_search_off'))) {
                var query = $.trim($('input[name=integrated_query]').val());

                // 검색어가 없으면 비우고 중단
                if(!existenceValue(query)) {
                    $('#auto_search_keyword_list').empty();
                    return;
                }

                $.ajax({
                    url:'/search/autosearchlist',
                    data: {
                        query: query
                    },
                    type: 'GET',
                    success: function(data) {
                        $('#auto_search_keyword_list').empty();

                        $.each(data, function(idx, keyword) {
                            var str_keyword = "'"+keyword+"'";
                            var re_keyword = keyword.replace(query , '<strong>'+query+'</strong>');
                            var inner_html = '<li><a href="javascript:window.integreatedSearch.inputIntegSearchForm('+str_keyword+');">'+re_keyword+'</a></li>';
                            $('#auto_search_keyword_list').append(inner_html);
                        });
                    },
                    error:function(request,status,error){
                        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                    }
                });
            }
        }));

        // 폼 전송
        $('.integrated-searched-submit').submit(function() {
            var query = $.trim($(this).find('input[name=integrated_query]').val());
            var fullDate = new Date();
            var month = String(fullDate.getMonth() + 1);
            var twoDigitMonth = (month.length != 1) ? month : '0' + month;
            var currentDate = fullDate.getFullYear() + "." + twoDigitMonth + "." + fullDate.getDate();
            var keyword = query+'::'+currentDate;

            if(!existenceValue(query)) {
                alert('검색어를 입력하세요.');
                return false;
            } else {
                if(!existenceValue(getCookie('recent_searches_off'))) {
                    if(!existenceValue(getCookie('recent_searches'))) {
                        setCookie("recent_searches", keyword, 7);
                    } else {
                        var recent_searches = getCookie('recent_searches');
                        recent_searches = recent_searches.split('||');
                        var submit_bool = true;

                        $.each(recent_searches, function(rsidx, rscookie) {
                            var cookies = rscookie.split('::');
                            if($.inArray(query, cookies) >= 0) {
                                submit_bool = false;
                            }
                        });

                        if(submit_bool) {
                            recent_searches.push(keyword);
                            recent_searches = recent_searches.join('||');
                            deleteCookie('recent_searches');
                            setCookie('recent_searches', recent_searches, 7);
                        }
                    }
                }
            }
        });
        /* 상세검색 끝 */

        // 최근검색어 - 전체 삭제
        $('#header_recent_search_buttons').find('.btn-all-del').click(function() {
            deleteCookie('recent_searches');
            $('#header_recent_search_queries').empty();
        });

        // 자동완성 켜기/끄기
        $('#auto_search_keywords').find('.auto-keyword').click(function() {
            if(existenceValue(getCookie('auto_search_off'))) {
                deleteCookie('auto_search_off');
            } else {
                setCookie('auto_search_off', 'Y', 7);
            }
        });

        //
        $('#header_recent_search_buttons').find('.btn-last-off').click(function() {
            if(existenceValue(getCookie('recent_searches_off'))) {
                deleteCookie('recent_searches_off');
            } else {
                setCookie('recent_searches_off', 'Y', 7);
            }
        });
    })

    /**
    * 검색 패널 토글
    */
    function panelToggle (mode) {
        if(!existenceValue(mode)) {
            mode = 'toggle';
        }

        // 인기 검색어 로드
        if(!state.loadPopularityDayKeywords) {
            loadPopularityDayKeywords();
            state.loadPopularityDayKeywords = true;
        }

        if (mode === 'open') {
            $('#header').addClass('active-search');
        } else if (mode === 'close') {
            $('#header').removeClass('active-search');
        } else {
            $('#header').toggleClass('active-search');
        }

        if ($('#header').hasClass('active-search')) {
            if ($(window).width() <= 640) {
                $('.search-wrap').addClass('mobile');
            } else {
                $('.search-wrap .search-input input').focus();
            }
            $(this).text('닫기');
        } else {
            $('.search-wrap').removeClass('mobile');
            $(this).text('검색');
        }
    }

    /* 파라미터 값이 있을 경우, 없을 경우 */
    function initializeForm() {
        if(existenceValue($.getUrlSelect('integrated_query'))) {
            $('input[name=integrated_query]').val(decodeURIComponent($.getUrlSelect('integrated_query')).replace(/\+/g, ' '));
        }
        if(existenceValue($.getUrlSelect('exactly_query'))) {
            $('input[name=exactly_query]').val(decodeURI($.getUrlSelect('exactly_query')));
        }
        if(existenceValue($.getUrlSelect('must_query'))) {
            $('input[name=must_query]').val(decodeURI($.getUrlSelect('must_query')));
        }
        if(existenceValue($.getUrlSelect('exclude_query'))) {
            $('input[name=exclude_query]').val(decodeURI($.getUrlSelect('exclude_query')));
        }
        if(existenceValue($.getUrlSelect('mgnt_no'))) {
            $('input[name=mgnt_no]').val(decodeURI($.getUrlSelect('mgnt_no')));
        }
        if(existenceValue($.getUrlSelect('chronological_start'))) {
            $('input[name=chronological_start]').val(decodeURI($.getUrlSelect('chronological_start')));
        }
        if(existenceValue($.getUrlSelect('chronological_end'))) {
            $('input[name=chronological_end]').val(decodeURI($.getUrlSelect('chronological_end')));
        }
        if(existenceValue($.getUrlSelect('genyear_start'))) {
            $('input[name=genyear_start]').val(decodeURI($.getUrlSelect('genyear_start')));
        }
        if(existenceValue($.getUrlSelect('genyear_end'))) {
            $('input[name=genyear_end]').val(decodeURI($.getUrlSelect('genyear_end')));
        }
        if(existenceValue($.getUrlSelect('integrated_age'))) {
            var integrated_age = decodeURI($.getUrlSelect('integrated_age'));
            var integrated_age_arr = integrated_age.split('|');

            $('input[name=integrated_age]').val(decodeURI(integrated_age));

            $.each(integrated_age_arr, function(aidx, integage) {
                $('#age_click_input').find('input[value="'+integage+'"]').prop('checked', true);
            });
        }

        /*문화원이 상세검색에서 선택될 경우, 이야기 자료, 소장자료 선택 시작*/
        if(existenceValue($.getUrlSelect('integrated_council'))) {
            var integrated_council = decodeURI($.getUrlSelect('integrated_council'));
            var integrated_council_arr = integrated_council.split('|');
            var choice_box = $('#integrated_council_choice_box');

            $('input[name=integrated_council]').val(decodeURI(integrated_council));

            console.debug('integrated_council_arr', integrated_council_arr)
            $.each(integrated_council_arr, function(cidx, integcouncil) {
                var this_obj = $('#council_click_input').find('input[value="'+integcouncil+'"]');
                var parent_name = this_obj.parents('ul').data('parentset');
                var this_name = this_obj.next().text();

                this_obj.prop('checked', true);
                this_obj.parents('.depth1').find('.depth1-check input[type=checkbox]').prop('checked', true);
                choice_box.append('<li data-thisset="'+integcouncil+'"><button type="button" onclick="window.integreatedSearch.integDeleteParentBtn('+"'council'"+', '+"'"+integcouncil+"'"+');" title="삭제">'+parent_name+' <span class="sign">&gt;</span> '+this_name+'</button></li>');
            });
        }
        if(existenceValue($.getUrlSelect('integrated_class'))) {
            var integrated_class = decodeURI($.getUrlSelect('integrated_class'));
            var integrated_class_arr = integrated_class.split('|');
            choice_box = $('#integrated_class_choice_box');

            $('input[name=integrated_class]').val(decodeURI(integrated_class));

            $.each(integrated_class_arr, function(cidx, integclass) {
                var this_obj = $('#class_click_input').find('input[value="'+integclass+'"]');
                var parent_name = this_obj.parents('ul').data('parentset');
                var this_name = this_obj.next().text();

                this_obj.prop('checked', true);
                this_obj.parents('.depth1').find('.depth1-check input[type=checkbox]').prop('checked', true);
                choice_box.append('<li data-thisset="'+integclass+'"><button type="button" onclick="window.integreatedSearch.integDeleteParentBtn('+"'class'"+', '+"'"+integclass+"'"+');" title="삭제">'+parent_name+' <span class="sign">&gt;</span> '+this_name+'</button></li>');
            });
        }
        /*문화원이 상세검색에서 선택될 경우, 이야기 자료, 소장자료 선택 끝*/

        /* 쿠키 자동완성 값이 있을 경우, 없을 경우 시작 */
        if(existenceValue(getCookie('auto_search_off'))) {
            $('#auto_search_keywords .auto-keyword').text('자동완성켜기');
            $('#auto_search_keywords').addClass('off');
            $('#auto_search_keyword_list').css('display', 'none');
        } else {
            $('#auto_search_keywords .auto-keyword').text('자동완성끄기');
            $('#auto_search_keywords').removeClass('off');
            $('#auto_search_keyword_list').css('display', 'block');
        }

        if(existenceValue(getCookie('recent_searches_off'))) {
            $('#header_recent_search_buttons .btn-last-off').text('검색어저장 켜기');
            $('#header_recent_search_buttons').addClass('no-save');
            $('#header_recent_search_queries').css('display', 'none');
        } else {
            $('#header_recent_search_buttons .btn-last-off').text('검색어저장 끄기');
            $('#header_recent_search_buttons').removeClass('no-save');
            $('#header_recent_search_queries').css('display', 'block');
        }

        // 최근 검색어 - 데이터 출력
        if(existenceValue(getCookie('recent_searches'))) {
            $('#header_recent_search_queries').empty();
            var recent_searches = getCookie('recent_searches');
            recent_searches = unescape(unescape(recent_searches));
            recent_searches = recent_searches.split('||');

            $.each(recent_searches, function(idx, keyword) {
                var keywords = keyword.split('::');
                var inner_html = '<li data-integratedset="'+keyword+'">'
                + '<a href="/' + options.segment1 + '/search?integrated_query='+keywords[0]+'">'+keywords[0]+'</a>'
                + '<span>'
                + '<em class="date">'+keywords[1]+'</em>'
                + '<button type="button" onclick="window.integreatedSearch.deleteIntegratedSearched('+"'"+keyword+"'"+');" class="btn-del">삭제</button>'
                + '</span>'
                + '</li>';
                $('#header_recent_search_queries').append(inner_html);
            });
        }
        /* 쿠키 자동완성 값이 있을 경우, 없을 경우 끝 */
    }

    /**
    * 인기 검색어 로드
    */
    function loadPopularityDayKeywords () {
        $.ajax({
            url:'/search/popularitydaykeywords',
            type: 'GET',
            success: function(data) {
                if(existenceValue(data)) {
                    $.each(data, function(direction, keywords) {
                        var inner_html = [];
                        inner_html.push('<div class="ol-column '+direction+'">');
                        inner_html.push('<ol>');
                        $.each(keywords, function(idx, keyword) {
                            inner_html.push('<li><a href="/' + options.segment1 + '/search?integrated_query='+keyword+'">'+keyword+'</a></li>');
                        });
                        inner_html.push('</ol>');
                        inner_html.push('</div>');

                        $('#popularity_keyword_list').append(inner_html.join(''));
                    });
                }
            }, error:function(request,status,error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });
    }

    /**
    * 상세 검색. 자료유형, 지역/문화원 선택 시 선택한 항목 표시
    *
    * @param {string} kinds
    * @param {object} this_obj
    */
    function integratedSearchSelect(kinds, this_obj) {
        var integrated_obj = $('input[name=integrated_'+kinds+']');
        var integrated_obj_arr = $.trim(integrated_obj.val()).split('|');
        var choice_box = $('#integrated_'+kinds+'_choice_box');
        var parent_name = this_obj.parents('ul').data('parentset');
        var this_name = this_obj.next().text();

        if(this_obj.is(':checked')) {
            if(integrated_obj.val() == '') {
                integrated_obj.val(this_obj.val());
                choice_box.append('<li data-thisset="'+this_obj.val()+'"><button type="button" onclick="window.integreatedSearch.integDeleteParentBtn('+"'"+kinds+"'"+', '+"'"+this_obj.val()+"'"+');" title="삭제">'+parent_name+' <span class="sign">&gt;</span> '+this_name+'</button></li>');
            } else {
                if($.inArray(integrated_obj_arr, this_obj.val()) < 0) {
                    integrated_obj_arr.push(this_obj.val());
                    choice_box.append('<li data-thisset="'+this_obj.val()+'"><button type="button" onclick="window.integreatedSearch.integDeleteParentBtn('+"'"+kinds+"'"+', '+"'"+this_obj.val()+"'"+');" title="삭제">'+parent_name+' <span class="sign">&gt;</span> '+this_name+'</button></li>');
                }
                integrated_obj.val(integrated_obj_arr.join('|'));
            }
        } else {
            integrated_obj_arr = jQuery.grep(integrated_obj_arr, function(value) {
                return value != this_obj.val();
            });

            $('li[data-thisset="'+this_obj.val()+'"]').remove();
            integrated_obj.val(integrated_obj_arr.join('|'));
        }
    }
    /**
    * 상세검색. 자료유형, 지역/문화원 필터 제거
    * @param {string} kinds
    * @param {string} remove_val
    */
    function integDeleteParentBtn(kinds, remove_val) {
        var integrated_obj = $('input[name=integrated_'+kinds+']');
        // eslint-disable-next-line
        var integrated_obj_arr = $.trim(integrated_obj.val()).split('|');
        var choice_box = $('#integrated_'+kinds+'_choice_box');
        var choice_obj = $('#'+kinds+'_click_input').find('input[value='+remove_val+']');

        choice_box.find('li[data-thisset="'+remove_val+'"]').remove();
        integrated_obj_arr = jQuery.grep(integrated_obj_arr, function(value) {
            return value != remove_val;
        });

        choice_obj.prop('checked', false);
        var childs = choice_obj.parents('.depth2').find('input[type=checkbox]');
        var checked_stt = false;
        for (var i = 0; i < childs.length; i++) {
            if(childs[i].checked) {
                checked_stt = true;
            }
        }
        if(!checked_stt) {
            choice_obj.parents('.depth1').find('.depth1-check input[type=checkbox]').prop('checked', false);
        }
    }

    /**
    * 지정한 키워드로 검색폼 전송
    * @param {string} keyword
    */
    function inputIntegSearchForm(keyword) {
        $('input[name=integrated_query]').val(keyword);
        $('.integrated-searched-submit').submit();
    }

    /**
    * 최근 검색어. 지정된 키워드 항목 제거
    * @param {string} keyword
    */
    function deleteIntegratedSearched(keyword) {
        var recent_searches = getCookie('recent_searches');
        recent_searches = recent_searches.split('||');

        recent_searches = jQuery.grep(recent_searches, function(value) {
            return value != keyword;
        });
        recent_searches = recent_searches.join('||');

        deleteCookie('recent_searches');
        setCookie('recent_searches', recent_searches, 7);
        $('[data-integratedset="'+keyword+'"]').remove();
    }

    // public
    return {
        panelToggle: panelToggle,
        panelOpen: function () { panelToggle('open') },
        panelClose: function () { panelToggle('close') },
        integDeleteParentBtn: integDeleteParentBtn,
        inputIntegSearchForm: inputIntegSearchForm,
        deleteIntegratedSearched: deleteIntegratedSearched,
    };
};

/*exported callLibFilter,libDeleteChoiceButton,pagePreBlank,pageNextBlank,pageFirstBlank,pageLastBlank,pageBlank,deleteChoiceButton*/
"use strict";
function pageAndPagingReset() {
    $('input[name=now_page]').val(1);
    $('input[name=page_block_num]').val(0);
}
function libListAllDataReset() {
    $('input[name=now_page]').val(1);
    $('input[name=page_block_num]').val(0);
    $('input[name=second_category]').val('');
    $('input[name=second_class]').val('');
    $('input[name=sojang_council]').val('');
    $('#lib_choice_condition > ul').empty();
    $('#lib_select_layer_pop_council').empty();
    $('#lib_filter_topic_depth > li > div').removeClass('on');
    $('#lib_filter_topic_depth').find('input[type=checkbox]').prop('checked', false);
    $('#lib_layer_pop_council > li > div').removeClass('on');
    $('#lib_layer_pop_council').find('input[type=checkbox]').prop('checked', false);
    $('#lib_layer_pop_council').find('.click-council-name').removeClass('turnon');
    $('.click-class-name').removeClass('turnon');
    $('.click-category-name').removeClass('turnon');
}
function callLibFilter(coll) {
    pageAndPagingReset();
    var keyword_set = $('input[name=theme_keywords]').val();
    var query = $('input[name=search_lib_query]').val();

    if(typeof window.search_tag == 'undefined') {
        window.search_tag = '';
    }

    $.ajax ({
        url: '/search/integratedlibfiltersearch?coll='+coll
        +'&keyword_set='+keyword_set
        +'&query='+query,
        type: 'GET',
        success: function(data) {
            $('#lib_filter_topic_depth').empty();
            $('.filter-library .clear-region-count').empty();
            $('.filter-library .clear-region-count').append('(0)');
            $('#lib_layer_pop_council .clear-relact-data').empty();
            $('#lib_filter_list_category').empty();
            $('#lib_filter_list_class').empty();

            var filters = JSON.parse(data);

            // filter councils
            $.each(filters['councils'], function(region, councils) {
                libInsertCouncil(region, councils);
            });

            $.each(filters['categories'], function(top, middles) {
                insertLibFilters('category', top, middles);
            });

            var class_obj_leg = 0;
            $.each(filters['class'], function(top, middles) {
                insertLibFilters('class', top, middles);
                class_obj_leg++;
            });

            if(class_obj_leg <= 5) {
                $('#class_more_btn').css('display', 'none');
            }

            // 필터 열기 닫기
            filterFn();

            $('.click-council-name').click(function() {
                pageAndPagingReset();
                var choice_councils = $('input[name=sojang_council]');
                var choice_council = $(this).parent().find('input');
                var contraction_council = $(this).parent().data('libleadingname');
                var contraction_region = $(this).parent().data('libregionname');
                $(this).toggleClass('turnon');
                //choiceCouncilBoxInput(choice_councils, choice_council, contraction_region, contraction_council, coll, 2);
                choiceCouncilBoxInput(choice_councils, choice_council, contraction_region, contraction_council, coll, 2);
            });
            $('.click-category-name').click(function() {
                pageAndPagingReset();
                var search_cate = $('input[name=second_category]');
                var choice_cate_code = $(this).parent().find('input').val();
                var choice_cate_name = $(this).parent().data('libleadingname');
                $(this).toggleClass('turnon');
                choiceBoxInput('category', search_cate, choice_cate_code, choice_cate_name, coll);
            });
            $('.click-class-name').click(function() {
                pageAndPagingReset();
                var search_cate = $('input[name=second_class]');
                var choice_cate_code = $(this).parent().find('input').val();
                var choice_cate_name = $(this).parent().data('libleadingname');
                $(this).toggleClass('turnon');
                choiceBoxInput('class', search_cate, choice_cate_code, choice_cate_name, coll);
            });

            $('#lib_select_reset').click(function() {
                libListAllDataReset();
                callLibList(coll);
            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function callLibList(coll) {
    $('#theme_library_data_list').find('ul.list').empty();
    $('#search_lib_count').empty();

    var keyword_set = $('input[name=theme_keywords]').val();
    var query = $('input[name=search_lib_query]').val(); // 경과내 재검색

    var now_page = $('input[name=now_page]').val();
    var amount = $('input[name=amount]').val();
    var second_category = $('input[name=second_category]').val();
    var second_class = $('input[name=second_class]').val();
    var sojang_council = $('input[name=sojang_council]').val();

    if(typeof window.search_tag == 'undefined') {
        window.search_tag = '';
    }

    $.ajax ({
        url: '/search/integratedliblistsearch',
        data: {
            coll: coll,
            keyword_set: keyword_set,
            now: now_page,
            amount: amount,
            query: query,
            sojang_council: sojang_council,
            second_category: second_category,
            second_class: second_class,
        },
        type: 'GET',
        beforeSend:function() {
            $('.integrated-list-loading').show();
            // 페이징 삭제
            $('#lib_list_paging').empty();
        },
        success: function(data) {
            $('.integrated-list-loading').hide();
            $('#theme_library_data_list').find('ul.list').empty();

            var entries = JSON.parse(data);
            var total = entries['count'];

            if(!existenceValue(query)) {
                $('.m-use.count > em').html(total);
            }

            $('#search_lib_count').html('<em>'+total+'</em>');

            if(entries['list'].length == 0 || entries['list'] == [] || entries['list'] == null) {
                var inner_message = '<li class="no-message"><p>검색 결과가 없습니다.</p></li>';
                $('#theme_library_data_list').find('ul.list').empty();
                $('#theme_library_data_list').find('ul.list').append(inner_message);

                // 페이징 삭제
                $('#lib_list_paging').empty();
            } else {
                var total_page = Math.ceil(total/amount);
                createPaging(coll, now_page, total_page);

                $.each(entries['list'], function(eidx, entry) {
                    $('#theme_library_data_list').find('ul.list').append(createLibDatas(entry));
                });
            }

            $('.contents .filter-wrap.filter-library').removeClass("aside-fixed");
            $('.contents .filter-wrap.filter-library').removeClass("aside-nonfixed");
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

/**
* [libInsertCouncil 지역 / 문화원 필터 입력]
* @param  {[string]} region   [지역 영문 이름]
* @param  {[array]} councils [문화원 정보 배열]
*/
function libInsertCouncil(region, councils) {
    $('#lib_region_count_'+region).empty();

    var inner_layer = '';
    var idx = 0;
    var amount = 0;

    if(typeof councils != 'undefined' && councils != [] && councils != '') {
        $.each(councils['list'], function(ccode, cinfo){
            $.each(cinfo, function(cname, ccount) {
                amount = amount + parseInt(ccount);
                idx++;
                inner_layer += '<li>';
                inner_layer += '<div class="check" data-libregionname="'+councils['city_kr']+'" data-libleadingname="'+cname+'"><input type="checkbox" id="local-'+region+'-'+idx+'" value="'+ccode+'" /><label for="local-'+region+'-'+idx+'" class="click-council-name">'+cname+'('+ccount+')</label></div>';
                inner_layer += '</li>';
            })
        });
    }

    $('#lib_region_count_'+region).append('('+amount+')');
    $('#lib_council_region_'+region).append(inner_layer);
}

/**
* [insertLibFilters 필터 주제분야]
* @param  {[type]} top     [대주제분야]
* @param  {[type]} middles [중주제분야 정보]
*/
function insertLibFilters(type, top, middles) {
    if(top != '') {
        var inid;
        var main_id;
        if(type == 'category') {
            inid = 'lib_filter_list_category';
            main_id = 'ct_';
        } else {
            inid = 'lib_filter_list_class';
            main_id = 'cl_';
        }

        var inner_category = '';
        var amount = 0;

        inner_category += '<li>';
        inner_category += '<div class="depth-1">';
        inner_category += '<div class="check"><input type="checkbox" id="'+main_id+middles['code']+'" /><label for="'+main_id+middles['code']+'" class="toggle-dep2-controll">'+top+' <span id="'+main_id+'count_'+middles['code']+'" class="filters-clear-count"></span></label></div>';
        inner_category += '<button type="button" class="btn-toggle" disabled="disabled">열기</button>';
        inner_category += '</div>';

        inner_category += '<ul class="depth-2">';

        $.each(middles['list'], function(mcode, minfo) {
            $.each(minfo, function(mname, mcount) {
                if(mname != '') {
                    inner_category += '<li><div data-libleadingname="'+mname+'" class="check"><input type="checkbox" id="'+main_id+middles['code']+'_'+mcode+'" value="'+mcode+'" /><label for="'+main_id+middles['code']+'_'+mcode+'" class="click-'+type+'-name">'+mname+' ('+mcount+')</label></div></li>';
                    amount = amount + parseInt(mcount);
                }
            });
        });

        inner_category += '</ul>'
        inner_category += '</li>';

        $('#'+inid).append(inner_category);
        $('#'+inid).find('#'+main_id+'count_'+middles['code']).empty();
        $('#'+inid).find('#'+main_id+'count_'+middles['code']).append('('+amount+')');
    }
}

/**
* [createLibDatas 리스트 만들기]
* @param  {[array]} entry [리스트 데이터]
*/
function createLibDatas(entry) {
    var inner_html = '';

    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(entry['MAIN_IMG'] == '') {
        inner_html += '<div class="thumb">';
        //inner_html += '<img src="'+entry['MAIN_IMG']+'" alt="'+entry['TITLE']+'" />';
        inner_html += '<img src="/assets/korean-war/194_211_21831.jpg" alt="'+entry['TITLE']+' 이미지" />';
        inner_html += '</div>';
    }
    // 썸네일 넣기 끝

    var file_type = entry['ASSET_TYPE'];
    var file_id = entry['ASSETS_ID'];
    if(entry['STRE_FILE_NAME'] != '') {
        if(entry['ASSET_TYPE'] == '이미지') {
            inner_html += '<a href="javascript:libraryImagePop(\''+entry['DOCID']+'\','+file_id+',\''+file_type+'\');" class="btn-view-original">';
        } else if(entry['ASSET_TYPE'] == '문서') {
            inner_html += '<a href="'+entry['STRE_FILE_NAME']+'" target="_blank" class="btn-view-original">';
        } else if(entry['ASSET_TYPE'] == '동영상') {
            inner_html += '<a href="javascript:libraryVideoPop(\''+entry['DOCID']+'\','+file_id+',\''+file_type+'\')" class="btn-view-original">';
        } else if(entry['ASSET_TYPE'] == '오디오') {
            //inner_html += '<a href="javascript:libraryAudioPop(\''+entry['DOCID']+'\','+file_id+',\''+file_type+'\');" class="btn-view-original">';
            inner_html += '<a href="javascript:libraryVideoPop(\''+entry['DOCID']+'\','+file_id+',\''+file_type+'\')" class="btn-view-original">';
        } else if(entry['ASSET_TYPE'] == '링크') {
            inner_html += '<a href="'+entry['LINK_DATA']+'" target="_blank">';
        }

        if(entry['ASSET_TYPE'] != '목록')
        inner_html += '원본보기</a>';
    }

    inner_html += '<div class="data-wrap"><dl><dt>';

    if(entry['SIDO_NAME'] != '' || entry['SIGUNGU_NAME'] != '') {
        inner_html += '<p class="classification"><em class="regional">';
        if(entry['SIDO_NAME'] != '') {
            inner_html += entry['SIDO_NAME'];
        }
        if(entry['SIDO_NAME'] != '' && entry['SIGUNGU_NAME'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SIGUNGU_NAME'] != '') {
            inner_html += entry['SIGUNGU_NAME'];
        }
        inner_html += '</em></p>';
    }

    inner_html += '<a href="javascript:void(0);" style="cursor: default;">'+entry['TITLE']+'</a>';

    inner_html += '</dt></dl>';

    inner_html += '<ul class="list-info">';

    if(entry['FIRST_CATEGORY_NM'] != '' || entry['SECOND_CATEGORY_NM'] != '') {
        inner_html += '<li><em>주제분야 : </em>';
        if(entry['FIRST_CATEGORY_NM'] != '') {
            inner_html += entry['FIRST_CATEGORY_NM'];
        }
        if(entry['FIRST_CATEGORY_NM'] != '' && entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CATEGORY_NM'] != '') {
            inner_html += entry['SECOND_CATEGORY_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['FIRST_CLASS_NM'] != '' || entry['SECOND_CLASS_NM'] != '') {
        inner_html += '<li><em>자료유형 : </em>';
        if(entry['FIRST_CLASS_NM'] != '') {
            inner_html += entry['FIRST_CLASS_NM'];
        }
        if(entry['FIRST_CLASS_NM'] != '' && entry['SECOND_CLASS_NM'] != '') {
            inner_html += ' &gt; ';
        }
        if(entry['SECOND_CLASS_NM'] != '') {
            inner_html += entry['SECOND_CLASS_NM'];
        }
        inner_html += '</li>';
    }

    if(entry['COUNCIL'] != '') {
        inner_html += '<li><em>소장문화원 : </em>'+entry['COUNCIL']+'</li>';
    }
    if(entry['COPYRIGHT'] != '') {
        inner_html += '<li><em>발행기관 : </em>'+entry['COPYRIGHT']+'</li>';
    } else {
        if(entry['PUBLISHER'] != '') {
            inner_html += '<li><em>발행기관 : </em>'+entry['PUBLISHER']+'</li>';
        }
    }
    if(entry['GENYEAR'] != '' && entry['GENYEAR'] != '0') {
        inner_html += '<li><em>생산년도 : </em>'+entry['GENYEAR']+'</li>';
    }
    if(entry['COUNCIL'] != '') {
        inner_html += '<li><em>저작자 : </em>'+entry['COUNCIL']+'</li>';
    }

    inner_html += '</ul>';
    if(entry['TAGS'] != '') {
        inner_html += '<ul class="list-tag">';
        $.each(entry['TAGS'], function(tidx, titem) {
            inner_html += '<li>#'+titem+'</li>';
        });
        inner_html += '</ul>';
    }

    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

/* 공통은 아니야 */

function choiceBoxInput(block_type, arry, code, name, coll) {
    var choice_box = $('#lib_choice_condition > ul');
    var choice_box_id = "'lib_choice_condition'";
    var arry_name_str = "'"+arry.prop('name')+"'";
    var block_type_str = "'"+block_type+"'";
    var coll_str = "'"+coll+"'";
    var inpu_str = "'"+code+"'";

    var inner_block = '<li data-lib'+block_type+'choiceblock="'+code+'"><em>'+name+'</em><button type="button" class="btn-del-filter" onclick="javascript:libDeleteChoiceButton('+block_type_str+', '+choice_box_id+', '+coll_str+', '+arry_name_str+', '+inpu_str+');">삭제</button></li>';

    var arry_val = arry.val();
    if(arry_val != '' && arry_val != [] && arry_val != null) {
        var values = new Array();
        if (arry.val().indexOf('||') != -1) {
            values = arry_val.split('||');
            if($.inArray(code, values) < 0) {
                values.push(code);
                choice_box.append(inner_block);

                values = values.join('||');
                arry.val(values);
                callLibList(coll);
            } else {
                libDeleteChoiceBlock(block_type, choice_box, arry, code, coll);
            }
        } else {
            if (arry_val != code) {
                arry.val(arry_val+'||'+code);
                choice_box.append(inner_block);
                callLibList(coll);
            } else {
                libDeleteChoiceBlock(block_type, choice_box, arry, code, coll);
            }
        }
        // var vlaues = arry.val().split('||');
        // if($.inArray(code, vlaues) < 0) {
        //     vlaues.push(code);
        //     choice_box.append(inner_block);
        //
        //     vlaues = vlaues.join('||');
        //     arry.val(vlaues);
        //     callLibList(coll);
        // } else {
        //     libDeleteChoiceBlock(block_type, choice_box, arry, code, coll);
        // }
    } else {
        arry.val(code);
        choice_box.append(inner_block);
        callLibList(coll);
    }
}

/**
* [deleteChoiceButton 선택조건 공통 삭제 버튼 클릭]
* @param  {[string]} choice_box_id [선택한 객체의 아이디]
* @param  {[string]} coll_str      [테마 콜렉션]
* @param  {[string]} arry_name     [sojang_council || category || sclass => 히든 인풋의 네임]
* @param  {[string]} inpu_str      [description]
*/
function libDeleteChoiceButton(block_type_str, choice_box_id, coll_str, arry_name, inpu_str) {
    var choice_box = $('#'+choice_box_id + ' ul');
    var coll = coll_str;
    var arry = $('input[name='+arry_name+']');
    var inpu = inpu_str;

    libDeleteChoiceBlock(block_type_str, choice_box, arry, inpu, coll);
}
/**
* [deleteChoiceBlock 선택조건 공통 삭제 함수]
* @param  {[type]} choice_box [description]
* @param  {[type]} arry       [description]
* @param  {[type]} inpu       [description]
* @param  {[type]} coll       [description]
* @return {[type]}            [description]
*/
function libDeleteChoiceBlock(block_type_str, choice_box, arry, inpu, coll) {
    choice_box.find('li[data-lib'+block_type_str+'choiceblock="'+inpu+'"]').remove();
    $('#lib_filter_list_'+block_type_str).find('input[value="'+inpu+'"] + label').removeClass('turnon');

    var arry_val = arry.val();
    if (arry_val.indexOf('||') != -1) {
        arry_val = arry_val.split('||');
        arry_val = jQuery.grep(arry_val, function(value) {
            return value != inpu;
        });
        arry.val(arry_val.join('||'));
    } else {
        arry.val('');
    }
    callLibList(coll);
}

function createPaging(coll, now, total) {
    $('#lib_list_paging').empty();
    // 페이징 만들기
    now = parseInt(now);
    total = parseInt(total);
    coll = "'"+coll+"'";

    var inner_html = '';
    var page_block_name = 'page_block_num';
    var page_block_num = parseInt($('input[name='+page_block_name+']').val());
    var total_page = [];
    var total_block = [];
    var page_block = 0;

    for(var num = 1; num <= total; num++) {
        total_page.push(num);
    }

    total_block[page_block] = [];
    $.each(total_page, function(idx, num) {
        total_block[page_block].push(num);
        if(num % 5 == 0) {
            page_block++;
            if(num != total) {
                total_block[page_block] = [];
            }
        }
    });
    total_block = total_block.filter(function(e){return e});
    var active = '';
    var disabled = '';

    inner_html += '<ul class="pageNum">';

    if(now <= 1) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-first">'
    +'<a href="javascript:pageFirstBlank('+coll+', 1, '+total+');"><span></span></a>'
    +'</li>'
    +'<li class="'+disabled+' btn btn-prev">'
    +'<a href="javascript:pagePreBlank('+coll+', '+now+', '+total+');"><span></span></a>'
    +'</li>';

    disabled = '';

    $.each(total_block[page_block_num], function(pidx, pnum) {
        if(now == pnum) {
            active = 'on';
        }
        inner_html += '<li class="page-number '+active+'">'
        + '<a href="javascript:pageBlank('+coll+', '+pnum+');"><span>'+pnum+'</span></a>'
        + '</li>';
        active = '';
    })

    if(now >= total) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-next">'
    +'<a href="javascript:pageNextBlank('+coll+', '+now+', '+total+', '+total_block.length+');"><span></span></a>'
    +'</li>';
    inner_html += '<li class="'+disabled+' btn btn-last">'
    +'<a href="javascript:pageLastBlank('+coll+', '+now+', '+total+', '+total_block.length+');"><span></span></a>'
    +'</li>';

    inner_html += '</ul>';
    $('#lib_list_paging').append(inner_html);
}

function pagePreBlank(coll, now) {
    var page_block_num = $('input[name=page_block_num]').val();

    if(page_block_num == 0) {
        page_block_num = 0;
        now = 1;
    } else {
        page_block_num = parseInt(page_block_num) - 1;
        now = (page_block_num * 5) + 1;
    }

    $('input[name=page_block_num]').val(page_block_num);
    $('input[name=now_page]').val(now);
    moveScroll('library_list_section');
    callLibList(coll);
}

function pageNextBlank(coll, now, total, leng) {
    var page_block_num = $('input[name=page_block_num]').val();

    if(page_block_num == parseInt(leng) - 1) {
        page_block_num = parseInt(leng) - 1;
    } else {
        page_block_num = parseInt(page_block_num) + 1;
    }
    if(page_block_num != 0) {
        now = (page_block_num * 5) + 1;
    } else {
        now = 1;
    }

    $('input[name=page_block_num]').val(page_block_num);
    $('input[name=now_page]').val(now);
    moveScroll('library_list_section');
    callLibList(coll);
}

function pageFirstBlank(coll) {
    $('input[name=page_block_num]').val(0);
    $('input[name=now_page]').val(1);
    moveScroll('library_list_section');
    callLibList(coll);
}
function pageLastBlank(coll, now, total, leng) {
    $('input[name=page_block_num]').val(parseInt(leng) - 1);
    $('input[name=now_page]').val(total);
    moveScroll('library_list_section');
    callLibList(coll);
}

function pageBlank(coll, page) {
    if($('input[name=now_page]').val() != page) {
        $('input[name=now_page]').val(page);
        moveScroll('library_list_section');
        callLibList(coll);
    }
}

function moveScroll(element_id) {
    var contentOffsetTop = getOffsetTop(document.getElementById(element_id));
    window.scroll(0, (contentOffsetTop - 120));
    $('.contents .filter-wrap.filter-library').removeClass("aside-fixed");
    $('.contents .filter-wrap.filter-library').removeClass("aside-nonfixed");
}


/* 공통으로 빠질지도 모르는 함수들 */

/**
* [choiceCouncilBoxInput 문화원 클릭시, 선택조건 창에 값 집어넣기]
* @param  {[array]} arry        [input[name=sojang_council]의 값]
* @param  {[object]} inpu        [클릭한 문화원 코드 값을 가지고 있는 히든]
* @param  {[string]} region      [지역 이름]
* @param  {[string]} contraction [문화원 이름]
* @param  {[string]} coll  [게시판 콜렉션]
*/
function choiceCouncilBoxInput(arry, inpu, region, contraction, coll) {
    var list_name = 'lib';
    var choice_box_id = "'lib_choice_condition'";
    var choice_box = $('#'+list_name+'_choice_condition > ul');
    var choice_pop = $('#'+list_name+'_select_layer_pop_council');
    var coll_str = "'"+coll+"'";
    var arry_name = "'"+arry.prop('name')+"'";
    var inpu_str = "'"+inpu.val()+"'";

    var inner_block = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><em>'+contraction+'</em><button type="button" class="btn-del-filter" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+');">삭제</button></li>';
    var inner_block_pop = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><button type="button" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+');" title="삭제">'+region+' <span class="sign">&gt;</span> '+contraction+'</button></li>';

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var topics = arry.val().split('|');
        if($.inArray(inpu.val(), topics) < 0) {
            topics.push(inpu.val());
            choice_box.append(inner_block);
            choice_pop.append(inner_block_pop);

            topics = topics.join('|');
            arry.val(topics);
            callLibList(coll);
        } else {
            deleteChoiceBlock(choice_box, arry, inpu.val(), coll);
        }
    } else {
        arry.val(inpu.val());
        choice_box.append(inner_block);
        choice_pop.append(inner_block_pop);
        callLibList(coll);
    }
}

/**
* [deleteChoiceButton 선택조건 공통 삭제 버튼 클릭]
* @param  {[string]} choice_box_id [선택한 객체의 아이디]
* @param  {[string]} coll_str      [테마 콜렉션]
* @param  {[string]} arry_name     [sojang_council || category || sclass => 히든 인풋의 네임]
* @param  {[string]} inpu_str      [description]
*/
function deleteChoiceButton(choice_box_id, coll_str, arry_name, inpu_str) {
    var choice_box = $('#'+choice_box_id + ' ul');
    var coll = coll_str;
    var arry = $('input[name='+arry_name+']');
    var inpu = inpu_str;

    deleteChoiceBlock(choice_box, arry, inpu, coll);
}
/**
* [deleteChoiceBlock 선택조건 공통 삭제 함수]
* @param  {[type]} choice_box [description]
* @param  {[type]} arry       [description]
* @param  {[type]} inpu       [description]
* @param  {[type]} coll       [description]
* @return {[type]}            [description]
*/
function deleteChoiceBlock(choice_box, arry, inpu, coll) {
    var choice_pop = $('#lib_select_layer_pop_council');

    choice_box.find('li[data-libchoiceblock="'+inpu+'"]').remove();
    choice_pop.find('li[data-libchoiceblock="'+inpu+'"]').remove();
    $('#lib_layer_pop_council').find('input[value="'+inpu+'"] + label').removeClass('turnon');

    var arry_val = arry.val();
    arry_val = arry_val.split('|');
    arry_val = jQuery.grep(arry_val, function(value) {
        return value != inpu;
    });
    arry.val(arry_val.join('|'));
    callLibList(coll);
}

/*exported filterFn*/
"use strict";
$(document).ready(function() {
    if(!$('.section--library').length) {
        return;
    }
    // 필터 스크롤시 고정
    scrollEventFilter();
    scrollEventFilter2();

    // 리사이즈 이벤트
    reSizeList();

    // 필터
    // filterFn();
    filterScroll();

    // 추천자료 스와이퍼
    recoSwiper();

    // 리스트 카드 탭
    seeListCard();
});

function reSizeList(){
    $(window).on('throttle.resize', function (){
        recoSwiper();
    });
}

function seeListCard(){

    if($(window).width() > 640){
        $('.list-view-change button').on('click', function(){
            $(this).siblings().removeClass('on');
            $(this).addClass('on');

        });
    }
}

// 지방문화원 소장자료 추천자료 스와이퍼

function recoSwiper(){
    if ($(window).width() > 640) {
        new Swiper('.reco-content.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 25,
            slidesPerGroup: 5,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    } else {
        new Swiper('.reco-content.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    }
}

// 검색 필터 관련
function filterFn() {
    // 검색필터 클릭 시 따라다니는 스크롤 해제
    $('.filter .depth-2 .check input[type="checkbox"] + label').on('click', function (){
        $('.filter-wrap').removeClass('aside-fixed');
    });

    // depth-1 열고 닫기
    $('.filter-tit .btn-toggle').on('click', function () {
        if ($(this).text() == '닫기') {
            $(this).text('열기');
            $(this).addClass('on');
            $(this).parent('.filter-tit').siblings('.filter-list').stop().slideUp();
            $(this).parents('.filter').find('.btn-all-view').css('display', 'none');
            $(this).parents('.filter').find('.btn-toggle-more').css('display', 'none');
        } else {
            $(this).text('닫기');
            $(this).removeClass('on');
            $(this).parent('.filter-tit').siblings('.filter-list').stop().slideDown();
            $(this).parents('.filter').find('.btn-all-view').css('display', 'block');
            $(this).parents('.filter').find('.btn-toggle-more').css('display', 'block');
        }
    });

    // depth-2 보이는지 check 후 버튼 값 설정
    /*$('.filter .depth-1 .btn-toggle').each(function () {
        if ($(this).parent('.depth-1').next('ul').is(':visible')) {
            $(this).text('닫기');
        } else {
            $(this).text('열기');
        }
    });*/

    // depth-2 열고 닫기
    /*$('.filter .depth-1 .btn-toggle').on('click', function () {
        var _this = $(this).parents('li').index();
        if ($(this).text() == '닫기') {
            $(this).text('열기');
            $(this).parent('.depth-1').next().stop().slideUp(0);
            $(this).parent('.depth-1').removeClass('on');
            $('.line-1').removeClass('on');
            $('.line-2').removeClass('on');
            $('.line-3').removeClass('on');
        } else {
            $(this).text('닫기');
            $(this).parent('.depth-1').next().stop().slideDown(0);
            $(this).parent('.depth-1').addClass('on');
            console.log(_this);
            if (_this < 6) {
                $('.line-1').addClass('on');
                $('.line-2').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 6 && _this < 12) {
                $('.line-2').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-3').removeClass('on');
            } else if (_this >= 12) {
                $('.line-3').addClass('on');
                $('.line-1').removeClass('on');
                $('.line-2').removeClass('on');
            }
        }
    });*/

    //더보기 버튼
    $('.filter .btn-toggle-more').on('click', function () {
        if ($(this).text() == '더보기') {
            $(this).text('접기');
            $(this).siblings('.filter-list').children('ul').children('li').css('display', 'block');
        } else {
            $(this).text('더보기');
            $(this).siblings('.filter-list').children('ul').children('li').each(function () {
                if ($(this).index() > 4) {
                    $(this).css('display', 'none');
                }
            })
        }
    });

    // 문화원 전체보기 팝업 열기
    $('.filter .btn-all-view').on('click', function () {
        $('body').addClass('pop-filter');
        $('.pop-filter .pop-culture-center .filter-list > ul > li:first-child .depth-1').addClass('on');
        $('.pop-filter .pop-culture-center .filter-list > ul > li:first-child .depth-1 .btn-toggle').trigger('click');
        $('.filter-wrap .filter .depth-1').css({background:"none"});
        $('.pop-culture-center .filter-list').css('display','block');
        if ($('.filter-wrap').hasClass('aside-fixed')) {
            $('.filter-wrap').css('position','relative');
        }
    });

    // 문화원 전체보기 팝업 닫기
    $('.filter .pop-btn-wrap .btn-gray').on('click', function () {
        $('body').removeClass('pop-filter');
        $('.filter-wrap .filter .depth-1').css({ background: "url(/cms/imgs/common/icon/icon-bullet.png) no-repeat left center" });
        if ($('.filter-wrap').hasClass('aside-fixed')) {
            $('.filter-wrap').css('position', 'fixed');
        }

        if ($('.filter-wrap .filter-tit .btn-toggle').hasClass('on')){
            $('.pop-culture-center .filter-list').css('display', 'none');

        }else{
            $('.pop-culture-center .filter-list').css('display', 'block');

        }
    });

    /*$(document).on('click', '.pop-filter .depth-1 .btn-toggle', function () {
        $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
    });*/

    // 문화원 팝업 체크된 지역 하위 리스트 보기
    /*$('.depth-1 .check input').each(function () {
        $(this).change(function () {
            var _this = $(this).parents('li').index();
            if ($(this).is(":checked")) {
                $(this).parents('.depth-1').next().stop().slideDown(0);
                $(this).parents('.depth-1').addClass('on');
                $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
                $(this).parents('li').find('.depth-1').children('.btn-toggle').text('닫기');
                $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
                $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
                if (_this < 6) {
                    $('.line-1').addClass('on');
                    $('.line-2').removeClass('on');
                    $('.line-3').removeClass('on');
                } else if (_this >= 6 && _this < 12) {
                    $('.line-2').addClass('on');
                    $('.line-1').removeClass('on');
                    $('.line-3').removeClass('on');
                } else if (_this >= 12) {
                    $('.line-3').addClass('on');
                    $('.line-1').removeClass('on');
                    $('.line-2').removeClass('on');
                }
            }
        });

    });*/

    /* new click event start */
    // $('.topic-toggle-dep2-controll').click(function() {
    //     $(this).parents('li').find('.depth-1').toggleClass('on');
    //     $(this).parents('li').find('.depth-2').slideToggle();
    // });

    $('#layer_pop_council .btn-toggle').each(function () {
        if ($(this).parent('.depth-1').next('ul').is(':visible')) {
            $(this).text('닫기');
        } else {
            $(this).text('열기');
        }
    });

    // $('.filter-list .btn-toggle').on('click', function () {
    //     $(this).parent().find('.topic-toggle-dep2-controll, .council-toggle-dep2-controll').trigger('click');
    // });

    $('.topic-toggle-dep2-controll').off('click');
    $('.topic-toggle-dep2-controll').on('click', function () {
        $(this).parents('li').find('.depth-1').toggleClass('on');
        $(this).parents('li').find('.depth-2').slideToggle();
    });

    $('.council-toggle-dep2-controll').off('click');
    $('.council-toggle-dep2-controll').on('click', function () {
        $(this).parents('li').find('.depth-1').toggleClass('on');
        $(this).parents('li').find('.depth-2').slideToggle();

        // $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        // $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        // $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
        //
        // var _this = $(this).parents('li').index();
        // var button = $(this).parents('li').find('button');
        // if (button.text() == '닫기') {
        //     button.text('열기');
        //     button.parent('.depth-1').next().stop().slideUp(0);
        //     button.parent('.depth-1').removeClass('on');
        //
        //     $('.line-1').removeClass('on');
        //     $('.line-2').removeClass('on');
        //     $('.line-3').removeClass('on');
        // } else {
        //     button.text('닫기');
        //     button.parent('.depth-1').next().stop().slideDown(0);
        //     button.parent('.depth-1').addClass('on');
        //
        //     if (_this < 6) {
        //         $('.line-1').addClass('on');
        //         $('.line-2').removeClass('on');
        //         $('.line-3').removeClass('on');
        //     } else if (_this >= 6 && _this < 12) {
        //         $('.line-2').addClass('on');
        //         $('.line-1').removeClass('on');
        //         $('.line-3').removeClass('on');
        //     } else if (_this >= 12) {
        //         $('.line-3').addClass('on');
        //         $('.line-1').removeClass('on');
        //         $('.line-2').removeClass('on');
        //     }
        // }
    });

    $('.toggle-dep2-controll').off('click');
    $('.toggle-dep2-controll').on('click', function () {
        $(this).parents('li').find('.depth-1').toggleClass('on');
        $(this).parents('li').find('.depth-2').slideToggle();

        // $(this).parents('li').siblings('li').find('.depth-1').children('.btn-toggle').text('열기');
        // $(this).parents('li').siblings('li').find('.depth-1').next().stop().slideUp(0);
        // $(this).parents('li').siblings('li').find('.depth-1').removeClass('on');
        //
        // var _this = $(this).parents('li').index();
        // var button = $(this).parents('li').find('button');
        // if (button.text() == '닫기') {
        //     button.text('열기');
        //     button.parent('.depth-1').next().stop().slideUp(0);
        //     button.parent('.depth-1').removeClass('on');
        //
        //     $('.line-1').removeClass('on');
        //     $('.line-2').removeClass('on');
        //     $('.line-3').removeClass('on');
        // } else {
        //     button.text('닫기');
        //     button.parent('.depth-1').next().stop().slideDown(0);
        //     button.parent('.depth-1').addClass('on');
        //
        //     if (_this < 6) {
        //         $('.line-1').addClass('on');
        //         $('.line-2').removeClass('on');
        //         $('.line-3').removeClass('on');
        //     } else if (_this >= 6 && _this < 12) {
        //         $('.line-2').addClass('on');
        //         $('.line-1').removeClass('on');
        //         $('.line-3').removeClass('on');
        //     } else if (_this >= 12) {
        //         $('.line-3').addClass('on');
        //         $('.line-1').removeClass('on');
        //         $('.line-2').removeClass('on');
        //     }
        // }
    });
    /* new click event end */

    if($(window).width() <= 640){

        $('.list-view-change .btn-vcard','.list-view-change .btn-vtalbe').removeClass('on');

        $('.btn-vcard').on('click', function(){
            $('.list-view-change .btn-vcard').removeClass('on');
            $(this).css({ 'display': 'none'});
            $('.btn-vtalbe').css({ 'display': 'block' });
        });

        $('.btn-vtalbe').on('click', function(){
            $('.list-view-change .btn-vtalbe').removeClass('on');
            $(this).css({ 'display': 'none'});
            $('.btn-vcard').css({ 'display': 'block' });
        });

        $('.story-box .mobile-filter').on('click', function(){
            $('.filter-wrap').css({'position':'fixed'});
            $('.filter-story').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
        });

        $('.library-box .mobile-filter').on('click', function(){
            $('.filter-wrap').css({'position': 'fixed'});
            $('.filter-library').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
        });

        $('.filter-head .btn-filter-close').on('click', function(){
            $('.filter-wrap').css({ 'position': 'absolute' });
            $('.filter-wrap').css({ 'display': 'none'});
            $('body').css({ 'overflow': 'visible' });
        });
    }
}

function scrollEventFilter(){
    $(window).on('throttle.scroll', function (e, data){
        // 이야기자료 필터 스크롤할 때 따라다니는 효과
        var position = data.top; // 현재 스크롤바의 위치
        var winWidth = $(window).width();
        var target = $(".filter-story");
        var positionEnd = $('#wrap').height() - target.outerHeight() - $('#header').height() - 48; // 본문높이
        var rightSectionH = $('.filter-wrap').outerHeight();
        var centerSectionH = $('.article-main').outerHeight();

        if ( centerSectionH >= rightSectionH ) {

            if (position > 204 && winWidth > 989) { // 브라우저사이즈가 1007PX 이상이고 아래로 스크롤 할 때
                // console.log($('#wrap').height(),target.outerHeight(),$('#wrap').height()-target.outerHeight());
                target.addClass('aside-fixed');
                if (position >= positionEnd) { // 본문의 높이가 서비스콘텐츠 영역과 동일하게 남았을 때 하단으로 고정
                    target.removeClass('aside-fixed');
                    target.addClass('aside-nonfixed');

                } else { // 위로 스크롤 할 때
                    target.removeClass('aside-nonfixed');
                    target.addClass('aside-fixed');

                }

            } else if (position < 204 || winWidth <= 640) { // 최상단이거나 브라우저사이즈가 640PX 이하일 때
                target.removeClass('aside-fixed');

            }
        }

    });

}
function scrollEventFilter2(){
    $(window).on('throttle.scroll', function (e, data){
        // 소장자료 필터 스크롤할 때 따라다니는 효과
        var position = data.top; // 현재 스크롤바의 위치
        var winWidth = $(window).width();
        var target = $(".filter-library");
        var positionEnd = $('#wrap').height() - target.outerHeight() - $('#header').height() - 48; // 본문높이
        var rightSectionH = $('.filter-wrap').outerHeight();
        var centerSectionH = $('.article-main').outerHeight();

        if ( centerSectionH >= rightSectionH ) {

            if (position > 716 && winWidth > 989) { // 브라우저사이즈가 1007PX 이상이고 아래로 스크롤 할 때
                // console.log($('#wrap').height(),target.outerHeight(),$('#wrap').height()-target.outerHeight());
                target.addClass('aside-fixed');
                if (position >= positionEnd) { // 본문의 높이가 서비스콘텐츠 영역과 동일하게 남았을 때 하단으로 고정
                    target.removeClass('aside-fixed');
                    target.addClass('aside-nonfixed');

                } else { // 위로 스크롤 할 때
                    target.removeClass('aside-nonfixed');
                    target.addClass('aside-fixed');

                }

            } else if (position < 716 || winWidth <= 640) { // 최상단이거나 브라우저사이즈가 640PX 이하일 때
                target.removeClass('aside-fixed');

            }
        }

    });

}

function filterScroll() {
    $(window).on('throttle.scroll', function () {
        if ($('.filter-wrap').hasClass('aside-fixed')){
            $('.filter-wrap').css('margin-left', '-' + $(window).scrollLeft() + 'px');
        }
    });
}

/*exported callStoryFilter,pagePreBlank,pageNextBlank,pageFirstBlank,pageLastBlank,pageBlank,choiceCouncilBoxInput,deleteChoiceButton*/
"use strict";
function pageAndPagingReset() {
    $('input[name=now_page]').val(1);
    $('input[name=page_block_num]').val(0);
}

function StoryListAllDataReset() {
    $('input[name=now_page]').val(1);
    $('input[name=page_block_num]').val(0);
    $('input[name=second_topics]').val('');
    $('input[name=sojang_council]').val('');
    $('#story_choice_condition > ul').empty();
    $('#story_select_layer_pop_council').empty();
    $('#story_filter_topic_depth > li > div').removeClass('on');
    $('#story_filter_topic_depth').find('input[type=checkbox]').prop('checked', false);
    $('#story_layer_pop_council > li > div').removeClass('on');
    $('#story_layer_pop_council').find('input[type=checkbox]').prop('checked', false);
    $('.click-second-topic').removeClass('turnon');
    $('.click-council-name').removeClass('turnon');
}

// ignore value in case {'':2}
function reviver(key, value) {
    if (key !== '' || typeof(value) !== 'number'){
        return value;
    }
}

function callStoryFilter(coll) {
    pageAndPagingReset();
    var query = $('input[name=story_list_query]').val(); // 검색어

    $.ajax({
        url: '/search/integratedstoryfiltersearch?'
        +'coll='+coll
        +'&query='+query,

        type: 'GET',
        success: function(data) {
            $('#story_filter_topic_depth').empty();
            $('.filter-story .clear-region-count').empty();
            $('.filter-story .clear-region-count').append('(0)');
            $('#story_layer_pop_council > li > .clear-relact-data').empty();

            var filters = JSON.parse(data, reviver);

            // filter topic
            var topic_idx = 0;
            $.each(filters['topics'], function(first_key, tsecond) {
                topic_idx++;
                insertTopic(first_key, tsecond, topic_idx);
            });

            // filter councils
            var counc_count = 1;
            var line_depth = 1;
            $.each(filters['councils'], function(region, councils) {
                insertCouncil(region, councils, counc_count, line_depth);
                counc_count = counc_count + 1;
                if(counc_count % 6 == 1) {
                    line_depth = line_depth + 1;
                }
            });

            // 필터 열기 닫기
            filterFn();

            $('.filter-story .click-second-topic').click(function() {
                pageAndPagingReset();
                var second_topics = $('input[name=second_topics]');
                var topic_dataset = $(this).parent().data('secondset');
                var second_topic = $(this).parent().find('input');

                $(this).toggleClass('turnon');
                choiceTopicBoxInput(second_topics, topic_dataset, second_topic.val(), coll);
            });

            $('.filter-story .click-council-name').click(function() {
                pageAndPagingReset();
                var choice_councils = $('input[name=sojang_council]');
                var choice_council = $(this).parent().find('input');
                var contraction_council = $(this).parent().data('councilset');
                // var contraction_region = $(this).parent().data('storyregionname');

                $(this).toggleClass('turnon');
                choiceTopicBoxInput(choice_councils, contraction_council, choice_council.val(), coll);
                // choiceCouncilBoxInput(choice_councils, choice_council, contraction_region, contraction_council, coll, 1);
            });

            $('.topic-toggle-dep2-controll').click(function() {
                if ($(this).parents('li').find('.depth-2').length === 0)  {
                    if ($(this).parents('li').parent().attr('id') === 'story_filter_topic_depth') {
                        pageAndPagingReset();
                        var second_topics = $('input[name=second_topics]');
                        var topic_dataset = $(this).parent().data('firstset');
                        choiceTopicBoxInput(second_topics, topic_dataset, topic_dataset, coll);
                    }
                }
            });

            $('#story_select_reset').click(function() {
                StoryListAllDataReset();
                callStoryList(coll);
            });
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function choiceTopicBoxInput(arry, title, code, coll) {
    var choice_box = $('#story_choice_condition > ul');

    var coll_str = "'"+coll+"'";
    var arry_name = "'"+arry.prop('name')+"'";
    var select_str = "'"+code+"'";
    var choice_box_id = "'story_choice_condition'";

    var inner_block = '<li data-storychoiceblock="'+code+'">'
    + '<em>'+title+'</em>'
    + '<button type="button" class="btn-del-filter" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+select_str+');">삭제</button>'
    + '</li>';

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var topics = arry.val().split('|');
        if($.inArray(code, topics) < 0) {
            topics.push(code);
            choice_box.append(inner_block);

            topics = topics.join('|');
            arry.val(topics);
            callStoryList(coll);
        } else {
            deleteChoiceBlock(choice_box, arry, code, coll);
        }
    } else {
        arry.val(code);
        choice_box.append(inner_block);
        callStoryList(coll);
    }
}

function callStoryList(coll) {
    $('#insert_story_list').find('ul.list').empty();
    $('#search_story_count').empty();

    var view_type = $('input[name=view_type]').val();

    var query = $('input[name=story_list_query]').val();
    var now_page = $('input[name=now_page]').val();
    var amount = $('input[name=amount]').val();
    var second_topics = $('input[name=second_topics]').val();
    var sojang_council = $('input[name=sojang_council]').val();

    $.ajax({
        url: '/search/integratedstorylistsearch?'
        +'coll='+coll
        +'&now='+now_page
        +'&amount='+amount
        +'&query='+query
        +'&topics='+second_topics
        +'&council='+sojang_council,
        type: 'GET',
        beforeSend:function() {
            $('.integrated-list-loading').show();
        },
        success: function(data) {
            $('.integrated-list-loading').hide();
            $('#insert_story_list').find('ul.list').empty();
            $('#insert_story_list').find('div.related-item').empty();

            var entries = JSON.parse(data);
            var total = entries['count'];

            if(!existenceValue(query)) {
                $('.m-use.count > em').html(total);
            }

            $('#search_story_count').html('<em>'+total+'</em>');

            if(entries['list'].length == 0 || entries['list'] == [] || entries['list'] == null) {
                var inner_message = '<li class="no-message"><p>검색 결과가 없습니다.</p></li>';

                $('#insert_story_list').find('ul.list').css('display', 'block');
                $('#insert_story_list').find('div.related-item').css('display', 'none');
                $('#insert_story_list').find('ul.list').append(inner_message);
            } else {
                var total_page = Math.ceil(total/amount);
                createPaging(coll, now_page, total_page);

                $.each(entries['list'], function(eidx, entry) {
                    if(view_type == 'list') {
                        $('#insert_story_list').find('ul.list').css('display', 'block');
                        $('#insert_story_list').find('div.related-item').css('display', 'none');
                        $('#insert_story_list').find('ul.list').append(createFormStoryList(entry));
                    } else {
                        $('#insert_story_list').find('ul.list').css('display', 'none');
                        $('#insert_story_list').find('div.related-item').css('display', 'block');
                        $('#insert_story_list').find('div.related-item').append(createFormStoryCard(entry));
                    }
                    $('.item-box').each(function(){
                        var lineH = 1.6;
                        var paddingH = 25 * 2;
                        var classH = $(this).find('.classification').outerHeight(true);
                        if ($(this).find('.item-region').length > 0 ) {

                            $(this).find('.item-region').find('p').each(function() {
                                classH += $(this).outerHeight(true);
                            });
                        }else {
                            classH = $(this).find('.classification').outerHeight(true);
                        }
                        var titleH = $(this).find('.data-title').outerHeight(true);
                        var subjectH = $(this).find('.item-subject').outerHeight(true);
                        var tagH = $(this).find('.list-tag').outerHeight(true);
                        var imgH = $(this).find('.thumnail').outerHeight(true);
                        var summaryH = $(this).height() - (classH + titleH + subjectH + tagH + imgH) - paddingH;
                        var onelineH = parseInt($(this).find('.item-summary').css('font-size'), 10) * lineH;
                        var lineCount = summaryH / onelineH;
                        summaryH = Math.round(lineCount) * onelineH;
                        var marginH = summaryH % onelineH;
                        $(this).find('.item-summary').height(summaryH);
                        $(this).find('.item-summary').css('margin-bottom', marginH);
                        $(this).find('.item-summary').shave(summaryH, {
                            character: '...'
                        });
                    });
                });
            }
        }, error:function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function insertTopic(first_key, tsecond, topic_idx) {
    //console.log(typeof tsecond['list']);
    //console.log(Object.keys(tsecond['list']).length);
    var inner_html = '';
    inner_html += '<li>';
    inner_html += '<div class="depth-1 on">';
    // label에 넣는 class="click-first-topic"
    inner_html += '<div class="check" data-firstset="'+first_key+'">'
    + '<label class="topic-toggle-dep2-controll" for="topic_list'+topic_idx+'">'+first_key+' ('+tsecond['count']+')</label>'
    + '<input type="checkbox" id="topic_list'+topic_idx+'" value="'+first_key+'" />'
    + '</div>';
    if (typeof tsecond['list'] == 'object' && Object.keys(tsecond['list']).length > 0) {
        inner_html += '<button type="button" class="btn-toggle">닫기</button>';
    }
    inner_html += '</div>';
    if (typeof tsecond['list'] == 'object' && Object.keys(tsecond['list']).length > 0) {
        inner_html += '<ul class="depth-2" style="display:block;">';
        var second_idx = 1;
        $.each(tsecond['list'], function(second_key, scount) {
            if(existenceValue(second_key)) {
                inner_html += '<li><div class="check" data-secondset="'+second_key+'"><input type="checkbox" id="topic_list'+topic_idx+'-'+second_idx+'" value="'+first_key+'^'+second_key+'" /><label for="topic_list'+topic_idx+'-'+second_idx+'" class="click-second-topic">'+second_key+' ('+scount+')</label></div></li>';
                second_idx++;
            }
        });
        inner_html += '</ul>';
    }
    inner_html += '</li>';
    $('#story_filter_topic_depth').append(inner_html);
}

function insertCouncil(region, councils) {
    $('#story_region_count_'+region).empty();

    var inner_layer = '';
    var idx = 0;
    var amount = 0;

    if(typeof councils != 'undefined' && councils != [] && councils != '') {
        $.each(councils['list'], function(ccode, cinfo){
            $.each(cinfo, function(cname, ccount) {
                amount = amount + parseInt(ccount);
                idx++;
                inner_layer += '<li>';
                inner_layer += '<div class="check" data-storyregionname="'+councils['city_kr']+'" data-councilset="'+cname+'"><input type="checkbox" id="local-'+region+'-'+idx+'" value="'+ccode+'" /><label for="local-'+region+'-'+idx+'" class="click-council-name">'+cname+'('+ccount+')</label></div>';
                inner_layer += '</li>';
            })
        });
    }

    $('#story_region_count_'+region).append('('+amount+')');
    $('#story_council_region_'+region).append(inner_layer);
}

function existenceValue(val){
    if(typeof val != 'undefined' && val != '' && val != null && val != []) {
        return true;
    } else {
        return false;
    }
}

function createFormStoryCard(entry) {
    var inner_html = '';


    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="item-box">'
        inner_html += '<div class="thumnail">';
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry['thumbnail']['origin']+'" alt="'+entry.title+'">';
        if(entry['thumbnail_copyright'] != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
        }
        inner_html += '</a>';
        inner_html += '</div>';
    } else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="item-box">'
        inner_html += '<div class="thumnail">';
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry['replacement']+'" alt="'+entry.title+'">';
        inner_html += '</a>';
        inner_html += '</div>';
    }

    if(inner_html == '') {
        inner_html += '<div class="item-box no-image">';
    }

    inner_html += '<div class="item-info clearfix">';
    inner_html += '<div class="clearfix classification">';

    if(existenceValue(entry.region) || existenceValue(entry.city)) {
        // region
        inner_html += '<div class="item-region">';
        inner_html += '<p class="regional">';
        if(existenceValue(entry.region)) {
            inner_html += entry.region;
        }
        if(existenceValue(entry.region) && existenceValue(entry.city)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.city)) {
            inner_html += entry.city;
        }
        inner_html += '</p>';
        // council
        if(existenceValue(entry.culture_council_Name)) {
            var councils_name = entry.culture_council_Name.split('@');
            councils_name = councils_name.join(', ');
            inner_html += '<p>'+councils_name+'</p>';
        }
        inner_html += '</div>';
    }
    inner_html += '</div>';
    inner_html += '<a href="'+entry.url+'" title="'+deleteHtmlTags(entry.title)+'" class="data-title">'+deleteHtmlTags(entry.title)+'</a>';

    // title

    // summary
    if(existenceValue(entry.summary)) {
        inner_html += '<p class="item-summary">'+deleteHtmlTags(entry.summary)+'</p>';
    }

    // theme
    if(existenceValue(entry.first_topic) || existenceValue(entry.second_topic)) {
        inner_html += '<p class="item-subject">';
        if(typeof entry.first_topic == 'string') {
            inner_html += entry.first_topic;
        }
        if(existenceValue(entry.first_topic) && existenceValue(entry.second_topic)) {
            inner_html += ' &gt; ';
        }
        if(typeof entry.second_topic == 'string') {
            inner_html += entry.second_topic;
        }
        inner_html += '</p>';
    }

    if(existenceValue(entry.tags)) {
        inner_html += '<ul class="list-tag">';
        $.each(entry.tags, function(tidx, tag) {
            inner_html += '<li>#'+tag+'</li>';
        })
        inner_html += '</ul>';
    }
    inner_html += '</div></div>';

    return inner_html;
}

function createFormStoryList(entry) {
    var inner_html = '';
    inner_html += '<li>';
    // 썸네일 넣기 시작
    if(existenceValue(entry['thumbnail'])) {
        inner_html += '<div class="thumb">';
        inner_html += '<a href="'+entry.url+'" target="_blank">';
        inner_html += '<img src="'+entry['thumbnail']['origin']+'" alt="'+entry.title+'">';
        if(entry['thumbnail_copyright'] != '한국문화원연합회') {
            inner_html += '<p class="source-origin">사진출처: '+entry['thumbnail_copyright']+'</p>';
        }
        inner_html += '</a>';
        inner_html += '</div>';
    } else if(existenceValue(entry['replacement'])) {
        inner_html += '<div class="thumb">';
        inner_html += '<a href="'+entry.url+'" title="'+entry.title+'" target="_blank">';
        inner_html += '<img src="'+entry['replacement']+'" alt="'+entry.title+'">';
        inner_html += '</a>';
        inner_html += '</div>';
    }
    // 썸네일 넣기 끝

    // data
    inner_html += '<div class="data-wrap"><dl><dt>';
    // region
    if(existenceValue(entry.region) || existenceValue(entry.city)) {
        inner_html += '<p class="classification"><em class="regional">';
        if(existenceValue(entry.region)) {
            inner_html += entry.region;
        }
        if(existenceValue(entry.region) && existenceValue(entry.city)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.city)) {
            inner_html += entry.city;
        }
        inner_html += '</em></p>';
    }

    //title
    inner_html += '<a href="'+entry.url+'" target="_blank" title="새창">'+deleteHtmlTags(entry.title)+'</a>';
    //summary
    if(existenceValue(entry.summary)) {
        inner_html += '<dd class="ellipsis">'+deleteHtmlTags(entry.summary)+'</dd>';
    }
    inner_html += '</dt></dl>';
    // theme
    inner_html += '<ul class="list-info">';

    if(existenceValue(entry.first_topic) || existenceValue(entry.second_topic)) {
        inner_html += '<li><em>이야기주제 : </em>';
        if(existenceValue(entry.first_topic)){
            inner_html += entry.first_topic;
        }
        if(existenceValue(entry.first_topic) && existenceValue(entry.second_topic)) {
            inner_html += ' &gt; ';
        }
        if(existenceValue(entry.second_topic)){
            inner_html += entry.second_topic;
        }
        inner_html += '</li>';
    }

    // council
    if(existenceValue(entry.culture_council_Name)) {
        var councils_name = entry.culture_council_Name.split('@');
        councils_name = councils_name.join(', ');
        inner_html += '<li><em>관련문화원 : </em>'+councils_name+'</li>';
    }

    inner_html += '</ul>';
    if(typeof entry.tags == 'object') {
        inner_html += '<ul class="list-tag">';
        $.each(entry.tags, function(tidx, tag) {
            inner_html += '<li>#'+tag+'</li>';
        })
        inner_html += '</ul>';
    }

    // data end
    inner_html += '</div>';
    inner_html += '</li>';

    return inner_html;
}

function createPaging(coll, now, total) {
    $('#story_list_paging .pageNum').empty();
    // 페이징 만들기
    now = parseInt(now);
    total = parseInt(total);
    coll = "'"+coll+"'";

    var inner_html = '';
    var page_block_name = 'page_block_num';
    var page_block_num = parseInt($('input[name='+page_block_name+']').val());
    var total_page = [];
    var total_block = [];
    var page_block = 0;

    for(var num = 1; num <= total; num++) {
        total_page.push(num);
    }

    total_block[page_block] = [];
    $.each(total_page, function(idx, num) {
        total_block[page_block].push(num);
        if(num % 5 == 0) {
            page_block++;
            if(num != total) {
                total_block[page_block] = [];
            }
        }
    });
    total_block = total_block.filter(function(e){return e});
    var active = '';
    var disabled = '';

    if(now <= 1) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-first">'
    +'<a href="javascript:pageFirstBlank('+coll+', 1, '+total+');"><span></span></a>'
    +'</li>'
    +'<li class="'+disabled+' btn btn-prev">'
    +'<a href="javascript:pagePreBlank('+coll+', '+now+', '+total+');"><span></span></a>'
    +'</li>';

    disabled = '';

    $.each(total_block[page_block_num], function(pidx, pnum) {
        if(now == pnum) {
            active = 'on';
        }
        inner_html += '<li class="page-number '+active+'">'
        + '<a href="javascript:pageBlank('+coll+', '+pnum+');"><span>'+pnum+'</span></a>'
        + '</li>';
        active = '';
    })

    if(now >= total) disabled = 'disabled';

    inner_html += '<li class="'+disabled+' btn btn-next">'
    +'<a href="javascript:pageNextBlank('+coll+', '+now+', '+total+', '+total_block.length+');"><span></span></a>'
    +'</li>';
    inner_html += '<li class="'+disabled+' btn btn-last">'
    +'<a href="javascript:pageLastBlank('+coll+', '+now+', '+total+', '+total_block.length+');"><span></span></a>'
    +'</li>';

    $('#story_list_paging .pageNum').append(inner_html);
}

function pagePreBlank(coll, now, total) {
    var page_block_num = $('input[name=page_block_num]').val();

    if(page_block_num == 0) {
        page_block_num = 0;
        now = 1;
    } else {
        page_block_num = parseInt(page_block_num) - 1;
        now = (page_block_num * 5) + 1;
    }

    $('input[name=page_block_num]').val(page_block_num);

    createPaging(coll, now, total);
    $('input[name=now_page]').val(now);
    moveScroll('story_list_section');
    callStoryList(coll);
}

function pageNextBlank(coll, now, total, leng) {
    var page_block_num = $('input[name=page_block_num]').val();

    if(page_block_num == parseInt(leng) - 1) {
        page_block_num = parseInt(leng) - 1;
    } else {
        page_block_num = parseInt(page_block_num) + 1;
    }
    if(page_block_num != 0) {
        now = (page_block_num * 5) + 1;
    } else {
        now = 1;
    }

    $('input[name=page_block_num]').val(page_block_num);
    $('input[name=now_page]').val(now);
    moveScroll('story_list_section');
    callStoryList(coll);
}

function pageFirstBlank(coll) {
    $('input[name=page_block_num]').val(0);
    $('input[name=now_page]').val(1);
    moveScroll('story_list_section');
    callStoryList(coll);
}
function pageLastBlank(coll, now, total, leng) {
    $('input[name=page_block_num]').val(parseInt(leng) - 1);
    $('input[name=now_page]').val(total);
    moveScroll('story_list_section');
    callStoryList(coll);
}

function pageBlank(coll, page) {
    if($('input[name=now_page]').val() != page) {
        $('input[name=now_page]').val(page);
        moveScroll('story_list_section');
        callStoryList(coll);
    }
}

function moveScroll(element_id) {
    var contentOffsetTop = getOffsetTop(document.getElementById(element_id));
    window.scroll(0, (contentOffsetTop - 120));
    $('.contents .filter-wrap.filter-story').removeClass("aside-nonfixed");
    $('.contents .filter-wrap.filter-story').removeClass("aside-fixed");
}

/* 공통으로 빠질지도 모르는 함수들 */

/**
* [choiceCouncilBoxInput 문화원 클릭시, 선택조건 창에 값 집어넣기]
* @param  {[array]} arry        [input[name=sojang_council]의 값]
* @param  {[object]} inpu        [클릭한 문화원 코드 값을 가지고 있는 히든]
* @param  {[string]} region      [지역 이름]
* @param  {[string]} contraction [문화원 이름]
* @param  {[string]} coll  [게시판 콜렉션]
*/
function choiceCouncilBoxInput(arry, inpu, region, contraction, coll) {
    var list_name = 'story';
    var choice_box_id = "'story_topic_choice_condition'";
    var choice_box = $('#'+list_name+'_topic_choice_condition > ul');
    var choice_pop = $('#'+list_name+'_select_layer_pop_council');
    var coll_str = "'"+coll+"'";
    var arry_name = "'"+arry.prop('name')+"'";
    var inpu_str = "'"+inpu.val()+"'";

    var inner_block = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><em>'+contraction+'</em><button type="button" class="btn-del-filter" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+');">삭제</button></li>';
    var inner_block_pop = '<li data-'+list_name+'choiceblock="'+inpu.val()+'"><button type="button" onclick="javascript:deleteChoiceButton('+choice_box_id+', '+coll_str+', '+arry_name+', '+inpu_str+');" title="삭제">'+region+' <span class="sign">&gt;</span> '+contraction+'</button></li>';

    if(arry.val() != '' && arry.val() != [] && arry.val() != null) {
        var topics = arry.val().split('|');
        if($.inArray(inpu.val(), topics) < 0) {
            topics.push(inpu.val());
            choice_box.append(inner_block);
            choice_pop.append(inner_block_pop);

            topics = topics.join('|');
            arry.val(topics);
            callStoryList(coll);
        } else {
            deleteChoiceBlock(choice_box, arry, inpu.val(), coll);
        }
    } else {
        arry.val(inpu.val());
        choice_box.append(inner_block);
        choice_pop.append(inner_block_pop);
        callStoryList(coll);
    }
}

/**
* [deleteChoiceButton 선택조건 공통 삭제 버튼 클릭]
* @param  {[string]} choice_box_id [선택한 객체의 아이디]
* @param  {[string]} coll_str      [테마 콜렉션]
* @param  {[string]} arry_name     [sojang_council || category || sclass => 히든 인풋의 네임]
* @param  {[string]} inpu_str      [description]
*/
function deleteChoiceButton(choice_box_id, coll_str, arry_name, inpu_str) {
    var choice_box = $('#'+choice_box_id + ' ul');
    var coll = coll_str;
    var arry = $('input[name='+arry_name+']');
    var inpu = inpu_str;

    deleteChoiceBlock(choice_box, arry, inpu, coll);
}
/**
* [deleteChoiceBlock 선택조건 공통 삭제 함수]
* @param  {[type]} choice_box [description]
* @param  {[type]} arry       [description]
* @param  {[type]} inpu       [description]
* @param  {[type]} coll       [description]
* @return {[type]}            [description]
*/
function deleteChoiceBlock(choice_box, arry, inpu, coll) {
    var choice_pop = $('#story_select_layer_pop_council');

    choice_box.find('li[data-storychoiceblock="'+inpu+'"]').remove();
    choice_pop.find('li[data-storychoiceblock="'+inpu+'"]').remove();
    $('input[value="'+inpu+'"] + label').removeClass('turnon');

    var arry_val = arry.val();
    arry_val = arry_val.split('|');
    arry_val = jQuery.grep(arry_val, function(value) {
        return value != inpu;
    });
    arry.val(arry_val.join('|'));
    callStoryList(coll);
}

$(function () {
    $(document).on('click', '.click-open-img-lib', function () {
        var wTop = $(window).scrollTop();
        var lib_id = $(this).data('libidset');
        var click_idx = $(this).data('imageidxset');
        var url = '/cms/layer/ajax-layer-img.html';

        $.ajax({
            url: '/relatevematerials?ids='+lib_id+'&start=0&amount=1',
            type: 'GET',
            success: function(data) {
                var entry = JSON.parse(data);

                $('#layer').load(url, function (response, status, xhr) {
                    if ( status == "error" ) {
                        var msg = "Sorry but there was an error: ";
                        $( "#detail_layer_error" ).html( msg + xhr.status + " " + xhr.statusText);
                    }
                    $('#layer').fadeIn(300);
                    $('body').addClass('layer');
                    $('#container').css('top', -wTop + 'px');

                    $('input[name=open_idx_num]').val(click_idx);

                    $.each(entry['list'], function(midx, mdata) {
                        var img_html = '<div class="swiper-slide"><img src="'+mdata.STRE_FILE_NAME+'" alt="'+mdata.TITLE+' 썸네일"></div>';
                        $('#img_pop_original_images').append(img_html);
                        $('#img_pop_mini_images').append(img_html);
                        $('#img_pop_images_info').append('<div class="info-box">'
                        + '<h1>'+mdata.TITLE+'</h1>'
                        + '<ul class="clearfix">'
                        + '<li><span>자료구분 : </span><span>'+mdata.FIRST_CATEGORY_NM+' &gt; '+mdata.SECOND_CATEGORY_NM+'</span></li>'
                        + '<li><span>자료유형 : </span><span>'+mdata.FIRST_CLASS_NM+'</span> &gt; <span>'+mdata.SECOND_CLASS_NM+'</span></li>'
                        + '<li><span>지역 : </span><span>'+mdata.SIDO_NAME+'</span>&gt; <span>'+mdata.SIGUNGU_NAME+'</span></li>'
                        + '</ul>'
                        + '<p>'+mdata.SUMMARY+'</p>'
                        + '</div>');
                    });

                });
            }, error:function(request,status,error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        })
    });

    $(document).on('click', '.click-open-video-pop', function () {
        var wTop = $(window).scrollTop();
        // var file_nm = $(this).data('videofilenmset');
        var url = '/cms/layer/ajax-layer-video.html';
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function(data) {
                $('#layer').append(data);
                $('#layer').fadeIn(300);
                $('body').addClass('layer');
                $('#container').css('top', -wTop + 'px');
            }, error:function(request, status, error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });

        /*$('#layer').load(url, { "layer_id": file_nm }, function (response, status, xhr) {
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#detail_layer_error" ).html( msg + xhr.status + " " + xhr.statusText);
            }
            $('#layer').fadeIn(300);
            $('body').addClass('layer');
            $('#container').css('top', -wTop + 'px');
        });*/
    });

    $(document).on('click', '.click-open-sound-pop', function () {
        var wTop = $(window).scrollTop();
        var url = '/cms/layer/ajax-layer-audio.html';

        $('#layer').load(url, function (response, status, xhr) {
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#detail_layer_error" ).html( msg + xhr.status + " " + xhr.statusText);
            }

            $('#layer').fadeIn(300);
            $('body').addClass('layer');
            $('#container').css('top', -wTop + 'px');
        });
    });
})
