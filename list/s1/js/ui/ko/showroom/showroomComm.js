// 온라인 쇼룸 : 공통 스크립트
function showroomComm() {
    var showroomTabWrap = $('.showroom-top-tab-wrap');
    var showroomTabBtn = showroomTabWrap.find('.button-tab');
    var showroomTabBtnBg = $('.button-bg');

    function updateButtonBgPosition(element) {
        var prevWidths = 0;
        element
            .closest('li')
            .prevAll()
            .each(function () {
                prevWidths += $(this).outerWidth();
            });
        showroomTabBtnBg.css({
            width: element.closest('li').outerWidth(),
            left: prevWidths,
        });
    }

    // 초기 위치 설정
    updateButtonBgPosition(showroomTabWrap.find('.button-tab').closest('li.active').find('.button-tab'));

    showroomTabBtn.on('click', function () {
        showroomTabBtn.closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
        updateButtonBgPosition($(this));
    });

    // 윈도우 닫기 실행시 로컬 스토리지 삭제
    window.addEventListener('beforeunload', function () {
        localStorage.removeItem('previousPage');
    });
}

// 버튼 정보 보기 : 버튼 눌렀을 때 기기 정보 보기
function infoViewPopup() {
    const infoViewPopupWrap = $('.info-view-popup-wrap');
    const infoPopupWrap = infoViewPopupWrap.find('.info-popup-wrap');
    const infoButtonWrap = infoViewPopupWrap.find('.info-button-wrap');
    const buttonInfoView = $('.button-info-view');
    const popupViewItem = infoPopupWrap.find('.popup-view-item');
    const iconViewClose = popupViewItem.find('.icon-view-close');
    const totCnt = 100;

    buttonInfoView.on('click', function () {
        const thisB = $(this);
        const infoButtonItem = thisB.closest('.info-button-item');
        const index = infoButtonItem.index();

        if (infoButtonItem.hasClass('active')) {
            infoButtonItem.removeClass('active');
            infoPopupWrap.removeClass('active');
            popupViewItem.eq(index).removeClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-person-cs1-sr3-st2')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.item-skew-device-sr3-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-targeting-sr3-st2')
                    .removeClass('changeEp' + i);
            }
        } else {
            infoButtonWrap.find('.info-button-item').removeClass('active');
            infoPopupWrap.removeClass('active');
            popupViewItem.removeClass('active');
            infoButtonItem.addClass('active');
            infoPopupWrap.addClass('active');
            popupViewItem.eq(index).addClass('active');

            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-person-cs1-sr3-st2')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.item-skew-device-sr3-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-targeting-sr3-st2')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-person-cs1-sr3-st2')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.item-skew-device-sr3-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-targeting-sr3-st2')
                .addClass('changeEp' + (index + 1));
        }
    });

    iconViewClose.on('click', function () {
        const thisB = $(this);
        const popupViewItem = thisB.closest('.popup-view-item');
        const index = popupViewItem.index();

        if (popupViewItem.hasClass('active')) {
            popupViewItem.removeClass('active');
            infoPopupWrap.removeClass('active');
            popupViewItem.eq(index).removeClass('active');
            infoButtonWrap.find('.info-button-item').removeClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-person-cs1-sr3-st2')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.item-skew-device-sr3-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-targeting-sr3-st2')
                    .removeClass('changeEp' + i);
            }
        } else {
            infoButtonWrap.find('.info-button-item').removeClass('active');
            infoPopupWrap.removeClass('active');
            popupViewItem.removeClass('active');
            popupViewItem.addClass('active');
            infoPopupWrap.addClass('active');
            popupViewItem.eq(index).addClass('active');
            for (let i = 1; i <= totCnt; i++) {
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-alert-msg-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-person-cs1-sr3-st2')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.item-skew-device-sr3-wrap')
                    .removeClass('changeEp' + i);
                thisB
                    .closest('.info-view-popup-wrap')
                    .siblings('.sr-targeting-sr3-st2')
                    .removeClass('changeEp' + i);
            }
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-alert-msg-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-person-cs1-sr3-st2')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.item-skew-device-sr3-wrap')
                .addClass('changeEp' + (index + 1));
            thisB
                .closest('.info-view-popup-wrap')
                .siblings('.sr-targeting-sr3-st2')
                .removeClass('changeEp' + (index + 1));
        }
    });
}

infoViewPopup();

// 플로팅 툴팁 메시지
function floatingTooltip() {
    const tooltip = document.querySelectorAll('[data-tooltip]');
    tooltip.forEach(function (el) {
        const btn = el.querySelector('[data-tooltip-title]');
        btn.addEventListener('click', function (trg) {
            trg.target.closest('[data-tooltip]').classList.toggle('show');
        });
    });
}
floatingTooltip();

// 팝업 (노출 시간 설정)
function modalOpenSetTime(name, time) {
    // 팝업 노출
    $(`#${name}`).fadeIn(300);

    // 시간 설정
    if (time !== null) {
        modalHide = setTimeout(function () {
            $(`#${name}`).fadeOut('fast');
        }, time);
    }
}
