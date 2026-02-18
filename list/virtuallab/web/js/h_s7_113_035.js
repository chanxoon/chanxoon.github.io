/* [고등1] > 물리학 */
// 모의실험으로 충돌 전후 운동량 보존 확인하기
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s7_113_035/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s7_113_035/2-act1_01.mp3'); // 활동1_01 오디오
const resultAudio = new Audio('../../media/h_s7_113_035/3-final_01.mp3'); // 정리하기 오디오
const audioGoal_pop = new Audio('../../media/h_s7_113_035/click.mp3'); // 활동목표 팝업

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
resultAudio.volume = 1;
audioGoal_pop.volume = 1;
let object1, object2, mass1Input, mass2Input;

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

        resultAudio.load();
        resultAudio.play();
        resultAudio.mute = true;
        resultAudio.pause();
        resultAudio.currentTime = 0;
        resultAudio.mute = false;

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
    let wConHsound = $('.click-sound');
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
            resultAudio.volume = 0;
            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio.volume = 1;
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

        // 가이드 모달 활성화
        $('.guide-balloon-tip-wrap1').addClass('active');
        $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

        // 1.5초 후 오디오 재생 (타이머 설정)
        setTimeout(function () {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1500);

        // 2초 가이드 인
        setTimeout(function () {
            $('.return-btn .dote-line').addClass('active');
            $('.start-area .dote-line').addClass('active');
            $('.controller-box .dote-line').addClass('active');
        }, 2000);

        // 12초 후 모달과 텍스트 비활성화 (타이머 설정)
        setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
        }, 12000);

        // 12초 가이드 아웃
        setTimeout(function () {
            $('.dote-line').removeClass('active');
            $('.return-btn button').hide();
            $('#overlay').hide();
        }, 12000);

        // 가이드 음성 재생 완료 후 정리하기 버튼 노출
        setTimeout(function () {
            $('.tab-list-basic').addClass('active');
        }, 14000);

        $('.tab-list-basic .button-tab').on('click', function () {
            const thisB = $(this);
            if (thisB.hasClass('active')) {
                thisB.removeClass('active');
                $('.modal-layer-activity-goals3').removeClass('active');
            } else {
                thisB.addClass('active');
                $('.modal-layer-activity-goals3').addClass('active');
                resultAudio.load();
                setTimeout(function () {
                    resultAudio.play();
                }, 1000);
            }
        });

        $('.modal-layer-activity-goals3 .button-close').on('click', function () {
            const thisB = $(this);
            thisB.closest('.modal-layer-activity-goals3').removeClass('active');
            $('.tab-list-basic .button-tab').removeClass('active');
            resultAudio.pause();
        });

        $(function () {
            $('.A-range').on('input', 'input[type="range"]', function (e) {
                var outputA = $('.A-range').find('.output')[0];
                outputA.value = e.currentTarget.value;
                outputA.value = (Math.round(e.currentTarget.value * 100) / 100).toFixed(2);
            });
            $('.B-range').on('input', 'input[type="range"]', function (e) {
                var outputB = $('.B-range').find('.output')[0];
                outputB.value = e.currentTarget.value;
                outputB.value = (Math.round(e.currentTarget.value * 100) / 100).toFixed(2);
            });
        });

        $(function () {
            var $eq = $('.eq'),
                eqWidth = $eq.width(),
                eqHeight = $eq.height(),
                eqBackgroundColor = $eq.css('background-color'),
                eqGradientColor1 = $eq.css('color'),
                eqGradientColor2 = $eq.css('border-color');

            function updateRangeOutput(range) {
                var currentRangeHeight = Number(range.val() / range.attr('max')) * eqWidth + 'px';
                return range.css(
                    'background',
                    '-webkit-linear-gradient(left, ' +
                        eqGradientColor1 +
                        ' 0, ' +
                        eqGradientColor2 +
                        ' ' +
                        currentRangeHeight +
                        ', ' +
                        eqBackgroundColor +
                        ' ' +
                        currentRangeHeight +
                        ', ' +
                        eqBackgroundColor +
                        ' ' +
                        eqHeight +
                        'px)',
                );
            }

            $eq.each(function () {
                updateRangeOutput($(this));
            });
            $eq.change(function () {
                updateRangeOutput($(this));
            });
            $eq.on('input change', function () {
                updateRangeOutput($(this));
            });
        });

        /*let zoomLevel = 1;
        let zoomScale = 1;
        let pinScale = 1;*/
        /*function zoom(direction) {
            if (direction == 'in' && zoomLevel < 1) {
                zoomLevel++;
                zoomScale *= 1.2;
            } else if(direction == 'out'  && zoomLevel > -3) {
                zoomLevel--;
                zoomScale /= 1.2;
            } else {
                return false;
            }

            zoomScale = Math.min(Math.max(0.3, zoomScale), 4);
            pinScale = 1 / zoomScale;
            $('.zoom-box .screen-area .inner').css('transform', `scale(${zoomScale})`);
            // $('.zoom-box .screen-area').css('background-size', `${zoomScale}00%`);
        }*/
        /*document.querySelector('.zoom-in').addEventListener('click', () => {
            zoom('in');
        });
        document.querySelector('.zoom-out').addEventListener('click', () => {
            zoom('out');
        });*/

        /* 계산기 팝업 */
        $(function () {
            $('.output').click(function () {
                const value = $(this).val(); // 클릭한 input의 값을 가져옴
                $('#total').text(value); // #total에 값을 설정
                $('.popup-layer').fadeIn();
                lastClickedSlider = $(this).parent();
            });
            $('.pop-close button').click(function () {
                $('.popup-layer').fadeOut();
            });
            $('#calc_eval').click(function () {
                let totalValue = parseFloat($('#total').text());

                if (!totalValue) {
                    totalValue = 0.1;
                }
                if (totalValue < 0.1) {
                    totalValue = 0.1;
                } else if (totalValue > 3.0) {
                    totalValue = 3.0;
                }

                // 마지막 클릭된 슬라이드가 A인지 B인지 확인하고 해당 슬라이드의 값을 변경
                if (lastClickedSlider.hasClass('A-range')) {
                    const mass1 = $('#mass1');
                    mass1.val(totalValue);
                    mass1.trigger('input');

                    // 운동량 pa 계산
                    const velocityA = object1.velocity;

                    const arrowDirection = velocityA >= 0 ? 1 : -1;
                    const momentumA = totalValue * Math.abs(velocityA);
                    const sign = arrowDirection < 0 ? '-' : '';

                    document.getElementById('pa-value').textContent = sign + `${momentumA.toFixed(2)} kg·m/s`; // pa 값 업데이트
                } else if (lastClickedSlider.hasClass('B-range')) {
                    const mass2 = $('#mass2');
                    mass2.val(totalValue);
                    mass2.trigger('input');

                    // 운동량 pb 계산
                    const velocityB = object2.velocity;

                    const arrowDirection = velocityB >= 0 ? -1 : 1;

                    const momentumB = totalValue * Math.abs(velocityB);
                    const sign = arrowDirection > 0 ? '-' : '';

                    document.getElementById('pb-value').textContent = sign + `${momentumB.toFixed(2)} kg·m/s`; // pb 값 업데이트
                }

                // 팝업 닫기
                $('.popup-layer').fadeOut();
            });

            $('.calc_int').click(function () {
                var opinText = $('#total').text();
                if (opinText.length > 5) {
                    // alert('최대 5자까지 입력');
                    $('#total').text(opinText.substring(0, 5));
                }
            });
        });

        /* 계산기 */
        var a = 0,
            b = 0,
            is_a = true,
            is_b = false,
            o = 'nil',
            answer = 0,
            first_a = true,
            first_b = true,
            is_submission = false,
            soft_sub = false,
            display = jQuery('#total');

        // console.log
        function write(x) {
            console.log(x);
        }

        // add int to current display value
        function changeDisplayVal(i) {
            display.text(display.text() + i);
        }

        // make * into ×
        function visOps(x) {
            if (x === '*') {
                // return 'u00D7';
                return '×';
            } else if (x === '/') {
                // return 'u00F7';
                return '÷';
            } else {
                return x;
            }
        }

        // set display value
        function setDisplayVal(x) {
            display.text(visOps(x));
        }

        // make touch animation
        function animateButton(obj) {
            var button = obj.addClass('hovering');
            setTimeout(function () {
                button.removeClass('hovering');
            }, 100);
        }

        /*
         ** operation functions
         */

        // setting a
        function set_a(i) {
            if (is_a) {
                // nothing if a duplicate decimal
                if (i === '.' && a.toString().indexOf('.') !== -1) {
                    write('Duplicate Decimal');
                    i = '';
                } else if (i === '.' && first_a) {
                    i = '0.';
                }
                // first_a time, we need to clear the display
                if (first_a === true) {
                    if (i === '0') {
                        i = '';
                    } else {
                        // set display value
                        setDisplayVal(i);
                        // no longer first_a
                        first_a = false;
                    }
                } else {
                    // add int to current display value
                    changeDisplayVal(i);
                }

                a = display.text();

                write('Set "a" to ' + a);
            }
        }

        // setting b
        function set_b(i) {
            if (!is_a) {
                // nothing if a duplicate decimal
                if (i === '.' && b.toString().indexOf('.') !== -1) {
                    write('Duplicate Decimal!');
                    i = '';
                } else if (i === '.' && first_b) {
                    i = '0.';
                }
                // first_b time, we need to clear the display
                if (first_b === true) {
                    if (i === '0') {
                        i = '';
                    } else {
                        // set display value
                        setDisplayVal(i);
                        // no longer first_b
                        first_b = false;
                    }
                } else {
                    // add int to current display value
                    changeDisplayVal(i);
                }
                // set b to current display Value
                b = display.text();

                write('Set "b" to ' + b);
            }
        }

        // looping calculator
        function loop_calc(answer) {
            write('Loop Calculator');

            a = answer;
            b = 0;
            answer = 0;
            // set display value
            setDisplayVal(a);
        }

        // setting operator
        function set_o(op) {
            // if answer, loop the calculator to prepare for b
            if (is_submission) {
                loop_calc(display.text());
                is_submission = false;
            }
            // if new op is submitting calc
            if (!first_b) {
                softsubmit_calc();
            }

            // replace or set operator in display
            setDisplayVal(op);
            // replace or set global operator
            o = op;

            if (is_a) {
                is_a = false;
            }
            if (!is_b) {
                is_b = true;
            }

            write('Set "o" to ' + o);
        }

        // soft submit calc
        function softsubmit_calc() {
            // evaluate equation
            var preCalc = eval(a + '' + o + '' + b);
            // parse float to 12
            answer = parseFloat(preCalc.toPrecision(12));

            // submit answer to display
            display.text(answer);

            // reset first_b to true
            first_b = true;

            // post result
            newResult(a, o, b, answer);

            write(a + ' ' + o + ' ' + b + ' = ' + answer);

            a = answer;
            b = 0;
            o = o;
            // set display value
            setDisplayVal(o);
            is_a = false;
            is_b = true;

            first_b = true;

            soft_sub = true;

            write('Soft Submission');
        }

        // submit calculator
        function submit_calc() {
            write('Submission');
            if (first_b === false) {
                var preCalc = 0;
                if (o === '^') {
                    // evaluate equation
                    preCalc = Math.pow(a, b);
                } else {
                    // evaluate equation
                    preCalc = eval(a + '' + o + '' + b);
                }
                // parse float to 12
                answer = parseFloat(preCalc.toPrecision(12));

                // submit answer to display
                display.text(answer);
                // display is now the answer
                is_submission = true;
                // reset first_b to true
                first_b = true;

                // post result
                newResult(a, o, b, answer);

                write(a + ' ' + o + ' ' + b + ' = ' + answer);
            } else {
                write("You can't do that yet");
            }
        }

        // negging value
        function neg() {
            display.text(display.text() * -1);
            if (is_submission) {
                a = a * -1;
            } else {
                if (is_a) {
                    a = a * -1;
                    setDisplayVal(a);
                } else {
                    b = b * -1;
                    setDisplayVal(b);
                }
            }
        }

        // resetting calculator
        function reset_calc() {
            a = 0;
            b = 0;
            o = 'nil';
            answer = 0;
            is_a = true;
            is_b = false;
            first_a = true;
            first_b = true;
            is_submission = false;
            soft_sub = false;
            display.text(0);

            // reset display value
            setDisplayVal(0);

            write('Calculator Reset');
        }

        // backspacing value
        function backspace() {
            if (display.text() !== '' && display.text() !== '0') {
                display.text(display.text().substring(0, display.text().length - 1));
                if (is_a === true) {
                    a = parseFloat(a.toString().substring(0, a.toString().length - 1));
                } else {
                    b = parseFloat(b.toString().substring(0, b.toString().length - 1));
                }
            } else {
                write('Nothing Left to Backspace');
            }
        }

        // set value to memory value
        function memory(i) {
            if (is_submission) {
                loop_calc(i);
            } else if (is_a) {
                loop_calc(i);
            } else {
                set_b(i);
            }
            answer = a;
        }

        function newResult(a, o, b, answer) {
            var results = jQuery('#results_list');
            var result =
                '' +
                '<li class="result"><span class="equation">' +
                a +
                ' ' +
                visOps(o) +
                ' ' +
                b +
                ' </span>' +
                '<span class="answer">' +
                answer +
                '</span> <span class="use"><a class="calc_use" href="#">Use</a></span></li>';
            results.prepend(result).children('li').fadeIn(200);
            if (jQuery('#result_default')) {
                jQuery('#result_default').remove();
            }
            // click use
            jQuery('.calc_use')
                .off('click')
                .on('click', function () {
                    var i = jQuery(this).parent('.use').siblings('.answer').text();
                    jQuery(this).parents('.result').animate({ opacity: '0.5' }, 200).animate({ opacity: '1' }, 200);
                    jQuery('#total').animate({ opacity: '0.5' }, 200).animate({ opacity: '1' }, 200);
                    memory(i);
                    return false;
                });
        }

        function sqrt(i) {
            write('Square Root');
            var s = Math.sqrt(i);
            answer = s;
            write('u221A' + i + ' = ' + s);
            loop_calc(s);
            newResult('', '√', i, s);
            // submit answer to display
            display.text(answer);
            // display is now the answer
            is_submission = true;
            // reset first_b to true
            first_b = true;
        }

        function square(i) {
            write('Square');
            var s = i * i;
            answer = s;
            write(i + ' u005E 2 = ' + s);
            loop_calc(s);
            newResult(i, ' &#94; 2', '', s);
            // submit answer to display
            display.text(answer);
            // display is now the answer
            is_submission = true;
            // reset first_b to true
            first_b = true;
        }

        function denom(i) {
            write('Denominator');
            var s = 1 / i;
            answer = s;
            write('1 / ' + i + ' = ' + s);
            loop_calc(s);
            newResult(1, ' / ', i, s);
            // submit answer to display
            display.text(answer);
            // display is now the answer
            is_submission = true;
            // reset first_b to true
            first_b = true;
        }

        // click integers
        jQuery('.calc_int, #calc_decimal').each(function () {
            jQuery(this).click(function () {
                var value = jQuery(this).val();
                if (is_submission === false) {
                    if (is_a === true) {
                        set_a(value);
                    } else {
                        set_b(value);
                    }
                } else {
                    reset_calc();
                    set_a(value);
                }
            });
        });

        // click operators
        jQuery('.calc_op').each(function () {
            jQuery(this).click(function () {
                var value = jQuery(this).val();
                set_o(value);
            });
        });

        // click equals
        jQuery('#calc_eval').click(function () {
            submit_calc();
        });

        // click clear
        jQuery('#calc_clear').click(function () {
            reset_calc();
        });

        // click neg
        jQuery('#calc_neg').click(function () {
            neg();
        });

        // click backspace
        jQuery('#calc_back').click(function () {
            backspace();
        });

        // click square root
        jQuery('#calc_sqrt').click(function () {
            if (display.text() !== '0') {
                if (is_submission) {
                    sqrt(answer);
                } else if (is_a) {
                    sqrt(a);
                }
            }
            return false;
        });

        // click square
        jQuery('#calc_square').click(function () {
            if (display.text() !== '0') {
                if (is_submission) {
                    square(answer);
                } else if (is_a) {
                    square(a);
                }
            }
            return false;
        });

        // click denominator
        jQuery('#calc_denom').click(function () {
            if (display.text() !== '0') {
                if (is_submission) {
                    denom(answer);
                } else if (is_a) {
                    denom(a);
                }
            }
            return false;
        });

        // reset console
        jQuery('#result_clear').click(function () {
            jQuery('#results_list')
                .children('li')
                .fadeOut(200, function () {
                    jQuery(this).remove();
                });
            jQuery('#results_list').prepend('<li id="result_default">Memory is Empty</li>');
            return false;
        });

        // key press for integers and operators
        jQuery(document).keypress(function (e) {
            // the character code
            var charCode = e.which;
            // the key
            var key = String.fromCharCode(charCode);

            // key integers & decimal
            if (charCode >= 46 && charCode <= 58 && charCode !== 47) {
                if (!is_submission) {
                    if (is_a) {
                        set_a(key);
                    } else {
                        set_b(key);
                    }
                } else if (soft_sub) {
                    set_b(key);
                } else {
                    reset_calc();
                    set_a(key);
                }
            }

            // key operators
            if ((charCode >= 42 && charCode <= 45 && charCode !== 44) || charCode === 47) {
                set_o(key);
            }

            // key equals
            if (charCode === 61) {
                submit_calc();
            }

            // animate the corrosponding button
            jQuery('button').each(function () {
                var value = jQuery(this).val();
                if (value === key) {
                    animateButton(jQuery(this));
                }
            });
        });

        // keydown for backspace and return
        jQuery(document).keydown(function (e) {
            // the character code
            var charCode = e.which;

            // backspace
            if (charCode === 8) {
                backspace();
                animateButton(jQuery('#calc_back'));
                return false;
            }

            // clear
            if (charCode === 12) {
                reset_calc();
                animateButton(jQuery('#calc_clear'));
                return false;
            }

            // return
            if (charCode === 13) {
                submit_calc();
                animateButton(jQuery('#calc_eval'));
                return false;
            }
        });
    }

    //////////////////////////////수정사항/////////////////////////////
    const canvas = document.getElementById('simulationCanvas');
    const screenBox = $('.screen-box')[0];
    canvas.width = screenBox.clientWidth;
    canvas.height = screenBox.clientHeight;

    const ctx = canvas.getContext('2d');
    const resetOutsideButton = document.getElementById('reset-outside-button');

    mass1Input = document.getElementById('mass1');
    mass2Input = document.getElementById('mass2');

    const mass1Value = document.getElementById('mass1-value');
    const mass2Value = document.getElementById('mass2-value');

    let mass1 = parseFloat(mass1Input.value);
    let mass2 = parseFloat(mass2Input.value);

    let isRunning = false;
    let animationFrameId = null;
    let speedMultiplier = 1;
    let isSlow = false;

    let draggingObject = null;
    let draggingCircle = null;
    let setSpeed = 1;
    let diagramScale = 20;
    let wasRunningBeforeDrag = false;

    // 다이어그램 캔버스
    const momentumCanvas = document.getElementById('momentumCanvas');
    const momentumCtx = momentumCanvas.getContext('2d');
    let scale = 1.4;
    let translatePos = { x: -60, y: -30 };

    // 확대/축소 버튼 요소 가져오기
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    //공 생성
    object1 = {
        x: canvas.width / 10,
        y: canvas.height / 2,
        radius: 75,
        velocity: setSpeed * speedMultiplier,
        mass: mass1,
    };
    object2 = {
        x: canvas.width - canvas.width / 10,
        y: canvas.height / 2,
        radius: 75,
        color: 'magenta',
        velocity: (setSpeed / 2) * -1 * speedMultiplier,
        mass: mass2,
    };

    const dragArrowA = document.getElementById('drag-arrow-a');
    const lineA = document.getElementById('line-a');
    const itemArrowA = document.getElementById('item-arrow-a');
    const dragArrowB = document.getElementById('drag-arrow-b');
    const lineB = document.getElementById('line-b');
    const itemArrowB = document.getElementById('item-arrow-b');
    const pixelsPerVelocityUnit = 80;
    let initialXA = 0,
        initialArrowPositionA = 0,
        velocityA = 0;
    let initialXB = 0,
        initialArrowPositionB = 0,
        velocityB = 0;
    let isDraggingArrow = false;
    let isA = true;
    let firstB = true;

    let offsetX;
    let isDragging = false;

    let zoomLevel = 1;

    const ballInfoA = document.getElementById('ball-info-a');
    const ballInfoB = document.getElementById('ball-info-b');

    // 초기 화면 설정 및 다이어그램 그리기
    drawMomentumDiagram();

    // 공을 드래그하기 위한 이벤트
    canvas.addEventListener('mousedown', event => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        if (Math.hypot(mouseX - object1.x, mouseY - object1.y) <= object1.radius) {
            draggingObject = object1;
        } else if (Math.hypot(mouseX - object2.x, mouseY - object2.y) <= object2.radius) {
            draggingObject = object2;
        }

        if (draggingObject) {
            wasRunningBeforeDrag = isRunning;
            if (isRunning) {
                cancelAnimationFrame(animationFrameId);
                isRunning = false;
            }
        } else {
            // 속도 조절 원 클릭 여부 확인
            const arrowLength1 = Math.abs(object1.velocity) * 50;
            const angle1 = object1.velocity >= 0 ? 0 : Math.PI;
            const circleX1 = object1.x + arrowLength1 * Math.cos(angle1);
            const circleY1 = object1.y + arrowLength1 * Math.sin(angle1);

            if (Math.hypot(mouseX - circleX1, mouseY - circleY1) <= 10) {
                draggingCircle = object1;
            } else {
                const arrowLength2 = Math.abs(object2.velocity) * 50;
                const angle2 = object2.velocity >= 0 ? 0 : Math.PI;
                const circleX2 = object2.x + arrowLength2 * Math.cos(angle2);
                const circleY2 = object2.y + arrowLength2 * Math.sin(angle2);

                if (Math.hypot(mouseX - circleX2, mouseY - circleY2) <= 10) {
                    draggingCircle = object2;
                }
            }
        }
    });

    canvas.addEventListener('mousemove', event => {
        const mouseX = event.offsetX;
        if (draggingObject) {
            draggingObject.x = mouseX;
            setCanvas();
        } else if (draggingCircle) {
            draggingCircle.velocity = (mouseX - draggingCircle.x) / 50;
            setCanvas();
            drawMomentumDiagram(); // 속도 변경 시 다이어그램 업데이트
        }
    });

    canvas.addEventListener('mouseup', () => {
        if (draggingObject) {
            if (wasRunningBeforeDrag) {
                isRunning = true;
                animationFrameId = requestAnimationFrame(updateCanvas);
            }
            draggingObject = null;
        }
        draggingCircle = null; // 속도 드래그 종료
    });

    document.querySelectorAll('input[name="radio"]').forEach(radio => {
        radio.addEventListener('change', e => {
            if (e.target.value === 'normal' && isSlow) {
                speedMultiplier = 2;
                isSlow = false;
            } else if (e.target.value === 'slow') {
                speedMultiplier = 1 / 2;
                isSlow = true;
            }

            object1.velocity = object1.velocity * speedMultiplier;
            object2.velocity = object2.velocity * speedMultiplier;
            drawMomentumDiagram(); // 속도 조절 변경 시 다이어그램 업데이트
        });
    });

    mass1Input.oninput = () => {
        mass1 = parseFloat(mass1Input.value);
        mass1Value.textContent = mass1 + ' kg';
        object1.mass = mass1;
        drawMomentumDiagram();
    };

    mass2Input.oninput = () => {
        mass2 = parseFloat(mass2Input.value);
        mass2Value.textContent = mass2 + ' kg';
        object2.mass = mass2;
        drawMomentumDiagram();
    };

    function setCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(object1.x, object1.y, object1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(object2.x, object2.y, object2.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fill();

        // 공 A의 위치에 맞게 HTML 요소 위치 업데이트
        const ballInfoA = document.getElementById('ball-info-a');
        const ballInfoB = document.getElementById('ball-info-b');
        if (object1.x >= 0 && object1.x <= canvas.width && object1.y >= 0 && object1.y <= canvas.height) {
            ballInfoA.style.display = 'block'; // 공이 캔버스 안에 있을 때 보임

            // 공의 중심을 기준으로 위치 조정 (반지름 고려)
            ballInfoA.style.left = `${object1.x - object1.radius}px`;
            ballInfoA.style.top = `${object1.y}px`;
        } else {
            ballInfoA.style.display = 'none'; // 공이 캔버스 밖으로 나가면 숨김
        }

        if (object2.x >= 0 && object2.x <= canvas.width && object2.y >= 0 && object2.y <= canvas.height) {
            ballInfoB.style.display = 'block'; // 공이 캔버스 안에 있을 때 보임

            // 공의 중심을 기준으로 위치 조정 (반지름 고려)
            ballInfoB.style.right = `${canvas.width - object2.x - object2.radius}px`;
            ballInfoB.style.top = `${object2.y}px`;
        } else {
            ballInfoB.style.display = 'none'; // 공이 캔버스 밖으로 나가면 숨김
        }
    }

    function checkOutsideBounds() {
        const isObject1OutOfBounds = object1.x < -object1.radius || object1.x > canvas.width + object1.radius;
        const isObject2OutOfBounds = object2.x < -object2.radius || object2.x > canvas.width + object2.radius;

        if (isObject1OutOfBounds && isObject2OutOfBounds) {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
            resetOutsideButton.style.display = 'block';
        }
    }

    document.getElementById('start-button').onclick = () => {
        if (!isRunning) {
            isRunning = true;
            resetOutsideButton.style.display = 'none';
            animationFrameId = requestAnimationFrame(updateCanvas);
            $('#start-button').hide();
            $('#stop-button').show();
        }
    };

    document.getElementById('stop-button').onclick = () => {
        if (isRunning) {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);

            $('#start-button').show();
            $('#stop-button').hide();
        }
    };

    resetOutsideButton.onclick = () => {
        resetBall();
    };

    function resetBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        object1 = {
            x: canvas.width / 10,
            y: canvas.height / 2,
            radius: 75,
            color: 'cyan',
            velocity: object1.velocity,
            mass: mass1,
        };
        object2 = {
            x: canvas.width - canvas.width / 10,
            y: canvas.height / 2,
            radius: 75,
            color: 'magenta',
            velocity: object2.velocity,
            mass: mass2,
        };
        animationFrameId = null;
        isRunning = false;
        resetOutsideButton.style.display = 'none';
        cancelAnimationFrame(animationFrameId);

        $('#start-button').show();
        $('#stop-button').hide();

        setCanvas();
    }

    function triggerSliderChange(slider, newValue) {
        slider.val(newValue);
        slider.trigger('input');
    }

    function resetSimulation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const $rangeA = $('.A-range input[type="range"]');
        const $rangeB = $('.B-range input[type="range"]');

        triggerSliderChange($rangeA, 0.5);
        triggerSliderChange($rangeB, 1.5);

        object1 = {
            x: canvas.width / 10,
            y: canvas.height / 2,
            radius: 75,
            color: 'cyan',
            velocity: setSpeed,
            mass: mass1,
        };
        object2 = {
            x: canvas.width - canvas.width / 10,
            y: canvas.height / 2,
            radius: 75,
            color: 'magenta',
            velocity: (setSpeed / 2) * -1,
            mass: mass2,
        };
        animationFrameId = null;
        isRunning = false;
        resetOutsideButton.style.display = 'none';
        cancelAnimationFrame(animationFrameId);
        initializeArrow(setSpeed);

        $('#start-button').show();
        $('#stop-button').hide();

        setCanvas();
    }


    // 시뮬레이션이 업데이트될 때 운동량 다이어그램도 업데이트
    function updateCanvas() {
        setCanvas();

        if (!isRunning) {
            return;
        }

        // 충돌 처리
        let distance = Math.abs(object1.x - object2.x);
        let combinedRadius = object1.radius + object2.radius;
        if (distance <= combinedRadius) {
            const overlap = combinedRadius - distance;

            const newVelocity1 =
                (object1.velocity * (object1.mass - object2.mass) + 2 * object2.mass * object2.velocity) /
                (object1.mass + object2.mass);
            const newVelocity2 =
                (object2.velocity * (object2.mass - object1.mass) + 2 * object1.mass * object1.velocity) /
                (object1.mass + object2.mass);

            object1.x -= overlap / 2; // 공1을 왼쪽으로 조금 이동
            object2.x += overlap / 2; // 공2를 오른쪽으로 조금 이동

            object1.velocity = newVelocity1;
            object2.velocity = newVelocity2;

            initializeArrowA(newVelocity1);
            initializeArrowB(newVelocity2 * -1);
        }

        // 각 물체의 속도를 1초에 300px이 되도록 설정 눈금 10칸 정도
        const speedInPixelsPerSecond = 300;
        const frameRate = 60; // 초당 60 프레임
        const pixelsPerFrame = speedInPixelsPerSecond / frameRate;

        object1.x += object1.velocity * pixelsPerFrame;
        object2.x += object2.velocity * pixelsPerFrame;

        checkOutsideBounds();
        drawMomentumDiagram();
        animationFrameId = requestAnimationFrame(updateCanvas);
    }

    document.getElementById('reset-button').onclick = () => {
        resetSimulation();
        drawMomentumDiagram();
    };

    // 화살표 드래그 시작
    itemArrowA.addEventListener('mousedown', e => {
        isDraggingArrow = true;
        isA = true;

        const deltaX = e.clientX - initialXA;
        const newPosition = initialArrowPositionA + deltaX;
        velocityA = newPosition / pixelsPerVelocityUnit;

        initialXA = e.clientX;

        const arrowLeft = velocityA >= 0 ? parseFloat(dragArrowA.style.left) : parseFloat(dragArrowA.style.left) * -1;

        initialArrowPositionA = arrowLeft || 0;
        e.stopPropagation();
    });

    itemArrowB.addEventListener('mousedown', e => {
        isDraggingArrow = true;
        isA = false;

        const deltaX = e.clientX - initialXB;
        const newPosition = initialArrowPositionB + deltaX;
        velocityB = newPosition / pixelsPerVelocityUnit;

        initialXB = e.clientX;

        let arrowRight = velocityB >= 0 ? parseFloat(dragArrowB.style.right) : parseFloat(dragArrowB.style.right) * -1;

        if (firstB && object2.velocity < 0) {
            arrowRight = arrowRight * -1;
            firstB = false;
        }

        initialArrowPositionB = arrowRight || 0;
        e.stopPropagation();
    });

    // 화살표 드래그 중
    document.addEventListener('mousemove', e => {
        if (isDraggingArrow) {
            let initialX, initialArrowPosition, velocity, massValue, itemArrow, line, dragArrow, vInfo, pInfo;

            if (isA) {
                initialX = initialXA;
                initialArrowPosition = initialArrowPositionA;
                massValue = object1.mass;
                itemArrow = itemArrowA;
                line = lineA;
                dragArrow = dragArrowA;
                vInfo = document.getElementById('va-value');
                pInfo = document.getElementById('pa-value');
            } else {
                initialX = initialXB;
                initialArrowPosition = initialArrowPositionB;
                massValue = object2.mass;
                itemArrow = itemArrowB;
                line = lineB;
                dragArrow = dragArrowB;
                vInfo = document.getElementById('vb-value');
                pInfo = document.getElementById('pb-value');
            }

            let deltaX = e.clientX - initialX;
            let newPosition = initialArrowPosition + deltaX;

            velocity = newPosition / pixelsPerVelocityUnit;

            const momentum = massValue * (velocity > 0 ? velocity : velocity * -1);

            const arrowDirection = isA ? (velocity >= 0 ? 1 : -1) : velocity >= 0 ? -1 : 1;
            const arrowLength = Math.abs(velocity) * pixelsPerVelocityUnit;

            // item-arrow 전체를 반전시키기
            itemArrow.style.transform = `scaleX(${arrowDirection})`;

            if (isA) {
                velocityA = velocity;
                if (arrowDirection >= 0) {
                    itemArrow.style.left = '120px';
                    itemArrow.style.right = 'revert';
                } else {
                    itemArrow.style.left = 'revert';
                    itemArrow.style.right = '30px';
                }

                dragArrow.style.left = `${newPosition < 0 ? newPosition * -1 : newPosition}px`;
            } else {
                velocityB = velocity;
                if (arrowDirection >= 0) {
                    itemArrow.style.left = 'revert';
                    itemArrow.style.right = '120px';
                } else {
                    itemArrow.style.left = '30px';
                    itemArrow.style.right = 'revert';
                }

                dragArrow.style.right = `${newPosition < 0 ? newPosition * -1 : newPosition}px`;
            }

            line.style.width = `${arrowLength}px`;

            const sign = isA && arrowDirection < 0 ? '-' : !isA && arrowDirection > 0 ? '-' : '';

            vInfo.textContent = sign + `${Math.abs(velocity).toFixed(2)} m/s`;
            pInfo.textContent = sign + `${momentum.toFixed(2)} kg·m/s`;

            drawMomentumDiagram();
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDraggingArrow) {
            if (isA) {
                object1.velocity = velocityA * speedMultiplier;
            } else {
                object2.velocity = velocityB * speedMultiplier;
            }
            isDraggingArrow = false;
            drawMomentumDiagram();
        }
    });

    function initializeArrow(velocity) {
        initializeArrowA(velocity);
        initializeArrowB(velocity / 2);
    }

    function initializeArrowA(velocity) {
        const arrowLength = Math.abs(velocity) * pixelsPerVelocityUnit;
        const arrowDirection = velocity >= 0 ? 1 : -1;

        itemArrowA.style.transform = `scaleX(${arrowDirection})`;
        lineA.style.width = `${arrowLength}px`;

        dragArrowA.style.left = `${arrowLength}px`;

        const sign = arrowDirection < 0 ? '-' : '';

        document.getElementById('va-value').textContent = sign + `${Math.abs(velocity).toFixed(2)} m/s`;

        const mass1 = object1.mass;
        const momentum1 = mass1 * (velocity > 0 ? velocity : velocity * -1);

        document.getElementById('pa-value').textContent = sign + `${momentum1.toFixed(2)} kg·m/s`;

        initialArrowPositionA = arrowLength;
        itemArrowA.style.transform = `scaleX(${velocity >= 0 ? 1 : -1})`;

        if (velocity >= 0) {
            itemArrowA.style.left = '120px';
            itemArrowA.style.right = 'revert';
            initialXA = dragArrowA.getBoundingClientRect().left;
        } else {
            itemArrowA.style.left = 'revert';
            itemArrowA.style.right = '30px';
            initialXA = dragArrowA.getBoundingClientRect().right;
        }
    }

    function initializeArrowB(velocity) {
        const arrowLength = Math.abs(velocity) * pixelsPerVelocityUnit;
        const arrowDirection = velocity >= 0 ? 1 : -1;

        itemArrowB.style.transform = `scaleX(${arrowDirection})`;
        lineB.style.width = `${arrowLength}px`;
        dragArrowB.style.right = `${arrowLength}px`;

        const sign = arrowDirection > 0 ? '-' : '';

        document.getElementById('vb-value').textContent = sign + `${Math.abs(velocity).toFixed(2)} m/s`;

        const mass2 = object2.mass;
        const momentum2 = mass2 * (velocity > 0 ? velocity : velocity * -1);

        document.getElementById('pb-value').textContent = sign + `${momentum2.toFixed(2)} kg·m/s`;

        initialArrowPositionB = arrowLength;
        initialXB = dragArrowA.getBoundingClientRect().right;
        initialArrowPositionA = arrowLength;
        itemArrowB.style.transform = `scaleX(${velocity >= 0 ? 1 : -1})`;

        if (velocity >= 0) {
            itemArrowB.style.left = 'revert';
            itemArrowB.style.right = '120px';
            initialXB = dragArrowB.getBoundingClientRect().right;
        } else {
            itemArrowB.style.left = '30px';
            itemArrowB.style.right = 'revert';
            initialXB = dragArrowB.getBoundingClientRect().left;
        }
    }

    ballInfoA.addEventListener('mousedown', e => {
        if (!isDraggingArrow) {
            e.stopPropagation();
            isDragging = true;
            isA = true;

            offsetX = e.clientX - object1.x;
            ballInfoA.style.cursor = 'grabbing';
        }
    });

    ballInfoB.addEventListener('mousedown', e => {
        if (!isDraggingArrow) {
            e.stopPropagation();
            isDragging = true;
            isA = false;

            offsetX = e.clientX - object2.x;
            ballInfoB.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', e => {
        if (isDragging) {
            e.stopPropagation();

            // 공이 캔버스 안에 머물도록 경계 설정
            const leftBoundary = object1.radius;
            const rightBoundary = canvas.width - object1.radius;

            if (isA) {
                // object1.x를 캔버스 경계 내로 제한
                object1.x = Math.max(leftBoundary, Math.min(e.clientX - offsetX, rightBoundary));
                ballInfoA.style.left = `${object1.x - object1.radius}px`;
            } else {
                const leftBoundaryB = object2.radius;
                const rightBoundaryB = canvas.width - object2.radius;

                // object2.x를 캔버스 경계 내로 제한
                object2.x = Math.max(leftBoundaryB, Math.min(e.clientX - offsetX, rightBoundaryB));
                ballInfoB.style.right = `${canvas.width - object2.x - object2.radius}px`;
            }
        }
    });

    document.addEventListener('mouseup', e => {
        isDragging = false;
        ballInfoA.style.cursor = 'grab';
        ballInfoB.style.cursor = 'grab';
        setCanvas();
        drawMomentumDiagram();
        e.stopPropagation();
    });

    mass1Input.addEventListener('input', () => {
        mass1 = parseFloat(mass1Input.value);

        let velocity = isSlow ? object1.velocity * 2 : object1.velocity;
        const momentum1 = mass1 * (velocity > 0 ? velocity : velocity * -1);

        const arrowDirection = velocity < 0 ? -1 : 1;
        const sign = arrowDirection < 0 ? '-' : '';

        document.getElementById('pa-value').textContent = sign + `${momentum1.toFixed(2)} kg·m/s`;

        drawMomentumDiagram();
    });

    mass2Input.addEventListener('input', () => {
        mass2 = parseFloat(mass2Input.value);

        let velocity = isSlow ? object2.velocity * 2 : object2.velocity;
        const momentum2 = mass2 * (velocity > 0 ? velocity : velocity * -1);

        const arrowDirection = velocity >= 0 ? -1 : 1;
        const sign = arrowDirection > 0 ? '-' : '';

        document.getElementById('pb-value').textContent = sign + `${momentum2.toFixed(2)} kg·m/s`;

        drawMomentumDiagram(); // 함수 호출
    });

    // 운동량 다이어그램 그리기 함수
    function drawMomentumDiagram() {
        const screenAreaElement = document.querySelector('.screen-area');
        screenAreaElement.style.backgroundImage = 'none';
        momentumCtx.clearRect(0, 0, momentumCanvas.width, momentumCanvas.height);

        const centerX = momentumCanvas.width / 2; // 캔버스의 중심 X 좌표
        const centerY = momentumCanvas.height / 2; // 캔버스의 중심 Y 좌표

        momentumCtx.save();
        momentumCtx.translate(translatePos.x, translatePos.y); // 위치 이동 적용
        momentumCtx.scale(scale, scale); // 확대/축소 적용

        // 바둑판 형식의 눈금 그리기
        drawGrid(centerX, centerY);

        // 속도가 느린 상태일 때만 속도를 2배로 계산
        let adjustedVelocityA = object1.velocity;
        let adjustedVelocityB = object2.velocity;

        if (isSlow) {
            // 느린 상태일 때만 적용
            adjustedVelocityA = object1.velocity * 2; // 속도를 2배로
            adjustedVelocityB = object2.velocity * 2; // 속도를 2배로
        }

        // 운동량 계산 (속도가 조정된 값을 기반으로 계산)
        const momentumA = mass1 * adjustedVelocityA;
        const momentumB = mass2 * adjustedVelocityB;
        const totalMomentum = momentumA + momentumB;

        momentumCtx.save(); // 스케일 적용 전 상태 저장
        momentumCtx.setTransform(1, 0, 0, 1, 0, 0); // 스케일 해제 (기본 스케일로 설정)

        // 공 A의 운동량 화살표
        drawArrow(centerX, centerY - 30, diagramScale * momentumA, '#2971f6');

        // 공 B의 운동량 화살표
        drawArrow(centerX, centerY - 10, diagramScale * momentumB, '#2971f6');

        // 합계 운동량 화살표
        drawArrow(centerX, centerY + 10, diagramScale * totalMomentum, '#53686f');

        drawText(centerX + momentumA * diagramScale, centerY - 30, momentumA, 'A', 'black');
        drawText(centerX + momentumB * diagramScale, centerY - 10, momentumB, 'B', 'black');
        drawText(centerX + 20, centerY + 20, totalMomentum, '전체', 'black');

        momentumCtx.restore(); // 스케일 해제 전 상태 복원

        momentumCtx.restore(); // 전체 상태 복원
    }

    function drawArrow(startX, startY, arrowLength, color) {
        const arrowDirection = arrowLength >= 0 ? 1 : -1; // 양수/음수에 따라 방향 설정
        const absArrowLength = Math.abs(arrowLength); // 화살표 길이의 절대값

        // 화살표 선 그리기
        momentumCtx.beginPath();
        momentumCtx.moveTo(startX, startY);
        if (arrowDirection > 0) {
            // 오른쪽으로 향하는 경우
            momentumCtx.lineTo(startX + absArrowLength, startY); // 선을 끝까지 그리기
        } else {
            // 왼쪽으로 향하는 경우
            momentumCtx.lineTo(startX - absArrowLength, startY); // 선을 끝까지 그리기
        }
        momentumCtx.strokeStyle = color;
        momentumCtx.lineWidth = 3;
        momentumCtx.stroke();

        // 화살표 머리 그리기
        const headLength = 8; // 화살표 머리 크기
        const arrowEndX = arrowDirection > 0 ? startX + absArrowLength : startX - absArrowLength; // 끝 위치

        momentumCtx.beginPath();
        // 화살표 머리 그리기 (선 끝에서부터 시작)
        if (arrowDirection > 0) {
            // 오른쪽으로 향하는 화살표
            momentumCtx.moveTo(arrowEndX + headLength, startY); // 선 끝점에서 시작
            momentumCtx.lineTo(arrowEndX, startY - 4); // 위쪽 화살표 머리
            momentumCtx.lineTo(arrowEndX, startY + 4); // 아래쪽 화살표 머리
        } else {
            // 왼쪽으로 향하는 화살표
            momentumCtx.moveTo(arrowEndX - headLength, startY); // 선 끝점에서 시작
            momentumCtx.lineTo(arrowEndX, startY - 4); // 위쪽 화살표 머리
            momentumCtx.lineTo(arrowEndX, startY + 4); // 아래쪽 화살표 머리
        }
        momentumCtx.closePath();
        momentumCtx.fillStyle = color;
        momentumCtx.fill();
    }

    function drawText(startX, startY, momentum, label, color) {
        momentumCtx.fillStyle = color;
        momentumCtx.font = 'bold 10px Arial'; // 텍스트 스타일

        if (momentum >= 0) {
            // 운동량이 양수일 때 (화살표가 오른쪽으로 향할 때)
            momentumCtx.textAlign = 'left';
            momentumCtx.fillText(`${label}`, startX + 15, startY + 5); // 화살표 오른쪽에 텍스트 배치
        } else {
            // 운동량이 음수일 때 (화살표가 왼쪽으로 향할 때)
            momentumCtx.textAlign = 'right';
            momentumCtx.fillText(`${label}`, startX - 15, startY + 5); // 화살표 왼쪽에 텍스트 배치
        }
    }

    // 바둑판 형식의 눈금을 그리는 함수
    function drawGrid(centerX, centerY) {
        const gridSize = 50; // 바둑판 한 칸의 크기
        const numLinesX = Math.ceil(momentumCanvas.width / gridSize) * 2;
        const numLinesY = Math.ceil(momentumCanvas.height / gridSize) * 2;

        momentumCtx.save(); // 이전 상태 저장
        momentumCtx.clearRect(0, 0, momentumCanvas.width, momentumCanvas.height); // 캔버스 지우기

        momentumCtx.strokeStyle = 'lightgray';
        momentumCtx.lineWidth = 1;

        for (let i = -numLinesY; i <= numLinesY; i++) {
            momentumCtx.beginPath();
            momentumCtx.moveTo(-momentumCanvas.width, centerY + i * gridSize);
            momentumCtx.lineTo(2 * momentumCanvas.width, centerY + i * gridSize);
            momentumCtx.stroke();
        }

        for (let i = -numLinesX; i <= numLinesX; i++) {
            momentumCtx.beginPath();
            momentumCtx.moveTo(centerX + i * gridSize, -momentumCanvas.height);
            momentumCtx.lineTo(centerX + i * gridSize, 2 * momentumCanvas.height);
            momentumCtx.stroke();
        }

        momentumCtx.restore(); // 이전 상태 복원
    }

    // 확대/축소 버튼 이벤트 리스너
    zoomInButton.addEventListener('click', function () {
        zoom('in');
    });

    zoomOutButton.addEventListener('click', function () {
        zoom('out');
    });

    // 확대/축소 함수
    function zoom(zoomFactor) {
        // 줌 레벨 제한 설정: -2 ~ 2 범위 내에서만 동작
        if (zoomFactor === 'in' && zoomLevel < 2) {
            zoomLevel++;
        } else if (zoomFactor === 'out' && zoomLevel > -2) {
            zoomLevel--;
        } else {
            return; // 레벨 제한을 넘으면 아무 작업도 하지 않음
        }

        // 줌 레벨에 따른 고정 스케일 설정
        let zoomScale = 1; // 기본 스케일
        switch (zoomLevel) {
            case 2:
                zoomScale = 1.6;
                break;
            case 1:
                zoomScale = 1.4;
                break;
            case 0:
                zoomScale = 0.7;
                break;
            case -1:
                zoomScale = 0.5;
                break;
            case -2:
                zoomScale = 0.3;
                break;
        }

        diagramScale = 20 * zoomScale;

        // 캔버스의 중심 좌표 계산
        const canvasCenterX = momentumCanvas.width / 2;
        const canvasCenterY = momentumCanvas.height / 2;

        // 현재 스케일을 기준으로 중심 좌표를 조정
        const centerX = (canvasCenterX - translatePos.x) / scale;
        const centerY = (canvasCenterY - translatePos.y) / scale;

        // 새로운 스케일 적용
        scale = zoomScale;

        // 중심 좌표에 맞게 위치 재조정
        translatePos.x = canvasCenterX - centerX * scale;
        translatePos.y = canvasCenterY - centerY * scale;

        // 다이어그램 다시 그리기
        drawMomentumDiagram();
    }

    window.onload = () => {
        updateCanvas();
        initializeArrow(setSpeed);
        drawMomentumDiagram();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
