/* [고등1] > 물리학 */
// 파동의 중첩과 간섭
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const startAct = new Audio('../../media/h_s7_314_140/click.mp3'); // 활동목표 노출 시
const audioGoal = new Audio('../../media/h_s7_314_140/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s7_314_140/2-act01.mp3'); // 활동1_01 오디오
const resultAudio = new Audio('../../media/h_s7_314_140/3-final.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
startAct.volume = 1;
audioGoal.volume = 1;
audioAct1_01.volume = 1;
// audioAct1_02.volume = 1;
resultAudio.volume = 1;

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
        startAct.load();
        startAct.play();
        startAct.mute = true;
        startAct.pause();
        startAct.currentTime = 0;
        startAct.mute = false;

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

        // audioAct1_02.load();
        // audioAct1_02.play();
        // audioAct1_02.mute = true;
        // audioAct1_02.pause();
        // audioAct1_02.currentTime = 0;
        // audioAct1_02.mute = false;

        resultAudio.load();
        resultAudio.play();
        resultAudio.mute = true;
        resultAudio.pause();
        resultAudio.currentTime = 0;
        resultAudio.mute = false;

        setTimeout(function () {
            // 효과음 출력
            startAct.play();
        }, 600);

        setTimeout(function () {
            // 활동목표 오디오 재생
            audioGoal.play();
        }, 1000);
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

        // 시작 후 파동 1 실행 모션
        setTimeout(() => {
            $('.bottom-control-left .btn-num-plus-01').parent().addClass('active');
        }, 3000);
        // 시작 후 파동 3 실행 모션
        setTimeout(() => {
            $('.bottom-control-right .btn-num-plus-03').parent().addClass('active');
        }, 3000);
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
            startAct.volume = 0;
            audioGoal.volume = 0;
            audioAct1_01.volume = 0;
            resultAudio.volume = 0;
            resultAudio_02.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            startAct.volume = 1;
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio.volume = 1;
            resultAudio_02.volume = 1;
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

        // 가이드 모달 활성화
        $('.guide-balloon-tip-wrap1').addClass('active');
        $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

        // 1.5초 후 오디오 재생 (타이머 설정)
        audioTimeout = setTimeout(function () {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1500);

        // 11초 후 모달과 텍스트 비활성화 (타이머 설정)
        hideTimeout = setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
            draw();
            $('#overlay').hide();
        }, 11000);

        // 가이드 음성 재생 완료 후 정리하기 버튼 노출
        setTimeout(function () {
            $('.tab-list-basic').addClass('active');
        }, 13000);

        // 정리하기 버튼 눌렀 을 때 팝업 노출
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

        // // 15초 후 자석 모션 시작
        // magnetTimeout = setTimeout(guideMoveMagnetWrap, 15000);

        // // 21초 후 코일 모션 시작
        // coilTimeout = setTimeout(guideMoveCoilWrap, 21000);

        // 조건에 따라 타이머를 취소할 경우
        // clearTimeout(audioTimeout); // 오디오 재생 타이머 취소
        // clearTimeout(hideTimeout);  // 모달 비활성화 타이머 취소
        // clearTimeout(magnetTimeout);  // 자석 모션 비활성화 타이머 취소
    }

    // 하단 컨트롤러 버튼
    $('.bottom-control-box ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    let canvas = document.getElementById('myCanvasContainer');
    const screenBox = $('.scene-layer-area1')[0];
    canvas.width = screenBox.clientWidth;
    canvas.height = screenBox.clientHeight;
    let ctx = canvas.getContext('2d');
    let omax = 300; // 파동의 최대 값
    let oWave = []; // 파동의 사전 계산 값
    let time = -50; // 시간 변수
    let timeMax = 900; // 시간의 최대 값
    let yWave = [[], [], []]; // 세 개의 파동 배열

    function initCanvas() {
        // 파동 사전 계산
        for (let i = 0; i < omax; i++) {
            oWave[i] = 0.5 * (-1 - Math.cos(map(i, 0, omax, -Math.PI, Math.PI)));
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 매 프레임마다 초기화

        // 파동 값을 업데이트
        updateWaves();

        // 두 파동 그리기
        drawWave(yWave[0], '#546375');
        drawWave(yWave[1], '#546375');

        // 두 파동의 중첩 그리기
        drawWave(yWave[2], '#e54b49');

        // 애니메이션 반복
        requestAnimationFrame(draw);
    }

    function updateWaves() {
        // 두 파동을 모두 0으로 초기화
        for (let i = 0; i < 3; i++) {
            yWave[i] = [];
            for (let j = 0; j < timeMax; j++) {
                yWave[i][j] = 0;
            }
        }

        // 왼쪽 파동 계산
        for (let j = 0; j < omax; j++) {
            let t = j + time - Math.round(omax / 2);
            if (t >= 0 && t < timeMax) {
                yWave[0][t] = leftWaveAmplitude * 30 * oWave[j];
            }
        }

        // 오른쪽 파동 계산
        for (let j = 0; j < omax; j++) {
            let t = timeMax - 1 - (j + time - Math.round(omax / 2));
            if (t >= 0 && t < timeMax) {
                yWave[1][t] = rightWaveAmplitude * 30 * oWave[j];
            }
        }

        // 두 파동의 중첩 계산
        for (let j = 0; j < timeMax; j++) {
            yWave[2][j] = yWave[0][j] + yWave[1][j];
        }

        // 시간 업데이트 (속도를 조정)
        time += 1; // 이 값을 줄이면 속도가 느려짐, 예를 들어 time += 1;
        if (time >= timeMax + omax / 4) {
            time = -Math.round(omax / 4);
        }
    }

    function drawWave(wave, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.beginPath();

        const step = canvas.width / wave.length; // X 좌표의 스케일링 비율 계산
        const amplitudeMultiplier = 1.8; // 파동의 높이를 조절하는 상수 (1보다 크면 높아짐)

        for (let i = 0; i < wave.length; i++) {
            let x = i * step; // X 좌표를 캔버스 너비에 맞게 스케일링
            let y = canvas.height / 2 + wave[i] * amplitudeMultiplier; // 파동 높이 조정

            if (i === 0) {
                ctx.moveTo(x, y - 25);
            } else {
                ctx.lineTo(x, y - 25); // y - 25를 통해 약간의 오프셋을 줄 수 있음
            }
        }

        ctx.stroke();
    }

    function map(value, start1, stop1, start2, stop2) {
        return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    }

    window.onload = () => {
        initCanvas(); // 캔버스 초기화
    };
}

let leftWaveAmplitude = 1;
let rightWaveAmplitude = 3;

// 파동의 진폭을 변경하는 함수
function setLeftWave(value) {
    leftWaveAmplitude = value;
}

function setRightWave(value) {
    rightWaveAmplitude = value;
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
