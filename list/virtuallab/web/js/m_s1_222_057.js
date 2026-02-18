/* [중등1] > 과학1 */
// 생물 분류하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const clickGoal = new Audio('../../media/m_s1_222_057/click.mp3'); // 활동목표 공통 효과음
const audioGoal = new Audio('../../media/m_s1_222_057/1-goal.mp3'); // 활동목표 오디오
const audioFin_01 = new Audio('../../media/m_s1_222_057/2-act_01.mp3'); // 가이드_01 오디오
const audioFin_02 = new Audio('../../media/m_s1_222_057/2-act_02.mp3'); // 가이드_02 오디오
const audioFin_03 = new Audio('../../media/m_s1_222_057/2-act_03.mp3'); // 가이드_03 오디오
const audioFin_04 = new Audio('../../media/m_s1_222_057/2-act_04.mp3'); // 가이드_04 오디오

/* 오디오 볼륨 [0~1] 선언 */
clickGoal.volume = 1;
audioGoal.volume = 1;
audioFin_01.volume = 1;
audioFin_02.volume = 1;
audioFin_03.volume = 1;
audioFin_04.volume = 1;

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

        audioFin_01.load();
        audioFin_01.play();
        audioFin_01.mute = true;
        audioFin_01.pause();
        audioFin_01.currentTime = 0;
        audioFin_01.mute = false;

        audioFin_02.load();
        audioFin_02.play();
        audioFin_02.mute = true;
        audioFin_02.pause();
        audioFin_02.currentTime = 0;
        audioFin_02.mute = false;

        audioFin_03.load();
        audioFin_03.play();
        audioFin_03.mute = true;
        audioFin_03.pause();
        audioFin_03.currentTime = 0;
        audioFin_03.mute = false;

        audioFin_04.load();
        audioFin_04.play();
        audioFin_04.mute = true;
        audioFin_04.pause();
        audioFin_04.currentTime = 0;
        audioFin_04.mute = false;

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
        pageView2.removeClass('active');

        // 이 부분부터 공통이 아님
        guidePage();
    });

    // 시간에 따른 물의 함수 각 setTimeout의 반환값을 저장할 배열
    let timeGuideArray = [];

    function guidePage() {
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap1').addClass('active');
            }, 1000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap1').addClass('active');
            }, 2000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                audioFin_01.load();
                audioFin_01.play();
            }, 3000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.gesture-guide-finger1').addClass('active');
                $('.guide-first-layer-wrap1 .content-tab-header-item1').addClass('active');
            }, 5000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap1').removeClass('active');
                $('.guide-first-layer-wrap1 .content-tab-header-item1').removeClass('active');
                $('.guide-balloon-tip-wrap1').removeClass('active');
                $('.gesture-guide-finger1').removeClass('active');
                audioFin_01.pause();

                $('.guide-first-layer-wrap2').addClass('active');
            }, 8000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap2').addClass('active');
            }, 9000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                audioFin_02.load();
                audioFin_02.play();
            }, 12000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').addClass('motion1');
            }, 12000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion1');
                $('.guide-first-layer-wrap2').addClass('motion2');
            }, 14000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion2');
                $('.guide-first-layer-wrap2').addClass('motion3');
            }, 15000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion3');
                $('.guide-first-layer-wrap2').addClass('motion4');
            }, 16000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion4');
                $('.guide-first-layer-wrap2').addClass('motion5');
            }, 17000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion5');
                $('.guide-first-layer-wrap2').addClass('motion6');
            }, 18000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion6');
                $('.guide-first-layer-wrap2').addClass('motion7');
            }, 19000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion7');
                $('.guide-first-layer-wrap2').addClass('motion8');
            }, 20000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion8');
                $('.guide-first-layer-wrap2').addClass('motion9');
            }, 21000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('motion9');
                $('.guide-first-layer-wrap2').addClass('motion10');
            }, 22000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap2').removeClass('active');
                $('.guide-first-layer-wrap2').removeClass('motion10');
                $('.guide-balloon-tip-wrap2').removeClass('active');
                $('.gesture-guide-finger2').removeClass('active');
                audioFin_02.pause();

                $('.guide-first-layer-wrap3').addClass('active');
            }, 25000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3').addClass('active');
            }, 26000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                audioFin_03.load();
                audioFin_03.play();
            }, 28000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.gesture-guide-finger3').addClass('active');
            }, 31000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap3').removeClass('active');
                $('.guide-balloon-tip-wrap3').removeClass('active');
                $('.gesture-guide-finger3').removeClass('active');
                audioFin_03.pause();

                $('.guide-first-layer-wrap4').addClass('active');
            }, 34000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-balloon-tip-wrap4').addClass('active');
            }, 35000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                audioFin_04.load();
                audioFin_04.play();
            }, 37000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap4 .content-tab-header-item2').addClass('active');
                $('.gesture-guide-finger4').addClass('active');
            }, 40000),
        );
        timeGuideArray.push(
            setTimeout(function () {
                $('.guide-first-layer-wrap4').removeClass('active');
                $('.guide-first-layer-wrap4 .content-tab-header-item2').removeClass('active');
                $('.guide-balloon-tip-wrap4').removeClass('active');
                $('.gesture-guide-finger4').removeClass('active');
                audioFin_04.pause();

                $('.scene-layer1 .content-tab-header-list').addClass('active');
            }, 43000),
        );
    }

    // -----------------------------------------------------------------

    // <컨텐츠 : page-view3>
    // 공통헤더 -------------------------------
    var wConHsound = $('.click-sound');
    const wConHhome = $('.header-area .click-home');
    const wConHclose = $('.header-area .click-close');

    // 사운드 버튼
    wConHsound.on('click', function () {
        const thisB = $(this);
        // 음소거 버튼 활성화
        if (!$('.click-sound').hasClass('active')) {
            $('.click-sound').addClass('active');
            /* 오디오 볼륨 [0] 설정 */
            clickGoal.volume = 0; // 활동시작 클릭 오디오 볼륨 [0-1]
            audioGoal.volume = 0; // 활동목표 오디오 볼륨 [0-1]
            audioFin_01.volume = 0; // 가이드1 오디오 볼륨 [0-1]
            audioFin_02.volume = 0; // 가이드2 오디오 볼륨 [0-1]
            audioFin_03.volume = 0; // 가이드3 오디오 볼륨 [0-1]
            audioFin_04.volume = 0; // 가이드4 오디오 볼륨 [0-1]
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            clickGoal.volume = 1; // 활동시작 클릭 오디오 볼륨 [0-1]
            audioGoal.volume = 1; // 활동목표 오디오 볼륨 [0-1]
            audioFin_01.volume = 1; // 가이드1 오디오 볼륨 [0-1]
            audioFin_02.volume = 1; // 가이드2 오디오 볼륨 [0-1]
            audioFin_03.volume = 1; // 가이드3 오디오 볼륨 [0-1]
            audioFin_04.volume = 1; // 가이드4 오디오 볼륨 [0-1]
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

    // .element-drag-item의 draggable 설정

    // 분류기준 없음
    // $(
    //     '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll .element-drag-item',
    // ).draggable({
    //     revert: 'invalid',
    //     helper: 'clone',
    //     start: function (event, ui) {
    //         $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
    //         $(this).css('visibility', 'hidden');
    //         // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
    //         // 드롭 후 count 계산 (DOM 업데이트 후)
    //     },
    //     stop: function (event, ui) {
    //         $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
    //         $(this).css('visibility', 'visible');
    //         // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
    //         // 드롭 후 count 계산 (DOM 업데이트 후)
    //     },
    // });

    // 광합성을 할 수 있는가?
    $(
        '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll .element-drag-item',
    ).draggable({
        revert: 'invalid',
        helper: 'clone',
        start: function (event, ui) {
            $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
            $(this).css('visibility', 'hidden');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
        stop: function (event, ui) {
            $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
            $(this).css('visibility', 'visible');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
    });

    // 세포벽이 있는가?
    $(
        '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll .element-drag-item',
    ).draggable({
        revert: 'invalid',
        helper: 'clone',
        start: function (event, ui) {
            $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
            $(this).css('visibility', 'hidden');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
        stop: function (event, ui) {
            $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
            $(this).css('visibility', 'visible');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
    });

    // 운동 기관이 있어 이동할 수 있는가?
    $(
        '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll .element-drag-item',
    ).draggable({
        revert: 'invalid',
        helper: 'clone',
        start: function (event, ui) {
            $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
            $(this).css('visibility', 'hidden');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
        stop: function (event, ui) {
            $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
            $(this).css('visibility', 'visible');
            // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
        },
    });

    // .content-drag-item-ex-controll의 droppable 설정

    // 분류기준 없음
    // $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll').droppable({
    //    accept: '.content-drag-item-wrap0 .element-drag-item',
    //    drop: function (event, ui) {
    //        var draggedElement = $(ui.draggable);
    //
    //        // .element-drag-item의 번호 추출 (필요에 따라 처리)
    //        var classList = draggedElement.attr('class').split(/\s+/);
    //        var itemNumber = null;
    //        $.each(classList, function (index, className) {
    //            if (className.match(/^element-drag-item(\d+)$/)) {
    //                itemNumber = className.replace('element-drag-item', '');
    //            }
    //        });
    //
    //        // 해당 번호의 .content-drag-item-item으로 이동
    //        if (itemNumber) {
    //            $(
    //                '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll .content-drag-item-item' +
    //                    itemNumber,
    //            ).append(draggedElement);
    //        }
    //
    //        // 드롭 후 count 계산 (DOM 업데이트 후)
    //        setTimeout(function () {
    //            calculateItemCount0(); // 개수 계산
    //            checkTotalItems0(); // totalItems가 0인지 확인 후 클래스 추가/제거
    //        }, 100);
    //    },
    // });

    // 광합성을 할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll').droppable({
        accept: '.content-drag-item-wrap1 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.draggable);

            // .element-drag-item의 번호 추출 (필요에 따라 처리)
            var classList = draggedElement.attr('class').split(/\s+/);
            var itemNumber = null;
            $.each(classList, function (index, className) {
                if (className.match(/^element-drag-item(\d+)$/)) {
                    itemNumber = className.replace('element-drag-item', '');
                }
            });

            // 해당 번호의 .content-drag-item-item으로 이동
            if (itemNumber) {
                $(
                    '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll .content-drag-item-item' +
                        itemNumber,
                ).append(draggedElement);
            }

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount1(); // 개수 계산
                checkTotalItems1(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // 세포벽이 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll').droppable({
        accept: '.content-drag-item-wrap2 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.draggable);

            // .element-drag-item의 번호 추출 (필요에 따라 처리)
            var classList = draggedElement.attr('class').split(/\s+/);
            var itemNumber = null;
            $.each(classList, function (index, className) {
                if (className.match(/^element-drag-item(\d+)$/)) {
                    itemNumber = className.replace('element-drag-item', '');
                }
            });

            // 해당 번호의 .content-drag-item-item으로 이동
            if (itemNumber) {
                $(
                    '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll .content-drag-item-item' +
                        itemNumber,
                ).append(draggedElement);
            }

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount2(); // 개수 계산
                checkTotalItems2(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // 운동 기관이 있어 이동할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll').droppable({
        accept: '.content-drag-item-wrap3 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.draggable);

            // .element-drag-item의 번호 추출 (필요에 따라 처리)
            var classList = draggedElement.attr('class').split(/\s+/);
            var itemNumber = null;
            $.each(classList, function (index, className) {
                if (className.match(/^element-drag-item(\d+)$/)) {
                    itemNumber = className.replace('element-drag-item', '');
                }
            });

            // 해당 번호의 .content-drag-item-item으로 이동
            if (itemNumber) {
                $(
                    '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll .content-drag-item-item' +
                        itemNumber,
                ).append(draggedElement);
            }

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount3(); // 개수 계산
                checkTotalItems3(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // .decide-complate의 droppable 설정

    // 분류기준 없음
    // $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .decide-complate').droppable({
    //    accept: '.content-drag-item-wrap0 .element-drag-item',
    //    drop: function (event, ui) {
    //        var draggedElement = $(ui.helper).clone(); // 복제본을 추가
    //        draggedElement.css({
    //            position: 'static', // absolute 해제
    //            top: 'auto',
    //            left: 'auto',
    //            zIndex: 'auto',
    //        });
    //
    //        $(this).append(draggedElement); // 드롭된 영역에 복제된 요소 추가
    //
    //        // 드래그한 원본 요소를 숨기고 삭제
    //        ui.draggable.remove(); // 원본 요소 제거
    //
    //        // 새로 드롭된 요소에 draggable 기능 재적용
    //        draggedElement.draggable({
    //            revert: 'invalid',
    //            helper: 'clone',
    //            start: function (event, ui) {
    //                $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
    //                $(this).css('visibility', 'hidden');
    //                // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
    //                // 드롭 후 count 계산 (DOM 업데이트 후)
    //            },
    //            stop: function (event, ui) {
    //                $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
    //                $(this).css('visibility', 'visible');
    //                // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
    //                // 드롭 후 count 계산 (DOM 업데이트 후)
    //            },
    //        });
    //
    //        // 원래의 배경 아이템에서 active 클래스를 제거
    //        // var originalIndex = ui.draggable.closest('.content-drag-item-item').index();
    //        $(
    //            '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-list-bg .content-drag-item-item',
    //        ).removeClass('active');
    //
    //        // 드롭 후 count 계산 (DOM 업데이트 후)
    //        setTimeout(function () {
    //            calculateItemCount0(); // 개수 계산
    //            checkTotalItems0(); // totalItems가 0인지 확인 후 클래스 추가/제거
    //        }, 100);
    //    },
    // });

    // 광합성을 할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .decide-complate').droppable({
        accept: '.content-drag-item-wrap1 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.helper).clone(); // 복제본을 추가
            draggedElement.css({
                position: 'static', // absolute 해제
                top: 'auto',
                left: 'auto',
                zIndex: 'auto',
            });

            $(this).append(draggedElement); // 드롭된 영역에 복제된 요소 추가

            // 드래그한 원본 요소를 숨기고 삭제
            ui.draggable.remove(); // 원본 요소 제거

            // 새로 드롭된 요소에 draggable 기능 재적용
            draggedElement.draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
            });

            // 원래의 배경 아이템에서 active 클래스를 제거
            // var originalIndex = ui.draggable.closest('.content-drag-item-item').index();
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-list-bg .content-drag-item-item',
            ).removeClass('active');

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount1(); // 개수 계산
                checkTotalItems1(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // 세포벽이 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .decide-complate').droppable({
        accept: '.content-drag-item-wrap2 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.helper).clone(); // 복제본을 추가
            draggedElement.css({
                position: 'static', // absolute 해제
                top: 'auto',
                left: 'auto',
                zIndex: 'auto',
            });

            $(this).append(draggedElement); // 드롭된 영역에 복제된 요소 추가

            // 드래그한 원본 요소를 숨기고 삭제
            ui.draggable.remove(); // 원본 요소 제거

            // 새로 드롭된 요소에 draggable 기능 재적용
            draggedElement.draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
            });

            // 원래의 배경 아이템에서 active 클래스를 제거
            // var originalIndex = ui.draggable.closest('.content-drag-item-item').index();
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-list-bg .content-drag-item-item',
            ).removeClass('active');

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount2(); // 개수 계산
                checkTotalItems2(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // 운동 기관이 있어 이동할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .decide-complate').droppable({
        accept: '.content-drag-item-wrap3 .element-drag-item',
        drop: function (event, ui) {
            var draggedElement = $(ui.helper).clone(); // 복제본을 추가
            draggedElement.css({
                position: 'static', // absolute 해제
                top: 'auto',
                left: 'auto',
                zIndex: 'auto',
            });

            $(this).append(draggedElement); // 드롭된 영역에 복제된 요소 추가

            // 드래그한 원본 요소를 숨기고 삭제
            ui.draggable.remove(); // 원본 요소 제거

            // 새로 드롭된 요소에 draggable 기능 재적용
            draggedElement.draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                    // 드롭 후 count 계산 (DOM 업데이트 후)
                },
            });

            // 원래의 배경 아이템에서 active 클래스를 제거
            // var originalIndex = ui.draggable.closest('.content-drag-item-item').index();
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-list-bg .content-drag-item-item',
            ).removeClass('active');

            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount3(); // 개수 계산
                checkTotalItems3(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        },
    });

    // .content-drag-item-item 내 .element-drag-item 개수를 계산하는 함수

    // 분류기준 없음
    //function calculateItemCount0() {
    //    var totalItems0 = 0;
    //
    //    // 각 .content-drag-item-item을 순회하며 .element-drag-item의 개수 계산
    //    $(
    //        '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll .content-drag-item-item',
    //    ).each(function () {
    //        var itemCount0 = $(this).children('.element-drag-item').length; // 직접 자식 요소만 체크
    //        // console.log('Item contains ' + itemCount + ' .element-drag-item(s)');
    //        totalItems0 += itemCount0; // 총 개수 합산
    //    });
    //
    //    // 총 개수를 출력
    //    return totalItems0;
    //}

    // 광합성을 할 수 있는가?
    function calculateItemCount1() {
        var totalItems1 = 0;

        // 각 .content-drag-item-item을 순회하며 .element-drag-item의 개수 계산
        $(
            '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll .content-drag-item-item',
        ).each(function () {
            var itemCount1 = $(this).children('.element-drag-item').length; // 직접 자식 요소만 체크
            // console.log('Item contains ' + itemCount + ' .element-drag-item(s)');
            totalItems1 += itemCount1; // 총 개수 합산
        });

        // 총 개수를 출력
        return totalItems1;
    }

    // 세포벽이 있는가?
    function calculateItemCount2() {
        var totalItems2 = 0;

        // 각 .content-drag-item-item을 순회하며 .element-drag-item의 개수 계산
        $(
            '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll .content-drag-item-item',
        ).each(function () {
            var itemCount2 = $(this).children('.element-drag-item').length; // 직접 자식 요소만 체크
            // console.log('Item contains ' + itemCount + ' .element-drag-item(s)');
            totalItems2 += itemCount2; // 총 개수 합산
        });

        // 총 개수를 출력
        return totalItems2;
    }

    // 운동 기관이 있어 이동할 수 있는가?
    function calculateItemCount3() {
        var totalItems3 = 0;

        // 각 .content-drag-item-item을 순회하며 .element-drag-item의 개수 계산
        $(
            '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll .content-drag-item-item',
        ).each(function () {
            var itemCount3 = $(this).children('.element-drag-item').length; // 직접 자식 요소만 체크
            // console.log('Item contains ' + itemCount + ' .element-drag-item(s)');
            totalItems3 += itemCount3; // 총 개수 합산
        });

        // 총 개수를 출력
        return totalItems3;
    }

    // totalItems가 0이면 .btn-check에 active 클래스 추가

    // 분류기준 없음
    // function checkTotalItems0() {
    //     var totalItems0 = calculateItemCount0();
    //     // console.log('Total .element-drag-item count: ' + totalItems0);
    //
    //     if (totalItems0 === 0) {
    //         if ($('.scene-layer .content-tab-header-list').hasClass('active')) {
    //             $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-check').addClass('active');
    //         }
    //     } else if (totalItems0 > 0 && totalItems0 < 8) {
    //         $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-check').removeClass('active');
    //         $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-again').addClass('active');
    //     } else {
    //         $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-check').removeClass('active');
    //         $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-again').removeClass('active');
    //     }
    // }

    // 광합성을 할 수 있는가?
    function checkTotalItems1() {
        var totalItems1 = calculateItemCount1();
        // console.log('Total .element-drag-item count: ' + totalItems1);

        if (totalItems1 === 0) {
            if ($('.scene-layer .content-tab-header-list').hasClass('active')) {
                $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-check').addClass('active');
            }
        } else if (totalItems1 > 0 && totalItems1 < 8) {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-again').addClass('active');
        } else {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-again').removeClass('active');
        }
    }

    // 세포벽이 있는가?
    function checkTotalItems2() {
        var totalItems2 = calculateItemCount2();
        // console.log('Total .element-drag-item count: ' + totalItems2);

        if (totalItems2 === 0) {
            if ($('.scene-layer .content-tab-header-list').hasClass('active')) {
                $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-check').addClass('active');
            }
        } else if (totalItems2 > 0 && totalItems2 < 8) {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-again').addClass('active');
        } else {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-again').removeClass('active');
        }
    }

    // 운동 기관이 있어 이동할 수 있는가?
    function checkTotalItems3() {
        var totalItems3 = calculateItemCount3();
        // console.log('Total .element-drag-item count: ' + totalItems2);

        if (totalItems3 === 0) {
            if ($('.scene-layer .content-tab-header-list').hasClass('active')) {
                $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-check').addClass('active');
            }
        } else if (totalItems3 > 0 && totalItems3 < 8) {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-again').addClass('active');
        } else {
            $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-check').removeClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-again').removeClass('active');
        }
    }

    let hLinkCount = 0;

    // 정답 확인 닫기 버튼
    $('.button-answer-popup-close').on('click', function () {
        const thisB = $(this);
        thisB.closest('.popup-answer-wrap').removeClass('active');
        $('.popup-answer-list .popup-answer-item').removeClass('active');
    });

    // 광합성 유무
    $('.scene-layer1 .content-tab-header-link1').on('click', function () {
        const thisB = $(this);
        if (thisB.closest('.content-tab-header-list').hasClass('active')) {
            const thisIndex = thisB.closest('.content-tab-header-item').index();
            hLinkCount = thisIndex;
            thisB.closest('.content-tab-header-list').addClass('active');
            thisB.closest('.content-tab-header-list').find('.content-tab-header-item').removeClass('active');
            thisB.closest('.content-tab-header-item').addClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap').removeClass('active');
            $('.content-drag-list-wrap-controll')
                .find('.content-drag-item-wrap' + (thisIndex + 1))
                .addClass('active');
            $('.title-content-bottom-bullet .text-view').removeClass('active');
            $('.title-content-bottom-bullet')
                .find('.text-view' + (thisIndex + 1))
                .addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount1(); // 개수 계산
                checkTotalItems1(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });

    // 세포벽 유무
    $('.scene-layer1 .content-tab-header-link2').on('click', function () {
        const thisB = $(this);
        if (thisB.closest('.content-tab-header-list').hasClass('active')) {
            const thisIndex = thisB.closest('.content-tab-header-item').index();
            hLinkCount = thisIndex;
            thisB.closest('.content-tab-header-list').addClass('active');
            thisB.closest('.content-tab-header-list').find('.content-tab-header-item').removeClass('active');
            thisB.closest('.content-tab-header-item').addClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap').removeClass('active');
            $('.content-drag-list-wrap-controll')
                .find('.content-drag-item-wrap' + (thisIndex + 1))
                .addClass('active');
            $('.title-content-bottom-bullet .text-view').removeClass('active');
            $('.title-content-bottom-bullet')
                .find('.text-view' + (thisIndex + 1))
                .addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount2(); // 개수 계산
                checkTotalItems2(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });

    // 운동성 유무
    $('.scene-layer1 .content-tab-header-link3').on('click', function () {
        const thisB = $(this);
        if (thisB.closest('.content-tab-header-list').hasClass('active')) {
            const thisIndex = thisB.closest('.content-tab-header-item').index();
            hLinkCount = thisIndex;
            thisB.closest('.content-tab-header-list').addClass('active');
            thisB.closest('.content-tab-header-list').find('.content-tab-header-item').removeClass('active');
            thisB.closest('.content-tab-header-item').addClass('active');
            $('.content-drag-list-wrap-controll .content-drag-item-wrap').removeClass('active');
            $('.content-drag-list-wrap-controll')
                .find('.content-drag-item-wrap' + (thisIndex + 1))
                .addClass('active');
            $('.title-content-bottom-bullet .text-view').removeClass('active');
            $('.title-content-bottom-bullet')
                .find('.text-view' + (thisIndex + 1))
                .addClass('active');
            // 드롭 후 count 계산 (DOM 업데이트 후)
            setTimeout(function () {
                calculateItemCount3(); // 개수 계산
                checkTotalItems3(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });

    // 원래 텍스트 값을 배열에 저장
    const originalTexts = ['개', '명아주', '고래', '벚나무', '개구리', '보리', '강아지풀', '붕어'];

    // .button-check 버튼 클릭 시 정답보기

    // 분류기준 없음
    // $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-check').on('click', function () {
    //     const thisB = $(this);
    //     if (thisB.hasClass('active')) {
    //         $('.popup-answer-wrap').addClass('active');
    //         $('.popup-answer-wrap').find('.popup-answer-item').removeClass('active');
    //         $('.popup-answer-wrap').find('.popup-answer-item').eq(hLinkCount).addClass('active');
    //     }
    // });

    // 광합성을 할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-check').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            $('.popup-answer-wrap').addClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').removeClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').eq(hLinkCount).addClass('active');
        }
    });

    // 세포벽이 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-check').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            $('.popup-answer-wrap').addClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').removeClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').eq(hLinkCount).addClass('active');
        }
    });

    // 운동 기관이 있어 이동할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-check').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            $('.popup-answer-wrap').addClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').removeClass('active');
            $('.popup-answer-wrap').find('.popup-answer-item').eq(hLinkCount).addClass('active');
        }
    });

    // .button-again 버튼 클릭 시 리셋 기능

    // 분류기준 없음
    // $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .button-again').on('click', function () {
    //     const thisB = $(this);
    //     const length = $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-item').length;
    //     if (thisB.hasClass('active')) {
    //         // 모든 .decide-complate 내에 있는 .element-drag-item 제거
    //         $(
    //             '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-list .element-drag-item',
    //         ).remove();
    //         $('.content-drag-list-wrap-controll .content-drag-item-wrap0 .decide-complate .element-drag-item').remove();
    //
    //         // 각 .element-drag-item의 originalText를 사용하여 원래 위치로 복원
    //         $(
    //             '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll .content-drag-item-item',
    //         ).each(function (i) {
    //             var originalText = originalTexts[i]; // 배열에서 텍스트 가져오기
    //
    //             // .element-drag-item 다시 추가
    //             $(this).append(
    //                 '<em class="element-drag-item element-drag-item' +
    //                     (i + 1) +
    //                     ' ui-draggable ui-draggable-handle">' +
    //                     '<em class="element-drag-item-inner">' +
    //                     '<span class="round-text">' +
    //                     (originalText || '데이터 없음') +
    //                     '</span>' + // 저장된 텍스트 사용
    //                     '</em>' +
    //                     '</em>',
    //             );
    //         });
    //
    //         // 새로 추가된 .element-drag-item에 draggable 다시 적용
    //         $(
    //             '.content-drag-list-wrap-controll .content-drag-item-wrap0 .content-drag-item-ex-controll .element-drag-item',
    //         ).draggable({
    //             revert: 'invalid',
    //             helper: 'clone',
    //             start: function (event, ui) {
    //                 $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
    //                 $(this).css('visibility', 'hidden');
    //                 // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
    //             },
    //             stop: function (event, ui) {
    //                 $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
    //                 $(this).css('visibility', 'visible');
    //                 // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
    //             },
    //         });
    //
    //         // 리셋 후 count 계산
    //         setTimeout(function () {
    //             calculateItemCount0(); // 개수 계산
    //             checkTotalItems0(); // totalItems가 0인지 확인 후 클래스 추가/제거
    //         }, 100);
    //     }
    // });

    // 광합성을 할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .button-again').on('click', function () {
        const thisB = $(this);
        const length = $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-item').length;
        if (thisB.hasClass('active')) {
            // 모든 .decide-complate 내에 있는 .element-drag-item 제거
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-list .element-drag-item',
            ).remove();
            $('.content-drag-list-wrap-controll .content-drag-item-wrap1 .decide-complate .element-drag-item').remove();

            // 각 .element-drag-item의 originalText를 사용하여 원래 위치로 복원
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll .content-drag-item-item',
            ).each(function (i) {
                var originalText = originalTexts[i]; // 배열에서 텍스트 가져오기

                // .element-drag-item 다시 추가
                $(this).append(
                    '<em class="element-drag-item element-drag-item' +
                        (i + 1) +
                        ' ui-draggable ui-draggable-handle">' +
                        '<em class="element-drag-item-inner">' +
                        '<span class="round-text">' +
                        (originalText || '데이터 없음') +
                        '</span>' + // 저장된 텍스트 사용
                        '</em>' +
                        '</em>',
                );
            });

            // 새로 추가된 .element-drag-item에 draggable 다시 적용
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap1 .content-drag-item-ex-controll .element-drag-item',
            ).draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                },
            });

            // 리셋 후 count 계산
            setTimeout(function () {
                calculateItemCount1(); // 개수 계산
                checkTotalItems1(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });

    // 세포벽이 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .button-again').on('click', function () {
        const thisB = $(this);
        const length = $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-item').length;
        if (thisB.hasClass('active')) {
            // 모든 .decide-complate 내에 있는 .element-drag-item 제거
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-list .element-drag-item',
            ).remove();
            $('.content-drag-list-wrap-controll .content-drag-item-wrap2 .decide-complate .element-drag-item').remove();

            // 각 .element-drag-item의 originalText를 사용하여 원래 위치로 복원
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll .content-drag-item-item',
            ).each(function (i) {
                var originalText = originalTexts[i]; // 배열에서 텍스트 가져오기

                // .element-drag-item 다시 추가
                $(this).append(
                    '<em class="element-drag-item element-drag-item' +
                        (i + 1) +
                        ' ui-draggable ui-draggable-handle">' +
                        '<em class="element-drag-item-inner">' +
                        '<span class="round-text">' +
                        (originalText || '데이터 없음') +
                        '</span>' + // 저장된 텍스트 사용
                        '</em>' +
                        '</em>',
                );
            });

            // 새로 추가된 .element-drag-item에 draggable 다시 적용
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap2 .content-drag-item-ex-controll .element-drag-item',
            ).draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                },
            });

            // 리셋 후 count 계산
            setTimeout(function () {
                calculateItemCount2(); // 개수 계산
                checkTotalItems2(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });

    // 운동 기관이 있어 이동할 수 있는가?
    $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .button-again').on('click', function () {
        const thisB = $(this);
        const length = $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-item').length;
        if (thisB.hasClass('active')) {
            // 모든 .decide-complate 내에 있는 .element-drag-item 제거
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-list .element-drag-item',
            ).remove();
            $('.content-drag-list-wrap-controll .content-drag-item-wrap3 .decide-complate .element-drag-item').remove();

            // 각 .element-drag-item의 originalText를 사용하여 원래 위치로 복원
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll .content-drag-item-item',
            ).each(function (i) {
                var originalText = originalTexts[i]; // 배열에서 텍스트 가져오기

                // .element-drag-item 다시 추가
                $(this).append(
                    '<em class="element-drag-item element-drag-item' +
                        (i + 1) +
                        ' ui-draggable ui-draggable-handle">' +
                        '<em class="element-drag-item-inner">' +
                        '<span class="round-text">' +
                        (originalText || '데이터 없음') +
                        '</span>' + // 저장된 텍스트 사용
                        '</em>' +
                        '</em>',
                );
            });

            // 새로 추가된 .element-drag-item에 draggable 다시 적용
            $(
                '.content-drag-list-wrap-controll .content-drag-item-wrap3 .content-drag-item-ex-controll .element-drag-item',
            ).draggable({
                revert: 'invalid',
                helper: 'clone',
                start: function (event, ui) {
                    $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                    $(this).css('visibility', 'hidden');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).addClass('active');
                },
                stop: function (event, ui) {
                    $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
                    $(this).css('visibility', 'visible');
                    // $('.content-drag-item-list-bg .content-drag-item-item').eq($(this).closest('.content-drag-item-item').index()).removeClass('active');
                },
            });

            // 리셋 후 count 계산
            setTimeout(function () {
                calculateItemCount3(); // 개수 계산
                checkTotalItems3(); // totalItems가 0인지 확인 후 클래스 추가/제거
            }, 100);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
