/* [고등1] > 통합과학2 */
// 산과 염기를 혼합할 때 온도 변화와 지시약의 색 변화 관찰하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s2_122_052/1-goal.mp3'); // 활동목표 오디오
const audioGoal2 = new Audio('../../media/h_s2_122_052/1-goal2.mp3'); // 활동1_01 오디오

const audioAct1_01 = new Audio('../../media/h_s2_122_052/2-act1_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s2_122_052/2-act1_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s2_122_052/2-act1_03.mp3'); // 활동1_03 오디오
const audioAct1_04 = new Audio('../../media/h_s2_122_052/2-act1_04.mp3'); // 활동1_04 오디오
const audioAct1_05 = new Audio('../../media/h_s2_122_052/2-act1_05.mp3'); // 활동1_05 오디오
const audioAct1_06 = new Audio('../../media/h_s2_122_052/2-act1_06.mp3'); // 활동1_06 오디오
const audioAct1_07 = new Audio('../../media/h_s2_122_052/2-act1_07.mp3'); // 활동1_07 오디오
const audioAct1_08 = new Audio('../../media/h_s2_122_052/2-act1_08.mp3'); // 활동1_08 오디오
const audioAct1_09 = new Audio('../../media/h_s2_122_052/2-act1_09.mp3'); // 활동1_09 오디오

const audioAct2_01 = new Audio('../../media/h_s2_122_052/2-act2_01.mp3'); // 활동2_01 오디오
const audioAct2_02 = new Audio('../../media/h_s2_122_052/2-act2_02.mp3'); // 활동2_02 오디오
const audioAct2_03 = new Audio('../../media/h_s2_122_052/2-act2_03.mp3'); // 활동2_03 오디오
const audioAct2_04 = new Audio('../../media/h_s2_122_052/2-act2_04.mp3'); // 활동2_04 오디오
const audioAct2_05 = new Audio('../../media/h_s2_122_052/2-act2_05.mp3'); // 활동2_05 오디오
const audioAct2_06 = new Audio('../../media/h_s2_122_052/2-act2_06.mp3'); // 활동2_06 오디오
const audioAct2_07 = new Audio('../../media/h_s2_122_052/2-act2_07.mp3'); // 활동2_07 오디오
const audioAct2_08 = new Audio('../../media/h_s2_122_052/2-act2_08.mp3'); // 활동2_08 오디오

const audioAct3_01 = new Audio('../../media/h_s2_122_052/2-act3_01.mp3'); // 활동3_01 오디오
const audioAct3_02 = new Audio('../../media/h_s2_122_052/2-act3_02.mp3'); // 활동3_02 오디오
const audioAct3_03 = new Audio('../../media/h_s2_122_052/2-act3_03.mp3'); // 활동3_03 오디오
const audioAct3_04 = new Audio('../../media/h_s2_122_052/2-act3_04.mp3'); // 활동3_04 오디오
const audioAct3_05 = new Audio('../../media/h_s2_122_052/2-act3_05.mp3'); // 활동3_05 오디오
const audioAct3_06 = new Audio('../../media/h_s2_122_052/2-act3_06.mp3'); // 활동3_06 오디오
const audioAct3_07 = new Audio('../../media/h_s2_122_052/2-act3_07.mp3'); // 활동3_07 오디오
const audioAct3_08 = new Audio('../../media/h_s2_122_052/2-act3_08.mp3'); // 활동3_08 오디오

const audioAct4_01 = new Audio('../../media/h_s2_122_052/2-act4_01.mp3'); // 활동4_01 오디오
const audioAct4_02 = new Audio('../../media/h_s2_122_052/2-act4_02.mp3'); // 활동4_02 오디오
const audioAct4_03 = new Audio('../../media/h_s2_122_052/2-act4_03.mp3'); // 활동4_03 오디오
const audioAct4_04 = new Audio('../../media/h_s2_122_052/2-act4_04.mp3'); // 활동4_04 오디오
const audioAct4_05 = new Audio('../../media/h_s2_122_052/2-act4_05.mp3'); // 활동4_05 오디오
const audioAct4_06 = new Audio('../../media/h_s2_122_052/2-act4_06.mp3'); // 활동4_06 오디오
const audioAct4_07 = new Audio('../../media/h_s2_122_052/2-act4_07.mp3'); // 활동4_07 오디오
const audioAct4_08 = new Audio('../../media/h_s2_122_052/2-act4_08.mp3'); // 활동4_08 오디오

const audioAct5_01 = new Audio('../../media/h_s2_122_052/2-act5_01.mp3'); // 활동5_01 오디오
const audioAct5_02 = new Audio('../../media/h_s2_122_052/2-act5_02.mp3'); // 활동5_02 오디오
const audioAct5_03 = new Audio('../../media/h_s2_122_052/2-act5_03.mp3'); // 활동5_03 오디오
const audioAct5_04 = new Audio('../../media/h_s2_122_052/2-act5_04.mp3'); // 활동5_04 오디오
const audioAct5_05 = new Audio('../../media/h_s2_122_052/2-act5_05.mp3'); // 활동5_05 오디오
const audioAct5_06 = new Audio('../../media/h_s2_122_052/2-act5_06.mp3'); // 활동5_06 오디오
const audioAct5_07 = new Audio('../../media/h_s2_122_052/2-act5_07.mp3'); // 활동5_07 오디오

const resultAudio_01 = new Audio('../../media/h_s2_122_052/3-final_01.mp3'); // 정리하기1 오디오
const resultAudio_02 = new Audio('../../media/h_s2_122_052/3-final_02.mp3'); // 정리하기2 오디오
const resultAudio_03 = new Audio('../../media/h_s2_122_052/3-final_03.mp3'); // 정리하기3 오디오

const correctSound = new Audio('../../media/h_s2_122_052/correct_sound_effect.wav'); // 정답 오디오
const wrongSound = new Audio('../../media/h_s2_122_052/wrong_sound_effect.wav'); // 오답 오디오
const moveSound = new Audio('../../media/h_s2_122_052/move_sound_effect.wav'); // 바뀔때 오디오

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioGoal2.volume = 1;

audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;
audioAct1_04.volume = 1;
audioAct1_05.volume = 1;
audioAct1_06.volume = 1;
audioAct1_07.volume = 1;
audioAct1_08.volume = 1;
audioAct1_09.volume = 1;

audioAct2_01.volume = 1;
audioAct2_02.volume = 1;
audioAct2_03.volume = 1;
audioAct2_04.volume = 1;
audioAct2_05.volume = 1;
audioAct2_06.volume = 1;
audioAct2_07.volume = 1;
audioAct2_08.volume = 1;

audioAct3_01.volume = 1;
audioAct3_02.volume = 1;
audioAct3_03.volume = 1;
audioAct3_04.volume = 1;
audioAct3_05.volume = 1;
audioAct3_06.volume = 1;
audioAct3_07.volume = 1;
audioAct3_08.volume = 1;

audioAct4_01.volume = 1;
audioAct4_02.volume = 1;
audioAct4_03.volume = 1;
audioAct4_04.volume = 1;
audioAct4_05.volume = 1;
audioAct4_06.volume = 1;
audioAct4_07.volume = 1;
audioAct4_08.volume = 1;

audioAct5_01.volume = 1;
audioAct5_02.volume = 1;
audioAct5_03.volume = 1;
audioAct5_04.volume = 1;
audioAct5_05.volume = 1;
audioAct5_06.volume = 1;
audioAct5_07.volume = 1;

resultAudio_01.volume = 1;
resultAudio_02.volume = 1;
resultAudio_03.volume = 1;

correctSound.volume = 1;
wrongSound.volume = 1;
moveSound.volume = 1;

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

        audioGoal2.load();
        audioGoal2.play();
        audioGoal2.mute = true;
        audioGoal2.pause();
        audioGoal2.currentTime = 0;
        audioGoal2.mute = false;

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

        audioAct3_01.load();
        audioAct3_01.play();
        audioAct3_01.mute = true;
        audioAct3_01.pause();
        audioAct3_01.currentTime = 0;
        audioAct3_01.mute = false;

        audioAct3_02.load();
        audioAct3_02.play();
        audioAct3_02.mute = true;
        audioAct3_02.pause();
        audioAct3_02.currentTime = 0;
        audioAct3_02.mute = false;

        audioAct3_03.load();
        audioAct3_03.play();
        audioAct3_03.mute = true;
        audioAct3_03.pause();
        audioAct3_03.currentTime = 0;
        audioAct3_03.mute = false;

        audioAct3_04.load();
        audioAct3_04.play();
        audioAct3_04.mute = true;
        audioAct3_04.pause();
        audioAct3_04.currentTime = 0;
        audioAct3_04.mute = false;

        audioAct3_05.load();
        audioAct3_05.play();
        audioAct3_05.mute = true;
        audioAct3_05.pause();
        audioAct3_05.currentTime = 0;
        audioAct3_05.mute = false;

        audioAct3_06.load();
        audioAct3_06.play();
        audioAct3_06.mute = true;
        audioAct3_06.pause();
        audioAct3_06.currentTime = 0;
        audioAct3_06.mute = false;

        audioAct3_07.load();
        audioAct3_07.play();
        audioAct3_07.mute = true;
        audioAct3_07.pause();
        audioAct3_07.currentTime = 0;
        audioAct3_07.mute = false;

        audioAct3_08.load();
        audioAct3_08.play();
        audioAct3_08.mute = true;
        audioAct3_08.pause();
        audioAct3_08.currentTime = 0;
        audioAct3_08.mute = false;

        audioAct4_01.load();
        audioAct4_01.play();
        audioAct4_01.mute = true;
        audioAct4_01.pause();
        audioAct4_01.currentTime = 0;
        audioAct4_01.mute = false;

        audioAct4_02.load();
        audioAct4_02.play();
        audioAct4_02.mute = true;
        audioAct4_02.pause();
        audioAct4_02.currentTime = 0;
        audioAct4_02.mute = false;

        audioAct4_03.load();
        audioAct4_03.play();
        audioAct4_03.mute = true;
        audioAct4_03.pause();
        audioAct4_03.currentTime = 0;
        audioAct4_03.mute = false;

        audioAct4_04.load();
        audioAct4_04.play();
        audioAct4_04.mute = true;
        audioAct4_04.pause();
        audioAct4_04.currentTime = 0;
        audioAct4_04.mute = false;

        audioAct4_05.load();
        audioAct4_05.play();
        audioAct4_05.mute = true;
        audioAct4_05.pause();
        audioAct4_05.currentTime = 0;
        audioAct4_05.mute = false;

        audioAct4_06.load();
        audioAct4_06.play();
        audioAct4_06.mute = true;
        audioAct4_06.pause();
        audioAct4_06.currentTime = 0;
        audioAct4_06.mute = false;

        audioAct4_07.load();
        audioAct4_07.play();
        audioAct4_07.mute = true;
        audioAct4_07.pause();
        audioAct4_07.currentTime = 0;
        audioAct4_07.mute = false;

        audioAct4_08.load();
        audioAct4_08.play();
        audioAct4_08.mute = true;
        audioAct4_08.pause();
        audioAct4_08.currentTime = 0;
        audioAct4_08.mute = false;

        audioAct5_01.load();
        audioAct5_01.play();
        audioAct5_01.mute = true;
        audioAct5_01.pause();
        audioAct5_01.currentTime = 0;
        audioAct5_01.mute = false;

        audioAct5_02.load();
        audioAct5_02.play();
        audioAct5_02.mute = true;
        audioAct5_02.pause();
        audioAct5_02.currentTime = 0;
        audioAct5_02.mute = false;

        audioAct5_03.load();
        audioAct5_03.play();
        audioAct5_03.mute = true;
        audioAct5_03.pause();
        audioAct5_03.currentTime = 0;
        audioAct5_03.mute = false;

        audioAct5_04.load();
        audioAct5_04.play();
        audioAct5_04.mute = true;
        audioAct5_04.pause();
        audioAct5_04.currentTime = 0;
        audioAct5_04.mute = false;

        audioAct5_05.load();
        audioAct5_05.play();
        audioAct5_05.mute = true;
        audioAct5_05.pause();
        audioAct5_05.currentTime = 0;
        audioAct5_05.mute = false;

        audioAct5_06.load();
        audioAct5_06.play();
        audioAct5_06.mute = true;
        audioAct5_06.pause();
        audioAct5_06.currentTime = 0;
        audioAct5_06.mute = false;

        audioAct5_07.load();
        audioAct5_07.play();
        audioAct5_07.mute = true;
        audioAct5_07.pause();
        audioAct5_07.currentTime = 0;
        audioAct5_07.mute = false;

        resultAudio_01.load();
        resultAudio_01.play();
        resultAudio_01.mute = true;
        resultAudio_01.pause();
        resultAudio_01.currentTime = 0;
        resultAudio_01.mute = false;

        resultAudio_02.load();
        resultAudio_02.play();
        resultAudio_02.mute = true;
        resultAudio_02.pause();
        resultAudio_02.currentTime = 0;
        resultAudio_02.mute = false;

        resultAudio_03.load();
        resultAudio_03.play();
        resultAudio_03.mute = true;
        resultAudio_03.pause();
        resultAudio_03.currentTime = 0;
        resultAudio_03.mute = false;

        correctSound.load();
        correctSound.play();
        correctSound.mute = true;
        correctSound.pause();
        correctSound.currentTime = 0;
        correctSound.mute = false;

        wrongSound.load();
        wrongSound.play();
        wrongSound.mute = true;
        wrongSound.pause();
        wrongSound.currentTime = 0;
        wrongSound.mute = false;

        moveSound.load();
        moveSound.play();
        moveSound.mute = true;
        moveSound.pause();
        moveSound.currentTime = 0;
        moveSound.mute = false;

        setTimeout(function () {
            // '활동시작' 클릭 시 오디오 재생
            audioGoal.play();
        }, 1000);
    });

    // -----------------------------------------------------------------

    // <활동목표 : page-view2>
    const btnActivityGoalsClose = $('.page-view2 .button-close');
    btnActivityGoalsClose.on('click', function (e) {
        audioGoal.pause(); // 활동목표 닫기 시 오디오 멈춤
        pageView2.removeClass('active');
        $('.modal-layer-activity-number-goals').addClass('active');
        setTimeout(function () {
            // 활동목표 닫기 시 오디오 멈춤
            audioGoal.pause();

            // '활동시작' 클릭 시 오디오 재생
            audioGoal2.play();
        }, 2000);
    });

    // <화면진입 : modal-layer-activity-number-goals>
    const mlang = $('.modal-layer-activity-number-goals');
    const mlangBtnClose = mlang.find('.button-close');

    mlangBtnClose.on('click', function (e) {
        audioGoal2.pause(); // 화면진입 닫기 시 오디오 멈춤
        mlang.removeClass('active');

        $('.scene-layer1').addClass('active');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap1-1').addClass('active');
            }, 1500),
        );

        timeouts.push(
            setTimeout(function () {
                // 화면진입 닫기 시 오디오 멈춤
                audioGoal2.pause();

                // 가이드 오디오 재생
                audioAct1_01.play();
            }, 2500),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-1').removeClass('active');
                audioAct1_01.pause();
            }, 8500),
        );

        timeouts.push(
            setTimeout(function () {
                $('.scene-layer1 .button-temperature').addClass('active');
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                $('.gesture-temperature-finger1').addClass('active');
            }, 9500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10000);
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
            audioGoal2.volume = 0;

            audioAct1_01.volume = 0;
            audioAct1_02.volume = 0;
            audioAct1_03.volume = 0;
            audioAct1_04.volume = 0;
            audioAct1_05.volume = 0;
            audioAct1_06.volume = 0;
            audioAct1_07.volume = 0;
            audioAct1_08.volume = 0;
            audioAct1_09.volume = 0;

            audioAct2_01.volume = 0;
            audioAct2_02.volume = 0;
            audioAct2_03.volume = 0;
            audioAct2_04.volume = 0;
            audioAct2_05.volume = 0;
            audioAct2_06.volume = 0;
            audioAct2_07.volume = 0;
            audioAct2_08.volume = 0;

            audioAct3_01.volume = 0;
            audioAct3_02.volume = 0;
            audioAct3_03.volume = 0;
            audioAct3_04.volume = 0;
            audioAct3_05.volume = 0;
            audioAct3_06.volume = 0;
            audioAct3_07.volume = 0;
            audioAct3_08.volume = 0;

            audioAct4_01.volume = 0;
            audioAct4_02.volume = 0;
            audioAct4_03.volume = 0;
            audioAct4_04.volume = 0;
            audioAct4_05.volume = 0;
            audioAct4_06.volume = 0;
            audioAct4_07.volume = 0;
            audioAct4_08.volume = 0;

            audioAct5_01.volume = 0;
            audioAct5_02.volume = 0;
            audioAct5_03.volume = 0;
            audioAct5_04.volume = 0;
            audioAct5_05.volume = 0;
            audioAct5_06.volume = 0;
            audioAct5_07.volume = 0;

            resultAudio_01.volume = 0;
            resultAudio_02.volume = 0;
            resultAudio_03.volume = 0;

            correctSound.volume = 0;
            wrongSound.volume = 0;
            moveSound.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioGoal2.volume = 1;

            audioAct1_01.volume = 0;
            audioAct1_02.volume = 0;
            audioAct1_03.volume = 0;
            audioAct1_04.volume = 0;
            audioAct1_05.volume = 0;
            audioAct1_06.volume = 0;
            audioAct1_07.volume = 0;
            audioAct1_08.volume = 0;
            audioAct1_09.volume = 0;

            audioAct2_01.volume = 0;
            audioAct2_02.volume = 0;
            audioAct2_03.volume = 0;
            audioAct2_04.volume = 0;
            audioAct2_05.volume = 0;
            audioAct2_06.volume = 0;
            audioAct2_07.volume = 0;
            audioAct2_08.volume = 0;

            audioAct3_01.volume = 0;
            audioAct3_02.volume = 0;
            audioAct3_03.volume = 0;
            audioAct3_04.volume = 0;
            audioAct3_05.volume = 0;
            audioAct3_06.volume = 0;
            audioAct3_07.volume = 0;
            audioAct3_08.volume = 0;

            audioAct4_01.volume = 0;
            audioAct4_02.volume = 0;
            audioAct4_03.volume = 0;
            audioAct4_04.volume = 0;
            audioAct4_05.volume = 0;
            audioAct4_06.volume = 0;
            audioAct4_07.volume = 0;
            audioAct4_08.volume = 0;

            audioAct5_01.volume = 0;
            audioAct5_02.volume = 0;
            audioAct5_03.volume = 0;
            audioAct5_04.volume = 0;
            audioAct5_05.volume = 0;
            audioAct5_06.volume = 0;
            audioAct5_07.volume = 0;

            resultAudio_01.volume = 1;
            resultAudio_02.volume = 1;
            resultAudio_03.volume = 1;

            correctSound.volume = 1;
            wrongSound.volume = 1;
            moveSound.volume = 1;
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

    // 버튼 카운터
    let bcCnt1 = 0; // 염산(HCl) 버튼 횟수 카운터
    let bcCnt2 = 0; // 수산화 나트륨(NaOH) 버튼 횟수 카운터
    let bcCnt3 = 0; // 온도 버튼 횟수 카운터
    let bcCnt4 = 0; // 지시약 버튼 횟수 카운터

    const sl1BtnTemperature = $('.scene-layer1 .button-temperature');
    const btnChemical1 = $('.scene-layer2 .button-chemical1'); // 염산 버튼
    const btnChemical2 = $('.scene-layer2 .button-chemical2'); // 수산화 나트륨 버튼
    const btnChemical3 = $('.scene-layer2 .button-chemical3'); // 온도 버튼
    const btnChemical4 = $('.scene-layer2 .button-chemical4'); // 지시약 버튼
    const beakerWrap = $('.scene-layer2 .beaker-wrap'); // 비이커
    const beakerWater = $('.scene-layer2 .beaker-wrap .water-wrap');

    // 온도 버튼 이벤트
    sl1BtnTemperature.on('click', function () {
        chap0BtnStart();
    });

    function chap0BtnStart() {
        if (sl1BtnTemperature.hasClass('active')) {
            $('.gesture-temperature-finger1').removeClass('active');
            $('.scene-layer1 .beaker-temperature-wrap .temperature-wrap').addClass('active');
            audioAct1_02.pause();

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    sl1BtnTemperature.closest('.scene-layer1').removeClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    sl1BtnTemperature.removeClass('active');
                    $('.scene-layer1 .temperature-wrap').removeClass('active');
                    $('.scene-layer2').addClass('active');
                    $('.scene-layer2').addClass('chapter1');
                }, 3500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-2').addClass('active');
                }, 5000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 오디오 재생
                    audioAct1_02.play();
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-2').removeClass('active');
                    audioAct1_02.pause();
                }, 11000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 염산 버튼 활성화
                    $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                    // 염산 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger1').addClass('active');
                }, 12000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 염산 버튼 1회 카운터 부여
                    bcCnt1 = 3;
                }, 12500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 13000);
        }
    }

    // 염산 버튼
    btnChemical1.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1BtnChemical1();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2BtnChemical1();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3BtnChemical1();
            case $('.scene-layer2').hasClass('chapter4'):
                chap4BtnChemical1();
            case $('.scene-layer2').hasClass('chapter5'):
                chap5BtnChemical1();
            default:
                break;
        }
    });

    // 수산화 나트륨 버튼
    btnChemical2.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1BtnChemical2();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2BtnChemical2();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3BtnChemical2();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4BtnChemical2();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5BtnChemical2();
                break;
            default:
                break;
        }
    });

    beakerWrap.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1BeakerWrap();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2BeakerWrap();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3BeakerWrap();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4BeakerWrap();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5BeakerWrap();
                break;
            default:
                break;
        }
    });

    btnChemical3.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1BtnChemical3();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2BtnChemical3();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3BtnChemical3();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4BtnChemical3();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5BtnChemical3();
                break;
            default:
                break;
        }
    });

    btnChemical4.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1BtnChemical4();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2BtnChemical4();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3BtnChemical4();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4BtnChemical4();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5BtnChemical4();
                break;
            default:
                break;
        }
    });

    // chapter1 염산 버튼 이벤트 함수--------------------------
    function chap1BtnChemical1() {
        btnChemical1.removeClass('g-active1');
        if (bcCnt1 === 5) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 4) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 3) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 2) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음
            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 1) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            $('.gesture-button-finger1').removeClass('active');
            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion1');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical1.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-3').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct1_03.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-3').removeClass('active');
                    audioAct1_03.pause();
                }, 16500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger2').addClass('active');

                    // 수산화 나트륨 버튼 5회 카운터 부여
                    bcCnt2 = 5;

                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    btnChemical2.addClass('on g-active1');
                }, 17500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 18000);
        } else if (bcCnt1 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap2BtnChemical1() {
        btnChemical1.removeClass('g-active1');
        if (bcCnt1 === 5) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 4) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 3) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 2) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion1');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 1) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            $('.gesture-button-finger1').removeClass('active');
            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical1.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap2-2').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct2_02.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap2-2').removeClass('active');
                    audioAct2_02.pause();
                }, 16500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger2').addClass('active');

                    // 수산화 나트륨 버튼 5회 카운터 부여
                    bcCnt2 = 4;

                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    btnChemical2.addClass('on g-active1');
                }, 17500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 18000);
        } else if (bcCnt1 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap3BtnChemical1() {
        btnChemical1.removeClass('g-active1');
        if (bcCnt1 === 5) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 4) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 3) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion1');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 2) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 1) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical1.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap3-2').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct3_02.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap3-2').removeClass('active');
                    audioAct3_02.pause();
                }, 16500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger2').addClass('active');

                    // 수산화 나트륨 버튼 5회 카운터 부여
                    bcCnt2 = 3;

                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    btnChemical2.addClass('on g-active1');
                }, 17500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 18000);
        } else if (bcCnt1 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap4BtnChemical1() {
        btnChemical1.removeClass('g-active1');
        if (bcCnt1 === 5) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 4) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion1');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 3) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 2) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 1) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical1.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap4-2').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct4_02.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap4-2').removeClass('active');
                    audioAct4_02.pause();
                }, 16500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger2').addClass('active');

                    // 수산화 나트륨 버튼 5회 카운터 부여
                    bcCnt2 = 2;

                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    btnChemical2.addClass('on g-active1');
                }, 17500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 18000);
        } else if (bcCnt1 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap5BtnChemical1() {
        btnChemical1.removeClass('g-active1');
        if (bcCnt1 === 5) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            $('.gesture-button-finger1').removeClass('active');
            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion1');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 4) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 3) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 2) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt1 === 1) {
            --bcCnt1;

            correctSound.play(); // 정답 효과음

            beakerWater.addClass('motion');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('Cl', 'Cl', '-', 52); // 54x54 염소 이온 생성
                    addMarble('H', 'H', '+', 34); // 36x36 수소 이온 생성
                    btnChemical1.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical1.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap5-2').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct5_02.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap5-2').removeClass('active');
                    audioAct5_02.pause();
                }, 16500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger2').addClass('active');

                    // 수산화 나트륨 버튼 5회 카운터 부여
                    bcCnt2 = 1;

                    // 수산화 나트륨 버튼의 클릭 가이드 활성화
                    btnChemical2.addClass('on g-active1');
                }, 17500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 18000);
        } else if (bcCnt1 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }

    // chapter1 수산화 나트륨 버튼 이벤트 함수------------------
    function chap1BtnChemical2() {
        btnChemical2.removeClass('g-active1');
        if (bcCnt2 === 5) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 4) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 3) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 2) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 1) {
            // 가이드 제스처 제거
            $('.gesture-button-finger2').removeClass('active');

            btnChemical2.removeClass('g-active1');
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion6');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical2.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-4').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct1_04.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-4').removeClass('active');
                    audioAct1_04.pause();
                }, 14500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.scene-layer2 .beaker-wrap').addClass('active');
                    $('.scene-layer2 .gesture-beaker-finger1').addClass('active');
                }, 15500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 16000);
        } else if (bcCnt2 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap2BtnChemical2() {
        btnChemical2.removeClass('g-active1');
        if (bcCnt2 === 5) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 4) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 3) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 2) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 1) {
            // 가이드 제스처 제거
            $('.gesture-button-finger2').removeClass('active');

            btnChemical2.removeClass('g-active1');
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion6');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical2.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap2-3').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct2_03.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap2-3').removeClass('active');
                    audioAct2_03.pause();
                }, 14500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.scene-layer2 .beaker-wrap').addClass('active');
                    $('.scene-layer2 .gesture-beaker-finger1').addClass('active');
                }, 15500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 16000);
        } else if (bcCnt2 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap3BtnChemical2() {
        btnChemical2.removeClass('g-active1');
        if (bcCnt2 === 5) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 4) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 3) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 2) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 1) {
            // 가이드 제스처 제거
            $('.gesture-button-finger2').removeClass('active');

            btnChemical2.removeClass('g-active1');
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion6');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical2.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-4').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct1_04.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-4').removeClass('active');
                    audioAct1_04.pause();
                }, 14500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.scene-layer2 .beaker-wrap').addClass('active');
                    $('.scene-layer2 .gesture-beaker-finger1').addClass('active');
                }, 15500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 16000);
        } else if (bcCnt2 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap4BtnChemical2() {
        btnChemical2.removeClass('g-active1');
        if (bcCnt2 === 5) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 4) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 3) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 2) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 1) {
            // 가이드 제스처 제거
            $('.gesture-button-finger2').removeClass('active');

            btnChemical2.removeClass('g-active1');
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion6');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical2.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-4').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct1_04.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-4').removeClass('active');
                    audioAct1_04.pause();
                }, 14500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.scene-layer2 .beaker-wrap').addClass('active');
                    $('.scene-layer2 .gesture-beaker-finger1').addClass('active');
                }, 15500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 16000);
        } else if (bcCnt2 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap5BtnChemical2() {
        btnChemical2.removeClass('g-active1');
        if (bcCnt2 === 5) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion2');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 4) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion3');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 3) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion4');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 2) {
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion5');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 7000);
        } else if (bcCnt2 === 1) {
            // 가이드 제스처 제거
            $('.gesture-button-finger2').removeClass('active');

            btnChemical2.removeClass('g-active1');
            --bcCnt2;

            correctSound.play(); // 정답 효과음

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    for (var i = 1; i <= 5; i++) {
                        beakerWater.removeClass('g-motion' + i);
                    }
                    beakerWater.addClass('g-motion6');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    addMarble('OH', 'OH', '-', 58); // 60x60 수산화 이온 생성
                    addMarble('Na', 'Na', '+', 58); // 60x60 나트륨 이온 생성
                    btnChemical2.addClass('g-active1');
                }, 6500),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical2.removeClass('on g-active1');
                }, 7500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-4').addClass('active');
                }, 8500),
            );

            timeouts.push(
                setTimeout(function () {
                    audioAct1_04.play();
                }, 9500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-4').removeClass('active');
                    audioAct1_04.pause();
                }, 14500),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.scene-layer2 .beaker-wrap').addClass('active');
                    $('.scene-layer2 .gesture-beaker-finger1').addClass('active');
                }, 15500),
            );

            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 16000);
        } else if (bcCnt2 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }

    // chapter1 비이커 이벤트 함수
    function chap1BeakerWrap() {
        if (beakerWrap.hasClass('active')) {
            correctSound.play(); // 정답 효과음

            isBeakerClicked = true; // beakerWrap이 클릭된 상태로 설정
            hasCollisionOccurred = false; // 충돌 발생 플래그 초기화

            $('.scene-layer2 .gesture-beaker-finger1').removeClass('active');
            beakerWrap.removeClass('active');

            const collisionCheckInterval = setInterval(function () {
                // 배열의 최신 상태를 매번 가져오기 위해 재설정
                let allElements = [].concat(
                    marbleElements.Cl,
                    marbleElements.H,
                    marbleElements.H2O,
                    marbleElements.Na,
                    marbleElements.OH,
                );
                let allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
                let allVelocities = [].concat(
                    velocities.Cl,
                    velocities.H,
                    velocities.H2O,
                    velocities.Na,
                    velocities.OH,
                );
                let allSizes = [].concat(
                    marbleElements.Cl.map(el => el.outerWidth()),
                    marbleElements.H.map(el => el.outerWidth()),
                    marbleElements.H2O.map(el => el.outerWidth()),
                    marbleElements.Na.map(el => el.outerWidth()),
                    marbleElements.OH.map(el => el.outerWidth()),
                );
                let types = [].concat(
                    new Array(marbleElements.Cl.length).fill('Cl'),
                    new Array(marbleElements.H.length).fill('H'),
                    new Array(marbleElements.H2O.length).fill('H2O'),
                    new Array(marbleElements.Na.length).fill('Na'),
                    new Array(marbleElements.OH.length).fill('OH'),
                );

                let collisionOccurredInThisIteration = false; // 현재 반복에서 충돌이 발생했는지 여부

                // 충돌 체크
                for (let i = 0; i < allElements.length; i++) {
                    if (types[i] === 'removed') continue; // 이미 충돌로 제거된 요소는 스킵

                    for (let j = i + 1; j < allElements.length; j++) {
                        if (types[j] === 'removed') continue; // 이미 충돌로 제거된 요소는 스킵

                        const pos1 = allPositions[i];
                        const pos2 = allPositions[j];
                        const distX = pos1.x - pos2.x;
                        const distY = pos1.y - pos2.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);
                        const radius1 = allSizes[i] / 2;
                        const radius2 = allSizes[j] / 2;
                        const collisionDistance = radius1 + radius2;

                        if (distance < collisionDistance) {
                            // 정확한 H와 OH의 1:1 충돌만 처리하고 H2O로 변환
                            if (
                                ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH')) &&
                                !collisionOccurredInThisIteration
                            ) {
                                const collisionX = (pos1.x + pos2.x) / 2;
                                const collisionY = (pos1.y + pos2.y) / 2;

                                // 실제로 변환해야 하는 충돌만 처리
                                $(allElements[i]).remove();
                                $(allElements[j]).remove();

                                // marbleElements 배열 업데이트
                                removeMarbleData(types[i], i);
                                removeMarbleData(types[j], j);

                                // 상태 업데이트를 위한 배열 동기화
                                types[i] = 'removed';
                                types[j] = 'removed';

                                // 새로운 H2O 생성
                                addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                                collisionOccurredInThisIteration = true;
                                break;
                            } else {
                                // 다른 입자 간의 충돌은 팅겨지게만 처리
                                const collisionNormal = createVector(distX, distY).normalize();
                                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                                const speed = relativeVelocity.dot(collisionNormal);

                                if (speed < 0) {
                                    const impulse = collisionNormal.mult(speed);
                                    allVelocities[i].sub(impulse.mult(1.0));
                                    allVelocities[j].add(impulse.mult(1.0));

                                    const overlap = collisionDistance - distance;
                                    const correctionVector = collisionNormal.mult(overlap / 2);

                                    pos1.add(correctionVector);
                                    pos2.sub(correctionVector);

                                    // 속도 제한 적용
                                    allVelocities[i].limit(5);
                                    allVelocities[j].limit(5);
                                }
                            }
                        }
                    }
                }

                // OH와 H의 남은 수 확인
                const remainingOH = marbleElements.OH.length;
                const remainingH = marbleElements.H.length;

                console.log(`Updated Remaining OH: ${remainingOH}, Remaining H: ${remainingH}`); // 갱신된 값 출력

                // OH나 H가 하나도 남아있지 않은 경우 chapter1ExecuteTimeouts 실행
                if (remainingOH === 0 || remainingH === 0) {
                    console.log('Executing chapter1ExecuteTimeouts due to no remaining OH or H'); // 디버깅용 출력
                    clearInterval(collisionCheckInterval); // 충돌 체크 중지
                    setTimeout(function () {
                        chapter1ExecuteTimeouts(); // 1초 후에 실행
                    }, 1000);
                }

                // 이번 반복이 끝났으므로 다시 충돌을 감지할 수 있도록 초기화
                hasCollisionOccurred = false;
            }, 50); // 50ms마다 충돌 체크
        }
    }
    function chap2BeakerWrap() {
        if (beakerWrap.hasClass('active')) {
            correctSound.play(); // 정답 효과음

            isBeakerClicked = true; // beakerWrap이 클릭된 상태로 설정
            hasCollisionOccurred = false; // 충돌 발생 플래그 초기화

            $('.scene-layer2 .gesture-beaker-finger1').removeClass('active');
            beakerWrap.removeClass('active');

            const collisionCheckInterval = setInterval(function () {
                let allElements = [].concat(
                    marbleElements.Cl,
                    marbleElements.H,
                    marbleElements.H2O,
                    marbleElements.Na,
                    marbleElements.OH,
                );
                let allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
                let allVelocities = [].concat(
                    velocities.Cl,
                    velocities.H,
                    velocities.H2O,
                    velocities.Na,
                    velocities.OH,
                );
                let allSizes = [].concat(
                    marbleElements.Cl.map(el => el.outerWidth()),
                    marbleElements.H.map(el => el.outerWidth()),
                    marbleElements.H2O.map(el => el.outerWidth()),
                    marbleElements.Na.map(el => el.outerWidth()),
                    marbleElements.OH.map(el => el.outerWidth()),
                );
                let types = [].concat(
                    new Array(marbleElements.Cl.length).fill('Cl'),
                    new Array(marbleElements.H.length).fill('H'),
                    new Array(marbleElements.H2O.length).fill('H2O'),
                    new Array(marbleElements.Na.length).fill('Na'),
                    new Array(marbleElements.OH.length).fill('OH'),
                );

                // 충돌 체크
                for (let i = 0; i < allElements.length; i++) {
                    for (let j = i + 1; j < allElements.length; j++) {
                        const pos1 = allPositions[i];
                        const pos2 = allPositions[j];
                        const distX = pos1.x - pos2.x;
                        const distY = pos1.y - pos2.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);
                        const radius1 = allSizes[i] / 2;
                        const radius2 = allSizes[j] / 2;
                        const collisionDistance = radius1 + radius2;

                        if (distance < collisionDistance) {
                            if ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH')) {
                                if (!hasCollisionOccurred) {
                                    const collisionX = (pos1.x + pos2.x) / 2;
                                    const collisionY = (pos1.y + pos2.y) / 2;

                                    allElements[i].remove();
                                    allElements[j].remove();

                                    removeMarbleData(types[i], i);
                                    removeMarbleData(types[j], j);

                                    addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                                    // 배열을 재생성하여 충돌 체크가 정상적으로 계속되도록 한다.
                                    allElements = [].concat(
                                        marbleElements.Cl,
                                        marbleElements.H,
                                        marbleElements.H2O,
                                        marbleElements.Na,
                                        marbleElements.OH,
                                    );
                                    allPositions = [].concat(
                                        positions.Cl,
                                        positions.H,
                                        positions.H2O,
                                        positions.Na,
                                        positions.OH,
                                    );
                                    allVelocities = [].concat(
                                        velocities.Cl,
                                        velocities.H,
                                        velocities.H2O,
                                        velocities.Na,
                                        velocities.OH,
                                    );
                                    allSizes = [].concat(
                                        marbleElements.Cl.map(el => el.outerWidth()),
                                        marbleElements.H.map(el => el.outerWidth()),
                                        marbleElements.H2O.map(el => el.outerWidth()),
                                        marbleElements.Na.map(el => el.outerWidth()),
                                        marbleElements.OH.map(el => el.outerWidth()),
                                    );
                                    types = [].concat(
                                        new Array(marbleElements.Cl.length).fill('Cl'),
                                        new Array(marbleElements.H.length).fill('H'),
                                        new Array(marbleElements.H2O.length).fill('H2O'),
                                        new Array(marbleElements.Na.length).fill('Na'),
                                        new Array(marbleElements.OH.length).fill('OH'),
                                    );

                                    hasCollisionOccurred = true;
                                    isBeakerClicked = false;

                                    break; // 충돌이 일어나면 루프를 빠져나가 재시작
                                }
                            } else {
                                const collisionNormal = createVector(distX, distY).normalize();
                                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                                const speed = relativeVelocity.dot(collisionNormal);

                                if (speed < 0) {
                                    const impulse = collisionNormal.mult(speed);

                                    allVelocities[i].sub(impulse.mult(1.0)); // 충격량을 1.0으로 유지
                                    allVelocities[j].add(impulse.mult(1.0));

                                    const overlap = collisionDistance - distance;
                                    const correctionVector = collisionNormal.mult(overlap / 2);

                                    pos1.add(correctionVector);
                                    pos2.sub(correctionVector);

                                    // 속도 제한을 적용
                                    allVelocities[i].limit(5);
                                    allVelocities[j].limit(5);
                                }
                            }
                        }
                    }
                }

                // 충돌 체크 후 OH와 H의 남은 수 확인
                const remainingOH = marbleElements.OH.length;
                const remainingH = marbleElements.H.length;

                console.log(`Remaining OH: ${remainingOH}, Remaining H: ${remainingH}`); // 디버깅용 출력

                // OH나 H가 하나도 남아있지 않은 경우 chapter1ExecuteTimeouts 실행
                if (remainingOH === 0 || remainingH === 0) {
                    console.log('Executing chapter1ExecuteTimeouts due to no remaining OH or H'); // 디버깅용 출력
                    setTimeout(function () {
                        chapter2ExecuteTimeouts();
                    }, 1000);
                    clearInterval(collisionCheckInterval); // 충돌 체크 중지
                }
            }, 50); // 50ms마다 충돌 체크
        }
    }
    function chap3BeakerWrap() {
        if (beakerWrap.hasClass('active')) {
            correctSound.play(); // 정답 효과음

            isBeakerClicked = true; // beakerWrap이 클릭된 상태로 설정
            hasCollisionOccurred = false; // 충돌 발생 플래그 초기화

            $('.scene-layer2 .gesture-beaker-finger1').removeClass('active');
            beakerWrap.removeClass('active');

            const collisionCheckInterval = setInterval(function () {
                let allElements = [].concat(
                    marbleElements.Cl,
                    marbleElements.H,
                    marbleElements.H2O,
                    marbleElements.Na,
                    marbleElements.OH,
                );
                let allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
                let allVelocities = [].concat(
                    velocities.Cl,
                    velocities.H,
                    velocities.H2O,
                    velocities.Na,
                    velocities.OH,
                );
                let allSizes = [].concat(
                    marbleElements.Cl.map(el => el.outerWidth()),
                    marbleElements.H.map(el => el.outerWidth()),
                    marbleElements.H2O.map(el => el.outerWidth()),
                    marbleElements.Na.map(el => el.outerWidth()),
                    marbleElements.OH.map(el => el.outerWidth()),
                );
                let types = [].concat(
                    new Array(marbleElements.Cl.length).fill('Cl'),
                    new Array(marbleElements.H.length).fill('H'),
                    new Array(marbleElements.H2O.length).fill('H2O'),
                    new Array(marbleElements.Na.length).fill('Na'),
                    new Array(marbleElements.OH.length).fill('OH'),
                );

                // 충돌 체크
                for (let i = 0; i < allElements.length; i++) {
                    for (let j = i + 1; j < allElements.length; j++) {
                        const pos1 = allPositions[i];
                        const pos2 = allPositions[j];
                        const distX = pos1.x - pos2.x;
                        const distY = pos1.y - pos2.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);
                        const radius1 = allSizes[i] / 2;
                        const radius2 = allSizes[j] / 2;
                        const collisionDistance = radius1 + radius2;

                        if (distance < collisionDistance) {
                            if ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH')) {
                                if (!hasCollisionOccurred) {
                                    const collisionX = (pos1.x + pos2.x) / 2;
                                    const collisionY = (pos1.y + pos2.y) / 2;

                                    allElements[i].remove();
                                    allElements[j].remove();

                                    removeMarbleData(types[i], i);
                                    removeMarbleData(types[j], j);

                                    addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                                    // 배열을 재생성하여 충돌 체크가 정상적으로 계속되도록 한다.
                                    allElements = [].concat(
                                        marbleElements.Cl,
                                        marbleElements.H,
                                        marbleElements.H2O,
                                        marbleElements.Na,
                                        marbleElements.OH,
                                    );
                                    allPositions = [].concat(
                                        positions.Cl,
                                        positions.H,
                                        positions.H2O,
                                        positions.Na,
                                        positions.OH,
                                    );
                                    allVelocities = [].concat(
                                        velocities.Cl,
                                        velocities.H,
                                        velocities.H2O,
                                        velocities.Na,
                                        velocities.OH,
                                    );
                                    allSizes = [].concat(
                                        marbleElements.Cl.map(el => el.outerWidth()),
                                        marbleElements.H.map(el => el.outerWidth()),
                                        marbleElements.H2O.map(el => el.outerWidth()),
                                        marbleElements.Na.map(el => el.outerWidth()),
                                        marbleElements.OH.map(el => el.outerWidth()),
                                    );
                                    types = [].concat(
                                        new Array(marbleElements.Cl.length).fill('Cl'),
                                        new Array(marbleElements.H.length).fill('H'),
                                        new Array(marbleElements.H2O.length).fill('H2O'),
                                        new Array(marbleElements.Na.length).fill('Na'),
                                        new Array(marbleElements.OH.length).fill('OH'),
                                    );

                                    hasCollisionOccurred = true;
                                    isBeakerClicked = false;

                                    break; // 충돌이 일어나면 루프를 빠져나가 재시작
                                }
                            } else {
                                const collisionNormal = createVector(distX, distY).normalize();
                                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                                const speed = relativeVelocity.dot(collisionNormal);

                                if (speed < 0) {
                                    const impulse = collisionNormal.mult(speed);

                                    allVelocities[i].sub(impulse.mult(1.0)); // 충격량을 1.0으로 유지
                                    allVelocities[j].add(impulse.mult(1.0));

                                    const overlap = collisionDistance - distance;
                                    const correctionVector = collisionNormal.mult(overlap / 2);

                                    pos1.add(correctionVector);
                                    pos2.sub(correctionVector);

                                    // 속도 제한을 적용
                                    allVelocities[i].limit(5);
                                    allVelocities[j].limit(5);
                                }
                            }
                        }
                    }
                }

                // 충돌 체크 후 OH와 H의 남은 수 확인
                const remainingOH = marbleElements.OH.length;
                const remainingH = marbleElements.H.length;

                console.log(`Remaining OH: ${remainingOH}, Remaining H: ${remainingH}`); // 디버깅용 출력

                // OH나 H가 하나도 남아있지 않은 경우 chapter1ExecuteTimeouts 실행
                if (remainingOH === 0 || remainingH === 0) {
                    console.log('Executing chapter1ExecuteTimeouts due to no remaining OH or H'); // 디버깅용 출력
                    setTimeout(function () {
                        chapter3ExecuteTimeouts();
                    }, 1000);
                    clearInterval(collisionCheckInterval); // 충돌 체크 중지
                }
            }, 50); // 50ms마다 충돌 체크
        }
    }
    function chap4BeakerWrap() {
        if (beakerWrap.hasClass('active')) {
            correctSound.play(); // 정답 효과음

            isBeakerClicked = true; // beakerWrap이 클릭된 상태로 설정
            hasCollisionOccurred = false; // 충돌 발생 플래그 초기화

            $('.scene-layer2 .gesture-beaker-finger1').removeClass('active');
            beakerWrap.removeClass('active');

            const collisionCheckInterval = setInterval(function () {
                let allElements = [].concat(
                    marbleElements.Cl,
                    marbleElements.H,
                    marbleElements.H2O,
                    marbleElements.Na,
                    marbleElements.OH,
                );
                let allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
                let allVelocities = [].concat(
                    velocities.Cl,
                    velocities.H,
                    velocities.H2O,
                    velocities.Na,
                    velocities.OH,
                );
                let allSizes = [].concat(
                    marbleElements.Cl.map(el => el.outerWidth()),
                    marbleElements.H.map(el => el.outerWidth()),
                    marbleElements.H2O.map(el => el.outerWidth()),
                    marbleElements.Na.map(el => el.outerWidth()),
                    marbleElements.OH.map(el => el.outerWidth()),
                );
                let types = [].concat(
                    new Array(marbleElements.Cl.length).fill('Cl'),
                    new Array(marbleElements.H.length).fill('H'),
                    new Array(marbleElements.H2O.length).fill('H2O'),
                    new Array(marbleElements.Na.length).fill('Na'),
                    new Array(marbleElements.OH.length).fill('OH'),
                );

                // 충돌 체크
                for (let i = 0; i < allElements.length; i++) {
                    for (let j = i + 1; j < allElements.length; j++) {
                        const pos1 = allPositions[i];
                        const pos2 = allPositions[j];
                        const distX = pos1.x - pos2.x;
                        const distY = pos1.y - pos2.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);
                        const radius1 = allSizes[i] / 2;
                        const radius2 = allSizes[j] / 2;
                        const collisionDistance = radius1 + radius2;

                        if (distance < collisionDistance) {
                            if ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH')) {
                                if (!hasCollisionOccurred) {
                                    const collisionX = (pos1.x + pos2.x) / 2;
                                    const collisionY = (pos1.y + pos2.y) / 2;

                                    allElements[i].remove();
                                    allElements[j].remove();

                                    removeMarbleData(types[i], i);
                                    removeMarbleData(types[j], j);

                                    addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                                    // 배열을 재생성하여 충돌 체크가 정상적으로 계속되도록 한다.
                                    allElements = [].concat(
                                        marbleElements.Cl,
                                        marbleElements.H,
                                        marbleElements.H2O,
                                        marbleElements.Na,
                                        marbleElements.OH,
                                    );
                                    allPositions = [].concat(
                                        positions.Cl,
                                        positions.H,
                                        positions.H2O,
                                        positions.Na,
                                        positions.OH,
                                    );
                                    allVelocities = [].concat(
                                        velocities.Cl,
                                        velocities.H,
                                        velocities.H2O,
                                        velocities.Na,
                                        velocities.OH,
                                    );
                                    allSizes = [].concat(
                                        marbleElements.Cl.map(el => el.outerWidth()),
                                        marbleElements.H.map(el => el.outerWidth()),
                                        marbleElements.H2O.map(el => el.outerWidth()),
                                        marbleElements.Na.map(el => el.outerWidth()),
                                        marbleElements.OH.map(el => el.outerWidth()),
                                    );
                                    types = [].concat(
                                        new Array(marbleElements.Cl.length).fill('Cl'),
                                        new Array(marbleElements.H.length).fill('H'),
                                        new Array(marbleElements.H2O.length).fill('H2O'),
                                        new Array(marbleElements.Na.length).fill('Na'),
                                        new Array(marbleElements.OH.length).fill('OH'),
                                    );

                                    hasCollisionOccurred = true;
                                    isBeakerClicked = false;

                                    break; // 충돌이 일어나면 루프를 빠져나가 재시작
                                }
                            } else {
                                const collisionNormal = createVector(distX, distY).normalize();
                                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                                const speed = relativeVelocity.dot(collisionNormal);

                                if (speed < 0) {
                                    const impulse = collisionNormal.mult(speed);

                                    allVelocities[i].sub(impulse.mult(1.0)); // 충격량을 1.0으로 유지
                                    allVelocities[j].add(impulse.mult(1.0));

                                    const overlap = collisionDistance - distance;
                                    const correctionVector = collisionNormal.mult(overlap / 2);

                                    pos1.add(correctionVector);
                                    pos2.sub(correctionVector);

                                    // 속도 제한을 적용
                                    allVelocities[i].limit(5);
                                    allVelocities[j].limit(5);
                                }
                            }
                        }
                    }
                }

                // 충돌 체크 후 OH와 H의 남은 수 확인
                const remainingOH = marbleElements.OH.length;
                const remainingH = marbleElements.H.length;

                console.log(`Remaining OH: ${remainingOH}, Remaining H: ${remainingH}`); // 디버깅용 출력

                // OH나 H가 하나도 남아있지 않은 경우
                if (remainingOH === 0 || remainingH === 0) {
                    setTimeout(function () {
                        chapter4ExecuteTimeouts();
                    }, 1000);
                    clearInterval(collisionCheckInterval); // 충돌 체크 중지
                }
            }, 50); // 50ms마다 충돌 체크
        }
    }
    function chap5BeakerWrap() {
        if (beakerWrap.hasClass('active')) {
            correctSound.play(); // 정답 효과음

            isBeakerClicked = true; // beakerWrap이 클릭된 상태로 설정
            hasCollisionOccurred = false; // 충돌 발생 플래그 초기화

            $('.scene-layer2 .gesture-beaker-finger1').removeClass('active');
            beakerWrap.removeClass('active');

            const collisionCheckInterval = setInterval(function () {
                let allElements = [].concat(
                    marbleElements.Cl,
                    marbleElements.H,
                    marbleElements.H2O,
                    marbleElements.Na,
                    marbleElements.OH,
                );
                let allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
                let allVelocities = [].concat(
                    velocities.Cl,
                    velocities.H,
                    velocities.H2O,
                    velocities.Na,
                    velocities.OH,
                );
                let allSizes = [].concat(
                    marbleElements.Cl.map(el => el.outerWidth()),
                    marbleElements.H.map(el => el.outerWidth()),
                    marbleElements.H2O.map(el => el.outerWidth()),
                    marbleElements.Na.map(el => el.outerWidth()),
                    marbleElements.OH.map(el => el.outerWidth()),
                );
                let types = [].concat(
                    new Array(marbleElements.Cl.length).fill('Cl'),
                    new Array(marbleElements.H.length).fill('H'),
                    new Array(marbleElements.H2O.length).fill('H2O'),
                    new Array(marbleElements.Na.length).fill('Na'),
                    new Array(marbleElements.OH.length).fill('OH'),
                );

                // 충돌 체크
                for (let i = 0; i < allElements.length; i++) {
                    for (let j = i + 1; j < allElements.length; j++) {
                        const pos1 = allPositions[i];
                        const pos2 = allPositions[j];
                        const distX = pos1.x - pos2.x;
                        const distY = pos1.y - pos2.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);
                        const radius1 = allSizes[i] / 2;
                        const radius2 = allSizes[j] / 2;
                        const collisionDistance = radius1 + radius2;

                        if (distance < collisionDistance) {
                            if ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH')) {
                                if (!hasCollisionOccurred) {
                                    const collisionX = (pos1.x + pos2.x) / 2;
                                    const collisionY = (pos1.y + pos2.y) / 2;

                                    allElements[i].remove();
                                    allElements[j].remove();

                                    removeMarbleData(types[i], i);
                                    removeMarbleData(types[j], j);

                                    addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                                    // 배열을 재생성하여 충돌 체크가 정상적으로 계속되도록 한다.
                                    allElements = [].concat(
                                        marbleElements.Cl,
                                        marbleElements.H,
                                        marbleElements.H2O,
                                        marbleElements.Na,
                                        marbleElements.OH,
                                    );
                                    allPositions = [].concat(
                                        positions.Cl,
                                        positions.H,
                                        positions.H2O,
                                        positions.Na,
                                        positions.OH,
                                    );
                                    allVelocities = [].concat(
                                        velocities.Cl,
                                        velocities.H,
                                        velocities.H2O,
                                        velocities.Na,
                                        velocities.OH,
                                    );
                                    allSizes = [].concat(
                                        marbleElements.Cl.map(el => el.outerWidth()),
                                        marbleElements.H.map(el => el.outerWidth()),
                                        marbleElements.H2O.map(el => el.outerWidth()),
                                        marbleElements.Na.map(el => el.outerWidth()),
                                        marbleElements.OH.map(el => el.outerWidth()),
                                    );
                                    types = [].concat(
                                        new Array(marbleElements.Cl.length).fill('Cl'),
                                        new Array(marbleElements.H.length).fill('H'),
                                        new Array(marbleElements.H2O.length).fill('H2O'),
                                        new Array(marbleElements.Na.length).fill('Na'),
                                        new Array(marbleElements.OH.length).fill('OH'),
                                    );

                                    hasCollisionOccurred = true;
                                    isBeakerClicked = false;

                                    break; // 충돌이 일어나면 루프를 빠져나가 재시작
                                }
                            } else {
                                const collisionNormal = createVector(distX, distY).normalize();
                                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                                const speed = relativeVelocity.dot(collisionNormal);

                                if (speed < 0) {
                                    const impulse = collisionNormal.mult(speed);

                                    allVelocities[i].sub(impulse.mult(1.0)); // 충격량을 1.0으로 유지
                                    allVelocities[j].add(impulse.mult(1.0));

                                    const overlap = collisionDistance - distance;
                                    const correctionVector = collisionNormal.mult(overlap / 2);

                                    pos1.add(correctionVector);
                                    pos2.sub(correctionVector);

                                    // 속도 제한을 적용
                                    allVelocities[i].limit(5);
                                    allVelocities[j].limit(5);
                                }
                            }
                        }
                    }
                }

                // 충돌 체크 후 OH와 H의 남은 수 확인
                const remainingOH = marbleElements.OH.length;
                const remainingH = marbleElements.H.length;

                console.log(`Remaining OH: ${remainingOH}, Remaining H: ${remainingH}`); // 디버깅용 출력

                // OH나 H가 하나도 남아있지 않은 경우 chapter1ExecuteTimeouts 실행
                if (remainingOH === 0 || remainingH === 0) {
                    console.log('Executing chapter1ExecuteTimeouts due to no remaining OH or H'); // 디버깅용 출력
                    setTimeout(function () {
                        chapter5ExecuteTimeouts();
                    }, 1000);
                    clearInterval(collisionCheckInterval); // 충돌 체크 중지
                }
            }, 50); // 50ms마다 충돌 체크
        }
    }

    // beakerWrap 타임아웃 이벤트 실행 함수
    function chapter1ExecuteTimeouts() {
        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap1-5').addClass('active');
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                audioAct1_05.play();
            }, 4000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-5').removeClass('active');
                audioAct1_05.pause();
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger3').addClass('active');

                // 수산화 나트륨 버튼 5회 카운터 부여
                bcCnt3 = 1;

                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                btnChemical3.addClass('on g-active1');
            }, 10000),
        );

        // 타임아웃 종료 후 모두 정리
        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10500);
    }
    function chapter2ExecuteTimeouts() {
        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap2-4').addClass('active');
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                audioAct2_04.play();
            }, 4000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap2-4').removeClass('active');
                audioAct2_04.pause();
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger3').addClass('active');

                // 수산화 나트륨 버튼 5회 카운터 부여
                bcCnt3 = 1;

                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                btnChemical3.addClass('on g-active1');
            }, 10000),
        );

        // 타임아웃 종료 후 모두 정리
        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10500);
    }
    function chapter3ExecuteTimeouts() {
        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap3-4').addClass('active');
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                audioAct3_04.play();
            }, 4000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap3-4').removeClass('active');
                audioAct3_04.pause();
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger3').addClass('active');

                // 수산화 나트륨 버튼 5회 카운터 부여
                bcCnt3 = 1;

                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                btnChemical3.addClass('on g-active1');
            }, 10000),
        );

        // 타임아웃 종료 후 모두 정리
        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10500);
    }
    function chapter4ExecuteTimeouts() {
        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap4-4').addClass('active');
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                audioAct4_04.play();
            }, 4000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-5').removeClass('active');
                audioAct4_04.pause();
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger3').addClass('active');

                // 수산화 나트륨 버튼 5회 카운터 부여
                bcCnt3 = 1;

                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                btnChemical3.addClass('on g-active1');
            }, 10000),
        );

        // 타임아웃 종료 후 모두 정리
        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10500);
    }
    function chapter5ExecuteTimeouts() {
        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap5-4').addClass('active');
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                audioAct5_04.play();
            }, 4000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-5').removeClass('active');
                audioAct5_04.pause();
            }, 9000),
        );

        timeouts.push(
            setTimeout(function () {
                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger3').addClass('active');

                // 수산화 나트륨 버튼 5회 카운터 부여
                bcCnt3 = 1;

                // 수산화 나트륨 버튼의 클릭 가이드 활성화
                btnChemical3.addClass('on g-active1');
            }, 10000),
        );

        // 타임아웃 종료 후 모두 정리
        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 10500);
    }

    // chapter1 온도 버튼 이벤트 함수--------------------------
    function chap1BtnChemical3() {
        if (bcCnt3 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt3--;
            btnChemical3.removeClass('g-active1');
            $('.scene-layer2 .temperature-wrap').addClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼의 클릭 가이드 비활성화
                    $('.gesture-button-finger3').removeClass('active');

                    // 온도계 활성화
                    $('.scene-layer2 .temperature-wrap').addClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도계 활성화
                    // 숫자 변경을 위한 초기 설정
                    let currentTemp = 20.0;
                    const targetTemp = 23.0;
                    const increment = 0.1; // 온도가 증가하는 단위
                    const intervalSpeed = 50; // 숫자가 변경되는 속도 (ms)

                    const tempElement = $('.scene-layer2 .temperature-wrap .number');

                    // 숫자 업데이트를 위한 인터벌 시작
                    const tempInterval = setInterval(function () {
                        currentTemp += increment;
                        tempElement.text(currentTemp.toFixed(1)); // 소수점 한자리까지 표시

                        // 목표 온도에 도달하면 인터벌을 중지
                        if (currentTemp >= targetTemp) {
                            clearInterval(tempInterval);
                        }
                    }, intervalSpeed);
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼 비활성화
                    btnChemical3.removeClass('on g-active1');
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-6').addClass('active');
                }, 7000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct1_06.play();
                }, 8000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-6').removeClass('active');
                    audioAct1_06.pause();
                }, 13000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 숫자 입력 가이드 활성화
                    $('.gesture-number-input-finger1').addClass('active');
                    $('.button-number-list .number-input1').removeAttr('readonly', 'readonly');
                    $('.button-number-list .number-input1').addClass('active');
                    $('.popup-calculator-wrap').addClass('number-input1');
                }, 14000),
            );
        }
    }
    function chap2BtnChemical3() {
        if (bcCnt3 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt3--;
            btnChemical3.removeClass('g-active1');
            $('.scene-layer2 .temperature-wrap').addClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼의 클릭 가이드 비활성화
                    $('.gesture-button-finger3').removeClass('active');

                    // 온도계 활성화
                    $('.scene-layer2 .temperature-wrap').addClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도계 활성화
                    // 숫자 변경을 위한 초기 설정
                    let currentTemp = 20.0;
                    const targetTemp = 23.0;
                    const increment = 0.1; // 온도가 증가하는 단위
                    const intervalSpeed = 50; // 숫자가 변경되는 속도 (ms)

                    const tempElement = $('.scene-layer2 .temperature-wrap .number');

                    // 숫자 업데이트를 위한 인터벌 시작
                    const tempInterval = setInterval(function () {
                        currentTemp += increment;
                        tempElement.text(currentTemp.toFixed(1)); // 소수점 한자리까지 표시

                        // 목표 온도에 도달하면 인터벌을 중지
                        if (currentTemp >= targetTemp) {
                            clearInterval(tempInterval);
                        }
                    }, intervalSpeed);
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼 비활성화
                    btnChemical3.removeClass('on g-active1');
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap2-5').addClass('active');
                }, 7000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct2_05.play();
                }, 8000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap2-5').removeClass('active');
                    audioAct2_05.pause();
                }, 13000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 숫자 입력 가이드 활성화
                    $('.gesture-number-input-finger2').addClass('active');
                    $('.button-number-list .number-input2').removeAttr('readonly', 'readonly');
                    $('.button-number-list .number-input2').addClass('active');
                    $('.popup-calculator-wrap').addClass('number-input2');
                }, 14000),
            );
        }
    }
    function chap3BtnChemical3() {
        if (bcCnt3 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt3--;
            btnChemical3.removeClass('g-active1');
            $('.scene-layer2 .temperature-wrap').addClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼의 클릭 가이드 비활성화
                    $('.gesture-button-finger3').removeClass('active');

                    // 온도계 활성화
                    $('.scene-layer2 .temperature-wrap').addClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도계 활성화
                    // 숫자 변경을 위한 초기 설정
                    let currentTemp = 20.0;
                    const targetTemp = 29.0;
                    const increment = 0.1; // 온도가 증가하는 단위
                    const intervalSpeed = 50; // 숫자가 변경되는 속도 (ms)

                    const tempElement = $('.scene-layer2 .temperature-wrap .number');

                    // 숫자 업데이트를 위한 인터벌 시작
                    const tempInterval = setInterval(function () {
                        currentTemp += increment;
                        tempElement.text(currentTemp.toFixed(1)); // 소수점 한자리까지 표시

                        // 목표 온도에 도달하면 인터벌을 중지
                        if (currentTemp >= targetTemp) {
                            clearInterval(tempInterval);
                        }
                    }, intervalSpeed);
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼 비활성화
                    btnChemical3.removeClass('on g-active1');
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap3-5').addClass('active');
                }, 7000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct3_05.play();
                }, 8000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap3-5').removeClass('active');
                    audioAct1_06.pause();
                }, 13000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 숫자 입력 가이드 활성화
                    $('.gesture-number-input-finger3').addClass('active');
                    $('.button-number-list .number-input3').removeAttr('readonly', 'readonly');
                    $('.button-number-list .number-input3').addClass('active');
                    $('.popup-calculator-wrap').addClass('number-input3');
                }, 14000),
            );
        }
    }
    function chap4BtnChemical3() {
        if (bcCnt3 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt3--;
            btnChemical3.removeClass('g-active1');
            $('.scene-layer2 .temperature-wrap').addClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼의 클릭 가이드 비활성화
                    $('.gesture-button-finger3').removeClass('active');

                    // 온도계 활성화
                    $('.scene-layer2 .temperature-wrap').addClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도계 활성화
                    // 숫자 변경을 위한 초기 설정
                    let currentTemp = 20.0;
                    const targetTemp = 26.0;
                    const increment = 0.1; // 온도가 증가하는 단위
                    const intervalSpeed = 50; // 숫자가 변경되는 속도 (ms)

                    const tempElement = $('.scene-layer2 .temperature-wrap .number');

                    // 숫자 업데이트를 위한 인터벌 시작
                    const tempInterval = setInterval(function () {
                        currentTemp += increment;
                        tempElement.text(currentTemp.toFixed(1)); // 소수점 한자리까지 표시

                        // 목표 온도에 도달하면 인터벌을 중지
                        if (currentTemp >= targetTemp) {
                            clearInterval(tempInterval);
                        }
                    }, intervalSpeed);
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼 비활성화
                    btnChemical3.removeClass('on g-active1');
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap4-5').addClass('active');
                }, 7000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct4_05.play();
                }, 8000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap4-5').removeClass('active');
                    audioAct4_05.pause();
                }, 13000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 숫자 입력 가이드 활성화
                    $('.gesture-number-input-finger4').addClass('active');
                    $('.button-number-list .number-input4').removeAttr('readonly', 'readonly');
                    $('.button-number-list .number-input4').addClass('active');
                    $('.popup-calculator-wrap').addClass('number-input4');
                }, 14000),
            );
        }
    }
    function chap5BtnChemical3() {
        if (bcCnt3 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt3--;
            btnChemical3.removeClass('g-active1');
            $('.scene-layer2 .temperature-wrap').addClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼의 클릭 가이드 비활성화
                    $('.gesture-button-finger3').removeClass('active');

                    // 온도계 활성화
                    $('.scene-layer2 .temperature-wrap').addClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도계 활성화
                    // 숫자 변경을 위한 초기 설정
                    let currentTemp = 20.0;
                    const targetTemp = 23.0;
                    const increment = 0.1; // 온도가 증가하는 단위
                    const intervalSpeed = 50; // 숫자가 변경되는 속도 (ms)

                    const tempElement = $('.scene-layer2 .temperature-wrap .number');

                    // 숫자 업데이트를 위한 인터벌 시작
                    const tempInterval = setInterval(function () {
                        currentTemp += increment;
                        tempElement.text(currentTemp.toFixed(1)); // 소수점 한자리까지 표시

                        // 목표 온도에 도달하면 인터벌을 중지
                        if (currentTemp >= targetTemp) {
                            clearInterval(tempInterval);
                        }
                    }, intervalSpeed);
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 버튼 비활성화
                    btnChemical3.removeClass('on g-active1');
                }, 6000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap5-5').addClass('active');
                }, 7000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct5_05.play();
                }, 8000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap5-5').removeClass('active');
                    audioAct5_05.pause();
                }, 13000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 온도 숫자 입력 가이드 활성화
                    $('.gesture-number-input-finger5').addClass('active');
                    $('.button-number-list .number-input5').removeAttr('readonly', 'readonly');
                    $('.button-number-list .number-input5').addClass('active');
                    $('.popup-calculator-wrap').addClass('number-input5');
                }, 14000),
            );
        }
    }

    // chapter1 지시약 버튼 이벤트 함수------------------------
    function chap1BtnChemical4() {
        if (bcCnt4 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt4--;
            btnChemical4.removeClass('g-active1');

            $('.scene-layer2 .gesture-button-finger4').removeClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 비커 물색 바뀜 - 파란색
                    $('.scene-layer2 .beaker-wrap').addClass('color-blue');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical4.removeClass('on');
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-8').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct1_08.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-8').removeClass('active');
                    audioAct1_08.pause();
                }, 9000),
            );

            timeouts.push(
                setTimeout(function () {
                    $('.scene-layer2 .gesture-choice-input-finger1').addClass('active');
                    $('.button-number-list .text-input1').addClass('active');
                }, 10000),
            );
        } else if (bcCnt4 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap2BtnChemical4() {
        if (bcCnt4 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt4--;
            btnChemical4.removeClass('g-active1');

            $('.scene-layer2 .gesture-button-finger4').removeClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 비커 물색 바뀜 - 파란색
                    $('.scene-layer2 .beaker-wrap').addClass('color-blue');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical4.removeClass('on');
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap2-7').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct2_07.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap2-7').removeClass('active');
                    audioAct2_07.pause();
                }, 9000),
            );

            timeouts.push(
                setTimeout(function () {
                    $('.scene-layer2 .gesture-choice-input-finger2').addClass('active');
                    $('.button-number-list .text-input2').addClass('active');
                }, 10000),
            );
        } else if (bcCnt4 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap3BtnChemical4() {
        if (bcCnt4 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt4--;
            btnChemical4.removeClass('g-active1');

            $('.scene-layer2 .gesture-button-finger4').removeClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 비커 물색 바뀜 - 파란색
                    $('.scene-layer2 .beaker-wrap').addClass('color-green');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical4.removeClass('on');
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap3-7').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct3_07.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap3-7').removeClass('active');
                    audioAct3_07.pause();
                }, 9000),
            );

            timeouts.push(
                setTimeout(function () {
                    $('.scene-layer2 .gesture-choice-input-finger3').addClass('active');
                    $('.button-number-list .text-input3').addClass('active');
                }, 10000),
            );
        } else if (bcCnt4 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap4BtnChemical4() {
        if (bcCnt4 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt4--;
            btnChemical4.removeClass('g-active1');

            $('.scene-layer2 .gesture-button-finger4').removeClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 비커 물색 바뀜 - 파란색
                    $('.scene-layer2 .beaker-wrap').addClass('color-blue');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical4.removeClass('on');
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap4-7').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct4_07.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap4-7').removeClass('active');
                    audioAct4_07.pause();
                }, 9000),
            );

            timeouts.push(
                setTimeout(function () {
                    $('.scene-layer2 .gesture-choice-input-finger4').addClass('active');
                    $('.button-number-list .text-input4').addClass('active');
                }, 10000),
            );
        } else if (bcCnt4 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }
    function chap5BtnChemical4() {
        if (bcCnt4 > 0) {
            correctSound.play(); // 정답 효과음

            bcCnt4--;
            btnChemical4.removeClass('g-active1');

            $('.scene-layer2 .gesture-button-finger4').removeClass('active');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 비커 물색 바뀜 - 파란색
                    $('.scene-layer2 .beaker-wrap').addClass('color-blue');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    btnChemical4.removeClass('on');
                }, 2000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap5-7').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct5_07.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap5-7').removeClass('active');
                    audioAct5_07.pause();
                }, 9000),
            );

            timeouts.push(
                setTimeout(function () {
                    $('.scene-layer2 .gesture-choice-input-finger5').addClass('active');
                    $('.button-number-list .text-input5').addClass('active');
                }, 10000),
            );
        } else if (bcCnt4 <= 0) {
            wrongSound.play(); // 오답 효과음
        }
    }

    // 입력값
    const textInput1 = $('.button-number-list .text-input1');
    const textInput2 = $('.button-number-list .text-input2');
    const textInput3 = $('.button-number-list .text-input3');
    const textInput4 = $('.button-number-list .text-input4');
    const textInput5 = $('.button-number-list .text-input5');

    textInput1.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            thisB.closest('li').find('.input-button-choice-layer').addClass('active');
            thisB.closest('li').find('.gesture-finger').removeClass('active');
        }
    });
    textInput2.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            thisB.closest('li').find('.input-button-choice-layer').addClass('active');
            thisB.closest('li').find('.gesture-finger').removeClass('active');
        }
    });
    textInput3.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            thisB.closest('li').find('.input-button-choice-layer').addClass('active');
            thisB.closest('li').find('.gesture-finger').removeClass('active');
        }
    });
    textInput4.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            thisB.closest('li').find('.input-button-choice-layer').addClass('active');
            thisB.closest('li').find('.gesture-finger').removeClass('active');
        }
    });
    textInput5.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            thisB.closest('li').find('.input-button-choice-layer').addClass('active');
            thisB.closest('li').find('.gesture-finger').removeClass('active');
        }
    });

    /* 색상 선택 input-button-choice-layer1 */
    $('.input-button-choice-layer1 .button-choice1').on('click', function () {
        const thisB = $(this);
        correctSound.play();
        thisB.closest('.input-button-choice-layer').removeClass('active');
        thisB.closest('li').find('.text-input').removeClass('active');
        thisB.closest('li').find('.text-input').addClass('blue');
        thisB.closest('li').find('.text-input').val('파란색');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1-9').addClass('active');
            }, 1000),
        );
        timeouts.push(
            setTimeout(function () {
                audioAct1_09.play();
            }, 2000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1-9').removeClass('active');
                audioAct1_09.pause();
            }, 8000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.scene-layer2 .button-again').addClass('active g-active1');
                $('.bottom-button-wrap .button-next').addClass('active g-active1');
            }, 9000),
        );
    });
    $('.input-button-choice-layer1 .button-choice2').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer1 .button-choice3').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });

    /* 색상 선택 input-button-choice-layer2 */
    $('.input-button-choice-layer2 .button-choice1').on('click', function () {
        const thisB = $(this);
        correctSound.play();
        thisB.closest('.input-button-choice-layer').removeClass('active');
        thisB.closest('li').find('.text-input').removeClass('active');
        thisB.closest('li').find('.text-input').addClass('blue');
        thisB.closest('li').find('.text-input').val('파란색');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap2-8').addClass('active');
            }, 1000),
        );
        timeouts.push(
            setTimeout(function () {
                audioAct2_08.play();
            }, 2000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap2-8').removeClass('active');
                audioAct2_08.pause();
            }, 8000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.scene-layer2 .button-again').addClass('active g-active1');
                $('.bottom-button-wrap .button-next').addClass('active g-active1');
            }, 9000),
        );
    });
    $('.input-button-choice-layer2 .button-choice2').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer2 .button-choice3').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });

    /* 색상 선택 input-button-choice-layer3 */
    $('.input-button-choice-layer3 .button-choice1').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer3 .button-choice2').on('click', function () {
        const thisB = $(this);
        correctSound.play();
        thisB.closest('.input-button-choice-layer').removeClass('active');
        thisB.closest('li').find('.text-input').removeClass('active');
        thisB.closest('li').find('.text-input').addClass('blue');
        thisB.closest('li').find('.text-input').val('파란색');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3-8').addClass('active');
            }, 1000),
        );
        timeouts.push(
            setTimeout(function () {
                audioAct3_08.play();
            }, 2000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3-8').removeClass('active');
                audioAct3_08.pause();
            }, 8000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.scene-layer2 .button-again').addClass('active g-active1');
                $('.bottom-button-wrap .button-next').addClass('active g-active1');
            }, 9000),
        );
    });
    $('.input-button-choice-layer3 .button-choice3').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });

    /* 색상 선택 input-button-choice-layer4 */
    $('.input-button-choice-layer4 .button-choice1').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer4 .button-choice2').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer4 .button-choice3').on('click', function () {
        const thisB = $(this);
        correctSound.play();
        thisB.closest('.input-button-choice-layer').removeClass('active');
        thisB.closest('li').find('.text-input').removeClass('active');
        thisB.closest('li').find('.text-input').addClass('blue');
        thisB.closest('li').find('.text-input').val('파란색');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap4-8').addClass('active');
            }, 1000),
        );
        timeouts.push(
            setTimeout(function () {
                audioAct4_08.play();
            }, 2000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap4-8').removeClass('active');
                audioAct4_08.pause();
            }, 8000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.scene-layer2 .button-again').addClass('active g-active1');
                $('.bottom-button-wrap .button-next').addClass('active g-active1');
            }, 9000),
        );
    });

    /* 색상 선택 input-button-choice-layer5 */
    $('.input-button-choice-layer5 .button-choice1').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer5 .button-choice2').on('click', function () {
        const thisB = $(this);
        wrongSound.play();
    });
    $('.input-button-choice-layer5 .button-choice3').on('click', function () {
        const thisB = $(this);
        correctSound.play();
        thisB.closest('.input-button-choice-layer').removeClass('active');
        thisB.closest('li').find('.text-input').removeClass('active');
        thisB.closest('li').find('.text-input').addClass('blue');
        thisB.closest('li').find('.text-input').val('파란색');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.tab-list-basic').addClass('active');
            }, 1000),
        );
        timeouts.push(
            setTimeout(function () {
                $('.scene-layer2 .button-again').addClass('active g-active1');
            }, 2000),
        );
    });

    // 입력값
    const numberInput1 = $('.button-number-list .number-input1');
    const numberInput2 = $('.button-number-list .number-input2');
    const numberInput3 = $('.button-number-list .number-input3');
    const numberInput4 = $('.button-number-list .number-input4');
    const numberInput5 = $('.button-number-list .number-input5');

    const popCalWrap = $('.popup-calculator-wrap');
    numberInput1.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            popCalWrap.addClass('active');
        }
    });

    numberInput2.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            popCalWrap.addClass('active');
        }
    });

    numberInput3.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            popCalWrap.addClass('active');
        }
    });

    numberInput4.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            popCalWrap.addClass('active');
        }
    });

    numberInput5.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            popCalWrap.addClass('active');
        }
    });

    const btnAgain = $('.scene-layer2 .button-again');
    const btnNext = $('.bottom-button-wrap .button-next');

    // 다시하기 버튼
    btnAgain.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1Again();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2Again();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3Again();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4Again();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5Again();
                break;
            default:
                break;
        }
    });

    // 다음 버튼
    btnNext.on('click', function () {
        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chap1Next();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chap2Next();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chap3Next();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chap4Next();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chap5Next();
                break;
            default:
                break;
        }
    });

    function chap1Again() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        textInput1.removeClass('blue');
        textInput1.val('');
        numberInput1.removeClass('white');
        numberInput1.val('');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter1');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct1_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct1_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // ※ 첫진입 chapter1
                $('.scene-layer2').addClass('chapter1');

                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
            }, 8000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 1;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap2Again() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        textInput2.removeClass('blue');
        textInput2.val('');
        numberInput2.removeClass('white');
        numberInput2.val('');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap2-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct2_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct2_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap2-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
            }, 8000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 2;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap3Again() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        textInput1.removeClass('blue');
        textInput1.val('');
        numberInput1.removeClass('white');
        numberInput1.val('');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter3');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct3_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct3_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap3-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
            }, 8000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 3;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap4Again() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        textInput1.removeClass('blue');
        textInput1.val('');
        numberInput1.removeClass('white');
        numberInput1.val('');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter4');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap4-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct4_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct4_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap4-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
            }, 8000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 4;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap5Again() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        textInput1.removeClass('blue');
        textInput1.val('');
        numberInput1.removeClass('white');
        numberInput1.val('');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter5');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap5-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct5_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct5_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap5-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
            }, 8000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 1;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }

    function chap1Next() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap2-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct2_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap2-1').removeClass('active');
                audioAct2_01.pause();
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                bcCnt1 = 2;
                // 염산 버튼 활성화
                $('.scene-layer2 .button-chemical1').addClass('on g-active1');

                // 염산 버튼의 클릭 가이드 활성화
                $('.gesture-button-finger1').addClass('active');
                // 염산 버튼 1회 카운터 부여
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap2Next() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct3_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct3_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap3-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 3;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap3Next() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap4-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct4_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct4_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap4-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 4;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap4Next() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap5-1').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct5_01.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct5_01.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap5-1').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 5;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }
    function chap5Next() {
        btnAgain.removeClass('active g-active1');
        btnNext.removeClass('active g-active1');

        $('.scene-layer2 .water-wrap').removeClass('motion');
        $('.scene-layer2 .beaker-wrap').removeClass('color-blue color-green color-yellow');

        for (var i = 1; i <= 10; i++) {
            $('.scene-layer2').removeClass('chapter' + i);
            $('.scene-layer2 .water-wrap').removeClass('g-motion' + i);
        }
        $('.scene-layer2').addClass('chapter2');
        $('.scene-layer2 .water-wrap .particle-wrap .particle-inner').empty();
        $('.scene-layer2 .temperature-wrap .number').text('20.0');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap10').addClass('active');
            }, 1000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생
                audioAct1_10.play();
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                audioAct1_10.pause();
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap10').removeClass('active');
            }, 7000),
        );

        timeouts.push(
            setTimeout(function () {
                // 염산 버튼 1회 카운터 부여
                bcCnt1 = 2;
            }, 8500),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 9000);
    }

    // 입력기 -------------------------------------------------------------------------
    let currentInput = '0'; // 현재 입력된 값
    let isNegative = false; // 음수 상태 확인 변수

    // 초기 상태 설정
    updateDisplay(currentInput);

    // 숫자 버튼 클릭 시
    $('.popup-calculator-wrap .calc-int').on('click', function () {
        const value = $(this).val();

        if (currentInput === '0' && value !== '.') {
            currentInput = value; // 처음 0이 입력되었을 때 대체
        } else {
            currentInput += value; // 기존 입력값에 추가
        }

        updateDisplay(currentInput);
    });

    // 소수점 버튼 클릭 시
    $('.popup-calculator-wrap .calc-decimal').on('click', function () {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay(currentInput);
        }
    });

    // 부호 변경 버튼 클릭 시
    $('.popup-calculator-wrap .calc-neg').on('click', function () {
        if (currentInput !== '0') {
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.slice(1); // 음수 제거
            } else {
                currentInput = '-' + currentInput; // 음수 추가
            }
            updateDisplay(currentInput);
        }
    });

    // 백스페이스 버튼 클릭 시
    $('.popup-calculator-wrap .calc-back').on('click', function () {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1); // 마지막 글자 제거
        } else {
            currentInput = '0'; // 마지막 글자가 제거되면 0으로 설정
        }

        updateDisplay(currentInput);
    });

    var resultCal;

    // 입력 버튼 클릭 시
    $('.popup-calculator-wrap .calc-eval').on('click', function () {
        resultCal = parseFloat(currentInput) || 0; // 입력된 값을 실수로 변환
        resultCal = parseFloat(resultCal.toFixed(1)); // 소수점 한 자리까지 유지

        switch (true) {
            case $('.scene-layer2').hasClass('chapter1'):
                chapter1NumberInput();
                break;
            case $('.scene-layer2').hasClass('chapter2'):
                chapter2NumberInput();
                break;
            case $('.scene-layer2').hasClass('chapter3'):
                chapter3NumberInput();
                break;
            case $('.scene-layer2').hasClass('chapter4'):
                chapter4NumberInput();
                break;
            case $('.scene-layer2').hasClass('chapter5'):
                chapter5NumberInput();
                break;
            default:
                break;
        }

        // 입력 후 초기화
        currentInput = '0';
        updateDisplay(currentInput);
    });

    function chapter1NumberInput() {
        if (resultCal === 23.0) {
            correctSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').attr('readonly', 'readonly');
            $('.button-number-list .number-input1').addClass('white');
            $('.button-number-list .number-input1').removeClass('active');
            $('.button-number-list .number-input1').val(resultCal.toFixed(1)); // 소수점 한 자리까지 표시
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap1-7').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct1_07.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap1-7').removeClass('active');
                    audioAct1_07.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = 1;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else {
            wrongSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').val('');
        }
    }
    function chapter2NumberInput() {
        if (resultCal === 26.0) {
            correctSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input2').attr('readonly', 'readonly');
            $('.button-number-list .number-input2').addClass('white');
            $('.button-number-list .number-input2').removeClass('active');
            $('.button-number-list .number-input2').val(resultCal.toFixed(1)); // 소수점 한 자리까지 표시
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap2-6').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct2_06.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap2-6').removeClass('active');
                    audioAct2_06.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = 1;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else {
            wrongSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').val('');
        }
    }
    function chapter3NumberInput() {
        if (resultCal === 29.0) {
            correctSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input2').attr('readonly', 'readonly');
            $('.button-number-list .number-input2').addClass('white');
            $('.button-number-list .number-input2').removeClass('active');
            $('.button-number-list .number-input2').val(resultCal.toFixed(1)); // 소수점 한 자리까지 표시
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap3-6').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct3_06.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap3-6').removeClass('active');
                    audioAct3_06.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = 1;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else {
            wrongSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').val('');
        }
    }
    function chapter4NumberInput() {
        if (resultCal === 26.0) {
            correctSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input2').attr('readonly', 'readonly');
            $('.button-number-list .number-input2').addClass('white');
            $('.button-number-list .number-input2').removeClass('active');
            $('.button-number-list .number-input2').val(resultCal.toFixed(1)); // 소수점 한 자리까지 표시
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap4-6').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct4_06.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap4-6').removeClass('active');
                    audioAct4_06.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = 1;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else {
            wrongSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').val('');
        }
    }
    function chapter5NumberInput() {
        if (resultCal === 23.0) {
            correctSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input2').attr('readonly', 'readonly');
            $('.button-number-list .number-input2').addClass('white');
            $('.button-number-list .number-input2').removeClass('active');
            $('.button-number-list .number-input2').val(resultCal.toFixed(1)); // 소수점 한 자리까지 표시
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $('.guide-balloon-tip-wrap5-6').addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    audioAct5_06.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $('.guide-balloon-tip-wrap8').removeClass('active');
                    audioAct5_06.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = 1;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else {
            wrongSound.play();
            $('.gesture-number-input-finger1').removeClass('active');
            $('.button-number-list .number-input1').val('');
        }
    }

    // 닫기 버튼 클릭 시
    $('.popup-calculator-wrap .button-pop-close').on('click', function () {
        $('.popup-calculator-wrap').removeClass('active');
    });

    // .total 인풋이 직접 수정되었을 때, 초기화 처리
    $('.popup-calculator-wrap .total').on('input', function () {
        currentInput = $(this).val();
        if (currentInput === '' || currentInput === '0' || isNaN(currentInput)) {
            currentInput = '0';
            updateDisplay(currentInput);
        }
    });

    // 화면에 현재 입력값을 업데이트하는 함수
    function updateDisplay(value) {
        // $(".popup-calculator-wrap .total").val(parseFloat(value).toFixed(1)); // 소수점 한 자리까지 표시
        $('.popup-calculator-wrap .total').val(value);
    }

    // 이벤트 핸들러: 엔터 키를 누르거나 포커스를 잃었을 때
    // 이벤트 핸들러: 엔터 키를 누르거나 포커스를 잃었을 때
    const btnNumInput = $('.button-number-list .number-input');
    btnNumInput.on('blur keydown', function (e) {
        const thisB = $(this);
        if (e.type === 'blur' || (e.type === 'keydown' && e.key === 'Enter')) {
            if (thisB.hasClass('active')) {
                switch (true) {
                    case $('.scene-layer2').hasClass('chapter1'):
                        handleChapterInput(thisB, '23.0', 'guide-balloon-tip-wrap1-7', audioAct1_07, 1);
                        break;
                    case $('.scene-layer2').hasClass('chapter2'):
                        handleChapterInput(thisB, '26.0', 'guide-balloon-tip-wrap2-6', audioAct2_06, 2);
                        break;
                    case $('.scene-layer2').hasClass('chapter3'):
                        handleChapterInput(thisB, '29.0', 'guide-balloon-tip-wrap3-6', audioAct3_06, 3);
                        break;
                    case $('.scene-layer2').hasClass('chapter4'):
                        handleChapterInput(thisB, '26.0', 'guide-balloon-tip-wrap4-6', audioAct4_06, 4);
                        break;
                    case $('.scene-layer2').hasClass('chapter5'):
                        handleChapterInput(thisB, '23.0', 'guide-balloon-tip-wrap5-6', audioAct5_06, 5);
                        break;
                    default:
                        break;
                }
            }
        }
    });

    // 공통 입력 처리 함수
    function handleChapterInput(inputElement, correctValue, guideBalloonClass, audio, chapterNumber) {
        $('.gesture-number-input-finger1').removeClass('active');
        const inputValue = inputElement.val().trim(); // 입력 값 가져오기 및 공백 제거

        if (inputValue === correctValue) {
            correctSound.play();
            inputElement.attr('readonly', 'readonly');
            inputElement.addClass('white');
            inputElement.val(inputValue); // 값 유지
            inputElement.removeClass('active');
            $('.popup-calculator-wrap').removeClass('active number-input1');

            var timeouts = [];

            timeouts.push(
                setTimeout(function () {
                    // 온도계 사라짐
                    $('.scene-layer2 .temperature-wrap').removeClass('active');
                }, 1000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 활성화
                    $(`.${guideBalloonClass}`).addClass('active');
                }, 3000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 오디오 재생
                    audio.play();
                }, 4000),
            );

            timeouts.push(
                setTimeout(function () {
                    // 가이드 풍선 도움말 비활성화
                    $(`.${guideBalloonClass}`).removeClass('active');
                    audio.pause();
                }, 10000),
            );

            timeouts.push(
                setTimeout(function () {
                    bcCnt4 = chapterNumber;

                    // 지시약 버튼 활성화
                    $('.scene-layer2 .button-chemical4').addClass('on g-active1');

                    // 지시약 버튼의 클릭 가이드 활성화
                    $('.gesture-button-finger4').addClass('active');
                }, 11000),
            );
        } else if (inputValue === '') {
            // 빈 입력에 대한 처리는 필요 없다면 여기서 생략합니다.
        } else {
            wrongSound.play();
            inputElement.val(''); // 공백 처리
        }
    }

    // 입력기 End-------------------------------------------------------------------------

    $('.tab-list-basic .button-tab').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
            $('.modal-layer-activity-goals3').removeClass('active');
        } else {
            thisB.addClass('active');
            $('.modal-layer-activity-goals3').addClass('active');
            resultAudio.load();
            setTimeout(function () {
                resultAudio.play();
            }, 1000);
        }
    });

    $('.modal-layer-activity-goals3 .button-close').on('click', function () {
        const thisB = $(this);
        thisB.closest('.modal-layer-activity-goals3').removeClass('active');
        $('.tab-list-basic .button-tab').removeClass('active');
        resultAudio.pause();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});

// p5.js 스크립트 시작
let marbleElements = {
    Cl: [], // 염소 객체 배열
    H: [], // 수소 객체 배열
    H2O: [], // 물 객체 배열
    Na: [], // 나트륨 객체 배열
    OH: [], // 수산화 객체 배열
};

let positions = {
    Cl: [], // 염소 위치 배열
    H: [], // 수소 위치 배열
    H2O: [], // 물 위치 배열
    Na: [], // 나트륨 위치 배열
    OH: [], // 수산화 위치 배열
};

let velocities = {
    Cl: [], // 염소 속도 배열
    H: [], // 수소 속도 배열
    H2O: [], // 물 속도 배열
    Na: [], // 나트륨 속도 배열
    OH: [], // 수산화 속도 배열
};

let speedFactors = {
    Cl: [], // 염소 마블의 속도 계수 배열
    H: [], // 수소 마블의 속도 계수 배열
    H2O: [], // 물 마블의 속도 계수 배열
    Na: [], // 나트륨 마블의 속도 계수 배열
    OH: [], // 수산화 마블의 속도 계수 배열
};

let containerWidth, containerHeight;

// beakerWrap이 클릭되었을 때만 충돌 이벤트를 활성화하기 위한 플래그 변수
let isBeakerClicked = false;

function setup() {
    // p5.js에서 캔버스를 생성 (크기는 particle-inner와 동일)
    noCanvas();

    // particle-inner 요소 가져오기
    const particleInner = $('.particle-wrap .particle-inner');

    // particle-inner의 크기 얻기
    containerWidth = particleInner.width();
    containerHeight = particleInner.height();
}

function draw() {
    // particle-inner 요소 가져오기
    const particleInner = $('.particle-wrap .particle-inner');

    // particle-inner의 높이를 계속 업데이트
    containerWidth = particleInner.width();
    containerHeight = particleInner.height();

    // 각 종류의 원소를 반복적으로 업데이트
    updateMarbles('Cl');
    updateMarbles('H');
    updateMarbles('H2O');
    updateMarbles('Na');
    updateMarbles('OH');

    // 통합된 충돌 체크 함수 호출
    checkCollisions();
}

// 마블 요소를 업데이트하는 함수
function updateMarbles(type) {
    for (let i = 0; i < marbleElements[type].length; i++) {
        // 속도에 해당 마블의 speedFactor를 적용하여 위치 업데이트
        const adjustedVelocity = p5.Vector.mult(velocities[type][i], speedFactors[type][i]);
        positions[type][i].add(adjustedVelocity);

        // 마블의 위치 업데이트
        marbleElements[type][i].css({ top: positions[type][i].y + 'px', left: positions[type][i].x + 'px' });

        // 경계 충돌 처리
        handleBoundaryCollision(positions[type][i], velocities[type][i], marbleElements[type][i]);
    }
}

// 충돌 발생 여부를 확인하는 플래그
let hasCollisionOccurred = false;

// 통합된 충돌 감지 및 처리 함수
/*
function checkCollisions() {
    const allElements = [].concat(
        marbleElements.Cl, marbleElements.H, marbleElements.H2O, marbleElements.Na, marbleElements.OH
    );
    const allPositions = [].concat(
        positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH
    );
    const allVelocities = [].concat(
        velocities.Cl, velocities.H, velocities.H2O, velocities.Na, velocities.OH
    );
    const allSizes = [].concat(
        marbleElements.Cl.map(el => el.outerWidth()),
        marbleElements.H.map(el => el.outerWidth()),
        marbleElements.H2O.map(el => el.outerWidth()),
        marbleElements.Na.map(el => el.outerWidth()),
        marbleElements.OH.map(el => el.outerWidth())
    );
    const types = [].concat(
        new Array(marbleElements.Cl.length).fill('Cl'),
        new Array(marbleElements.H.length).fill('H'),
        new Array(marbleElements.H2O.length).fill('H2O'),
        new Array(marbleElements.Na.length).fill('Na'),
        new Array(marbleElements.OH.length).fill('OH')
    );

    for (let i = 0; i < allElements.length; i++) {
        for (let j = i + 1; j < allElements.length; j++) {
            const pos1 = allPositions[i];
            const pos2 = allPositions[j];
            const distX = pos1.x - pos2.x;
            const distY = pos1.y - pos2.y;
            const distance = Math.sqrt(distX * distX + distY * distY);
            const radius1 = allSizes[i] / 2;
            const radius2 = allSizes[j] / 2;
            const collisionDistance = radius1 + radius2;

            if (distance < collisionDistance) {
                // OH와 H의 충돌을 처리해야 하는 경우 (isBeakerClicked가 true일 때만)
                if (isBeakerClicked && ((types[i] === 'OH' && types[j] === 'H') || (types[i] === 'H' && types[j] === 'OH'))) {
                    const collisionX = (pos1.x + pos2.x) / 2;
                    const collisionY = (pos1.y + pos2.y) / 2;
                    allElements[i].remove();
                    allElements[j].remove();
                    removeMarbleData(types[i], i);
                    removeMarbleData(types[j], j);
                    addMarbleAtPosition('H2O', 'H2O', '', 58, collisionX, collisionY);

                    // 충돌 처리 후 플래그를 true로 설정
                    hasCollisionOccurred = true;
                    // 충돌 처리 후 isBeakerClicked를 다시 false로 설정하여 일회성 이벤트로 유지
                    isBeakerClicked = false;
                    return; // 현재 함수 종료하여 오류 방지
                }

                // 일반적인 충돌 처리
                const collisionNormal = createVector(distX, distY).normalize();
                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                const speed = relativeVelocity.dot(collisionNormal);

                if (speed < 0) {
                    const impulse = collisionNormal.mult(speed);
                    allVelocities[i].sub(impulse);
                    allVelocities[j].add(impulse);
                    const overlap = collisionDistance - distance;
                    const correctionVector = collisionNormal.mult(overlap / 2);
                    pos1.add(correctionVector);
                    pos2.sub(correctionVector);
                }
            }
        }
    }
}
*/

// 통합된 충돌 감지 및 처리 함수에서 isBeakerClicked를 검사하여 중복 처리 방지
function checkCollisions() {
    if (isBeakerClicked) return; // .beaker-wrap 클릭으로 인해 발생하는 충돌 체크가 진행 중이라면 중복 처리 방지

    const allElements = [].concat(
        marbleElements.Cl,
        marbleElements.H,
        marbleElements.H2O,
        marbleElements.Na,
        marbleElements.OH,
    );
    const allPositions = [].concat(positions.Cl, positions.H, positions.H2O, positions.Na, positions.OH);
    const allVelocities = [].concat(velocities.Cl, velocities.H, velocities.H2O, velocities.Na, velocities.OH);
    const allSizes = [].concat(
        marbleElements.Cl.map(el => el.outerWidth()),
        marbleElements.H.map(el => el.outerWidth()),
        marbleElements.H2O.map(el => el.outerWidth()),
        marbleElements.Na.map(el => el.outerWidth()),
        marbleElements.OH.map(el => el.outerWidth()),
    );
    const types = [].concat(
        new Array(marbleElements.Cl.length).fill('Cl'),
        new Array(marbleElements.H.length).fill('H'),
        new Array(marbleElements.H2O.length).fill('H2O'),
        new Array(marbleElements.Na.length).fill('Na'),
        new Array(marbleElements.OH.length).fill('OH'),
    );

    for (let i = 0; i < allElements.length; i++) {
        for (let j = i + 1; j < allElements.length; j++) {
            const pos1 = allPositions[i];
            const pos2 = allPositions[j];
            const distX = pos1.x - pos2.x;
            const distY = pos1.y - pos2.y;
            const distance = Math.sqrt(distX * distX + distY * distY);
            const radius1 = allSizes[i] / 2;
            const radius2 = allSizes[j] / 2;
            const collisionDistance = radius1 + radius2;

            if (distance < collisionDistance) {
                // H와 OH의 충돌을 확인하고 처리
                if ((types[i] === 'H' && types[j] === 'OH') || (types[i] === 'OH' && types[j] === 'H')) {
                    // 충돌된 요소 제거
                    allElements[i].remove();
                    allElements[j].remove();

                    // 해당 요소들을 배열에서 제거
                    marbleElements.H = marbleElements.H.filter((el, index) => el !== allElements[i]);
                    marbleElements.OH = marbleElements.OH.filter((el, index) => el !== allElements[j]);
                    positions.H = positions.H.filter((pos, index) => pos !== allPositions[i]);
                    positions.OH = positions.OH.filter((pos, index) => pos !== allPositions[j]);
                    velocities.H = velocities.H.filter((vel, index) => vel !== allVelocities[i]);
                    velocities.OH = velocities.OH.filter((vel, index) => vel !== allVelocities[j]);

                    // H2O 마블 생성
                    addMarbleAtPosition('H2O', 'H', '2', 60, (pos1.x + pos2.x) / 2, (pos1.y + pos2.y) / 2);

                    // H 또는 OH의 개수가 0이 되었을 때 콘솔에 출력
                    if (marbleElements.H.length === 0 && marbleElements.OH.length === 0) {
                        console.log('H와 OH가 모두 0개가 되었습니다.');
                    } else if (marbleElements.H.length === 0) {
                        console.log('H가 0개가 되었습니다.');
                    } else if (marbleElements.OH.length === 0) {
                        console.log('OH가 0개가 되었습니다.');
                    }

                    // 계속해서 다른 충돌을 처리하기 위해서 continue를 사용하여 다음 루프로 이동
                    continue;
                }

                // 일반적인 충돌 처리
                const collisionNormal = createVector(distX, distY).normalize();
                const relativeVelocity = p5.Vector.sub(allVelocities[i], allVelocities[j]);
                const speed = relativeVelocity.dot(collisionNormal);

                if (speed < 0) {
                    // 충격량 계산 및 반발력 적용
                    const impulse = collisionNormal.mult(speed);
                    allVelocities[i].sub(impulse);
                    allVelocities[j].add(impulse);

                    // 입자 겹침 해소를 위해 위치를 보정해줌
                    const overlap = collisionDistance - distance;
                    const correctionVector = collisionNormal.mult(overlap / 2);
                    pos1.add(correctionVector);
                    pos2.sub(correctionVector);

                    // 실제 위치를 마블에 적용하여 화면에 반영
                    allElements[i].css({ top: pos1.y + 'px', left: pos1.x + 'px' });
                    allElements[j].css({ top: pos2.y + 'px', left: pos2.x + 'px' });
                }
            }
        }
    }
}

// 마블 데이터를 배열에서 제거하는 함수
function removeMarbleData(type, index) {
    marbleElements[type].splice(index, 1); // 마블 요소 배열에서 제거
    positions[type].splice(index, 1); // 위치 배열에서 제거
    velocities[type].splice(index, 1); // 속도 배열에서 제거
    speedFactors[type].splice(index, 1); // 속도 계수 배열에서 제거
}

// 비이커 외곽 경계 충돌을 처리하는 함수
function handleBoundaryCollision(position, velocity, element) {
    const elementWidth = element.width();
    const elementHeight = element.height();

    if (position.x <= 0 || position.x + elementWidth >= containerWidth) {
        velocity.x *= -1;
        position.x = constrain(position.x, 0, containerWidth - elementWidth);
    }

    if (position.y <= 0 || position.y + elementHeight >= containerHeight) {
        velocity.y *= -1;
        position.y = constrain(position.y, 0, containerHeight - elementHeight);
    }
}

// 랜덤 위치 생성 함수
function getRandomPosition(size, maxSize) {
    return Math.floor(Math.random() * (maxSize - size));
}

// 추가 마블을 생성하는 함수 (예: 염소 마블을 생성하는 경우)
function addMarble(type, text, charge, size) {
    const particleInner = $('.particle-wrap .particle-inner');

    // 마블 생성 및 랜덤 위치 배치
    const marble = $(`
        <i class="item-marble item-marble-${type.toLowerCase()}" style="position: absolute;">
            <i class="item-marble-inner">
                <em class="text-wrap">
                    <span class="text">${text}</span>
                    <sup class="sup-sign">${charge}</sup>
                </em>
            </i>
        </i>
    `);

    marble.css({
        top: getRandomPosition(size, containerHeight) + 'px',
        left: getRandomPosition(size, containerWidth) + 'px',
    });

    particleInner.append(marble);

    // 배열에 요소 추가
    marbleElements[type].push(marble);
    positions[type].push(createVector(parseFloat(marble.css('left')), parseFloat(marble.css('top'))));
    velocities[type].push(createVector(random(-2, 2), random(-2, 2)));

    // 각 마블에 대해 개별 속도 계수 설정 (예: 0.2 ~ 1.0 범위의 랜덤 속도 계수)
    // let randomSpeedFactor = random(0.2, 1.0);
    // speedFactors[type].push(randomSpeedFactor);

    // 각 마블에 대해 개별 속도 계수 설정
    let randomSpeedFactor;
    if (type === 'Cl') {
        randomSpeedFactor = random(0.3, 0.6); // 염소 마블만 빠르게 움직이도록 설정 (1.5 ~ 2.5 범위)
    } else if (type === 'H') {
        randomSpeedFactor = random(0.3, 0.6); // 수소 마블만 빠르게 움직이도록 설정 (1.5 ~ 2.5 범위)
    } else {
        randomSpeedFactor = random(0.3, 0.6); // 다른 마블은 일반적인 범위로 설정 (0.2 ~ 1.0)
    }
    speedFactors[type].push(randomSpeedFactor);
}

// 지정된 위치에 마블을 추가하는 함수
function addMarbleAtPosition(type, text, charge, size, x, y) {
    const particleInner = $('.particle-wrap .particle-inner');

    // 마블 생성
    const marble = $(`
        <i class="item-marble item-marble-${type.toLowerCase()}" style="position: absolute;">
            <i class="item-marble-inner">
                <em class="text-wrap">
                    <span class="text">${text}</span>
                    <sup class="sup-sign">${charge}</sup>
                </em>
            </i>
        </i>
    `);

    // 지정된 위치로 설정
    marble.css({
        top: y + 'px',
        left: x + 'px',
        width: size + 'px',
        height: size + 'px',
    });

    particleInner.append(marble);

    // 배열에 요소 추가
    marbleElements[type].push(marble);
    positions[type].push(createVector(x, y));
    velocities[type].push(createVector(random(-2, 2), random(-2, 2)));

    // 각 마블에 대해 개별 속도 계수 설정
    let randomSpeedFactor = random(0.3, 0.6); // 기본 속도 계수 설정
    speedFactors[type].push(randomSpeedFactor);
}

// p5.js 스크립트 끝 ----------------------------------------
