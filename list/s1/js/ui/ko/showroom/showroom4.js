// 사무실 : /showroom/office.html
function showroom4() {
    // 초기 진입 시 메인 실행
    const sr4Office = $('.sr4-office');
    const srPointer = sr4Office.find('.sr-pointer');

    let startTimers = [];

    // 첫번째 타이머
    startTimers.push(
        setTimeout(() => {
            // 화면 메인으로 전환
            sr4Office.removeClass('default').addClass('main');
            // 포인터 활성화
            srPointer.addClass('active');
        }, 500),
    );

    // 타이머들을 취소하는 타이머
    setTimeout(() => {
        startTimers.forEach(startTimer => clearTimeout(startTimer));
    }, 1600);

    // 화면 진입 이벤트
    srPointer.on('click', function () {
        const thisB = $(this);
        const srpIndex = thisB.closest('.sr-pointer-wrap').index() + 1;
        const screenClass = 'screen' + srpIndex;
        sr4Office.removeClass('main');
        sr4Office.addClass(screenClass + ' step1 step1-1');

        if (typeof showroomData !== 'undefined') {
            setPageContent('sr4-office', screenClass, showroomData);

            // if (srpIndex === 1) {
            const linkListStep = $('.link-list-step');
            const spItem = linkListStep.closest('.step-play-item').eq(0);
            $('.link-list-step').first().trigger('click');
            spItem.removeClass('complite');
            spItem.addClass('active play');
            // }
        } else {
            console.error('showroomData를 찾을 수 없음.');
        }
    });

    // 스크린, 스텝 진입 함수
    const setScreenStep = (scr, stp, sub) => {
        // 전체 showroom-screen-wrap, showroom-step-wrap에서 remove active
        sr4Office.find('.showroom-screen-wrap').removeClass('active');
        sr4Office.find('.showroom-step-wrap').removeClass('active');

        // 해당 showroom-screen-wrap, 해당 showroom-step-wrap active
        $(`.showroom-screen${scr}-wrap`).addClass('active');
        $(`.showroom-screen${scr}-wrap`).find(`.showroom-step${stp}-wrap`).addClass('active');

        if (sub == 0) {
            // 서브 페이지 없으면
            // sr4Office에서 main 빠지고, screen, step 적용
            sr4Office.removeClass().addClass(`showroom-container-wrap sr4-office screen${scr} step${stp}`);
        } else {
            // 서브 페이지 있으면
            // sr4Office에서 main 빠지고, screen, step, substep 적용
            sr4Office
                .removeClass()
                .addClass(`showroom-container-wrap sr4-office screen${scr} step${stp} step${stp}-${sub}`);
        }
    };

    // data-screen-target 속성있는 요소 클릭 이벤트로 screen/step move
    const scrStpMoveLink = $('[data-screen-target]');

    scrStpMoveLink.on('click', function () {
        const moveTarget = $(this).data('screenTarget');
        const strs = moveTarget.split('-');
        const $screen = strs[0];
        const $step = strs[1];
        const $sub = strs[2];
        setScreenStep($screen, $step, $sub);
    });

    // 체험하기 완료 화면 진입 이벤트
    const popChkCompleteLink = sr4Office.find('.popup-check-complete-wrap');

    popChkCompleteLink.on('click', function () {
        const thisB = $(this);
        const pcclIndex = thisB.index() - 2;
        const screenClass = 'screen' + pcclIndex;
        sr4Office.removeClass('main');
        sr4Office.addClass(screenClass + ' step1 step1-1');

        if (typeof showroomData !== 'undefined') {
            setPageContent('sr4-office', screenClass, showroomData);

            // if (srpIndex === 1) {
            const linkListStep = $('.link-list-step');
            const spItem = linkListStep.closest('.step-play-item').eq(0);
            $('.link-list-step').first().trigger('click');
            spItem.removeClass('complite');
            spItem.addClass('active play');
            // }
        } else {
            console.error('showroomData를 찾을 수 없음.');
        }
    });

    const srContainerwrap = $('.showroom-container-wrap');
    const srScreentWrap = srContainerwrap.find('.showroom-screen-wrap');
    const srSwLength = srScreentWrap.length;
    let completeCnt = 0;

    // screen1 : '출동경비 서비스'를 완료하고 메인으로 돌아가기
    const btnScreen1End1 = sr4Office.find('.button-swiper-bottom-screen1');
    btnScreen1End1.on('click', function () {
        completeCnt++;
        if (completeCnt == 3) {
            srContainerwrap.addClass('end-page');
        }
        $('.sr-pointer-wrap1').addClass('check-complete');
        $('.popup-check-complete-wrap1').addClass('check-complete');

        const thisB = $(this);
        srContainerwrap.removeClass('step-end');
        for (let i = 1; i <= srSwLength; i++) {
            srContainerwrap.removeClass('screen' + i);
            srContainerwrap.removeClass('step' + i);
            for (let j = 1; j <= 10; j++) {
                srContainerwrap.removeClass('step' + i + '-' + j);
            }
        }
        srContainerwrap.addClass('default');

        // 첫 번째 타이머
        startTimers.push(
            setTimeout(() => {
                sr4Office.removeClass('default').addClass('main');
            }, 1000),
        );

        // 두 번째 타이머
        startTimers.push(
            setTimeout(() => {
                srPointer.addClass('active');
            }, 1500),
        );

        // 타이머들을 취소하는 타이머
        setTimeout(() => {
            startTimers.forEach(startTimer => clearTimeout(startTimer));
        }, 1600);
    });

    // screen2 : 'CCTV 서비스'를 완료하고 메인으로 돌아가기
    const btnScreen1End2 = sr4Office.find('.button-swiper-bottom-screen2');
    btnScreen1End2.on('click', function () {
        completeCnt++;
        if (completeCnt == 3) {
            srContainerwrap.addClass('end-page');
        }
        $('.sr-pointer-wrap2').addClass('check-complete');
        $('.popup-check-complete-wrap2').addClass('check-complete');

        const thisB = $(this);
        srContainerwrap.removeClass('step-end');
        for (let i = 1; i <= srSwLength; i++) {
            srContainerwrap.removeClass('screen' + i);
            srContainerwrap.removeClass('step' + i);
            for (let j = 1; j <= 10; j++) {
                srContainerwrap.removeClass('step' + i + '-' + j);
            }
        }
        srContainerwrap.addClass('default');

        // 첫 번째 타이머
        startTimers.push(
            setTimeout(() => {
                sr4Office.removeClass('default').addClass('main');
            }, 1000),
        );

        // 두 번째 타이머
        startTimers.push(
            setTimeout(() => {
                srPointer.addClass('active');
            }, 1500),
        );

        // 타이머들을 취소하는 타이머
        setTimeout(() => {
            startTimers.forEach(startTimer => clearTimeout(startTimer));
        }, 1600);
    });

    // screen3 : '출입관리 서비스'를 완료하고 메인으로 돌아가기
    const btnScreen1End3 = sr4Office.find('.button-swiper-bottom-screen3');
    btnScreen1End3.on('click', function () {
        completeCnt++;
        if (completeCnt == 3) {
            srContainerwrap.addClass('end-page');
        }
        $('.sr-pointer-wrap3').addClass('check-complete');
        $('.popup-check-complete-wrap3').addClass('check-complete');

        const thisB = $(this);
        srContainerwrap.removeClass('step-end');
        for (let i = 1; i <= srSwLength; i++) {
            srContainerwrap.removeClass('screen' + i);
            srContainerwrap.removeClass('step' + i);
            for (let j = 1; j <= 10; j++) {
                srContainerwrap.removeClass('step' + i + '-' + j);
            }
        }
        srContainerwrap.addClass('default');

        // 첫 번째 타이머
        startTimers.push(
            setTimeout(() => {
                sr4Office.removeClass('default').addClass('main');
            }, 1000),
        );

        // 두 번째 타이머
        startTimers.push(
            setTimeout(() => {
                srPointer.addClass('active');
            }, 1500),
        );

        // 타이머들을 취소하는 타이머
        setTimeout(() => {
            startTimers.forEach(startTimer => clearTimeout(startTimer));
        }, 1600);
    });

    // 이전 페이지 가기
    const btnScreenWrap = $('.button-screen-wrap');
    btnScreenWrap.on('click', function () {
        localStorage.setItem('previousPage', 'office.html'); // 이전페에지 가기 스토리지 저장
        // localStorage.removeItem("previousPage"); // 값 초기화 (테스트용)
    });

    const btnMovieStart = $('.thumbnail-wrap .button-movie-start');

    btnMovieStart.on('click', function () {
        const thisB = $(this);
        const video = thisB.closest('.swiper-layer-wrap').find('.tag-video');
        const videoGet = video.get(0);
        video.addClass('active');
        if (video) {
            videoGet.play();
            //console.log('비디오 재생 시작');
        } else {
            //console.log('비디오 요소를 찾을 수 없음');
        }
    });

    $('.button-swiper-bottom').on('click', function () {
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
//     // console.log('Player state changed:', event.data);

//     if (event.data == YT.PlayerState.PLAYING) {
//         console.log('비디오 재생중');
//         // 재생 중일 때 수행할 작업
//     } else if (event.data == YT.PlayerState.PAUSED) {
//         console.log('비디오 일시정지');
//         // 일시정지 상태에서 수행할 작업
//     } else if (event.data == YT.PlayerState.ENDED) {
//         console.log('비디오 재생종료');
//         // 영상이 끝났을 때 수행할 작업
//     }
// }

// function youtubetBtnEvent() {
//     // 개별 재생
//     $('.thumbnail-wrap .button-movie-start').on('click', function () {
//         $(this).closest('.swiper-layer-wrap').find('.iframe-video').addClass('active');
//         const playerId = $(this).closest('.swiper-layer-wrap').find('iframe').attr('id');
//         // if (playerId && playerYoutube[playerId] && typeof playerYoutube[playerId].playVideo === 'function') {
//         if (playerYoutube[playerId]) {
//             playerYoutube[playerId].playVideo();
//             console.log('플레이어 ID가 존재 정상재생', playerId);
//         } else if (!playerYoutube[playerId]) {
//             // 플레이어 인스턴스가 없으면 다시 초기화 후 재생 시도
//             console.log('플레이어 인스턴스가 존재하지 않습니다. 다시 초기화 시도 중:', playerId);

//             // YouTube Player 인스턴스 다시 초기화
//             playerYoutube[playerId] = new YT.Player(playerId, {
//                 events: {
//                     onReady: function (event) {
//                         event.target.playVideo(); // 준비가 되면 자동 재생
//                     },
//                     onStateChange: onPlayerStateChange, // 상태 변경 처리
//                 },
//             });
//         } else {
//             console.log('플레이어 ID가 없습니다.', playerId);
//         }
//     });

//     // 전체 스톱 후 처음으로
//     $('.button-swiper-bottom').on('click', function () {
//         // 모든 플레이어를 정지합니다
//         $('.iframe-video').removeClass('active');
//         for (let playerId in playerYoutube) {
//             if (playerYoutube[playerId]) {
//                 playerYoutube[playerId].stopVideo();
//                 // console.log(playerYoutube[playerId]);
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

/*-- 수정범위 끝 -- */

function slickSlideContent() {
    $('.swiper-title-wrap1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-layer-wrap1',
        arrows: false,
        fade: true,
        infinite: true,
    });
    $('.swiper-layer-wrap1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-title-wrap1',
        speed: 300,
        cssEase: 'linear',
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    // 스크린2 스와이퍼
    $('.swiper-title-wrap2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-layer-wrap2',
        arrows: false,
        fade: true,
        infinite: true,
    });
    $('.swiper-layer-wrap2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-title-wrap2',
        speed: 300,
        cssEase: 'linear',
        dots: true,
        infinite: true,
    });

    // 스크린3 스와이퍼
    $('.swiper-title-wrap3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-layer-wrap3',
        arrows: false,
        fade: true,
        infinite: true,
    });
    $('.swiper-layer-wrap3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.swiper-title-wrap3',
        speed: 300,
        cssEase: 'linear',
        dots: true,
        infinite: true,
    });
}

// 버튼 정보 보기 : 버튼 눌렀을 때 기기 정보 보기
function sr4InfoViewPopup() {
    const sr4InfoViewPopupWrap = $('.sr4-info-view-popup-wrap');
    const sr4InfoPopupWrap = sr4InfoViewPopupWrap.find('.sr4-info-popup-wrap');
    const sr4InfoButtonWrap = sr4InfoViewPopupWrap.find('.sr4-info-button-wrap');
    const sr4ButtonInfoView = $('.sr4-button-info-view');
    const sr4PopupViewItem = sr4InfoPopupWrap.find('.sr4-popup-view-item');
    const sr4IconViewClose = sr4PopupViewItem.find('.sr4-icon-view-close');
    const sr4PersonSc = $('.sr4-person-sc3-st2');
    const sr4PersonSc3St2Obj = sr4PersonSc.find('.sr4-person-sc3-st2-obj');
    const totCnt = 100;
    let choiceTimers = [];

    sr4ButtonInfoView.on('click', function () {
        const thisB = $(this);
        const sr4InfoButtonItem = thisB.closest('.sr4-info-button-item');
        const thisItemIdx = sr4InfoButtonItem.index();
        const index = sr4InfoButtonItem.index();

        // if (thisB.hasClass('view-hit')) {
        //     thisB.closest('.showroom-container-wrap').removeClass('previous-world');
        //     thisB.closest('.showroom-container-wrap').addClass('another-world');
        // } else {
        //     thisB.closest('.showroom-container-wrap').removeClass('another-world');
        //     thisB.closest('.showroom-container-wrap').addClass('previous-world');
        // }

        if (sr4InfoButtonItem.hasClass('active')) {
            sr4InfoButtonItem.removeClass('active');
            sr4InfoPopupWrap.removeClass('active');
            sr4PopupViewItem.eq(index).removeClass('active');

            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-targeting')
                    .removeClass('changeEp' + i);
            }
            sr4PersonSc3St2Obj.removeClass('choice');
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
        } else {
            sr4InfoButtonWrap.find('.sr4-info-button-item').removeClass('active');
            sr4InfoPopupWrap.removeClass('active');
            sr4PopupViewItem.removeClass('active');
            sr4InfoButtonItem.addClass('active');
            sr4InfoPopupWrap.addClass('active');
            sr4PopupViewItem.eq(index).addClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-targeting')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-targeting')
                .addClass('changeEp' + (index + 1));

            // 두 번째 타이머
            choiceTimers.push(
                setTimeout(() => {
                    sr4PersonSc3St2Obj.eq(thisItemIdx).addClass('choice');
                }, 300),
            );
        }
    });

    sr4IconViewClose.on('click', function () {
        const thisB = $(this);
        const sr4PopupViewItem = thisB.closest('.sr4-popup-view-item');
        const index = sr4PopupViewItem.index();

        if (sr4PopupViewItem.hasClass('active')) {
            sr4PopupViewItem.removeClass('active');
            sr4InfoPopupWrap.removeClass('active');
            sr4PopupViewItem.eq(index).removeClass('active');
            sr4InfoButtonWrap.find('.sr4-info-button-item').removeClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-targeting')
                    .removeClass('changeEp' + i);
            }
            sr4PersonSc3St2Obj.removeClass('choice');
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
        } else {
            sr4InfoButtonWrap.find('.sr4-info-button-item').removeClass('active');
            sr4InfoPopupWrap.removeClass('active');
            sr4PopupViewItem.removeClass('active');
            sr4PopupViewItem.addClass('active');
            sr4InfoPopupWrap.addClass('active');
            sr4PopupViewItem.eq(index).addClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr4-info-view-popup-wrap')
                    .siblings('.sr4-targeting')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr4-info-view-popup-wrap')
                .siblings('.sr4-targeting')
                .addClass('changeEp' + (index + 1));
        }
    });
}
sr4InfoViewPopup();
