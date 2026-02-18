// 가격 견적
function showroomPr() {
    // 초기 진입 시
    const prcWrap = $('.sr-pricing');
    let scrN, stpN;
    // '출입방식' 배열
    let optArr = [];

    // '공간' 배열
    const commercialSegments = ['office', 'store', 'factory', 'storage']; // 상업용
    const householdSegments = ['house', 'villa']; // 가정용
    const placeMap = { view: 0, house: 1, villa: 2, store: 3, office: 4, factory: 5, storage: 6 };

    var placeValue = placeMap[gLocation || 'view'];

    setTimeout(() => {
        $('.showroom-container-wrap').removeClass('default').addClass('main');
    }, 500);

    // 스크린 및 스텝 세팅 함수
    const setScreenStep = (cls, scr, stp) => {
        const prcWrap = $('.sr-pricing');
        const scrnWrap = $('.showroom-screen-wrap');
        const stpWrap = $('.showroom-step-wrap');
        const thisScrnWrap = $(`.showroom-screen${scr}-wrap`);
        const thisStpWrap = $(`.showroom-step${stp}-wrap`);

        if (cls !== '') {
            prcWrap.removeClass().addClass(`showroom-container-wrap sr-pricing ${cls} main`);
        }
        scrnWrap.removeClass('active');
        stpWrap.removeClass('active');
        thisScrnWrap.addClass('active');
        thisStpWrap.addClass('active');

        if (scr == 0 || stp == 0) {
            scrnWrap.removeClass('active');
            stpWrap.removeClass('active');
        }

        scrN = scr;
        stpN = stp;
    };

    // 20240809 추가

    if (!gLocation || gLocation === 'view') {
        setScreenStep('pr-store', placeValue, 1);

        $('.showroom-container-wrap').addClass('sr-pricing');
        $('.showroom-container-wrap').addClass('pr-store');
        setTimeout(function () {
            $('.sr-pricing').addClass('pr-dimmed');
        }, 500);
        $('.showroom-screen3-wrap').addClass('active');
        $('.showroom-step1-wrap').addClass('active');
    } else {
        setScreenStep(`pr-${gLocation}`, placeValue, 1);
        pricingEnable('.place'); // 장소
        pricingEnable('.security'); //보안서비스
        $('.showroom-container-wrap').addClass(`sr-pricing pr-${gLocation}`);
    }

    // 공간유형 Default값 세팅
    if (commercialSegments.includes(gLocation)) {
        // 공간유형 '상업용' 활성화
        $('.space').find('.details-view .option:eq(0)').addClass('selected'); // '상업용' 버튼 selected
        $('.space').addClass('done'); // 선택된 값 우측에 노출
        $('.space em').text('상업용'); // 선택된 값 세팅

        // 장소 옵션 함수 호출
        showPlaceOptions('commercial');
    } else if (householdSegments.includes(gLocation)) {
        $('.space').find('.details-view .option:eq(1)').addClass('selected'); // '가정용' 버튼 selected
        $('.space').addClass('done'); // 선택된 값 우측에 노출
        $('.space em').text('가정용'); // 선택된 값 세팅

        // 장소 옵션 함수 호출
        showPlaceOptions('home');
    } else {
        // 이 부분에 view로 들어왔을 시 Default값 설정
        $('.space').addClass('open');
        $('.space').removeClass('done');
        $('.space').find('.details-view').css('display', 'block');

        // '장소', '보안 서비스' 비활성화
        disableSelect('.place');
        disableSelect('.security');
    }

    // 페이지에 따른 '장소' Default 활성화
    if ($('.place').find('.details-view button').hasClass('selected')) {
        let text = $('.place').find('.details-view .selected').find('span').text();
        $('.place').addClass('done');
        $('.place em').text(text);
    }

    // 초기 '공간유형, 장소, 보안서비스' 활성화
    pricingEnable('.space'); // 공간유형

    // 초기 CCTV개수, 출입문개수 세팅
    countEventDefault('.door-count'); // 출입문개수 초기값 세팅
    countEventDefault('.cctv-count'); // CCTV개수 초기값 세팅

    // data-screen-target 클릭 시
    $('[data-screen-target]').on('click', function () {
        const str = $(this).data('screenTarget');
        const strs = str.split('-');
        const $class = strs[0];
        const $screen = strs[1];
        const $step = strs[2];

        setScreenStep(`pr-${$class}`, $screen, $step);

        pricingEnable('.security');

        spacePlaceReset();

        //CCTV 선택값 초기화
        $('.cctv-item').removeClass('show');
        $('.cctv-wrap').removeClass('active');

        // 보안서비스 선택값 초기화
        $('.security').removeClass('done');
        $('.security').find('.details-view .option').removeClass('selected');
        $('.security').find('.details-btn > em').text('');

        // 좌측화면 dim 처리
        $('.sr-pricing').removeClass('pr-dimmed');

        $('.door-count').find('.details-view input[type="number"]').val(0);
        calculateEstimate();
    });

    // 견적내기 레이어 (showroomPr > setEstimate)
    function setEstimate() {
        const estBox = $('.estimate-indicator .select-details-item'); // 질문 상위 태그
        const estBoxBtn = estBox.find('.details-btn'); // 질문 상위 버튼
        const estBoxView = estBox.find('.details-view'); // 질문 하위 view

        // 모든 장소 공통
        // 타이틀 클릭 시 상세 내용 show/hide
        // 아코디언으로 일단 다 닫히고 자기 자신만 열려야 함.
        // 모두 다 닫힐 때 값 확인해서 함께 반영되어야 함.

        // 질문 버튼 함수
        estBoxBtn.each(function () {
            const parentBox = $(this).parent('.select-details-item'); // 버튼의 상위 태그
            const thisTit = $(this).find('p'); // 버튼 타이틀

            // 질문 열기 함수
            const thisOpen = () => {
                parentBox.removeClass('done');
                parentBox.addClass('open');
                parentBox.find('.details-view').stop().slideDown(300);
                console.log('slideDown completed');
                thisTit.text(thisTit.data('text'));
            };

            // 질문 닫기 함수
            const allClose = () => {
                estBox.removeClass('open');
                estBox.find('.details-view').stop().slideUp(200);
                console.log('slideUp completed');
                estBox.each(function () {
                    const boxTexts = $(this).find('.details-btn > p').data('originalText');
                    const resultTxt = $(this).find('.details-btn > em').text();
                    $(this).find('.details-btn > p').text(boxTexts);

                    if (resultTxt) {
                        $(this).addClass('done');
                    } else {
                        $(this).removeClass('done');
                    }
                });
            };

            // 질문 열고 닫기
            $(this).on('click', function () {
                if (parentBox.hasClass('open')) {
                    // 열림 상태인 경우
                    allClose(); // 모두 닫기
                } else {
                    // 닫힘 상태인 경우
                    allClose(); // 모두 닫고
                    thisOpen(); // 해당 박스만 열기
                }
            });
        });

        estBoxView.each(function () {
            const options = $(this).find('.option');
            const ranges = $(this).find('.spinner');

            // 상세 내용 선택 시 값 출력 (버튼/number 구분)
            if (options) {
                // 선택 항목이 버튼 항목일 경우
                options.on('click', function () {
                    const parentView = $(this).closest('.details-view');
                    const parentBtn = parentView.prev();
                    const parentBtnTxt = parentBtn.find('em');
                    const initTxt = $(this).text();
                    const selectClass = $(this).closest('.select-details-item');

                    // 단일 선택
                    if (!parentView.hasClass('multiple')) {
                        options.removeClass('selected'); // 모든 option selected 제거
                        parentBtnTxt.text(initTxt); // 선택된 텍스트 em에 init
                    }

                    // 다중/단일 공통
                    if (!$(this).hasClass('selected')) {
                        $(this).addClass('selected');
                    } else {
                        $(this).removeClass('selected');
                    }

                    // 다중 - 선택하는 항목 갯수 타이틀 em에 init
                    if (parentView.hasClass('multiple')) {
                        const selectCnt = parentView.find('.selected').length;
                        let txt;

                        if (selectCnt === parentView.find('.option').length) {
                            txt = '전체';
                        } else if (selectCnt === 0) {
                            txt = '';
                        } else if (parentView.find('.option.no-choice').hasClass('selected')) {
                            txt = '선택 안함';
                        } else {
                            txt = `${selectCnt}개`;
                        }
                        parentBtnTxt.text(txt);
                    }

                    // '보안서비스'에서는 문 개수를 센 후 계산되어야 하기 때문에 ajax 안타도록 처리
                    if (!selectClass.hasClass('security')) {
                        calculateEstimate();
                    }
                });
            }
            if (ranges) {
                // 선택 항목이 개수 선택일 경우
                const btns = ranges.find('button');
                btns.on('click', function () {
                    const inp = $(this).siblings('input[type=number]');
                    const maxVal = inp.data('maxValue');
                    const parentView = $(this).closest('.details-view');
                    const parentBtn = parentView.prev();
                    const parentBtnTxt = parentBtn.find('em');

                    let val = inp.val();
                    let txt;

                    if ($(this).hasClass('increase')) {
                        // 증가 버튼
                        val++;
                    } else if ($(this).hasClass('decrease')) {
                        // 감소 버튼
                        if (val > 1) val--;
                    }

                    if (val <= 1) {
                        // val이 1 이하일 경우
                        inp.prev().attr('disabled', 'disabled'); // minusBtn disabled
                        inp.removeClass('text-blue'); // .text-blue 제거
                        inp.next().removeAttr('disabled');
                    } else {
                        // 1 이상일 경우
                        inp.prev().removeAttr('disabled'); // disabled 해제
                        inp.addClass('text-blue'); // .text-blue 추가

                        // 최대값 설정되어있는 경우 [data-max-value]
                        if (val == maxVal) {
                            inp.next().attr('disabled', 'disabled');
                        } else {
                            inp.next().removeAttr('disabled');
                        }
                    }
                    txt = val; // em에 init할 텍스트 추출
                    inp.val(val);
                    parentBtnTxt.text(txt);
                    calculateEstimate();
                });
            }
        });

        const payment = $('.estimate-indicator-details .select-result p');
        const submitBtn = $('.estimate-indicator-details .button-submit');

        let drInpVal;
        let cctvInpVal;
        let noDoorLock = false;

        // 20240809 클릭 이벤트 추가
        $('.select-details-item').each(function () {
            // 공간 유형 선택
            if ($(this).hasClass('space')) {
                const placeWrap = $('.select-details-item.place');
                for (let i = 0; i < $(this).find('.option').length; i++) {
                    $(this)
                        .find('.option')
                        .eq(i)
                        .on('click', function () {
                            // placeWrap.find('.details-view .option').hide();
                            if (i == 0) {
                                // 상업용
                                placeWrap.find('.details-view').removeClass('household').addClass('commercial');
                            } else {
                                // 가정용
                                placeWrap.find('.details-view').removeClass('commercial').addClass('household');
                            }

                            const text = $(this).find('span').text();

                            disableSelect('.security'); // 보안서비스 비활성화

                            spacePlaceReset();

                            $('.sr-pricing').addClass('pr-dimmed'); // dim 처리
                            $('.cctv-item').removeClass('show');
                            $('.cctv-wrap').removeClass('active');
                            $('.door-lock-item').removeClass('show');
                            if (text.includes('상업용')) {
                                spaceTypeClickFn('commercial');
                            } else if (text.includes('가정용')) {
                                spaceTypeClickFn('home');
                            }
                            $('.door-count').find('.details-view input[type="number"]').val(0);
                            calculateEstimate();
                        });
                }
            }

            // 보안서비스
            if ($(this).hasClass('security')) {
                // 선택 시 예상금액 active
                $(this)
                    .find('.option')
                    .on('click', function () {
                        var selectedButton = $('.place').find('.details-view .option.selected');
                        var dataScreenTarget = selectedButton.attr('data-screen-target');
                        var prName = dataScreenTarget.split('-')[0]; // 첫번째 문자 추출
                        var screenNumber = dataScreenTarget.split('-')[1]; // 가운데 숫자 추출
                        var stepNumber = dataScreenTarget.split('-', [2]); // 마지막 숫자 추출

                        payment.addClass('calculated');
                        submitBtn.removeAttr('disabled');

                        // 공동주택일 경우 보안서비스에서 출동경비 선택 안하면 도어락 미노출
                        if ($('.sr-pricing').hasClass('pr-villa') && $(this).hasClass('dispatch')) {
                            noDoorLock = false;
                        }

                        var spanText = $(this).find('span').text();

                        // 보안서비스 - '출동경비, 둘 다' 버튼 일 경우
                        if (spanText === '출동경비' || spanText === '출동경비+CCTV') {
                            //CCTV 선택값 초기화
                            $('.cctv-item').removeClass('show');
                            $('.cctv-wrap').removeClass('active');

                            // 도어락 초기화
                            $('.door-lock-item').removeClass('show');
                            $('.door-item').not(':first').removeClass('show');
                            $('.door-count').find('.details-view input[type="number"]').val(1);

                            $(`.showroom-screen${screenNumber}-wrap .showroom-step2-wrap`)
                                .find('.door-item')
                                .first()
                                .addClass('show');

                            securityReset();

                            pricingEnable('.door-count'); // 출입문개수 활성화

                            // 출입문 개수 표시
                            $('.door-count em').text($('.door-count').find('.spinner input[type="number"]').val());

                            // 문 개수를 센 후 ajax 타도록 호출
                            calculateEstimate();
                        } else if (spanText === 'CCTV') {
                            //CCTV 선택값 초기화
                            $('.cctv-item').removeClass('show');
                            $('.cctv-wrap').removeClass('active');

                            $(`.showroom-screen${screenNumber}-wrap .showroom-step2-wrap`)
                                .find('.door-item')
                                .first()
                                .addClass('show');

                            // 출입문 개수 초기화 및 개수에 따른 좌측화면 문 제거
                            $('.door-count').find('.details-view input[type="number"]').val(1);
                            $('.door-item').removeClass('show');

                            securityReset();

                            pricingEnable('.cctv-type'); // CCTV타입 활성화

                            // 문 개수를 센 후 ajax 타도록 호출
                            calculateEstimate();
                        }
                    });
            }

            // 출입문 개수
            if ($(this).hasClass('door-count')) {
                const drInp = $(this).find('.spinner input[type=number]');
                const drBtns = $(this).find('.spinner button');
                const drDelBtn = $(this).find('.details-btn');

                drDelBtn.on('click', function () {
                    for (let i = 0; i < drInp.data('maxValue') + 1; i++) {
                        if (drInp.val() == i) {
                            for (let v = 1; v <= drInp.val(); v++) {
                                setScreenStep('', scrN, i);
                                $(`.showroom-screen${scrN}-wrap .showroom-step${i}-wrap`)
                                    .find('.door-area .door-item')
                                    .addClass('show');
                            }
                            drInpVal = i;
                        } else if (drInp.val() == 0) {
                            // 출입문 개수 0일 경우 문 모두 미노출
                            $(`.showroom-screen${scrN}-wrap .showroom-step-wrap`).removeClass('active');
                        }
                    }
                    pricingEnable('.access'); //출입방식 활성화
                });
                drBtns.on('click', function () {
                    // 20240808 jypark
                    // 초기화
                    $('.door-lock-item').removeClass('show');
                    $('.cctv-item').removeClass('show');
                    $('.cctv-wrap').removeClass('active');
                    $('.access em').text('');
                    $('.access').removeClass('done');
                    $('.access .option').removeClass('selected');
                    disableSelect('.cctv-type');
                    disableSelect('.cctv-count');
                    disableSelect('.extra-service');

                    for (let i = 0; i < drInp.data('maxValue') + 1; i++) {
                        if (drInp.val() == i) {
                            for (let v = 1; v <= drInp.val(); v++) {
                                setScreenStep('', scrN, i);
                                $(`.showroom-screen${scrN}-wrap .showroom-step${i}-wrap`)
                                    .find('.door-area .door-item')
                                    .addClass('show');
                            }
                            drInpVal = i;
                        } else if (drInp.val() == 0) {
                            // 출입문 개수 0일 경우 문 모두 미노출
                            $(`.showroom-screen${scrN}-wrap .showroom-step-wrap`).removeClass('active');
                        }
                    }
                });
            }

            // 출입 방식 (20240807 jypark 수정)
            if ($(this).hasClass('access')) {
                $(this)
                    .find('.option')
                    .on('click', function () {
                        const doorLockItems = $('.door-wrap .door-lock-item > i');

                        // 보안서비스가 출동경비일 때
                        if ($('.only').hasClass('selected')) {
                            pricingEnable('.extra-service'); // 부가서비스 활성화
                            // 아닐 때
                        } else {
                            pricingEnable('.cctv-type'); // CCTV 활성화
                        }
                        // 도어, 도어락 노출
                        // 출입문 개수에 따라 도어락 개수 정해지고 노출
                        if (noDoorLock == false && $('.select-details-item.access .option.selected').length > 0) {
                            $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                                .find('.door-item.show')
                                .next()
                                .addClass('show');
                        } else {
                            $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                                .find('.door-item.show')
                                .next()
                                .removeClass('show');
                        }

                        // 지문, 얼굴, 카드 선택시 각각의 이미지 노출
                        if ($(this).parent('.details-view').find('.selected').length) {
                            if ($(this).hasClass('selected')) {
                                // 선택된 버튼이 '지문'일 경우
                                if ($(this).hasClass('opt-finger')) {
                                    doorLockItems.removeClass();
                                    doorLockItems.addClass('finger'); // 좌측화면에 '지문 리더기' 이미지 노출
                                    optArr.push('finger');
                                    // 선택된 버튼이 '얼굴'일 경우
                                } else if ($(this).hasClass('opt-face')) {
                                    doorLockItems.removeClass();
                                    doorLockItems.addClass('face'); // 좌측화면에 '얼굴 리더기' 이미지 노출
                                    optArr.push('face');
                                    // 선택된 버튼이 '세콤 카드'일 경우
                                } else if ($(this).hasClass('opt-card')) {
                                    doorLockItems.removeClass();
                                    doorLockItems.addClass('card'); // 좌측화면에 '카드 리더기' 이미지 노출
                                    optArr.push('card');
                                    // 선택된 버튼이 '모바일 카드'일 경우
                                } else {
                                    if (optArr.length == 0) doorLockItems.addClass('card'); // 좌측 화면에 '카드 리더기' 노출
                                }
                            } else {
                                doorLockItems.removeClass();
                                if ($(this).hasClass('opt-finger')) {
                                    optArr = optArr.filter(element => element != 'finger');
                                } else if ($(this).hasClass('opt-face')) {
                                    optArr = optArr.filter(element => element != 'face');
                                } else if ($(this).hasClass('opt-card')) {
                                    optArr = optArr.filter(element => element != 'card');
                                }
                                doorLockItems.addClass(optArr.length == 0 ? 'card' : optArr[optArr.length - 1]);
                            }
                            // 선택된 버튼이 없을 경우
                        } else {
                            optArr = [];
                            $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                                .find('.door-item.show')
                                .next()
                                .removeClass('show');
                        }
                    });
            }

            // cctv 타입
            if ($(this).hasClass('cctv-type')) {
                $(this)
                    .find('.option')
                    .on('click', function () {
                        let cctvType;

                        // 클라우드형이면 .cctv-wrap 에 .case-2 추가
                        if ($(this).hasClass('type-cloud')) {
                            $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                                .find('.cctv-wrap')
                                .addClass('case-2');

                            // cctv max 2 되어야 함
                            $('.estimate-indicator .select-details-item.cctv-count input').attr('data-max-value', 2);
                        } else {
                            $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                                .find('.cctv-wrap')
                                .removeClass('case-2');

                            // cctv max 4 되어야 함
                            $('.estimate-indicator .select-details-item.cctv-count input').attr('data-max-value', 4);
                        }

                        $('.cctv-item-2, .cctv-item-3, .cctv-item-4').removeClass('show');

                        // '일반형' 클릭시 cctyType = CCTV
                        if ($(this).data('type') === 'CCTV') {
                            cctvType = 'CCTV';
                        }
                        // '클라우드형' 클릭시 cctyType = CCTV
                        if ($(this).data('type') === 'CLOUDCCTV') {
                            cctvType = 'CLOUDCCTV';
                        }
                        pricingEnable('.cctv-count');
                        updateMaxValue(cctvType);
                        countEventDefault('.cctv-count');
                        // CCTV 개수 표시
                        $('.cctv-count em').text($('.cctv-count').find('.spinner input[type="number"]').val());
                    });
            }

            // cctv 개수
            if ($(this).hasClass('cctv-count')) {
                const cctvNumInit = $(this).find('.details-btn  em');
                const cctvInp = $(this).find('input[type=number]');
                const cctvCntBtns = $(this).find('.spinner button');
                const cctvDelBtn = $('.cctv-wrap .cctv-item button');
                const cctvItem = $('.cctv-wrap .cctv-item');

                const addShow = () => {
                    for (let v = 1; v <= cctvInpVal; v++) {
                        $(`.cctv-wrap .cctv-item-${v}`).addClass('show');
                    }
                };
                // cctv 프레임 노출
                $(this)
                    .find('.details-btn')
                    .on('click', function () {
                        var selectedButton = $('.place').find('.details-view .option.selected');
                        var dataScreenTarget = selectedButton.attr('data-screen-target');
                        var prName = dataScreenTarget.split('-')[0]; // 첫번째 문자 추출
                        var screenNumber = dataScreenTarget.split('-')[1]; // 가운데 숫자 추출

                        // 전부 제거하고 차례대로 show
                        $('.cctv-wrap .cctv-item').removeClass('show');
                        // cctv 프레임 노출되고
                        $(`.showroom-screen${scrN}-wrap .showroom-step${drInpVal}-wrap`)
                            .find('.cctv-wrap')
                            .addClass('active');

                        cctvInpVal = cctvInp.val();
                        addShow();

                        // 보안서비스가 'CCTV'일 경우
                        if ($('.option:has(span:contains("CCTV"))').hasClass('selected')) {
                            if (selectedButton.length > 0) {
                                setScreenStep(`pr-${prName}`, screenNumber, 2);
                                $('.cctv-wrap').addClass('active');
                                $('.cctv-item-1').addClass('show');
                            }
                        }
                        // 보안서비스가 '둘다'일 때
                        if ($('#btn-both').hasClass('selected')) {
                            pricingEnable('.extra-service');
                            $('.cctv-wrap').addClass('active');
                            $('.cctv-item-1').addClass('show');
                        }
                    });

                // cctv 개수 +/- 버튼 클릭 시
                cctvCntBtns.on('click', function () {
                    for (let i = 0; i < cctvInp.data('maxValue') + 1; i++) {
                        if (cctvInp.val() == i) {
                            cctvInpVal = i;
                        }
                    }
                    $('.cctv-wrap .cctv-item').removeClass('show');
                    addShow();
                });

                // cctv 아이콘 삭제 버튼 클릭 시
                cctvDelBtn.on('click', function (event) {
                    event.stopPropagation(); // 이벤트 전파 방지
                    if (cctvInpVal > 1 && $(this).closest('.cctv-item').hasClass('show')) {
                        cctvInpVal--;
                        // .cctv-item에서 .show 제거
                        $(this).closest('.cctv-item').removeClass('show');

                        cctvNumInit.text(cctvInpVal > 0 ? cctvInpVal : ''); // 0보다 크면 cctvInpVal이 init되고 아니면 null
                        cctvInp.val(cctvInpVal);

                        if (cctvInpVal == 1) {
                            // 1개일 때 감소버튼 .disabled, 증가버튼 disabled 해제
                            $('#cctv-decrease').attr('disabled', 'disabled');
                            $('#cctv-increase').removeAttr('disabled');
                            cctvInp.removeClass('text-blue');
                        } else if (cctvInpVal > 0 && cctvInpVal < cctvInp.data('maxValue')) {
                            cctvCntBtns.removeAttr('disabled');
                        }
                    }
                    calculateEstimate();
                });

                // 좌측 cctv 버튼 클릭 시	20240813 jypark 추가
                cctvItem.on('click', function () {
                    if (!$(this).hasClass('show')) {
                        $(this).addClass('show');
                        cctvInpVal = cctvInp.val();
                        cctvInpVal++;
                        cctvInp.val(cctvInpVal);
                        cctvNumInit.text(cctvInpVal > 0 ? cctvInpVal : '');

                        if (cctvInpVal == 1) {
                            // 1개일 때 감소버튼 .disabled, 증가버튼 disabled 해제
                            $('#cctv-decrease').attr('disabled', 'disabled');
                            $('#cctv-increase').removeAttr('disabled');
                            cctvInp.removeClass('text-blue');
                        } else if (cctvInpVal > 0 && cctvInpVal < cctvInp.data('maxValue')) {
                            cctvCntBtns.removeAttr('disabled');
                        }

                        if ($('.type-normal').hasClass('selected')) {
                            // cctv타입이 일반형일 때
                            if (cctvInpVal == 4) {
                                $('#cctv-decrease').removeAttr('disabled');
                                $('#cctv-increase').attr('disabled', 'disabled');
                            }
                        } else if ($('.type-cloud').hasClass('selected')) {
                            // cctv타입이 클라우드형일 때
                            if (cctvInpVal == 2) {
                                $('#cctv-decrease').removeAttr('disabled');
                                $('#cctv-increase').attr('disabled', 'disabled');
                            }
                        }
                    }
                    calculateEstimate();
                });
            }
        });
        window.setScreenStep = setScreenStep;
    }

    // 부가서비스 - '선택 안함' 버튼 클릭
    $('.no-choice').on('click', function () {
        // '선택 안함' 버튼을 제외한 다른 버튼 selected 클래스 제거
        $('.extra-service').find('.details-view .option').not(this).removeClass('selected');
    });
    // 부가서비스 - '선택 안함' 버튼을 제외한 다른 버튼 클릭
    $('.extra-service')
        .find('.details-view .option')
        .not($('.no-choice'))
        .on('click', function () {
            // '선택 안함' 버튼의 selected 클래스 제거
            $('.no-choice').removeClass('selected');
        });
    // 초기화 버튼
    $('.button-reset').on('click', () => {
        $('.door-count').find('.details-view input[type="number"]').val(0);
        //setScreenStep(`pr-${gLocation}`, 0, 0);
        $('.cctv-item-2, .cctv-item-3, .cctv-item-4').removeClass('show');
        // 카운트 조정 이벤트 활성화
        countEventDefault('.door-count'); // 출입문개수
        countEventDefault('.cctv-count'); // CCTV개수

        // 공간유형 초기화
        $('.space').find('.details-view .option').removeClass('selected');
        $('.space').removeClass('done open');
        $('.space').find('.details-view').css('display', 'none');

        // 공간유형 텍스트 초기화
        $('.space')
            .find('.details-btn > p')
            .each(function () {
                var originalText = $(this).data('originalText');
                $(this).text(originalText);
            });

        // 장소 초기화
        disableSelect('.place');
        // 보안서비스 초기화
        disableSelect('.security');
        // 출입문개수 초기화
        disableCountAdjustment('.door-count');
        // 출입방식 초기화
        disableSelect('.access');
        // CCTV타입 초기화
        disableSelect('.cctv-type');
        // CCTV개수 초기화
        disableCountAdjustment('.cctv-count');
        // 부가서비스 초기화
        disableSelect('.extra-service');

        // 에상금액 초기화
        $('.select-result p').text('예상금액');
        $('.select-result p').removeClass('calculated');

        // 견적 문의하기 버튼 비활성화
        $('.button-submit').attr('disabled', 'disabled');

        // CCTV 좌측화면 초기화
        $('.cctv-item').removeClass('show');
        $('.cctv-wrap').removeClass('active');

        // 출입방식 좌측화면 초기화
        $('.door-lock-item').removeClass('show');

        // 출입문 좌측화면 초기화
        $('.door-item').removeClass('show');

        // 좌측화면 dim 처리
        $('.sr-pricing').addClass('pr-dimmed');

        // cctv alert 문구 초기화
        $('.bottom-gray-tooltip-cctv').removeClass('active');
    });

    // '장소' 선택 옵션 보여주기 함수
    function showPlaceOptions(type) {
        // 모든 옵션 숨기기
        $('.place').find('.details-view .option').hide();

        if (type === 'commercial') {
            // 상업용 관련 장소 보이기
            $('.option:has(span:contains("사무실"))').show();
            $('.option:has(span:contains("매장"))').show();
            $('.option:has(span:contains("공장"))').show();
            $('.option:has(span:contains("창고"))').show();
        } else if (type === 'home') {
            // 가정용 관련 장소 보이기
            $('.option:has(span:contains("단독주택"))').show();
            $('.option:has(span:contains("공동주택"))').show();
        }
    }

    // '선택' 비활성화 함수
    function disableSelect(selector) {
        $(selector).addClass('disabled').removeClass('done open');
        $(`${selector} em`).text('');
        $(`${selector} .option`).removeClass('selected');
        $(selector).find('.details-view').css('display', 'none');
        // 텍스트 초기화
        $(selector)
            .find('.details-btn > p')
            .each(function () {
                var originalText = $(this).data('originalText');
                $(this).text(originalText);
            });
    }

    // '카운트 조정' 비활성화 함수
    function disableCountAdjustment(selector) {
        $(selector).addClass('disabled').removeClass('done open');
        $(selector).find('.spinner input[type="number"]').val(1);
        $(selector).find('.spinner .decrease').prop('disabled', true);
        $(selector).find('.spinner .increase').prop('disabled', false);
        $(`${selector} em`).text('');
        $(`${selector} .option`).removeClass('selected');
        $(selector).find('.details-view').css('display', 'none');
        // 텍스트 초기화
        $(selector)
            .find('.details-btn > p')
            .each(function () {
                var originalText = $(this).data('originalText');
                $(this).text(originalText);
            });
    }

    // 활성화 처리 함수
    function pricingEnable(cn) {
        $('.disabled').each(function () {
            // disabled 클래스를 제거합니다.
            $(cn).removeClass('disabled');
        });
    }

    // 공간유형 or 장소에 따른 초기화 함수
    function spacePlaceReset() {
        // 좌측화면 초기화
        disableSelect('.door-count'); // 출입문 개수 비활성화
        disableSelect('.access'); // 출입방식 비활성화
        disableSelect('.cctv-type'); // CCTV타입 비활성화
        disableSelect('.cctv-count'); // CCTV개수 비활성화
        disableSelect('.extra-service'); // 부가서비스 비활성화

        // 출입문 개수 초기화 및 개수에 따른 좌측화면 문 제거
        $('.door-count').find('.details-view input[type="number"]').val(1);
        $('.door-item').removeClass('show');
    }

    // '카운트 조정' 질문이 if 비활성화이면 default값 0, 비활성화가 아니라면 default값 1
    function countEventDefault(cn) {
        if ($(cn).hasClass('disabled')) {
            $(cn).find('.spinner input[type="number"]').val(0);
        } else if (!$(cn).hasClass('disabled')) {
            $(cn).find('.spinner input[type="number"]').val(1);
        }
    }

    // 공간유형에 따른 이벤트 함수
    function spaceTypeClickFn(type) {
        // 기존 선택 제거
        $('.place').find('.details-view .option').removeClass('selected');
        $('.place em').text('');
        $('.place').removeClass('done');
        // 공간유형에 따른 작업수행
        pricingEnable('.place');
        showPlaceOptions(type);
    }

    // CCTV 타입에 따른 개수제한 함수
    function updateMaxValue(cctvType) {
        if (cctvType === 'CCTV') {
            $('.cctv-wrap').removeClass('case-2'); // 옵션 4개
        }
        if (cctvType === 'CLOUDCCTV') {
            $('.cctv-wrap').addClass('case-2'); // 옵션 2개
        }

        const maxValue = cctvType === 'CCTV' ? 999 : cctvType === 'CLOUDCCTV' ? 2 : 0; // jypark 2024.09.11 cctv 개수 제한 (4 => 999)
        $('.cctv-count').find('.spinner input[type="number"]').data('max-value', maxValue);
        $('.cctv-count').find('.spinner input[type="number"]').val(1);
        $('.cctv-count').removeClass('done');
        $('.cctv-count').find('.spinner .decrease').prop('disabled', true); // 감소버튼 비활성화
        $('.cctv-count').find('.spinner .increase').prop('disabled', false); // 증가버튼 활성화
    }

    //

    // 보안서비스에 따른 초기화 함수
    function securityReset() {
        // 좌측화면 초기화
        $('.cctv-item-2, .cctv-item-3, .cctv-item-4').removeClass('show');
        disableCountAdjustment('.door-count');
        disableCountAdjustment('.cctv-count');
        disableSelect('.access');
        disableSelect('.cctv-type');
        disableSelect('.extra-service');
    }

    // 예상금액 계산 함수 (API 호출)
    function calculateEstimate() {
        if (gLocation) {
            // 출입방식 가져오기
            var selectedAccessTypes = [];
            $('.access')
                .find('.details-view .option.selected')
                .each(function () {
                    selectedAccessTypes.push($(this).data('type'));
                });
            var accessTy = selectedAccessTypes.join(',');

            // 부가서비스 가져오기
            var selectedAdditionalServices = [];
            $('.extra-service')
                .find('.details-view .option.selected')
                .each(function () {
                    selectedAdditionalServices.push($(this).data('type'));
                });
            var additional = selectedAdditionalServices.join(',');

            // Data
            var estimateData = {
                type: $('.space').find('.details-view .selected').data('type'), // 공간유형 [HOME / AWAY]
                door: parseInt($('.door-count input').val()), // 출입문 개수
                accessTy: accessTy, // 출입방식
                cctvTy: $('.cctv-type').find('.details-view .selected').data('type'), // CCTV 타입 [CCTV / CLOUDCCTV]
                cctv: parseInt($('.cctv-count input').val()), // CCTV 개수
                additional: additional, // 부가서비스
            };

            // Ajax 호출
            $.ajax({
                type: 'POST',
                url: '/showroom/calculate',
                contentType: 'application/json;',
                data: JSON.stringify(estimateData),
                success: function (response) {
                    var minAmtFormatted = (response.minAmt * 1000).toLocaleString();
                    var maxAmtFormatted = (response.maxAmt * 1000).toLocaleString();
                    $('.select-result p').text('약 ' + minAmtFormatted + '~' + maxAmtFormatted + '원');
                    $('.estimate-indicator-details .select-result p').addClass('calculated');
                },
                error: function () {
                    alert('처리 중 오류가 발생하였습니다.');
                },
            });
        }
    }
    // 맞춤 견적 문의하기 버튼 클릭 함수
    $('.estimate-indicator-details .button-submit').on('click', function () {
        inquiry();
    });

    // 맞춤 견적 문의하기 함수
    function inquiry() {
        $.layer({
            url: '/showroom/inquiry',
        });

        // 쿠키삭제
        $.cookie.remove('inquiryShare');
    }

    setEstimate();

    // 에스원 GNB 보기
    const body = $('body');

    const woShowroomIntro = $('.wrap-online-showroom');
    const headerHoverView = woShowroomIntro.find('.header-hover-view');
    headerHoverView.on('mouseover', function () {
        const thisB = $(this);
        thisB.closest('.wrap-online-showroom').addClass('header-gnb-view');
    });

    const headerWrap = woShowroomIntro.find('.header_wrap');
    headerWrap.on('mouseleave', function () {
        const thisB = $(this);
        thisB.closest('.wrap-online-showroom').removeClass('header-gnb-view');
    });

    body.on('click', function (e) {
        // 클릭하거나 호버한 요소가 headerWrap 안에 있지 않은 경우에만 클래스 제거
        if (!headerWrap.is(e.target) && headerWrap.has(e.target).length === 0) {
            woShowroomIntro.removeClass('header-gnb-view');
        }
    });

    //--------------------
    // cctvType 변경 시 input 태그를 readonly로 설정
    function checkCctvType() {
        let cctvType = $('.cctv-type').find('.details-view .selected').data('type');

        if (cctvType === 'CLOUDCCTV') {
            // cctvType이 CLOUDCCTV인 경우 input[type="number"]를 읽기 전용으로 설정
            $('input[type="number"]').attr('readonly', true);
        } else {
            // 다른 타입일 경우 읽기 전용 해제
            $('input[type="number"]').removeAttr('readonly');
        }
    }

    // cctvType이 선택될 때마다 확인
    $('.cctv-type').on('click', '.option', function () {
        checkCctvType(); // cctvType 변경 시 실행
    });

    //CCTV 개수 클릭 시 하단 문구
    /*$('.select-details-item').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('cctv-count')) {
            $('.bottom-gray-tooltip-cctv').addClass('active');
        } else {
            $('.bottom-gray-tooltip-cctv').removeClass('active');
        }
    });*/

    // disclaimer 클릭 시 하단 문구 240918
    $('.cctv-type .details-view button').on('click', function () {
        const thisB = $(this);
        if (thisB.hasClass('type-normal')) {
            $('.bottom-disclaimer-txt.cctv').addClass('active');
        } else {
            $('.bottom-disclaimer-txt.cctv').removeClass('active');
        }
        if (thisB.hasClass('type-cloud')) {
            $('.bottom-disclaimer-txt.cloud').addClass('active');
        } else {
            $('.bottom-disclaimer-txt.cloud').removeClass('active');
        }
        $('.bottom-disclaimer-txt.door').removeClass('active');
    });
    $('.door-count').on('click', function () {
        $('.bottom-disclaimer-txt.door').addClass('active');
        $('.bottom-disclaimer-txt.cctv').removeClass('active');
        $('.bottom-disclaimer-txt.cloud').removeClass('active');
    });
    $('.security .details-view button').on('click', function () {
        $('.bottom-disclaimer-txt.cctv').removeClass('active');
        $('.bottom-disclaimer-txt.cloud').removeClass('active');
        $('.bottom-disclaimer-txt.door').removeClass('active');
    });

    $('input[type="number"]').on('input', function () {
        let value = $(this).val();

        // 값이 0일 경우 1로 변경
        if (value === '0') {
            $(this).val(1);
            value = 1;
        }

        // cctvType을 확인하여 CLOUDCCTV일 경우에는 동작하지 않음
        let cctvType = $('.cctv-type').find('.details-view .selected').data('type');

        // 출입문 개수나 CCTV 개수에 대한 처리
        if (value >= 999 || (cctvType === 'CLOUDCCTV' && value >= 2)) {
            // CCTV 개수가 최대값에 도달하면 증가 버튼을 비활성화
            $('.door-count').find('.spinner .increase').prop('disabled', true);
            $('.cctv-count').find('.spinner .increase').prop('disabled', true);
            $('.door-count').find('.spinner .decrease').prop('disabled', false);
            $('.cctv-count').find('.spinner .decrease').prop('disabled', false);
            $(this).val(value > 999 ? 999 : value); // 999로 고정
        } else {
            // 최대값 미달 시 증가 버튼 활성화
            $('.door-count').find('.spinner .increase').prop('disabled', false);
            $('.cctv-count').find('.spinner .increase').prop('disabled', false);
            $('.door-count').find('.spinner .decrease').prop('disabled', true);
            $('.cctv-count').find('.spinner .decrease').prop('disabled', true);
        }

        if (cctvType === 'CLOUDCCTV') {
            return; // CLOUDCCTV일 때는 동작하지 않음
        }

        // 입력 값이 999를 넘을 경우 999로 설정
        if (value > 999) {
            value = 999;
            $(this).val(value);
        }

        // 입력이 완전히 지워진 후(null 또는 빈 문자열일 경우)만 1로 설정
        if (value === '') {
            return; // 입력을 지울 때는 값을 1로 설정하지 않음
        }

        // 입력 값이 변경될 때마다 calculateEstimate 함수 호출
        calculateEstimate(value);

        // 'em' 태그에 입력된 값을 넣어줍니다.
        $(this).closest('.select-details-item').find('em').text(value);
    });

    // 포커스가 벗어났을 때 빈 값이면 1로 설정
    $('input[type="number"]').on('blur', function () {
        let value = $(this).val();

        // 값이 빈 문자열일 경우 1로 설정
        if (value === '') {
            $(this).val(1);
        }
    });
}
