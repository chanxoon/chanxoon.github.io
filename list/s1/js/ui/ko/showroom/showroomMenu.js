// 타이머 ID 저장 배열
let timeoutIDs = [];

// 데이터 요소
function setPageContent(storeClass, screenClass, data) {
    // 데이터 유효성 검사
    if (!data[storeClass] || !data[storeClass][screenClass]) {
        console.error(`Data for ${storeClass} and ${screenClass} not found.`);
        return;
    }

    //---------------- 데이터 로드 시작 ----------------------//
    const storeData = data[storeClass][screenClass];
    const steps = storeData.steps;
    const serviceStepWrap = $('.service-step-wrap');

    // 기존 내용 초기화
    serviceStepWrap.empty();
    const serviceStepInner = $('<div>', { class: 'service-step-inner' });

    // 상단 타이틀 설정
    const titleStepTop = $('<div>', { class: 'title-step-top' });
    const titleTopText = $('<h4>', { class: 'title-top-text' });
    const titleSpan = $('<span>', { class: 'text', text: storeData.title });
    titleTopText.append(titleSpan);
    titleStepTop.append(titleTopText);
    serviceStepInner.append(titleStepTop);

    // 스텝 리스트 설정
    const stepListWrap = $('<div>', { class: 'step-list-wrap' });
    const stepPlayList = $('<ul>', { class: 'step-play-list' });

    // 각 스텝을 반복하여 생성
    $.each(steps, function (index, step) {
        // subSteps의 subStepTimer 합산
        let stepTimer = step.stepTimer || '5s'; // 기본값 설정
        if (step.subSteps && step.subSteps.length > 0) {
            let subStepTotalTime = 0;
            step.subSteps.forEach(subStep => {
                subStepTotalTime += parseFloat(subStep.subStepTimer);
            });
            stepTimer = `${subStepTotalTime}s`;
        }

        const stepPlayItem = $('<li>', { class: 'step-play-item' });
        const linkListStep = $('<a>', {
            href: 'javascript:void(0)',
            class: 'link-list-step',
            title: '페이지 이동',
            'aria-label': '페이지 이동',
        });

        const titleNumber = $('<h6>', { class: 'title-number' });
        const titleNumberText = $('<span>', { class: 'text', text: step.titleNumber });
        titleNumber.append(titleNumberText);

        const titleCon = $('<em>', { class: 'title-con' });
        const titleConText = $('<span>', { class: 'text', html: step.titleCon });
        titleCon.append(titleConText);

        linkListStep.append(titleNumber).append(titleCon);
        stepPlayItem.append(linkListStep);

        const automaticLayer = $('<div>', { class: 'automatic-layer' });
        const playButton = $('<button>', {
            class: 'service-circle-play',
            title: '재생/멈춤',
            'aria-label': '재생/멈춤',
        });
        const playButtonInner = $('<span>', { class: 'service-circle-play-inner' }).html(`
            <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="gray" stroke-width="5" />
                <path class="blue-circle" style="animation-duration: ${stepTimer};" d="M50,5 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90" fill="none" stroke="#1d6ceb" stroke-width="5" />
            </svg>
            <i class="icon-play"><span class="blind">실행/멈춤 버튼</span></i>
        `);
        playButton.append(playButtonInner);
        automaticLayer.append(playButton);
        const checkIcon = $('<i>', { class: 'check' }).append($('<span>', { class: 'blind', text: '재생완료' }));
        automaticLayer.append(checkIcon);
        stepPlayItem.append(automaticLayer);

        if (step.subSteps && step.subSteps.length > 0) {
            const subList = $('<ol>', { class: 'step-play-item-sub-list' });
            $.each(step.subSteps, function (_, subStep) {
                const subItem = $('<li>', { class: 'step-play-item-sub-item' });
                const subItemLink = $('<a>', {
                    href: 'javascript:void(0)',
                    class: 'link-list-step-sub-item',
                    title: '페이지 이동',
                    'aria-label': '페이지 이동',
                });
                const subNumber = $('<span>', { class: 'number', text: subStep.number });
                const subText = $('<span>', { class: 'text', text: subStep.text });
                subItemLink.append(subNumber).append(subText);
                subItem.append(subItemLink);
                subList.append(subItem);
            });
            stepPlayItem.append(subList);
        }
        stepPlayList.append(stepPlayItem);
    });

    stepListWrap.append(stepPlayList);

    const stepButtonWrap = $('<div>', { class: 'step-button-wrap' });
    const submitButton = $('<button>', {
        class: 'button-submit',
        title: '다른 체험하기',
        'aria-label': '다른 체험하기',
    });
    const buttonText = $('<span>', { class: 'text', text: '다른 체험이 궁금해요' });
    submitButton.append(buttonText);
    stepButtonWrap.append(submitButton);
    stepListWrap.append(stepButtonWrap);

    serviceStepInner.append(stepListWrap);
    serviceStepWrap.append(serviceStepInner);
    //---------------- 데이터 로드 끝 ----------------------//

    if (!showroomCompletes.includes(screenClass)) showroomCompletes.push(screenClass);

    // STEP의 링크 (step1 ~ step3)
    const linkListStep = $('.link-list-step');

    // linkListStep 클릭 이벤트 핸들러
    linkListStep.on('click', function () {
        // 기존에 설정된 모든 타임아웃을 초기화하여 겹치는 타이밍 문제를 방지
        timeoutIDs.forEach(clearTimeout);
        timeoutIDs = [];

        // 클릭된 현재 요소와 그 자식인 스텝 아이템을 가져옴
        const thisB = $(this);
        const thisSpItem = thisB.closest('.step-play-item');
        const thisSpItemIndex = thisSpItem.index(); // 현재 스텝 아이템의 인덱스

        // 현재 스텝 아이템 내의 서브 스텝 아이템을 가져옴
        const thisSpSubItem = thisSpItem.find('.step-play-item-sub-item');
        const thisSpSubItemLength = thisSpSubItem.length;

        // 현재 스텝의 타이머와 서브 스텝 타이머들을 밀리초로 변환
        const stepTimer = steps[thisSpItemIndex].stepTimer;
        const stepTimerMs = parseFloat(stepTimer) * 1000;
        const subStepTimersMs = steps[thisSpItemIndex].subSteps.map(subStep => parseFloat(subStep.subStepTimer) * 1000);

        // '블루스캔'클래스에 대한 특별 처리
        if (storeClass == 'sr8-bluescan') {
            showroomControll.bluescan.play(thisSpItem, screenClass.replace('screen', ''), thisSpItem.index() + 1);
        } else {
            // 다른 스텝 실행시 하위스텝 첫번째 활성화 나머지 비활성화
            if (thisSpItem.siblings('.step-play-item').hasClass('active')) {
                const listSubItems = $('ol li.step-play-item-sub-item');
                listSubItems.eq(0).addClass('active');
                listSubItems.slice(1).removeClass('active'); // 첫 번째 요소 이후 모든 요소에 대해 removeClass
            }

            // 모든 이전 형제 요소들의 상태를 업데이트하여 완료 상태로 변경
            thisSpItem.prevAll('.step-play-item').removeClass('active play pause').addClass('complete');

            // 활성 상태 설정 및 다음 단계 관리
            if (thisSpItem.hasClass('play')) {
                // 이미 재생 중인 경우 일시정지 상태로 변경
                thisSpItem.removeClass('play').addClass('pause');
            } else {
                if (thisSpSubItemLength > 0) {
                    thisSpItem
                        .find('.service-circle-play-inner')
                        .find('.blue-circle')
                        .attr(
                            'style',
                            'animation-duration: ' + parseFloat(subStepTimersMs[thisSpSubItem.index()] / 1000) + 's',
                        );
                    // 재생 상태가 아닌 경우 활성 상태로 전환
                    thisSpItem.removeClass('active complete pause').addClass('active play');
                    // 서브 요소들 초기화
                    showroomControll.showroom.subFind();
                    // 서브 스텝 핸들러 실행
                    let selectedSubItem = thisSpSubItem[0];
                    thisSpSubItem.each((index, item) => {
                        if ($(item).hasClass('active')) {
                            selectedSubItem = item;
                            return false;
                        }
                    });
                    showroomControll.showroom.subStepHandler(thisSpItem, $(selectedSubItem), storeData, screenClass);
                } else {
                    // 재생 상태가 아닌 경우 활성 상태로 전환
                    thisSpItem.removeClass('active complete pause');
                    setTimeout(() => {
                        thisSpItem.addClass('active play');
                    }, 10); // 짧은 지연 후 활성화
                    // 다음 스텝으로 자동 전환을 위한 타임아웃 설정
                    timeoutIDs.push(
                        setTimeout(() => {
                            showroomControll.showroom.playNextStep(thisSpItem, storeData, screenClass);
                        }, stepTimerMs),
                    );
                    // 시나리오 실행
                    showroomControll.showroom.action(thisSpItem);
                }
            }
            // 모든 이후 형제 요소들의 상태를 업데이트하여 비활성화 상태로 변경
            thisSpItem.nextAll('.step-play-item').removeClass('active play pause complete');

            // 서브 요소들 초기화
            showroomControll.showroom.subFind();
        }

        return false;
    });

    // STEP-SUB의 링크 step(First)-(First) ~ step(Last)-(Last)
    const linkListSubStep = $('.link-list-step-sub-item');

    // 서브스텝 클릭 이벤트 핸들러
    linkListSubStep.on('click', function () {
        // setTimeout 초기화
        timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID));
        timeoutIDs = [];

        const thisB = $(this);
        const thisSpItem = thisB.closest('.step-play-item');
        const thisSpSubItem = thisB.closest('.step-play-item-sub-item');

        // 서브 요소들 초기화
        showroomControll.showroom.subFind();
        // 서브 스텝 핸들러 실행
        showroomControll.showroom.subStepHandler(thisSpItem, thisSpSubItem, storeData, screenClass);
    });

    // sr3-stroe의 다른 체험이 궁금해요 버튼 클릭
    const btnSubmit = $('.button-submit');

    btnSubmit.on('click', function () {
        // setTimeout 초기화
        showroomControll.clearTimeout();
        if (storeClass == 'sr8-bluescan') {
            // 블루스캔
            // 블루스캔 페이지 초기화
            showroomControll.bluescan.setBluescanInit();
        } else {
            // 쇼룸
            showroomControll.showroom.otherStep();
        }
    });
}
