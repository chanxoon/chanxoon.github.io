/* [고등1] > 화학 */
// 화학 평형에서 농도비의 규칙성 찾기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const clickGoal = new Audio('../../media/h_s10_312_100/click.mp3'); // 활동목표 공통 효과음
const audioAct1_01 = new Audio('../../media/h_s10_312_100/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s10_312_100/2-act_02.mp3'); // 활동1_02 오디오

/* 오디오 볼륨 [0~1] 선언 */
clickGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;

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
    });

    // -----------------------------------------------------------------

    // <활동목표 : page-view2>
    const btnActivityGoalsClose = $('.page-view2 .button-close');
    btnActivityGoalsClose.on('click', function (e) {
        const thisB = $(this);
        pageView2.removeClass('active');
        // pageView3.addClass('active');
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
            audioAct1_01.volume = 0;
            audioAct1_02.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            clickGoal.volume = 1; // 활동시작 클릭 오디오 볼륨 [0-1]
            audioAct1_01.volume = 1;
            audioAct1_02.volume = 1;
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

    const mySwiper = new Swiper('.modal-layer-helper .mySwiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        allowTouchMove: false, // 가로로 드래그를 막음
    });

    const btnHelper = $('.button-help');
    const modalLayerHelper = $('.modal-layer-helper');
    const mlhBtnClose = modalLayerHelper.find('.button-close');
    const helper2Excel = $('.helper2-excel-inner');

    btnHelper.on('click', function () {
        if (modalLayerHelper.hasClass('active')) {
            modalLayerHelper.removeClass('active');
            modalLayerHelper.find('.tip-view').removeClass('active');

            audioAct1_01.pause();
            audioAct1_01.currentTime = 0;

            audioAct1_02.pause();
            audioAct1_02.currentTime = 0;

            mySwiper.slideTo(0, 0);
        } else {
            modalLayerHelper.addClass('active');
            audioAct1_01.load();
            setTimeout(function () {
                audioAct1_01.play();
            }, 1000);
        }
    });

    helper2Excel.on('click', function () {
        modalLayerHelper.find('.tip-view').addClass('active');
        $('.gesture-pop-excel-finger1').removeClass('active');
    });

    mlhBtnClose.on('click', function () {
        modalLayerHelper.removeClass('active');
        modalLayerHelper.find('.tip-view').removeClass('active');
        $('.gesture-pop-excel-finger1').addClass('active');

        audioAct1_01.pause();
        audioAct1_01.currentTime = 0;

        audioAct1_02.pause();
        audioAct1_02.currentTime = 0;

        mySwiper.slideTo(0, 0);
    });

    $('#prevFinal').on('click', function () {
        audioAct1_02.pause();
        audioAct1_02.currentTime = 0;

        audioAct1_01.load();
        setTimeout(function () {
            audioAct1_01.play();
        }, 1000);
    });

    $('#nextFinal').on('click', function () {
        audioAct1_01.pause();
        audioAct1_01.currentTime = 0;

        audioAct1_02.load();
        setTimeout(function () {
            audioAct1_02.play();
        }, 1000);
    });

    $('.select-view-text').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            thisB.removeClass('active');
        } else {
            thisB.addClass('active');
        }
    });

    const modalLayerAlert = $('.modal-layer-alert');
    const btnAlertClose = modalLayerAlert.find('.button-alert-close');
    btnAlertClose.on('click', function () {
        const thisB = $(this);
        thisB.closest('.modal-layer-alert').removeClass('active');
    });

    const cellInput = $('.cell-input');

    cellInput.on('focus', function () {
        const thisB = $(this);
        const nextPlaceholderLayer = thisB.next('.placeholder-layer'); // 현재 input의 바로 다음 placeholder-layer
        nextPlaceholderLayer.removeClass('active');

        // active 클래스가 있을 때만 실행
        if (thisB.hasClass('active')) {
            const dataCell = thisB.attr('data-cell');
            const value = thisB.val().trim();

            // inputViewText의 값을 선택한 셀의 값으로 업데이트
            if (value) {
                inputViewText.val(value);
            } else {
                inputViewText.val(''); // 값이 없을 경우 공백으로 설정
            }

            $('.select-view-text').val(dataCell); // 현재 선택된 셀의 data-cell 값을 업데이트
        }
    });

    cellInput.on('input', function () {
        const thisB = $(this);
        $('.input-view-text').val(thisB.val()); // 입력된 값을 실시간으로 .input-view-text에 표시
    });

    let cntCell1 = 10;

    let D3P4, D3P5, D3P6, D3P7;
    let E3P4, E3P5, E3P6, E3P7;
    let F3P4, F3P5, F3P6, F3P7;

    let D3Text = '',
        D4Text = '',
        D5Text = '',
        D6Text = '',
        D7Text = '';

    let E3Text = '',
        E4Text = '',
        E5Text = '',
        E6Text = '',
        E7Text = '';

    let F3Text = '',
        F4Text = '',
        F5Text = '',
        F6Text = '',
        F7Text = '';

    cellInput.on('keydown blur', function (e) {
        const thisB = $(this);
        const inputTextView = $('.excel-window-wrap .input-view-wrap');
        console.log('test');
        // active 클래스가 있을 때만 실행
        if (thisB.hasClass('active')) {
            const nextPlaceholderLayer = thisB.next('.placeholder-layer');

            // 엔터 키를 누르거나 포커스를 잃었을 때만 실행
            if (e.type === 'blur' || e.key === 'Enter') {
                // 각 data-cell에 대응하는 값을 객체로 관리
                const cellDataValues = {
                    B3: '0.047',
                    B4: '0.051',
                    B5: '0.046',
                    B6: '0.045',
                    B7: '0.053',

                    C3: '0.467',
                    C4: '0.551',
                    C5: '0.448',
                    C6: '0.428',
                    C7: '0.595',

                    D3: '=C3/B3',
                    D4: '=C4/B4',
                    D5: '=C5/B5',
                    D6: '=C6/B6',
                    D7: '=C7/B7',

                    E3: '=C3/B3/B3',
                    E4: '=C4/B4/B4',
                    E5: '=C5/B5/B5',
                    E6: '=C6/B6/B6',
                    E7: '=C7/B7/B7',

                    F3: '=C3/(2*B3)',
                    F4: '=C4/(2*B4)',
                    F5: '=C5/(2*B5)',
                    F6: '=C6/(2*B6)',
                    F7: '=C7/(2*B7)',
                };
                const cellKey = thisB.attr('data-cell'); // 현재 셀의 data-cell 값 가져오기
                const dataVal = cellDataValues[cellKey]; // 해당 셀의 올바른 값 가져오기
                const trimmedValue = thisB.val().trim(); // 입력값의 공백 제거

                // 해당 cellKey가 존재할 때만 처리
                if (thisB.attr('data-cell') === 'B3') {
                    if (trimmedValue === '0.047') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'B4') {
                    if (trimmedValue === '0.051') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'B5') {
                    if (trimmedValue === '0.046') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'B6') {
                    if (trimmedValue === '0.045') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'B7') {
                    if (trimmedValue === '0.053') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'C3') {
                    if (trimmedValue === '0.467') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'C4') {
                    if (trimmedValue === '0.551') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'C5') {
                    if (trimmedValue === '0.448') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'C6') {
                    if (trimmedValue === '0.428') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'C7') {
                    if (trimmedValue === '0.595') {
                        // 입력된 값이 일치할 때
                        inputTextView.val(dataVal);
                        thisB.val(dataVal);
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        cntCell1--;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (trimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'D3') {
                    let upperTrimmedValue = trimmedValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/B3') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        D3P4 = '10.80';
                        D3P5 = '9.739';
                        D3P6 = '9.511';
                        D3P7 = '11.23';

                        D3Text = '=C3/B3';
                        D4Text = '=C4/B4';
                        D5Text = '=C5/B5';
                        D6Text = '=C6/B6';
                        D7Text = '=C7/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        thisB.attr('readonly', 'readonly');

                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);
                        $('.drag-top-bottom-wrap-d').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-d .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-d .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'E3') {
                    let upperTrimmedValue = trimmedValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/B3^2') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        // thisB.val(
                        //     (
                        //         parseFloat($('.cell-input[data-cell="C3"]').val()) /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val()) /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val())
                        //     ).toFixed(1),
                        // );

                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/B3^2';
                        E4Text = '=C4/B4^2';
                        E5Text = '=C5/B5^2';
                        E6Text = '=C6/B6^2';
                        E7Text = '=C7/B7^2';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        var printE3 = upperTrimmedValue;

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3^2)') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/(B3^2)';
                        E4Text = '=C4/(B4^2)';
                        E5Text = '=C5/(B5^2)';
                        E6Text = '=C6/(B6^2)';
                        E7Text = '=C7/(B7^2)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/B3/B3') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/B3/B3';
                        E4Text = '=C4/B4/B4';
                        E5Text = '=C5/B5/B5';
                        E6Text = '=C6/B6/B6';
                        E7Text = '=C7/B7/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3*B3)') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/(B3*B3)';
                        E4Text = '=C4/(B4*B4)';
                        E5Text = '=C5/(B5*B5)';
                        E6Text = '=C6/(B6*B6)';
                        E7Text = '=C7/(B7*B7)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                } else if (thisB.attr('data-cell') === 'F3') {
                    let upperTrimmedValue = trimmedValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/(2*B3)') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        // thisB.val(
                        //     (
                        //         parseFloat($('.cell-input[data-cell="C3"]').val()) /
                        //         2 /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val())
                        //     ).toFixed(3),
                        // );
                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/(2*B3)';
                        F4Text = '=C4/(2*B4)';
                        F5Text = '=C5/(2*B5)';
                        F6Text = '=C6/(2*B6)';
                        F7Text = '=C7/(2*B7)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3*2)') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        // thisB.val(
                        //     (
                        //         parseFloat($('.cell-input[data-cell="C3"]').val()) /
                        //         2 /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val())
                        //     ).toFixed(3),
                        // );

                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/(B3*2)';
                        F4Text = '=C4/(B4*2)';
                        F5Text = '=C5/(B5*2)';
                        F6Text = '=C6/(B6*2)';
                        F7Text = '=C7/(B7*2)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/B3/2') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        // thisB.val(
                        //     (
                        //         parseFloat($('.cell-input[data-cell="C3"]').val()) /
                        //         2 /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val())
                        //     ).toFixed(3),
                        // );

                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/B3/2';
                        F4Text = '=C4/B4/2';
                        F5Text = '=C5/B5/2';
                        F6Text = '=C6/B6/2';
                        F7Text = '=C7/B7/2';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/2/B3') {
                        // 입력된 값이 일치할 때
                        // 해당 cellKey의 수식을 처리
                        // thisB.val(
                        //     (
                        //         parseFloat($('.cell-input[data-cell="C3"]').val()) /
                        //         2 /
                        //         parseFloat($('.cell-input[data-cell="B3"]').val())
                        //     ).toFixed(3),
                        // );

                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/2/B3';
                        F4Text = '=C4/2/B4';
                        F5Text = '=C5/2/B5';
                        F6Text = '=C6/2/B6';
                        F7Text = '=C7/2/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // thisB.val(upperTrimmedValue);
                        thisB.removeClass('color-red');
                        thisB.removeClass('active');
                        thisB.attr('readonly', 'readonly');
                        $('.excel-window-wrap .input-view-text').val(upperTrimmedValue);

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    }
                }
            }
        }
    });

    const inputViewText = $('.excel-cotainer-top .input-view-text');

    cellInput.on('click', function (e) {
        const thisB = $(this);
        switch (thisB.attr('data-cell')) {
            case 'A3':
                $('.excel-window-wrap .select-view-text').val('A3');
                inputViewText.val(thisB.val());
                break;
            case 'B3':
                $('.excel-window-wrap .select-view-text').val('B3');
                inputViewText.val(thisB.val());
                break;
            case 'C3':
                $('.excel-window-wrap .select-view-text').val('C3');
                inputViewText.val(thisB.val());
                break;
            case 'D3':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined)
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D3');
                inputViewText.val(D3Text);
                break;
            case 'E3':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E3');
                inputViewText.val(E3Text);
                break;
            case 'F3':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F3');
                inputViewText.val(F3Text);
                break;
            case 'A4':
                $('.excel-window-wrap .select-view-text').val('A4');
                inputViewText.val(thisB.val());
                break;
            case 'B4':
                $('.excel-window-wrap .select-view-text').val('B4');
                inputViewText.val(thisB.val());
                break;
            case 'C4':
                $('.excel-window-wrap .select-view-text').val('C4');
                inputViewText.val(thisB.val());
                break;
            case 'D4':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D4');
                inputViewText.val(D4Text);
                break;
            case 'E4':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E4');
                inputViewText.val(E4Text);
                break;
            case 'F4':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F4');
                inputViewText.val(F4Text);
                break;
            case 'A5':
                $('.excel-window-wrap .select-view-text').val('A5');
                inputViewText.val(thisB.val());
                break;
            case 'B5':
                $('.excel-window-wrap .select-view-text').val('B5');
                inputViewText.val(thisB.val());
                break;
            case 'C5':
                $('.excel-window-wrap .select-view-text').val('C5');
                inputViewText.val(thisB.val());
                break;
            case 'D5':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D5');
                inputViewText.val(D5Text);
                break;
            case 'E5':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E5');
                inputViewText.val(E5Text);
                break;
            case 'F5':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F5');
                inputViewText.val(F5Text);
                break;
            case 'A6':
                $('.excel-window-wrap .select-view-text').val('A6');
                inputViewText.val(thisB.val());
                break;
            case 'B6':
                $('.excel-window-wrap .select-view-text').val('B6');
                inputViewText.val(thisB.val());
                break;
            case 'C6':
                $('.excel-window-wrap .select-view-text').val('C6');
                inputViewText.val(thisB.val());
                break;
            case 'D6':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D6');
                inputViewText.val(D6Text);
                break;
            case 'E6':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E6');
                inputViewText.val(E6Text);
                break;
            case 'F6':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F6');
                inputViewText.val(F6Text);
                break;
            case 'A7':
                $('.excel-window-wrap .select-view-text').val('A7');
                inputViewText.val(thisB.val());
                break;
            case 'B7':
                $('.excel-window-wrap .select-view-text').val('B7');
                inputViewText.val(thisB.val());
                break;
            case 'C7':
                $('.excel-window-wrap .select-view-text').val('C7');
                inputViewText.val(thisB.val());
                break;
            case 'D7':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D7');
                inputViewText.val(D7Text);
                break;
            case 'E7':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E7');
                inputViewText.val(E7Text);
                break;
            case 'F7':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F7');
                inputViewText.val(F7Text);
                break;
            case 'A8':
                $('.excel-window-wrap .select-view-text').val('A8');
                inputViewText.val(thisB.val());
                break;
            case 'B8':
                $('.excel-window-wrap .select-view-text').val('B8');
                inputViewText.val(thisB.val());
                break;
            case 'C8':
                $('.excel-window-wrap .select-view-text').val('C8');
                inputViewText.val(thisB.val());
                break;
            case 'D8':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D8');
                inputViewText.val(thisB.val());
                break;
            case 'E8':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E8');
                inputViewText.val(thisB.val());
                break;
            case 'F8':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F8');
                inputViewText.val(thisB.val());
                break;
            case 'A9':
                $('.excel-window-wrap .select-view-text').val('A9');
                inputViewText.val(thisB.val());
                break;
            case 'B9':
                $('.excel-window-wrap .select-view-text').val('B9');
                inputViewText.val(thisB.val());
                break;
            case 'C9':
                $('.excel-window-wrap .select-view-text').val('C9');
                inputViewText.val(thisB.val());
                break;
            case 'D9':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('D9');
                inputViewText.val(thisB.val());
                break;
            case 'E9':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('E9');
                inputViewText.val(thisB.val());
                break;
            case 'F9':
                if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !thisB.hasClass('active') &&
                    (thisB.val() === '' || thisB.val() === null || thisB.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert').removeClass('active');
                    $('.modal-layer-alert4').addClass('active');
                }
                $('.excel-window-wrap .select-view-text').val('F9');
                inputViewText.val(thisB.val());
                break;
            default:
                inputViewText.val(thisB.val());
                break;
        }
    });

    inputViewText.on('input', function (e) {
        const thisB = $(this);
        const targetCell = $('.select-view-text').val(); // .select-view-text의 data-cell 값
        const targetInput = $(`.cell-input[data-cell="${targetCell}"]`); // 해당 data-cell을 가진 .cell-input
        const nextPlaceholderLayer = targetInput.next('.placeholder-layer'); // 현재 input의 바로 다음 placeholder-layer
        if (targetInput.hasClass('active')) {
            nextPlaceholderLayer.removeClass('active');
            targetInput.val(thisB.val());
        }
    });

    inputViewText.on('click', function (e) {
        const thisB = $(this);
        const targetCell = $('.select-view-text').val(); // .select-view-text의 data-cell 값
        const targetInput = $(`.cell-input[data-cell="${targetCell}"]`); // 해당 data-cell을 가진 .cell-input
        const nextPlaceholderLayer = targetInput.next('.placeholder-layer'); // 현재 input의 바로 다음 placeholder-layer
        if (!targetInput.hasClass('active')) {
            $('.modal-layer-alert').removeClass('active');
            if (targetInput.attr('data-cell') === 'D3') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined)
                ) {
                    $('.modal-layer-alert3').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'E3') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'F3') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'D4') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'E4') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'F4') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'D5') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'E5') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'F5') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'D6') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'E6') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'F6') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'D7') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'E7') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            } else if (targetInput.attr('data-cell') === 'F7') {
                if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert3').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    $('.cell-input[data-cell="D3"]').hasClass('active') &&
                    $('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                } else if (
                    !targetInput.hasClass('active') &&
                    (targetInput.val() === '' || targetInput.val() === null || targetInput.val() === undefined) &&
                    !$('.cell-input[data-cell="D3"]').hasClass('active') &&
                    !$('.cell-input[data-cell="D3"]').hasClass('color-red')
                ) {
                    $('.modal-layer-alert4').addClass('active');
                }
            }
        }
    });

    inputViewText.on('focus', function (e) {
        const targetCell = $('.select-view-text').val(); // .select-view-text의 data-cell 값
        const targetInput = $(`.cell-input[data-cell="${targetCell}"]`); // 해당 data-cell을 가진 .cell-input
        const nextPlaceholderLayer = targetInput.next('.placeholder-layer'); // 현재 input의 바로 다음 placeholder-layer
        nextPlaceholderLayer.removeClass('active');
    });

    // inputViewText에 입력된 값이 변경될 때
    inputViewText.on('keydown blur', function (e) {
        const thisB = $(this);

        // 엔터 키를 누르거나 포커스를 잃었을 때만 실행
        if (e.type === 'blur' || e.key === 'Enter') {
            const inputValue = thisB.val().trim(); // inputViewText의 현재 입력값
            const targetCell = $('.select-view-text').val(); // .select-view-text의 data-cell 값
            const targetInput = $(`.cell-input[data-cell="${targetCell}"]`); // 해당 data-cell을 가진 .cell-input
            const nextPlaceholderLayer = targetInput.next('.placeholder-layer');

            if (targetInput.hasClass('active')) {
                if (targetInput.attr('data-cell') === 'B3') {
                    if (inputValue === '0.047') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'B4') {
                    if (inputValue === '0.051') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'B5') {
                    if (inputValue === '0.046') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'B6') {
                    if (inputValue === '0.045') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'B7') {
                    if (inputValue === '0.053') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'C3') {
                    if (inputValue === '0.467') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'C4') {
                    if (inputValue === '0.551') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'C5') {
                    if (inputValue === '0.448') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'C6') {
                    if (inputValue === '0.428') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        // cntCell1이 0이 되었을 때 D3에 active 클래스 추가
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'C7') {
                    if (inputValue === '0.595') {
                        targetInput.val(inputValue);
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        --cntCell1;

                        console.log(cntCell1);
                        if (cntCell1 <= 0) {
                            $('.cell-input[data-cell="D3"]').addClass('active');
                            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
                            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
                            cntCell1 = 10;
                            $('.button-nongndo-reset').addClass('active');
                        }
                    } else if (inputValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert1').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'D3') {
                    let upperTrimmedValue = inputValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/B3') {
                        D3P4 = '10.80';
                        D3P5 = '9.739';
                        D3P6 = '9.511';
                        D3P7 = '11.23';

                        D3Text = '=C3/B3';
                        D4Text = '=C4/B4';
                        D5Text = '=C5/B5';
                        D6Text = '=C6/B6';
                        D7Text = '=C7/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-d').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-d .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-d .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'E3') {
                    let upperTrimmedValue = inputValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/B3^2') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/B3^2';
                        E4Text = '=C4/B4^2';
                        E5Text = '=C5/B5^2';
                        E6Text = '=C6/B6^2';
                        E7Text = '=C7/B7^2';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3^2)') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/(B3^2)';
                        E4Text = '=C4/(B4^2)';
                        E5Text = '=C5/(B5^2)';
                        E6Text = '=C6/(B6^2)';
                        E7Text = '=C7/(B7^2)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/B3/B3') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/B3/B3';
                        E4Text = '=C4/B4/B4';
                        E5Text = '=C5/B5/B5';
                        E6Text = '=C6/B6/B6';
                        E7Text = '=C7/B7/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3*B3)') {
                        E3P4 = '211.8';
                        E3P5 = '211.7';
                        E3P6 = '211.4';
                        E3P7 = '211.8';

                        E3Text = '=C3/(B3*B3)';
                        E4Text = '=C4/(B4*B4)';
                        E5Text = '=C5/(B5*B5)';
                        E6Text = '=C6/(B6*B6)';
                        E7Text = '=C7/(B7*B7)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val()) /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(1),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-e').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-e .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                    }
                } else if (targetInput.attr('data-cell') === 'F3') {
                    let upperTrimmedValue = inputValue.toUpperCase(); // 입력 값을 대문자로 변환
                    if (upperTrimmedValue === '=C3/(2*B3)') {
                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/(2*B3)';
                        F4Text = '=C4/(2*B4)';
                        F5Text = '=C5/(2*B5)';
                        F6Text = '=C6/(2*B6)';
                        F7Text = '=C7/(2*B7)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/(B3*2)') {
                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/(B3*2)';
                        F4Text = '=C4/(B4*2)';
                        F5Text = '=C5/(B5*2)';
                        F6Text = '=C6/(B6*2)';
                        F7Text = '=C7/(B7*2)';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/B3/2') {
                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/B3/2';
                        F4Text = '=C4/B4/2';
                        F5Text = '=C5/B5/2';
                        F6Text = '=C6/B6/2';
                        F7Text = '=C7/B7/2';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '=C3/2/B3') {
                        F3P4 = '5.402';
                        F3P5 = '4.870';
                        F3P6 = '4.756';
                        F3P7 = '5.613';

                        F3Text = '=C3/2/B3';
                        F4Text = '=C4/2/B4';
                        F5Text = '=C5/2/B5';
                        F6Text = '=C6/2/B6';
                        F7Text = '=C7/2/B7';

                        // 각 값이 설정된 후에 getDragElements 호출
                        const dragElements = getDragElements(
                            D3P4,
                            D3P5,
                            D3P6,
                            D3P7,
                            E3P4,
                            E3P5,
                            E3P6,
                            E3P7,
                            F3P4,
                            F3P5,
                            F3P6,
                            F3P7,
                        );

                        // 이후 dragElements에 대해 처리
                        initializeDragEvents(dragElements);

                        thisB.val(upperTrimmedValue);
                        targetInput.val(
                            (
                                parseFloat($('.cell-input[data-cell="C3"]').val()) /
                                2 /
                                parseFloat($('.cell-input[data-cell="B3"]').val())
                            ).toFixed(3),
                        );
                        // targetInput.val(upperTrimmedValue);
                        targetInput.removeClass('color-red');
                        targetInput.removeClass('active');
                        nextPlaceholderLayer.removeClass('active');

                        $('.drag-top-bottom-wrap-f').addClass('active');

                        var timeouts = [];

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-plus').addClass('active');
                            }, 1000),
                        );

                        timeouts.push(
                            setTimeout(function () {
                                $('.drag-top-bottom-wrap-f .icon-drag-arrow').addClass('active');
                            }, 2000),
                        );

                        setTimeout(function () {
                            timeouts.forEach(timeoutId => clearTimeout(timeoutId));
                            timeouts = [];
                        }, 3000);
                    } else if (upperTrimmedValue === '') {
                        // 공백일 경우
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                    } else {
                        thisB.val(''); // 값을 비움
                        targetInput.val('');
                        nextPlaceholderLayer.addClass('active'); // placeholder-layer에 active 추가
                        $('.modal-layer-alert2').addClass('active'); // 경고 레이어 활성화
                    }
                }
            }
        }
    });

    function getDragElements(D3P4, D3P5, D3P6, D3P7, E3P4, E3P5, E3P6, E3P7, F3P4, F3P5, F3P6, F3P7) {
        return [
            {
                selector: '.drag-top-bottom-wrap-d',
                maxSteps: 4,
                stepHeight: 60,
                values: [D3P4, D3P5, D3P6, D3P7],
                targetCells: ['D4', 'D5', 'D6', 'D7'],
                nextActiveCell: '.cell-input[data-cell="E3"]',
            },
            {
                selector: '.drag-top-bottom-wrap-e',
                maxSteps: 4,
                stepHeight: 60,
                values: [E3P4, E3P5, E3P6, E3P7],
                targetCells: ['E4', 'E5', 'E6', 'E7'],
                nextActiveCell: '.cell-input[data-cell="F3"]',
            },
            {
                selector: '.drag-top-bottom-wrap-f',
                maxSteps: 4,
                stepHeight: 60,
                values: [F3P4, F3P5, F3P6, F3P7],
                targetCells: ['F4', 'F5', 'F6', 'F7'],
                nextActiveCell: '',
            },
        ];
    }

    // D3P4, D3P5 등의 값이 설정된 후 호출

    /*
    dragElements.forEach(dragElement => {
        let dragCount = 0;
        let isDragging = false;
        let startY = 0;
        const $element = $(dragElement.selector);
        const $innerElement = $element.find('.drag-top-bottom-inner');
        const initialHeight = $element.height();

        function increaseHeight() {
            if (!isDragging) {
                isDragging = true;
                dragCount++;

                // 첫 단계에서 active 클래스 추가
                if (dragCount === 1) {
                    $innerElement.addClass('active');
                }

                // 높이 설정 (현재 높이에 stepHeight씩 증가)
                let newHeight = initialHeight + dragElement.stepHeight * dragCount;
                $element.css('height', newHeight + 'px');

                // 각 단계에서 해당 값 설정
                if (dragCount <= dragElement.maxSteps) {
                    const targetCell = dragElement.targetCells[dragCount - 1];
                    const value = dragElement.values[dragCount - 1];
                    $(`.cell-input[data-cell="${targetCell}"]`).val(value);
                    $(`.cell-input[data-cell="${targetCell}"]`).removeClass('color-red');
                }

                // 드래그 단계가 maxSteps에 도달했을 때 1초 후에 active 클래스 제거
                if (dragCount >= dragElement.maxSteps) {
                    setTimeout(function () {
                        $element.removeClass('active');
                        $element.removeAttr('style');
                        $innerElement.removeClass('active');
                        $element.find('.icon-drag-plus').removeClass('active');
                        $element.find('.icon-drag-arrow').removeClass('active');
                        dragCount = 0;

                        // 다음 활성화할 셀에 active 클래스 추가
                        if (dragElement.nextActiveCell) {
                            $(dragElement.nextActiveCell).addClass('active');
                        }
                    }, 1000);

                    // 이벤트 해제
                    $(document).off('mousemove.dragEvent mouseup.dragEvent touchmove.dragEvent touchend.dragEvent');
                }

                // 드래그 상태 초기화
                isDragging = false;
            }
        }

        // 마우스 드래그 이벤트 처리
        $element.on('mousedown', function (e) {
            e.preventDefault(); // 기본 이벤트 방지
            startY = e.pageY;

            $(document).on('mousemove.dragEvent', function (e) {
                let currentY = e.pageY;
                if (currentY - startY >= dragElement.stepHeight) {
                    increaseHeight();
                    startY = currentY; // 시작 위치 업데이트
                }
            });

            // 마우스 업 이벤트 처리 (드래그 종료 시 이벤트 해제)
            $(document).on('mouseup.dragEvent', function (e) {
                $(document).off('mousemove.dragEvent mouseup.dragEvent');
            });
        });

        // 터치 드래그 이벤트 처리 (모바일용)
        $element.on('touchstart', function (e) {
            e.preventDefault(); // 기본 이벤트 방지
            startY = e.touches[0].pageY;

            $(document).on('touchmove.dragEvent', function (e) {
                let currentY = e.touches[0].pageY;
                if (currentY - startY >= dragElement.stepHeight) {
                    increaseHeight();
                    startY = currentY; // 시작 위치 업데이트
                }
            });

            // 터치가 끝났을 때 이벤트 해제
            $(document).on('touchend.dragEvent', function (e) {
                $(document).off('touchmove.dragEvent touchend.dragEvent');
            });
        });
    });
    */

    function initializeDragEvents(dragElements) {
        dragElements.forEach(dragElement => {
            let dragCount = 0;
            let isDragging = false;
            let startY = 0;
            const $element = $(dragElement.selector);
            const $innerElement = $element.find('.drag-top-bottom-inner');
            const initialHeight = $element.height();

            function increaseHeight() {
                if (!isDragging) {
                    isDragging = true;
                    dragCount++;

                    // 첫 단계에서 active 클래스 추가
                    if (dragCount === 1) {
                        $innerElement.addClass('active');
                    }

                    // 높이 설정 (현재 높이에 stepHeight씩 증가)
                    let newHeight = initialHeight + dragElement.stepHeight * dragCount;
                    $element.css('height', newHeight + 'px');

                    // 각 단계에서 해당 값 설정
                    if (dragCount <= dragElement.maxSteps) {
                        const targetCell = dragElement.targetCells[dragCount - 1];
                        const value = dragElement.values[dragCount - 1];
                        $(`.cell-input[data-cell="${targetCell}"]`).val(value);
                        $(`.cell-input[data-cell="${targetCell}"]`).removeClass('color-red');
                    }

                    // 드래그 단계가 maxSteps에 도달했을 때 1초 후에 active 클래스 제거
                    if (dragCount >= dragElement.maxSteps) {
                        setTimeout(function () {
                            $element.removeClass('active');
                            $element.removeAttr('style');
                            $innerElement.removeClass('active');
                            $element.find('.icon-drag-plus').removeClass('active');
                            $element.find('.icon-drag-arrow').removeClass('active');
                            dragCount = 0;

                            // 다음 활성화할 셀에 active 클래스 추가
                            if (dragElement.nextActiveCell) {
                                $(dragElement.nextActiveCell).addClass('active');
                                $(dragElement.nextActiveCell).removeAttr('readonly');
                                $(dragElement.nextActiveCell).parent().find('.placeholder-layer').addClass('active');
                            }
                        }, 1000);

                        // 이벤트 해제
                        $(document).off('mousemove.dragEvent mouseup.dragEvent touchmove.dragEvent touchend.dragEvent');
                    }

                    // 드래그 상태 초기화
                    isDragging = false;
                }
            }

            // 마우스 드래그 이벤트 처리
            $element.on('mousedown', function (e) {
                e.preventDefault(); // 기본 이벤트 방지
                startY = e.pageY;

                $(document).on('mousemove.dragEvent', function (e) {
                    let currentY = e.pageY;
                    if (currentY - startY >= dragElement.stepHeight) {
                        increaseHeight();
                        startY = currentY; // 시작 위치 업데이트
                    }
                });

                // 마우스 업 이벤트 처리 (드래그 종료 시 이벤트 해제)
                $(document).on('mouseup.dragEvent', function (e) {
                    $(document).off('mousemove.dragEvent mouseup.dragEvent');
                });
            });

            // 터치 드래그 이벤트 처리 (모바일용)
            $element.on('touchstart', function (e) {
                e.preventDefault(); // 기본 이벤트 방지
                startY = e.touches[0].pageY;

                $(document).on('touchmove.dragEvent', function (e) {
                    let currentY = e.touches[0].pageY;
                    if (currentY - startY >= dragElement.stepHeight) {
                        increaseHeight();
                        startY = currentY; // 시작 위치 업데이트
                    }
                });

                // 터치가 끝났을 때 이벤트 해제
                $(document).on('touchend.dragEvent', function (e) {
                    $(document).off('touchmove.dragEvent touchend.dragEvent');
                });
            });
        });
    }

    const btnReset = $('.button-reset');
    const btnNongdoReset = $('.button-nongndo-reset');

    btnReset.on('click', function () {
        $('.modal-layer-alert').removeClass('active');

        $('.cell-input').val('');
        $('.select-view-text').val('');
        $('.input-view-wrap .input-view-text').val('');

        $('.cell-input[data-cell="A3"]').val('1');
        $('.cell-input[data-cell="A4"]').val('2');
        $('.cell-input[data-cell="A5"]').val('3');
        $('.cell-input[data-cell="A6"]').val('4');
        $('.cell-input[data-cell="A7"]').val('5');

        $('.cell-input[data-cell="B3"]').addClass('active');
        $('.cell-input[data-cell="B4"]').addClass('active');
        $('.cell-input[data-cell="B5"]').addClass('active');
        $('.cell-input[data-cell="B6"]').addClass('active');
        $('.cell-input[data-cell="B7"]').addClass('active');

        $('.cell-input[data-cell="C3"]').addClass('active');
        $('.cell-input[data-cell="C4"]').addClass('active');
        $('.cell-input[data-cell="C5"]').addClass('active');
        $('.cell-input[data-cell="C6"]').addClass('active');
        $('.cell-input[data-cell="C7"]').addClass('active');

        $('.cell-input[data-cell="B3"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="B4"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="B5"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="B6"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="B7"]').next('.placeholder-layer').addClass('active');

        $('.cell-input[data-cell="C3"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="C4"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="C5"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="C6"]').next('.placeholder-layer').addClass('active');
        $('.cell-input[data-cell="C7"]').next('.placeholder-layer').addClass('active');

        $('.cell-input[data-cell="B3"]').removeAttr('readonly');
        $('.cell-input[data-cell="B4"]').removeAttr('readonly');
        $('.cell-input[data-cell="B5"]').removeAttr('readonly');
        $('.cell-input[data-cell="B6"]').removeAttr('readonly');
        $('.cell-input[data-cell="B7"]').removeAttr('readonly');

        $('.cell-input[data-cell="C3"]').removeAttr('readonly');
        $('.cell-input[data-cell="C4"]').removeAttr('readonly');
        $('.cell-input[data-cell="C5"]').removeAttr('readonly');
        $('.cell-input[data-cell="C6"]').removeAttr('readonly');
        $('.cell-input[data-cell="C7"]').removeAttr('readonly');

        $('.drag-top-bottom-wrap').removeClass('active');
        $('.drag-top-bottom-wrap .drag-top-bottom-inner').removeClass('active');
        $('.icon-drag-plus').removeClass('active');
        $('.icon-drag-arrow').removeClass('active');

        $('.cell-input[data-cell="D3"]').attr('readonly', 'readonly');
        $('.cell-input[data-cell="E3"]').attr('readonly', 'readonly');
        $('.cell-input[data-cell="F3"]').attr('readonly', 'readonly');

        $('.cell-input[data-cell="D3"]').removeClass('active');
        $('.cell-input[data-cell="E3"]').removeClass('active');
        $('.cell-input[data-cell="F3"]').removeClass('active');

        $('.cell-input[data-cell="D3"]').next('.placeholder-layer').removeClass('active');
        $('.cell-input[data-cell="E3"]').next('.placeholder-layer').removeClass('active');
        $('.cell-input[data-cell="F3"]').next('.placeholder-layer').removeClass('active');

        $('.cell-input[data-cell="D3"]').addClass('color-red');
        $('.cell-input[data-cell="E3"]').addClass('color-red');
        $('.cell-input[data-cell="F3"]').addClass('color-red');

        (D3Text = ''), (D4Text = ''), (D5Text = ''), (D6Text = ''), (D7Text = '');

        (E3Text = ''), (E4Text = ''), (E5Text = ''), (E6Text = ''), (E7Text = '');

        (F3Text = ''), (F4Text = ''), (F5Text = ''), (F6Text = ''), (F7Text = '');

        cntCell1 = 10;

        btnNongdoReset.removeClass('active');

        console.log(cntCell1);
    });

    btnNongdoReset.on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('active')) {
            $('.modal-layer-alert').removeClass('active');

            $('.cell-input[data-cell="D3"]').val('');
            $('.cell-input[data-cell="D4"]').val('');
            $('.cell-input[data-cell="D5"]').val('');
            $('.cell-input[data-cell="D6"]').val('');
            $('.cell-input[data-cell="D7"]').val('');

            $('.cell-input[data-cell="E3"]').val('');
            $('.cell-input[data-cell="E4"]').val('');
            $('.cell-input[data-cell="E5"]').val('');
            $('.cell-input[data-cell="E6"]').val('');
            $('.cell-input[data-cell="E7"]').val('');

            $('.cell-input[data-cell="F3"]').val('');
            $('.cell-input[data-cell="F4"]').val('');
            $('.cell-input[data-cell="F5"]').val('');
            $('.cell-input[data-cell="F6"]').val('');
            $('.cell-input[data-cell="F7"]').val('');

            $('.select-view-text').val('');
            $('.input-view-wrap .input-view-text').val('');

            $('.drag-top-bottom-wrap').removeClass('active');
            $('.drag-top-bottom-wrap .drag-top-bottom-inner').removeClass('active');
            $('.icon-drag-plus').removeClass('active');
            $('.icon-drag-arrow').removeClass('active');

            $('.cell-input[data-cell="D3"]').addClass('active');
            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
            cntCell1 = 10;

            $('.cell-input[data-cell="E3"]').attr('readonly', 'readonly');
            $('.cell-input[data-cell="F3"]').attr('readonly', 'readonly');

            $('.cell-input[data-cell="E3"]').removeClass('active');
            $('.cell-input[data-cell="F3"]').removeClass('active');

            $('.cell-input[data-cell="E3"]').next('.placeholder-layer').removeClass('active');
            $('.cell-input[data-cell="F3"]').next('.placeholder-layer').removeClass('active');

            $('.cell-input[data-cell="D3"]').addClass('color-red');
            $('.cell-input[data-cell="D4"]').addClass('color-red');
            $('.cell-input[data-cell="D5"]').addClass('color-red');
            $('.cell-input[data-cell="D6"]').addClass('color-red');
            $('.cell-input[data-cell="D7"]').addClass('color-red');

            $('.cell-input[data-cell="E3"]').addClass('color-red');
            $('.cell-input[data-cell="E4"]').addClass('color-red');
            $('.cell-input[data-cell="E5"]').addClass('color-red');
            $('.cell-input[data-cell="E6"]').addClass('color-red');
            $('.cell-input[data-cell="E7"]').addClass('color-red');

            $('.cell-input[data-cell="F3"]').addClass('color-red');
            $('.cell-input[data-cell="F4"]').addClass('color-red');
            $('.cell-input[data-cell="F5"]').addClass('color-red');
            $('.cell-input[data-cell="F6"]').addClass('color-red');
            $('.cell-input[data-cell="F7"]').addClass('color-red');

            (D3Text = ''), (D4Text = ''), (D5Text = ''), (D6Text = ''), (D7Text = '');
            (E3Text = ''), (E4Text = ''), (E5Text = ''), (E6Text = ''), (E7Text = '');
            (F3Text = ''), (F4Text = ''), (F5Text = ''), (F6Text = ''), (F7Text = '');
        }
    });

    $(document).on('click', function () {
        if (cntCell1 <= 0) {
            $('.cell-input[data-cell="D3"]').addClass('active');
            $('.cell-input[data-cell="D3"]').removeAttr('readonly');
            $('.cell-input[data-cell="D3"]').parent().find('.placeholder-layer').addClass('active');
            setTimeout(function () {
                cntCell1 = 10;
            }, 100);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
