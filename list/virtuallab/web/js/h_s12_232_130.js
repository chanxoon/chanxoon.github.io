/* [고등1] > 생명과학 */
// 혈액형 판정하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

// const { active } = require("browser-sync");

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s12_232_130/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s12_232_130/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s12_232_130/2-act_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s12_232_130/2-act_03.mp3'); // 활동1_03 오디오

const audio_correct = new Audio('../../media/h_s12_232_130/correct.mp3'); // 성공 효과음
const audio_wrong = new Audio('../../media/h_s12_232_130/wrong.mp3'); // 실패 효과음

const audioGoal_pop = new Audio('../../media/h_s12_232_130/click.mp3'); // 활동목표 팝업

// const resultAudio = new Audio('../../media/h_s12_232_130/3-final.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;

audio_correct.volume = 1;
audio_wrong.volume = 1;

audioGoal_pop.volume = 1;
// resultAudio.volume = 1;

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

        audio_correct.load();
        audio_correct.play();
        audio_correct.mute = true;
        audio_correct.pause();
        audio_correct.currentTime = 0;
        audio_correct.mute = false;

        audio_wrong.load();
        audio_wrong.play();
        audio_wrong.mute = true;
        audio_wrong.pause();
        audio_wrong.currentTime = 0;
        audio_wrong.mute = false;

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

        // resultAudio.load();
        // resultAudio.play();
        // resultAudio.mute = true;
        // resultAudio.pause();
        // resultAudio.currentTime = 0;
        // resultAudio.mute = false;

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
            audioAct1_02.volume = 0;
            audioAct1_03.volume = 0;

            audio_correct.volume = 0;
            audio_wrong.volume = 0;

            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            audioAct1_02.volume = 1;
            audioAct1_03.volume = 1;

            audio_correct.volume = 1;
            audio_wrong.volume = 1;

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

        $('.scene-layer1 .blood-list button').css('pointer-events', 'none');
        $('.scene-layer1 .blood-type button').css('pointer-events', 'none');

        // 1초 후 가이드 모달 활성화
        setTimeout(function () {
            $('.guide-balloon-tip-wrap1').addClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');
        }, 1000);

        // 1.5초 후 오디오 재생 (타이머 설정)
        audioTimeout = setTimeout(function () {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1500);

        // 10초 후 가이드 모달 비활성화
        setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
        }, 10000);

        // 10초 후 손가락 드래그 가이드
        setTimeout(function () {
            $('.scene-layer1 .blood-list button').css('pointer-events', 'unset');
            $('.scene-layer1 .blood-type button').css('pointer-events', 'unset');
            $('.gesture-box-guide-finger1').addClass('active');
        }, 10000);

        $('.scene-layer1 .blood-list button').on('click', function () {
            $('.gesture-box-guide-finger1').removeClass('active');
            $(this).addClass('on');
            $('.blood-reaction-plate .con > div .blood-drop').addClass('active');

            setTimeout(function () {
                $('.scene-layer1 .blood-list button').css('pointer-events', 'none');
            }, 1000);
            setTimeout(function () {
                $('.blood-reaction-plate .con > div .blood-drop').removeClass('active');
                $('.scene-layer1 .blood-reaction-plate .con > div .agglomeration').addClass('active');
            }, 2000);
            setTimeout(function () {
                // $('.scene-layer1 .blood-reaction-plate .con > div .agglomeration').removeClass('active');
                $('.scene-layer1 .blood-list button').css('pointer-events', 'none');
                $('.scene-layer1 .blood-list button.on').css('pointer-events', 'none');
            }, 6000);

            var RH = $('.blood-reaction-plate .con .RH .blood-serum');
            var A = $('.blood-reaction-plate .con .A .blood-serum');
            var B = $('.blood-reaction-plate .con .B .blood-serum');

            var RH_agg = $('.blood-reaction-plate .con .RH .agglomeration span i');
            var A_agg = $('.blood-reaction-plate .con .A .agglomeration span i');
            var B_agg = $('.blood-reaction-plate .con .B .agglomeration span i');

            var blood_box = $('.h_s12_232_130 .scene-layer2 .blood-type-grid .con .blood-list .blood');
            var RH_box = $('.scene-layer2 .blood-type-grid .con .rh-list .rh-box');
            var ABO_box = $('.scene-layer2 .blood-type-grid .con .ABO-list .abo-box');

            if ($(this).hasClass('b1')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-1');
                    $(A).attr('class', 'blood-serum-1');
                    $(B).attr('class', 'blood-serum-2');

                    $(RH_agg).attr('class', 'icon o');
                    $(A_agg).attr('class', 'icon o');
                    $(B_agg).attr('class', 'icon x');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(0).addClass('active');
                $(RH_box).eq(0).addClass('active');
                $(ABO_box).eq(0).addClass('active');
            } else if ($(this).hasClass('b2')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-1');
                    $(A).attr('class', 'blood-serum-2');
                    $(B).attr('class', 'blood-serum-1');

                    $(RH_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(A_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(B_agg).attr('class', 'icon o').parent('span').attr('class', 'blue-reverse');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(1).addClass('active');
                $(RH_box).eq(1).addClass('active');
                $(ABO_box).eq(1).addClass('active');
            } else if ($(this).hasClass('b3')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-1');
                    $(A).attr('class', 'blood-serum-1');
                    $(B).attr('class', 'blood-serum-1');

                    $(RH_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(A_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(B_agg).attr('class', 'icon o').parent('span').attr('class', 'blue-reverse');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(2).addClass('active');
                $(RH_box).eq(2).addClass('active');
                $(ABO_box).eq(2).addClass('active');
            } else if ($(this).hasClass('b4')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-1');
                    $(A).attr('class', 'blood-serum-2');
                    $(B).attr('class', 'blood-serum-2');

                    $(RH_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(A_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(B_agg).attr('class', 'icon x').parent('span').attr('class', 'green');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(3).addClass('active');
                $(RH_box).eq(3).addClass('active');
                $(ABO_box).eq(3).addClass('active');
            } else if ($(this).hasClass('b5')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-2');
                    $(A).attr('class', 'blood-serum-2');
                    $(B).attr('class', 'blood-serum-2');

                    $(RH_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(A_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(B_agg).attr('class', 'icon x').parent('span').attr('class', 'green');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(4).addClass('active');
                $(RH_box).eq(4).addClass('active');
                $(ABO_box).eq(4).addClass('active');
            } else if ($(this).hasClass('b6')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-2');
                    $(A).attr('class', 'blood-serum-1');
                    $(B).attr('class', 'blood-serum-1');

                    $(RH_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(A_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(B_agg).attr('class', 'icon o').parent('span').attr('class', 'blue-reverse');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(5).addClass('active');
                $(RH_box).eq(5).addClass('active');
                $(ABO_box).eq(5).addClass('active');
            } else if ($(this).hasClass('b7')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-2');
                    $(A).attr('class', 'blood-serum-2');
                    $(B).attr('class', 'blood-serum-1');

                    $(RH_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(A_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(B_agg).attr('class', 'icon o').parent('span').attr('class', 'blue-reverse');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(6).addClass('active');
                $(RH_box).eq(6).addClass('active');
                $(ABO_box).eq(6).addClass('active');
            } else if ($(this).hasClass('b8')) {
                setTimeout(function () {
                    $(RH).attr('class', 'blood-serum-2');
                    $(A).attr('class', 'blood-serum-1');
                    $(B).attr('class', 'blood-serum-2');

                    $(RH_agg).attr('class', 'icon x').parent('span').attr('class', 'green-reverse');
                    $(A_agg).attr('class', 'icon o').parent('span').attr('class', 'blue');
                    $(B_agg).attr('class', 'icon x').parent('span').attr('class', 'green');
                }, 2000);
                setTimeout(function () {
                    // $(RH).attr('class', 'blood-serum');
                    // $(A).attr('class', 'blood-serum');
                    // $(B).attr('class', 'blood-serum');
                    $('.blood-type .dote-line1').addClass('active');
                }, 6000);

                $(blood_box).eq(7).addClass('active');
                $(RH_box).eq(7).addClass('active');
                $(ABO_box).eq(7).addClass('active');
            }

            /* 드래그이벤트 */
            $(function () {
                $('.RH-plus-type').draggable({
                    helper: 'clone',
                    containment: '',
                    cursor: 'pointer',
                    snap: '.rh-box',
                    revert: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'RH1') {
                            if (event) {
                                $('.RH-plus-type').addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                    },
                    drag: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'RH1') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                    },
                });
                $('.rh-plus.active').droppable({
                    accept: '.RH-plus-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        // $(ui.draggable[0]).css('top', '0%').css('left', '0%').addClass('on');
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.RH')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });

                $('.RH-minus-type').draggable({
                    helper: 'clone',
                    containment: '',
                    cursor: 'pointer',
                    snap: '.rh-box',
                    revert: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'RH2') {
                            if (event) {
                                $('.RH-minus-type').addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                    },
                    drag: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'RH2') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                    },
                });
                $('.rh-minus.active').droppable({
                    accept: '.RH-minus-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.RH')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });

                $('.ABO').draggable({
                    helper: 'clone',
                    containment: '',
                    cursor: 'pointer',
                    snap: '.abo-box',
                    revert: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'ABO1') {
                            if (event) {
                                $(this).addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                        if (id == 'ABO2') {
                            if (event) {
                                $(this).addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                        if (id == 'ABO3') {
                            if (event) {
                                $(this).addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                        if (id == 'ABO4') {
                            if (event) {
                                $(this).addClass('on');
                                audio_correct.load();
                                audio_correct.play();
                            } else return true;
                        }
                    },
                    drag: function (event) {
                        var id = $(this)[0].id;
                        if (id == 'ABO1') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                        if (id == 'ABO2') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                        if (id == 'ABO3') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                        if (id == 'ABO4') {
                            if (event) {
                                $(this).css('opacity', '0');
                            } else return true;
                        }
                    },
                });
                $('.Atype.active').droppable({
                    accept: '.A-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.ABO')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });
                $('.Btype.active').droppable({
                    accept: '.B-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.ABO')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });
                $('.ABtype.active').droppable({
                    accept: '.AB-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.ABO')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });
                $('.Otype.active').droppable({
                    accept: '.O-type',
                    drop: function (event, ui) {
                        console.log(ui.draggable[0].id);
                        var Clone = $(ui.helper).clone();
                        $(this)
                            .append(Clone)
                            .find('.ABO')
                            .css('top', '12px')
                            .css('left', '73px')
                            .addClass('on')
                            .parent()
                            .addClass('succ');
                    },
                });

                $('.blood-type-box div').bind('dragstop', function (event, ui) {
                    if ($(this).hasClass('on') === false) {
                        audio_wrong.load();
                        audio_wrong.play();
                        $(this).css('opacity', '1');
                    }
                });

                // 말풍선
                $('.blood-type-box div').draggable({
                    stop: function (event) {
                        var succ1 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(1).succ').length;
                        var succ1_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(1).succ').length;

                        var succ2 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(2).succ').length;
                        var succ2_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(2).succ').length;

                        var succ3 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(3).succ').length;
                        var succ3_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(3).succ').length;

                        var succ4 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(4).succ').length;
                        var succ4_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(4).succ').length;

                        var succ5 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(5).succ').length;
                        var succ5_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(5).succ').length;

                        var succ6 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(6).succ').length;
                        var succ6_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(6).succ').length;

                        var succ7 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(7).succ').length;
                        var succ7_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(7).succ').length;

                        var succ8 = $('.blood-type-grid .con .rh-list .rh-box:nth-child(8).succ').length;
                        var succ8_1 = $('.blood-type-grid .con .ABO-list .abo-box:nth-child(8).succ').length;

                        if (succ1 + succ1_1 == 2) {
                            $('.info-box1-1').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-1').removeClass('active');
                            }, 7000);
                        } else if (succ2 + succ2_1 == 2) {
                            $('.info-box1-2').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-2').removeClass('active');
                            }, 7000);
                        } else if (succ3 + succ3_1 == 2) {
                            $('.info-box1-3').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-3').removeClass('active');
                            }, 7000);
                        } else if (succ4 + succ4_1 == 2) {
                            $('.info-box1-4').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-4').removeClass('active');
                            }, 7000);
                        } else if (succ5 + succ5_1 == 2) {
                            $('.info-box1-5').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-5').removeClass('active');
                            }, 7000);
                        } else if (succ6 + succ6_1 == 2) {
                            $('.info-box1-6').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-6').removeClass('active');
                            }, 7000);
                        } else if (succ7 + succ7_1 == 2) {
                            $('.info-box1-7').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-7').removeClass('active');
                            }, 7000);
                        } else if (succ8 + succ8_1 == 2) {
                            $('.info-box1-8').addClass('active');
                            $('.dote-line2').addClass('active');
                            setTimeout(function () {
                                $('.blood-type-grid .con .rh-list .rh-box').removeClass('succ');
                                $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                            }, 1000);
                            setTimeout(function () {
                                $('.info-box1-8').removeClass('active');
                            }, 7000);
                        }

                        // if (succ1_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-1').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-1').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ2_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-2').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-2').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ3_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-3').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-3').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ4_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-4').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-4').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ5_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-5').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-5').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ6_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-6').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-6').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ7_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-7').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-7').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // } else if (succ8_1.hasClass('succ')) {
                        //     $('.blood-type-grid .con .ABO-list .abo-box').removeClass('succ');
                        //     $('.info-box2-8').addClass('active');
                        //     setTimeout(function () {
                        //         $('.info-box2-8').removeClass('active');
                        //         $('.dote-line2').addClass('active');
                        //     }, 3000);
                        // }

                        var next_btn = $('.scene-layer2 .next-btn button');
                        var rh_succ1 = $('.blood-type-grid .con .rh-list .rh-box').find('.ui-draggable').length;
                        var abo_succ1 = $('.blood-type-grid .con .ABO-list .abo-box').find('.ui-draggable').length;
                        if (rh_succ1 + abo_succ1 == 16) {
                            $(next_btn).addClass('active');
                            $('.dote-line2').removeClass('active');
                            setTimeout(function () {
                                $('.dote-line2').removeClass('active');
                            }, 3000);
                            $('.dote-line2').each(function () {
                                $(this).removeClass('active');
                            });
                        }
                        console.log(rh_succ1 + abo_succ1);

                        $('.gesture-box-guide-finger2').removeClass('active');
                    },
                });
            });
        });

        $('.scene-layer1 .blood-type button').on('click', function () {
            $('.scene-layer1').removeClass('active');
            $('.scene-layer2').addClass('active');
            $('.scene-layer2 .blood-type-box div').css('pointer-events', 'none');
            $('.scene-layer1 .blood-list button').css('pointer-events', 'unset');
            $('.scene-layer1 .blood-reaction-plate .con > div .agglomeration').removeClass('active');
            $('.scene-layer1 .blood-reaction-plate .con > div > div:nth-of-type(1)').attr('class', 'blood-serum');

            var active_len = $('.blood-type-grid .con .rh-list .rh-box.active').length;
            if (active_len >= 2) {
                $('.scene-layer2 .blood-type-box div').css('pointer-events', 'unset');
            } else {
                // 0초 후 가이드 모달 활성화
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap2').addClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').addClass('active');
                }, 0);

                // 1.5초 후 오디오 재생 (타이머 설정)
                audioTimeout = setTimeout(function () {
                    audioAct1_02.load();
                    audioAct1_02.play();
                }, 1500);

                // 9초 후 가이드 모달 비활성화
                setTimeout(function () {
                    $('.guide-balloon-tip-wrap2').removeClass('active');
                    $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
                }, 9000);

                // 9초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger2').addClass('active');
                    $('.scene-layer2 .blood-type-box div').css('pointer-events', 'unset');
                }, 9000);
            }
        });

        $('.scene-layer2 .blood-agg-reaction button, .prev-btn button').on('click', function () {
            $('.scene-layer1').addClass('active');
            $('.scene-layer2').removeClass('active');
            $('.dote-line1').removeClass('active');
            $('.dote-line2').removeClass('active');
            $('.scene-layer2 .blood-type-box div').removeClass('on').show().css('opacity', '1');
            $('.scene-layer1 .blood-list button').css('pointer-events', 'unset');

            var blood_btn = $('.scene-layer1 .blood-list button.on');
            var rh_succ = $('.blood-type-grid .con .rh-list .rh-box').eq(0).find('.ui-draggable').length;
            var abo_succ = $('.blood-type-grid .con .ABO-list .abo-box').eq(0).find('.ui-draggable').length;

            if (rh_succ + abo_succ == 2) {
                $(blood_btn).removeClass('on').addClass('disable');
            }
        });

        $('.scene-layer2 .next-btn button').on('click', function () {
            $('.scene-layer2').removeClass('active');
            $('.scene-layer3').addClass('active');
            $('.scene-layer3 .blood-list-btn button').css('pointer-events', 'none');

            // 1초 후 가이드 모달 활성화
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3').addClass('active');
                $('.guide-balloon-tip-wrap3 .bubble-text3').addClass('active');
            }, 1000);

            // 1.5초 후 오디오 재생 (타이머 설정)
            audioTimeout = setTimeout(function () {
                audioAct1_03.load();
                audioAct1_03.play();
            }, 1500);

            // 9초 후 가이드 모달 비활성화
            setTimeout(function () {
                $('.guide-balloon-tip-wrap3').removeClass('active');
                $('.guide-balloon-tip-wrap3 .bubble-text3').removeClass('active');
            }, 9000);

            // 10초 후 손가락 드래그 가이드
            setTimeout(function () {
                $('.gesture-box-guide-finger3').addClass('active');
                $('.scene-layer3 .blood-list-btn button').css('pointer-events', 'unset');
            }, 10000);
        });

        $('.scene-layer3 .blood-list-btn button').on('click', function () {
            $('.scene-layer3 .blood-list-btn button').removeClass('on');
            $(this).addClass('on');
            $('.info-box').removeClass('active');

            if ($(this).hasClass('active') === false) {
                $('.example-box').addClass('active');
                $('.example-box .con > div').removeClass('on').css('top', '0').css('left', '0').show();
                $('.agglutinin-box .red-blood .img').empty();
                $('.gesture-box-guide-finger3').removeClass('active');
                $('.scene-layer3 .example-box .con > div').css('opacity', '1');
                $('.info-box').removeClass('active');
            }

            var btn_on_len = $('.scene-layer3 .blood-list-btn button.active').length;
            if (btn_on_len >= 1) {
                $('.gesture-box-guide-finger4').removeClass('active');
            } else if (btn_on_len == 0) {
                // 1초 후 손가락 드래그 가이드
                setTimeout(function () {
                    $('.gesture-box-guide-finger4').addClass('active');
                }, 1000);
            }
        });

        $('.scene-layer3 .blood-list-btn button.RHA').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-A ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 A</span></div><div class="agg-RH ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">Rh 응집원</span></div>',
                );
                $('.info-box3').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').hide();
                $('.scene-layer3 .example-box .con .agg-B').show();
                $('.scene-layer3 .example-box .con .agg-RH').hide();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RHB').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-B ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 B</span></div><div class="agg-RH ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">Rh 응집원</span></div>',
                );
                $('.info-box3-2').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').show();
                $('.scene-layer3 .example-box .con .agg-B').hide();
                $('.scene-layer3 .example-box .con .agg-RH').hide();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RHAB').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-A ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 A</span></div><div class="agg-B ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 B</span></div><div class="agg-RH ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">Rh 응집원</span></div>',
                );
                $('.info-box3-3').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').hide();
                $('.scene-layer3 .example-box .con .agg-B').hide();
                $('.scene-layer3 .example-box .con .agg-RH').hide();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RHO').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-RH ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">Rh 응집원</span></div>',
                );
                $('.info-box3-4').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').show();
                $('.scene-layer3 .example-box .con .agg-B').show();
                $('.scene-layer3 .example-box .con .agg-RH').hide();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RH-O').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-RH-O ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 RH-O</span></div>',
                );
                $('.info-box3-5').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').show();
                $('.scene-layer3 .example-box .con .agg-B').show();
                $('.scene-layer3 .example-box .con .agg-RH').show();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RH-AB').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-A ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 A</span></div><div class="agg-B ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 B</span></div>',
                );
                $('.info-box3-6').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').hide();
                $('.scene-layer3 .example-box .con .agg-B').hide();
                $('.scene-layer3 .example-box .con .agg-RH').show();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RH-B').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-B ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 B</span></div>',
                );
                $('.info-box3-7').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').show();
                $('.scene-layer3 .example-box .con .agg-B').hide();
                $('.scene-layer3 .example-box .con .agg-RH').show();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });
        $('.scene-layer3 .blood-list-btn button.RH-A').on('click', function () {
            if ($(this).hasClass('active')) {
                $('.scene-layer3 .agglutinin-box .red-blood .img').empty();
                $('.scene-layer3 .agglutinin-box .red-blood .img').append(
                    '<div class="agg-A ui-draggable ui-draggable-handle ui-draggable-dragging on" style="top: -10px; left: -10px; opacity: 1; position: absolute;"><span class="blind">응집원 A</span></div>',
                );
                $('.info-box3-8').addClass('active');
                $('.scene-layer3 .example-box .con > div').show().css('opacity', '1');
                $('.scene-layer3 .example-box .con .agg-A').hide();
                $('.scene-layer3 .example-box .con .agg-B').show();
                $('.scene-layer3 .example-box .con .agg-RH').show();
                $('.scene-layer3 .example-box .con .agg-RH-O').hide();
            }
        });

        $('.scene-layer3 .blood-list-btn button').on('click', function () {
            $('.scene-layer3 .example-box .con .agg-RH-O')
                .removeClass('active')
                .css('width', '0px')
                .css('margin', '0px');
            if ($(this).hasClass('RH-O')) {
                $('.scene-layer3 .example-box .con .agg-RH-O')
                    .addClass('active')
                    .css('width', '150px')
                    .css('margin', '0px 20px');
            }
        });

        // 드래그이벤트
        $('.scene-layer3 .example-box .con > div').draggable({
            helper: 'clone',
            containment: '',
            cursor: 'pointer',
            snap: '.red-blood .img',
            revert: function (event) {
                var idname = $(this)[0].id;
                var succ1 = $('.blood-list-btn button.on .blind .succ:nth-of-type(1)').text();
                var succ2 = $('.blood-list-btn button.on .blind .succ:nth-of-type(2)').text();
                var succ3 = $('.blood-list-btn button.on .blind .succ:nth-of-type(3)').text();
                var succ4 = $('.blood-list-btn button.on .blind .succ:nth-of-type(4)').text();
                var fail1 = $('.blood-list-btn button.on .blind .fail:nth-of-type(1)').text();
                var fail2 = $('.blood-list-btn button.on .blind .fail:nth-of-type(2)').text();
                var fail3 = $('.blood-list-btn button.on .blind .fail:nth-of-type(3)').text();
                var fail4 = $('.blood-list-btn button.on .blind .fail:nth-of-type(4)').text();

                console.log(succ1);

                if (idname == succ1) {
                    if (event) {
                        $(this).addClass('on');
                        audio_correct.load();
                        audio_correct.play();
                    }
                }
                if (idname == succ2) {
                    if (event) {
                        $(this).addClass('on');
                        audio_correct.load();
                        audio_correct.play();
                    }
                }
                if (idname == succ3) {
                    if (event) {
                        $(this).addClass('on');
                        audio_correct.load();
                        audio_correct.play();
                    }
                }
                if (idname == succ4) {
                    if (event) {
                        $(this).addClass('on');
                        audio_correct.load();
                        audio_correct.play();
                    }
                }
                if (idname == fail1) {
                    if (event) {
                        $(this).removeClass('on');
                        audio_wrong.load();
                        audio_wrong.play();
                        return true;
                    } else return true;
                }
                if (idname == fail2) {
                    if (event) {
                        $(this).removeClass('on');
                        audio_wrong.load();
                        audio_wrong.play();
                        return true;
                    } else return true;
                }
                if (idname == fail3) {
                    if (event) {
                        $(this).removeClass('on');
                        audio_wrong.load();
                        audio_wrong.play();
                        return true;
                    } else return true;
                }
                if (idname == fail4) {
                    if (event) {
                        $(this).removeClass('on');
                        audio_wrong.load();
                        audio_wrong.play();
                        return true;
                    } else return true;
                }
            },
            drag: function (event) {
                if (event) {
                    $(this).css('opacity', '0');
                } else return true;
            },
        });
        $('.scene-layer3 .agglutinin-box .red-blood .img').droppable({
            drop: function (event, ui) {
                console.log(ui.draggable[0].id);

                $('.gesture-box-guide-finger4').removeClass('active');

                var Clone = $(ui.helper).clone();
                $(this).append(Clone).find('.ui-draggable').css('top', '-10px').css('left', '-10px').addClass('on');

                var fail1 = $('.blood-list-btn button.on .blind .fail:nth-of-type(1)').text();
                var fail2 = $('.blood-list-btn button.on .blind .fail:nth-of-type(2)').text();
                var fail3 = $('.blood-list-btn button.on .blind .fail:nth-of-type(3)').text();

                if (ui.draggable[0].id == fail1) {
                    $(this)
                        .find('.' + fail1)
                        .remove();
                }
                if (ui.draggable[0].id == fail2) {
                    $(this)
                        .find('.' + fail2)
                        .remove();
                }
                if (ui.draggable[0].id == fail3) {
                    $(this)
                        .find('.' + fail3)
                        .remove();
                }

                var btn_on = $('.blood-list-btn button.on .blind .succ').length;
                var btn_on_5 = $('.blood-list-btn RH-O.on .blind .fail').length;
                var agg_on = $('.agglutinin-box .red-blood .img .on').length;

                if (btn_on == agg_on) {
                    $('.blood-list-btn button.on')
                        // .css('pointer-events', 'none')
                        .css('opacity', '0.5')
                        .addClass('disable')
                        .addClass('active');
                }
            },
        });

        $('.scene-layer3 .example-box .con > div').bind('dragstop', function (event, ui) {
            if ($(this).hasClass('on') === false) {
                $(this).css('opacity', '1');
            }
        });

        $('.scene-layer3 .example-box .con > div').draggable({
            stop: function (event) {
                var btnlist1 = $('.blood-list-btn .RHA');
                var btnlist2 = $('.blood-list-btn .RHB');
                var btnlist3 = $('.blood-list-btn .RHAB');
                var btnlist4 = $('.blood-list-btn .RHO');
                var btnlist5 = $('.blood-list-btn .RH-O');
                var btnlist6 = $('.blood-list-btn .RH-AB');
                var btnlist7 = $('.blood-list-btn .RH-B');
                var btnlist8 = $('.blood-list-btn .RH-A');

                if ($(btnlist1).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist2).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-2').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-2').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist3).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-3').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-3').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist4).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-4').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-4').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist5).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-5').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-5').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist6).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-6').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-6').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist7).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-7').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-7').removeClass('active');
                    // }, 3000);
                } else if ($(btnlist8).hasClass('disable')) {
                    $('.blood-list-btn button').removeClass('disable');
                    $('.info-box3-8').addClass('active');
                    // setTimeout(function () {
                    //     $('.info-box3-8').removeClass('active');
                    // }, 3000);
                }
            },
        });

        $('.scene-layer3 .prev-btn button').on('click', function () {
            $('.scene-layer1').removeClass('active');
            $('.scene-layer2').addClass('active');
            $('.scene-layer3').removeClass('active');
        });

        // $('body').on('click', function () {
        //     if($('.guide-balloon-tip-wrap').hasClass('active')){
        //         $('.guide-balloon-tip-wrap').removeClass('active');
        //         audioAct1_01.pause();
        //         audioAct1_02.pause();
        //         audioAct1_03.pause();

        //         // scene-layer1
        //         $('.scene-layer1 .blood-list button').css('pointer-events', 'unset');
        //         $('.scene-layer1 .blood-type button').css('pointer-events', 'unset');
        //         $('.gesture-box-guide-finger1').addClass('active');

        //         // scene-layer2
        //         $('.gesture-box-guide-finger2').addClass('active');
        //         $('.scene-layer2 .blood-type-box div').css('pointer-events', 'unset');

        //         // scene-layer3
        //         $('.gesture-box-guide-finger3').addClass('active');
        //         $('.scene-layer3 .blood-list-btn button').css('pointer-events', 'unset');
        //     } else {
        //         // scene-layer1
        //         $('.gesture-box-guide-finger1').removeClass('active');

        //         // scene-layer2
        //         $('.gesture-box-guide-finger2').removeClass('active');

        //         // scene-layer3
        //         $('.gesture-box-guide-finger3').removeClass('active');
        //     }
        // });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
