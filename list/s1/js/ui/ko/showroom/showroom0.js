// 인트로 : /showroom/intro.html
function showroom0() {
    // 인트로 프로그래스
    const body = $('body');
    const sr0Prograss = $('.sr0-prograss');
    const sr0Intro = $('.sr0-intro');
    const pSecond = 3000; // 기본타임
    let mSecond = 0; // 기본타임
    let prograssTimers = [];

    // 조건에 포함시킬 페이지들을 배열로 정의
    const pagesToSkipProgressBar = [
        'house.html',
        'villa.html',
        'store.html',
        'office.html',
        'factory.html',
        'storage.html',
        'bluescan.html',
    ];
    // const pagesToSkipProgressBar =  []; // 테스트용 프로그래스바 실행

    // previousPage가 null이거나 undefined일 경우 빈 문자열로 초기화
    let previousPage = localStorage.getItem('previousPage') || '';

    if (pagesToSkipProgressBar.includes(previousPage)) {
        mSecond = 3000;
        sr0Prograss.addClass('prev');
        sr0Prograss.find('.bg-prograss-wrap').removeClass('active');
        sr0Prograss.find('.prograsbar-wrap').removeClass('active');
        sr0Intro.find('.intro-service-box-wrap').addClass('action open');
        sr0Intro.find('.intro-service-box-item-wrap1').addClass('active');
        sr0Intro.find('.intro-service-box-item-wrap2').addClass('active');
        sr0Intro.find('.button-intro-box-vc').addClass('active');
    } else {
        // 프로그래스바 작동
        mSecond = 0;
        sr0Prograss.removeClass('prev');
        sr0Prograss.find('.prograsbar-line').animate({ width: '100%' }, pSecond);

        prograssTimers.push(
            setTimeout(() => {
                sr0Prograss.find('.bg-prograss-wrap').removeClass('active');
                sr0Prograss.find('.prograsbar-wrap').removeClass('active');
            }, pSecond + 300 - mSecond),
        );
    }
    prograssTimers.push(
        setTimeout(() => {
            sr0Prograss.removeClass('active');
            sr0Intro.find('.intro-service-box-wrap').addClass('action');
        }, pSecond + 600 - mSecond),
    );

    prograssTimers.push(
        setTimeout(() => {
            sr0Intro.find('.intro-service-box-wrap').addClass('open');
        }, pSecond + 3600 - mSecond),
    );

    // 7초 후 타임 클리어
    setTimeout(() => {
        prograssTimers.forEach(timer => clearTimeout(timer));
    }, pSecond + 4000 - mSecond);

    // 인트로 버튼 - 박스메뉴 전체보기 닫기
    const btnIbc = document.querySelectorAll('.button-intro-box-vc');
    const isbiw = document.querySelectorAll('.intro-service-box-item-wrap');
    const introSbox = document.querySelector('.sr0-intro .intro-service-box-wrap');

    btnIbc.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const isActive = this.classList.contains('active');
            const isOpen = introSbox.classList.contains('open');
            if (isOpen) {
                btnIbc.forEach(function (otherBtn) {
                    otherBtn.classList.remove('active');
                });

                isbiw.forEach(function (box) {
                    box.classList.remove('active');
                });

                if (!isActive) {
                    this.classList.add('active');
                    isbiw.forEach(function (box) {
                        box.classList.add('active');
                    });
                }
            }
        });
    });

    // 에스원 GNB 보기
    const woShowroomIntro = $('.wrap-online-showroom-intro');
    const headerHoverView = woShowroomIntro.find('.header-hover-view');
    headerHoverView.on('mouseover', function () {
        const thisB = $(this);
        thisB.closest('.wrap-online-showroom-intro').addClass('header-gnb-view');
    });

    const headerWrap = woShowroomIntro.find('.header_wrap');
    headerWrap.on('mouseleave', function () {
        const thisB = $(this);
        thisB.closest('.wrap-online-showroom-intro').removeClass('header-gnb-view');
    });

    body.on('click', function (e) {
        // 클릭하거나 호버한 요소가 headerWrap 안에 있지 않은 경우에만 클래스 제거
        if (!headerWrap.is(e.target) && headerWrap.has(e.target).length === 0) {
            woShowroomIntro.removeClass('header-gnb-view');
        }
    });

    // const serviceBoxPopup1 = $('.service-box-popup1');
    // serviceBoxPopup1.on('click', function () {
    //     $('.popup-layer-pm-fm1').addClass('active');

    //     const iframe = $('.popup-layer-pm-fm1 .iframe-movie');

    //     iframe.each(function () {
    //         let currentSrc = $(this).attr('src');

    //         // 'autoplay=1' 파라미터가 없는 경우 추가
    //         if (!currentSrc.includes('autoplay=1')) {
    //             if (currentSrc.includes('?')) {
    //                 currentSrc += '&autoplay=1';
    //             } else {
    //                 currentSrc += '?autoplay=1';
    //             }
    //         }

    //         // src 속성을 다시 설정하여 영상 자동 재생
    //         $(this).attr('src', currentSrc);
    //     });
    // });

    $('.service-box-popup1').on('click', function () {
        $('.popup-layer-pm-fm1').addClass('active');
        setTimeout(function () {
            $('.popup-layer-pm-fm1').addClass('active');
            const video = $('.tag-video');
            const videoGet = video.get(0);
            video.addClass('active');
            if (video) {
                videoGet.play();
                //console.log('비디오 재생 시작');
            } else {
                //console.log('비디오 요소를 찾을 수 없음');
            }
        }, 1500);
    });
    // const btnMovieStart = $('.thumbnail-wrap .button-movie-start');

    // btnMovieStart.on('click', function () {
    //     $('.popup-layer-pm-fm1').addClass('active');
    //     const video = $('.tag-video');
    //     const videoGet = video.get(0);
    //     video.addClass('active');
    //     if (video) {
    //         videoGet.play();
    //         //console.log('비디오 재생 시작');
    //     } else {
    //         //console.log('비디오 요소를 찾을 수 없음');
    //     }
    // });

    $('.btn-layer-popup-close').on('click', function () {
        $('.popup-layer-pm-fm1').removeClass('active');
        const videos = $('.tag-video');
        videos.removeClass('active');
        videos.each(function () {
            const video = $(this).get(0);
            if (video) {
                video.pause();
                video.currentTime = 0;
                //console.log('비디오 중지 및 처음으로 되돌리기 완료');
            }
        });
    });
}

/*-- 수정범위 시작 -- */

// 스와이퍼 비디오
// let playerYoutube = {};

// // This function gets called by the YouTube IFrame API
// function youtubeControls() {
//     // 해당 유튜브 영상마다 id="youtubePlayer1" ~ id="youtubePlayer(Length)"를 모두 부여하여야 한다.

//     playerYoutube['youtubePlayer1'] = new YT.Player('youtubePlayer1', {
//         events: {
//             onReady: youtubetBtnEvent,
//             onStateChange: onPlayerStateChange,
//         },
//     });
//     playerYoutube['youtubePlayer2'] = new YT.Player('youtubePlayer2', {
//         events: {
//             onReady: youtubetBtnEvent,
//             onStateChange: onPlayerStateChange,
//         },
//     });
// }

// function onPlayerStateChange(event) {
//     console.log('Player state changed:', event.data);

//     if (event.data == YT.PlayerState.PLAYING) {
//         console.log('Video is playing');
//         // 재생 중일 때 수행할 작업
//     } else if (event.data == YT.PlayerState.PAUSED) {
//         console.log('Video is paused');
//         // 일시정지 상태에서 수행할 작업
//     } else if (event.data == YT.PlayerState.ENDED) {
//         console.log('Video has ended');
//         // 영상이 끝났을 때 수행할 작업
//     }
// }

// function youtubetBtnEvent() {
//     // 개별 재생
//     $('.service-box-popup1').on('click', function () {
//         setTimeout(function () {
//             $('.iframe-video').addClass('active');
//             const playerId = $('.iframe-video').attr('id');
//             if (playerId && playerYoutube[playerId] && typeof playerYoutube[playerId].playVideo === 'function') {
//                 playerYoutube[playerId].playVideo();
//             } else {
//                 console.error('Player ID is undefined or player instance does not exist:', playerId);
//             }
//         }, 3000);
//     });

//     // 전체 스톱 후 처음으로
//     $('.btn-layer-popup-close').on('click', function () {
//         // 모든 플레이어를 정지합니다
//         $('.iframe-video').removeClass('active');
//         for (let playerId in playerYoutube) {
//             if (playerYoutube[playerId]) {
//                 playerYoutube[playerId].stopVideo();
//             }
//         }
//         localStorage.clear();
//         sessionStorage.clear();
//         // 스토리지 제거
//     });
// }

// // YouTube IFrame API가 로드된 후 showroom 함수를 실행
// function onYouTubeIframeAPIReady() {
//     console.log('YouTube IFrame API is ready.');
//     youtubeControls();
// }

// // YouTube IFrame API가 로드되었는지 확인
// function checkYouTubeAPIReady() {
//     if (typeof YT !== 'undefined' && YT && typeof YT.Player !== 'undefined') {
//         onYouTubeIframeAPIReady();
//     } else {
//         // 아직 로드되지 않았으면 100ms 후에 다시 시도
//         setTimeout(checkYouTubeAPIReady, 100);
//     }
// }

// /*-- 수정범위 끝 -- */

// // YouTube IFrame API가 로드된 후 showroom 함수를 실행
// function onYouTubeIframeAPIReady() {
//     youtubeControls();
// }
