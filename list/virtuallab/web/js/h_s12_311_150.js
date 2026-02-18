/* [고등1] > 생명과학 */
// 염색체 모형을 이용하여 핵형분석 하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * 2024/10/01                            작업시작
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const startAct = new Audio('../../media/h_s12_311_150/click.mp3'); // 활동목표 노출 시
const audioGoal = new Audio('../../media/h_s12_311_150/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s12_311_150/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s12_311_150/2-act_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s12_311_150/2-act_03.mp3'); // 활동1_03 오디오
const audioAct1_04 = new Audio('../../media/h_s12_311_150/2-act_04.mp3'); // 활동1_04 오디오
const audioAct1_corrent = new Audio('../../media/h_s12_311_150/2-act_correct.mp3'); // 활동1 정답 효과음
const audioAct1_wrong = new Audio('../../media/h_s12_311_150/2-act_wrong.mp3'); // 활동1 오답 효과음
const resultAudio = new Audio('../../media/h_s12_311_150/3-final.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
startAct.volume = 1;
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;
audioAct1_04.volume = 1;
audioAct1_corrent.volume = 1;
audioAct1_wrong.volume = 1;
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

        audioAct1_corrent.load();
        audioAct1_corrent.play();
        audioAct1_corrent.mute = true;
        audioAct1_corrent.pause();
        audioAct1_corrent.currentTime = 0;
        audioAct1_corrent.mute = false;

        audioAct1_wrong.load();
        audioAct1_wrong.play();
        audioAct1_wrong.mute = true;
        audioAct1_wrong.pause();
        audioAct1_wrong.currentTime = 0;
        audioAct1_wrong.mute = false;

        resultAudio.load();
        resultAudio.play();
        resultAudio.mute = true;
        resultAudio.pause();
        resultAudio.currentTime = 0;
        resultAudio.mute = false;

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
    // 활동목표 닫기 시
    btnActivityGoalsClose.on('click', function (e) {
        const thisB = $(this);
        audioGoal.pause(); // 오디오 멈춤
        pageView2.removeClass('active'); // 모달 미노출

        // 진입 시 dimm 처리되고, 첫번째 가이드 모달 노출
        $('.layer-dimmed').addClass('show');

        // 가이드 모달 노출 전 화면 클릭 비활성화
        viewLock('scene-layer1');

        // 가이드 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                guideModal1();
            }, 500),
        );
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
            audioAct1_corrent.volume = 0;
            audioAct1_wrong.volume = 0;
            resultAudio.volume = 0;
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
            audioAct1_corrent.volume = 1;
            audioAct1_wrong.volume = 1;
            resultAudio.volume = 1;
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

    // -----------------------------------------------------------------

    // <스크립트 공통 셋팅 : End> -----------------------------------------------------------------------
}

let timeGuideArray = [];

// setTimeout 초기화
function clearTimeouts() {
    for (let i = 0; i < timeGuideArray.length; i++) {
        clearTimeout(timeGuideArray[i]);
    }

    timeGuideArray = [];
}

// 화면 전환 기능 (공통)
function changeScene(scene) {
    const layers = $('.scene-layer');

    clearTimeouts(); // 일단 모든 setTimeout 초기화
    layers.removeClass('active'); // 전체 layer에서 active 제거
    $(`.scene-layer${scene}`).addClass('active'); // 해당 layer만 active 추가
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

// 화면 클릭 비활성화
function viewLock(layer) {
    $(`.${layer}`).css('pointer-events', 'none');
}

// 화면 클릭 활성화
function viewUnlock(layer) {
    $(`.${layer}`).css('pointer-events', '');
}

// -- 화면별 script -- //

// 드래그 드롭 기능
function dragDrop(parentEl) {
    const layer = $(`.scene-layer${parentEl}`);
    const $dragItem = layer.find('i.drag-item > span');
    const handIcon = layer.find('.drag-guide-wrap');
    const dimmed = layer.find('.box-dimmed');
    let dropCnt = 0; // 드롭 성공 카운드
    const totalItems = $dragItem.length; // 드래그할 아이템 개수

    // 드래그 요소
    $dragItem.draggable({
        start: function (e) {
            $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
            // 드래그 가이드 미노출 추가 필요
            thisItem = $(this).closest('.drag-item').attr('id');
        },
        stop: function () {
            $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
        },
        revert: function (event) {
            if (event == false) {
                isRevert = false;

                // 오답 효과음 재생
                audioAct1_wrong.load();
                audioAct1_wrong.play();

                return true;
            } else {
                isRevert = true;
            }
        },
    });

    // 드롭 요소 설정 및 드롭 가능 여부 검사
    $dragItem.each(function () {
        const $currentDragItem = $(this);
        const dragItemId = $currentDragItem.closest('.drag-item').attr('id');

        // 각 드래그 아이템의 id와 같은 data-drop-target을 가진 요소를 찾음
        const $currentDropTarget = $(`.item-box:has([data-drop-target=${dragItemId}])`);

        // 드롭 요소
        $currentDropTarget.droppable({
            // 현재 드래그 아이템만 드롭 허용
            accept: `#${dragItemId} > span`,
            drop: function (e) {
                const clientRect = e.target.getBoundingClientRect();
                const clientTop = clientRect.top;
                const clientLeft = clientRect.left;
                const dragItem = $(`#${dragItemId}`);
                const boxTop = dragItem.offset().top;
                const boxLeft = dragItem.offset().left;

                // box-dimmed 제거
                dimmed.addClass('hide');

                // 제스처 가이드 미노출
                handIcon.removeClass('show');

                // 프레임 깜빡이 미노출
                layer.find('.item-wrap.has-border').removeClass('has-border');

                $(`#${dragItemId} > span`).addClass('moved').draggable('option', 'disabled', true); // 한번 드롭하면 드래그 비활성화

                $(this).addClass('fill'); // fill 클래스 추가

                // 정답 효과음 재생
                audioAct1_corrent.load();
                audioAct1_corrent.play();

                // 영역 안에 위치 설정
                $(`#${dragItemId} > span`).css({
                    left: `${clientLeft - boxLeft + 62}px`,
                    top: `${clientTop - boxTop + 7}px`,
                });

                // 드롭 성공 카운드
                dropCnt++;

                // 모든 드래그 아이템 드롭 성공 시
                if (dropCnt == totalItems) {
                    if (parentEl == 1) {
                        // 레이어1일 경우 레이어2 호출
                        scene2();
                    } else if (parentEl == 2) {
                        // 레이어2일 경우 레이어3 호출
                        scene3();
                    }
                }
            },
        });
    });
}

// 서브1
function scene1() {
    dragDrop(1);
}

// 서브2
function scene2() {
    // 1초 뒤에
    timeGuideArray.push(
        setTimeout(() => {
            changeScene(2); // scene 바뀜
            // $('.drag-guide-wrap-2').addClass('show'); // 제스처 가이드 작동

            guideModal2(); // 가이드 모달 노출
        }, 1000),
    );

    dragDrop(2);
}

// 서브3
function scene3() {
    const cleanUp = $('.tab-list-basic');

    // 1초 뒤에
    timeGuideArray.push(
        setTimeout(() => {
            changeScene(3); // scene 바뀜

            timeGuideArray.push(
                setTimeout(() => {
                    // 타이핑 모달 가이드 노출
                    textTyping('guide-modal-tip-wrap1');

                    // 음성 출력
                    setTimeout(() => {
                        audioAct1_03.load();
                        audioAct1_03.play();
                    }, 1000);

                    // 음성 출력 중 클릭하면 해당 음성 paused
                    $(document).on('mousedown', function (e) {
                        const modal = $('.guide-modal-tip-wrap1');

                        if (modal.has(e.target).length == 0) {
                            if (!audioAct1_03.paused) {
                                audioAct1_03.mute = true;
                                audioAct1_03.pause();
                            }
                            HideGuide('guide-modal-tip-wrap1');

                            // 정리하기 바로 노출
                            cleanUp.addClass('active');
                        }
                    });
                }, 1000),

                timeGuideArray.push(
                    setTimeout(() => {
                        // 가이드 미노출
                        HideGuide('guide-modal-tip-wrap1');
                        // 정리하기 노출
                        cleanUp.addClass('active');
                    }, 6500),
                ),
            );
        }, 1000),
    );

    // 정리하기 버튼 클릭 시
    cleanUp.find('.button-tab').on('click', function () {
        // 정리하기 레이어 노출
        $('.modal-layer-activity-goals3').addClass('active');
        $('.modal-layer-activity-goals3 .tab-modal').addClass('active');

        // 음성 출력
        timeGuideArray.push(
            setTimeout(() => {
                resultAudio.load();
                resultAudio.play();
            }, 1000),
        );
    });

    // 정리하기 닫기 버튼 클릭 시
    $('.modal-layer-activity-goals3 .button-close').on('click', function () {
        // 정리하기 레이어 미노출
        $('.modal-layer-activity-goals3 .tab-modal').removeClass('active');

        timeGuideArray.push(
            setTimeout(() => {
                $('.modal-layer-activity-goals3').removeClass('active');
            }, 200),
        );

        // 음성 출력 중이면 paused
        if (!resultAudio.paused) {
            resultAudio.mute = true;
            resultAudio.pause();
        }
    });
}

// layer1 가이드 모달
function guideModal1() {
    // 가이드 노출
    showGuide('guide-balloon-tip-wrap1');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1000),
    );

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            // 가이드 미노출
            HideGuide('guide-balloon-tip-wrap1');

            // 화면 클릭 활성화
            viewUnlock('scene-layer1');

            // dimmed 제거
            $('.layer-dimmed').removeClass('show');

            // box-dimmed 노출
            $('.scene-layer1 .box-dimmed').removeClass('hide');

            // 제스처 가이드 노출
            $('.drag-guide-wrap-1').addClass('show');

            // 4초 뒤
            timeGuideArray.push(
                setTimeout(() => {
                    // 제스처 가이드 미노출
                    $('.drag-guide-wrap-1').removeClass('show');
                    // box-dimmed 미노출
                    $('.scene-layer1 .box-dimmed').addClass('hide');
                    // 프레임 깜빡이 추가 (추가 시에 .item-wrap.eq(0) .item-box에 fill 붙어있으면 프레임 안붙음)
                    if (!$('.scene-layer1 .chromosome-box-view .item-wrap:first-of-type .item-box').hasClass('fill')) {
                        $('.scene-layer1 .chromosome-box-view .item-wrap').eq(0).addClass('has-border');
                    }
                }, 4300),
            );

            // 첫번째 염색체, 핵형 zIndex 추가
            $('.scene-layer1 .chromosome-box-view .item-wrap').eq(0).addClass('zIndex');
            $('.scene-layer1 .chromosome-box-view .drag-item').eq(0).addClass('zIndex');
        }, 8000),
    );
}

// layer2 가이드 모달
function guideModal2() {
    // layer-dimmed 노출
    $('.layer-dimmed').addClass('show');

    // 모달 노출
    showGuide('guide-balloon-tip-wrap2');

    // 음성 재생
    timeGuideArray.push(
        setTimeout(() => {
            audioAct1_02.load();
            audioAct1_02.play();

            // 화면 클릭 비활성화
            viewLock('scene-layer2');
        }, 1000),
    );

    // 모달 미노출
    timeGuideArray.push(
        setTimeout(() => {
            // 가이드 미노출
            HideGuide('guide-balloon-tip-wrap2');

            // 화면 클릭 활성화
            viewUnlock('scene-layer2');

            // dimmed 제거
            $('.layer-dimmed').removeClass('show');

            // box-dimmed 노출
            $('.scene-layer2 .box-dimmed').removeClass('hide');

            // 제스처 가이드 노출
            $('.drag-guide-wrap-2').addClass('show');

            // 4초 뒤
            timeGuideArray.push(
                setTimeout(() => {
                    // 제스처 가이드 미노출
                    $('.drag-guide-wrap-2').removeClass('show');
                    // box-dimmed 미노출
                    $('.scene-layer2 .box-dimmed').addClass('hide');
                    // 프레임 깜빡이 추가 (추가 시에 .item-wrap.eq(0) .item-box에 fill 붙어있으면 프레임 안붙음)
                    if (!$('.scene-layer2 .chromosome-box-view .item-wrap:first-of-type .item-box').hasClass('fill')) {
                        $('.scene-layer2 .chromosome-box-view .item-wrap').eq(0).addClass('has-border');
                    }
                }, 5800),
            );

            // 첫번째 염색체, 핵형 zIndex 추가
            $('.scene-layer2 .chromosome-box-view .item-wrap').eq(0).addClass('zIndex');
            $('.scene-layer2 .chromosome-box-view .drag-item').eq(0).addClass('zIndex');
        }, 8000),
    );
}

// 모달 타이핑 효과
function textTyping($target) {
    const $modal = document.querySelector(`.${$target}`);
    const $text = $modal.querySelector('.modal-text'); // 타겟
    const $letters = []; // 글자
    $letters.push($text.dataset.typingText);

    $modal.classList.add('active');

    // 글자 출력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = $letters[i].split('');

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);
    };

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    setTimeout(typing, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
    scene1(); // 초기 진입 시 scene1 호출
});
