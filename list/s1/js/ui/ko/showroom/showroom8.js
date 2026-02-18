// 블루스캔(비상주 건물관리) : /showroom/bluescan.html
function showroom8() {
    const bsWrap = $('.sr8-bluescan');
    const bsScreens = bsWrap.find('.showroom-screen-wrap');
    const btnMoves = bsWrap.find('[data-screen-target]');
    const buldLinks = bsWrap.find('.bs-building-layer .bs-building-item > a');
    let scrN; // 20240730 추가

    // 초기 진입 시
    setTimeout(() => {
        bsWrap.removeClass('default').addClass('main');
        setTimeout(() => {
            $('.bs-building-layer .sr-toast-msg').removeClass('active');
        }, 3000);
    }, 1000);

    // screen{n} - step{n} 페이지 전환 init 함수
    const scrInit = (scrNum, stpNum) => {
        const cls = `.showroom-screen${scrNum}-wrap`;
        console.log(`screen${scrNum} - step${stpNum} step changed`);
        bsScreens.removeClass('active');

        if (scrNum == 0 || stpNum == 0) {
            bsWrap.removeClass().addClass('showroom-container-wrap sr8-bluescan main');
            $('.showroom-screen0-wrap').addClass('active');
        } else {
            bsWrap.removeClass().addClass(`showroom-container-wrap sr8-bluescan screen${scrNum} step${stpNum}`);
            $('.showroom-screen-wrap').removeClass('active');
            $(cls).addClass('active');
        }

        scrN = scrNum;
        stpN = stpNum;
    };

    // 화면 진입 이벤트 (service-step-wrap 연동)
    buldLinks.on('click', function () {
        const thisB = $(this);
        const srpIndex = thisB.closest('.bs-building-item').index() + 1;
        const screenClass = 'screen' + srpIndex;

        // bsWrap.removeClass('main');
        // bsWrap.addClass(screenClass + ' step1 step1-1');

        if (typeof showroomData !== 'undefined') {
            setPageContent('sr8-bluescan', screenClass, showroomData);

            // if (srpIndex === 1) {
            const linkListStep = $('.link-list-step');
            const spItem = linkListStep.closest('.step-play-item').eq(0);
            $('.link-list-step').first().trigger('click');
            spItem.removeClass('complite');
            spItem.addClass('active play');
            // }
        } else {
            console.error('showroomData를 찾을 수 없음.');
        }

        // .service-step-wrap link에 data-screen-target 넣기
        // const stepLayer = $('.service-step-wrap');
        // const stepLayerLinks = stepLayer.find('.step-play-item > a');
        // const stepSubmitBtn = stepLayer.find('.button-submit');

        // if ($(this).attr('data-screen-target')) {
        //     for (let n = 0; n < stepLayerLinks.length; n++) {
        //         stepLayerLinks.eq(n).attr('data-screen-target', `${srpIndex}-${n + 1}`);
        //     }
        //     // 스텝 레이어의 다른 체험이 궁금해요 에 추가
        //     stepSubmitBtn.attr('data-screen-target', '0-0');
        // }
    });

    // a, button [data-screen-target] 값 있는 경우 (메인 층별 버튼)
    // 해당하는.showroom - screen - wrap active 및 해당하는 action init
    btnMoves.each(function () {
        const str = $(this).data('screenTarget');
        const strs = str.split('-');
        const screen = strs[0];
        const step = strs[1];

        $(this).on('click', function () {
            elVisiReset(); // 작업 중에는 비활성화
            scrInit(screen, step); // .sr8-bluescan에 해당하는 스크린, 스텝 class init

            // 메인 화면에서 각 screen 진입 시 screen 인지 및 data-screen-target에 따른 action init
            setTimeout(() => {
                const scrnActions = {
                    sc1St1Action: sc1St1Action,
                    sc1St2Action: sc1St2Action,
                    sc1St3Action: sc1St3Action,
                    sc1St4Action: sc1St4Action,
                    sc2St1Action: sc2St1Action,
                    sc2St2Action: sc2St2Action,
                    sc2St3Action: sc2St3Action,
                    sc2St4Action: sc2St4Action,
                    sc3St1Action: sc3St1Action,
                    sc3St2Action: sc3St2Action,
                    sc3St3Action: sc3St3Action,
                    sc3St4Action: sc3St4Action,
                    sc4St1Action: sc4St1Action,
                    sc4St2Action: sc4St2Action,
                    sc4St3Action: sc4St3Action,
                    sc4St4Action: sc4St4Action,
                    sc5St1Action: sc5St1Action,
                    sc5St2Action: sc5St2Action,
                    sc5St3Action: sc5St3Action,
                    sc5St4Action: sc5St4Action,
                    sc6St1Action: sc6St1Action,
                    sc6St2Action: sc6St2Action,
                    sc6St3Action: sc6St3Action,
                    sc6St4Action: sc6St4Action,
                };

                const scrnSelectors = [
                    '.showroom-screen1-wrap',
                    '.showroom-screen2-wrap',
                    '.showroom-screen3-wrap',
                    '.showroom-screen4-wrap',
                    '.showroom-screen5-wrap',
                    '.showroom-screen6-wrap',
                ];

                // 해당하는 screen의 스텝 action init
                for (let i = 0; i < scrnSelectors.length; i++) {
                    if ($(scrnSelectors[i]).hasClass('active')) {
                        const actionKey = `sc${i + 1}St${step}Action`;
                        if (scrnActions[actionKey]) {
                            scrnActions[actionKey]();
                        }
                        break;
                    }
                }
            }, 100);
        });
    });

    // -- [screen별 액션] -- //

    /*
        bluescan 초수 셋팅
        - step당 플레이가 끝난 후 5초간 화면 노출 후 다음 스텝으로 이동되게
        - 하단 메시지 노출했다가 미노출되는 시점은 2-3초 기준
        - 팝업 노출에서 미노출되는 시점(다음 스텝으로 넘어가는 시간) - 5초
    */

    // 각 step 끝날때마다 active로 노출시킨 요소들 모두 초기화
    const elVisiReset = () => {
        // 20240730 수정
        const thisScr = $(`.showroom-screen${scrN}-wrap`);
        const btmMsg = $('.bottom-gray-tooltip-wrap');
        const thisChildren = thisScr.find('.active, .on, .show, .off');

        thisChildren.removeClass('active show on off');
        btmMsg.removeClass('active');
    };

    // [screen1 - 지하 1층]
    const sc1St1Action = () => {
        console.log('screen1 step1 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 센서 노출
                $('.sr-lk-sensor').addClass('active');
                // 포인터 노출
                $('.sr-pointer-1').addClass('show active');
                // 알럿 메시지 노출
                $('.sr-alert-msg-1').addClass('show active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');
            }, 500),
        );
    };

    // screen1 - step2 action
    const sc1St2Action = () => {
        console.log('screen1 step2 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 센서 노출
                $('.sr-lk-sensor').addClass('active');
                // 포인터 노출
                $('.sr-pointer').addClass('show active');
                // 클로즈업 노출
                $('.closeup-1').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                //3초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 하단 메시지 미노출
                        $('.bottom-gray-tooltip-wrap').removeClass('active');

                        // .5초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                //클로즈업 미노출
                                $('.closeup-1').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc1Sensor').addClass('active');
                                // 팝업 애니메이션 재생
                                $('#popupSr8Sc1Sensor .sr-popup-frame').addClass('active');
                            }, 500),
                        );
                    }, 3000),
                );
            }, 500),
        );
    };

    // screen1 - step3 action
    const sc1St3Action = () => {
        console.log('screen1 step3 action init');

        // 진입 후 0.3초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                $('.line, .bs-cctv-wrap, .sr-lk-sensor-round').addClass('active');
            }, 300),
        );

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // cctv, sensor 빔 노출 20240730 추가
                $('.sr-round-beam').addClass('active');

                // .5초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');
                        // 모바일 메시지 노출
                        $('.layer-mobile-1').addClass('active');
                    }, 500),
                );
            }, 500),
        );
    };

    // screen1 - step4 action
    const sc1St4Action = () => {
        console.log('screen1 step4 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // cctv, sensor 빔 노출 20240730 추가
                $('.sr-round-beam').addClass('active');
                // 클로즈업 노출
                $('.closeup-1').addClass('active');

                // 2초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 메시지 노출
                        $('.layer-mobile-1').addClass('active');

                        // 1초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 노출
                                $('.bottom-gray-tooltip-wrap').addClass('active');
                            }, 1000),
                        );

                        // 3초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 클로즈업 미노출, 모바일 메시지 미노출, 하단 메시지 미노출
                                $('.closeup-1, .layer-mobile-1, .bottom-gray-tooltip-wrap').removeClass('active');
                            }, 3000),
                        );

                        // 4초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 팝업 노출
                                $('#popupSr8Sc1Monitor').addClass('active');
                            }, 4000),
                        );
                    }, 2000),
                );
            }, 500),
        );
    };

    // [screen2 - 지상 1층]
    const sc2St1Action = () => {
        console.log('screen2 step1 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 알럿 메시지 노출
                $('.sr-alert-msg-2').addClass('active');
                // 공기질 센서 노출
                $('.sr-pointer-2').addClass('show active');
                // 포인터 활성화
                $('.bs-air-sensor').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 4초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 하단 메시지 미노출
                        $('.bottom-gray-tooltip-wrap').removeClass('active');
                    }, 4000),
                );
            }, 500),
        );
    };

    // screen2 - step2
    const sc2St2Action = () => {
        console.log('screen2 step2 action init');

        // 진입 후 0.05초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 알럿 메시지 노출
                $('.sr-alert-msg-2').addClass('active');
                // 포인터 활성화
                $('.sr-pointer-2').addClass('show active');
                // 공기질 센터 노출
                $('.bs-air-sensor').addClass('active');
            }, 50),
        );

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 클로즈업 노출
                $('.closeup-2').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 3초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 클로즈업, 알럿 메시지, 하단 메시지 미노출
                        $('.closeup-2, .sr-alert-msg-2, .bottom-gray-tooltip-wrap').removeClass('active');

                        // 1초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 팝업 노출
                                $('#popupSr8Sc2St2Sensor, #popupSr8Sc2St2Sensor .sr-popup-frame').addClass('active');
                            }, 1000),
                        );
                    }, 4000),
                );
            }, 500),
        );
    };

    // screen2 - step3
    const sc2St3Action = () => {
        console.log('screen2 step3 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // cctv, sensor active
                $('.sr-round-beam').addClass('active');
                // 클로즈업 노출
                $('.closeup-2').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 노출
                        $('.layer-mobile-2').addClass('active');
                    }, 1000),
                );
            }, 500),
        );
    };

    // screen2 - step4
    const sc2St4Action = () => {
        console.log('screen2 step4 action init');

        // 진입 후 .05초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // cctv, sensor active
                $('.sr-round-beam').addClass('active');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 클로즈업 노출
                        $('.closeup-2').addClass('active');
                    }, 1000),
                );

                // 2초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 노출
                        $('.layer-mobile-2').addClass('active');
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');

                        // 3초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 미노출
                                $('.bottom-gray-tooltip-wrap').removeClass('active');
                                // 모바일 레이어 미노출
                                $('.layer-mobile-2').removeClass('active');

                                // 1초 뒤
                                timeoutIDs.push(
                                    setTimeout(() => {
                                        // 팝업 노출
                                        $('#popupSr8Sc2St4Monitor').addClass('active');
                                    }, 1000),
                                );
                            }, 3000),
                        );
                    }, 2000),
                );
            }, 50),
        );
    };

    // [screen3 - 지상 2층]
    const sc3St1Action = () => {
        console.log('screen3 step1 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 색상 레드로 변경
                $('.sr-pointer-3').removeClass('blue').addClass('red');
                // sensor, controlpanel active
                $('.sr-fire-sensor, .sr-control-panel').addClass('active');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 팝업 노출
                        $('#popupSr8Sc3St1Sensor, #popupSr8Sc3St1Sensor .sr-popup-frame').addClass('active');
                    }, 1000),
                );
            }, 500),
        );
    };

    // screen3 - step2
    const sc3St2Action = () => {
        console.log('screen3 step2 action init');

        // 진입 후 .1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // sensor, controlpanel active (3-1에 노출 상태여서)
                $('.sr-fire-sensor, .sr-control-panel').addClass('active');
            }, 100),
        );

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 색상 레드로 변경
                $('.sr-pointer-3').removeClass('blue').addClass('red');
                // 알럿 메시지 노출
                $('.sr-alert-msg-3').addClass('active');
                // 포인터 노출
                $('.sr-pointer-3').addClass('active show');

                // 2초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 클로즈업 노출
                        $('.closeup-3').addClass('active');

                        // 1초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 노출
                                $('.bottom-gray-tooltip-wrap').addClass('active');
                                // 모바일 레이어 노출
                                $('.layer-mobile-3').addClass('active');
                            }, 1000),
                        );
                    }, 2000),
                );
            }, 500),
        );
    };

    const sc3St3Action = () => {
        console.log('screen3 step3 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 색상 레드로 변경
                $('.sr-pointer-3').removeClass('blue').addClass('red');
                // cctc, 화재감지기 빔 활성화
                $('.bs-cctv-wrap-2, .sr-fire-sensor-2').find('.sr-round-beam').addClass('active');

                // 1초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 포인터 노출
                        $('.sr-pointer-3').addClass('show active');
                        // 알럿 메시지 노출
                        $('.sr-alert-msg-3-2').addClass('active');

                        // 2초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 상태 확인 레이어 노출
                                $('.layer-check').addClass('active');
                            }, 2000),
                        );

                        // 4초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 상태 확인 레이어 미노출
                                $('.layer-check').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc3St3Sensor, #popupSr8Sc3St3Sensor .sr-popup-frame').addClass('active');
                            }, 4000),
                        );
                    }, 1000),
                );
            }, 500),
        );
    };

    const sc3St4Action = () => {
        console.log('screen3 step4 action init');

        // 진입 후 .1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // cctc, 화재감지기 빔 활성화
                $('.bs-cctv-wrap-2, .sr-fire-sensor-2').find('.sr-round-beam').addClass('active');
                // 포인터 색상 블루로 변경
                $('.sr-pointer-3').removeClass('red').addClass('blue');
            }, 100),
        );

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 색상 블루로 변경 및 노출
                $('.sr-pointer-3').addClass('show active');
                // 클로즈업 노출
                $('.closeup-3').addClass('active');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 노출
                        $('.layer-mobile-3').addClass('active');
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');
                    }, 1000),
                );

                // 4초 뒤 (모바일 노출 3초 후)
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 미노출
                        $('.layer-mobile-3').removeClass('active');
                        // 하단 메시지 미노출
                        $('.bottom-gray-tooltip-wrap').removeClass('active');
                        // 팝업 노출
                        $('#popupSr8Sc3St4Monitor').addClass('active');
                    }, 4000),
                );
            }, 500),
        );
    };

    // [screen4 - 지상 3층]
    const sc4St1Action = () => {
        console.log('screen4 step1 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 감지기 노출
                $('.sr-temp-sensor').addClass('show');
            }, 500),
        );

        // 진입 후 1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 감지기 활성화
                $('.sr-temp-sensor').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');
            }, 1000),
        );
    };

    // screen4 - step2
    const sc4St2Action = () => {
        console.log('screen4 step2 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 감지기 노출 및 활성화
                $('.sr-temp-sensor').addClass('show active');
            }, 500),
        );

        // 진입 후 1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 노출 및 활성화
                $('.sr-pointer-4').addClass('show active');
                // 알럿 메시지 노출
                $('.sr-alert-msg-4').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 2초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 클로즈업 노출
                        $('.closeup-4').addClass('active');

                        // 4초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 미노출, 클로즈업 미노출
                                $('.bottom-gray-tooltip-wrap, .closeup-4').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc4St2Sensor, #popupSr8Sc4St2Sensor .sr-popup-frame').addClass('active');
                            }, 4000),
                        );
                    }, 2000),
                );
            }, 1000),
        );
    };

    // screen4 - step3
    const sc4St3Action = () => {
        console.log('screen4 step3 action init');

        // 진입 후 바로
        timeoutIDs.push(
            setTimeout(() => {
                // 모바일 레이어 substep-2, substep-3 substep-1로 초기화
                $('.layer-mobile-4').removeClass('substep-2 substep-3').addClass('substep-1');
                // 감지기 노출
                $('.sr-temp-sensor').addClass('show');
            }, 50),
        );

        // 진입 후 1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 모바일 레이어 노출 및 .sub-step-1
                $('.layer-mobile-4').addClass('active substep-1');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 이미지 교체 .sub-step-2
                        $('.layer-mobile-4').removeClass('substep-1').addClass('substep-2');
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');
                    }, 1000),
                );

                // 4초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 포인터 색상변경 및 노출, 활성화
                        $('.sr-pointer-4').removeClass('red').addClass('blue show active');
                        // 에어컨 바람 노출
                        $('.aircon-wind-4').addClass('active');
                        // 클로즈업 노출
                        $('.closeup-4').addClass('active');

                        // 2초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 모바일 레이어 이미지 변경 .sub-step-3
                                $('.layer-mobile-4').removeClass('substep-2').addClass('substep-3');
                            }, 2000),
                        );

                        // 6초 뒤
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 클로즈업, 모바일 레이어, 하단메시지 미노출
                                $('.closeup-4, .layer-mobile-4, .bottom-gray-tooltip-wrap').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc4St4Monitor').addClass('active');
                            }, 6000),
                        );
                    }, 4000),
                );
            }, 1000),
        );
    };

    // screen4 - step4
    const sc4St4Action = () => {
        console.log('screen4 step4 action init');
    };

    // [screen5 - 지상 4층]
    const sc5St1Action = () => {
        console.log('screen5 step1 action init');

        // 진입 후 .5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 알럿 메시지 노출
                $('.sr-alert-msg-5').addClass('active');
                // 포인터 노출
                $('.sr-pointer-5').addClass('show');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 0.5초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 포인터 활성화
                        $('.sr-pointer-5').addClass('active');
                    }, 500),
                );
            }, 500),
        );
    };

    // screen5 - step2
    const sc5St2Action = () => {
        console.log('screen5 step2 action init');

        // 진입 후 0.5 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 알럿 메시지 노출
                $('.sr-alert-msg-5').addClass('active');
                // 포인터 노출
                $('.sr-pointer-5').addClass('show');
                // 센서 빔 노출
                $('.sr-dust-sensor').addClass('active');
                // 포인터 active

                // 0.5초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 포인터 활성화
                        $('.sr-pointer-5').addClass('active');
                    }, 500),
                );

                // 1초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 클로즈업 노출
                        $('.closeup-5').addClass('active');
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');

                        // 3초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 미노출
                                $('.bottom-gray-tooltip-wrap').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc5St2Sensor, #popupSr8Sc5St2Sensor .sr-popup-frame').addClass('active');
                            }, 3000),
                        );
                    }, 1000),
                );
            }, 500),
        );
    };

    // screen5 - step3
    const sc5St3Action = () => {
        console.log('screen5 step3 action init');

        // 진입 후 바로
        timeoutIDs.push(
            setTimeout(() => {
                // 센서 빔 노출
                $('.sr-dust-sensor').addClass('active');
            }, 100),
        );

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 에어컨 바람 노출
                $('.aircon-wind-5').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 1.5초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 포인터 색 변경 및 노출 활성화
                        $('.sr-pointer-5').addClass('blue show active');
                        // 클로즈업 노출
                        $('.closeup-5').addClass('active');
                    }, 1500),
                );
            }, 500),
        );
    };

    // screen5 - step4
    const sc5St4Action = () => {
        console.log('screen5 step4 action init');

        // 진입 후 바로
        timeoutIDs.push(
            setTimeout(() => {
                // 센서 빔 노출
                $('.sr-dust-sensor').addClass('active');
                // 에어컨 바람 노출
                $('.aircon-wind-5').addClass('active');
            }, 50),
        );

        // 진입 후 1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 포인터 노출
                $('.sr-pointer-5').addClass('show active');
                // 클로즈업 노출
                $('.closeup-5').addClass('active');

                // 1초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 노출
                        $('.layer-mobile-5').addClass('active');
                        // 하단 메시지 노출
                        $('.bottom-gray-tooltip-wrap').addClass('active');
                    }, 1000),

                    // 4초 뒤
                    timeoutIDs.push(
                        setTimeout(() => {
                            // 모바일 레이어 미노출
                            $('.layer-mobile-5').removeClass('active');
                            // 하단 메시지 미노출
                            $('.bottom-gray-tooltip-wrap').removeClass('active');
                            // 팝업 노출
                            $('#popupSr8Sc5St4Monitor').addClass('active');
                        }, 4000),
                    ),
                );
            }, 1000),
        );
    };

    // [screen6 - 옥상]
    const sc6St1Action = () => {
        console.log('screen6 step1 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                $('#popupSr8Sc6St1Sensor, #popupSr8Sc6St1Sensor .sr-popup-frame').addClass('active');
            }, 500),
        );
    };

    // screen6 - step2 action
    const sc6St2Action = () => {
        console.log('screen6 step2 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                $('.sr-pointer-6').addClass('show active');

                // 1초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // alert 메시지 노출
                        $('.sr-alert-msg-6').addClass('active');
                        // 클로즈업 노출
                        $('.closeup-6').addClass('active');
                        // 하단 메시지 노출 // 20240731 위치 이동
                        $('.bottom-gray-tooltip-wrap').addClass('active');

                        //3초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 하단 메시지 미노출
                                $('.bottom-gray-tooltip-wrap').removeClass('active');
                                // alert 메시지 미노출
                                $('.sr-alert-msg-6').removeClass('active');
                                // 클로즈업 미노출
                                $('.closeup-6').removeClass('active');
                                // 팝업 노출
                                $('#popupSr8Sc6St2Sensor, #popupSr8Sc6St2Sensor .sr-popup-frame').addClass('active');
                            }, 3000),
                        );
                    }, 1000),
                );
            }, 500),
        );
    };

    // screen6 - step3 action
    const sc6St3Action = () => {
        console.log('screen6 step3 action init');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 빌딩 프레임 노출
                $('.bs-building-frame').addClass('active');
            }, 500),
        );

        // 1초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 모바일 레이어 노출
                $('.layer-mobile-6').addClass('active');

                // 1초 후
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 내용 보임
                        $('.layer-mobile-6').addClass('on');
                        // 하단 메시지 노출 // 20240730 추가
                        $('.bottom-gray-tooltip-wrap').addClass('active');
                    }, 1000),
                );

                // 4초 후 (하단 메시지 노출되고 3초 후)
                timeoutIDs.push(
                    setTimeout(() => {
                        // 화면 밝아짐
                        $('.showroom-background-dim').addClass('off');
                        // 하단 메시지 미노출 // 20240730 추가
                        $('.bottom-gray-tooltip-wrap').removeClass('active');
                        // 모바일 레이어 미노출
                        $('.layer-mobile-6').removeClass('active on');

                        // 0.5초 후
                        timeoutIDs.push(
                            setTimeout(() => {
                                // 20240731 수정
                                // 클로즈업 노출
                                $('.closeup-6').addClass('active');
                            }, 500),
                        );
                    }, 4000),
                ); // 20240731 초수 수정
            }, 1000),
        );
    };

    // screen6 - step4 action
    const sc6St4Action = () => {
        console.log('screen6 step4 action init');

        // 6-3의 화면 밝음 효과 제거
        $('.showroom-background-dim').removeClass('off');

        // 진입 후 0.5초 뒤
        timeoutIDs.push(
            setTimeout(() => {
                // 모바일 레이어 노출
                $('.layer-mobile-6').addClass('active');
                // 하단 메시지 노출
                $('.bottom-gray-tooltip-wrap').addClass('active');

                // 3초 뒤
                timeoutIDs.push(
                    setTimeout(() => {
                        // 모바일 레이어 미노출
                        $('.layer-mobile-6').removeClass('active');
                        // 하단 메시지 미노출
                        $('.bottom-gray-tooltip-wrap').removeClass('active');
                        // 팝업 노출
                        $('#popupSr8Sc6St4Monitor').addClass('active');
                    }, 3000),
                );
            }, 500),
        );
    };

    const showroom8Func = {
        comm: {
            elVisiReset,
            scrInit,
        },
        screen1: {
            step1: sc1St1Action,
            step2: sc1St2Action,
            step3: sc1St3Action,
            step4: sc1St4Action,
        },
        screen2: {
            step1: sc2St1Action,
            step2: sc2St2Action,
            step3: sc2St3Action,
            step4: sc2St4Action,
        },
        screen3: {
            step1: sc3St1Action,
            step2: sc3St2Action,
            step3: sc3St3Action,
            step4: sc3St4Action,
        },
        screen4: {
            step1: sc4St1Action,
            step2: sc4St2Action,
            step3: sc4St3Action,
            step4: sc4St4Action,
        },
        screen5: {
            step1: sc5St1Action,
            step2: sc5St2Action,
            step3: sc5St3Action,
            step4: sc5St4Action,
        },
        screen6: {
            step1: sc6St1Action,
            step2: sc6St2Action,
            step3: sc6St3Action,
            step4: sc6St4Action,
        },
    };

    window.showroom8Func = showroom8Func;

    // 이전 페이지 가기
    const btnScreenWrap = $('.button-screen-wrap');
    btnScreenWrap.on('click', function () {
        localStorage.setItem('previousPage', 'bluescan.html'); // 이전페에지 가기 스토리지 저장
        // localStorage.removeItem("previousPage"); // 값 초기화 (테스트용)
    });
}
