let storeData = '';
let showroomStepTimer = '';
let showroomCompletes = [];
let showroomControll = {
    gnbHeader: function () {
        // 에스원 GNB 보기
        const woShowroom = $('.wrap-online-showroom');
        const headerHoverView = woShowroom.find('.header-hover-view');
        headerHoverView.on('mouseover', function () {
            const thisB = $(this);
            thisB.closest('.wrap-online-showroom').addClass('header-gnb-view');
        });

        const headerWrap = woShowroom.find('.header_wrap');
        headerWrap.on('mouseleave', function () {
            const thisB = $(this);
            thisB.closest('.wrap-online-showroom').removeClass('header-gnb-view');
        });

        $('body').on('click', function (e) {
            // 클릭하거나 호버한 요소가 headerWrap 안에 있지 않은 경우에만 클래스 제거
            if (!headerWrap.is(e.target) && headerWrap.has(e.target).length === 0) {
                woShowroom.removeClass('header-gnb-view');
            }
        });
    },
    // setTimeout 초기화
    clearTimeout: function () {
        // 스텝 관련 setTimeout 초기화
        if (showroomStepTimer) clearTimeout(showroomStepTimer);
        // 시나리오 관련 setTimeout 초기화
        //if (timeoutIDs.length > 0) timeoutIDs.forEach(clearTimeout);
    },
    // 이전 버튼 클릭 이벤트
    goBack: function (location) {
        const containerWrap = $('.showroom-container-wrap');
        if (location != 'view') {
            // setTimeout 초기화
            showroomControll.clearTimeout();
            // 이외 쇼룸 페이지
            if (containerWrap.hasClass('main')) {
                // 시나리오 선택 단계
                window.location.href = '/showroom/intro.html';
            } else {
                // 시나리오 진입했을때
                if (containerWrap.hasClass('sr8-bluescan')) {
                    // 블루스캔
                    // 블루스캔 페이지 초기화
                    showroomControll.bluescan.setBluescanInit();
                } else {
                    // 쇼룸
                    containerWrap
                        .removeClass(function (index, className) {
                            let filteredClasses = className.split(' ').filter(function (c) {
                                return c.includes('step') || c.includes('screen');
                            });
                            return filteredClasses.join(' ');
                        })
                        .addClass('main');
                }
            }
        } else {
            // 견적내기 다이렉트 링크 접근시
            history.back();
        }
    },
    // 시나리오 전환 이벤트
    bluescan: {
        // 시나리오 선택
        play: function (el, screenIdx, stepIdx) {
            // 블루스캔
            let item = $(el);
            // 선택한 스텝 이전 스텝들 체크표시
            item.prevAll('.step-play-item').removeClass('active play pause').addClass('complete');

            // setTimeout 초기화
            showroomControll.clearTimeout();
            if (item.hasClass('active play')) {
                // 이미 active play 되있으면 체크 표시
                item.removeClass('play').addClass('pause');
            } else {
                // 이미 안 되있으면 플레이 표시
                item.removeClass('active complete pause');
                setTimeout(() => {
                    item.addClass('active play');
                }, 10);
                storeData = showroomData['sr8-bluescan']['screen' + screenIdx];
                const stepTimer = storeData.steps[item.index()].stepTimer;
                const stepTimerMs = parseFloat(stepTimer) * 1000;

                showroomStepTimer = setTimeout(
                    () => showroomControll.bluescan.playNextStep(item, screenIdx),
                    stepTimerMs,
                );

                //블루스캔
                showroomControll.bluescan.action(screenIdx, stepIdx);
            }
            // 선택한 스텝 이후 스텝들 비활성화
            item.nextAll('.step-play-item').removeClass('active play pause complete');
        },
        // 시나리오 실행
        action: function (screen, step) {
            if (screen == '6') {
                // 옥상 선택시
                // 화면 밝음 효과 제거
                $('.showroom-background-dim').removeClass('off');
            }
            // 블루스캔 초기화
            showroom8Func.comm.elVisiReset();
            // 블루스캔 초기세팅
            showroom8Func.comm.scrInit(screen, step);
            // 스텝 실행
            showroom8Func['screen' + screen]['step' + step]();
        },
        // 다음 스텝 재생
        playNextStep: function (currentItem, screenIdx) {
            const nextItem = currentItem.next('.step-play-item');

            if (nextItem.length) {
                const nextIndex = nextItem.index();
                const nextStepTimer = storeData.steps[nextIndex].stepTimer;
                const nextStepTimerMs = parseFloat(nextStepTimer) * 1000;

                nextItem.addClass('active play');
                let showroomTimer = setTimeout(
                    () => showroomControll.bluescan.playNextStep(nextItem, screenIdx),
                    nextStepTimerMs,
                );
                timeoutIDs.push(showroomTimer);

                showroomControll.bluescan.action(screenIdx, nextIndex + 1);
            }
            currentItem.removeClass('active play pause').addClass('complete');
        },
        // 블루스캔 견적문의 팝업
        contact: function () {
            $.layer({
                url: '/showroom/contact',
            });
        },
        // 블루스캔 페이지 초기화
        setBluescanInit: function () {
            showroom8Func.comm.elVisiReset();
            showroom8Func.comm.scrInit(0, 0);
        },
    },
    // 쇼룸 전용 함수
    showroom: {
        // 비디오 자동재생
        videoAutoPlay: function (slick, currentSlide) {
            var currentSlideElement = $(slick.$slides[currentSlide]);
            // 현재 슬라이드의 비디오 요소 가져오기
            var iframe = currentSlideElement.find('.video-iframe');
            var src = iframe.attr('src');
            // 영상인 경우만 자동재생
            if (src) {
                currentSlideElement.find('.thumbnail-wrap').removeClass('active');
                iframe.addClass('active');
                // 비디오 자동 재생 설정
                if (!src.includes('autoplay=1')) {
                    iframe.attr('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=1');
                }
            }
        },
        // 다른 체험하기
        otherStep: function () {
            // 스크린, 스텝 시나리오 초기화
            $('.showroom-container-wrap')
                .removeClass(function (index, className) {
                    let filteredClasses = className.split(' ').filter(function (c) {
                        return c.includes('step') || c.includes('screen');
                    });
                    return filteredClasses.join(' ');
                })
                .addClass('main');
        },
        // 서브 스텝 핸들러
        subStepHandler: function (thisSpItem, thisSpSubItem, data, screenClass) {
            const thisSpSubItemIndex = thisSpSubItem.index();
            const nextItem = thisSpItem.next('.step-play-item');
            const nextSubItem = thisSpSubItem.next('.step-play-item-sub-item');
            const thisSpSubItemLength = thisSpItem.find('.step-play-item-sub-item').length;
            const subStepTimersMs = data.steps[thisSpItem.index()].subSteps.map(
                subStep => parseFloat(subStep.subStepTimer) * 1000,
            );
            // 다른 서브 스텝 요소들은 active 제거
            thisSpSubItem.siblings('.step-play-item-sub-item').removeClass('active');
            // 해당 서브 스텝 요소 active 추가
            thisSpSubItem.addClass('active');

            // 시나리오 실행
            showroomControll.showroom.action(thisSpItem, thisSpSubItemIndex);

            if (!thisSpItem.hasClass('pause')) {
                thisSpItem
                    .find('.service-circle-play-inner')
                    .find('.blue-circle')
                    .attr(
                        'style',
                        'animation-duration: ' + parseFloat(subStepTimersMs[thisSpSubItemIndex] / 1000) + 's',
                    );
                thisSpItem.removeClass('active complete pause');
                setTimeout(() => {
                    thisSpItem.addClass('active play');
                }, 50); // 짧은 지연 후 활성화

                // 다음 서브 스텝 실행
                timeoutIDs.push(
                    setTimeout(function () {
                        // 마지막 서브스텝 일때
                        if (thisSpSubItemIndex + 1 == thisSpSubItemLength) {
                            if (nextItem.length) {
                                const nextIndex = nextItem.index();
                                const nextStepTimer = data.steps[nextIndex].stepTimer;
                                const nextStepTimerMs = parseFloat(nextStepTimer) * 1000;
                                const nextSpSubItem = nextItem.find('.step-play-item-sub-item');
                                if (nextSpSubItem.length) {
                                    // 서브 요소들 초기화
                                    showroomControll.showroom.subFind();
                                    // 서브 스텝 핸들러 실행
                                    showroomControll.showroom.subStepHandler(
                                        nextItem,
                                        $(nextSpSubItem[0]),
                                        data,
                                        screenClass,
                                    );
                                } else {
                                    // 다음스텝이 있을때
                                    if (data.steps[nextIndex].stopYn != 'Y') {
                                        nextItem.addClass('active play');
                                        timeoutIDs.push(
                                            setTimeout(() => {
                                                showroomControll.showroom.playNextStep(nextItem, data, screenClass);
                                            }, nextStepTimerMs),
                                        );
                                    } else {
                                        nextItem.addClass('active pause');
                                    }
                                    // 시나리오 실행
                                    showroomControll.showroom.action(nextItem);
                                }
                            } else {
                                // 다음스텝이 없을때
                                $('.showroom-container-wrap').addClass('step-end');
                            }
                            thisSpItem.removeClass('active pause play').addClass('complete');
                        } else {
                            // 마지막 서브스텝 아닐때
                            showroomControll.showroom.subStepHandler(thisSpItem, nextSubItem, data, screenClass);
                        }
                    }, subStepTimersMs[thisSpSubItemIndex]),
                );
            }
        },
        // 시나리오 실행
        action: function (thisSpItem, thisSpSubItemIndex = 0) {
            const thisSpItemIndex = thisSpItem.index();
            // 스텝 시나리오 초기화
            $('.showroom-container-wrap').removeClass(function (index, className) {
                let filteredClasses = className.split(' ').filter(function (c) {
                    return c.includes('step');
                });
                return filteredClasses.join(' ');
            });
            // 스텝 시나리오 실행
            $('.showroom-container-wrap').addClass('step' + (thisSpItemIndex + 1));
            $('.showroom-container-wrap').addClass('step' + (thisSpItemIndex + 1) + '-' + (thisSpSubItemIndex + 1));
        },
        // 다음 스텝 재생
        playNextStep: function (currentItem, data, screenClass) {
            const nextItem = currentItem.next('.step-play-item');
            const nextSpSubItem = nextItem.find('.step-play-item-sub-item');

            if (nextItem.length) {
                const nextIndex = nextItem.index();
                const nextStepTimer = data.steps[nextIndex].stepTimer;
                const nextStepTimerMs = parseFloat(nextStepTimer) * 1000;

                // 20240813 step2에 서브스텝 있을 경우도 자동멈춤 기능 추가
                if (data.steps[nextIndex].stopYn != 'Y') {
                    nextItem.addClass('active play');
                } else {
                    nextItem.addClass('active pause');
                }

                if (nextSpSubItem.length > 0) {
                    // 서브 요소들 초기화
                    showroomControll.showroom.subFind();
                    // 서브 스텝 핸들러 실행
                    showroomControll.showroom.subStepHandler(nextItem, $(nextSpSubItem[0]), data, screenClass);
                } else {
                    if (data.steps[nextIndex].stopYn != 'Y') {
                        timeoutIDs.push(
                            setTimeout(() => {
                                showroomControll.showroom.playNextStep(nextItem, data, screenClass);
                            }, nextStepTimerMs),
                        );
                    }
                    // 시나리오 실행
                    showroomControll.showroom.action(nextItem);
                }
            }
            currentItem.removeClass('active play pause').addClass('complete');
        },
        // 서브 요소들 초기화
        subFind: function () {
            const showroomStepWrap = $('.showroom-step-wrap');
            const showroomContainerWrap = $('.showroom-container-wrap');

            showroomStepWrap
                .find('.sr-float-tooltip, .info-popup-wrap, .popup-view-item, .info-button-item')
                .removeClass('show active');
            showroomContainerWrap.removeClass('previous-world another-world');

            for (let j = 1; j <= 6; j++) {
                showroomStepWrap
                    .find(`.sr${j}-alert-msg-wrap, .sr${j}-person-sc, .sr${j}-item-skew-device-wrap, .sr${j}-targeting`)
                    .removeClass(function (index, className) {
                        let filteredClasses = className.split(' ').filter(function (c) {
                            return c.includes('changeEp');
                        });
                        return filteredClasses.join(' ');
                    });
                showroomStepWrap
                    .find(`.sr${j}-popup-view-item, .sr${j}-info-popup-wrap, .sr${j}-info-button-item`)
                    .removeClass('active');
            }
        },
    },
};
