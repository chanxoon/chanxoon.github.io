/* [고등1] > 생명과학 */
// 스마트 헬스케어 시스템을 활용하여 항상성 유지 작용 탐구하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * 2024/09/24                            작업 시작
 * 2024/09/30                            1차 완료
-------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const startAct = new Audio('../../media/h_s12_222_108/click.mp3'); // 활동목표 노출 시
const audioGoal = new Audio('../../media/h_s12_222_108/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s12_222_108/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s12_222_108/2-act_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s12_222_108/2-act_03.mp3'); // 활동1_03 오디오
const audioAct1_04 = new Audio('../../media/h_s12_222_108/2-act_04.mp3'); // 활동1_04 오디오
const audioAct1_05 = new Audio('../../media/h_s12_222_108/2-act_05.mp3'); // 활동1_05 오디오
const audioAct1_06 = new Audio('../../media/h_s12_222_108/2-act_06.mp3'); // 활동1_06 오디오
const audioAct1_07 = new Audio('../../media/h_s12_222_108/2-act_07.mp3'); // 활동1_07 오디오

/* 오디오 볼륨 [0~1] 선언 */
startAct.volume = 1;
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;
audioAct1_04.volume = 1;
audioAct1_05.volume = 1;
audioAct1_06.volume = 1;
audioAct1_07.volume = 1;

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
        // clearTimeout(timeGuideArray);
        clearTimeouts();
        window.parent.close();
    });

    const btnIntroStart = $('.page-view1 .button-intro-main-start');
    btnIntroStart.on('click', function (e) {
        const thisB = $(this);
        thisB.addClass('active');
        thisB.closest('.page-view1').removeClass('active');

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

        // 활동시작 클릭 시
        // 활동목표 보이기
        pageView2.addClass('active');

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
    // 활동목표 닫기 클릭 후 활동시작
    btnActivityGoalsClose.on('click', function (e) {
        const thisB = $(this);
        audioGoal.pause(); // 활동목표 닫기 시 오디오 멈춤
        pageView2.removeClass('active');

        // 첫번째 가이드 모달
        guideModal1();
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
            audioAct1_02.volume = 0;
            audioAct1_03.volume = 0;
            audioAct1_04.volume = 0;
            audioAct1_05.volume = 0;
            audioAct1_06.volume = 0;
            audioAct1_07.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            startAct.volume = 1;
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            audioAct1_02.volume = 1;
            audioAct1_03.volume = 1;
            audioAct1_04.volume = 1;
            audioAct1_05.volume = 1;
            audioAct1_06.volume = 1;
            audioAct1_07.volume = 1;
        }
    });

    // 홈 버튼
    wConHhome.on('click', function () {
        clearTimeouts();
        location.reload();
    });

    // 닫기 버튼
    wConHclose.on('click', function () {
        clearTimeouts();
        window.parent.close();
    });

    // <스크립트 공통 셋팅 : End> -----------------------------------------------------------------------
}
// -- 화면별 script -- //
let timeGuideArray = [];

// setTimeout 초기화
function clearTimeouts() {
    for (let i = 0; i < timeGuideArray.length; i++) {
        clearTimeout(timeGuideArray[i]);
    }

    timeGuideArray = [];
}

// 화면 전환 기능 (공통)
// 초기 진입 시에만 각 layer에 맞는 scene이 호출되고 두번째 진입 시부터는 호출되지 않아야 함.
function changeScene() {
    const layers = $('.scene-layer');
    const btn = $('[data-scene-target]');

    let thisLayer;

    btn.on('click', function () {
        const targetLayer = $(this).data('scene-target');

        clearTimeouts(); // 일단 모든 setTimeout 초기화

        layers.removeClass('active');
        $(`.scene-layer${targetLayer}`).addClass('active');

        // 각 scene 별 action 호출되고, 해당하는 guideModal도 호출.
        if (targetLayer == 1) {
            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                scene1();
                $(this).addClass('clicked'); // clicked 추가
            }
            guideModal1();
        } else if (targetLayer == 2) {
            thisLayer = $('.scene-layer2');

            // 운동 선택 진입 시
            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                scene2();
                $(this).addClass('clicked'); // clicked 추가
            }
            guideModal2();
        } else if (targetLayer == 3) {
            thisLayer = $('.scene-layer3');

            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                scene3();
                $(this).addClass('clicked'); // clicked 추가
            }
            guideModal3();
        } else if (targetLayer == 4) {
            thisLayer = $('.scene-layer4');

            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                $(this).addClass('clicked'); // clicked 추가
            }
            scene4();
            guideModal4();
        } else if (targetLayer == 5) {
            thisLayer = $('.scene-layer5');

            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                scene5();
                $(this).addClass('clicked'); // clicked 추가
            }
            scene5Sub1();
            guideModal5();
        } else if (targetLayer == 6) {
            thisLayer = $('.scene-layer6');

            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                $(this).addClass('clicked'); // clicked 추가
            }
            scene6();
            guideModal6();
        } else if (targetLayer == 7) {
            thisLayer = $('.scene-layer7');

            // 이전 layer의 다음 버튼에 clicked가 없는 경우
            if ($(this).hasClass('btn-next') && !$(this).hasClass('clicked')) {
                scene7();
                $(this).addClass('clicked'); // clicked 추가
            }
            guideModal7();
        }
    });
}

// 이전 버튼 클릭 시 (공통)
function disabledNext() {
    const layer = $('.scene-layer');
    // inpHasValArr = []; //  운동하기 5분 전 초기화
    layer.find('.btn-prev').on('click', function () {
        // layer1을 제외한 나머지 layer의 다음 버튼 비활성화
        layer.not('.scene-layer1, .scene-layer6').find('.btn-next').prop('disabled', true);
    });
}

// 가이드 모달 활성화 (공통)
function showGuide(el) {
    $(`.${el}`).addClass('active').css('z-index', 5);
    setTimeout(() => {
        $(`.${el}`).css('z-index', '');
    }, 500);
}

// 가이드 모달 비활성화 (공통)
function HideGuide(el) {
    $(`.${el}`).removeClass('active');
}

// 서브1
function scene1() {
    // console.log('scene1 action');
    // * 장비 선택
    const layer1 = $('.scene-layer1');
    const selectBtn = layer1.find('.select-device-item > button');
    const handIcon = layer1.find('.button-click-hand');
    const nextBtn = layer1.find('.btn-next');
    const $input = $('#enterDevice');

    selectBtn.on('click', function () {
        handIcon.addClass('hide'); //  클릭 유도 아이콘 미노출
        const thisInp = $(this).closest('.select-device-item').find('input');

        // 중복 선택 가능
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');

            // 장비 입력 버튼의 경우
            if (thisInp.length) {
                thisInp.removeClass('no-placeholder'); // placeholder 노출
                thisInp.prop('disabled', true); // 비활성화
                if (thisInp.val()) {
                    thisInp.val(''); // value 삭제
                }
            }
        } else {
            $(this).addClass('on');

            // 장비 입력 버튼의 경우
            if (thisInp.length) {
                thisInp.prop('disabled', false); // 활성화
                thisInp.focus(); // input에 focus
                thisInp.addClass('no-placeholder'); // placeholder 미노출
            } else {
                nextBtn.prop('disabled', false); // 다음 버튼 활성화
            }
        }
        // 선택 버튼이 1개 아래일 경우
        if (layer1.find('.select-device-item > button.on').length < 1) {
            nextBtn.prop('disabled', true);
        }
    });

    $input.on('input', function () {
        if ($input.val()) {
            nextBtn.prop('disabled', false);
        } else {
            if (layer1.find('.select-device-item > button.on').length == 1) {
                nextBtn.prop('disabled', true);
            }
        }
    });
}

// 서브2
let selectExcercise;

function scene2() {
    // console.log('scene2 action');
    // * 운동 선택
    const layer2 = $('.scene-layer2');
    const layer3 = $('.scene-layer3');
    const exerWrap = layer2.find('.set-member-wrap');
    const exerRow = exerWrap.find('.set-member-row');

    const handIcon = layer2.find('.button-click-hand');
    const saveBtn = layer2.find('.bottom-btn-area .btn-save');
    const nextBtn = layer2.find('.bottom-btn-area .btn-next');
    let checkedCnt;

    // 운동 선택 - custom 버튼 input에 값 있는지 여부
    let customInpHasVal;
    const checkCustomHasVal = () => {
        const customInp = layer2.find('[data-check-excercise=custom]').next();
        if (customInp.val()) {
            // 값이 있으면
            customInpHasVal = true;
        } else {
            // 값이 없으면
            customInpHasVal = false;
        }
    };

    // 운동 선택 버튼 클릭 시
    layer2.find('[data-check-excercise]').each(function (e) {
        const $this = $(this);
        $this.on('click', function () {
            const $tg = $this.data('check-excercise');

            // 클릭 제스처 미노출
            handIcon.addClass('hide');

            if ($this.hasClass('on')) {
                // on 있는 상태라면
                $this.removeClass('on'); // on 제거
                layer3.find(`[data-check-excercise=${$tg}]`).removeClass('on'); // layer3의 같은 항목 on 제거

                if ($tg == 'custom') {
                    // 운동 추가 버튼이라면
                    $this.next().prop('disabled', true).val('').removeClass('no-placeholder'); // input 비활성화, input value 삭제, placeholder 노출
                    $('#enterExcerciseText').text(''); // 텍스트 초기화
                    layer3.find(`[data-check-excercise=${$tg}]`).next().text(''); // layer3의 운동 추가 버튼 p 텍스트 초기화
                }
            } else {
                // on 없는 상태라면
                $this.addClass('on'); // on 추가
                layer3.find(`[data-check-excercise=${$tg}]`).addClass('on'); // layer3의 같은 항목 on 추가

                if ($tg == 'custom') {
                    // 운동 추가 버튼이라면
                    $this.next().prop('disabled', false).focus().addClass('no-placeholder'); // input 활성화 및 포커스, placeholder 미노출
                }
            }

            checkCustomHasVal();

            const $isOtherOn =
                layer2.find('[data-check-excercise=sit]').hasClass('on') ||
                layer2.find('[data-check-excercise=jump]').hasClass('on'); // sit 또는 jump on 상태
            const $isCustomOn = layer2.find('[data-check-excercise=custom]').hasClass('on');

            if ($isOtherOn || ($isCustomOn && customInpHasVal)) {
                saveBtn.prop('disabled', false);
            } else {
                saveBtn.prop('disabled', true);
            }
        });
    });

    // input val있는 경우 저장 활성화
    const customInput = layer2.find('[data-check-excercise=custom]').next();
    const inpTextIn = $('#enterExcerciseText');

    customInput.on('input', function () {
        checkCustomHasVal();
        if (customInpHasVal) {
            saveBtn.prop('disabled', false);
        }
        inpTextIn.text(customInput.val());
    });

    // 저장 버튼 클릭 시
    saveBtn.on('click', function () {
        nextScene(); // 다음 레이어 관련 함수 호출
        nextBtn.prop('disabled', false); // 다음 버튼 활성화
    });

    // layer3의 저장버튼 클릭 시
    const nextScene = () => {
        // 체크 운동 개수 파악,
        const btnsNum = layer3.find('[data-check-excercise]').length;
        const checkedBtnNum = layer3.find('[data-check-excercise].on').length;

        // 먼저 layer3의 멤버입력 input 초기화
        layer3.find('.set-member-row dd span').removeClass('show active first');

        // 선택 운동 개수에 따라 입력필드 3/4개 노출 설정
        if (btnsNum == checkedBtnNum) {
            $('.set-member-wrap').addClass('checked-all');
        } else {
            $('.set-member-wrap').removeClass('checked-all');
        }

        // 체크되어있는 운동 뽑아서 우측에 span append 되게
        // 선택된 버튼의 data 배열화
        const checkedBtnArr = exerWrap
            .find('[data-check-excercise].on')
            .map(function () {
                const checkValue = $(this).data('check-excercise');

                // custom인 경우 customInpHasVal이 true일 때만 값을 return
                if (checkValue === 'custom') {
                    if (customInpHasVal) {
                        return checkValue;
                    } else {
                        return null; // 조건에 맞지 않으면 null 반환하여 배열에 포함되지 않음
                    }
                }

                // custom이 아닌 경우에는 값을 그냥 return
                return checkValue;
            })
            .get();

        // data 배열화 시킨 각 요소를 개별적으로 출력해서
        layer3.find('[data-check-excercise]').removeClass('on'); // 일단 초기화

        $('[data-chart-target]').removeClass('show'); //범례 일단 노출 초기화

        // layer3에 적용
        $.each(checkedBtnArr, function (ind, tg) {
            const layer3Btn = $(`.scene-layer3 [data-check-excercise=${tg}]`);
            const layer3FirstInp = layer3Btn.closest('dt').next().find('input').eq(0);

            // 차트 화면 변수
            const legendItem = $(`.scene-layer6 .legend-area [data-chart-target=${tg}]`);
            const nextScLegendItem = $(`.scene-layer7 .legend-area [data-chart-target=${tg}]`);

            layer3Btn.addClass('on');
            legendItem.addClass('show');
            nextScLegendItem.addClass('show');

            // 해당 운동 row의 입력필드 노출 및 활성화
            layer3FirstInp.closest('span').addClass('show active first');
        });

        // 운동 추가 입력필드에 val 있을 경우
        if ($('#enterExcercise').val()) {
            const customExcercise = $('#enterExcercise').val();
            $('#enterExcercise2').text(customExcercise); // 운동 추가 입력 시 layer3에 내용 적용
            $('#customExcercise > p').text(customExcercise); // 차트 범례에 텍스트 추가
        } else {
            // $('#customExcercise').remove(); // 차트 커스텀 범례 삭제
        }
    };

    // 손가락 아이콘 애니메이션 pause 상태에서 다음 버튼 클릭 시 running으로 전환(클래스로 running, 세번 깜빡이고 hide 처리되게)
    nextBtn.on('click', function () {
        // 손가락 아이콘 위치 지정
        const handIcon = layer3.find('.button-click-hand');
        const firstBtnOn = layer3.find('[data-check-excercise].on').first();
        const firstSpan = firstBtnOn.closest('dt').next().find('span.first.active');
        const spanLeft = firstSpan.offset().left;
        const spanTop = firstSpan.offset().top;

        // 가장 첫번째 span.show.active 위치 파악 후 손가락 띄어주기
        handIcon.css({
            left: `${spanLeft + 130}px`,
            top: `${spanTop - 130}px`,
        });
        handIcon.addClass('running');
    });
}

// 서브3
function scene3() {
    // console.log('scene3 action');
    // * 모둠원 입력
    const layer3 = $('.scene-layer3');
    const span = layer3.find('.set-member-row span');
    const $input = span.find('input');
    const saveBtn = layer3.find('.bottom-btn-area .btn-save');
    const nextBtn = layer3.find('.bottom-btn-area .btn-next');

    // active 상태 span에
    span.each(function () {
        $(this).on('click', function () {
            span.find('input').removeClass('no-placeholder'); // 전체 input placeholder 노출(val없는)
            $(this).find('input').addClass('no-placeholder'); // 해당 input placeholder 미노출

            // span에 active 있는 경우
            if ($(this).hasClass('active')) {
                $(this).next().addClass('show'); // 다음 span show
            } else if (!$(this).hasClass('active') && $(this).hasClass('show')) {
                // active는 없고 show만 있는 경우
                $(this).addClass('active'); // 해당 span active
                $(this).find('input').focus(); // 해당 span의 input에 focus
                $(this).next().addClass('show'); // 다음 span show
            }
        });
    });

    // 각 input 필드에 입력 이벤트 추가
    $input.on('input', function () {
        // 모든 input 중 하나라도 값이 있는지 확인
        const hasVal = $input.toArray().some(input => input.value.trim() !== '');

        if (hasVal) {
            saveBtn.prop('disabled', false); // 저장 버튼 활성화
        } else {
            saveBtn.prop('disabled', true); // 저장 버튼 비활성화
        }
    });

    // 저장 버튼 클릭 시
    saveBtn.on('click', function () {
        nextBtn.prop('disabled', false); // 다음 버튼 활성화

        // 데이터 추출
        const rows = $('.scene-layer3 .set-member-row:has([data-check-excercise].on)'); // 각 row
        let excercise; // 운동 변수
        let allMemArr = []; // input has value 담을 배열
        let allExcerArr = []; // 운동 담을 배열
        let allTargetArr = []; // $target 담을 배열

        // 선택된 row에서 각 row마다 val 있는 input 파악해서 심박수 입력 테이블에 모둠원, 운동명 저장
        rows.each(function () {
            const $target = $(this).find('[data-check-excercise]').data('check-excercise');

            const inpHasVal = $(this)
                .find('span.show input')
                .filter(function () {
                    return $(this).val();
                });

            if ($target == 'sit') {
                excercise = '앉았다 일어서기<br> 30 회';
            } else if ($target == 'jump') {
                excercise = '제자리 뛰기<br> 10 회';
            } else {
                excercise = $('#enterExcercise2').text();
            }

            // 각 row별 .th 다음에 .td 요소를 추가
            const $rowExercise = $('[data-row="excercise"]');
            const $rowMember = $('[data-row="member"]');
            const $rowsHeartbeats = $('.table-col-right .table-row');

            // 기존의 .td 요소 제거
            $('[data-row]').find('.td').remove();

            // inpHasVal.length 만큼 .td 추가하기 위한 데이터 담기
            inpHasVal.each(function () {
                const members = $(this).val();
                // member를 배열에 추가
                allMemArr.push(members);
                // 운동을 배열에 추가
                allExcerArr.push(excercise);
                // $target을 배열에 추가
                allTargetArr.push($target);
            });

            // 모둠원, 운동 텍스트 추가
            for (let i = 0; i < allMemArr.length; i++) {
                $rowMember.append(`<div class="td"><span>${allMemArr[i]}</span></div>`);
                $rowExercise.append(`<div class="td"><span>${allExcerArr[i]}</span></div>`);

                // 심장박동수 입력필드 추가
                // layer4(5 분만) 에는 5 분 필드만 활성화. 나머지는 비활성화
                // layer5(1~5 분뒤) 에는 5 분 필드 비활성화. 나머지 활성화
                $rowsHeartbeats.each(function () {
                    if ($(this).parents('.scene-layer4').length) {
                        // layer4일 경우
                        if ($(this).data('row') == 'before5Min') {
                            $(this).append(
                                `<div class="td active" data-excercise="${allTargetArr[i]}"><span><input type="number" maxlength="3"/></span></div>`,
                            );
                        } else {
                            $(this).append(
                                `<div class="td" data-excercise="${allTargetArr[i]}"><span><input type="number" maxlength="3" readonly/></span></div>`,
                            );
                        }
                    } else if ($(this).parents('.scene-layer5').length) {
                        // layer5일 경우
                        if ($(this).data('row') == 'before5Min') {
                            $(this).append(
                                `<div class="td" data-excercise="${allTargetArr[i]}"><span><input type="number" maxlength="3"/></span></div>`,
                            );
                        } else {
                            $(this).append(
                                `<div class="td active" data-excercise="${allTargetArr[i]}"><span><input type="number" maxlength="3"/></span></div>`,
                            );
                        }
                    }
                });
            }
        });

        // layer4의 이전버튼 클릭 시 member arr 초기화
        $('.scene-layer4 .btn-prev').on('click', function () {
            allTargetArr = []; // 모둠원 초기화
        });
    });
}

// 좌우 스크롤 기능(layer4, layer5 사용)
function scrollFunc() {
    const $scrollOuter = $('.heartbeat-table-wrap .table-box');
    const $scrollInner = $('.heartbeat-table-wrap .table-inner');
    const $scrollBar = $('.scroll-wrap .scrollbar input[type=range]');
    const $btnLeft = $('.scroll-wrap .scroll-to-left > button');
    const $btnRight = $('.scroll-wrap .scroll-to-right > button');
    const scrollStep = 50; // 좌-우 버튼 클릭 시 이동하는 scroll 픽셀 수

    // 스크롤 가능한 너비 계산
    const maxScrollLeft = $scrollInner[0].scrollWidth + 90 - $scrollOuter.width();

    if (maxScrollLeft > 0) {
        //scrollInner가 scrollOuter보다 클 경우에만 적용
        // range의 최대값을 스크롤 가능한 영역에 맞게 설정
        $scrollBar.attr('max', maxScrollLeft);

        // range값 변경 시, scrollInner 스크롤 위치 조정
        $scrollBar.on('input', function () {
            $scrollOuter.scrollLeft($(this).val());
        });

        // 좌/우 버튼으로도 scroll 되게
        // 좌 버튼 클릭 시
        $btnLeft.on('click', function () {
            const desScroll = $scrollOuter.scrollLeft() - scrollStep;
            // 좌로 스크롤
            $scrollOuter.scrollLeft(desScroll);
            // 스크롤바 thumb도 이동
            $scrollBar.val(desScroll);
        });
        // 우 버튼 클릭 시
        $btnRight.on('click', function () {
            const incScroll = $scrollOuter.scrollLeft() + scrollStep;
            // 우로 스크롤
            $scrollOuter.scrollLeft(incScroll);
            // 스크롤바 thumb도 이동
            $scrollBar.val(incScroll);
        });
    } else {
        // scrollInner가 scrollOuter보다 작으면 scrollBar hide
        $scrollBar.closest('.scroll-wrap').addClass('hide');
    }
}

let inpHasValArr;

// 서브4
function scene4() {
    // console.log('scene4 action');

    // 스크롤 기능
    scrollFunc();

    // *심박수 입력 -1
    const layer4 = $('.scene-layer4');
    const layer5 = $('.scene-layer5');
    const $thisRow = layer4.find('[data-row=before5Min]');
    const $nextScRow = layer5.find('[data-row=before5Min]');
    const $input = $thisRow.find('input');
    const $nextInputs = $nextScRow.find('input');
    const saveBtn = layer4.find('.btn-save');

    // layer4의 input
    $input.each(function () {
        $(this).on('input', function () {
            // 입력 시
            this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); // 숫자만 입력되게

            // 다음 레이어의 같은 input에 value 입력되게
            for (let i = 0; i < $input.length; i++) {
                const val = $input.eq(i).val();
                $nextInputs.eq(i).val(val);
            }
            // input의 개수와 value있는 input의 개수가 동일할 경우
            const inpHasVal = $thisRow.find('input').filter(function () {
                // val있는 input 체크
                return $(this).val();
            });
            if ($input.length == inpHasVal.length) {
                // 저장 버튼 활성화
                saveBtn.prop('disabled', false);
            } else {
                // 저장 버튼 비활성화
                saveBtn.prop('disabled', true);
            }
        });
    });

    // 심박수 입력 input 세자리수 max 제한 추가
    $('[data-row] .td input').on('input', function () {
        const max = $(this).attr('maxLength');
        const val = $(this).val();
        if (val.length > max) {
            $(this).val($(this).val().slice(0, max));
        }
    });

    // 저장 버튼 클릭 시
    layer4.find('.btn-save').on('click', function () {
        // 다음 버튼 활성화
        layer4.find('.bottom-btn-area .btn-next').prop('disabled', false);
    });
}

// 차트 관련 js
let sitData, jumpData, customData;

// 심박수 데이터 계산
function calHeartBeat() {
    const rows = $('.scene-layer5 [data-row*=Min]');

    let sitB5mArr = []; // sit - 5 분 전
    let sitA1mArr = []; // sit - 1 분 뒤
    let sitA2mArr = []; // sit - 2 분 뒤
    let sitA3mArr = []; // sit - 3 분 뒤
    let sitA4mArr = []; // sit - 4 분 뒤
    let sitA5mArr = []; // sit - 5 분 뒤

    let jumpB5mArr = []; // jump - 5 분 전
    let jumpA1mArr = []; // jump - 1 분 뒤
    let jumpA2mArr = []; // jump - 2 분 뒤
    let jumpA3mArr = []; // jump - 3 분 뒤
    let jumpA4mArr = []; // jump - 4 분 뒤
    let jumpA5mArr = []; // jump - 5 분 뒤

    let customB5mArr = []; // custom - 5 분 전
    let customA1mArr = []; // custom - 1 분 뒤
    let customA2mArr = []; // custom - 2 분 뒤
    let customA3mArr = []; // custom - 3 분 뒤
    let customA4mArr = []; // custom - 4 분 뒤
    let customA5mArr = []; // custom - 5 분 뒤

    const timeMapping = {
        before5Min: { sit: sitB5mArr, jump: jumpB5mArr, custom: customB5mArr },
        after1Min: { sit: sitA1mArr, jump: jumpA1mArr, custom: customA1mArr },
        after2Min: { sit: sitA2mArr, jump: jumpA2mArr, custom: customA2mArr },
        after3Min: { sit: sitA3mArr, jump: jumpA3mArr, custom: customA3mArr },
        after4Min: { sit: sitA4mArr, jump: jumpA4mArr, custom: customA4mArr },
        after5Min: { sit: sitA5mArr, jump: jumpA5mArr, custom: customA5mArr },
    };

    // 심박수 데이터 뽑기
    function extractExerciseData(time, $this) {
        const timeData = timeMapping[time];

        if (timeData) {
            ['sit', 'jump', 'custom'].forEach(exercise => {
                $this.find(`[data-excercise=${exercise}]`).each(function () {
                    timeData[exercise].push(parseFloat($(this).find('input[type=number]').val()) || 0);
                });
            });
        }
    }

    // 평균값 구하기
    function calculateSumAndAverage(arr) {
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        const avg = sum / (arr.length || 1);
        return { sum, avg };
    }

    rows.each(function () {
        const $time = $(this).data('row');
        extractExerciseData($time, $(this));
    });

    sitData = [
        calculateSumAndAverage(sitB5mArr).avg,
        calculateSumAndAverage(sitA1mArr).avg,
        calculateSumAndAverage(sitA2mArr).avg,
        calculateSumAndAverage(sitA3mArr).avg,
        calculateSumAndAverage(sitA4mArr).avg,
        calculateSumAndAverage(sitA5mArr).avg,
    ];

    jumpData = [
        calculateSumAndAverage(jumpB5mArr).avg,
        calculateSumAndAverage(jumpA1mArr).avg,
        calculateSumAndAverage(jumpA2mArr).avg,
        calculateSumAndAverage(jumpA3mArr).avg,
        calculateSumAndAverage(jumpA4mArr).avg,
        calculateSumAndAverage(jumpA5mArr).avg,
    ];

    customData = [
        calculateSumAndAverage(customB5mArr).avg,
        calculateSumAndAverage(customA1mArr).avg,
        calculateSumAndAverage(customA2mArr).avg,
        calculateSumAndAverage(customA3mArr).avg,
        calculateSumAndAverage(customA4mArr).avg,
        calculateSumAndAverage(customA5mArr).avg,
    ];

    console.log(sitData, jumpData, customData);
}

// myChart를 전역 변수로 선언
let myChart, myChart2;

// 차트 초기화
function resetCharts(sitData = [], jumpData = [], customData = []) {
    // 이미 초기화된 mychart가 있다면 재사용
    if (!myChart) {
        myChart = echarts.init(document.getElementById('viewGraphArea'));
    }

    if (!myChart2) {
        myChart2 = echarts.init(document.getElementById('viewGraphArea2'));
    }

    // 데이터가 모두 0인지 확인하는 함수
    function isAllZeros(data) {
        return Array.isArray(data) && data.length > 0 && data.every(value => value === 0);
    }

    // 데이터가 모두 0인 경우 빈 배열 반환
    function filterData(data) {
        return !data || isAllZeros(data) ? [] : data;
    }

    // 차트 옵션 설정
    const option = {
        tooltip: { show: false },
        legend: { show: false },
        xAxis: {
            type: 'category',
            data: ['운동 전', '운동 뒤 1 분', '운동 뒤 2 분', '운동 뒤 3 분', '운동 뒤 4 분', '운동 뒤 5 분'],
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                fontFamily: 'GmarketSans',
                fontSize: 24,
                color: '#a5aeb8',
                padding: [30, 0, 0, 0],
            },
        },
        yAxis: {
            type: 'value',
            name: '시간',
            axisLabel: {
                fontFamily: 'GmarketSans',
                fontSize: 24,
                color: '#a5aeb8',
                padding: [0, 23, 0, 0],
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted',
                    width: 3,
                    color: '#5d6572',
                    dashOffset: 20,
                },
            },
        },
        series: [
            {
                name: 'sit',
                type: 'line',
                data: filterData(sitData),
                symbol: 'circle',
                symbolSize: 20,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: 'transparent',
                },
                lineStyle: {
                    width: 5,
                    color: 'transparent',
                },
            },
            {
                name: 'jump',
                type: 'line',
                data: filterData(jumpData),
                symbol: 'circle',
                symbolSize: 20,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: 'transparent',
                },
                lineStyle: {
                    width: 5,
                    color: 'transparent',
                },
            },
            {
                name: 'custom',
                type: 'line',
                data: filterData(customData),
                symbol: 'circle',
                symbolSize: 20,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: 'transparent',
                },
                lineStyle: {
                    width: 5,
                    color: 'transparent',
                },
            },
        ],
        grid: {
            left: '78',
            top: '15',
            right: '1',
            bottom: '65',
        },
    };

    const option2 = {
        tooltip: {
            show: false, // 툴팁 미노출
        },
        legend: {
            show: false, // 범례 미노출
        },
        xAxis: {
            type: 'category',
            data: ['운동 전', '운동 뒤 1 분', '운동 뒤 2 분', '운동 뒤 3 분', '운동 뒤 4 분', '운동 뒤 5 분'],
            axisLine: {
                show: false, // X축 라인 숨기기
            },
            axisTick: {
                show: false, // X축의 눈금선 숨기기
            },
            axisLabel: {
                fontFamily: 'GmarketSans', // 폰트 패밀리
                fontSize: 16, // 폰트 크기
                color: '#a5aeb8', // 텍스트 색상
                padding: [22, 0, 0, 0],
            },
        },
        yAxis: {
            type: 'value',
            name: '시간',
            axisLabel: {
                fontFamily: 'GmarketSans', // 폰트 패밀리
                fontSize: 16, // 폰트 크기
                color: '#a5aeb8', // 텍스트 색상
                padding: [0, 20, 0, 0],
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted', // 라인 스타일을 dotted로 변경
                    width: 2, // 라인 두께 설정
                    color: '#5d6572', // 라인 색상
                    dashOffset: 20, // 점선의 간격을 조절
                },
            },
        },
        series: [
            {
                name: 'sit',
                type: 'line',
                data: filterData(sitData), // 데이터가 모두 0일 경우 빈 배열 반환
                symbol: 'circle',
                symbolSize: 15,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: '#407edf',
                },
                lineStyle: {
                    width: 3,
                    color: '#407edf',
                },
            },
            {
                name: 'jump',
                type: 'line',
                data: filterData(jumpData), // 데이터가 모두 0일 경우 빈 배열 반환
                symbol: 'circle',
                symbolSize: 15,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: '#b23c4d',
                },
                lineStyle: {
                    width: 3,
                    color: '#b23c4d',
                },
            },
            {
                name: 'custom',
                type: 'line',
                data: filterData(customData), // 데이터가 모두 0일 경우 빈 배열 반환
                symbol: 'circle',
                symbolSize: 15,
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 0,
                    color: '#21ac56',
                },
                lineStyle: {
                    width: 3,
                    color: '#21ac56',
                },
            },
        ],
        grid: {
            left: '63',
            top: '15',
            right: '1',
            bottom: '50',
        },
    };

    // 차트 초기화
    myChart.setOption(option);
    myChart2.setOption(option2);

    return { myChart, myChart2, option, option2 };
}

// 그래프 색상 값 바뀌는
function colorChange(option) {
    // 시리즈 노출 여부 추적 변수
    let isSeriesVisible = true;

    if (isSeriesVisible) {
        option.series[0].itemStyle.color = '#407edf';
        option.series[0].lineStyle.color = '#407edf';
        option.series[1].itemStyle.color = '#b23c4d';
        option.series[1].lineStyle.color = '#b23c4d';
        option.series[2].itemStyle.color = '#21ac56';
        option.series[2].lineStyle.color = '#21ac56';
    }

    // 상태 업데이트
    isSeriesVisible = !isSeriesVisible;
}

// 서브5
function scene5Sub1() {
    // input 모두 채워져야 저장 버튼 활성화
    const layer5 = $('.scene-layer5');
    const saveBtn = layer5.find('.btn-save');
    const afterRows = layer5.find(`[data-row*=after]`);
    const afterInputs = afterRows.find('input[type=number]');

    layer5.find('[data-excercise] input').prop('readonly', false);

    // input 모두 채워져야 저장버튼 활성화
    afterInputs.each(function () {
        $(this).on('input', function () {
            const afterInpHasVal = afterRows.find('input[type=number]').filter(function () {
                return $(this).val();
            });

            if (afterInputs.length == afterInpHasVal.length) {
                saveBtn.prop('disabled', false);
            } else {
                saveBtn.prop('disabled', true);
            }
        });
    });
}
function scene5() {
    // console.log('scene5 action');

    const layer5 = $('.scene-layer5');
    const saveBtn = layer5.find('.btn-save');
    const nextBtn = layer5.find('.btn-next');

    // 버튼 기능
    saveBtn.on('click', function () {
        nextBtn.prop('disabled', false);

        // 심박수 데이터 계산
        calHeartBeat();

        // 차트 생성
        const { myChart, option } = resetCharts(sitData, jumpData, customData);
        const { myChart2, option2 } = resetCharts(sitData, jumpData, customData);

        // 그래프 전환 버튼 노출
        $('#btnGraphConverse').removeClass('hide');
        // 손 아이콘 노출
        $('.scene-layer6 .button-click-hand').removeClass('hide');
        // 범례 off 제거
        $('.scene-layer6 .legend-area [data-chart-target]').removeClass('off');
        // 그래프 전체보기 disabled
        $('#btnGraphAll').prop('disabled', true);
    });

    // 그래프 전환 버튼 클릭 시
    $('#btnGraphConverse').on('click', function () {
        const { myChart, option } = resetCharts(sitData, jumpData, customData); // option 받아옴

        // 차트 시리즈 투명 상태에서 색 반영
        let isSeriesVisible = true;

        if (isSeriesVisible) {
            option.series[0].itemStyle.color = '#407edf';
            option.series[0].lineStyle.color = '#407edf';
            option.series[1].itemStyle.color = '#b23c4d';
            option.series[1].lineStyle.color = '#b23c4d';
            option.series[2].itemStyle.color = '#21ac56';
            option.series[2].lineStyle.color = '#21ac56';
        }

        // 상태 업데이트
        isSeriesVisible = !isSeriesVisible;

        // 업데이트된 옵션을 적용하여 시리즈를 노출
        myChart.setOption(option);

        $(this).addClass('hide'); // 전환 버튼 hide
        $('.scene-layer6 .button-click-hand').addClass('hide'); // 손 아이콘 미노출

        $('.scene-layer6 .btn-next').prop('disabled', false); // 다음 버튼 활성화
    });

    // 범례 클릭 시 시리즈 노출/미노출 함수
    function legendVisible(btn) {
        const name = btn.dataset.chartTarget;

        const chartOptions = myChart.getOption(); // 현재 차트의 옵션을 가져옴

        $('.scene-layer6 #btnGraphAll').prop('disabled', false); // 전체보기 버튼 활성화

        // 해당하는 시리즈의 index 찾음
        const seriesIndex = chartOptions.series.findIndex(series => series.name === name);

        if (seriesIndex !== -1) {
            const series = chartOptions.series[seriesIndex];

            // 초기진입 시 originalColor 지정해두지 않은 상태라면 저장
            if (!series.itemStyle.originalColor) {
                series.itemStyle.originalColor = {
                    color: name === 'sit' ? '#407edf' : name === 'jump' ? '#b23c4d' : '#21ac56', // 원래 색상 설정
                };
                series.lineStyle.originalColor = series.itemStyle.originalColor.color;
            }

            // 현재 시리즈가 visible한지 확인 (현재 색상이 투명인지 아닌지에 따라)
            const isVisible = series.itemStyle.color !== 'transparent';

            // *색상 토글 로직 (색상을 transparent로 바꾸거나 원래 색상으로 복원)
            myChart.setOption({
                series: [
                    {
                        name: name, // 시리즈의 이름을 사용하여 해당 시리즈만 업데이트
                        itemStyle: {
                            color: isVisible ? 'transparent' : series.itemStyle.originalColor.color,
                        },
                        lineStyle: {
                            color: isVisible ? 'transparent' : series.lineStyle.originalColor,
                        },
                    },
                ],
            });

            // *버튼 클래스 토글 로직 (현재 상태의 반대로 버튼 클래스 토글)
            if (btn.classList.contains('off')) {
                btn.classList.remove('off'); // 시리즈가 다시 보일 때
            } else {
                btn.classList.add('off'); // 시리즈가 사라질 때
            }
        }
    }

    const legendBtns = document.querySelectorAll('.scene-layer6 [data-chart-target]');

    legendBtns.forEach(function (e) {
        e.addEventListener('click', function () {
            legendVisible(this);
        });
    });

    // 그래프 전체보기 클릭 시 시리즈 모두 노출 함수
    function allVisibleSeries() {
        const chartOptions = myChart.getOption(); // 차트의 현재 옵션을 가져옴

        // 범례 removeClass off
        $('.scene-layer6 .legend-area [data-chart-target]').removeClass('off');

        chartOptions.series.forEach((series, index) => {
            // originalColor 미정의 상태일 때 기본값 설정
            if (!series.itemStyle.originalColor) {
                series.itemStyle.originalColor = {
                    color: series.name === 'sit' ? '#407edf' : series.name === 'jump' ? '#b23c4d' : '#21ac56',
                };
                series.lineStyle.originalColor = series.itemStyle.originalColor.color;
            }

            // 현재 시리즈가 투명한지 확인
            if (series.itemStyle.color === 'transparent') {
                myChart.setOption({
                    series: [
                        {
                            name: series.name,
                            itemStyle: {
                                color: series.itemStyle.originalColor.color, // 원래 색상으로 복원
                            },
                            lineStyle: {
                                color: series.lineStyle.originalColor, // 원래 선 색상으로 복원
                            },
                        },
                    ],
                });
            }
        });
    }

    $('#btnGraphAll').on('click', function () {
        allVisibleSeries();
    });
}

// 서브6
function scene6() {
    // // console.log('scene6 action');
    // *그래프 화면 노출 및 범례
}

// 서브7
function scene7() {
    // // console.log('scene7 action');
    // *그래프 화면 결과 분석
    const layer7 = $('.scene-layer7');
    const resultBtn = layer7.find('.result-btn');
    const handIcon = layer7.find('.button-click-hand');
    // 결과 분석 버튼 클릭 시
    resultBtn.on('click', function () {
        // 결과 분석 버튼 미노출
        $(this).addClass('hide');
        // 손 아이콘 미노출
        handIcon.addClass('hide');
    });
}

// layer1 가이드 모달
function guideModal1() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap1');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap1');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_01.paused) {
                audioAct1_01.mute = true;
                audioAct1_01.pause();
            }
            HideGuide('guide-balloon-tip-wrap1');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap1');
        }, 5000),
    );
}

// layer2 가이드 모달
function guideModal2() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap2');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_02.load();
            audioAct1_02.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap2');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_02.paused) {
                audioAct1_02.mute = true;
                audioAct1_02.pause();
            }
            HideGuide('guide-balloon-tip-wrap2');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap2');
        }, 6000),
    );
}

// layer3 가이드 모달
function guideModal3() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap3');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_03.load();
            audioAct1_03.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap3');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_03.paused) {
                audioAct1_03.mute = true;
                audioAct1_03.pause();
            }
            HideGuide('guide-balloon-tip-wrap3');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap3');
        }, 5000),
    );
}

// layer4 가이드 모달
function guideModal4() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap4');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_04.load();
            audioAct1_04.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap4');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_04.paused) {
                audioAct1_04.mute = true;
                audioAct1_04.pause();
            }
            HideGuide('guide-balloon-tip-wrap4');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap4');
        }, 5000),
    );
}

// layer5 가이드 모달
function guideModal5() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap5');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_05.load();
            audioAct1_05.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap5');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_05.paused) {
                audioAct1_05.mute = true;
                audioAct1_05.pause();
            }
            HideGuide('guide-balloon-tip-wrap5');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap5');
        }, 7000),
    );
}

// layer6 가이드 모달
function guideModal6() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap6');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_06.load();
            audioAct1_06.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap6');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_06.paused) {
                audioAct1_06.mute = true;
                audioAct1_06.pause();
            }
            HideGuide('guide-balloon-tip-wrap6');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap6');
        }, 7500),
    );
}

// layer6 가이드 모달
function guideModal7() {
    // 모달 노출
    showGuide('guide-balloon-tip-wrap7');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_07.load();
            audioAct1_07.play();
        }, 1000),
    );

    // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
    $(document).on('mousedown', function (e) {
        const modal = $('.guide-balloon-tip-wrap7');

        if (modal.has(e.target).length == 0) {
            if (!audioAct1_07.paused) {
                audioAct1_07.mute = true;
                audioAct1_07.pause();
            }
            HideGuide('guide-balloon-tip-wrap7');
        }
    });

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            HideGuide('guide-balloon-tip-wrap7');
        }, 4000),
    );
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
    changeScene();
    scene1(); // 초기 진입 시 scene1 호출
    disabledNext(); // 모든 레이어 다음 버튼 비활성화
});
