/* [고등1] > 생명과학 */
// 방형구법으로 식물군집 분석하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const clickGoal = new Audio('../../media/h_s12_134_066/click.mp3'); // 활동목표 공통 효과음
const audioGoal = new Audio('../../media/h_s12_134_066/1-goal.mp3'); // 활동목표 오디오
const audioGoal2 = new Audio('../../media/h_s12_134_066/1-goal2.mp3'); // 활동1_01 오디오

const audioAct1_01 = new Audio('../../media/h_s12_134_066/2-act1_01.mp3'); // 총 개체 수01 오디오
const audioAct1_02 = new Audio('../../media/h_s12_134_066/2-act1_02.mp3'); // 총 개체 수02 오디오
const audioAct1_03 = new Audio('../../media/h_s12_134_066/2-act1_03.mp3'); // 총 개체 수03 오디오
const audioAct1_04 = new Audio('../../media/h_s12_134_066/2-act1_04.mp3'); // 총 개체 수04 오디오
const audioAct1_05 = new Audio('../../media/h_s12_134_066/2-act1_05.mp3'); // 총 개체 수05 오디오
const audioAct1_06 = new Audio('../../media/h_s12_134_066/2-act1_06.mp3'); // 총 개체 수06 오디오
const audioAct1_07 = new Audio('../../media/h_s12_134_066/2-act1_07.mp3'); // 총 개체 수07 오디오
const audioAct1_08 = new Audio('../../media/h_s12_134_066/2-act1_08.mp3'); // 총 개체 수08 오디오
const audioAct1_09 = new Audio('../../media/h_s12_134_066/2-act1_09.mp3'); // 총 개체 수09 오디오
const audioAct1_10 = new Audio('../../media/h_s12_134_066/2-act1_10.mp3'); // 총 개체 수10 오디오

const audioAct2_01 = new Audio('../../media/h_s12_134_066/2-act2_01.mp3'); // 방형구 수01 오디오
const audioAct2_02 = new Audio('../../media/h_s12_134_066/2-act2_02.mp3'); // 방형구 수02 오디오
const audioAct2_03 = new Audio('../../media/h_s12_134_066/2-act2_03.mp3'); // 방형구 수03 오디오
const audioAct2_04 = new Audio('../../media/h_s12_134_066/2-act2_04.mp3'); // 방형구 수04 오디오
const audioAct2_05 = new Audio('../../media/h_s12_134_066/2-act2_05.mp3'); // 방형구 수05 오디오
const audioAct2_06 = new Audio('../../media/h_s12_134_066/2-act2_06.mp3'); // 방형구 수06 오디오
const audioAct2_07 = new Audio('../../media/h_s12_134_066/2-act2_07.mp3'); // 방형구 수07 오디오
const audioAct2_08 = new Audio('../../media/h_s12_134_066/2-act2_08.mp3'); // 방형구 수08 오디오
const audioAct2_09 = new Audio('../../media/h_s12_134_066/2-act2_09.mp3'); // 방형구 수09 오디오
const audioAct2_10 = new Audio('../../media/h_s12_134_066/2-act2_10.mp3'); // 방형구 수10 오디오

const resultAudio1_01 = new Audio('../../media/h_s12_134_066/3-final1_01.mp3'); // 분석하기 : 면적 오디오
const resultAudio1_02 = new Audio('../../media/h_s12_134_066/3-final1_02.mp3'); // 분석하기 : ? 아이콘 오디오

const resultAudio2_01 = new Audio('../../media/h_s12_134_066/3-final2_01.mp3'); // 분석하기 : 밀도 오디오
const resultAudio2_02 = new Audio('../../media/h_s12_134_066/3-final2_02.mp3'); // 분석하기 : 빈도 오디오
const resultAudio2_03 = new Audio('../../media/h_s12_134_066/3-final2_03.mp3'); // 분석하기 : 피도 오디오

const resultAudio3_01 = new Audio('../../media/h_s12_134_066/3-final3_01.mp3'); // 분석하기 : 상대밀도 오디오
const resultAudio3_02 = new Audio('../../media/h_s12_134_066/3-final3_02.mp3'); // 분석하기 : 상대빈도 오디오
const resultAudio3_03 = new Audio('../../media/h_s12_134_066/3-final3_03.mp3'); // 분석하기 : 상대피도 오디오
const resultAudio3_04 = new Audio('../../media/h_s12_134_066/3-final3_04.mp3'); // 분석하기 : 중요치 오디오

const correctSound = new Audio('../../media/h_s12_134_066/correct_sound_effect.mp3'); // 정답 오디오
const wrongSound = new Audio('../../media/h_s12_134_066/wrong_sound_effect.mp3'); // 오답 오디오
const moveSound = new Audio('../../media/h_s12_134_066/move_sound_effect.mp3'); // 바뀔때 오디오

/* 오디오 볼륨 [0~1] 선언 */
clickGoal.volume = 1;
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
audioAct1_10.volume = 1;

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

resultAudio1_01.volume = 1;
resultAudio1_02.volume = 1;

resultAudio2_01.volume = 1;
resultAudio2_02.volume = 1;
resultAudio2_03.volume = 1;

resultAudio3_01.volume = 1;
resultAudio3_02.volume = 1;
resultAudio3_03.volume = 1;
resultAudio3_04.volume = 1;

correctSound.volume = 1;
wrongSound.volume = 1;
moveSound.volume = 1;

let planCnt = 0;

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
        clickGoal.load();
        clickGoal.mute = true;
        // clickGoal.pause();
        clickGoal.currentTime = 0;
        clickGoal.mute = false;

        audioGoal.load();
        audioGoal.mute = true;
        // audioGoal.pause();
        audioGoal.currentTime = 0;
        audioGoal.mute = false;

        audioGoal2.load();
        audioGoal2.mute = true;
        audioGoal2.pause();
        audioGoal2.currentTime = 0;
        audioGoal2.mute = false;

        audioAct1_01.load();
        audioAct1_01.mute = true;
        audioAct1_01.pause();
        audioAct1_01.currentTime = 0;
        audioAct1_01.mute = false;

        audioAct1_02.load();
        audioAct1_02.mute = true;
        audioAct1_02.pause();
        audioAct1_02.currentTime = 0;
        audioAct1_02.mute = false;

        audioAct1_03.load();
        audioAct1_03.mute = true;
        audioAct1_03.pause();
        audioAct1_03.currentTime = 0;
        audioAct1_03.mute = false;

        audioAct1_04.load();
        audioAct1_04.mute = true;
        audioAct1_04.pause();
        audioAct1_04.currentTime = 0;
        audioAct1_04.mute = false;

        audioAct1_05.load();
        audioAct1_05.mute = true;
        audioAct1_05.pause();
        audioAct1_05.currentTime = 0;
        audioAct1_05.mute = false;

        audioAct1_06.load();
        audioAct1_06.mute = true;
        audioAct1_06.pause();
        audioAct1_06.currentTime = 0;
        audioAct1_06.mute = false;

        audioAct1_07.load();
        audioAct1_07.mute = true;
        audioAct1_07.pause();
        audioAct1_07.currentTime = 0;
        audioAct1_07.mute = false;

        audioAct1_08.load();
        audioAct1_08.mute = true;
        audioAct1_08.pause();
        audioAct1_08.currentTime = 0;
        audioAct1_08.mute = false;

        audioAct1_09.load();
        audioAct1_09.mute = true;
        audioAct1_09.pause();
        audioAct1_09.currentTime = 0;
        audioAct1_09.mute = false;

        audioAct1_10.load();
        audioAct1_10.mute = true;
        audioAct1_10.pause();
        audioAct1_10.currentTime = 0;
        audioAct1_10.mute = false;

        audioAct2_01.load();
        audioAct2_01.mute = true;
        audioAct2_01.pause();
        audioAct2_01.currentTime = 0;
        audioAct2_01.mute = false;

        audioAct2_02.load();
        audioAct2_02.mute = true;
        audioAct2_02.pause();
        audioAct2_02.currentTime = 0;
        audioAct2_02.mute = false;

        audioAct2_03.load();
        audioAct2_03.mute = true;
        audioAct2_03.pause();
        audioAct2_03.currentTime = 0;
        audioAct2_03.mute = false;

        audioAct2_04.load();
        audioAct2_04.mute = true;
        audioAct2_04.pause();
        audioAct2_04.currentTime = 0;
        audioAct2_04.mute = false;

        audioAct2_05.load();
        audioAct2_05.mute = true;
        audioAct2_05.pause();
        audioAct2_05.currentTime = 0;
        audioAct2_05.mute = false;

        audioAct2_06.load();
        audioAct2_06.mute = true;
        audioAct2_06.pause();
        audioAct2_06.currentTime = 0;
        audioAct1_06.mute = false;

        audioAct2_07.load();
        audioAct2_07.mute = true;
        audioAct2_07.pause();
        audioAct2_07.currentTime = 0;
        audioAct1_07.mute = false;

        audioAct2_08.load();
        audioAct2_08.mute = true;
        audioAct2_08.pause();
        audioAct2_08.currentTime = 0;
        audioAct2_08.mute = false;

        audioAct2_09.load();
        audioAct2_09.mute = true;
        audioAct2_09.pause();
        audioAct2_09.currentTime = 0;
        audioAct2_09.mute = false;

        audioAct2_10.load();
        audioAct2_10.mute = true;
        audioAct2_10.pause();
        audioAct2_10.currentTime = 0;
        audioAct2_10.mute = false;

        resultAudio1_01.load();
        resultAudio1_01.mute = true;
        resultAudio1_01.pause();
        resultAudio1_01.currentTime = 0;
        resultAudio1_01.mute = false;

        resultAudio1_02.load();
        resultAudio1_02.mute = true;
        resultAudio1_02.pause();
        resultAudio1_02.currentTime = 0;
        resultAudio1_02.mute = false;

        resultAudio2_01.load();
        resultAudio2_01.mute = true;
        resultAudio2_01.pause();
        resultAudio2_01.currentTime = 0;
        resultAudio2_01.mute = false;

        resultAudio2_02.load();
        resultAudio2_02.mute = true;
        resultAudio2_02.pause();
        resultAudio2_02.currentTime = 0;
        resultAudio2_02.mute = false;

        resultAudio2_03.load();
        resultAudio2_03.mute = true;
        resultAudio2_03.pause();
        resultAudio2_03.currentTime = 0;
        resultAudio2_03.mute = false;

        resultAudio3_01.load();
        resultAudio3_01.mute = true;
        resultAudio3_01.pause();
        resultAudio3_01.currentTime = 0;
        resultAudio3_01.mute = false;

        resultAudio3_02.load();
        resultAudio3_02.mute = true;
        resultAudio3_02.pause();
        resultAudio3_02.currentTime = 0;
        resultAudio3_02.mute = false;

        resultAudio3_03.load();
        resultAudio3_03.mute = true;
        resultAudio3_03.pause();
        resultAudio3_03.currentTime = 0;
        resultAudio3_03.mute = false;

        resultAudio3_04.load();
        resultAudio3_04.mute = true;
        resultAudio3_04.pause();
        resultAudio3_04.currentTime = 0;
        resultAudio3_04.mute = false;

        correctSound.load();
        correctSound.mute = true;
        correctSound.pause();
        correctSound.currentTime = 0;
        correctSound.mute = false;

        wrongSound.load();
        wrongSound.mute = true;
        wrongSound.pause();
        wrongSound.currentTime = 0;
        wrongSound.mute = false;

        moveSound.load();
        moveSound.mute = true;
        moveSound.pause();
        moveSound.currentTime = 0;
        moveSound.mute = false;

        setTimeout(function () {
            // '활동시작' 클릭 시 오디오 재생
            clickGoal.play();
            audioGoal.play();
        }, 1000);
    });

    $('body').on('click', function () {
        $('.guide-balloon-tip-wrap').removeClass('active');

        audioAct1_01.pause();
        audioAct1_02.pause();
        audioAct1_03.pause();
        audioAct1_04.pause();
        audioAct1_05.pause();
        audioAct1_06.pause();
        audioAct1_07.pause();
        audioAct1_08.pause();
        audioAct1_09.pause();
        audioAct1_10.pause();

        audioAct2_01.pause();
        audioAct2_02.pause();
        audioAct2_03.pause();
        audioAct2_04.pause();
        audioAct2_05.pause();
        audioAct2_06.pause();
        audioAct2_07.pause();
        audioAct2_08.pause();
        audioAct2_09.pause();
        audioAct2_10.pause();

        // resultAudio1_01.pause();
        // resultAudio1_02.pause();

        resultAudio2_01.pause();
        resultAudio2_02.pause();
        resultAudio2_03.pause();

        resultAudio3_01.pause();
        resultAudio3_02.pause();
        resultAudio3_03.pause();
        resultAudio3_04.pause();

        audioAct1_01.currentTime = 0;
        audioAct1_02.currentTime = 0;
        audioAct1_03.currentTime = 0;
        audioAct1_04.currentTime = 0;
        audioAct1_05.currentTime = 0;
        audioAct1_06.currentTime = 0;
        audioAct1_07.currentTime = 0;
        audioAct1_08.currentTime = 0;
        audioAct1_09.currentTime = 0;
        audioAct1_10.currentTime = 0;

        audioAct2_01.currentTime = 0;
        audioAct2_02.currentTime = 0;
        audioAct2_03.currentTime = 0;
        audioAct2_04.currentTime = 0;
        audioAct2_05.currentTime = 0;
        audioAct2_06.currentTime = 0;
        audioAct2_07.currentTime = 0;
        audioAct2_08.currentTime = 0;
        audioAct2_09.currentTime = 0;
        audioAct2_10.currentTime = 0;

        // resultAudio1_01.currentTime = 0;
        // resultAudio1_02.currentTime = 0;

        resultAudio2_01.currentTime = 0;
        resultAudio2_02.currentTime = 0;
        resultAudio2_03.currentTime = 0;

        resultAudio3_01.currentTime = 0;
        resultAudio3_02.currentTime = 0;
        resultAudio3_03.currentTime = 0;
        resultAudio3_04.currentTime = 0;
    });

    // -----------------------------------------------------------------

    // <활동목표 : page-view2>
    const btnActivityGoalsClose = $('.page-view2 .button-close');
    btnActivityGoalsClose.on('click', function (e) {
        audioGoal.pause(); // 활동목표 닫기 시 오디오 멈춤
        audioGoal.currentTime = 0;

        pageView2.removeClass('active');
        $('.modal-layer-activity-number-goals').addClass('active');
        setTimeout(function () {
            // '활동시작' 클릭 시 오디오 재생
            audioGoal2.play();
        }, 2000);
    });

    // <화면진입 : modal-layer-activity-number-goals>
    const mlang = $('.modal-layer-activity-number-goals');
    const mlangBtnClose = mlang.find('.button-close');

    const planGroupView = $('.plant-group-view-wrap');

    const planRboxItem = planGroupView.find('.icon-image');
    const planRboxItemA = planGroupView.find('.icon-image-a');
    const planRboxItemB = planGroupView.find('.icon-image-b');
    const planRboxItemC = planGroupView.find('.icon-image-c');
    const planRboxItemD = planGroupView.find('.icon-image-d');
    const planRboxItemE = planGroupView.find('.icon-image-e');

    const plantCommunity = $('.plant-community-wrap');
    const planICommItem = plantCommunity.find('.item-plant');
    const planICommItemA = plantCommunity.find('.item-plant-a');
    const planICommItemB = plantCommunity.find('.item-plant-b');
    const planICommItemC = plantCommunity.find('.item-plant-c');
    const planICommItemD = plantCommunity.find('.item-plant-d');
    const planICommItemE = plantCommunity.find('.item-plant-e');

    const sceneArea1 = $('.scene-layer-area1');

    const sceneLayer1 = $('.scene-layer-area1 .scene-layer1');
    const sceneLayer2 = $('.scene-layer-area1 .scene-layer2');
    const sceneLayer3 = $('.scene-layer-area1 .scene-layer3');
    const sceneLayer4 = $('.scene-layer-area1 .scene-layer4');
    const sceneLayer5 = $('.scene-layer-area1 .scene-layer5');

    const plantBg = $('.plant-background');
    const btnNext = $('.bottom-button-wrap .button-next');

    mlangBtnClose.on('click', function (e) {
        audioGoal2.pause(); // 화면진입 닫기 시 오디오 멈춤
        mlang.removeClass('active');

        sceneLayer1.addClass('active');

        var timeouts = [];

        timeouts.push(
            setTimeout(function () {
                // 가이드 풍선 도움말 활성화
                $('.guide-balloon-tip-wrap1-1').addClass('active');
            }, 2000),
        );

        timeouts.push(
            setTimeout(function () {
                // 화면진입 닫기 시 오디오 멈춤
                audioGoal2.pause();
                audioGoal2.currentTime = 0;

                // 가이드 오디오 재생
                audioAct1_01.play();
            }, 3000),
        );

        timeouts.push(
            setTimeout(function () {
                // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                $('.guide-balloon-tip-wrap1-1').removeClass('active');
                audioAct1_01.pause();
                audioAct1_01.currentTime = 0;
            }, 11000),
        );

        timeouts.push(
            setTimeout(function () {
                planRboxItem.removeClass('color active');
                planICommItem.removeClass('color active');
                planRboxItemA.addClass('color');
                planICommItemA.addClass('color');

                plantBg.addClass('active');
                btnNext.addClass('active');
            }, 12000),
        );

        timeouts.push(
            setTimeout(function () {
                sceneArea1.addClass('chapter1');
                $('.gesture-plant-community-finger1').addClass('active');
            }, 13000),
        );

        setTimeout(function () {
            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts = [];
        }, 14000);
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
            clickGoal.volume = 0; // 활동시작 클릭 오디오 볼륨 [0-1]
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
            audioAct1_10.volume = 0;

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

            resultAudio1_01.volume = 0;
            resultAudio1_02.volume = 0;

            resultAudio2_01.volume = 0;
            resultAudio2_02.volume = 0;
            resultAudio2_03.volume = 0;

            resultAudio3_01.volume = 0;
            resultAudio3_02.volume = 0;
            resultAudio3_03.volume = 0;
            resultAudio3_04.volume = 0;

            correctSound.volume = 0;
            wrongSound.volume = 0;
            moveSound.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            clickGoal.volume = 1; // 활동시작 클릭 오디오 볼륨 [0-1]
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
            audioAct1_10.volume = 1;

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

            resultAudio1_01.volume = 1;
            resultAudio1_02.volume = 1;

            resultAudio2_01.volume = 1;
            resultAudio2_02.volume = 1;
            resultAudio2_03.volume = 1;

            resultAudio3_01.volume = 1;
            resultAudio3_02.volume = 1;
            resultAudio3_03.volume = 1;
            resultAudio3_04.volume = 1;

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

    const plantPoint = plantCommunity.find('.item-plant-point');
    const plantOuter = plantCommunity.find('.item-plant-outer');

    var timeouts2 = [];

    // 방형구 안 꽃 클릭시
    plantPoint.on('click', function () {
        const thisB = $(this);
        if (plantBg.hasClass('active')) {
            timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts2 = [];
        }
        if (sceneArea1.hasClass('chapter1')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('item-plant-a')) {
                    if (!thisB.hasClass('active')) {
                        $('.popup-plant-alert').removeClass('active');
                        thisB.addClass('active');
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-A1"]').val(planCnt);
                        if (planCnt === 4) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger1').removeClass('active');
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-2').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct1_02.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-2').removeClass('active');
                                    audioAct1_02.pause();
                                    audioAct1_02.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    }
                } else {
                    if ($('.popup-plant-alert1').hasClass('active')) {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        $('.popup-plant-alert1').removeClass('active');
                        // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert1').removeClass('active');
                            }, 2000),
                        );
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                        $('.popup-plant-alert').removeClass('active');
                        $('.popup-plant-alert1').addClass('active');

                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert1').removeClass('active');
                            }, 2000),
                        );
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter2')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('item-plant-b')) {
                    if (!thisB.hasClass('active')) {
                        $('.popup-plant-alert').removeClass('active');
                        thisB.addClass('active');
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-B1"]').val(planCnt);
                        if (planCnt === 20) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger2').removeClass('active');
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-4').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct1_04.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-4').removeClass('active');
                                    audioAct1_04.pause();
                                    audioAct1_04.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    }
                } else {
                    if ($('.popup-plant-alert2').hasClass('active')) {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        $('.popup-plant-alert2').removeClass('active');
                        // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert2').removeClass('active');
                            }, 2000),
                        );
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                        $('.popup-plant-alert').removeClass('active');
                        $('.popup-plant-alert2').addClass('active');

                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert2').removeClass('active');
                            }, 2000),
                        );
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter3')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('item-plant-c')) {
                    if (!thisB.hasClass('active')) {
                        $('.popup-plant-alert').removeClass('active');
                        thisB.addClass('active');
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-C1"]').val(planCnt);
                        if (planCnt === 8) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger3').removeClass('active');
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-6').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct1_06.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-6').removeClass('active');
                                    audioAct1_06.pause();
                                    audioAct1_06.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    }
                } else {
                    if ($('.popup-plant-alert3').hasClass('active')) {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        $('.popup-plant-alert3').removeClass('active');
                        // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert3').removeClass('active');
                            }, 2000),
                        );
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                        $('.popup-plant-alert').removeClass('active');
                        $('.popup-plant-alert3').addClass('active');

                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert3').removeClass('active');
                            }, 2000),
                        );
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter4')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('item-plant-d')) {
                    if (!thisB.hasClass('active')) {
                        $('.popup-plant-alert').removeClass('active');
                        thisB.addClass('active');
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-D1"]').val(planCnt);
                        if (planCnt === 6) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger4').removeClass('active');
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-8').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct1_08.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-8').removeClass('active');
                                    audioAct1_08.pause();
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    }
                } else {
                    if ($('.popup-plant-alert4').hasClass('active')) {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        $('.popup-plant-alert4').removeClass('active');
                        // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert4').removeClass('active');
                            }, 2000),
                        );
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                        $('.popup-plant-alert').removeClass('active');
                        $('.popup-plant-alert4').addClass('active');

                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert4').removeClass('active');
                            }, 2000),
                        );
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter5')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('item-plant-e')) {
                    if (!thisB.hasClass('active')) {
                        $('.popup-plant-alert').removeClass('active');
                        thisB.addClass('active');
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-E1"]').val(planCnt);
                        if (planCnt === 12) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger5').removeClass('active');
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-10').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct1_10.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap1-10').removeClass('active');
                                    audioAct1_10.pause();
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    }
                } else {
                    if ($('.popup-plant-alert5').hasClass('active')) {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        $('.popup-plant-alert5').removeClass('active');
                        // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert5').removeClass('active');
                            }, 2000),
                        );
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();
                        // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                        $('.popup-plant-alert').removeClass('active');
                        $('.popup-plant-alert5').addClass('active');

                        timeouts2.push(
                            setTimeout(function () {
                                $('.popup-plant-alert5').removeClass('active');
                            }, 2000),
                        );
                    }
                }
            }
        }
    });

    // 방형구 바깥 꽃 클릭시
    plantOuter.on('click', function () {
        // 모든 기존 타임아웃을 제거
        if (plantBg.hasClass('active')) {
            timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts2 = [];
        }
        if (sceneArea1.hasClass('chapter1')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert1').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert1').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert1').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert1').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert1').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter2')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert2').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert2').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert2').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert2').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert2').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter3')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert3').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert3').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert3').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert3').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert3').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter4')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert4').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert4').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert4').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert4').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert4').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter5')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert5').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert5').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 다른 처리를 하지 않고 바로 타임아웃만 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert5').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert5').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert5').removeClass('active');
                        }, 2000),
                    );
                }
            }
        }
    });

    // 방형구 플랜 클릭시
    plantBg.on('click', function () {
        // 모든 기존 타임아웃을 제거
        if (plantBg.hasClass('active')) {
            timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts2 = [];
        }
        if (sceneArea1.hasClass('chapter1')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert1').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert1').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 바로 타임아웃 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert1').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert1').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert1').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter2')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert2').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert2').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 바로 타임아웃 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert2').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert2').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert2').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter3')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert3').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert3').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 바로 타임아웃 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert3').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert3').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert3').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter4')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert4').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert4').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 바로 타임아웃 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert4').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert4').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert4').removeClass('active');
                        }, 2000),
                    );
                }
            }
        } else if (sceneArea1.hasClass('chapter5')) {
            if (plantBg.hasClass('active')) {
                if ($('.popup-plant-alert5').hasClass('active')) {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    $('.popup-plant-alert5').removeClass('active');
                    // 'popup-plant-alert1'이 이미 active 상태라면 바로 타임아웃 설정
                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert5').removeClass('active');
                        }, 2000),
                    );
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.play();
                    // 'popup-plant-alert1'이 비활성 상태일 때만 활성화
                    $('.popup-plant-alert').removeClass('active');
                    $('.popup-plant-alert5').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            $('.popup-plant-alert5').removeClass('active');
                        }, 2000),
                    );
                }
            }
        }
    });

    // 방형구 클릭시
    const boxRectangle = $('.box-rectangle');
    boxRectangle.on('click', function () {
        const thisB = $(this);

        if (sceneArea1.hasClass('chapter6')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('on')) {
                    thisB.removeClass('on');
                    if (thisB.hasClass('box-rectangle5')) {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();

                        thisB.addClass('active');
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-A2"]').val(planCnt);
                        if (planCnt === 1) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger6').removeClass('active');

                            timeouts2.push(
                                setTimeout(function () {
                                    console.log('체크');
                                    $('.guide-balloon-tip-wrap2-2').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct2_02.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-2').removeClass('active');
                                    audioAct2_02.pause();
                                    audioAct2_02.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();

                        // $('.popup-plant-rectangle1').addClass('active');

                        // timeouts2.push(
                        //     setTimeout(function () {
                        //         $('.popup-plant-rectangle1').removeClass('active');
                        //     }, 2000),
                        // );
                        // setTimeout(function () {
                        //     timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        //     timeouts2 = [];
                        // }, 2100);
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter7')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('on')) {
                    thisB.removeClass('on');
                    if (
                        thisB.hasClass('box-rectangle1') ||
                        thisB.hasClass('box-rectangle2') ||
                        thisB.hasClass('box-rectangle3') ||
                        thisB.hasClass('box-rectangle4')
                    ) {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        thisB.removeClass('on');
                        thisB.addClass('active');
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-B2"]').val(planCnt);
                        if (planCnt === 4) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger7').removeClass('active');

                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-4').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct2_04.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-4').removeClass('active');
                                    audioAct2_04.pause();
                                    audioAct2_04.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();

                        // $('.popup-plant-rectangle1').addClass('active');

                        // timeouts2.push(
                        //     setTimeout(function () {
                        //         $('.popup-plant-rectangle1').removeClass('active');
                        //     }, 2000),
                        // );
                        // setTimeout(function () {
                        //     timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        //     timeouts2 = [];
                        // }, 2100);
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter8')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('on')) {
                    thisB.removeClass('on');
                    if (thisB.hasClass('box-rectangle3') || thisB.hasClass('box-rectangle4')) {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        thisB.removeClass('on');
                        thisB.addClass('active');
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-C2"]').val(planCnt);
                        if (planCnt === 2) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger8').removeClass('active');

                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-6').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct2_06.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-6').removeClass('active');
                                    audioAct2_06.pause();
                                    audioAct2_06.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    } else {
                        correctSound.pause();
                        correctSound.currentTime = 0;

                        wrongSound.play();

                        // $('.popup-plant-rectangle1').addClass('active');

                        // timeouts2.push(
                        //     setTimeout(function () {
                        //         $('.popup-plant-rectangle1').removeClass('active');
                        //     }, 2000),
                        // );
                        // setTimeout(function () {
                        //     timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        //     timeouts2 = [];
                        // }, 2100);
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter9')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('on')) {
                    thisB.removeClass('on');
                    if (thisB.hasClass('box-rectangle2')) {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        thisB.removeClass('on');
                        thisB.addClass('active');
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-D2"]').val(planCnt);
                        console.log(planCnt);
                        if (planCnt === 1) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger9').removeClass('active');

                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-8').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct2_08.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-8').removeClass('active');
                                    audioAct2_08.pause();
                                    audioAct2_08.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    } else {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;
                        wrongSound.play();

                        // $('.popup-plant-rectangle1').addClass('active');

                        // timeouts2.push(
                        //     setTimeout(function () {
                        //         $('.popup-plant-rectangle1').removeClass('active');
                        //     }, 2000),
                        // );
                        // setTimeout(function () {
                        //     timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        //     timeouts2 = [];
                        // }, 2100);
                    }
                }
            }
        } else if (sceneArea1.hasClass('chapter10')) {
            if (plantBg.hasClass('active')) {
                if (thisB.hasClass('on')) {
                    if (thisB.hasClass('box-rectangle1') || thisB.hasClass('box-rectangle5')) {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;

                        correctSound.currentTime = 0;
                        correctSound.play();
                        thisB.removeClass('on');
                        thisB.addClass('active');
                        ++planCnt;
                        $('.button-number-list [data-value="SR1-1-E2"]').val(planCnt);
                        if (planCnt === 2) {
                            plantBg.removeClass('active');
                            $('.gesture-plant-community-finger10').removeClass('active');

                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-10').addClass('active');
                                }, 1000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    audioAct2_10.play();
                                }, 2000),
                            );
                            timeouts2.push(
                                setTimeout(function () {
                                    $('.guide-balloon-tip-wrap2-10').removeClass('active');
                                    audioAct2_10.pause();
                                    audioAct2_10.currentTime = 0;
                                }, 7000),
                            );
                            setTimeout(function () {
                                btnNext.addClass('next');
                                $('.gesture-next-finger').addClass('active');
                                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                                timeouts2 = [];
                            }, 7200);
                        }
                    } else {
                        wrongSound.pause();
                        wrongSound.currentTime = 0;
                        wrongSound.play();

                        // $('.popup-plant-rectangle1').addClass('active');

                        // timeouts2.push(
                        //     setTimeout(function () {
                        //         $('.popup-plant-rectangle1').removeClass('active');
                        //     }, 2000),
                        // );
                        // setTimeout(function () {
                        //     timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        //     timeouts2 = [];
                        // }, 2100);
                    }
                }
            }
        }
    });

    // planCnt=2;

    // 다음
    btnNext.on('click', function () {
        const thisB = $(this);
        if (plantBg.hasClass('active')) {
            timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
            timeouts2 = [];
        }
        if (sceneArea1.hasClass('chapter1')) {
            if (planCnt === 4) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap1-3').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct1_02.pause();
                            audioAct1_02.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct1_03.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap1-3').removeClass('active');
                            audioAct1_03.pause();
                            audioAct1_03.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemB.addClass('color');
                            planICommItemB.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger2').addClass('active');
                            sceneArea1.addClass('chapter2');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 14000);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-alert1').removeClass('active');
                $('.popup-plant-find1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-find1').removeClass('active');
                    }, 2000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 2100);
            }
        } else if (sceneArea1.hasClass('chapter2')) {
            if (planCnt === 20) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;
                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap1-5').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct1_04.pause();
                            audioAct1_04.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct1_05.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap1-5').removeClass('active');
                            audioAct1_05.pause();
                            audioAct1_05.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemC.addClass('color');
                            planICommItemC.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger3').addClass('active');
                            sceneArea1.addClass('chapter3');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 14000);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-alert2').removeClass('active');
                $('.popup-plant-find2').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-find2').removeClass('active');
                    }, 2000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 2100);
            }
        } else if (sceneArea1.hasClass('chapter3')) {
            if (planCnt === 8) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap1-7').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct1_06.pause();
                            audioAct1_06.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct1_07.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap1-7').removeClass('active');
                            audioAct1_07.pause();
                            audioAct1_07.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemD.addClass('color');
                            planICommItemD.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger4').addClass('active');
                            sceneArea1.addClass('chapter4');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 14000);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-alert3').removeClass('active');
                $('.popup-plant-find3').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-find3').removeClass('active');
                    }, 2000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 2100);
            }
        } else if (sceneArea1.hasClass('chapter4')) {
            if (planCnt === 6) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap1-9').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct1_08.pause();
                            audioAct1_08.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct1_09.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap1-9').removeClass('active');
                            audioAct1_09.pause();
                            audioAct1_09.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemE.addClass('color');
                            planICommItemE.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger5').addClass('active');
                            sceneArea1.addClass('chapter5');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 14000);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-alert4').removeClass('active');
                $('.popup-plant-find4').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-find4').removeClass('active');
                    }, 2000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 2100);
            }
        } else if (sceneArea1.hasClass('chapter5')) {
            if (planCnt === 12) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.table-input-box-wrap .title-sort-wrap .title-color .text2').addClass('active');
                    $('.table-input-system .button-number-list2').addClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap2-1').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct1_10.pause();
                            audioAct1_10.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct2_01.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap2-1').removeClass('active');
                            audioAct2_01.pause();
                            audioAct2_01.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemA.addClass('color');
                            planICommItemA.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger6').addClass('active');
                            sceneArea1.addClass('chapter6');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        $('.box-rectangle5').addClass('on');
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 13010);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-alert5').removeClass('active');
                $('.popup-plant-find5').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-find5').removeClass('active');
                    }, 2000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 2100);
            }
        } else if (sceneArea1.hasClass('chapter6')) {
            if (planCnt === 1) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.box-rectangle').removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap2-3').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct2_02.pause();
                            audioAct2_02.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct2_03.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap2-3').removeClass('active');
                            audioAct2_03.pause();
                            audioAct2_03.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemB.addClass('color');
                            planICommItemB.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger7').addClass('active');
                            sceneArea1.addClass('chapter7');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        $('.box-rectangle1').addClass('on');
                        $('.box-rectangle2').addClass('on');
                        $('.box-rectangle3').addClass('on');
                        $('.box-rectangle4').addClass('on');
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 13010);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-rectangle1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-rectangle1').removeClass('active');
                    }, 3000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 3010);
            }
        } else if (sceneArea1.hasClass('chapter7')) {
            if (planCnt === 4) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.box-rectangle').removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap2-5').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct2_04.pause();
                            audioAct2_04.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct2_05.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap2-5').removeClass('active');
                            audioAct2_05.pause();
                            audioAct2_05.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemC.addClass('color');
                            planICommItemC.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger8').addClass('active');
                            sceneArea1.addClass('chapter8');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        $('.box-rectangle3').addClass('on');
                        $('.box-rectangle4').addClass('on');
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 13010);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-rectangle1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-rectangle1').removeClass('active');
                    }, 3000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 3010);
            }
        } else if (sceneArea1.hasClass('chapter8')) {
            if (planCnt === 2) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.box-rectangle').removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap2-7').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct2_06.pause();
                            audioAct2_06.currentTime = 0;

                            // 가이드 오디오 재생
                            audioAct2_07.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap2-7').removeClass('active');
                            audioAct2_07.pause();
                            audioAct2_07.currentTime = 0;
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemD.addClass('color');
                            planICommItemD.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger9').addClass('active');
                            sceneArea1.addClass('chapter9');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        $('.box-rectangle2').addClass('on');
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 13010);
                }
            } else {
                wrongSound.pause();
                wrongSound.currentTime = 0;
                wrongSound.play();
                $('.popup-plant-rectangle1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-rectangle1').removeClass('active');
                    }, 3000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 3010);
            }
        } else if (sceneArea1.hasClass('chapter9')) {
            if (planCnt === 1) {
                if (thisB.hasClass('next')) {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.box-rectangle').removeClass('active');

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap2-9').addClass('active');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            audioAct2_08.pause();

                            // 가이드 오디오 재생
                            audioAct2_09.play();
                        }, 3000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItem.removeClass('color');
                            planICommItem.removeClass('color');

                            // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                            $('.guide-balloon-tip-wrap2-9').removeClass('active');
                            audioAct2_09.pause();
                        }, 11000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planRboxItemE.addClass('color');
                            planICommItemE.addClass('color');
                        }, 12000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            planCnt = 0;
                            $('.gesture-plant-community-finger10').addClass('active');
                            sceneArea1.addClass('chapter10');
                            plantBg.addClass('active');
                            btnNext.addClass('active');
                        }, 13000),
                    );

                    setTimeout(function () {
                        $('.box-rectangle1').addClass('on');
                        $('.box-rectangle5').addClass('on');
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 13010);
                }
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.play();
                $('.popup-plant-rectangle1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-rectangle1').removeClass('active');
                    }, 3000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 3010);
            }
        } else if (sceneArea1.hasClass('chapter10')) {
            if (planCnt === 2) {
                if (thisB.hasClass('next')) {
                    audioAct2_10.pause();
                    audioAct2_10.currentTime = 0;

                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.play();

                    for (var i = 0; i <= 20; i++) {
                        sceneArea1.removeClass('chapter' + i);
                    }

                    $('.gesture-next-finger').removeClass('active');
                    thisB.removeClass('active next');

                    planRboxItem.addClass('color');
                    planICommItem.addClass('color');

                    planRboxItem.removeClass('active');
                    planICommItem.removeClass('active');

                    plantBg.removeClass('active');
                    btnNext.removeClass('active');

                    $('.box-rectangle').removeClass('active');

                    sceneLayer1.removeClass('active');

                    planCnt = 0;

                    timeouts2.push(
                        setTimeout(function () {
                            sceneArea1.addClass('result1');
                        }, 1000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 풍선 도움말 활성화
                            $('.guide-balloon-tip-wrap3-1').addClass('active');
                            // console.log('체킹3-1');
                        }, 2000),
                    );

                    timeouts2.push(
                        setTimeout(function () {
                            // 가이드 오디오 재생
                            resultAudio1_01.play();
                            //console.log('test1');
                            // 화면2 보여짐
                            sceneLayer2.addClass('active');
                        }, 3000),
                    );

                    // timeouts2.push(
                    //     setTimeout(function () {
                    //         // 가이드 오디오 초기화
                    //         resultAudio1_01.pause();
                    //         resultAudio1_01.currentTime = 0;
                    //         //console.log('test2');
                    //     }, 24000),
                    // );

                    timeouts2.push(
                        setTimeout(function () {
                            // 화면진입 닫기 시 오디오 멈춤
                            $('.scene-layer2 .icon-helper').addClass('on');
                            $('.gesture-helper-finger').addClass('active');

                            // 가이드 오디오 재생
                            // resultAudio1_01.play();
                        }, 4000),
                    );

                    // timeouts2.push(
                    //     setTimeout(function () {
                    //         // 가이드 오디오 재생 후 가이드 풍선 도움말 비활성화
                    //         $('.guide-balloon-tip-wrap3-1').removeClass('active');
                    //         resultAudio1_01.pause();
                    //     }, 22000),
                    // );

                    // timeouts2.push(
                    //     setTimeout(function () {
                    //         $('.scene-layer2 .icon-helper').addClass('on');
                    //         $('.gesture-helper-finger').addClass('active');
                    //     }, 23000),
                    // );

                    setTimeout(function () {
                        timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts2 = [];
                    }, 4010);
                }
            } else {
                wrongSound.pause();
                wrongSound.currentTime = 0;
                wrongSound.play();
                $('.popup-plant-rectangle1').addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.popup-plant-rectangle1').removeClass('active');
                    }, 3000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 3010);
            }
        } else if (sceneArea1.hasClass('result1')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                sceneLayer2.removeClass('active');
                sceneArea1.removeClass('result1');
                timeouts2.push(
                    setTimeout(function () {
                        sceneLayer3.addClass('active');
                        sceneArea1.addClass('result2');
                        sceneArea1.addClass('result2-1');
                    }, 300),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-1').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio1_01.pause();
                        resultAudio1_01.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio2_01.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-1').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio2_01.pause();
                        resultAudio2_01.currentTime = 0;
                    }, 9000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 10000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 12000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 12010);
            }
        } else if (sceneArea1.hasClass('result2-1')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('[data-value="SR33-1-AR1"]').val('');
                $('[data-value="SR33-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR2"]').val('');
                $('[data-value="SR33-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR3"]').val('');

                $('[data-value="SR33-1-BR1"]').val('');
                $('[data-value="SR33-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR2"]').val('');
                $('[data-value="SR33-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR3"]').val('');

                $('[data-value="SR33-1-CR1"]').val('');
                $('[data-value="SR33-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR2"]').val('');
                $('[data-value="SR33-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR3"]').val('');

                $('[data-value="SR33-1-DR1"]').val('');
                $('[data-value="SR33-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR2"]').val('');
                $('[data-value="SR33-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR3"]').val('');

                $('[data-value="SR33-1-ER1"]').val('');
                $('[data-value="SR33-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER2"]').val('');
                $('[data-value="SR33-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER3"]').val('');

                $('[data-value="SR33-1-TR1"]').val('');

                $('.scene-layer3 .select-view-round-box').removeClass('select-view1');
                $('.scene-layer3 .select-view-round-box').addClass('select-view2');
                $('.data-title-sl2-head').text('빈도');

                sceneArea1.removeClass('result2-1');
                sceneArea1.addClass('result2-2');

                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-2').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio2_01.pause();
                        resultAudio2_01.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio2_02.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-2').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio2_02.pause();
                        resultAudio2_02.currentTime = 0;
                    }, 9000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 10000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 12000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 12010);
            }
        } else if (sceneArea1.hasClass('result2-2')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('[data-value="SR33-1-AR1"]').val('');
                $('[data-value="SR33-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR2"]').val('');
                $('[data-value="SR33-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR3"]').val('');

                $('[data-value="SR33-1-BR1"]').val('');
                $('[data-value="SR33-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR2"]').val('');
                $('[data-value="SR33-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR3"]').val('');

                $('[data-value="SR33-1-CR1"]').val('');
                $('[data-value="SR33-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR2"]').val('');
                $('[data-value="SR33-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR3"]').val('');

                $('[data-value="SR33-1-DR1"]').val('');
                $('[data-value="SR33-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR2"]').val('');
                $('[data-value="SR33-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR3"]').val('');

                $('[data-value="SR33-1-ER1"]').val('');
                $('[data-value="SR33-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER2"]').val('');
                $('[data-value="SR33-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER3"]').val('');

                $('[data-value="SR33-1-TR1"]').val('');

                $('.scene-layer3 .select-view-round-box').removeClass('select-view2');
                $('.scene-layer3 .select-view-round-box').addClass('select-view3');
                $('.data-title-sl2-head').text('피도');

                sceneArea1.removeClass('result2-2');
                sceneArea1.addClass('result2-3');

                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-3').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio2_02.pause();
                        resultAudio2_02.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio2_03.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap4-3').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio2_03.pause();
                        resultAudio2_03.currentTime = 0;
                    }, 9000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 10000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 12000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 12010);
            }
        } else if (sceneArea1.hasClass('result2-3')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('[data-value="SR33-1-AR1"]').val('');
                $('[data-value="SR33-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR2"]').val('');
                $('[data-value="SR33-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-AR3"]').val('');

                $('[data-value="SR33-1-BR1"]').val('');
                $('[data-value="SR33-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR2"]').val('');
                $('[data-value="SR33-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-BR3"]').val('');

                $('[data-value="SR33-1-CR1"]').val('');
                $('[data-value="SR33-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR2"]').val('');
                $('[data-value="SR33-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-CR3"]').val('');

                $('[data-value="SR33-1-DR1"]').val('');
                $('[data-value="SR33-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR2"]').val('');
                $('[data-value="SR33-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR33-1-DR3"]').val('');

                $('[data-value="SR33-1-ER1"]').val('');
                $('[data-value="SR33-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER2"]').val('');
                $('[data-value="SR33-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR33-1-ER3"]').val('');

                $('[data-value="SR33-1-TR1"]').val('');

                $('.scene-layer4 .data-title-sl2-head').html('상대<br />밀도<br />(%)');

                sceneArea1.removeClass('result2-3');
                sceneArea1.addClass('result3-1');

                sceneLayer3.removeClass('active');
                sceneLayer4.addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 풍선 도움말 활성화
                        $('.guide-balloon-tip-wrap5-1').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 화면진입 닫기 시 오디오 멈춤
                        resultAudio2_03.pause();
                        resultAudio2_03.currentTime = 0;

                        // 가이드 오디오 재생
                        resultAudio3_01.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-1').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio3_01.pause();
                        resultAudio3_01.currentTime = 0;
                    }, 7000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 8000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 10000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 10010);
            }
        } else if (sceneArea1.hasClass('result3-1')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('.data-info-table4-1 .select-view-round-box').removeClass('select-view1');
                $('.data-info-table4-2 .select-view-round-box').removeClass('select-view1');
                $('.data-info-table4-1 .select-view-round-box').addClass('select-view2');
                $('.data-info-table4-2 .select-view-round-box').addClass('select-view2');

                $('[data-value="SR43-1-AR1"]').val('');
                $('[data-value="SR43-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR2"]').val('');
                $('[data-value="SR43-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR3"]').val('');

                $('[data-value="SR43-1-BR1"]').val('');
                $('[data-value="SR43-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR2"]').val('');
                $('[data-value="SR43-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR3"]').val('');

                $('[data-value="SR43-1-CR1"]').val('');
                $('[data-value="SR43-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR2"]').val('');
                $('[data-value="SR43-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR3"]').val('');

                $('[data-value="SR43-1-DR1"]').val('');
                $('[data-value="SR43-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR2"]').val('');
                $('[data-value="SR43-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR3"]').val('');

                $('[data-value="SR43-1-ER1"]').val('');
                $('[data-value="SR43-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER2"]').val('');
                $('[data-value="SR43-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER3"]').val('');

                $('[data-value="SR43-1-TR1"]').val('');

                $('.scene-layer3 .select-view-round-box').removeClass('select-view1');
                $('.scene-layer3 .select-view-round-box').addClass('select-view2');
                $('.scene-layer4 .data-title-sl2-head').html('상대<br />빈도<br />(%)');

                sceneArea1.removeClass('result3-1');
                sceneArea1.addClass('result3-2');

                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-2').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio3_01.pause();
                        resultAudio3_01.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio3_02.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-2').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio3_02.pause();
                        resultAudio3_02.currentTime = 0;
                    }, 7000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 8000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 10000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 10010);
            }
        } else if (sceneArea1.hasClass('result3-2')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('.data-info-table4-1 .select-view-round-box').removeClass('select-view2');
                $('.data-info-table4-2 .select-view-round-box').removeClass('select-view2');
                $('.data-info-table4-1 .select-view-round-box').addClass('select-view3');
                $('.data-info-table4-2 .select-view-round-box').addClass('select-view3');

                $('[data-value="SR43-1-AR1"]').val('');
                $('[data-value="SR43-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR2"]').val('');
                $('[data-value="SR43-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR3"]').val('');

                $('[data-value="SR43-1-BR1"]').val('');
                $('[data-value="SR43-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR2"]').val('');
                $('[data-value="SR43-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR3"]').val('');

                $('[data-value="SR43-1-CR1"]').val('');
                $('[data-value="SR43-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR2"]').val('');
                $('[data-value="SR43-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR3"]').val('');

                $('[data-value="SR43-1-DR1"]').val('');
                $('[data-value="SR43-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR2"]').val('');
                $('[data-value="SR43-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR3"]').val('');

                $('[data-value="SR43-1-ER1"]').val('');
                $('[data-value="SR43-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER2"]').val('');
                $('[data-value="SR43-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER3"]').val('');

                $('[data-value="SR43-1-TR1"]').val('');

                $('.scene-layer3 .select-view-round-box').removeClass('select-view1');
                $('.scene-layer3 .select-view-round-box').addClass('select-view2');
                $('.scene-layer4 .data-title-sl2-head').html('상대<br />피도<br />(%)');

                sceneArea1.removeClass('result3-2');
                sceneArea1.addClass('result3-3');

                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-3').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio3_02.pause();
                        resultAudio3_02.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio3_03.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-3').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio3_03.pause();
                        resultAudio3_03.currentTime = 0;
                    }, 7000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').addClass('check');
                    }, 8000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.select-view-round-box').removeClass('check');
                    }, 10000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 10010);
            }
        } else if (sceneArea1.hasClass('result3-3')) {
            if (thisB.hasClass('next')) {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.play();

                $('.gesture-next-finger').removeClass('active');
                thisB.removeClass('active next');

                $('.data-info-table4-1 .select-view-round-box').removeClass('select-view2');
                $('.data-info-table4-2 .select-view-round-box').removeClass('select-view2');
                $('.data-info-table4-1 .select-view-round-box').addClass('select-view3');
                $('.data-info-table4-2 .select-view-round-box').addClass('select-view3');

                $('[data-value="SR43-1-AR1"]').val('');
                $('[data-value="SR43-1-AR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR2"]').val('');
                $('[data-value="SR43-1-AR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-AR3"]').val('');

                $('[data-value="SR43-1-BR1"]').val('');
                $('[data-value="SR43-1-BR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR2"]').val('');
                $('[data-value="SR43-1-BR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-BR3"]').val('');

                $('[data-value="SR43-1-CR1"]').val('');
                $('[data-value="SR43-1-CR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR2"]').val('');
                $('[data-value="SR43-1-CR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-CR3"]').val('');

                $('[data-value="SR43-1-DR1"]').val('');
                $('[data-value="SR43-1-DR1"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR2"]').val('');
                $('[data-value="SR43-1-DR2"]').removeAttr('readonly');
                $('[data-value="SR43-1-DR3"]').val('');

                $('[data-value="SR43-1-ER1"]').val('');
                $('[data-value="SR43-1-ER1"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER2"]').val('');
                $('[data-value="SR43-1-ER2"]').removeAttr('readonly');
                $('[data-value="SR43-1-ER3"]').val('');

                $('[data-value="SR43-1-TR1"]').val('');

                $('.scene-layer3 .select-view-round-box').removeClass('select-view1');
                $('.scene-layer3 .select-view-round-box').addClass('select-view2');
                $('.scene-layer4 .data-title-sl2-head').html('상대<br />피도<br />(%)');

                sceneArea1.removeClass('result3-3');
                sceneArea1.addClass('result4-1');

                sceneLayer4.removeClass('active');
                sceneLayer5.addClass('active');

                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-4').addClass('active');
                    }, 1000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        // 가이드 오디오1_01 닫기
                        resultAudio3_03.pause();
                        resultAudio3_03.currentTime = 0;

                        // 가이드 오디오2_02 재생
                        resultAudio3_04.play();
                    }, 2000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-balloon-tip-wrap5-4').removeClass('active');
                        // 가이드 오디오1_01 닫기
                        resultAudio3_04.pause();
                        resultAudio3_04.currentTime = 0;
                    }, 9000),
                );
                timeouts2.push(
                    setTimeout(function () {
                        $('.guide-info-tip-wrap5-1').addClass('active');
                    }, 10000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 10010);
            }
        }
    });

    // 결과1
    $('.scene-layer2 .icon-helper').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('on')) {
            $('.gesture-helper-finger').removeClass('active');
            resultAudio1_01.pause();
            resultAudio1_01.currentTime = 0;
            // thisB.removeClass('on');
            $('.guide-info-tip-wrap2-1').addClass('active');
            resultAudio1_02.play();
        } else {
            $('.guide-info-tip-wrap2-1').addClass('active');
            resultAudio1_02.play();
        }
    });

    const btnCloseGits21 = $('.button-close-gitw2-1');

    btnCloseGits21.on('click', function () {
        const thisB = $(this);

        thisB.closest('.guide-info-tip-wrap2-1').removeClass('active');
        resultAudio1_02.pause();
        resultAudio1_02.currentTime = 0;

        if ($('.scene-layer2 .icon-helper').hasClass('on')) {
            $('.guide-balloon-tip-wrap3-1').removeClass('active');

            $('.guide-info-tip-wrap2-0').addClass('active');

            $('.scene-layer2 .icon-helper').removeClass('on');

            $('.table-td-effect1').addClass('active');

            timeouts2.push(
                setTimeout(function () {
                    $('.table-td-effect1').removeClass('active');
                }, 3000),
            );

            timeouts2.push(
                setTimeout(function () {
                    $('.result2-box-view').addClass('on');
                }, 3300),
            );

            setTimeout(function () {
                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts2 = [];
            }, 3310);
        }
    });

    $('.scene-layer2 .input-data').on('input', function () {
        const thisB = $(this);
        // 특정 데이터 값에 대해 처리
        if (thisB.attr('data-value') === 'SR2-1-BR4') {
            if (thisB.val() === '20') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-BR5') {
            if (thisB.val() === '0.02') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-CR4') {
            if (thisB.val() === '8') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-CR5') {
            if (thisB.val() === '0.015') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-DR4') {
            if (thisB.val() === '6') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-DR5') {
            if (thisB.val() === '0.01') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-ER4') {
            if (thisB.val() === '12') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-ER5') {
            if (thisB.val() === '0.015') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        }

        // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
        const valBR4 = parseFloat($('[data-value="SR2-1-BR4"]').val());
        const valBR5 = parseFloat($('[data-value="SR2-1-BR5"]').val());

        if (valBR4 === 20 && valBR5 === 0.02) {
            const valBR6 = valBR4 * valBR5;
            $('[data-value="SR2-1-BR6"]').val(valBR6.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
        }

        // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
        const valCR4 = parseFloat($('[data-value="SR2-1-CR4"]').val());
        const valCR5 = parseFloat($('[data-value="SR2-1-CR5"]').val());

        if (valCR4 === 8 && valCR5 === 0.015) {
            const valCR6 = valCR4 * valCR5;
            $('[data-value="SR2-1-CR6"]').val(valCR6.toFixed(2)); // 계산 결과를 소수점 2자리로 설정
        }

        // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
        const valDR4 = parseFloat($('[data-value="SR2-1-DR4"]').val());
        const valDR5 = parseFloat($('[data-value="SR2-1-DR5"]').val());

        if (valDR4 === 6 && valDR5 === 0.01) {
            const valDR6 = valDR4 * valDR5;
            $('[data-value="SR2-1-DR6"]').val(valDR6.toFixed(2)); // 계산 결과를 소수점 2자리로 설정
        }

        // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
        const valER4 = parseFloat($('[data-value="SR2-1-ER4"]').val());
        const valER5 = parseFloat($('[data-value="SR2-1-ER5"]').val());

        if (valER4 === 12 && valER5 === 0.015) {
            // 수정된 조건
            const valER6 = valER4 * valER5;
            $('[data-value="SR2-1-ER6"]').val(valER6.toFixed(2)); // 계산 결과를 소수점 2자리로 설정
        }

        // 모든 값이 올바르게 입력되었는지 확인
        if (
            valBR4 === 20 &&
            valBR5 === 0.02 &&
            valCR4 === 8 &&
            valCR5 === 0.015 &&
            valDR4 === 6 &&
            valDR5 === 0.01 &&
            valER4 === 12 &&
            valER5 === 0.015
        ) {
            btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

            timeouts2.push(
                setTimeout(function () {
                    btnNext.addClass('next');
                    $('.gesture-next-finger').addClass('active');
                }, 1000),
            );
            setTimeout(function () {
                timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts2 = [];
            }, 1010);
        }
    });

    $('.scene-layer2 .input-data').on('blur', function () {
        const thisB = $(this);

        if (thisB.attr('data-value') === 'SR2-1-BR4') {
            if (thisB.val() === '20') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-BR5') {
            if (thisB.val() === '0.02') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-CR4') {
            if (thisB.val() === '8') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-CR5') {
            if (thisB.val() === '0.015') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-DR4') {
            if (thisB.val() === '6') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-DR5') {
            if (thisB.val() === '0.01') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-ER4') {
            if (thisB.val() === '12') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'SR2-1-ER5') {
            if (thisB.val() === '0.015') {
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        }
    });

    // 결과2
    $('.scene-layer3 .input-data').on('input', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result2-1')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '20') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '8') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '6') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '12') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val21AR1 = parseFloat($('[data-value="SR33-1-AR1"]').val());
            const val21AR2 = parseFloat($('[data-value="SR33-1-AR2"]').val());

            if (val21AR1 === 4 && val21AR2 === 5) {
                const val21AR3 = val21AR1 / val21AR2;
                $('[data-value="SR33-1-AR3"]').val(val21AR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val21BR1 = parseFloat($('[data-value="SR33-1-BR1"]').val());
            const val21BR2 = parseFloat($('[data-value="SR33-1-BR2"]').val());

            if (val21BR1 === 20 && val21BR2 === 5) {
                const val21BR3 = val21BR1 / val21BR2;
                $('[data-value="SR33-1-BR3"]').val(val21BR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val21CR1 = parseFloat($('[data-value="SR33-1-CR1"]').val());
            const val21CR2 = parseFloat($('[data-value="SR33-1-CR2"]').val());

            if (val21CR1 === 8 && val21CR2 === 5) {
                const val21CR3 = val21CR1 / val21CR2;
                $('[data-value="SR33-1-CR3"]').val(val21CR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val21DR1 = parseFloat($('[data-value="SR33-1-DR1"]').val());
            const val21DR2 = parseFloat($('[data-value="SR33-1-DR2"]').val());

            if (val21DR1 === 6 && val21DR2 === 5) {
                const val21DR3 = val21DR1 / val21DR2;
                $('[data-value="SR33-1-DR3"]').val(val21DR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val21ER1 = parseFloat($('[data-value="SR33-1-ER1"]').val());
            const val21ER2 = parseFloat($('[data-value="SR33-1-ER2"]').val());

            if (val21ER1 === 12 && val21ER2 === 5) {
                // 수정된 조건
                const val21ER3 = val21ER1 / val21ER2;
                $('[data-value="SR33-1-ER3"]').val(val21ER3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val21AR1 === 4 &&
                val21AR2 === 5 &&
                val21BR1 === 20 &&
                val21BR2 === 5 &&
                val21CR1 === 8 &&
                val21CR2 === 5 &&
                val21DR1 === 6 &&
                val21DR2 === 5 &&
                val21ER1 === 12 &&
                val21ER2 === 5
            ) {
                const val21TR1 = 10;
                $('[data-value="SR33-1-TR1"]').val(val21TR1.toFixed(0));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        } else if (sceneArea1.hasClass('result2-2')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '1') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '1') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val22AR1 = parseFloat($('[data-value="SR33-1-AR1"]').val());
            const val22AR2 = parseFloat($('[data-value="SR33-1-AR2"]').val());

            if (val22AR1 === 1 && val22AR2 === 5) {
                const val22AR3 = val22AR1 / val22AR2;
                $('[data-value="SR33-1-AR3"]').val(val22AR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val22BR1 = parseFloat($('[data-value="SR33-1-BR1"]').val());
            const val22BR2 = parseFloat($('[data-value="SR33-1-BR2"]').val());

            if (val22BR1 === 4 && val22BR2 === 5) {
                const val22BR3 = val22BR1 / val22BR2;
                $('[data-value="SR33-1-BR3"]').val(val22BR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val22CR1 = parseFloat($('[data-value="SR33-1-CR1"]').val());
            const val22CR2 = parseFloat($('[data-value="SR33-1-CR2"]').val());

            if (val22CR1 === 2 && val22CR2 === 5) {
                const val22CR3 = val22CR1 / val22CR2;
                $('[data-value="SR33-1-CR3"]').val(val22CR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val22DR1 = parseFloat($('[data-value="SR33-1-DR1"]').val());
            const val22DR2 = parseFloat($('[data-value="SR33-1-DR2"]').val());

            if (val22DR1 === 1 && val22DR2 === 5) {
                const val22DR3 = val22DR1 / val22DR2;
                $('[data-value="SR33-1-DR3"]').val(val22DR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val22ER1 = parseFloat($('[data-value="SR33-1-ER1"]').val());
            const val22ER2 = parseFloat($('[data-value="SR33-1-ER2"]').val());

            if (val22ER1 === 2 && val22ER2 === 5) {
                // 수정된 조건
                const val22ER3 = val22ER1 / val22ER2;
                $('[data-value="SR33-1-ER3"]').val(val22ER3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val22AR1 === 1 &&
                val22AR2 === 5 &&
                val22BR1 === 4 &&
                val22BR2 === 5 &&
                val22CR1 === 2 &&
                val22CR2 === 5 &&
                val22DR1 === 1 &&
                val22DR2 === 5 &&
                val22ER1 === 2 &&
                val22ER2 === 5
            ) {
                const val22TR1 = 2;
                $('[data-value="SR33-1-TR1"]').val(val22TR1.toFixed(0));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        } else if (sceneArea1.hasClass('result2-3')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '0.04') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '0.4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '0.12') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '0.06') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '0.18') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val23AR1 = parseFloat($('[data-value="SR33-1-AR1"]').val());
            const val23AR2 = parseFloat($('[data-value="SR33-1-AR2"]').val());

            if (val23AR1 === 0.04 && val23AR2 === 5) {
                const val23AR3 = val23AR1 / val23AR2;
                $('[data-value="SR33-1-AR3"]').val(val23AR3.toFixed(3)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val23BR1 = parseFloat($('[data-value="SR33-1-BR1"]').val());
            const val23BR2 = parseFloat($('[data-value="SR33-1-BR2"]').val());

            if (val23BR1 === 0.4 && val23BR2 === 5) {
                const val23BR3 = val23BR1 / val23BR2;
                $('[data-value="SR33-1-BR3"]').val(val23BR3.toFixed(2)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val23CR1 = parseFloat($('[data-value="SR33-1-CR1"]').val());
            const val23CR2 = parseFloat($('[data-value="SR33-1-CR2"]').val());

            if (val23CR1 === 0.12 && val23CR2 === 5) {
                const val23CR3 = val23CR1 / val23CR2;
                $('[data-value="SR33-1-CR3"]').val(val23CR3.toFixed(3)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val23DR1 = parseFloat($('[data-value="SR33-1-DR1"]').val());
            const val23DR2 = parseFloat($('[data-value="SR33-1-DR2"]').val());

            if (val23DR1 === 0.06 && val23DR2 === 5) {
                const val23DR3 = val23DR1 / val23DR2;
                $('[data-value="SR33-1-DR3"]').val(val23DR3.toFixed(3)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val23ER1 = parseFloat($('[data-value="SR33-1-ER1"]').val());
            const val23ER2 = parseFloat($('[data-value="SR33-1-ER2"]').val());

            if (val23ER1 === 0.18 && val23ER2 === 5) {
                // 수정된 조건
                const val23ER3 = val23ER1 / val23ER2;
                $('[data-value="SR33-1-ER3"]').val(val23ER3.toFixed(3)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val23AR1 === 0.04 &&
                val23AR2 === 5 &&
                val23BR1 === 0.4 &&
                val23BR2 === 5 &&
                val23CR1 === 0.12 &&
                val23CR2 === 5 &&
                val23DR1 === 0.06 &&
                val23DR2 === 5 &&
                val23ER1 === 0.18 &&
                val23ER2 === 5
            ) {
                const val23TR1 = 0.16;
                $('[data-value="SR33-1-TR1"]').val(val23TR1.toFixed(2));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        }
    });

    $('.scene-layer3 .input-data').on('blur', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result2-1')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '20') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '8') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '6') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '12') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        } else if (sceneArea1.hasClass('result2-2')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '1') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '1') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        } else if (sceneArea1.hasClass('result2-3')) {
            if (thisB.attr('data-value') === 'SR33-1-AR1') {
                if (thisB.val() === '0.04') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-AR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR1') {
                if (thisB.val() === '0.4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-BR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR1') {
                if (thisB.val() === '0.12') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-CR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR1') {
                if (thisB.val() === '0.06') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-DR2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER1') {
                if (thisB.val() === '0.18') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR33-1-ER2') {
                if (thisB.val() === '5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        }
    });

    // 결과3
    $('.scene-layer4 .input-data').on('input', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result3-1')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.8') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '10') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '10') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '1.6') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '10') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '1.2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '10') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '2.4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '10') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val31AR1 = parseFloat($('[data-value="SR43-1-AR1"]').val());
            const val31AR2 = parseFloat($('[data-value="SR43-1-AR2"]').val());

            if (val31AR1 === 0.8 && val31AR2 === 10) {
                const val31AR3 = (val31AR1 / val31AR2) * 100;
                $('[data-value="SR43-1-AR3"]').val(val31AR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val31BR1 = parseFloat($('[data-value="SR43-1-BR1"]').val());
            const val31BR2 = parseFloat($('[data-value="SR43-1-BR2"]').val());

            if (val31BR1 === 4 && val31BR2 === 10) {
                const val31BR3 = (val31BR1 / val31BR2) * 100;
                $('[data-value="SR43-1-BR3"]').val(val31BR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val31CR1 = parseFloat($('[data-value="SR43-1-CR1"]').val());
            const val31CR2 = parseFloat($('[data-value="SR43-1-CR2"]').val());

            if (val31CR1 === 1.6 && val31CR2 === 10) {
                const val31CR3 = (val31CR1 / val31CR2) * 100;
                $('[data-value="SR43-1-CR3"]').val(val31CR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val31DR1 = parseFloat($('[data-value="SR43-1-DR1"]').val());
            const val31DR2 = parseFloat($('[data-value="SR43-1-DR2"]').val());

            if (val31DR1 === 1.2 && val31DR2 === 10) {
                const val31DR3 = (val31DR1 / val31DR2) * 100;
                $('[data-value="SR43-1-DR3"]').val(val31DR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val31ER1 = parseFloat($('[data-value="SR43-1-ER1"]').val());
            const val31ER2 = parseFloat($('[data-value="SR43-1-ER2"]').val());

            if (val31ER1 === 2.4 && val31ER2 === 10) {
                // 수정된 조건
                const val31ER3 = (val31ER1 / val31ER2) * 100;
                $('[data-value="SR43-1-ER3"]').val(val31ER3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val31AR1 === 0.8 &&
                val31AR2 === 10 &&
                val31BR1 === 4 &&
                val31BR2 === 10 &&
                val31CR1 === 1.6 &&
                val31CR2 === 10 &&
                val31DR1 === 1.2 &&
                val31DR2 === 10 &&
                val31ER1 === 2.4 &&
                val31ER2 === 10
            ) {
                const val31TR1 = 100;
                $('[data-value="SR43-1-TR1"]').val(val31TR1.toFixed(0));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        } else if (sceneArea1.hasClass('result3-2')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '0.8') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '0.4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '0.2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '0.4') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '2') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val32AR1 = parseFloat($('[data-value="SR43-1-AR1"]').val());
            const val32AR2 = parseFloat($('[data-value="SR43-1-AR2"]').val());

            if (val32AR1 === 0.2 && val32AR2 === 2) {
                const val32AR3 = (val32AR1 / val32AR2) * 100;
                $('[data-value="SR43-1-AR3"]').val(val32AR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val32BR1 = parseFloat($('[data-value="SR43-1-BR1"]').val());
            const val32BR2 = parseFloat($('[data-value="SR43-1-BR2"]').val());

            if (val32BR1 === 0.8 && val32BR2 === 2) {
                const val32BR3 = (val32BR1 / val32BR2) * 100;
                $('[data-value="SR43-1-BR3"]').val(val32BR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val32CR1 = parseFloat($('[data-value="SR43-1-CR1"]').val());
            const val32CR2 = parseFloat($('[data-value="SR43-1-CR2"]').val());

            if (val32CR1 === 0.4 && val32CR2 === 2) {
                const val32CR3 = (val32CR1 / val32CR2) * 100;
                $('[data-value="SR43-1-CR3"]').val(val32CR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val32DR1 = parseFloat($('[data-value="SR43-1-DR1"]').val());
            const val32DR2 = parseFloat($('[data-value="SR43-1-DR2"]').val());

            if (val32DR1 === 0.2 && val32DR2 === 2) {
                const val32DR3 = (val32DR1 / val32DR2) * 100;
                $('[data-value="SR43-1-DR3"]').val(val32DR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val32ER1 = parseFloat($('[data-value="SR43-1-ER1"]').val());
            const val32ER2 = parseFloat($('[data-value="SR43-1-ER2"]').val());

            if (val32ER1 === 0.4 && val32ER2 === 2) {
                // 수정된 조건
                const val32ER3 = (val32ER1 / val32ER2) * 100;
                $('[data-value="SR43-1-ER3"]').val(val32ER3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val32AR1 === 0.2 &&
                val32AR2 === 2 &&
                val32BR1 === 0.8 &&
                val32BR2 === 2 &&
                val32CR1 === 0.4 &&
                val32CR2 === 2 &&
                val32DR1 === 0.2 &&
                val32DR2 === 2 &&
                val32ER1 === 0.4 &&
                val32ER2 === 2
            ) {
                const val32TR1 = 100;
                $('[data-value="SR43-1-TR1"]').val(val32TR1.toFixed(0));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        } else if (sceneArea1.hasClass('result3-3')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.008') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '0.16') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '0.08') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '0.16') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '0.024') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '0.16') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '0.012') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '0.16') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '0.036') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '0.16') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val43AR1 = parseFloat($('[data-value="SR43-1-AR1"]').val());
            const val43AR2 = parseFloat($('[data-value="SR43-1-AR2"]').val());

            if (val43AR1 === 0.008 && val43AR2 === 0.16) {
                const val43AR3 = (val43AR1 / val43AR2) * 100;
                $('[data-value="SR43-1-AR3"]').val(val43AR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-BR6에 값 설정
            const val43BR1 = parseFloat($('[data-value="SR43-1-BR1"]').val());
            const val43BR2 = parseFloat($('[data-value="SR43-1-BR2"]').val());

            if (val43BR1 === 0.08 && val43BR2 === 0.16) {
                const val43BR3 = (val43BR1 / val43BR2) * 100;
                $('[data-value="SR43-1-BR3"]').val(val43BR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val43CR1 = parseFloat($('[data-value="SR43-1-CR1"]').val());
            const val43CR2 = parseFloat($('[data-value="SR43-1-CR2"]').val());

            if (val43CR1 === 0.024 && val43CR2 === 0.16) {
                const val43CR3 = (val43CR1 / val43CR2) * 100;
                $('[data-value="SR43-1-CR3"]').val(val43CR3.toFixed(0)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val43DR1 = parseFloat($('[data-value="SR43-1-DR1"]').val());
            const val43DR2 = parseFloat($('[data-value="SR43-1-DR2"]').val());

            if (val43DR1 === 0.012 && val43DR2 === 0.16) {
                const val43DR3 = (val43DR1 / val43DR2) * 100;
                $('[data-value="SR43-1-DR3"]').val(val43DR3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 두 입력값이 모두 올바른지 확인하고 SR2-1-CR6에 값 설정
            const val43ER1 = parseFloat($('[data-value="SR43-1-ER1"]').val());
            const val43ER2 = parseFloat($('[data-value="SR43-1-ER2"]').val());

            if (val43ER1 === 0.036 && val43ER2 === 0.16) {
                // 수정된 조건
                const val43ER3 = (val43ER1 / val43ER2) * 100;
                $('[data-value="SR43-1-ER3"]').val(val43ER3.toFixed(1)); // 계산 결과를 소수점 2자리로 설정
            }

            // 모든 값이 올바르게 입력되었는지 확인
            if (
                val43AR1 === 0.008 &&
                val43AR2 === 0.16 &&
                val43BR1 === 0.08 &&
                val43BR2 === 0.16 &&
                val43CR1 === 0.024 &&
                val43CR2 === 0.16 &&
                val43DR1 === 0.012 &&
                val43DR2 === 0.16 &&
                val43ER1 === 0.036 &&
                val43ER2 === 0.16
            ) {
                const val43TR1 = 100;
                $('[data-value="SR43-1-TR1"]').val(val43TR1.toFixed(0));
                btnNext.addClass('active'); // 모든 조건이 충족되면 active 클래스 추가

                timeouts2.push(
                    setTimeout(function () {
                        btnNext.addClass('next');
                        $('.gesture-next-finger').addClass('active');
                    }, 1000),
                );
                setTimeout(function () {
                    timeouts2.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts2 = [];
                }, 1010);
            }
        }
    });

    $('.scene-layer4 .input-data').on('blur', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result3-1')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.8') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '10') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '10') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '1.6') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '10') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '1.2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '10') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '2.4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '10') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        } else if (sceneArea1.hasClass('result3-2')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '0.8') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '0.4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '0.2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '0.4') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '2') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        } else if (sceneArea1.hasClass('result3-3')) {
            if (thisB.attr('data-value') === 'SR43-1-AR1') {
                if (thisB.val() === '0.008') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-AR2') {
                if (thisB.val() === '0.16') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR1') {
                if (thisB.val() === '0.08') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-BR2') {
                if (thisB.val() === '0.16') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR1') {
                if (thisB.val() === '0.024') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-CR2') {
                if (thisB.val() === '0.16') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR1') {
                if (thisB.val() === '0.012') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-DR2') {
                if (thisB.val() === '0.16') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER1') {
                if (thisB.val() === '0.036') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR43-1-ER2') {
                if (thisB.val() === '0.16') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        }
    });

    // 결과4
    $('.scene-layer5 .input-data').on('input', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result4-1')) {
            if (thisB.attr('data-value') === 'SR51-4-AR1') {
                if (thisB.val() === '23') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-BR1') {
                if (thisB.val() === '130') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-CR1') {
                if (thisB.val() === '51') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-DR1') {
                if (thisB.val() === '29.5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-ER1') {
                if (thisB.val() === '66.5') {
                    wrongSound.pause();
                    wrongSound.currentTime = 0;

                    correctSound.currentTime = 0;
                    correctSound.play();
                    thisB.attr('readonly', 'readonly');
                } else if (thisB.val() === '') {
                    thisB.val('');
                }
            }

            // 모든 값이 다 입력되었는지 확인
            const val51AR1 = $('[data-value="SR51-4-AR1"]').val();
            const val51BR1 = $('[data-value="SR51-4-BR1"]').val();
            const val51CR1 = $('[data-value="SR51-4-CR1"]').val();
            const val51DR1 = $('[data-value="SR51-4-DR1"]').val();
            const val51ER1 = $('[data-value="SR51-4-ER1"]').val();

            // 모든 값이 맞는지 확인하고 console.log 실행
            if (
                val51AR1 === '23' &&
                val51BR1 === '130' &&
                val51CR1 === '51' &&
                val51DR1 === '29.5' &&
                val51ER1 === '66.5'
            ) {
                $('.guide-balloon-tip-wrap5-5').addClass('active');
            }
        }
    });

    $('.scene-layer5 .input-data').on('blur', function () {
        const thisB = $(this);
        if (sceneArea1.hasClass('result4-1')) {
            if (thisB.attr('data-value') === 'SR51-4-AR1') {
                if (thisB.val() === '23') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-BR1') {
                if (thisB.val() === '130') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-CR1') {
                if (thisB.val() === '51') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-DR1') {
                if (thisB.val() === '29.5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            } else if (thisB.attr('data-value') === 'SR51-4-ER1') {
                if (thisB.val() === '66.5') {
                } else if (thisB.val() === '') {
                    thisB.val('');
                } else {
                    correctSound.pause();
                    correctSound.currentTime = 0;

                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    thisB.val('');
                }
            }
        }
    });

    $('.guide-balloon-tip-wrap5-5 .input-popup-data').on('input', function () {
        const thisB = $(this);
        if (thisB.attr('data-value') === 'F5-5-P1') {
            if (thisB.val() === 'b') {
                thisB.val('B');
            }
            if (thisB.val() === 'B') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        } else if (thisB.attr('data-value') === 'F5-5-P2') {
            if (thisB.val() === '중요치') {
                wrongSound.pause();
                wrongSound.currentTime = 0;

                correctSound.currentTime = 0;
                correctSound.play();
                thisB.attr('readonly', 'readonly');
            } else if (thisB.val() === '') {
                thisB.val('');
            }
        }
    });

    $('.guide-balloon-tip-wrap5-5 .input-popup-data').on('blur', function () {
        const thisB = $(this);
        if (thisB.attr('data-value') === 'F5-5-P1') {
            if (thisB.val() === 'b') {
                thisB.val('B'); // 소문자 b를 대문자 B로 변경
            }
            if (thisB.val() === 'B') {
                // 올바른 값일 때 처리
            } else if (thisB.val() === '') {
                thisB.val(''); // 빈 값일 경우 그대로 유지
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val(''); // 잘못된 값일 경우 초기화
            }
        } else if (thisB.attr('data-value') === 'F5-5-P2') {
            if (thisB.val() === '중요치') {
                // 올바른 값일 때 처리
            } else if (thisB.val() === '') {
                thisB.val('');
            } else {
                correctSound.pause();
                correctSound.currentTime = 0;

                wrongSound.currentTime = 0;
                wrongSound.play();
                thisB.val('');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
