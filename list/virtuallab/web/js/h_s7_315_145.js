/* [고등1] > 물리학 */
// 빛의 이중 슬릿 실험
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s7_315_145/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s7_315_145/2-act1_01.mp3'); // 활동1_01 오디오
const resultAudio = new Audio('../../media/h_s7_315_145/3-final_01.mp3'); // 정리하기 오디오
const audioGoal_pop = new Audio('../../media/h_s7_315_145/click.mp3'); // 활동목표 팝업

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
resultAudio.volume = 1;
audioGoal_pop.volume = 1;

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

        resultAudio.load();
        resultAudio.play();
        resultAudio.mute = true;
        resultAudio.pause();
        resultAudio.currentTime = 0;
        resultAudio.mute = false;

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

        audioGoal.load();
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
            resultAudio.volume = 0;
            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio.volume = 1;
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

        // 가이드 모달 활성화
        $('.guide-balloon-tip-wrap1').addClass('active');
        $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

        // 1.5초 후 오디오 재생 (타이머 설정)
        setTimeout(function () {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1500);

        // 9초 후 모달과 텍스트 비활성화 (타이머 설정)
        setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
        }, 9000);

        // 10초 후 가이드 음성 재생 완료 후 정리하기 버튼 노출
        setTimeout(function () {
            $('.tab-list-basic').addClass('active');
        }, 10000);

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

        $('.controll-box').on('input', 'input[type="range"]', function (e) {
            var output = $('.controll-box').find('.output')[0];
            output.value = e.currentTarget.value;

            $('.sec2 svg, .sec3 svg').removeClass(function (index, className) {
                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
            });
        });
    }
}

let labelV;
let rangeV;
let checkA;
let chalkA;
var yCenter = 210;
var xSlit = [280, 480];
var ySlit = [yCenter - 82, yCenter + 82];
var xScreen = 850;
var wavelength;
var nano;
var maxResult = 450;
var iResult = [];
var time = 0;
var phase = 0;
var notClicked = true;

let img1;
let img2;

/**
 * 캔버스 그리기
 */
function setup() {
    // .light-area 요소 선택
    let myContainer = select('#myContainer');

    // light-area의 위치 및 크기 가져오기
    let myContainerWidth = myContainer.width;
    let myContainerHeight = myContainer.height;

    // 캔버스 생성, light-area와 동일한 크기 적용
    let myCanvas = createCanvas(myContainerWidth, myContainerHeight);

    // 캔버스를 canvasAdd의 자식으로 추가하되, controll-box 위에 삽입
    let parentDiv = select('#canvasAdd');
    let controlBox = select('.controll-box');
    myCanvas.id('myP5Canvas');

    // 화면 좌우 중앙 정렬 (windowWidth와 lightAreaWidth를 비교하여 중앙으로 맞춤)
    let xOffset = (windowWidth - myContainerWidth) / 2; // 좌우 중앙 정렬을 위한 xOffset 계산
    let myContainerPosY = myContainer.position().y; // light-area의 Y 위치를 그대로 사용

    // 캔버스 위치 설정: 좌우 중앙 정렬 + 기존 Y 위치 유지
    myCanvas.position(xOffset, myContainerPosY);
    myCanvas.style('z-index', '1'); // light-area 뒤에 배치하기 위한 z-index 설정
    myCanvas.style('border-radius', '30px'); // light-area 뒤에 배치하기 위한 z-index 설정
    // -moz-border-radius-topleft: -128px

    // controll-box 앞에 캔버스를 추가
    //parentDiv.elt.insertBefore(myCanvas.elt, controlBox.elt);

    // 이미지 미리 로드
    //img1 = createImg('../../images/h_s7_315_145/img-slit-1.png'); // 이미지 경로 설정
    //img2 = createImg('../../images/h_s7_315_145/img-slit-2.png'); // 이미지 경로 설정
    img1 = createImg(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAX7CAYAAACsRTIPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF9mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YTIxNDYzMC1hMjUzLTQ4OTctOTZiNi02YmMxNjg3Yzk5NmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUyMzRBM0Y3OTUyMTFFRkJFMkZBRTVFQTcwQUVCMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2RjNWZkY2QtYWNhYS0zZDQ2LWI5M2ItZjZjODY4YjJjYjgwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS42IChNYWNpbnRvc2gpIiB4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',
    ); // 이미지 경로 설정
    img2 = createImg(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAX7CAYAAACsRTIPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF9mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YTIxNDYzMC1hMjUzLTQ4OTctOTZiNi02YmMxNjg3Yzk5NmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQzNkVCMjk3OTUyMTFFRjk3MjJCMEQ4RjBBREU2NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MmI3M2U0YTEtNDhmMi01YzQ4LWIzYzAtODBkOWUxYmIwZmU2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS42IChNYWNpbnRvc2gpIiB4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',
    ); // 이미지 경로 설정

    rangeV = select('#rangeV');
    rangeV.input(setup2);

    setup2();
}

function setup2() {
    nano = rangeV.value();
    wavelength = nano / 20;
    for (var i = 0; i < maxResult; i++) {
        var d0 = dist(xSlit[1], ySlit[0], xScreen, i);
        var d1 = dist(xSlit[1], ySlit[1], xScreen, i);
        iResult[i] = round(128 * (cos(((d0 - d1) * TWO_PI) / wavelength) + 1));
        iResult[i] *= exp(-pow(abs(d0 - d1) / 100.0, 2));
        iResult[i] *= exp(-pow(abs(ySlit[0] - ySlit[1]) / 400.0, 2));
    }
}

/**
 * 빛의 파동성 그리기
 */
function draw() {
    if (touches.length > 1) return;

    // 투명한 배경을 위해 clear()를 사용함
    clear();
    strokeWeight(1);
    textSize(20);
    push();
    scale(width / 900);
    time -= 1;
    phase = time;
    phase = mod(phase, wavelength);
    noFill();

    stroke(getLightColor(nano)); // 이거 첫번째 빛라인 색상임
    phase = (phase + xSlit[0]) % wavelength;

    // 첫번째 막대기 그리기 시작
    noStroke();
    image(img1, xSlit[0], 10, 10, 400);
    // 첫번째 막대기 그리기 종료

    // 첫번째 파동 그리기 시작
    var l = dist(xSlit[0], yCenter, xSlit[1], ySlit[1]);
    noFill();
    for (var r = wavelength - phase; r <= l + wavelength; r += wavelength) {
        stroke(getRedColor(nano), getGreenColor(nano), getBlueColor(nano), map(r, 0, l, 255, 128));
        arc(xSlit[0], yCenter, 2 * r, 2 * r, -PI / 4, PI / 4);
    }
    phase = (phase + l) % wavelength;
    // 첫번째 파동 그리기 종료

    // 두번째 막대기 그리기 시작
    noStroke();
    fill(208, 216, 233);
    rect(xSlit[1]-30, 0, 100, 450);
    noStroke();
    image(img2, xSlit[1]-30, 10, 10, 400);
    noStroke();
    // 두번째 막대기 그리기 종료

    // 두번째 파동 그리기 시작
    l = max(dist(xSlit[0], ySlit[0], 900, 0), dist(xSlit[0], ySlit[0], 900, 450));
    noFill();
    for (var r = wavelength - phase; r < l; r += wavelength) {
        stroke(getRedColor(nano), getGreenColor(nano), getBlueColor(nano), map(r, 0, l, 128, 0));
        arc(xSlit[1]-30, ySlit[0], 2 * r, 2 * r, -PI / 4, PI / 4);
        arc(xSlit[1]-30, ySlit[1], 2 * r, 2 * r, -PI / 4, PI / 4);
    }
    noStroke();
    for (var r1 = 2 * wavelength - phase; r1 < l; r1 += wavelength)
        for (var r2 = 2 * wavelength - phase; r2 < l; r2 += wavelength) {
            var s = abs(ySlit[1] - ySlit[0]);
            if (abs(r1 - r2) + 10 < s)
                if (abs(r1 + r2) > s + 10) {
                    var x = getX1CrossedOval(xSlit[1]-30, ySlit[0], r1, xSlit[1]-30, ySlit[1], r2);
                    var y = getY1CrossedOval(xSlit[1], ySlit[0], r1, xSlit[1], ySlit[1], r2);
                    fill(0, map(abs(x - xSlit[1]), 100, 400, 0, 255));
                    ellipse(x, y, 5, 5);
                }
        }
    // 두번째 파동 그리기 종료

    // 두번째 파동 끊기
    noStroke();
    fill(208, 216, 233);
    rect(xScreen - 30, 0, 100, 450);

    // 오른쪽 빛 파동 결과물 시작
    for (var i = 10; i < 415; i++) {
        // 먼저 사각형을 그립니다.
        stroke(lerpColor(getLightColor(nano), color(0), 1 - iResult[i] / 255));

        // 모서리 수동으로 둥글게 처리
        if (i == 10) {
            rect(xScreen - 26, i, 40, 1);
        } else if (i == 11) {
            rect(xScreen - 28, i, 44, 1);
        } else if (i == 12) {
            rect(xScreen - 29, i, 46, 1);
        } else if (i == 13) {
            rect(xScreen - 30, i, 48, 1);
        } else if (i == 14) {
            rect(xScreen - 30, i, 48, 1);
        } else if (i == 410) {
            rect(xScreen - 29, i, 46, 1);
        } else if (i == 411) {
            rect(xScreen - 30, i, 48, 1);
        } else if (i == 412) {
            rect(xScreen - 29, i, 46, 1);
        } else if (i == 413) {
            rect(xScreen - 28, i, 44, 1);
        } else if (i == 414) {
            rect(xScreen - 26, i, 40, 1);
        } else {
            rect(xScreen - 30, i, 48, 1);
        }
    }

    pop();
    drawButtonDrag();
}

var iDragged = -1;
var offsetX;
var offsetY;

function touchStarted() {
    if (!contain(mouseX, mouseY, 0, 0, width, height)) {
        return;
    }

    var xSpot = [xSlit[1], xSlit[1], xSlit[0], xSlit[1]];
    var ySpot = [ySlit[0], ySlit[1], 425, 425];

    // 이미지의 위치 및 크기를 반영하여 슬릿 좌표 범위를 설정
    var d1 = 999;
    var d2 = 999;
    for (var i = 0; i < 4; i++) {
        d1 = dist(xSpot[i], ySpot[i], (mouseX * 900) / width, (mouseY * 900) / width);
        if (d1 < 400) {
            d2 = d1;
            iDragged = i;
            switch (i) {
                case 0:
                    offsetY = (mouseY * 900) / width - ySlit[0];
                    break;
                case 1:
                    offsetY = (mouseY * 900) / width - ySlit[1];
                    break;
                case 2:
                    offsetX = (mouseX * 900) / width - xSlit[0];
                    break;
                case 3:
                    offsetX = (mouseX * 900) / width - xSlit[1];
                    break;
            }
        }
    }
}

function touchMoved() {
    if (touches.length > 1) return;
    if (iDragged >= 0) {
        switch (iDragged) {
            case 0: // 두번째 막대기 간격 변경 금지 처리
                //ySlit[0] = constrain(mouseY * 900 / width - offsetY, 0, yCenter - 20);
                //ySlit[1] = yCenter + (yCenter - ySlit[0]);
                //setup2();
                break;
            case 1: // 두번째 막대기 간격 변경 금지 처리
                //ySlit[1] = constrain(mouseY * 900 / width - offsetY, yCenter + 20, 450 - 50);
                //ySlit[0] = yCenter + (yCenter - ySlit[1]);
                //setup2();
                break;
            case 2: // 첫번째 막대기 이동 금지 처리
                //xSlit[0] = constrain(mouseX * 900 / width - offsetX, 50, xSlit[1] - 50);
                //setup2();
                break;
            case 3:
                xSlit[1] = constrain((mouseX * 900) / width - offsetX, xSlit[0] + 50, 600);
                setup2();
                break;
        }
        return false;
    }
}

function touchEnded() {
    bDragged = false;
    iDragged = -1;
}

function contain(x, y, x1, y1, w1, h1) {
    if (x < x1) return false;
    if (x > x1 + w1) return false;
    if (y < y1) return false;
    if (y > y1 + h1) return false;
    return true;
}

function mod(x, y) {
    if (x < 0) x += y * (ceil(abs(x) / y) + 1);
    let c = floor(x / y);
    return x - y * c;
}

function getLightColor(nano) {
    let c = color(getRedColor(nano), getGreenColor(nano), getBlueColor(nano));
    return c;
}

function getRedColor(nano) {
    if (380 <= nano && nano < 419) return cosineInterpolate(128, 75, map(nano, 380, 410, 0, 1)); // 보라색에서 빨간색 성분 감소
    if (420 <= nano && nano < 499) return 0; // 파란색 구간에서는 빨간색 없음
    if (500 <= nano && nano < 559) return 0; // 하늘색 구간에서도 빨간색 없음
    if (560 <= nano && nano < 619) return cosineInterpolate(0, 128, map(nano, 560, 610, 0, 1)); // 초록색에서 빨간색 약간 증가
    if (620 <= nano && nano < 689) return cosineInterpolate(128, 255, map(nano, 620, 680, 0, 1)); // 노란색 구간에서 빨간색 증가
    if (690 <= nano && nano <= 740) return 255; // 빨간색 최대
    return 0;
}

function getGreenColor(nano) {
    if (380 <= nano && nano < 419) return cosineInterpolate(0, 0, map(nano, 380, 410, 0, 1)); // 보라색에서 녹색 없음
    if (420 <= nano && nano < 499) return 0; // 파란색 구간에서는 녹색 없음
    if (500 <= nano && nano < 559) return cosineInterpolate(0, 255, map(nano, 500, 550, 0, 1)); // 하늘색에서 녹색 증가
    if (560 <= nano && nano < 619) return 255; // 초록색 구간에서 녹색 최대
    if (620 <= nano && nano < 689) return cosineInterpolate(255, 255, map(nano, 620, 680, 0, 1)); // 노란색 구간에서 녹색 유지
    if (690 <= nano && nano <= 740) return cosineInterpolate(255, 0, map(nano, 690, 740, 0, 1)); // 빨간색 구간에서 녹색 감소
    return 0;
}

function getBlueColor(nano) {
    if (380 <= nano && nano < 419) return cosineInterpolate(255, 128, map(nano, 380, 410, 0, 1)); // 보라색에서 파란색 성분
    if (420 <= nano && nano < 499) return 255; // 파란색 최대
    if (500 <= nano && nano < 559) return cosineInterpolate(255, 128, map(nano, 500, 550, 0, 1)); // 하늘색 구간에서 파란색 약간 감소
    if (560 <= nano && nano < 619) return cosineInterpolate(128, 0, map(nano, 560, 610, 0, 1)); // 초록색 구간에서 파란색 감소
    if (620 <= nano && nano <= 740) return 0; // 노란색 및 빨간색 구간에서는 파란색 없음
    return 0;
}

function cosineInterpolate(a, b, x) {
    let t = map(x, 0, 1, -HALF_PI, HALF_PI);
    t = map(sin(t), -1, 1, 0, 1);
    return lerp(a, b, t);
}

function getX1CrossedOval(ox1, oy1, or1, ox2, oy2, or2) {
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2) {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0,
        X = 0,
        Y = 0;
    let T1 = 0,
        T2 = 0,
        T3 = 0,
        T4 = 0,
        T5 = 0,
        T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt(X * X + Y * Y);
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T3;
}

function getY1CrossedOval(ox1, oy1, or1, ox2, oy2, or2) {
    let x1, y1, r1;
    let x2, y2, r2;

    if (ox1 < ox2) {
        x1 = ox1;
        y1 = oy1;
        r1 = or1;
        x2 = ox2;
        y2 = oy2;
        r2 = or2;
    } else {
        x1 = ox2;
        y1 = oy2;
        r1 = or2;
        x2 = ox1;
        y2 = oy1;
        r2 = or1;
    }

    let D = 0,
        X = 0,
        Y = 0;
    let T1 = 0,
        T2 = 0,
        T3 = 0,
        T4 = 0,
        T5 = 0,
        T6 = 0;

    X = x2 - x1;
    Y = y2 - y1;

    D = sqrt(X * X + Y * Y);
    T1 = acos((r1 * r1 - r2 * r2 + D * D) / (2 * r1 * D));
    T2 = atan(Y / X);

    T3 = x1 + r1 * cos(T2 + T1);
    T4 = y1 + r1 * sin(T2 + T1);
    T5 = x1 + r1 * cos(T2 - T1);
    T6 = y1 + r1 * sin(T2 - T1);

    return T4;
}

function drawButtonDrag() {
    drawButtonDetail('Drag');
}

function drawButtonClick() {
    drawButtonDetail('Click');
}

function drawButtonDetail(str) {
    if (mouseIsPressed) if (contain(mouseX, mouseY, 0, 0, width, height)) notClicked = false;
    if (millis() > 10000) notClicked = false;
    let dia = 120;

    if (notClicked) {
        push();
        translate(width / 2, height / 2);

        noStroke();
        fill(128, 128);
        ellipse(0, 0, dia, dia);

        /* let t = millis()*TWO_PI/2000;
fill(244);
arc(0, 0, 140, 140, t, t + 0.5);
arc(0, 0, 140, 140, t + PI, t + PI + 0.5); */

        noFill();
        stroke(255);
        strokeWeight(dia * 0.04);
        drawFingers(0, 0, dia * 0.85);

        pop();
    }
}

function drawFingers(x, y, d) {
    push();
    translate(x, y);

    line(-d * 0.2, d * 0.3, -d * 0.35, d * 0.1);
    arc(-d * 0.3, d * 0.05, d * 0.1414, d * 0.1414, QUARTER_PI * 3, QUARTER_PI * 7);
    line(-d * 0.25, d * 0.0, -d * 0.15, d * 0.1);
    line(-d * 0.15, d * 0.1, -d * 0.15, -d * 0.25);
    arc(-d * 0.075, -d * 0.25, d * 0.15, d * 0.15, PI, TWO_PI);
    line(-d * 0.0, -d * 0.25, -d * 0.0, d * 0.0);
    arc(d * 0.06, -d * 0.1, d * 0.12, d * 0.12, HALF_PI * 3, TWO_PI);
    line(d * 0.12, -d * 0.1, d * 0.12, d * 0.025);
    arc(d * 0.18, -d * 0.05, d * 0.12, d * 0.12, HALF_PI * 3, TWO_PI);
    line(d * 0.24, -d * 0.05, d * 0.24, d * 0.05);
    arc(d * 0.29, -d * 0.0, d * 0.1, d * 0.1, HALF_PI * 3, TWO_PI);
    line(d * 0.34, -d * 0.0, d * 0.34, d * 0.075);
    line(d * 0.34, d * 0.075, d * 0.31, d * 0.3);

    pop();
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
