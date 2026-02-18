/* [고등1] > 통합과학1 */
// 동물 세포와 식물 세포에서 일어나는 삼투 확인하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * 2024/09/23                            작업 시작
 * 2024/09/24                            디자인 미수급으로 1차 완료
 * 2024/09/27                            미수급 디자인 반영 완료
 * 2024/09/28                            음성 정지 시 사용 스크립트 추가 / 미사용 콘솔로그 삭제
 * 2024/10/08                            1차 상태로 drag&drop 원복(미래엔 검수)

 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const startAct = new Audio('../../media/h_s1_332_151/click.mp3'); // 활동목표 노출 시
const audioGoal = new Audio('../../media/h_s1_332_151/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s1_332_151/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s1_332_151/2-act_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s1_332_151/2-act_03.mp3'); // 활동1_03 오디오
const audioAct1_04 = new Audio('../../media/h_s1_332_151/2-act_04.mp3'); // 활동1_04 오디오
const audioAct1_05 = new Audio('../../media/h_s1_332_151/2-act_05.mp3'); // 활동1_05 오디오
const audioAct1_06 = new Audio('../../media/h_s1_332_151/2-act_06.mp3'); // 활동1_06 오디오
const audioAct1_07 = new Audio('../../media/h_s1_332_151/2-act_07.mp3'); // 활동1_07 오디오
const audioAct1_08 = new Audio('../../media/h_s1_332_151/2-act_08.mp3'); // 활동1_08 오디오
const audioAct1Alert = new Audio('../../media/h_s1_332_151/2-alert.mp3'); // 활동1 효과음
const audioAct1AlertReturn = new Audio('../../media/h_s1_332_151/2-alert_return.mp3'); // 활동1 세포 돌아가는 효과음
const resultAudio = new Audio('../../media/h_s1_332_151/3-final_01.mp3'); // 정리하기 오디오

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
audioAct1_08.volume = 1;
audioAct1Alert.volume = 1;
audioAct1AlertReturn.volume = 1;
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

        audioAct1Alert.load();
        audioAct1Alert.play();
        audioAct1Alert.mute = true;
        audioAct1Alert.pause();
        audioAct1Alert.currentTime = 0;
        audioAct1Alert.mute = false;

        audioAct1AlertReturn.load();
        audioAct1AlertReturn.play();
        audioAct1AlertReturn.mute = true;
        audioAct1AlertReturn.pause();
        audioAct1AlertReturn.currentTime = 0;
        audioAct1AlertReturn.mute = false;

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
    btnActivityGoalsClose.on('click', function (e) {
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
            audioAct1_08.volume = 0;
            audioAct1Alert.volume = 0;
            audioAct1AlertReturn.volume = 0;
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
            audioAct1_05.volume = 1;
            audioAct1_06.volume = 1;
            audioAct1_07.volume = 1;
            audioAct1_08.volume = 1;
            audioAct1Alert.volume = 1;
            audioAct1AlertReturn.volume = 1;
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

    // 활동목표 닫기 클릭 후 활동시작
    let timeGuideArray = [];

    // setTimeout 초기화
    function clearTimeouts() {
        for (let i = 0; i < timeGuideArray.length; i++) {
            clearTimeout(timeGuideArray[i]);
        }

        timeGuideArray = [];
    }

    // 가이드 모달 활성화
    function showGuide(el) {
        $(`.${el}`).addClass('active').css('z-index', 5);
        setTimeout(() => {
            $(`.${el}`).css('z-index', '');
        }, 500);
    }

    // 가이드 모달 비활성화
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

    /* 2차 검수 반영 소스 start */
    // 드래그 기능
    // function dragDrop() {
    //     const $item = $('[data-drag-item]');
    //     const $itemParent = $item.parent('.cell-frame');
    //     const $target = $('[data-drop-target]');
    //     const $retry = $('.btn-retry');
    //     let thisItem;

    //     // 드래그 요소
    //     $item.draggable({
    //         start: function (e) {
    //             $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
    //             $('.drag-guide-wrap-1').removeClass('show'); // 드래그 가이드 미노출
    //             thisItem = $(e.target).data('dragItem');
    //         },
    //         stop: function () {
    //             $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
    //         },
    //         revert: function (event) {
    //             if (event == false) {
    //                 isRevert = false;
    //                 return true;
    //             } else {
    //                 isRevert = true;
    //             }
    //         },
    //     });

    //     // 세포 부모 frame 드랍 기능
    //     $itemParent.droppable({
    //         accept: function () {
    //             // 동물/식물 세포에 따라 해당하는 세포만 drop 허용
    //             if (
    //                 (thisItem == 'animal' && $(this).parent('.drag-area-cell-item').hasClass('cell-animal')) ||
    //                 (thisItem == 'plant' && $(this).parent('.drag-area-cell-item').hasClass('cell-plant'))
    //             ) {
    //                 return true; // 해당하는 세포만 드롭 허용
    //             }
    //             return false; // 그 외에는 드롭 불가
    //         },
    //         drop: function () {
    //             // 드롭 시 부모요소 가운데에 위치하게
    //             const dragItem = $(`[data-drag-item=${thisItem}]`);
    //             const beakers = $('[data-drop-target]');
    //             dragItem.css({
    //                 top: 0,
    //                 left: 0,
    //             });
    //             // 드래그 아이템 frame에 위치하게될 경우 비커 관련 클래스 제거
    //             dragItem.removeClass().addClass('ui-draggable ui-draggable-handle');
    //             // 비커에서 해당하는 in 클래스 모두 제거
    //             beakers.removeClass(`has-${thisItem} disable-${thisItem} fill`);

    //             if (thisItem == 'animal') {
    //                 dragItem.addClass(`from-${animalFrom}`);
    //             } else {
    //                 dragItem.addClass(`from-${plantFrom}`);
    //             }
    //         },
    //     });

    //     let animalFrom;
    //     let plantFrom;

    //     $target.droppable({
    //         accept: function (e) {
    //             // has- 클래스가 없고, disable-${thisItem} 클래스가 없는 경우에만 드랍 허용
    //             if (!$(this).is('[class*=has-]') && !$(this).hasClass(`disable-${thisItem}`)) {
    //                 return true;
    //             }
    //             return false;
    //         },
    //         drop: function (e) {
    //             const dragItem = $(`[data-drag-item=${thisItem}]`);
    //             const dropItem = $(e.target).data('drop-target');
    //             // 세포 위치 지정
    //             const clientRect = e.target.getBoundingClientRect();
    //             const clientTop = clientRect.top;
    //             const clientLeft = clientRect.left;
    //             const itemParent = dragItem.parent('.cell-frame');
    //             const parentTop = itemParent.offset().top;
    //             const parentLeft = itemParent.offset().left;

    //             // 세포 비커 안에 위치 설정
    //             dragItem.css({
    //                 top: `${clientTop - parentTop + 150}px`,
    //                 left: `${clientLeft - parentLeft + 38}px`,
    //             });

    //             // 효과음 재생 (세포 공통)
    //             audioAct1Alert.load();
    //             audioAct1Alert.play();

    //             // 동물세포 일 경우
    //             if (thisItem == 'animal') {
    //                 if (dropItem == 'low') {
    //                     animalFrom = 'low';
    //                     dragItem.addClass('low'); // 해당 클래스 추가
    //                     guideModal3();
    //                 } else if (dropItem == 'same') {
    //                     animalFrom = 'same';
    //                     dragItem.addClass('same');
    //                     guideModal4();
    //                 } else {
    //                     animalFrom = 'high';
    //                     dragItem.addClass('high');
    //                     guideModal5();
    //                 }
    //             } else {
    //                 // 식물세포 일 경우
    //                 if (dropItem == 'low') {
    //                     plantFrom = 'low';
    //                     dragItem.addClass('low');
    //                     guideModal6();
    //                 } else if (dropItem == 'same') {
    //                     plantFrom = 'same';
    //                     dragItem.addClass('same');
    //                     guideModal7();
    //                 } else {
    //                     plantFrom = 'high';
    //                     dragItem.addClass('high');
    //                     guideModal8();
    //                 }
    //             }

    //             $target.addClass(`disable-${thisItem}`).removeClass(`has-${thisItem}`);
    //             $(this).removeClass(`disable-${thisItem}`).addClass(`has-${thisItem}`);
    //             dragItem.removeClass('from-low from-same from-high');
    //         },
    //     });

    //     // 초기화 버튼
    //     $retry.on('click', function () {
    //         $item.removeClass().addClass('ui-draggable ui-draggable-handle').css({
    //             top: '0',
    //             left: '0',
    //         });
    //         $target.removeClass().addClass('ui-droppable');
    //     });
    // }
    // dragDrop();
    /* 2차 검수 반영 소스 end */

    // 드래그 기능
    function dragDrop() {
        const $item = $('[data-drag-item]');
        const $itemParent = $item.parent('.cell-frame');
        const $target = $('[data-drop-target]');
        const $retry = $('.btn-retry');
        let thisItem;
        let lastDropTarget;

        // 효과음 출력 함수
        const playEffectSound = () => {
            // 효과음 재생 (세포 공통)
            timeGuideArray.push(
                setTimeout(() => {
                    audioAct1Alert.play();
                }, 300),
            );
        };

        // 드래그 요소
        $item.draggable({
            start: function (e) {
                $('body').css('cursor', 'grab'); // 드래그 중 커서 변경
                $('.drag-guide-wrap-1').removeClass('show'); // 드래그 가이드 미노출
                thisItem = $(e.target).data('dragItem');
            },
            stop: function () {
                $('body').css('cursor', ''); // 드래그 종료 후 커서 원래대로
            },
            revert: function (event) {
                if (event == false) {
                    isRevert = false;

                    // 비커에 드롭된 이력이 마지막 drop 이력이면
                    clearTimeouts(); // 기존 모달 관련 setTimeout 초기화

                    if (lastDropTarget) {
                        if (thisItem == 'animal' && lastDropTarget.is('.animal-in')) {
                            // 해당 이력이 동물 세포일때
                            playEffectSound(); // 효과음 출력

                            if (lastDropTarget.data('drop-target') == 'low') {
                                guideModal3();
                            } else if (lastDropTarget.data('drop-target') == 'same') {
                                guideModal4();
                            } else if (lastDropTarget.data('drop-target') == 'high') {
                                guideModal5();
                            }
                        } else if (thisItem == 'plant' && lastDropTarget.is('.plant-in')) {
                            // 해당 이력이 식물 세포일때
                            playEffectSound(); // 효과음 출력

                            if (lastDropTarget.data('drop-target') == 'low') {
                                guideModal6();
                            } else if (lastDropTarget.data('drop-target') == 'same') {
                                guideModal7();
                            } else if (lastDropTarget.data('drop-target') == 'high') {
                                guideModal8();
                            }
                        }
                    }
                    return true;
                } else {
                    isRevert = true;
                }
            },
        });

        // 세포 부모 frame 드랍 기능
        $itemParent.droppable({
            accept: function () {
                // 동물/식물 세포에 따라 해당하는 세포만 drop 허용
                if (
                    (thisItem == 'animal' && $(this).parent('.drag-area-cell-item').hasClass('cell-animal')) ||
                    (thisItem == 'plant' && $(this).parent('.drag-area-cell-item').hasClass('cell-plant'))
                ) {
                    return true; // 해당하는 세포만 드롭 허용
                }
                return false; // 그 외에는 드롭 불가
            },
            drop: function () {
                // 드롭 시
                const dragItem = $(`[data-drag-item=${thisItem}]`);
                const beakers = $('[data-drop-target]');

                // 효과음 출력
                audioAct1AlertReturn.play();

                // 부모요소 가운데에 위치시킴
                dragItem.css({
                    top: 0,
                    left: 0,
                });

                // 세포에서 비커 관련 클래스 초기화
                dragItem.removeClass().addClass('ui-draggable ui-draggable-handle');

                // 비커에서 해당하는 in 클래스 모두 제거
                beakers.removeClass(`${thisItem}-in fill`);

                lastDropTarget = ''; // 세포 마지막 drop 요소 초기화
                beforePosAnimal = ''; // 이전 위치해있던 비커 초기화
                beforePosPlant = ''; // 이전 위치해있던 비커 초기화

                if (thisItem == 'animal') {
                    // 세포 원위치로 돌아올 경우 어떤 비커에서 왔는지 파악
                    dragItem.addClass(`from-${animalFrom}`);
                } else {
                    dragItem.addClass(`from-${plantFrom}`);
                }
            },
        });

        let animalFrom;
        let plantFrom;
        let beforePosAnimal; // 변화없음 비커로 이동 시 기존 위치 어디었는지 확인 위해 변수
        let beforePosPlant; // 변화없음 비커로 이동 시 기존 위치 어디었는지 확인 위해 변수

        // 비커 드랍 기능
        $target.droppable({
            accept: function () {
                // 'fill, animal-in, plant-in' 클래스가 없는 경우에만 드랍을 허용
                return !$(this).is('.fill, .animal-in, .plant-in');
            },
            drop: function (e) {
                // 비커에 위치해있지 않은 경우에만 드랍을 허용
                if (!$(e.target).hasClass('fill')) {
                    const clientRect = e.target.getBoundingClientRect();
                    const clientTop = clientRect.top;
                    const clientLeft = clientRect.left;
                    const dropItem = $(e.target).data('drop-target');
                    const dragItem = $(`[data-drag-item=${thisItem}]`);
                    const itemParent = dragItem.parent('.cell-frame');
                    const parentTop = itemParent.offset().top;
                    const parentLeft = itemParent.offset().left;

                    // 효과음 재생 (세포 공통)
                    audioAct1Alert.play();

                    // 세포 비커 안에 위치 설정
                    dragItem.css({
                        top: `${clientTop - parentTop + 150}px`,
                        left: `${clientLeft - parentLeft + 38}px`,
                    });

                    // 세포 class 초기화
                    dragItem.removeClass().addClass('ui-draggable ui-draggable-handle');

                    // 동물세포 일 경우
                    if (thisItem == 'animal') {
                        if (dropItem == 'low') {
                            // 동물세포 - 비커1
                            animalFrom = 'low';
                            dragItem.addClass(`low ${beforePosAnimal}-to-${animalFrom}`);
                            beforePosAnimal = 'low';
                            guideModal3();
                        } else if (dropItem == 'same') {
                            // 동물세포 - 비커2
                            animalFrom = 'same';
                            dragItem.addClass(`same ${beforePosAnimal}-to-${animalFrom}`);
                            beforePosAnimal = 'same';
                            guideModal4();
                        } else {
                            // 동물세포 - 비커3
                            animalFrom = 'high';
                            dragItem.addClass(`high ${beforePosAnimal}-to-${animalFrom}`);
                            beforePosAnimal = 'high';
                            guideModal5();
                        }
                    } else {
                        // 식물세포 일 경우
                        if (dropItem == 'low') {
                            // 식물세포 - 비커1
                            plantFrom = 'low';
                            dragItem.addClass(`low ${beforePosPlant}-to-${plantFrom}`);
                            beforePosPlant = 'low';
                            dragItem.addClass('low');
                            guideModal6();
                        } else if (dropItem == 'same') {
                            // 식물세포 - 비커2
                            plantFrom = 'same';
                            dragItem.addClass(`same ${beforePosPlant}-to-${plantFrom}`);
                            beforePosPlant = 'same';
                            dragItem.addClass('same');
                            guideModal7();
                        } else {
                            // 식물세포 - 비커3
                            plantFrom = 'high';
                            dragItem.addClass(`high ${beforePosPlant}-to-${plantFrom}`);
                            beforePosPlant = 'high';
                            dragItem.addClass('high');
                            guideModal8();
                        }
                    }

                    // fill 클래스로 비커 안에 있는지 없는지 확인
                    // 비커에서 비커로 이동 시 관련 클래스 모두 제거
                    $(`.${thisItem}-in`).removeClass(`fill ${thisItem}-in`);
                    $(e.target).addClass(`fill ${thisItem}-in`);

                    // 세포 원위치로 돌아가는 class 초기화
                    dragItem.removeClass('from-low from-same from-high');
                }

                // 마지막으로 드롭된 요소 기록
                lastDropTarget = $(`.${thisItem}-in`);
            },
        });

        // 초기화 버튼
        $retry.on('click', function () {
            // 세포 마지막 drop 요소 초기화
            lastDropTarget = '';

            // 세포 클래스 초기화, 위치값 초기화
            $item.removeClass().addClass('ui-draggable ui-draggable-handle').css({
                top: '0',
                left: '0',
            });

            // 비커 클래스 초기화
            $target.removeClass().addClass('ui-droppable');
        });
    }

    dragDrop();

    // -- 화면별 custom script -- //

    // 첫번째 가이드 모달
    const guideModal1 = () => {
        const duration = audioAct1_01.duration * 1000 + 1000;

        // 모달 노출
        showGuide('guide-balloon-tip-wrap1');

        // 화면 클릭 비활성화
        viewLock('scene-layer1');

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_01.currentTime = 0;
                audioAct1_01.play();
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap1');

                // 두번째 가이드 모달 끝날 때 화면 활성화 시키면되므로 여기에 활성화 추가X

                // 두번째 가이드 모달 init
                guideModal2();
            }, duration),
        );
    };

    // 두번째 가이드 모달
    const guideModal2 = () => {
        const duration = audioAct1_02.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap2');

                // 화면 클릭 비활성화는 modal1에서 적용해놓았기에 따로 화면 비활성화는 하지 않음
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_02.currentTime = 0;
                audioAct1_02.play();
            }, 500),
        );

        // 모달 미노출 + 드래그 가이드 노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap2');

                // 화면 클릭 활성화
                viewUnlock('scene-layer1');

                // 드래그 가이드 노출
                $('.drag-guide-wrap-1').addClass('show');

                // 정리하기 버튼 노출
                timeGuideArray.push(
                    setTimeout(() => {
                        $('.tab-list-basic').addClass('active');
                    }, 500),
                );
            }, duration),
        );
    };

    // 세번째 가이드 모달 (여기서부터 세포 이동 시 작동)
    const guideModal3 = () => {
        const duration = audioAct1_03.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap3');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_03.currentTime = 0;
                audioAct1_03.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap3');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_03.paused) {
                            audioAct1_03.mute = true;
                            audioAct1_03.pause();
                        }
                        HideGuide('guide-balloon-tip-wrap3');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap3');

                // 화면 클릭 활성화
                viewUnlock('scene-layer1');
            }, duration),
        );
    };

    // 네번째 가이드 모달
    const guideModal4 = () => {
        const duration = audioAct1_04.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap4');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_04.currentTime = 0;
                audioAct1_04.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap4');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_04.paused) {
                            audioAct1_04.mute = true;
                            audioAct1_04.pause();
                        }

                        HideGuide('guide-balloon-tip-wrap4');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap4');
            }, duration),
        );
    };

    // 다섯번째 가이드 모달
    const guideModal5 = () => {
        const duration = audioAct1_05.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap5');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_05.currentTime = 0;
                audioAct1_05.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap5');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_05.paused) {
                            audioAct1_05.mute = true;
                            audioAct1_05.pause();
                        }

                        HideGuide('guide-balloon-tip-wrap5');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap5');
            }, duration),
        );
    };

    // 여섯번째 가이드 모달
    const guideModal6 = () => {
        const duration = audioAct1_06.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap6');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_06.currentTime = 0;
                audioAct1_06.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap6');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_06.paused) {
                            audioAct1_06.mute = true;
                            audioAct1_06.pause();
                        }

                        HideGuide('guide-balloon-tip-wrap6');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap6');
            }, duration),
        );
    };

    // 일곱번째 가이드 모달
    const guideModal7 = () => {
        const duration = audioAct1_07.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap7');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_07.currentTime = 0;
                audioAct1_07.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap7');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_07.paused) {
                            audioAct1_07.mute = true;
                            audioAct1_07.pause();
                        }

                        HideGuide('guide-balloon-tip-wrap7');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap7');
            }, duration),
        );
    };

    // 여덟번째 가이드 모달
    const guideModal8 = () => {
        const duration = audioAct1_08.duration * 1000 + 1000;

        // 모달 노출
        timeGuideArray.push(
            setTimeout(() => {
                showGuide('guide-balloon-tip-wrap8');
            }, 10),
        );

        // 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                audioAct1_08.currentTime = 0;
                audioAct1_08.play();

                // 가이드 모달 외부 요소 클릭 시 음성 멈추고 모달 비활성화
                $(document).on('mousedown', function (e) {
                    const modal = $('.guide-balloon-tip-wrap8');
                    const isTabListChild = $(e.target).closest('.tab-list-basic.active').length > 0;

                    if (modal.has(e.target).length == 0) {
                        if (!audioAct1_08.paused) {
                            audioAct1_08.mute = true;
                            audioAct1_08.pause();
                        }

                        HideGuide('guide-balloon-tip-wrap8');

                        if (isTabListChild) {
                            // 정리하기 버튼 영역일 경우
                            tabModalShow(); // 정리하기 레이어 활성화
                        }
                    }
                });
            }, 500),
        );

        // 모달 미노출
        timeGuideArray.push(
            setTimeout(() => {
                HideGuide('guide-balloon-tip-wrap8');
            }, duration),
        );
    };

    // 정리하기 버튼
    const modalShowBtn = $('.tab-list-basic .button-tab');
    const modalCloseBtn = $('#btnTabClose');

    // 정리하기 레이어 호출 함수
    function tabModalShow() {
        $('.modal-layer-activity-goals3').addClass('active');
        $('.modal-layer-activity-goals3 .tab-modal').addClass('active');

        // 정리하기 음성 재생
        timeGuideArray.push(
            setTimeout(() => {
                resultAudio.load();
                resultAudio.play();
            }, 1000),
        );
    }

    modalShowBtn.on('click', function () {
        tabModalShow(); // 정리하기 호출
    });

    // 정리하기 모달 닫기 버튼
    modalCloseBtn.on('click', function () {
        // 모달 미노출
        $('.modal-layer-activity-goals3 .tab-modal').removeClass('active');

        timeGuideArray.push(
            setTimeout(() => {
                $('.modal-layer-activity-goals3').removeClass('active');
            }, 200),
        );

        // 음성 정지
        if (!resultAudio.paused) {
            resultAudio.mute = true;
            resultAudio.pause();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
