/* [고등1] > 통합과학2 */
// 산성을 나타내는 이온과 염기성을 나타내는 이온 확인하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s2_122_049/1-goal.mp3'); // 활동목표 오디오

const audioAct1_01 = new Audio('../../media/h_s2_122_049/2-act1_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s2_122_049/2-act1_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s2_122_049/2-act1_03.mp3'); // 활동1_03 오디오
const audioAct1_04 = new Audio('../../media/h_s2_122_049/2-act1_04.mp3'); // 활동1_04 오디오
const audioAct1_05 = new Audio('../../media/h_s2_122_049/2-act1_05.mp3'); // 활동1_05 오디오
const audioAct1_06 = new Audio('../../media/h_s2_122_049/2-act1_06.mp3'); // 활동1_06 오디오
const audioAct1_07 = new Audio('../../media/h_s2_122_049/2-act1_07.mp3'); // 활동1_07 오디오
const audioAct1_08 = new Audio('../../media/h_s2_122_049/2-act1_08.mp3'); // 활동1_08 오디오
const audioAct1_09 = new Audio('../../media/h_s2_122_049/2-act1_09.mp3'); // 활동1_09 오디오
const audioAct1_10 = new Audio('../../media/h_s2_122_049/2-act1_10.mp3'); // 활동1_10 오디오
const audioAct1_11 = new Audio('../../media/h_s2_122_049/2-act1_11.mp3'); // 활동1_11 오디오
const audioAct1_12 = new Audio('../../media/h_s2_122_049/2-act1_12.mp3'); // 활동1_11 오디오

const audioAct2_01 = new Audio('../../media/h_s2_122_049/2-act2_01.mp3'); // 활동2_01 오디오
const audioAct2_02 = new Audio('../../media/h_s2_122_049/2-act2_02.mp3'); // 활동2_02 오디오
const audioAct2_03 = new Audio('../../media/h_s2_122_049/2-act2_03.mp3'); // 활동2_03 오디오
const audioAct2_04 = new Audio('../../media/h_s2_122_049/2-act2_04.mp3'); // 활동2_04 오디오
const audioAct2_05 = new Audio('../../media/h_s2_122_049/2-act2_05.mp3'); // 활동2_05 오디오
const audioAct2_06 = new Audio('../../media/h_s2_122_049/2-act2_06.mp3'); // 활동2_06 오디오
const audioAct2_07 = new Audio('../../media/h_s2_122_049/2-act2_07.mp3'); // 활동2_07 오디오
const audioAct2_08 = new Audio('../../media/h_s2_122_049/2-act2_08.mp3'); // 활동2_08 오디오
const audioAct2_09 = new Audio('../../media/h_s2_122_049/2-act2_09.mp3'); // 활동2_09 오디오
const audioAct2_10 = new Audio('../../media/h_s2_122_049/2-act2_10.mp3'); // 활동2_10 오디오
const audioAct2_11 = new Audio('../../media/h_s2_122_049/2-act2_11.mp3'); // 활동2_11 오디오
const audioAct2_12 = new Audio('../../media/h_s2_122_049/2-act2_12.mp3'); // 활동2_11 오디오

const wrong = new Audio('../../media/h_s2_122_049/wrong.mp3'); // 효과음

const audioGoal_pop = new Audio('../../media/h_s2_122_049/click.mp3'); // 활동목표 팝업

// const resultAudio = new Audio('../../media/h_s2_122_049/3-final.mp3'); // 정리하기 오디오
// const resultAudio_01 = new Audio('../../media/h_s2_122_049/3-final_01.mp3'); // 정리하기 오디오
// const resultAudio_02 = new Audio('../../media/h_s2_122_049/3-final_02.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;
audioAct1_04.volume = 1;
audioAct1_05.volume = 1;
audioAct1_06.volume = 1;
audioAct1_07.volume = 1;
audioAct1_08.volume = 1;
audioAct1_09.volume = 1;
audioAct1_10.volume = 1;
audioAct1_11.volume = 1;
audioAct1_12.volume = 1;

audioAct2_01.volume = 1;
audioAct2_02.volume = 1;
audioAct2_03.volume = 1;
audioAct2_04.volume = 1;
audioAct2_05.volume = 1;
audioAct2_06.volume = 1;
audioAct2_07.volume = 1;
audioAct2_08.volume = 1;
audioAct2_09.volume = 1;
audioAct2_10.volume = 1;
audioAct2_11.volume = 1;
audioAct2_12.volume = 1;

wrong.volume = 1;

audioGoal_pop.volume = 1;

// resultAudio.volume = 1;
// resultAudio_01.volume = 1;
// resultAudio_02.volume = 1;

function pageView() {
    // <스크립트 공통 셋팅 : Start> --------------------------------------------------------------------

    const wrapSetView = $('.wrapper-set-view');
    const pageView1 = wrapSetView.find('.page-view1');
    const pageView2 = wrapSetView.find('.page-view2');
    const pageView3 = wrapSetView.find('.page-view3');
    const pageView4 = wrapSetView.find('.page-view4');

    // <인트로 : page-view1>
    // 윈도우 닫기
    const wCloseIntro = $('.intro .click-close');
    wCloseIntro.on('click', function () {
        window.parent.close();
    });

    const btnIntroStart = $('.page-view1 .button-intro-main-start');
    btnIntroStart.on('click', function (e) {
        const thisB = $(this);
        thisB.addClass('active');
        thisB.closest('.page-view1').removeClass('active');

        // 활동목표 보이기
        pageView2.addClass('active');

        // 오디오 셋팅
        audioGoal.load();
        audioGoal.play();
        audioGoal.mute = true;
        audioGoal.pause();
        audioGoal.currentTime = 0;
        audioGoal.mute = false;

        audioAct1_01.load();
        audioAct1_01.play();
        audioAct1_01.mute = true;
        audioAct1_01.pause();
        audioAct1_01.currentTime = 0;
        audioAct1_01.mute = false;

        audioAct1_02.load();
        audioAct1_02.play();
        audioAct1_02.mute = true;
        audioAct1_02.pause();
        audioAct1_02.currentTime = 0;
        audioAct1_02.mute = false;

        audioAct1_03.load();
        audioAct1_03.play();
        audioAct1_03.mute = true;
        audioAct1_03.pause();
        audioAct1_03.currentTime = 0;
        audioAct1_03.mute = false;

        audioAct1_04.load();
        audioAct1_04.play();
        audioAct1_04.mute = true;
        audioAct1_04.pause();
        audioAct1_04.currentTime = 0;
        audioAct1_04.mute = false;

        audioAct1_05.load();
        audioAct1_05.play();
        audioAct1_05.mute = true;
        audioAct1_05.pause();
        audioAct1_05.currentTime = 0;
        audioAct1_05.mute = false;

        audioAct1_06.load();
        audioAct1_06.play();
        audioAct1_06.mute = true;
        audioAct1_06.pause();
        audioAct1_06.currentTime = 0;
        audioAct1_06.mute = false;

        audioAct1_07.load();
        audioAct1_07.play();
        audioAct1_07.mute = true;
        audioAct1_07.pause();
        audioAct1_07.currentTime = 0;
        audioAct1_07.mute = false;

        audioAct1_08.load();
        audioAct1_08.play();
        audioAct1_08.mute = true;
        audioAct1_08.pause();
        audioAct1_08.currentTime = 0;
        audioAct1_08.mute = false;

        audioAct1_09.load();
        audioAct1_09.play();
        audioAct1_09.mute = true;
        audioAct1_09.pause();
        audioAct1_09.currentTime = 0;
        audioAct1_09.mute = false;

        audioAct1_10.load();
        audioAct1_10.play();
        audioAct1_10.mute = true;
        audioAct1_10.pause();
        audioAct1_10.currentTime = 0;
        audioAct1_10.mute = false;

        audioAct1_11.load();
        audioAct1_11.play();
        audioAct1_11.mute = true;
        audioAct1_11.pause();
        audioAct1_11.currentTime = 0;
        audioAct1_11.mute = false;

        audioAct1_12.load();
        audioAct1_12.play();
        audioAct1_12.mute = true;
        audioAct1_12.pause();
        audioAct1_12.currentTime = 0;
        audioAct1_12.mute = false;

        audioAct2_01.load();
        audioAct2_01.play();
        audioAct2_01.mute = true;
        audioAct2_01.pause();
        audioAct2_01.currentTime = 0;
        audioAct2_01.mute = false;

        audioAct2_02.load();
        audioAct2_02.play();
        audioAct2_02.mute = true;
        audioAct2_02.pause();
        audioAct2_02.currentTime = 0;
        audioAct2_02.mute = false;

        audioAct2_03.load();
        audioAct2_03.play();
        audioAct2_03.mute = true;
        audioAct2_03.pause();
        audioAct2_03.currentTime = 0;
        audioAct2_03.mute = false;

        audioAct2_04.load();
        audioAct2_04.play();
        audioAct2_04.mute = true;
        audioAct2_04.pause();
        audioAct2_04.currentTime = 0;
        audioAct2_04.mute = false;

        audioAct2_05.load();
        audioAct2_05.play();
        audioAct2_05.mute = true;
        audioAct2_05.pause();
        audioAct2_05.currentTime = 0;
        audioAct2_05.mute = false;

        audioAct2_06.load();
        audioAct2_06.play();
        audioAct2_06.mute = true;
        audioAct2_06.pause();
        audioAct2_06.currentTime = 0;
        audioAct2_06.mute = false;

        audioAct2_07.load();
        audioAct2_07.play();
        audioAct2_07.mute = true;
        audioAct2_07.pause();
        audioAct2_07.currentTime = 0;
        audioAct2_07.mute = false;

        audioAct2_08.load();
        audioAct2_08.play();
        audioAct2_08.mute = true;
        audioAct2_08.pause();
        audioAct2_08.currentTime = 0;
        audioAct2_08.mute = false;

        audioAct2_09.load();
        audioAct2_09.play();
        audioAct2_09.mute = true;
        audioAct2_09.pause();
        audioAct2_09.currentTime = 0;
        audioAct2_09.mute = false;

        audioAct2_10.load();
        audioAct2_10.play();
        audioAct2_10.mute = true;
        audioAct2_10.pause();
        audioAct2_10.currentTime = 0;
        audioAct2_10.mute = false;

        audioAct2_11.load();
        audioAct2_11.play();
        audioAct2_11.mute = true;
        audioAct2_11.pause();
        audioAct2_11.currentTime = 0;
        audioAct2_11.mute = false;

        audioAct2_12.load();
        audioAct2_12.play();
        audioAct2_12.mute = true;
        audioAct2_12.pause();
        audioAct2_12.currentTime = 0;
        audioAct2_12.mute = false;

        wrong.load();
        wrong.play();
        wrong.mute = true;
        wrong.pause();
        wrong.currentTime = 0;
        wrong.mute = false;

        // resultAudio.load();
        // resultAudio.play();
        // resultAudio.mute = true;
        // resultAudio.pause();
        // resultAudio.currentTime = 0;
        // resultAudio.mute = false;

        // resultAudio_01.load();
        // resultAudio_01.play();
        // resultAudio_01.mute = true;
        // resultAudio_01.pause();
        // resultAudio_01.currentTime = 0;
        // resultAudio_01.mute = false;

        // resultAudio_02.load();
        // resultAudio_02.play();
        // resultAudio_02.mute = true;
        // resultAudio_02.pause();
        // resultAudio_02.currentTime = 0;
        // resultAudio_02.mute = false;

        audioGoal_pop.load();
        audioGoal_pop.play();
        audioGoal_pop.mute = true;
        audioGoal_pop.pause();
        audioGoal_pop.currentTime = 0;
        audioGoal_pop.mute = false;

        // 0.5초 후 오디오 재생 (타이머 설정)
        setTimeout(function () {
            audioGoal_pop.load();
            audioGoal_pop.play();
        }, 500);

        setTimeout(function () {
            // '활동시작' 클릭 시 오디오 재생
            audioGoal.play();
        }, 1500);
    });

    // -----------------------------------------------------------------

    // <활동목표 : page-view2>
    const btnActivityGoalsClose = $('.page-view2 .button-close');
    btnActivityGoalsClose.on('click', function (e) {
        audioGoal.pause(); // 활동목표 닫기 시 오디오 멈춤
        const thisB = $(this);
        thisB.addClass('active');
        thisB.closest('.page-view2').removeClass('active');
        firstActivity();
    });

    // -----------------------------------------------------------------

    // <컨텐츠 : page-view3>
    // 공통헤더 -------------------------------
    var wConHsound = $('.click-sound');
    const wConHhome = $('.header-area .click-home');
    const wConHclose = $('.header-area .click-close');

    // 음소거 버튼
    wConHsound.on('click', function () {
        // 음소거 버튼 활성화
        if (!$('.click-sound').hasClass('active')) {
            $('.click-sound').addClass('active');
            /* 오디오 볼륨 [0] 설정 */
            audioGoal.volume = 0;
            audioAct1_01.volume = 0;
            audioAct1_02.volume = 0;
            audioAct1_03.volume = 0;
            audioAct1_04.volume = 0;
            audioAct1_05.volume = 0;
            audioAct1_06.volume = 0;
            audioAct1_07.volume = 0;
            audioAct1_08.volume = 0;
            audioAct1_09.volume = 0;
            audioAct1_10.volume = 0;
            audioAct1_11.volume = 0;
            audioAct1_12.volume = 0;

            audioAct2_01.volume = 0;
            audioAct2_02.volume = 0;
            audioAct2_03.volume = 0;
            audioAct2_04.volume = 0;
            audioAct2_05.volume = 0;
            audioAct2_06.volume = 0;
            audioAct2_07.volume = 0;
            audioAct2_08.volume = 0;
            audioAct2_09.volume = 0;
            audioAct2_10.volume = 0;
            audioAct2_11.volume = 0;
            audioAct2_12.volume = 0;

            wrong.volume = 0;

            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            audioAct1_02.volume = 1;
            audioAct1_03.volume = 1;
            audioAct1_04.volume = 1;
            audioAct1_05.volume = 1;
            audioAct1_06.volume = 1;
            audioAct1_07.volume = 1;
            audioAct1_08.volume = 1;
            audioAct1_09.volume = 1;
            audioAct1_10.volume = 1;
            audioAct1_11.volume = 1;
            audioAct1_12.volume = 1;

            audioAct2_01.volume = 1;
            audioAct2_02.volume = 1;
            audioAct2_03.volume = 1;
            audioAct2_04.volume = 1;
            audioAct2_05.volume = 1;
            audioAct2_06.volume = 1;
            audioAct2_07.volume = 1;
            audioAct2_08.volume = 1;
            audioAct2_09.volume = 1;
            audioAct2_10.volume = 1;
            audioAct2_11.volume = 1;
            audioAct2_12.volume = 1;

            wrong.volume = 1;

            audioGoal_pop.volume = 1;
        }
    });

    // 홈 버튼
    wConHhome.on('click', function () {
        location.reload();
    });

    // 닫기 버튼
    wConHclose.on('click', function () {
        window.parent.close();
    });

    // -----------------------------------------------------------------

    // <스크립트 공통 셋팅 : End> -----------------------------------------------------------------------

    // 활동목표 닫기 클릭 후 처음 활동시작
    function firstActivity() {
        // 타이머 ID를 저장하는 변수
        let audioTimeout, hideTimeout, magnetTimeout;
        let coilTimeout;
        let contentStartSet;

        $('.gesture-box-guide-finger1-select').addClass('active');
        $('.gesture-box-guide-finger2-select').addClass('active');

        $('.select-box .list').on('click', function () {
            $('.gesture-box-guide-finger1-select').removeClass('active');
            $('.gesture-box-guide-finger2-select').removeClass('active');
            $('.select-box .list').css('pointer-events', 'none');

            if ($(this).hasClass('acidic')) {
                $(this).addClass('on');

                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_01.load();
                    audioAct1_01.play();
                }, 1500);

                setTimeout(function () {
                    $('.scene-layer1').fadeOut();
                    $('.scene-layer2').fadeIn();
                    $('.guide-title-wrap').fadeIn();
                    $('.popup-layer.activity1').fadeIn();
                }, 4000);

                // 5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_02.load();
                    audioAct1_02.play();
                }, 5000);

                // setTimeout(function () {
                //     $('.popup-layer.activity1').fadeOut();
                //     $('.litmus-paper-wrap').fadeIn();
                // }, 9000);

                // // 10초 후 가이드 모달 활성화
                // setTimeout(function () {
                //     $('.guide-balloon-tip-wrap1').addClass('active');
                //     $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
                // }, 10000);
                // // 11.5초 후 오디오 재생 (타이머 설정)
                // audioTimeout = setTimeout(function () {
                //     audioAct1_03.load();
                //     audioAct1_03.play();
                // }, 11500);
                // // 19초 후 모달과 텍스트 비활성화 (타이머 설정)
                // setTimeout(function () {
                //     $('.guide-balloon-tip-wrap1').removeClass('active');
                //     $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                // }, 19000);
                // // 20초 후 손가락 드래그 가이드
                // setTimeout(function () {
                //     $('.dote-line1').fadeIn();
                //     $('.gesture-box-guide-finger1').addClass('active');
                // }, 20000);
            }
            if ($(this).hasClass('alkaline')) {
                $(this).addClass('on');
                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_01.load();
                    audioAct2_01.play();
                }, 1500);

                setTimeout(function () {
                    $('.scene-layer1').fadeOut();
                    $('.scene-layer3').fadeIn();
                    $('.guide-title-wrap').fadeIn();
                    $('.popup-layer.activity2').fadeIn();
                }, 4000);

                // 5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_02.load();
                    audioAct2_02.play();
                }, 5000);

                // setTimeout(function () {
                //     $('.popup-layer.activity2').fadeOut();
                //     $('.litmus-paper-wrap').fadeIn();
                // }, 9000);

                // // 10초 후 가이드 모달 활성화
                // setTimeout(function () {
                //     $('.guide-balloon-tip-wrap1').addClass('active');
                //     $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
                // }, 10000);
                // // 11.5초 후 오디오 재생 (타이머 설정)
                // audioTimeout = setTimeout(function () {
                //     audioAct2_03.load();
                //     audioAct2_03.play();
                // }, 11500);
                // // 19초 후 모달과 텍스트 비활성화 (타이머 설정)
                // setTimeout(function () {
                //     $('.guide-balloon-tip-wrap1').removeClass('active');
                //     $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                // }, 19000);
                // // 20초 후 손가락 드래그 가이드
                // setTimeout(function () {
                //     $('.dote-line1').fadeIn();
                //     $('.gesture-box-guide-finger1').addClass('active');
                // }, 20000);
            }
            setTimeout(function () {
                $('.popup-inner .btn button').css('pointer-events', 'unset');
            }, 8000);
        });

        // 블루 start
        $(function () {
            $('.popup-layer.activity1 .btn button').on('click', function () {
                $('.popup-layer.activity1').fadeOut();
                $('.litmus-paper-wrap').fadeIn();
                audioAct1_01.pause();
                audioAct1_02.pause();

                $('.guide-balloon-tip-wrap1').addClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_03.load();
                    audioAct1_03.play();
                }, 1500);

                // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap1').removeClass('active');
                    $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                }, 10000);

                // 11초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.dote-line1').fadeIn();
                    $('.gesture-box-guide-finger1').addClass('active');
                }, 11000);
            });

            $('.scene-layer.blue .dote-line1').on('click', function () {
                audioAct1_03.pause();
                $('.guide-balloon-tip-wrap1').removeClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                $('.dote-line1').fadeOut();
                $('.gesture-box-guide-finger1').removeClass('active');
                $('.filter-paper').fadeIn();
                $('.guide-hci-txt').fadeIn();
                // 2초 후 가이드
                setTimeout(function () {
                    // 가이드 모달 활성화
                    $('.guide-balloon-tip-wrap2').addClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').addClass('active');
                }, 2000);
                // 2.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_04.load();
                    audioAct1_04.play();
                }, 2500);
                // 8초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap2').removeClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
                }, 8000);
                // 9초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger2').addClass('active');
                    $('.gesture-box-guide-finger3').addClass('active');
                    $('.litmus-paper button').css('pointer-events', 'unset');
                }, 9000);
            });
            $('.scene-layer.blue .left-crab').on('click', function () {
                $('.gesture-box-guide-finger2').removeClass('active');
                $('.plus-crab').fadeIn();
                $(this).addClass('on');
                // 1초 후 +
                setTimeout(function () {
                    $('.plus').fadeIn();
                    $('.left-crab').css('pointer-events', 'none');
                }, 1000);
            });
            $('.scene-layer.blue .right-crab').on('click', function () {
                $('.gesture-box-guide-finger3').removeClass('active');
                $('.minus-crab').fadeIn().addClass('on');
                $(this).addClass('on');
                // 1초 후 -
                setTimeout(function () {
                    $('.minus').fadeIn();
                    $('.right-crab').css('pointer-events', 'none');
                }, 1000);
            });
            $('.scene-layer.blue .litmus-paper button').on('click', function () {
                var crab_btn = $('.scene-layer.blue .litmus-paper button.on').length;
                if (crab_btn == 2) {
                    audioAct1_03.pause();
                    $('.guide-balloon-tip-wrap2').removeClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
                    $('.guide-hci-txt').fadeOut();
                    $('.guide-litmus-txt').fadeOut();
                    // 1초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap3').addClass('active');
                        $('.guide-balloon-tip-wrap3 .bubble-text3').addClass('active');
                    }, 1000);
                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_05.load();
                        audioAct1_05.play();
                    }, 1500);
                    // 9초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap3').removeClass('active');
                        $('.guide-balloon-tip-wrap3 .bubble-text3').removeClass('active');
                    }, 9000);
                    // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.hci').fadeIn().addClass('active');
                    }, 10000);
                    // 14초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4').addClass('active');
                        $('.guide-balloon-tip-wrap4 .bubble-text4').addClass('active');
                    }, 14000);
                    // 15.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_06.load();
                        audioAct1_06.play();
                    }, 15500);
                    // 23초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_07.load();
                        audioAct1_07.play();
                    }, 23000);
                    // 26초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4').removeClass('active');
                        $('.guide-balloon-tip-wrap4 .bubble-text4').removeClass('active');
                    }, 26000);
                    // 27초 후 손가락 드래그 가이드
                    setTimeout(function () {
                        $('.dote-line2').fadeIn();
                        $('.gesture-box-guide-finger4').addClass('active');
                    }, 27000);
                }
            });

            $('.scene-layer.blue .dote-line2').on('click', function () {
                $('.litmus-paper-detail-wrap .hci').removeClass('active');
                $('.litmus-paper-detail-wrap .litmus-small .hci').removeClass('active');
                $('.litmus-paper-wrap').hide();
                $('.litmus-paper-detail-wrap').css('transform', 'scale(1.0)').addClass('active');
                // 1초 후 가이드 모달 활성화
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap5').addClass('active');
                    $('.guide-balloon-tip-wrap5 .bubble-text5').addClass('active');
                }, 1000);
                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_08.load();
                    audioAct1_08.play();
                }, 1500);
                // 5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_09.load();
                    audioAct1_09.play();
                }, 5000);
                // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap5').removeClass('active');
                    $('.guide-balloon-tip-wrap5 .bubble-text5').removeClass('active');
                }, 10000);
                // 11초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger5').addClass('active');
                    $('.connection-btn button').css('pointer-events', 'unset');
                }, 11000);
            });

            $('.connection-btn.blue button').on('click', function () {
                $(this).toggleClass('on');
                $('.gesture-box-guide-finger5').removeClass('active');

                if ($(this).hasClass('on')) {
                    $(this).text('전원을 연결한 뒤').css('border-radius', '50px');
                    // $('.drag-box .drag').css('pointer-events','unset');
                    $('.litmus-paper-detail-wrap .hci').addClass('active');
                    $('.litmus-paper-detail-wrap .litmus-small .hci').addClass('active');

                    // 1초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap6').addClass('active');
                        $('.guide-balloon-tip-wrap6 .bubble-text6').addClass('active');
                    }, 1000);
                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_10.load();
                        audioAct1_10.play();
                    }, 1500);
                    // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap6').removeClass('active');
                        $('.guide-balloon-tip-wrap6 .bubble-text6').removeClass('active');
                    }, 10000);
                    // 11초 후 손가락 드래그 가이드
                    setTimeout(function () {
                        $('.gesture-box-guide-finger6').addClass('active');
                        $('.drag-box .drag').css('pointer-events', 'unset');
                    }, 11000);
                } else {
                    audioAct1_10.pause();
                    $(this).text('전원을 연결하기 전').css('border-radius', '10px');
                    $('.drag-box .drag').css('pointer-events', 'none');
                    $('.litmus-paper-detail-wrap .hci').removeClass('active');
                    $('.litmus-paper-detail-wrap .litmus-small .hci').removeClass('active');
                    $('.guide-balloon-tip-wrap6').removeClass('active');
                    $('.guide-balloon-tip-wrap6 .bubble-text6').removeClass('active');
                    $('.guide-balloon-tip-wrap7').removeClass('active');
                    $('.guide-balloon-tip-wrap7 .bubble-text7').removeClass('active');
                    $('.guide-balloon-tip-wrap8').removeClass('active');
                    $('.guide-balloon-tip-wrap8 .bubble-text8').removeClass('active');
                    $('.gesture-box-guide-finger6').removeClass('active');
                    $('.btn-wrap').removeClass();
                    $('.drag').removeClass('on');
                    $('.drag1').css('top', '22px').css('left', '33px');
                    $('.drag2').css('top', '58px').css('left', '63px');
                    $('.drag3').css('top', '-141px').css('left', '233px');
                    $('.drag4').css('top', '-390px').css('left', '248px');
                    $('.drag5').css('top', '-146px').css('left', '256px');
                    $('.drag6').css('top', '-210px').css('left', '93px');
                }
            });

            /* 드래그이벤트 */
            $('.drag-box1 .drag').draggable({
                containment: '.drag-wrap1',
                cursor: 'pointer',
                snap: '.drag-wrap1',
                revert: function (event) {
                    var id = $(this)[0].id;
                    if (id == 'drag1-2') {
                        if (event) {
                            $('.drop1-2').addClass('on');
                            $('.gesture-box-guide-finger6').removeClass('active');
                        } else return true;
                    }
                    if (id == 'drag1-1') {
                        if (event) {
                            $('.drop1-1').addClass('on');
                            $('.gesture-box-guide-finger6').removeClass('active');
                        } else return true;
                    }

                    var dragbox1 = $('.drag-box1 .drag.on').length;
                    if (dragbox1 == 6) {
                        if (event) {
                            // 1초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.guide-balloon-tip-wrap7').addClass('active');
                                $('.guide-balloon-tip-wrap7 .bubble-text7').addClass('active');
                                $('.drag').css('pointer-events', 'none');
                                $('.connection-btn button').css('pointer-events', 'none');
                            }, 1000);

                            // 1.5초 후 오디오 재생 (타이머 설정)
                            audioTimeout = setTimeout(function () {
                                audioAct1_11.load();
                                audioAct1_11.play();
                            }, 1500);

                            // 10초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.guide-balloon-tip-wrap8').addClass('active');
                                $('.guide-balloon-tip-wrap8 .bubble-text8').addClass('active');
                            }, 10000);

                            // 11.5초 후 오디오 재생 (타이머 설정)
                            audioTimeout = setTimeout(function () {
                                audioAct1_12.load();
                                audioAct1_12.play();
                            }, 11500);

                            // 19초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.litmus-paper-detail-wrap .btn-wrap').addClass('active');
                            }, 19000);
                        }
                    }
                },
                stop: function (event) {
                    var id = $(this)[0].id;
                    if (id != 'drag1-2') {
                        if (event) {
                            return true;
                        } else return true;
                    }
                    if (id != 'drag1-1') {
                        if (event) {
                            return true;
                        } else return true;
                    }
                },
            });
            $('.drop1-1').droppable({
                accept: '#drag1-1',
                drop: function (event, ui) {
                    console.log(ui.draggable[0].id);
                    $(ui.draggable[0]).css('top', '10%').css('left', '-45%').addClass('on');
                    $('.gesture-box-guide-finger6').removeClass('active');
                },
            });
            $('.drop1-2').droppable({
                accept: '#drag1-2',
                drop: function (event, ui) {
                    console.log(ui.draggable[0].id);
                    $(ui.draggable[0]).css('top', '-50%').css('left', '105%').addClass('on');
                    $('.gesture-box-guide-finger6').removeClass('active');
                },
            });

            $('.drag-box1 .ci').bind('dragstop', function (event, ui) {
                if ($(this).hasClass('on') === false) {
                    wrong.load();
                    wrong.play();
                }
            });
            $('.drag-box1 .h').bind('dragstop', function (event, ui) {
                if ($(this).hasClass('on') === false) {
                    wrong.load();
                    wrong.play();
                }
            });
        });

        // 핑크 start
        $(function () {
            $('.popup-layer.activity2 .btn button').on('click', function () {
                $('.popup-layer.activity2').fadeOut();
                $('.litmus-paper-wrap').fadeIn();
                audioAct2_01.pause();
                audioAct2_02.pause();

                $('.guide-balloon-tip-wrap1').addClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_03.load();
                    audioAct2_03.play();
                }, 1500);

                // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap1').removeClass('active');
                    $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                }, 10000);

                // 11초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.dote-line1').fadeIn();
                    $('.gesture-box-guide-finger1').addClass('active');
                }, 11000);
            });

            $('.scene-layer.pink .dote-line1').on('click', function () {
                audioAct2_03.pause();
                $('.guide-balloon-tip-wrap1').removeClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                $('.dote-line1').fadeOut();
                $('.gesture-box-guide-finger1').removeClass('active');
                $('.filter-paper').fadeIn();
                $('.guide-hci-txt').fadeIn();
                // 2초 후 가이드
                setTimeout(function () {
                    // 가이드 모달 활성화
                    $('.guide-balloon-tip-wrap2').addClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').addClass('active');
                }, 2000);
                // 2.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_04.load();
                    audioAct2_04.play();
                }, 2500);
                // 8초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap2').removeClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
                }, 8000);
                // 9초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger2').addClass('active');
                    $('.gesture-box-guide-finger3').addClass('active');
                    $('.litmus-paper button').css('pointer-events', 'unset');
                }, 9000);
            });
            $('.scene-layer.pink .left-crab').on('click', function () {
                $('.gesture-box-guide-finger2').removeClass('active');
                $('.plus-crab').fadeIn();
                $(this).addClass('on');
                // 1초 후 +
                setTimeout(function () {
                    $('.plus').fadeIn();
                    $('.left-crab').css('pointer-events', 'none');
                }, 1000);
            });
            $('.scene-layer.pink .right-crab').on('click', function () {
                $('.gesture-box-guide-finger3').removeClass('active');
                $('.minus-crab').fadeIn().addClass('on');
                $(this).addClass('on');
                // 1초 후 -
                setTimeout(function () {
                    $('.minus').fadeIn();
                    $('.right-crab').css('pointer-events', 'none');
                }, 1000);
            });
            $('.scene-layer.pink .litmus-paper button').on('click', function () {
                var crab_btn_pink = $('.scene-layer.pink .litmus-paper button.on').length;
                if (crab_btn_pink == 2) {
                    audioAct2_03.pause();
                    $('.guide-balloon-tip-wrap2').removeClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
                    $('.guide-hci-txt').fadeOut();
                    $('.guide-litmus-txt').fadeOut();
                    // 1초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap3').addClass('active');
                        $('.guide-balloon-tip-wrap3 .bubble-text3').addClass('active');
                    }, 1000);
                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct2_05.load();
                        audioAct2_05.play();
                    }, 1500);
                    // 9초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap3').removeClass('active');
                        $('.guide-balloon-tip-wrap3 .bubble-text3').removeClass('active');
                    }, 9000);
                    // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.hci').fadeIn().addClass('active');
                    }, 10000);
                    // 14초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4').addClass('active');
                        $('.guide-balloon-tip-wrap4 .bubble-text4').addClass('active');
                    }, 14000);
                    // 15.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct2_06.load();
                        audioAct2_06.play();
                    }, 15500);
                    // 23초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct2_07.load();
                        audioAct2_07.play();
                    }, 23000);
                    // 26초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4').removeClass('active');
                        $('.guide-balloon-tip-wrap4 .bubble-text4').removeClass('active');
                    }, 26000);
                    // 27초 후 손가락 드래그 가이드
                    setTimeout(function () {
                        $('.dote-line2').fadeIn();
                        $('.gesture-box-guide-finger4').addClass('active');
                    }, 27000);
                }
            });

            $('.scene-layer.pink .dote-line2').on('click', function () {
                $('.litmus-paper-detail-wrap .hci').removeClass('active');
                $('.litmus-paper-detail-wrap .litmus-small .hci').removeClass('active');
                $('.litmus-paper-wrap').hide();
                $('.litmus-paper-detail-wrap').css('transform', 'scale(1.0)').addClass('active');
                // 1초 후 가이드 모달 활성화
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap5').addClass('active');
                    $('.guide-balloon-tip-wrap5 .bubble-text5').addClass('active');
                }, 1000);
                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_08.load();
                    audioAct2_08.play();
                }, 1500);
                // 6초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct2_09.load();
                    audioAct2_09.play();
                }, 6000);
                // 11초 후 모달과 텍스트 비활성화 (타이머 설정)
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap5').removeClass('active');
                    $('.guide-balloon-tip-wrap5 .bubble-text5').removeClass('active');
                }, 11000);
                // 12초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger5').addClass('active');
                    $('.connection-btn button').css('pointer-events', 'unset');
                }, 12000);
            });

            $('.connection-btn.pink button').on('click', function () {
                $(this).toggleClass('on');
                $('.gesture-box-guide-finger5').removeClass('active');

                if ($(this).hasClass('on')) {
                    $(this).text('전원을 연결한 뒤').css('border-radius', '50px');
                    // $('.drag-box .drag').css('pointer-events','unset');
                    $('.litmus-paper-detail-wrap .hci').addClass('active');
                    $('.litmus-paper-detail-wrap .litmus-small .hci').addClass('active');

                    // 1초 후 가이드 모달 활성화
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap6').addClass('active');
                        $('.guide-balloon-tip-wrap6 .bubble-text6').addClass('active');
                    }, 1000);
                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct2_10.load();
                        audioAct2_10.play();
                    }, 1500);
                    // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap6').removeClass('active');
                        $('.guide-balloon-tip-wrap6 .bubble-text6').removeClass('active');
                    }, 10000);
                    // 11초 후 손가락 드래그 가이드
                    setTimeout(function () {
                        $('.gesture-box-guide-finger6-1.pink').addClass('active');
                        $('.drag-box .drag').css('pointer-events', 'unset');
                    }, 11000);
                } else {
                    audioAct2_10.pause();
                    $(this).text('전원을 연결하기 전').css('border-radius', '10px');
                    $('.drag-box .drag').css('pointer-events', 'none');
                    $('.litmus-paper-detail-wrap .hci').removeClass('active');
                    $('.litmus-paper-detail-wrap .litmus-small .hci').removeClass('active');
                    $('.guide-balloon-tip-wrap6').removeClass('active');
                    $('.guide-balloon-tip-wrap6 .bubble-text6').removeClass('active');
                    $('.guide-balloon-tip-wrap7').removeClass('active');
                    $('.guide-balloon-tip-wrap7 .bubble-text7').removeClass('active');
                    $('.guide-balloon-tip-wrap8').removeClass('active');
                    $('.guide-balloon-tip-wrap8 .bubble-text8').removeClass('active');
                    $('.gesture-box-guide-finger6-1.pink').removeClass('active');
                    $('.btn-wrap').removeClass('active');
                    $('.drag').removeClass('on');
                    $('.drag1').css('top', '22px').css('left', '33px');
                    $('.drag2').css('top', '58px').css('left', '63px');
                    $('.drag3').css('top', '-141px').css('left', '233px');
                    $('.drag4').css('top', '-390px').css('left', '248px');
                    $('.drag5').css('top', '-146px').css('left', '256px');
                    $('.drag6').css('top', '-210px').css('left', '93px');
                }
            });

            /* 드래그이벤트 */
            $('.drag-box2 .drag').draggable({
                containment: '.drag-wrap2',
                cursor: 'pointer',
                snap: '.drag-wrap2',
                revert: function (event) {
                    var id = $(this)[0].id;
                    if (id == 'drag2-2') {
                        if (event) {
                            $('.drop2-2').addClass('on');
                            $('.gesture-box-guide-finger6').removeClass('active');
                        } else return true;
                    }
                    if (id == 'drag2-1') {
                        if (event) {
                            $('.drop1').addClass('on');
                            $('.gesture-box-guide-finger6').removeClass('active');
                        } else return true;
                    }

                    var dragbox2 = $('.drag-box2 .drag.on').length;
                    if (dragbox2 == 6) {
                        if (event) {
                            // 1초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.guide-balloon-tip-wrap7').addClass('active');
                                $('.guide-balloon-tip-wrap7 .bubble-text7').addClass('active');
                                $('.drag').css('pointer-events', 'none');
                                $('.connection-btn button').css('pointer-events', 'none');
                            }, 1000);

                            // 1.5초 후 오디오 재생 (타이머 설정)
                            audioTimeout = setTimeout(function () {
                                audioAct2_11.load();
                                audioAct2_11.play();
                            }, 1500);

                            // 10초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.guide-balloon-tip-wrap8').addClass('active');
                                $('.guide-balloon-tip-wrap8 .bubble-text8').addClass('active');
                            }, 10000);

                            // 11.5초 후 오디오 재생 (타이머 설정)
                            audioTimeout = setTimeout(function () {
                                audioAct2_12.load();
                                audioAct2_12.play();
                            }, 11500);

                            // 19초 후 가이드 모달 활성화
                            setTimeout(function () {
                                $('.litmus-paper-detail-wrap .btn-wrap').addClass('active');
                            }, 19000);
                        }
                    }
                },
                stop: function (event) {
                    var id = $(this)[0].id;
                    if (id == 'drag2-2') {
                        if (event) {
                            return true;
                        } else return true;
                    }
                    if (id == 'drag2-1') {
                        if (event) {
                            return true;
                        } else return true;
                    }
                },
            });
            $('.drop2-1').droppable({
                accept: '#drag2-1',
                drop: function (event, ui) {
                    console.log(ui.draggable[0].id);
                    $(ui.draggable[0]).css('top', '10%').css('left', '-45%').addClass('on');
                    $('.gesture-box-guide-finger6-1.pink').removeClass('active');
                },
            });
            $('.drop2-2').droppable({
                accept: '#drag2-2',
                drop: function (event, ui) {
                    console.log(ui.draggable[0].id);
                    $(ui.draggable[0]).css('top', '-50%').css('left', '105%').addClass('on');
                    $('.gesture-box-guide-finger6-1.pink').removeClass('active');
                },
            });

            $('.drag-box2 .ci').bind('dragstop', function (event, ui) {
                if ($(this).hasClass('on') === false) {
                    wrong.load();
                    wrong.play();
                }
            });
            $('.drag-box2 .h').bind('dragstop', function (event, ui) {
                if ($(this).hasClass('on') === false) {
                    wrong.load();
                    wrong.play();
                }
            });
        });

        $('.reset-btn.blue').on('click', function () {
            resetbtn_blue();
        });
        $('.reset-btn.pink').on('click', function () {
            resetbtn_pink();
        });
        $('.back-btn').on('click', function () {
            backbtn();
        });

        $('.blue .back-btn').on('click', function () {
            $('.scene-layer1 .select-box .list.blue').css('pointer-events', 'none');
            $('.gesture-box-guide-finger1-select').removeClass('active');
        });

        $('.pink .back-btn').on('click', function () {
            $('.scene-layer1 .select-box .list.pink').css('pointer-events', 'none');
            $('.gesture-box-guide-finger2-select').removeClass('active');
        });

        function resetbtn_blue() {
            $('.litmus-paper-detail-wrap').removeClass('active');
            $('.guide-balloon-tip-wrap7').removeClass('active');
            $('.guide-balloon-tip-wrap7 .bubble-text7').removeClass('active');
            $('.guide-balloon-tip-wrap8').removeClass('active');
            $('.guide-balloon-tip-wrap8 .bubble-text8').removeClass('active');
            $('.plus-crab').hide();
            $('.minus-crab').hide();
            $('.plus').hide();
            $('.minus').hide();
            $('.hci').hide().removeClass('active');
            $('.dote-line2').hide();
            $('.filter-paper').hide();
            $('.gesture-box-guide-finger4').removeClass('active');
            $('.litmus-paper button').removeClass('on');
            $('.litmus-paper-detail-wrap').css('transform', '').removeClass('active');
            $('.btn-wrap').removeClass('active');
            $('.connection-btn button').text('전원을 연결하기 전').css('border-radius', '10px').removeClass('on');
            $('.drag-box .drag').css('pointer-events', 'none');
            $('.litmus-paper-detail-wrap .hci').removeClass('active');
            $('.drag').removeClass('on');
            $('.drag1').css('top', '22px').css('left', '33px');
            $('.drag2').css('top', '58px').css('left', '63px');
            $('.drag3').css('top', '-141px').css('left', '233px');
            $('.drag4').css('top', '-390px').css('left', '248px');
            $('.drag5').css('top', '-146px').css('left', '256px');
            $('.drag6').css('top', '-210px').css('left', '93px');
            $('.guide-litmus-txt').show();

            $('.litmus-paper-wrap').fadeIn();
            // 1초 후 가이드 모달 활성화
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1').addClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
            }, 1000);
            // 1.5초 후 오디오 재생 (타이머 설정)
            audioTimeout = setTimeout(function () {
                audioAct1_03.load();
                audioAct1_03.play();
            }, 1500);
            // 9초 후 모달과 텍스트 비활성화 (타이머 설정)
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1').removeClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
            }, 9000);
            // 10초 후 손가락 드래그 가이드
            setTimeout(function () {
                $('.dote-line1').fadeIn();
                $('.gesture-box-guide-finger1').addClass('active');
            }, 10000);
        }

        function resetbtn_pink() {
            $('.litmus-paper-detail-wrap').removeClass('active');
            $('.guide-balloon-tip-wrap7').removeClass('active');
            $('.guide-balloon-tip-wrap7 .bubble-text7').removeClass('active');
            $('.guide-balloon-tip-wrap8').removeClass('active');
            $('.guide-balloon-tip-wrap8 .bubble-text8').removeClass('active');
            $('.plus-crab').hide();
            $('.minus-crab').hide();
            $('.plus').hide();
            $('.minus').hide();
            $('.hci').hide().removeClass('active');
            $('.dote-line2').hide();
            $('.filter-paper').hide();
            $('.gesture-box-guide-finger4').removeClass('active');
            $('.litmus-paper button').removeClass('on');
            $('.litmus-paper-detail-wrap').css('transform', '').removeClass('active');
            $('.btn-wrap').removeClass('active');
            $('.connection-btn button').text('전원을 연결하기 전').css('border-radius', '10px').removeClass('on');
            $('.drag-box .drag').css('pointer-events', 'none');
            $('.litmus-paper-detail-wrap .hci').removeClass('active');
            $('.drag').removeClass('on');
            $('.drag1').css('top', '22px').css('left', '33px');
            $('.drag2').css('top', '58px').css('left', '63px');
            $('.drag3').css('top', '-141px').css('left', '233px');
            $('.drag4').css('top', '-390px').css('left', '248px');
            $('.drag5').css('top', '-146px').css('left', '256px');
            $('.drag6').css('top', '-210px').css('left', '93px');
            $('.guide-litmus-txt').show();

            $('.litmus-paper-wrap').fadeIn();
            // 1초 후 가이드 모달 활성화
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1').addClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
            }, 1000);
            // 1.5초 후 오디오 재생 (타이머 설정)
            audioTimeout = setTimeout(function () {
                audioAct2_03.load();
                audioAct2_03.play();
            }, 1500);
            // 9초 후 모달과 텍스트 비활성화 (타이머 설정)
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1').removeClass('active');
                $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
            }, 9000);
            // 10초 후 손가락 드래그 가이드
            setTimeout(function () {
                $('.dote-line1').fadeIn();
                $('.gesture-box-guide-finger1').addClass('active');
            }, 10000);
        }

        function backbtn() {
            $('.select-box .list').removeClass('on').css('pointer-events', 'unset');
            $('.scene-layer').hide();
            $('.guide-title-wrap').hide();
            $('.popup-inner .btn button').css('pointer-events', 'none');
            $('.litmus-paper-detail-wrap').removeClass('active');
            $('.guide-balloon-tip-wrap7').removeClass('active');
            $('.guide-balloon-tip-wrap7 .bubble-text7').removeClass('active');
            $('.guide-balloon-tip-wrap8').removeClass('active');
            $('.guide-balloon-tip-wrap8 .bubble-text8').removeClass('active');
            $('.plus-crab').hide();
            $('.minus-crab').hide();
            $('.plus').hide();
            $('.minus').hide();
            $('.hci').hide().removeClass('active');
            $('.dote-line2').hide();
            $('.filter-paper').hide();
            $('.gesture-box-guide-finger4').removeClass('active');
            $('.litmus-paper button').removeClass('on');
            $('.litmus-paper-detail-wrap').css('transform', '').removeClass('active');
            $('.btn-wrap').removeClass('active');
            $('.connection-btn button').text('전원을 연결하기 전').css('border-radius', '10px').removeClass('on');
            $('.drag-box .drag').css('pointer-events', 'none');
            $('.litmus-paper-detail-wrap .hci').removeClass('active');
            $('.drag').removeClass('on');
            $('.drag1').css('top', '22px').css('left', '33px');
            $('.drag2').css('top', '58px').css('left', '63px');
            $('.drag3').css('top', '-141px').css('left', '233px');
            $('.drag4').css('top', '-390px').css('left', '248px');
            $('.drag5').css('top', '-146px').css('left', '256px');
            $('.drag6').css('top', '-210px').css('left', '93px');
            $('.scene-layer1').fadeIn();
            $('.guide-litmus-txt').show();
            $('.gesture-box-guide-finger1-select').addClass('active');
            $('.gesture-box-guide-finger2-select').addClass('active');

            $('.select-box .list').on('click', function () {
                $('.gesture-box-guide-finger1-select').removeClass('active');
                $('.gesture-box-guide-finger2-select').removeClass('active');
                $('.select-box .list').css('pointer-events', 'none');

                if ($(this).hasClass('acidic')) {
                    $(this).addClass('on');

                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_01.load();
                        audioAct1_01.play();
                    }, 1500);

                    setTimeout(function () {
                        $('.scene-layer1').fadeOut();
                        $('.scene-layer2').fadeIn();
                        $('.guide-title-wrap').fadeIn();
                        $('.popup-layer.activity1').fadeIn();
                    }, 4000);

                    // 5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct1_02.load();
                        audioAct1_02.play();
                    }, 5000);

                    // setTimeout(function () {
                    //     $('.popup-layer.activity1').fadeOut();
                    //     $('.litmus-paper-wrap').fadeIn();
                    // }, 9000);

                    // // 10초 후 가이드 모달 활성화
                    // setTimeout(function () {
                    //     $('.guide-balloon-tip-wrap1').addClass('active');
                    //     $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
                    // }, 10000);
                    // // 11.5초 후 오디오 재생 (타이머 설정)
                    // audioTimeout = setTimeout(function () {
                    //     audioAct1_03.load();
                    //     audioAct1_03.play();
                    // }, 11500);
                    // // 19초 후 모달과 텍스트 비활성화 (타이머 설정)
                    // setTimeout(function () {
                    //     $('.guide-balloon-tip-wrap1').removeClass('active');
                    //     $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                    // }, 19000);
                    // // 20초 후 손가락 드래그 가이드
                    // setTimeout(function () {
                    //     $('.dote-line1').fadeIn();
                    //     $('.gesture-box-guide-finger1').addClass('active');
                    // }, 20000);
                }
                if ($(this).hasClass('alkaline')) {
                    $(this).addClass('on');

                    // 1.5초 후 오디오 재생 (타이머 설정)
                    audioTimeout = setTimeout(function () {
                        audioAct2_01.load();
                        audioAct2_01.play();
                    }, 1500);

                    setTimeout(function () {
                        $('.scene-layer1').fadeOut();
                        $('.scene-layer3').fadeIn();
                        $('.guide-title-wrap').fadeIn();
                        $('.popup-layer.activity2').fadeIn();
                    }, 4000);

                    // // 5초 후 오디오 재생 (타이머 설정)
                    // audioTimeout = setTimeout(function () {
                    //     audioAct2_02.load();
                    //     audioAct2_02.play();
                    // }, 5000);

                    // setTimeout(function () {
                    //     $('.popup-layer.activity2').fadeOut();
                    //     $('.litmus-paper-wrap').fadeIn();
                    // }, 9000);

                    // // 10초 후 가이드 모달 활성화
                    // setTimeout(function () {
                    //     $('.guide-balloon-tip-wrap1').addClass('active');
                    //     $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
                    // }, 10000);
                    // // 11.5초 후 오디오 재생 (타이머 설정)
                    // audioTimeout = setTimeout(function () {
                    //     audioAct2_03.load();
                    //     audioAct2_03.play();
                    // }, 11500);
                    // // 19초 후 모달과 텍스트 비활성화 (타이머 설정)
                    // setTimeout(function () {
                    //     $('.guide-balloon-tip-wrap1').removeClass('active');
                    //     $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
                    // }, 19000);
                    // // 20초 후 손가락 드래그 가이드
                    // setTimeout(function () {
                    //     $('.dote-line1').fadeIn();
                    //     $('.gesture-box-guide-finger1').addClass('active');
                    // }, 20000);
                }
                setTimeout(function () {
                    $('.popup-inner .btn button').css('pointer-events', 'unset');
                }, 8000);
            });
        }

        // 정리하기
        // $('.tab-list-basic .button-tab').on('click', function () {
        //     const thisB = $(this);
        //     if (thisB.hasClass('active')) {
        //         thisB.removeClass('active');
        //         $('.modal-layer-activity-goals3').removeClass('active');
        //     } else {
        //         thisB.addClass('active');
        //         $('.modal-layer-activity-goals3').addClass('active');
        //         resultAudio.load();
        //         setTimeout(function () {
        //             resultAudio.play();
        //         }, 1000);
        //     }
        // });
        // $('.modal-layer-activity-goals3 .button-close').on('click', function () {
        //     const thisB = $(this);
        //     thisB.closest('.modal-layer-activity-goals3').removeClass('active');
        //     $('.tab-list-basic .button-tab').removeClass('active');
        //     resultAudio.pause();
        // });

        // 조건에 따라 타이머를 취소할 경우
        clearTimeout(audioTimeout); // 오디오 재생 타이머 취소
        clearTimeout(hideTimeout); // 모달 비활성화 타이머 취소
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
