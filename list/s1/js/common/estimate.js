var estimate = {
    parentLayerId: '#estimateLayer',
    contentClass: '.modal_cont',
    process: true,
    init(elem, shareKey) {
        var _this = this;
        _this.process = true;
        $.layer({
            layerId: 'estimateLayer',
            url: '/estimate/popup',
            data: { shareKey: shareKey || '' },
            type: 'POST',
        });
        returnFocusElem = elem;
    },
    close() {
        ui.layerOpen.close('estimateLayer');
    },
    current: {
        // 현재 선택값
        step: 1,
        type() {
            var _this = estimate;
            return validate.getValue($(_this.contentClass).find('input[name=type]')).toLowerCase() || '';
        },
        secService() {
            var _this = estimate;
            return validate.getValue($(_this.contentClass).find('input[name=secService]')).toLowerCase() || 'all';
        },
    },
    step: {
        // 보안서비스 CASE별 질문순서
        sec: [1, 2, 3, 4, 5, 8], // 보안서비스-출동경비는 CCTV X
        cctv: [1, 2, 3, 6, 7], // 보안서비스-CCTV는 출동경비 X, 부가서비스X
        all: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    prev() {
        var _this = this;
        var currStepArr = _this.step[_this.current.secService()]; // 현재 선택한 보안서비스의 질문순서 확인
        var currIdx = currStepArr.indexOf(_this.current.step); // 질문순서 중 현재 순서가 몇번째 index인지 확인

        if (currIdx > 0) {
            _this.action.move(currStepArr[currIdx - 1]);
        }
    },
    next() {
        var _this = this;
        var currStepArr = _this.step[_this.current.secService()]; // 현재 선택한 보안서비스의 질문순서 확인
        var currIdx = currStepArr.indexOf(_this.current.step); // 질문순서 중 현재 순서가 몇번째 index인지 확인

        if (currIdx <= currStepArr.length - 1) {
            // estimate.validate.step{n} 질문별 유효성체크
            if (new Function('return estimate.validate.step' + currStepArr[currIdx] + '();')()) {
                // estimate.action.step{n} 질문별 별도 로직이 있는 경우 호출,
                // 별도 로직 없으면, 기본 이동 함수 estimate.action.move 호출
                if (
                    new Function('return typeof estimate.action.step' + currStepArr[currIdx + 1] + ';')() === 'function'
                ) {
                    new Function('estimate.action.step' + currStepArr[currIdx + 1] + '();')();
                } else if (currIdx < currStepArr.length - 1) {
                    _this.action.move(currStepArr[currIdx + 1]);
                } else {
                    _this.action.result();
                }
            }
        }
    },
    validate: {
        // 질문순서별 답변 유효성 체크
        step1() {
            // 유형
            var _this = estimate;
            return validate.isNotBlank($(_this.contentClass).find('input[name=type]'), true); // 유형 선택 여부
        },
        step2() {
            // 장소
            var _this = estimate;
            var $obj = $(_this.contentClass).find('input[name=' + _this.current.type() + 'Ty]');

            if (validate.isNotBlank($obj, true)) {
                // 장소 선택 여부
                $('#place').val(validate.getValue($obj));
                return true;
            }
            return false;
        },
        step3() {
            // 보안서비스
            var _this = estimate;
            return validate.isNotBlank($(_this.contentClass).find('input[name=secService]'), true); // 보안서비스 선택 여부
        },
        step4() {
            // 출입문 개수
            var _this = estimate;
            return (
                validate.getValue($(_this.contentClass).find('input[name=secDoor]')) > 0 &&
                validate.getValue($(_this.contentClass).find('input[name=secDoor]')) <= 999
            );
        },
        step5() {
            // 출입방식
            var _this = estimate;
            return validate.isNotBlank($(_this.contentClass).find('input[name=accessTy]'), true); // 출입방식 선택 여부
        },
        step6() {
            // CCTV 타입
            var _this = estimate;
            return validate.isNotBlank($(_this.contentClass).find('input[name=cctvTy]'), true); // CCTV 타입 선택 여부
        },
        step7() {
            // CCTV 개수
            var _this = estimate;
            return (
                validate.getValue($(_this.contentClass).find('input[name=cctv]')) > 0 &&
                validate.getValue($(_this.contentClass).find('input[name=cctv]')) <= 999
            );
        },
        step8() {
            // 부가서비스
            var _this = estimate;
            var type = _this.current.type() === 'store' ? 'business' : _this.current.type();
            var $obj = $(_this.contentClass).find('input[name=' + type + 'Additional]');
            if (validate.isNotBlank($obj, true)) {
                // 부가서비스 선택 여부
                var additional = validate.getValue($obj).toString();
                $('#additional').val(additional === 'NONE' ? '' : additional);
                return true;
            }
            return false;
        },
    },
    action: {
        move(step) {
            var _this = estimate;
            if (validate.isNotBlank(step)) {
                _this.current.step = step;

                $('#step' + step)
                    .siblings('div')
                    .hide();
                $('#step' + step)
                    .siblings('.btn_area')
                    .show();
                $('#step' + step).show();

                if (step == 4 || step == 7) {
                    $(contUi.btnCount.btnCountAnchor).off();
                    contUi.btnCount.init();
                }

                if (step === 1) {
                    $('#prevBtn').hide();
                } else {
                    $('#prevBtn').show();
                }

                if (step == 2) {
                    var selectObj = $('#step2').find('[id*=' + _this.current.type() + ']');
                    $(selectObj)
                        .find('input[name=' + _this.current.type() + 'Ty]')
                        .focus();
                } else if (step == 3) {
                    $('input[name=secService]').focus();
                } else if (step == 4) {
                    $('input[name=secDoor]').focus();
                } else if (step == 5) {
                    $('input[name=accessTy]').focus();
                } else if (step == 6) {
                    $('input[name=cctvTy]').focus();
                } else if (step == 7) {
                    $('input[name=cctv]').focus();
                } else if (step == 8) {
                    $('input[name=businessAdditional]').focus();
                }
            }
        },
        step2() {
            var _this = estimate;
            // 유형 선택지에 따라 화면 분기
            var selectObj = $('#step2').find('[id*=' + _this.current.type() + ']');
            $(selectObj).siblings('ul').hide(); // 모든 유형에 대한 화면 hide
            $(selectObj).show(); // 선택한 유형에 대한 장소 화면 show

            _this.action.move(2);
        },
        step7() {
            var _this = estimate;
            // 출입문 개수 초기화
            if (validate.getValue($(_this.contentClass).find('input[name=cctvTy]')) === 'CLOUDCCTV') {
                $('#cctvTit').hide();
                $('#cloudcctvTit, #cloudcctvTxt').show();
            } else {
                $('#cctvTit').show();
                $('#cloudcctvTit, #cloudcctvTxt').hide();
            }

            $('#step7').find('.btn_amount').siblings('input').val(1);
            $('#step7').find('.btn_amount.minus').attr('disabled', true);
            $('#step7').find('.btn_amount.plus').attr('disabled', false);
            _this.action.move(7);
        },
        step8() {
            var _this = estimate;
            // 유형 선택지에 따라 화면 분기
            var selectObj = $('#step8').find('[id*=' + _this.current.type() + ']');
            $(selectObj).siblings('ul').hide(); // 모든 유형에 대한 화면 hide
            $(selectObj).show(); // 선택한 유형에 대한 장소 화면 show

            _this.action.move(8);
        },
        lastPrev() {
            var _this = estimate;
            _this.process = true;
            _this.action.move(_this.current.step);
        },
        result() {
            // RESULT : 결과 화면
            var _this = estimate;
            var currStepArr = _this.step[_this.current.secService()]; // 현재 선택한 보안서비스의 질문순서 확인

            if (_this.process) {
                _this.process = false;

                var $result = $('#estimateResult');
                var $form = $('#estimateForm');

                $form.find('#type').val(validate.getValue($(_this.contentClass).find('input[name=type]')));
                $form.find('#secService').val(validate.getValue($(_this.contentClass).find('input[name=secService]')));
                $form.find('#secDoor').val(validate.getValue($(_this.contentClass).find('input[name=secDoor]')));
                $form.find('#accessTy').val(validate.getValue($(_this.contentClass).find('input[name=accessTy]')));
                $form.find('#cctvTy').val(validate.getValue($(_this.contentClass).find('input[name=cctvTy]')));
                $form.find('#cctv').val(validate.getValue($(_this.contentClass).find('input[name=cctv]')));

                $.htmlPostAjax({
                    url: '/estimate/process',
                    data: $form.serialize(),
                    async: false,
                    success(html) {
                        $result.empty().append(html).scrollTop(0);
                        $result.siblings('div').hide();
                        $result.show();
                    },
                });
            }
        },
        counsel() {
            estimate.action.log('counselYn', 'Y', function () {
                location.href = '/join/consult?key=' + $('#estimateShareKey').val();
            });
        },
        chat() {
            estimate.action.log('chatYn', 'Y', function () {
                happytalk.open();
                estimate.close();

                // 2021-10-10 접근성 관련 수정
                $('#ChatWindow').attr('tabindex', '0').focus();
            });
        },
        log(key, value, callback) {
            // 상담신청 or 채팅신청
            var param = new Object();
            param[key] = value || 'Y';
            param.seq = $('#estimateSeq').val();

            $.postSyncAjax({
                url: '/estimate/log',
                data: param,
                success() {
                    if (callback instanceof Function) {
                        callback();
                    }
                },
            });
        },
        shareResult(key) {
            // RESULT : 공유하기 URL을 통한 결과화면 노출
            var _this = estimate;
            var $result = $('#estimateResult');

            $.htmlPostAjax({
                url: '/estimate/share-result',
                data: { key },
                success(html) {
                    $result.empty().append(html).scrollTop(0);
                    $result.siblings('div').hide();
                    $result.show();
                },
            });
        },
        count(obj) {
            var num = isNaN($(obj).val()) ? 0 : Number($(obj).val());
            var min = Number($(obj).data('min') || 1);
            var max = Number($(obj).data('max') || 999);
            if ($('input[name=cctvTy]:checked').val() === 'CLOUDCCTV') {
                max = Number($(obj).data('cloud-max') || 2);
            }

            if (num <= min) {
                $(obj).val(min);
                $(obj).siblings('button.minus').prop('disabled', true);
                $(obj).siblings('button.plus').prop('disabled', false);
            } else if (num >= max) {
                $(obj).val(max);
                $(obj).siblings('button.plus').prop('disabled', true);
                $(obj).siblings('button.minus').prop('disabled', false);
            } else {
                $(obj).siblings('button.plus').prop('disabled', false);
                $(obj).siblings('button.minus').prop('disabled', false);
            }
        },
    },
};

$(function () {
    if ($.cookie.get('estimateShare') === 'Y') {
        estimate.init($.cookie.get('estimateShareKey'));

        // 쿠키삭제
        $.cookie.remove('estimateShare');
        $.cookie.remove('estimateShareKey');
    }

    $(document).on('click', '.btn_amount', function () {
        var btnCountType = $(this).attr('data-count-type');
        var $target = $(this).siblings('input');
        if (btnCountType === 'plus' && $target.attr('name') === 'cctv') {
            if (
                parseInt($target.val()) >= 2 &&
                validate.getValue($(estimate.contentClass).find('input[name=cctvTy]')) === 'CLOUDCCTV'
            ) {
                $target.val(2);
                $(this).attr('disabled', true);
            }
        }
    });

    $(document).on('click', 'input[name=businessAdditional]', function () {
        if ($(this).val() === 'NONE') {
            // 선택안함 클릭 시 나머지 체크해제
            $('input[name=businessAdditional]:not([value=NONE])').prop('checked', false);
        } else {
            $('input[name=businessAdditional][value=NONE]').prop('checked', false);
        }
    });
});
