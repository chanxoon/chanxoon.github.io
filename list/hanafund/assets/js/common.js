let scrollY;
let wrap;

// 초기화 선언
$(function() {
    AOS.init({ duration: 1000 }); // AOS 초기화 (애니메이션 지속 시간 1초)
});

// 스크린 높이 계산
function syncHeight() {
    document.documentElement.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
}

// mobile check
function isMobile() {
    const width = window.innerWidth;
    if (width < 1025) {
        return true;
    }
    return false;
}

// body scroll lock
function bodyLock() {
    scrollY = window.scrollY;
    document.documentElement.classList.add('is-locked');
    wrap.style.top = `-${scrollY}px`;
    // AOS 사용시 refresh 필요
    // AOS.refresh();
}

// body scroll unlock
function bodyUnlock() {
    document.documentElement.classList.remove('is-locked');
    window.scrollTo(0, scrollY);
    wrap.style.top = '';
    // AOS 사용시 refresh 필요
    // AOS.refresh();
}

// popup open
// popup open
function modalOpen(el) {
    $('#' + el).fadeIn('fast');
    $('#dim').fadeIn('fast');
    bodyLock();
}

// popup close
function modalClose(el) {
    $(el).parents('.popup').fadeOut('fast');
    $('#dim').fadeOut('fast');
    bodyUnlock();
}

$(function () {
    function navHandler() {
        var width = $(window).width();
        $('#nav > ul > li').removeClass('active'); // 초기 active 제거

        if (width <= 768) {
            /* 서브 메뉴 Fixed */
            $( window ).scroll(function() {
                var TopVal = $( window ).scrollTop();
                var TopFixed1 = 320;
                if( TopFixed1 <= TopVal){
                    $('.sub-nav').addClass('active');
                    $('.sub-title').css('margin-bottom', '56px');
                }else{
                    $('.sub-nav').removeClass('active');
                    $('.sub-title').css('margin-bottom', '');
                }
            });
        } else {
            /* 서브 메뉴 Fixed */
            $( window ).scroll(function() {
                var TopVal = $( window ).scrollTop();
                var TopFixed1 = 480;
                if( TopFixed1 <= TopVal){
                    $('.sub-nav').addClass('active');
                    $('.sub-title').css('margin-bottom', '64px');
                }else{
                    $('.sub-nav').removeClass('active');
                    $('.sub-title').css('margin-bottom', '');
                }
            });
        }

        if (width <= 1400) {

            $('#nav').off('mouseenter mouseleave'); // 데스크탑 hover 제거
            $('#nav > ul > li').off('mouseenter mouseleave click'); // 기존 이벤트 제거
            $('#nav > ul > li').on('click', function (e) {
                e.stopPropagation(); // 클릭 이벤트 버블링 방지
                $(this).toggleClass('active').siblings().removeClass('active'); // 클릭한 요소만 active
            });
            $('#nav-button').off('click').on('click', function () {
                $('#header').toggleClass('active');
                if ($('#header').hasClass('active')) {
                    $('body').css('overflow', 'auto');
                } else {
                    $('body').css('overflow', 'auto');
                    $('#nav > ul > li').removeClass('active'); // 메뉴 닫힐 때 active 제거
                }
            });
            $(document).off('click').on('click', function (e) {
                if (!$(e.target).closest('#nav').length) {
                    $('#nav > ul > li').removeClass('active'); // 메뉴 바깥 클릭 시 active 제거
                }
            });

        } else {

            $('#nav > ul > li').off('click'); // 모바일 click 이벤트 제거
            $('#nav').hover(
                function () {
                    $(this).addClass('active');
                    $('#nav ul li .submenu').css('max-height', '328px');
                },
                function () {
                    $(this).removeClass('active');
                    $('#nav ul li .submenu').css('max-height', '');
                }
            );
            $('#nav > ul > li').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }
            );
            $('#nav-button').off('click').on('click', function () {
                $('#header').toggleClass('active');

                if ($('#header').hasClass('active')) {
                    $('body').css('overflow', 'hidden');
                } else {
                    $('body').css('overflow', 'auto');
                }
            });

        }
    }

    $(window).on("resize", navHandler); // 리사이즈 이벤트에 navHandler 바인딩
    navHandler(); // 페이지 로드 시 즉시 실행
});

$(function () {
    // depth1 메뉴 클릭 시 서브메뉴 토글
    $(".menu-item > a").click(function(event) {
        // "홈" 버튼 클릭 시 기본 동작 유지 (링크 이동)
        if ($(this).parent().hasClass("home")) {
            return; 
        }

        var submenu = $(this).siblings(".menu-item > .submenu");
        $(this).parent().toggleClass('active');

        // 이미 다른 서브메뉴가 열려 있다면 닫기
        $(".menu-item > .submenu").not(submenu).slideUp(200).parent().removeClass('active');

        // 클릭한 서브메뉴 열기/닫기
        submenu.stop(true, true).slideToggle(200);

        // 링크 기본 동작 방지
        event.preventDefault();
    });

    // 서브메뉴 외부 클릭 시 서브메뉴 닫기
    $(document).click(function(event) {
        if (!$(event.target).closest('.menu-item').length) {
            $(".menu-item > .submenu").slideUp(200).parent().removeClass('active');
        }
    });

    /* 탭 */
    $(() => {
        $('.tab_content').hide();
        $('.tab_content:first').show();

        $('.tabs .list').click(function () {
            $('.tab_content').hide();
            const activeTab = $(this).attr('rel');
            $('#' + activeTab).fadeIn();

            $('.tabs .list').removeClass('active');
            $(this).addClass('active');
        });
    });
});

// 패밀리 사이트 버튼
$(function () {
    $(".family-btn").click(function(){
        let dropdown = $(".family-list");
        let btnOffset = $(this).offset();
        let windowHeight = $(window).height();
        let dropdownHeight = dropdown.outerHeight();
        let spaceBelow = windowHeight - (btnOffset.top + $(this).outerHeight());
        
        $(this).toggleClass('active');
        // 공간이 부족하면 위로 열림
        if (spaceBelow < dropdownHeight) {
            dropdown.css({ top: "auto", bottom: "100%" }).slideToggle();
        } else {
            dropdown.css({ top: "100%", bottom: "auto" }).slideToggle();
        }
    });

    // 외부 클릭 시 닫기
    $(document).click(function(e){
        if (!$(".family-site").is(e.target) && $(".family-site").has(e.target).length === 0) {
            $(".family-list").slideUp();
            $('.family-btn').removeClass('active');
        }
    });
});

// 스크롤탑
$(function () {
    const $scrollBtn = $('#scrollToTopBtn');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $scrollBtn.fadeIn();
        } else {
            $scrollBtn.fadeOut();
        }
    });

    $scrollBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // footer를 가리지 않도록 위치 조정
    function adjustButtonPosition() {
        const footerOffset = $('footer').offset().top;
        const windowHeight = $(window).height();
        const scrollPos = $(window).scrollTop();
        const buttonHeight = $scrollBtn.outerHeight();
        
        if (scrollPos + windowHeight > footerOffset) {
            const offsetFromFooter = (scrollPos + windowHeight) - footerOffset;
            $scrollBtn.css('bottom', offsetFromFooter + 20 + 'px'); // footer에 겹치지 않도록 조정
        } else {
            $scrollBtn.css('bottom', '20px'); // 기본 위치
        }
    }

    $(window).scroll(adjustButtonPosition);
    $(window).resize(adjustButtonPosition);
});

// 메인 비디오
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    if (!video) {
        // console.error("Video element not found! Check the HTML.");
        return;
    }

    // 버튼 초기 상태 설정
    $('.controls button').addClass('stop').text('정지');

    function playVideo() {
        video.play();
    }

    function stopVideo() {
        video.pause();
    }

    // 동영상 재생 상태 감지
    video.addEventListener('play', function () {
        $('.controls button').removeClass('play').addClass('stop').text('정지');
    });

    video.addEventListener('pause', function () {
        $('.controls button').removeClass('stop').addClass('play').text('재생');
    });

    // 버튼 클릭 이벤트
    $('.controls button').click(function () {
        if ($(this).hasClass('stop')) {
            stopVideo();
        } else {
            playVideo();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Swiper 초기화
    var sec1swiper = new Swiper(".sec1Swiper", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 16,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination-progressbar",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            init: function () {
                updateFraction(this);
            },
            slideChange: function () {
                updateFraction(this);
            }
        },
        breakpoints: {
            767: {
                slidesPerView: 2.5,
                spaceBetween: 40,
            },
        }
    });

    // 현재 슬라이드 / 전체 슬라이드 업데이트
    function updateFraction(sec1swiper) {
        let current = sec1swiper.realIndex + 1; // 현재 슬라이드 (1부터 시작)
        let total = sec1swiper.slides.length - sec1swiper.loopedSlides * 2; // 전체 슬라이드 개수
        $(".swiper-pagination-fraction").html(`<span class="current">${current}</span> <span class="total">${total}</span>`);
    }

    // Stop 버튼 이벤트
    $(".stop-btn").on("click", function () {
        sec1swiper.autoplay.stop(); // 자동 재생 정지
        $(this).hide(); // Stop 버튼 숨기기
        $(".play-btn").show(); // Play 버튼 보이기
    });

    // Play 버튼 이벤트
    $(".play-btn").on("click", function () {
        sec1swiper.autoplay.start(); // 자동 재생 시작
        $(this).hide(); // Play 버튼 숨기기
        $(".stop-btn").show(); // Stop 버튼 보이기
    });

    // 메인 동영상 클릭 재생/정지
    // $('.swiper-stop-btn .stop-btn').click(function (){    
    //     if($(this).hasClass('stop-btn')){
    //         $(this).attr('class','play-btn').text('재생');
    //     } else {
    //         $(this).attr('class','stop-btn').text('정지');
    //     }
    // });
    // 메인 동영상 호버 재생/정지
    // $('.sec1Swiper').on('mouseenter', function(e){
    //     sec1swiper.autoplay.stop();
    // })
    // $('.sec1Swiper').on('mouseleave', function(e){
    //     sec1swiper.autoplay.start();
    // })
});

$(function () {
    // 섹션1 카운터
    $("#count1").prop("Counter", 0).animate({
        Counter: 2003
    }, {
        duration: 1000,
        easing: "swing",
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    $("#count2").prop("Counter", 0).animate({
        Counter: 30
    }, {
        duration: 1000,
        easing: "swing",
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    $("#count2-1").prop("Counter", 0).animate({
        Counter: 70
    }, {
        duration: 1000,
        easing: "swing",
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    $("#count3").prop("Counter", 0).animate({
        Counter: 700
    }, {
        duration: 1000,
        easing: "swing",
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    // 섹션4 슬라이드
    var sec4swiper = new Swiper(".sec4Swiper", {
        loop: true,
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 20000,
        allowTouchMove: false,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        breakpoints:{
            767 : {
                slidesPerView: 7,
                spaceBetween: 40,
            },
        }
    });

    // 섹션4-1 슬라이드
    var sec4_1swiper = new Swiper(".sec4_1Swiper", {
        loop: true,
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 20000,
        allowTouchMove: false,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        breakpoints:{
            767 : {
                slidesPerView: 7,
                spaceBetween: 40,
            },
        }
    });
});

function lineGroupChart() {
    const categories = [
        '2021',
        '2022',
        '2023',
    ];
    const data = [
        {
            data: [478, 657, 725],
        },
    ];
    const colors = ['#108670'];
        
    const options = {
        chart: {
            type: 'area',
            height: 280,
            width: '100%',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: false, // 배경 활성화
                opacity: 0.9, // 투명도 조절 (0 ~ 1)
            },
            offsetY: -10, // Y축 위치 조정 (위로 올림)
            offsetX: 0, // X축 위치 (좌우 조정 가능)
            style: {
                fontSize: '18px',
                fontWeight: '400',
                colors: ['#303030'], // 텍스트 색상 (배경 비활성화 시 적용)
            },
        },
        series: data,
        tooltip: {
            enabled: true,
            shared: false, // 개별 데이터 포인트만 표시
            intersect: false, // 마커(포인트) 위에서만 툴팁 표시
            followCursor: true, // 라인 겹치는 구간 에러 (마우스로 포인터 표시)
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex]; // 값 가져오기
                return `<div class="custom-tooltip"><span>${value}</span></div>`; // 숫자만 표시
            },
        },
        fill: {
            type: 'gradient', // 그라데이션 타입 설정
            gradient: {
                shade: 'light', // 그라데이션 색조 설정
                type: 'vertical', // 수직 방향 그라데이션
                shadeIntensity: 0.5, // 그라데이션 강도
                gradientToColors: ['#fff'], // 그라데이션 끝 색상
                inverseColors: false, // 색상 반전 여부
                opacityFrom: 0.4, // 시작 부분의 불투명도
                opacityTo: 0.1, // 끝 부분의 불투명도
                stops: [0, 90, 100], // 그라데이션 위치 설정
            },
        },
        xaxis: {
            tickPlacement: 'between', // 양쪽여백
            categories: categories,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
                offsetY: -0, // 밑에 여백
            },
            axisBorder: {
                show: false, // x축 선 숨기기
            },
            axisTicks: {
                show: false, // x축 눈금(틱) 숨기기
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            min: 0,
            max: 800,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
            },
        },
        stroke: {
            curve: 'straight',
            width: 2,
        },
        markers: {
            size: 4,
            colors: '#FFFFFF',
            shape: 'circle',
            strokeColors: colors,
            strokeWidth: 2,
            hover: {
                size: 4, // 마우스 오버 시 크기 변경
            },
        },
        states: {
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#dddddd',
            strokeDashArray: 1,
            width: 1,
            padding: {
                top: 10,
                left: 12,
                right: 0,
            },
        },
        // 범례
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            fontSize: '13px',
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 'Medium',
            labels: {
                colors: '#444',
            },
            markers: {
                size: 5,
                shape: 'circle',
                offsetX: -1,
            },
        },
        colors: colors,
    };

    const chart = new ApexCharts(document.querySelector('#lineGroupChart'), options);
    chart.render();
}

// 차트2
function lineGroupChart2() {
    const categories = [
        '2021',
        '2022',
        '2023',
    ];
    const data = [
        {
            data: [131, 150, 155],
        },
    ];
    const colors = ['#D81B2C'];
        
    const options = {
        chart: {
            type: 'area',
            height: 280,
            width: '100%',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: false, // 배경 활성화
                opacity: 0.9, // 투명도 조절 (0 ~ 1)
            },
            offsetY: -10, // Y축 위치 조정 (위로 올림)
            offsetX: 0, // X축 위치 (좌우 조정 가능)
            style: {
                fontSize: '18px',
                fontWeight: '400',
                colors: ['#303030'], // 텍스트 색상 (배경 비활성화 시 적용)
            },
        },
        series: data,
        tooltip: {
            enabled: true,
            shared: false, // 개별 데이터 포인트만 표시
            intersect: false, // 마커(포인트) 위에서만 툴팁 표시
            followCursor: true, // 라인 겹치는 구간 에러 (마우스로 포인터 표시)
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex]; // 값 가져오기
                return `<div class="custom-tooltip"><span>${value}</span></div>`; // 숫자만 표시
            },
        },
        fill: {
            type: 'gradient', // 그라데이션 타입 설정
            gradient: {
                shade: 'light', // 그라데이션 색조 설정
                type: 'vertical', // 수직 방향 그라데이션
                shadeIntensity: 0.5, // 그라데이션 강도
                gradientToColors: ['#fff'], // 그라데이션 끝 색상
                inverseColors: false, // 색상 반전 여부
                opacityFrom: 0.4, // 시작 부분의 불투명도
                opacityTo: 0.1, // 끝 부분의 불투명도
                stops: [0, 90, 100], // 그라데이션 위치 설정
            },
        },
        xaxis: {
            tickPlacement: 'between', // 양쪽여백
            categories: categories,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
                offsetY: -0, // 밑에 여백
            },
            axisBorder: {
                show: false, // x축 선 숨기기
            },
            axisTicks: {
                show: false, // x축 눈금(틱) 숨기기
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            min: 0,
            max: 800,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
            },
        },
        stroke: {
            curve: 'straight',
            width: 2,
        },
        markers: {
            size: 4,
            colors: '#FFFFFF',
            shape: 'circle',
            strokeColors: colors,
            strokeWidth: 2,
            hover: {
                size: 4, // 마우스 오버 시 크기 변경
            },
        },
        states: {
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#dddddd',
            strokeDashArray: 1,
            width: 1,
            padding: {
                top: 10,
                left: 12,
                right: 0,
            },
        },
        // 범례
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            fontSize: '13px',
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 'Medium',
            labels: {
                colors: '#444',
            },
            markers: {
                size: 5,
                shape: 'circle',
                offsetX: -1,
            },
        },
        colors: colors,
    };

    const chart = new ApexCharts(document.querySelector('#lineGroupChart2'), options);
    chart.render();
}

// 차트3
function lineGroupChart3() {
    const categories = [
        '2021',
        '2022',
        '2023',
    ];
    const data = [
        {
            data: [448, 507, 570],
        },
    ];
    const colors = ['#108670'];
        
    const options = {
        chart: {
            type: 'area',
            height: 280,
            width: '100%',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: false, // 배경 활성화
                opacity: 0.9, // 투명도 조절 (0 ~ 1)
            },
            offsetY: -10, // Y축 위치 조정 (위로 올림)
            offsetX: 0, // X축 위치 (좌우 조정 가능)
            style: {
                fontSize: '18px',
                fontWeight: '400',
                colors: ['#303030'], // 텍스트 색상 (배경 비활성화 시 적용)
            },
        },
        series: data,
        tooltip: {
            enabled: true,
            shared: false, // 개별 데이터 포인트만 표시
            intersect: false, // 마커(포인트) 위에서만 툴팁 표시
            followCursor: true, // 라인 겹치는 구간 에러 (마우스로 포인터 표시)
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex]; // 값 가져오기
                return `<div class="custom-tooltip"><span>${value}</span></div>`; // 숫자만 표시
            },
        },
        fill: {
            type: 'gradient', // 그라데이션 타입 설정
            gradient: {
                shade: 'light', // 그라데이션 색조 설정
                type: 'vertical', // 수직 방향 그라데이션
                shadeIntensity: 0.5, // 그라데이션 강도
                gradientToColors: ['#fff'], // 그라데이션 끝 색상
                inverseColors: false, // 색상 반전 여부
                opacityFrom: 0.4, // 시작 부분의 불투명도
                opacityTo: 0.1, // 끝 부분의 불투명도
                stops: [0, 90, 100], // 그라데이션 위치 설정
            },
        },
        xaxis: {
            tickPlacement: 'between', // 양쪽여백
            categories: categories,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
                offsetY: -0, // 밑에 여백
            },
            axisBorder: {
                show: false, // x축 선 숨기기
            },
            axisTicks: {
                show: false, // x축 눈금(틱) 숨기기
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            min: 0,
            max: 800,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: '400',
                    colors: '#737373',
                },
            },
        },
        stroke: {
            curve: 'straight',
            width: 2,
        },
        markers: {
            size: 4,
            colors: '#FFFFFF',
            shape: 'circle',
            strokeColors: colors,
            strokeWidth: 2,
            hover: {
                size: 4, // 마우스 오버 시 크기 변경
            },
        },
        states: {
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#dddddd',
            strokeDashArray: 1,
            width: 1,
            padding: {
                top: 10,
                left: 12,
                right: 0,
            },
        },
        // 범례
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            fontSize: '13px',
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 'Medium',
            labels: {
                colors: '#444',
            },
            markers: {
                size: 5,
                shape: 'circle',
                offsetX: -1,
            },
        },
        colors: colors,
    };

    const chart = new ApexCharts(document.querySelector('#lineGroupChart3'), options);
    chart.render();
}