/* [고등1] > 물리학 */
// 유도 전류의 방향
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s7_223_118/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s7_223_118/2-act_01.mp3'); // 활동1_01 오디오
const resultAudio = new Audio('../../media/h_s7_223_118/3-final.mp3'); // 정리하기 오디오
const resultAudio_01 = new Audio('../../media/h_s7_223_118/3-final_01.mp3'); // 정리하기 오디오
const resultAudio_02 = new Audio('../../media/h_s7_223_118/3-final_02.mp3'); // 정리하기 오디오
const audioGoal_pop = new Audio('../../media/h_s7_223_118/click.mp3'); // 활동목표 팝업

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
resultAudio.volume = 1;
resultAudio_01.volume = 1;
resultAudio_02.volume = 1;
audioGoal_pop.volume = 1;

function pageView() {
    // <스크립트 공통 셋팅 : Start> --------------------------------------------------------------------

    $('[name=e-minus]').css('visibility', 'hidden');
    $('[name=e-plus]').css('visibility', 'hidden');

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
    let wConHsound = $('.click-sound');
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
            resultAudio_01.volume = 0;
            resultAudio_02.volume = 0;
            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio.volume = 1;
            resultAudio_01.volume = 1;
            resultAudio_02.volume = 1;
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

        // 11초 후 모달과 텍스트 비활성화 (타이머 설정)
        setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
        }, 11000);

        // 가이드 음성 재생 완료 후 정리하기 버튼 노출
        setTimeout(function () {
            $('.tab-list-basic').addClass('active');
        }, 12000);

        // 6초 후 자석 모션 시작
        // magnetTimeout = setTimeout(guideMoveMagnetWrap, 6000);

        // 11초 후 마우스포인터 block
        // setTimeout(function () {
        //     $('.item-magnet').css('cursor', 'pointer');
        //     $('.magnet-btn').css('cursor', 'pointer');
        // }, 12000);

        // 12초 후 손가락 드래그 가이드
        // setTimeout(function () {
        //     $('.drag-area-magnet').addClass('active');
        //     $('.gesture-magnet-finger1').addClass('active');
        // }, 12000);

        // 조건에 따라 타이머를 취소할 경우
        // clearTimeout(audioTimeout); // 오디오 재생 타이머 취소
        // clearTimeout(hideTimeout);  // 모달 비활성화 타이머 취소
        // clearTimeout(magnetTimeout);  // 자석 모션 비활성화 타이머 취소

        //$('.item-magnet').on('click', function () {
        //    $('.tab-list-basic').addClass('active');
        //});

        $('.tab-list-basic .button-tab').on('click', function () {
            const thisB = $(this);
            if (thisB.hasClass('active')) {
                thisB.removeClass('active');
                $('.modal-layer-activity-goals3').removeClass('active');
            } else {
                thisB.addClass('active');
                $('.modal-layer-activity-goals3').addClass('active');
                // resultAudio.load();
                // setTimeout(function () {
                //     resultAudio.play();
                // }, 1000);
            }
        });

        $('.modal-layer-activity-goals3 .button-close').on('click', function () {
            const thisB = $(this);
            thisB.closest('.modal-layer-activity-goals3').removeClass('active');
            $('.tab-list-basic .button-tab').removeClass('active');
            // resultAudio.pause();
        });

        let oldX = 0;

        let lightLevel = 0;
        $('.drag-area-magnet').draggable({
            containment: '',
            cursor: 'pointer',
            snap: '.item-magnet-line',
            handle: '.item-magnet',
            axis: 'x', // 수평으로만 드래그 가능
            start: function (event, ui) {
                // .drag-area-magnet에 active 클래스가 없으면 드래그 불가
                $(this).on('touchmove', function (e) {
                    e.preventDefault(); // 기본 스크롤 동작 방지
                });
                if (!$(this).hasClass('active')) {
                    return false; // 드래그 취소
                }
            },
            drag: function (event, ui) {
                // .item-coil-wrap의 top 값 가져오기
                let coilLeft = $('.item-magnet-coil-front').position().left - 200.5;

                // .item-magnet-wrap의 top 값이 .item-coil-wrap의 top 값보다 크면 coilLeft 값으로 고정
                if (ui.position.left >= coilLeft) {
                    ui.position.left = coilLeft - 1; // .item-magnet-wrap의 top 값을 .item-coil-wrap보다 작게 고정
                }

                // top 값을 0에서 120으로 제한
                if (ui.position.left > 0) {
                    ui.position.left = 0;
                }
                if (ui.position.left < -1125) {
                    ui.position.left = -1125;
                }

                // 단계적 드래그를 위한 값 계산 (10단계로 나누기)
                let stepSize = 120 / 10; // 각 단계는 12px씩 나누기
                let currentStep = Math.round(ui.position.left / stepSize); // 현재 단계(0~10)
                let snappedPosition = currentStep * stepSize; // 고정된 단계 위치

                // left 값을 고정된 단계에 맞게 조정
                ui.position.left = snappedPosition;

                let positionDifference = Math.abs(snappedPosition - coilLeft);

                // 구리선에 가까워 질수록 라이트 밝기 조절 처리
                let tempLevel = 0;
                if (positionDifference <= 900) {
                    tempLevel = 1;
                } else if (positionDifference > 900 && positionDifference <= 1000) {
                    tempLevel = 2;
                } else if (positionDifference > 1000 && positionDifference <= 1050) {
                    tempLevel = 3;
                } else if (positionDifference > 1050 && positionDifference <= 1100) {
                    tempLevel = 4;
                } else if (positionDifference > 1100 && positionDifference <= 1200) {
                    tempLevel = 5;
                } else if (positionDifference > 1200 && positionDifference <= 1250) {
                    tempLevel = 4;
                } else if (positionDifference > 1250 && positionDifference <= 1300) {
                    tempLevel = 3;
                } else if (positionDifference > 1300 && positionDifference <= 1350) {
                    tempLevel = 2;
                } else if (positionDifference > 1350) {
                    tempLevel = 1;
                }

                if (tempLevel > lightLevel) {
                    $('.item-light').attr('class', 'item-light active' + tempLevel);
                    lightLevel = tempLevel;
                }

                function Mobile() {
                    return /webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
                }
                if (Mobile()) {
                    // 모바일일 경우
                    $('.item-light').css('transition-duration', '0.0s');
                } else {
                    // 모바일 외
                    $('.item-light').css('transition-duration', '0.3s');
                }

                // 전류의 방향 처리
                if (positionDifference != oldX) {
                    const isLeft = positionDifference > oldX;

                    const isLeftOfCenter = positionDifference > 1125;

                    if (flag) {
                        // 왼쪽은 N극 오른쪽은 S극
                        if (isLeftOfCenter) {
                            // 중심보다 왼쪽
                            if (isLeft) {
                                // 이동을 왼쪽으로 이동 전극 - 임
                                $('[name=e-minus]').css('visibility', 'hidden');
                                $('[name=e-plus]').css('visibility', '');
                            } else {
                                // 이동을 오른쪽으로 이동 전극 + 임
                                $('[name=e-minus]').css('visibility', '');
                                $('[name=e-plus]').css('visibility', 'hidden');
                            }
                        } else {
                            // 중심보다 오른쪽
                            if (isLeft) {
                                // 이동을 왼쪽으로 이동 전극 + 임
                                $('[name=e-minus]').css('visibility', '');
                                $('[name=e-plus]').css('visibility', 'hidden');
                            } else {
                                // 이동을 오른쪽으로 이동 전극 - 임
                                $('[name=e-minus]').css('visibility', 'hidden');
                                $('[name=e-plus]').css('visibility', '');
                            }
                        }
                    } else {
                        // 왼쪽이 S극 오른쪽이 N극
                        if (isLeftOfCenter) {
                            // 중심보다 왼쪽
                            if (isLeft) {
                                // 이동을 왼쪽으로 이동 전극 + 임
                                $('[name=e-minus]').css('visibility', '');
                                $('[name=e-plus]').css('visibility', 'hidden');
                            } else {
                                // 이동을 오른쪽으로 이동 전극 - 임
                                $('[name=e-minus]').css('visibility', 'hidden');
                                $('[name=e-plus]').css('visibility', '');
                            }
                        } else {
                            // 중심보다 오른쪽
                            if (isLeft) {
                                // 이동을 왼쪽으로 이동 전극 - 임
                                $('[name=e-minus]').css('visibility', 'hidden');
                                $('[name=e-plus]').css('visibility', '');
                            } else {
                                // 이동을 오른쪽으로 이동 전극 + 임
                                $('[name=e-minus]').css('visibility', '');
                                $('[name=e-plus]').css('visibility', 'hidden');
                            }
                        }
                    }
                }

                oldX = positionDifference;

                // 모든 motion 클래스를 제거하고 해당 단계의 클래스 추가
                $('.drag-area-magnet').removeClass(function (index, className) {
                    return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
                });

                // motion 클래스를 단계에 맞게 추가
                $('.drag-area-magnet').addClass('motion' + (currentStep + 1)); // 1단계부터 시작
            },
            stop: function (event, ui) {
                // 드레그가 멈쳤을 때
                lightDown(); // 라이트를 끈다
            },
        });

        let mouseStopTimeout;
        let mouseStopDelay = 170; // 0.5초 동안 마우스가 움직이지 않으면 멈췄다고 간주
        $('.drag-area-magnet').on('mousemove', function () {
            clearTimeout(mouseStopTimeout); // 기존 타이머를 초기화
            // 새 타이머 설정 (0.5초 후에 마우스 멈춤 감지)
            mouseStopTimeout = setTimeout(lightDown, mouseStopDelay);
        });

        // 움직이지 않았을 시 라이트 불끄기 처리
        function lightDown() {
            if (lightLevel !== 0) {
                function processLight(x) {
                    if (x > 0) {
                        // 클래스 제거
                        $('.item-light').removeClass(function (index, className) {
                            return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                        });
                        // 클래스 추가
                        $('.item-light').addClass('active' + (x - 1));
                        setTimeout(function () {
                            processLight(x - 1); // 1초 후 다음 단계 실행
                        }, 180); // 1초 간격
                    } else {
                        lightLevel = 0;
                    }
                }
                processLight(lightLevel); // 시작
            } else {
                // 클래스 제거
                $('.item-light').removeClass(function (index, className) {
                    return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                });
            }
            $('[name=e-minus]').css('visibility', 'hidden');
            $('[name=e-plus]').css('visibility', 'hidden');
        }
    }

    let flag = true;
    // 자석 회전 버튼
    $('.item-magnet-btn').on('click', function () {
        $('.item-magnet').toggleClass('on');
        $('.item-magnet-line').toggleClass('on');
        flag = !flag;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
