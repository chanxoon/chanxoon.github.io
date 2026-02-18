// 창고 : /showroom/storage.html

function showroom6() {
    // 초기 진입시 메인 실행
    const sr6Storage = $('.sr6-storage');
    const srSw = sr6Storage.find('.showroom-screen-wrap');
    const srSwArr = [
        sr6Storage.find('.showroom-screen-wrap0'),
        sr6Storage.find('.showroom-screen-wrap1'),
        sr6Storage.find('.showroom-screen-wrap2'),
        sr6Storage.find('.showroom-screen-wrap3'),
    ];
    const srPointer = sr6Storage.find('.sr-pointer');

    let startTimers = [];

    // 첫 번째 타이머
    startTimers.push(
        setTimeout(() => {
            sr6Storage.removeClass('default').addClass('main');
            srPointer.addClass('active');
        }, 1000),
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
        sr6Storage.removeClass('main');
        sr6Storage.addClass(screenClass + ' step1 step1-1');

        if (typeof showroomData !== 'undefined') {
            setPageContent('sr6-storage', screenClass, showroomData);

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

    const popChkCompleteLink = sr6Storage.find('.popup-check-complete-wrap');

    // 체험하기 완료 화면 진입 이벤트
    popChkCompleteLink.on('click', function () {
        const thisB = $(this);
        const pcclIndex = thisB.index() - 2;
        const screenClass = 'screen' + pcclIndex;
        sr6Storage.removeClass('main');
        sr6Storage.addClass(screenClass + ' step1 step1-1');

        if (typeof showroomData !== 'undefined') {
            setPageContent('sr6-storage', screenClass, showroomData);

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

    const totCnt = 3; // 스크린 토탈 갯수 지정
    let completeCnt = 0;

    // screen1 : '출동경비 서비스'를 완료하고 메인으로 돌아가기
    const btnScreen1End1 = sr6Storage.find('.button-swiper-bottom-screen1');
    btnScreen1End1.on('click', function () {
        completeCnt++;
        if (completeCnt >= totCnt) {
            srContainerwrap.removeClass('prog-page');
            srContainerwrap.addClass('end-page');
        } else if (completeCnt > 0 && completeCnt < totCnt) {
            srContainerwrap.addClass('prog-page');
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
                sr6Storage.removeClass('default').addClass('main');
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
    const btnScreen1End2 = sr6Storage.find('.button-swiper-bottom-screen2');
    btnScreen1End2.on('click', function () {
        completeCnt++;
        if (completeCnt >= totCnt) {
            srContainerwrap.removeClass('prog-page');
            srContainerwrap.addClass('end-page');
        } else if (completeCnt > 0 && completeCnt < totCnt) {
            srContainerwrap.addClass('prog-page');
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
                sr6Storage.removeClass('default').addClass('main');
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
    const btnScreen1End3 = sr6Storage.find('.button-swiper-bottom-screen3');
    btnScreen1End3.on('click', function () {
        completeCnt++;
        if (completeCnt >= totCnt) {
            srContainerwrap.removeClass('prog-page');
            srContainerwrap.addClass('end-page');
        } else if (completeCnt > 0 && completeCnt < totCnt) {
            srContainerwrap.addClass('prog-page');
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
                sr6Storage.removeClass('default').addClass('main');
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
        localStorage.setItem('previousPage', 'storage.html'); // 이전페에지 가기 스토리지 저장
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
/*
// 스와이퍼 비디오
let playerYoutube = {};

// This function gets called by the YouTube IFrame API
function youtubeControls() {
    // 해당 유튜브 영상마다 id="youtubePlayer1" ~ id="youtubePlayer(Length)"를 모두 부여하여야 한다.

    playerYoutube['youtubePlayer1'] = new YT.Player('youtubePlayer1', {
        events: {
            onReady: youtubetBtnEvent,
            onStateChange: onPlayerStateChange,
        },
    });
    playerYoutube['youtubePlayer2'] = new YT.Player('youtubePlayer2', {
        events: {
            onReady: youtubetBtnEvent,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerStateChange(event) {
    // console.log('Player state changed:', event.data);

    if (event.data == YT.PlayerState.PLAYING) {
        // console.log('비디오 재생중');
        // 재생 중일 때 수행할 작업
    } else if (event.data == YT.PlayerState.PAUSED) {
        // console.log('비디오 일시정지');
        // 일시정지 상태에서 수행할 작업
    } else if (event.data == YT.PlayerState.ENDED) {
        // console.log('비디오 재생종료');
        // 영상이 끝났을 때 수행할 작업
    }
}

function youtubetBtnEvent() {
    // 개별 재생
    $('.thumbnail-wrap .button-movie-start').on('click', function () {
        $(this).closest('.swiper-layer-wrap').find('.iframe-video').addClass('active');
        const playerId = $(this).closest('.swiper-layer-wrap').find('iframe').attr('id');
        // if (playerId && playerYoutube[playerId] && typeof playerYoutube[playerId].playVideo === 'function') {
        if (playerYoutube[playerId]) {
            playerYoutube[playerId].playVideo();
            // console.log('플레이어 ID가 존재 정상재생', playerId);
        } else if (!playerYoutube[playerId]) {
            // 플레이어 인스턴스가 없으면 다시 초기화 후 재생 시도
            // console.log('플레이어 인스턴스가 존재하지 않습니다. 다시 초기화 시도 중:', playerId);

            // YouTube Player 인스턴스 다시 초기화
            playerYoutube[playerId] = new YT.Player(playerId, {
                events: {
                    onReady: function (event) {
                        event.target.playVideo(); // 준비가 되면 자동 재생
                    },
                    onStateChange: onPlayerStateChange, // 상태 변경 처리
                },
            });
        } else {
            console.log('플레이어 ID가 없습니다.', playerId);
        }
    });

    // 전체 스톱 후 처음으로
    $('.button-swiper-bottom').on('click', function () {
        // 모든 플레이어를 정지합니다
        $('.iframe-video').removeClass('active');
        for (let playerId in playerYoutube) {
            if (playerYoutube[playerId]) {
                playerYoutube[playerId].stopVideo();
                // console.log(playerYoutube[playerId]);
            }
        }
        localStorage.clear();
        sessionStorage.clear();
        // 스토리지 제거
    });
}

// YouTube IFrame API가 로드된 후 showroom 함수를 실행
function onYouTubeIframeAPIReady() {
    console.log('YouTube IFrame API is ready.');
    youtubeControls();
}

// YouTube IFrame API가 로드되었는지 확인
function checkYouTubeAPIReady() {
    if (typeof YT !== 'undefined' && YT && typeof YT.Player !== 'undefined') {
        onYouTubeIframeAPIReady();
    } else {
        // 아직 로드되지 않았으면 100ms 후에 다시 시도
        setTimeout(checkYouTubeAPIReady, 100);
    }
}
*/
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
function sr6InfoViewPopup() {
    const sr6InfoViewPopupWrap = $('.sr6-info-view-popup-wrap');
    const sr6InfoPopupWrap = sr6InfoViewPopupWrap.find('.sr6-info-popup-wrap');
    const sr6InfoButtonWrap = sr6InfoViewPopupWrap.find('.sr6-info-button-wrap');
    const sr6ButtonInfoView = $('.sr6-button-info-view');
    const sr6PopupViewItem = sr6InfoPopupWrap.find('.sr6-popup-view-item');
    const sr6IconViewClose = sr6PopupViewItem.find('.sr6-icon-view-close');
    const sr6PersonSc = $('.sr6-person-sc3-st2');
    const sr6PersonSc3St2Obj = sr6PersonSc.find('.sr6-person-sc3-st2-obj');
    const totCnt = 100;
    let choiceTimers = [];

    sr6ButtonInfoView.on('click', function () {
        const thisB = $(this);
        const sr6InfoButtonItem = thisB.closest('.sr6-info-button-item');
        const thisItemIdx = sr6InfoButtonItem.index();
        const index = sr6InfoButtonItem.index();

        if (thisB.hasClass('view-hit')) {
            thisB.closest('.showroom-container-wrap').removeClass('previous-world');
            thisB.closest('.showroom-container-wrap').addClass('another-world');
        } else {
            thisB.closest('.showroom-container-wrap').removeClass('another-world');
            thisB.closest('.showroom-container-wrap').addClass('previous-world');
        }

        if (sr6InfoButtonItem.hasClass('active')) {
            sr6InfoButtonItem.removeClass('active');
            sr6InfoPopupWrap.removeClass('active');
            sr6PopupViewItem.eq(index).removeClass('active');

            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-targeting')
                    .removeClass('changeEp' + i);
            }
            sr6PersonSc3St2Obj.removeClass('choice');
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
        } else {
            sr6InfoButtonWrap.find('.sr6-info-button-item').removeClass('active');
            sr6InfoPopupWrap.removeClass('active');
            sr6PopupViewItem.removeClass('active');
            sr6InfoButtonItem.addClass('active');
            sr6InfoPopupWrap.addClass('active');
            sr6PopupViewItem.eq(index).addClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-targeting')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-targeting')
                .addClass('changeEp' + (index + 1));

            // 두 번째 타이머
            choiceTimers.push(
                setTimeout(() => {
                    sr6PersonSc3St2Obj.eq(thisItemIdx).addClass('choice');
                }, 300),
            );
        }
    });

    sr6IconViewClose.on('click', function () {
        const thisB = $(this);
        const sr6PopupViewItem = thisB.closest('.sr6-popup-view-item');
        const index = sr6PopupViewItem.index();

        if (sr6PopupViewItem.hasClass('active')) {
            sr6PopupViewItem.removeClass('active');
            sr6InfoPopupWrap.removeClass('active');
            sr6PopupViewItem.eq(index).removeClass('active');
            sr6InfoButtonWrap.find('.sr6-info-button-item').removeClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-targeting')
                    .removeClass('changeEp' + i);
            }
            sr6PersonSc3St2Obj.removeClass('choice');
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
        } else {
            sr6InfoButtonWrap.find('.sr6-info-button-item').removeClass('active');
            sr6InfoPopupWrap.removeClass('active');
            sr6PopupViewItem.removeClass('active');
            sr6PopupViewItem.addClass('active');
            sr6InfoPopupWrap.addClass('active');
            sr6PopupViewItem.eq(index).addClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-person-sc')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-item-skew-device-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.sr6-info-view-popup-wrap')
                    .siblings('.sr6-targeting')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-person-sc')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-item-skew-device-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.sr6-info-view-popup-wrap')
                .siblings('.sr6-targeting')
                .addClass('changeEp' + (index + 1));
        }
    });
}

sr6InfoViewPopup();
