/* [고등1] > 통합과학2 */
// 자석과 코일을 이용하여 전자기 유도 현상 관찰하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const clickGoal = new Audio('../../media/h_s2_222_104/click.mp3'); // 활동목표 공통 효과음
const audioGoal = new Audio('../../media/h_s2_222_104/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s2_222_104/2-act1_01.mp3'); // 활동1_01 오디오
const resultAudio = new Audio('../../media/h_s2_222_104/3-final.mp3'); // 정리하기 오디오
const resultAudio_01 = new Audio('../../media/h_s2_222_104/3-final_01.mp3'); // 정리하기 오디오
const resultAudio_02 = new Audio('../../media/h_s2_222_104/3-final_02.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
clickGoal.volume = 1;
audioGoal.volume = 1;
audioAct1_01.volume = 1;
resultAudio.volume = 1;
resultAudio_01.volume = 1;
resultAudio_02.volume = 1;

function pageView() {
    // <스크립트 공통 셋팅 : Start> --------------------------------------------------------------------

    const wrapSetView = $('.wrapper-set-view');
    const pageView1 = wrapSetView.find('.page-view1');
    const pageView2 = wrapSetView.find('.page-view2');
    const pageView3 = wrapSetView.find('.page-view3');
    const pageView4 = wrapSetView.find('.page-view4');

    // 플래그 변수 추가
    let isGuideActive = false;

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
        clickGoal.play();
        clickGoal.mute = true;
        clickGoal.pause();
        clickGoal.currentTime = 0;
        clickGoal.mute = false;

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

        setTimeout(function () {
            // '활동시작' 클릭 시 오디오 재생
            clickGoal.play();
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
            clickGoal.volume = 0;
            audioGoal.volume = 0;
            audioAct1_01.volume = 0;
            resultAudio.volume = 0;
            resultAudio_01.volume = 0;
            resultAudio_02.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            clickGoal.volume = 1;
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio.volume = 1;
            resultAudio_01.volume = 1;
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
        let startTime = Date.now(); // 타이머 시작 시간을 기록
        let hideDuration = 10000; // 기본 모달 비활성화 시간 (10초)
        let gestureDuration = 11000; // 기본 손가락 가이드 활성화 시간 (11초)

        // 가이드 모달 활성화
        $('.guide-balloon-tip-wrap1').addClass('active');
        $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

        // 1초 후 오디오 재생 (타이머 설정)
        audioTimeout = setTimeout(function () {
            // 플래그 활성화
            isGuideActive = true;

            audioAct1_01.load();
            audioAct1_01.play();
        }, 1000);

        // 10초 후 모달과 텍스트 비활성화 (타이머 설정)
        hideTimeout = setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
        }, hideDuration);

        // 15초 후 자석 모션 시작
        // magnetTimeout = setTimeout(guideMoveMagnetWrap, 15000);

        // 21초 후 코일 모션 시작
        // coilTimeout = setTimeout(guideMoveCoilWrap, 21000);

        // 11초 후 손가락 드래그 가이드
        gestureTimeout = setTimeout(function () {
            $('.gesture-arrow').removeClass('active');
            $('.item-magnet-wrap').addClass('active');
            $('.item-coil-wrap').addClass('active');
            $('.gesture-magnet-finger1').addClass('active');
            $('.gesture-coil-finger2').addClass('active');
        }, gestureDuration);

        // 조건에 따라 타이머를 취소할 경우
        // clearTimeout(audioTimeout); // 오디오 재생 타이머 취소
        // clearTimeout(hideTimeout);  // 모달 비활성화 타이머 취소
        // clearTimeout(magnetTimeout);  // 자석 모션 비활성화 타이머 취소

        // 화면 클릭 시 타이머 감소
        $(document).on('click', function () {
            if (isGuideActive) {
                audioAct1_01.pause();
                audioAct1_01.currentTime = 0;
                $('.guide-balloon-tip-wrap').removeClass('active');
                isGuideActive = false; // 첫 클릭 이후 다시 실행되지 않도록 플래그 업데이트

                // 남은 시간을 계산
                let elapsedTime = Date.now() - startTime;

                // 남은 시간이 있으면 타이머 재설정
                if (elapsedTime < hideDuration) {
                    clearTimeout(hideTimeout); // 기존 타이머 취소
                    hideTimeout = setTimeout(function () {
                        $('.guide-balloon-tip-wrap1').removeClass('active');
                    }, 1000); // 남은 시간만큼 타이머 설정
                }

                if (elapsedTime < gestureDuration) {
                    clearTimeout(gestureTimeout); // 기존 타이머 취소
                    gestureTimeout = setTimeout(function () {
                        $('.gesture-arrow').removeClass('active');
                        $('.item-magnet-wrap').addClass('active');
                        $('.item-coil-wrap').addClass('active');
                        $('.gesture-magnet-finger1').addClass('active');
                        $('.gesture-coil-finger2').addClass('active');
                    }, 2000); // 남은 시간만큼 타이머 설정
                }
            }
        });
    }

    function secondActivity() {
        let coilTimeout;
        let contentStartSet;
    }

    // 자석 가이드 시작 ---------------------------------------------------------
    var stepSizeM = 12; // 각 단계는 12px
    var maxCyclesM = 3; // 3회 반복
    var currentCycleM = 0; // 현재 몇 번째 반복인지 추적
    var goingDownM = true; // top 값이 증가하는 방향
    var timeouts = []; // setTimeout

    function guideMoveMagnetWrap() {
        // 현재 top 값 가져오기
        var currentTop = $('.item-magnet-wrap').position().top;

        // 이동 처리
        var newTop;
        if (goingDownM) {
            // top 값을 stepSizeM만큼 증가시키기
            newTop = currentTop + stepSizeM;
            // top 값을 120px로 제한
            if (newTop >= 120) {
                newTop = 120;
                goingDownM = false; // 120에 도달하면 방향을 위로 변경
            }
        } else {
            // top 값을 stepSizeM만큼 감소시키기
            newTop = currentTop - stepSizeM;
            // top 값을 0px로 제한
            if (newTop <= 0) {
                newTop = 0;
                goingDownM = true; // 0에 도달하면 방향을 아래로 변경
                currentCycleM++; // 하나의 상승-하강 사이클 완료 시 cycle 카운트 증가
            }
        }

        // .item-magnet-wrap의 top 값을 업데이트
        $('.item-magnet-wrap').css('top', newTop + 'px');

        $('.bottom-plate-wrap').removeClass(function (index, className) {
            return (className.match(/(^|\s)active\S+/g) || []).join(' ');
        });
        $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
            return (className.match(/(^|\s)active\S+/g) || []).join(' ');
        });

        if (newTop >= 0 && newTop <= 24) {
            $('.bottom-plate-wrap').addClass('active1');
            $('.background-light-bulb-board-wrap').addClass('active1');
        } else if (newTop > 24 && newTop <= 48) {
            $('.bottom-plate-wrap').addClass('active2');
            $('.background-light-bulb-board-wrap').addClass('active2');
        } else if (newTop > 48 && newTop <= 72) {
            $('.bottom-plate-wrap').addClass('active3');
            $('.background-light-bulb-board-wrap').addClass('active3');
        } else if (newTop > 72 && newTop <= 108) {
            $('.bottom-plate-wrap').addClass('active4');
            $('.background-light-bulb-board-wrap').addClass('active4');
        } else if (newTop > 108 && newTop <= 120) {
            $('.bottom-plate-wrap').addClass('active5');
            $('.background-light-bulb-board-wrap').addClass('active5');
        }

        // 3회 반복이 완료되면 gesture-arrow의 active 클래스 제거
        if (currentCycleM >= maxCyclesM) {
            $('.item-magnet-wrap .gesture-arrow').removeClass('active'); // active 클래스 제거
        } else {
            // 반복 동작이 완료되지 않았으면 다시 호출
            setTimeout(guideMoveMagnetWrap, 50);
        }
    }

    // 자석 가이드 끝 ---------------------------------------------------------

    // 코일 가이드 시작 ---------------------------------------------------------
    var stepSizeC = 12; // 각 이동 시 top 값을 12px씩 변경
    var maxCyclesC = 3; // 3회 반복
    var currentCycleC = 0; // 현재 몇 번째 반복인지 추적
    var goingDownC = true; // top 값이 감소하는 방향 (120 -> 0)

    function guideMoveCoilWrap() {
        if (currentCycleC < maxCyclesC) {
            // 현재 top 값 가져오기
            var currentTop = $('.item-coil-wrap').position().top;

            // 이동 처리
            var newTop;
            if (goingDownC) {
                // top 값을 120에서 0으로 감소
                newTop = currentTop - stepSizeC;
                if (newTop <= 0) {
                    newTop = 0;
                    goingDownC = false; // 0에 도달하면 다시 위로 이동 (0 -> 120)
                }
            } else {
                // top 값을 0에서 120으로 증가
                newTop = currentTop + stepSizeC;
                if (newTop >= 120) {
                    newTop = 120;
                    goingDownC = true; // 120에 도달하면 다시 아래로 이동 (120 -> 0)
                    currentCycleC++; // 하나의 상승-하강 사이클 완료 시 cycle 카운트 증가
                }
            }

            // .item-coil-wrap의 top 값을 업데이트
            $('.item-coil-wrap').css('top', newTop + 'px');

            // motion 클래스를 단계에 맞게 업데이트
            var motionClassNumber = Math.round(newTop / stepSizeC) + 1; // 1~11 범위의 motion 클래스 번호 계산
            var newMotionClass = 'motion' + motionClassNumber; // motion1, motion2, ..., motion11

            // .clamp-wire의 기존 motion 클래스 제거 및 새로운 motion 클래스 추가
            $('.clamp-wire')
                .removeClass(function (index, className) {
                    return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
                })
                .addClass(newMotionClass);

            $('.shadow-clamp-wire')
                .removeClass(function (index, className) {
                    return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
                })
                .addClass(newMotionClass);

            $('.item-coil-shadow')
                .removeClass(function (index, className) {
                    return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
                })
                .addClass(newMotionClass);

            $('.bottom-plate-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
            });
            $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
            });

            // currentTop이 0에 도달하면 .background-light-bulb-board-wrap에 active 추가
            if (newTop >= 0 && newTop <= 24) {
                $('.bottom-plate-wrap').addClass('active5');
                $('.background-light-bulb-board-wrap').addClass('active5');
            } else if (newTop > 24 && newTop <= 48) {
                $('.bottom-plate-wrap').addClass('active4');
                $('.background-light-bulb-board-wrap').addClass('active4');
            } else if (newTop > 48 && newTop <= 72) {
                $('.bottom-plate-wrap').addClass('active3');
                $('.background-light-bulb-board-wrap').addClass('active3');
            } else if (newTop > 72 && newTop <= 108) {
                $('.bottom-plate-wrap').addClass('active2');
                $('.background-light-bulb-board-wrap').addClass('active2');
            } else if (newTop > 108 && newTop <= 120) {
                $('.bottom-plate-wrap').addClass('active1');
                $('.background-light-bulb-board-wrap').addClass('active1');
            }

            // 3회 반복이 완료되지 않으면 다시 호출
            setTimeout(guideMoveCoilWrap, 50);
        } else {
            // 3회 반복이 완료되면 gesture-arrow의 active 클래스 제거
            $('.gesture-arrow').removeClass('active'); // active 클래스 제거
        }
    }

    // 코일 가이드 끝 ---------------------------------------------------------

    /*
    $('.item-magnet-wrap').removeClass(function (index, className) {
        return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
    });
    $('.item-coil-wrap').removeClass(function (index, className) {
        return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
    });
    $('.clamp-wire').removeClass(function (index, className) {
        return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
    });
    $('.shadow-clamp-wire').removeClass(function (index, className) {
        return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
    });

    $('.item-magnet-wrap').addClass('motion1');
    $('.item-coil-wrap').addClass('motion11');
    $('.clamp-wire').addClass('motion11');
    $('.shadow-clamp-wire').addClass('motion11');
    */
    var debounceTimeout;

    var gestureExecuted1 = false; // 플래그 변수 추가

    $('.item-magnet-wrap').css({
        left: '0px',
        top: '0px',
    });

    $('.item-magnet-wrap').draggable({
        axis: 'y', // 수직으로만 드래그 가능
        start: function (event, ui) {
            // .item-magnet-wrap에 active 클래스가 없으면 드래그 불가
            if (!$(this).hasClass('active')) {
                return false; // 드래그 취소
            }
        },
        drag: function (event, ui) {
            if (!gestureExecuted1) {
                $('.gesture-box-guide-finger1').addClass('active');

                // 플래그 체크
                // if ($('.gesture-box-guide-finger2').hasClass('active')) {
                //     $('.gesture-box-guide-finger').removeClass('active', 100, function () {
                //         $('.gesture-box-guide-finger1').addClass('active');
                //         // $('.gesture-box-guide-finger2').addClass('active');
                //     });
                // } else {
                //     $('.gesture-box-guide-finger1').addClass('active');
                // }
                gestureExecuted1 = true; // 플래그 설정
            }
            // $('.gesture-magnet-finger1').removeClass('active');
            $('.click-box-guide1').addClass('active');

            // .item-coil-wrap의 top 값 가져오기
            var coilTop = $('.item-coil-wrap').position().top;

            // .item-magnet-wrap의 top 값이 .item-coil-wrap의 top 값보다 크면 coilTop 값으로 고정
            if (ui.position.top >= coilTop) {
                ui.position.top = coilTop - 1; // .item-magnet-wrap의 top 값을 .item-coil-wrap보다 작게 고정
            }

            // top 값을 0에서 120으로 제한
            if (ui.position.top > 120) {
                ui.position.top = 120;
            }
            if (ui.position.top < 0) {
                ui.position.top = 0;
            }

            // 단계적 드래그를 위한 값 계산 (10단계로 나누기)
            var stepSize = 120 / 10; // 각 단계는 12px씩 나누기
            var currentStep = Math.round(ui.position.top / stepSize); // 현재 단계(0~10)
            var snappedPosition = currentStep * stepSize; // 고정된 단계 위치

            // top 값을 고정된 단계에 맞게 조정
            ui.position.top = snappedPosition;

            var positionDifference = Math.abs(snappedPosition - coilTop);

            $('.bottom-plate-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
            });
            $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
            });

            if (snappedPosition != coilTop) {
                if (positionDifference > 0 && positionDifference <= 24) {
                    $('.bottom-plate-wrap').addClass('active5');
                    $('.background-light-bulb-board-wrap').addClass('active5');
                } else if (positionDifference > 24 && positionDifference <= 48) {
                    $('.bottom-plate-wrap').addClass('active4');
                    $('.background-light-bulb-board-wrap').addClass('active4');
                } else if (positionDifference > 48 && positionDifference <= 72) {
                    $('.bottom-plate-wrap').addClass('active3');
                    $('.background-light-bulb-board-wrap').addClass('active3');
                } else if (positionDifference > 72 && positionDifference <= 108) {
                    $('.bottom-plate-wrap').addClass('active2');
                    $('.background-light-bulb-board-wrap').addClass('active2');
                } else if (positionDifference > 108 && positionDifference < 120) {
                    $('.bottom-plate-wrap').addClass('active1');
                    $('.background-light-bulb-board-wrap').addClass('active1');
                }
            } else {
                timeouts.push(
                    setTimeout(function () {
                        // .item-coil-wrap과 .item-magnet-wrap의 top 값이 같을 경우
                        $('.bottom-plate-wrap').removeClass(function (index, className) {
                            return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                        });
                        $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                            return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                        });
                    }, 100),
                );
                setTimeout(function () {
                    timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                    timeouts = [];
                }, 150);
            }

            // .item-magnet-wrap과 .item-coil-wrap의 top 값이 일치하는지 확인
            // if (snappedPosition === coilTop) {
            //     $('.background-light-bulb-board-wrap').addClass('active'); // 일치하면 active 클래스 추가
            // } else {
            //     $('.background-light-bulb-board-wrap').removeClass('active'); // 일치하지 않으면 active 클래스 제거
            // }

            // 모든 motion 클래스를 제거하고 해당 단계의 클래스 추가
            $('.item-magnet-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            // motion 클래스를 단계에 맞게 추가
            $('.item-magnet-wrap').addClass('motion' + (currentStep + 1)); // 1단계부터 시작
        },
        stop: function (event, ui) {
            timeouts.push(
                setTimeout(function () {
                    // .item-coil-wrap과 .item-magnet-wrap의 top 값이 같을 경우
                    $('.bottom-plate-wrap').removeClass(function (index, className) {
                        return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                    });
                    $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                        return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                    });
                }, 0),
            );
            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 0);
        },
    });

    let cpCnt1 = 0,
        cpCnt2 = 0;

    $('.click-box-guide1').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            cpCnt1++;
            $('.content-button-layer-popup1').addClass('active');
        }
    });

    $('.click-box-guide2').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            cpCnt2++;
            $('.content-button-layer-popup2').addClass('active');
        }
    });

    $('.content-button-layer-popup .button-close').on('click', function () {
        const thisB = $(this);
        thisB.closest('.content-button-layer-popup').removeClass('active');
        if (cpCnt1 >= 1 && cpCnt2 >= 1) {
            $('.tab-list-basic').addClass('active');
        }
    });

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

    var gestureExecuted2 = false; // 플래그 변수 추가

    $('.item-coil-wrap').css({
        left: '0px',
        top: '120px',
    });

    $('.item-coil-wrap').draggable({
        axis: 'y', // 수직으로만 드래그 가능
        start: function (event, ui) {
            // .item-magnet-wrap에 active 클래스가 없으면 드래그 불가
            if (!$(this).hasClass('active')) {
                return false; // 드래그 취소
            }
        },
        drag: function (event, ui) {
            if (!gestureExecuted2) {
                $('.gesture-box-guide-finger2').addClass('active');

                // 플래그 체크
                // if ($('.gesture-box-guide-finger1').hasClass('active')) {
                //     $('.gesture-box-guide-finger').removeClass('active', 100, function () {
                //         // $('.gesture-box-guide-finger1').addClass('active');
                //         $('.gesture-box-guide-finger2').addClass('active');
                //     });
                // } else {
                //     $('.gesture-box-guide-finger2').addClass('active');
                // }
                gestureExecuted2 = true; // 플래그 설정
            }
            // $('.gesture-coil-finger2').removeClass('active');
            $('.click-box-guide2').addClass('active');

            // top 값을 0에서 120으로 제한
            if (ui.position.top > 120) {
                ui.position.top = 120;
            }
            if (ui.position.top < 0) {
                ui.position.top = 0;
            }

            // 단계적 드래그를 위한 값 계산 (10단계로 나누기)
            var stepSize = 120 / 10; // 각 단계는 12px씩 나누기
            var currentStep = Math.round(ui.position.top / stepSize); // 현재 단계(0~10)
            var snappedPosition = currentStep * stepSize; // 고정된 단계 위치

            // .item-coil-wrap의 top 값을 고정된 단계에 맞게 조정
            ui.position.top = snappedPosition;

            // .item-magnet-wrap의 현재 top 값 가져오기
            var magnetPositionTop = $('.item-magnet-wrap').position().top;

            // .item-coil-wrap의 top이 .item-magnet-wrap의 top과 같거나
            // .item-coil-wrap이 더 작을 경우 .item-magnet-wrap을 같이 이동시키기

            // .item-magnet-wrap과 .item-coil-wrap의 top 값이 일치하는지 확인
            // if (snappedPosition === magnetPositionTop) {
            //     $('.background-light-bulb-board-wrap').addClass('active'); // 일치하면 active 클래스 추가
            // } else {
            //     $('.background-light-bulb-board-wrap').removeClass('active'); // 일치하지 않으면 active 클래스 제거
            // }

            // .item-coil-wrap과 .item-magnet-wrap의 top 값이 일치하는지 확인

            var positionDifference = Math.abs(snappedPosition - magnetPositionTop);

            if (ui.position.top <= magnetPositionTop && magnetPositionTop !== 0) {
                $('.item-magnet-wrap').css('top', snappedPosition + 'px');

                $('.bottom-plate-wrap').removeClass(function (index, className) {
                    return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                });
                $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                    return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                });
            } else {
                $('.bottom-plate-wrap').removeClass(function (index, className) {
                    return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                });
                $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                    return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                });
                if (ui.position.top != magnetPositionTop) {
                    if (positionDifference > 0 && positionDifference <= 24) {
                        $('.bottom-plate-wrap').addClass('active5');
                        $('.background-light-bulb-board-wrap').addClass('active5');
                    } else if (positionDifference > 24 && positionDifference <= 48) {
                        $('.bottom-plate-wrap').addClass('active4');
                        $('.background-light-bulb-board-wrap').addClass('active4');
                    } else if (positionDifference > 48 && positionDifference <= 72) {
                        $('.bottom-plate-wrap').addClass('active3');
                        $('.background-light-bulb-board-wrap').addClass('active3');
                    } else if (positionDifference > 72 && positionDifference <= 108) {
                        $('.bottom-plate-wrap').addClass('active2');
                        $('.background-light-bulb-board-wrap').addClass('active2');
                    } else if (positionDifference > 108 && positionDifference < 120) {
                        $('.bottom-plate-wrap').addClass('active1');
                        $('.background-light-bulb-board-wrap').addClass('active1');
                    }
                } else {
                    timeouts.push(
                        setTimeout(function () {
                            // .item-coil-wrap과 .item-magnet-wrap의 top 값이 같을 경우
                            $('.bottom-plate-wrap').removeClass(function (index, className) {
                                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                            });
                            $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                                return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                            });
                        }, 1000),
                    );
                    setTimeout(function () {
                        timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                        timeouts = [];
                    }, 1050);
                }
            }

            // 모든 motion 클래스를 제거
            $('.item-coil-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            // .item-coil-wrap에는 항상 motion 클래스 추가
            $('.item-coil-wrap').addClass('motion' + (currentStep + 1));

            // 모든 motion 클래스를 제거
            $('.clamp-wire').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            // .clamp-wire에는 항상 motion 클래스 추가
            $('.clamp-wire').addClass('motion' + (currentStep + 1));

            $('.shadow-clamp-wire').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            // .shadow-clamp-wire에는 항상 motion 클래스 추가
            $('.shadow-clamp-wire').addClass('motion' + (currentStep + 1));

            $('.item-coil-shadow').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            // .item-coil-shadow에는 항상 motion 클래스 추가
            $('.item-coil-shadow').addClass('motion' + (currentStep + 1));

            // .item-magnet-wrap의 top 값에 따른 motion 클래스 추가
            var magnetStep = Math.round(magnetPositionTop / stepSize); // .item-magnet-wrap의 단계 계산
            $('.item-magnet-wrap').removeClass(function (index, className) {
                return (className.match(/(^|\s)motion\S+/g) || []).join(' ');
            });

            $('.item-magnet-wrap').addClass('motion' + (magnetStep + 1)); // magnetStep에 맞는 motion 클래스 추가
        },
        stop: function (event, ui) {
            timeouts.push(
                setTimeout(function () {
                    // .item-coil-wrap과 .item-magnet-wrap의 top 값이 같을 경우
                    $('.bottom-plate-wrap').removeClass(function (index, className) {
                        return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                    });
                    $('.background-light-bulb-board-wrap').removeClass(function (index, className) {
                        return (className.match(/(^|\s)active\S+/g) || []).join(' ');
                    });
                }, 0),
            );
            setTimeout(function () {
                timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                timeouts = [];
            }, 0);
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
