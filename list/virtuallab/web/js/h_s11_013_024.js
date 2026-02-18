/* [고등1] > 행성우주과학 */
// 케플러 법칙 시뮬레이션
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s11_013_024/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s11_013_024/2-act_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s11_013_024/2-act_02.mp3'); // 활동1_02 오디오
const audioAct1_03 = new Audio('../../media/h_s11_013_024/2-act_03.mp3'); // 활동1_02 오디오
const resultAudio = new Audio('../../media/h_s11_013_024/3-final.mp3'); // 정리하기 오디오

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioAct1_03.volume = 1;
resultAudio.volume = 1;

function pageView() {
    // <스크립트 공통 셋팅 : Start> --------------------------------------------------------------------

    const wrapSetView = $('.wrapper-set-view');
    const pageView1 = wrapSetView.find('.page-view1');
    // const pageView2 = wrapSetView.find('.page-view2');
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
        // pageView2.addClass('active');

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

        resultAudio.load();
        resultAudio.play();
        resultAudio.mute = true;
        resultAudio.pause();
        resultAudio.currentTime = 0;
        resultAudio.mute = false;

        //가이드 1
        setTimeout(function () {
            $('.scene-layer1 .orbit-setting').addClass('active');
            $('.scene-layer1 .dimmed').addClass('active');
            $('.orbit-guide01').show();
            setTimeout(function () {
                audioAct1_01.load();
                audioAct1_01.play();
            }, 1000);
        }, 1000);
        // 가이드 2
        setTimeout(function () {
            $('.scene-layer1 .orbit-setting').removeClass('active');
            $('.orbit-guide01').hide();
            $('.scene-layer1 .orbit-start').addClass('active');
            $('.orbit-guide02').show();
            setTimeout(function () {
                audioAct1_02.load();
                audioAct1_02.play();
            }, 1000);
        }, 6000);
        // 가이드 3
        setTimeout(function () {
            $('.scene-layer1 .orbit-start').removeClass('active');
            $('.orbit-guide02').hide();
            $('.scene-layer1 .orbit-rule').addClass('active');
            $('.orbit-guide03').show();
            setTimeout(function () {
                audioAct1_03.load();
                audioAct1_03.play();
            }, 1000);
        }, 13000);
        // 가이드 끄기
        setTimeout(function () {
            $('.scene-layer1 .dimmed').removeClass('active');
            $('.scene-layer1 .orbit-rule').removeClass('active');
            $('.orbit-guide03').hide();
        }, 21000);
    });

    // -----------------------------------------------------------------

    // <활동목표 : page-view2>
    // const btnActivityGoalsClose = $('.page-view2 .button-close');
    // btnActivityGoalsClose.on('click', function (e) {
    //     const thisB = $(this);
    //     pageView2.removeClass('active');
    // });

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
            resultAudio_01.volume = 0;
            resultAudio_02.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            resultAudio_01.volume = 1;
            resultAudio_02.volume = 1;
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

    // 재생 클릭 후
    $('.orbit-btn-wrap ul li').on('click', function () {
        $(this).removeClass('on');
        $(this).siblings().addClass('on');
    });
    // 인풋박스
    $(function () {
        $('.A-range').on('input', 'input[type="range"]', function (e) {
            var outputA = $('.A-range').find('.output')[0];
            outputA.value = e.currentTarget.value;
            outputA.value = Math.round(e.currentTarget.value * 1000) / 1000;
        });
        $('.B-range').on('input', 'input[type="range"]', function (e) {
            var outputB = $('.B-range').find('.output')[0];
            outputB.value = e.currentTarget.value;
        });
        $('.C-range').on('input', 'input[type="range"]', function (e) {
            var outputC = $('.C-range').find('.output')[0];
            outputC.value = formatNum(e.currentTarget.value);
            outputC.value = formatNum(Math.round(e.currentTarget.value * 1000) / 1000);
        });
        $('.D-range').on('input', 'input[type="range"]', function (e) {
            var outputD = $('.D-range').find('.output')[0];
            outputD.value = formatNum(e.currentTarget.value);
            outputD.value = formatNum(Math.round(e.currentTarget.value * 1000) / 1000);
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
            var currentRangeHeight;
            var max = Number(range.attr('max'));
            var min = Number(range.attr('min'));
            var value = Number(range.val());

            // B-range에만 반전된 값 계산 적용
            if (range.closest('.B-range').length > 0) {
                var reversedValue = max - (value - min);
                currentRangeHeight = Number(reversedValue / max) * eqWidth + 'px';
            } else {
                // 나머지 슬라이더는 기존 방식으로 계산
                currentRangeHeight = Number(value / max) * eqWidth + 'px';
            }

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

    // 셀렉트 커스텀
    $('.custom-sel').each(function () {
        const selWrap = $(this);
        const selBtn = $(this).find('button');
        const selLayer = $(this).find('ul');
        const selResult = $(this).find('input');
        selBtn.on('click', () => {
            if (selWrap.hasClass('open')) {
                selWrap.toggleClass('open');
                selLayer.slideToggle('fast');
            } else {
                $('.custom-sel').removeClass('open');
                $('.custom-sel > ul').slideUp('fast');
                selWrap.addClass('open');
                selLayer.slideDown('fast');
            }
        });
        selLayer.find('li').on('click', function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            selResult.val($(this).attr('data-value'));
            $('#planetSelect').val($(this).attr('data-value'));
            updateFromPlanet();
            selBtn.text($(this).text());
            selWrap.removeClass('open');
            selLayer.slideUp('fast');
        });
    });

    // 케플러 법칙 tab
    $('.tab').each(function () {
        $(this)
            .find('li > a')
            .on('click', function () {
                $(this).parents('li').addClass('on').siblings().removeClass('on');
                const i = $(this).parent('li').index();
                $(this).parents('.tab').next('.tab-wrap').find('.tab-cont').removeClass('on').eq(i).addClass('on');
            });
    });

    let animationInterval = null;
    const canvas = document.getElementById('canvas');
    const screenBox = $('.orbit-science-box')[0];
    canvas.width = screenBox.clientWidth;
    canvas.height = screenBox.clientHeight;
    const ctx = canvas.getContext('2d');
    let eccentricity = parseFloat(document.getElementById('eccentricity').value);
    let angle = 0;
    let animationRate = parseFloat(document.getElementById('animationRate').value);
    let sweeping = false;
    let sweepSize = 1 / 12;
    let lastAngle = angle;
    let areas = [];
    let sweepContinuously = false;
    let showFocus = false;
    let showCenter = false;
    let showMinorAxis = false;
    let showMajorAxis = false;
    const proportionalConstant = new BigNumber('133412.21');
    const planets = {
        earth: { eccentricity: 0.017, semiMajorAxis: 1.0 },
        mercury: { eccentricity: 0.206, semiMajorAxis: 0.3871 },
        venus: { eccentricity: 0.007, semiMajorAxis: 0.72333 },
        mars: { eccentricity: 0.093, semiMajorAxis: 1.5273 },
        jupiter: { eccentricity: 0.048, semiMajorAxis: 5.2028 },
        saturn: { eccentricity: 0.056, semiMajorAxis: 9.5388004 },
        uranus: { eccentricity: 0.047, semiMajorAxis: 19.1914004 },
        neptune: { eccentricity: 0.009, semiMajorAxis: 30.0611 },
    };
    const colors = ['#2BA02B', '#D62727', '#9467BD', '#8C564C', '#E377C3', '#7F7F7F', '#BCBD21', '#15BECF', '#1F77B4'];
    let colorIndex = 0;
    let segmentRatios = [];

    const semiMajorAxis = 350;
    let nextCreate = true;

    let newAreaLen = 0;
    let sweepValue = 0;

    function updateFromPlanet() {
        const selectedPlanet = document.getElementById('planetSelect').value;
        const planetData = planets[selectedPlanet];
        // 이심률 업데이트
        eccentricity = planetData.eccentricity;
        document.getElementById('eccentricity').value = eccentricity;
        document.getElementById('eccentricityValue').value = formatNum(eccentricity);

        const slider1 = $('#eccentricity');
        slider1.trigger('input');

        // 반장축 업데이트
        const semiMajorAxisTemp = planetData.semiMajorAxis;

        const orbitalPeriod = calculatePeriodFromAxis(semiMajorAxisTemp);

        document.getElementById('semiMajorAxisValue').value = formatNum(semiMajorAxisTemp);
        document.getElementById('semiMajorAxisSlider').value = semiMajorAxisTemp.toFixed(3);
        document.getElementById('orbitalPeriodValue').value = formatNum(orbitalPeriod);
        document.getElementById('orbitalPeriodSlider').value = orbitalPeriod.toFixed(3);

        const slider2 = $('#semiMajorAxisSlider');
        slider2.trigger('input');

        const slider3 = $('#orbitalPeriodSlider');
        slider3.trigger('input');
        updateAnimation();
    }

    function calculatePeriodFromAxis(semiMajorAxisTemp) {
        const a = new BigNumber(semiMajorAxisTemp);
        const result = a.pow(3).times(proportionalConstant).sqrt();

        return result;
    }

    function calculateAxisFromPeriod(orbitalPeriod) {
        const T = new BigNumber(orbitalPeriod);
        const result = T.pow(2).div(proportionalConstant);
        const axis = Math.pow(result.toNumber(), 1 / 3);
        return new BigNumber(axis);
    }

    function updateFromAxis() {
        const semiMajorAxisTemp = parseFloat(document.getElementById('semiMajorAxisSlider').value);
        const orbitalPeriod = calculatePeriodFromAxis(semiMajorAxisTemp);

        document.getElementById('semiMajorAxisValue').value = formatNum(semiMajorAxis);
        document.getElementById('orbitalPeriodSlider').value = orbitalPeriod.toFixed(3);
        document.getElementById('orbitalPeriodValue').value = formatNum(orbitalPeriod);

        const slider2 = $('#semiMajorAxisSlider');
        slider2.trigger('input');

        const slider3 = $('#orbitalPeriodSlider');
        slider3.trigger('input');
    }

    function updateFromPeriod() {
        const orbitalPeriod = parseFloat(document.getElementById('orbitalPeriodSlider').value);
        const semiMajorAxisTemp = calculateAxisFromPeriod(orbitalPeriod);

        document.getElementById('orbitalPeriodValue').value = formatNum(orbitalPeriod);
        document.getElementById('semiMajorAxisSlider').value = semiMajorAxisTemp.toFixed(3);
        document.getElementById('semiMajorAxisValue').value = formatNum(semiMajorAxisTemp);

        const slider2 = $('#semiMajorAxisSlider');
        slider2.trigger('input');

        const slider3 = $('#orbitalPeriodSlider');
        slider3.trigger('input');
    }

    function formatNum(num) {
        const numericValue = Number(num);
        if (isNaN(numericValue)) {
            console.error('숫자형식이 아님 :', num);
            return num;
        }

        return numericValue.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function drawOrbit() {
        const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const sunX = centerX - eccentricity * semiMajorAxis;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.ellipse(centerX, centerY, semiMajorAxis, semiMinorAxis, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        ctx.closePath();

        draw1nd();
    }

    function draw1nd() {
        const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const sunX = centerX - eccentricity * semiMajorAxis;

        ctx.beginPath();
        ctx.arc(sunX, centerY, 12, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(255, 226, 92)';
        ctx.fill();
        ctx.closePath();

        if (showCenter) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgb(131, 136, 146)';
            ctx.fill();
            ctx.closePath();
        }

        if (showFocus) {
            ctx.beginPath();
            ctx.arc(centerX + eccentricity * semiMajorAxis, centerY, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgb(138, 43, 227)';
            ctx.fill();
            ctx.closePath();
        }

        if (showMajorAxis) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + semiMajorAxis, centerY);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
        }

        if (showMinorAxis) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX, centerY - semiMinorAxis);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
        }
    }

    function drawPlanet() {
        const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const planetX = centerX + semiMajorAxis * Math.cos(angle);
        const planetY = centerY - semiMinorAxis * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(planetX, planetY, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(92, 184, 255)';
        ctx.fill();
        ctx.closePath();

        const distanceToSun = Math.sqrt(
            (planetX - (centerX - eccentricity * semiMajorAxis)) ** 2 + (planetY - centerY) ** 2,
        );

        // 속도 조정을 위한 가중치 인자 추가
        const adjustmentFactor = 1.2; // 0과 1 사이의 값으로 설정, 값이 작을수록 가중치 효과가 큼
        const baseSpeed = 0.003 * animationRate; // 기본 속도
        const speedFactor = 1 + adjustmentFactor * (semiMajorAxis / distanceToSun - 1);

        const adjustedSpeed = baseSpeed * speedFactor; // 조정된 속도
        angle += adjustedSpeed; // 각도를 조정된 속도로 증가

    }

    function startSweeping() {
        lastAngle = angle;
        sweeping = true;
        startAnimation();

        $('#orbitStart').parent().removeClass('on');
        $('#orbitStop').parent().addClass('on');

        document.getElementById('animationRate').disabled = true;
        document.getElementById('eccentricity').disabled = true;
        document.getElementById('areaSize').disabled = true;
        document.getElementById('areaDisplay').disabled = true;
        document.getElementById('areaErasing').disabled = true;
    }

    function eraseSweeps() {
        areas = [];
        sweeping = false;
        lastAngle = angle;
        newAreaLen = 0;
        accumulatedTime = 0;

        document.getElementById('animationRate').disabled = false;
        document.getElementById('eccentricity').disabled = false;
        document.getElementById('areaSize').disabled = false;
        document.getElementById('areaDisplay').disabled = false;
        document.getElementById('areaErasing').disabled = false;

        updateAnimation();
    }

    function drawSweeps() {
        const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const sunX = centerX - eccentricity * semiMajorAxis;

        areas.forEach(area => {
            ctx.beginPath();
            ctx.moveTo(sunX, centerY);

            for (let angle2 = area.startAngle; angle2 <= area.endAngle; angle2 += 0.001) {
                const x = centerX + semiMajorAxis * Math.cos(angle2);
                const y = centerY - semiMinorAxis * Math.sin(angle2);
                ctx.lineTo(x, y);
            }

            ctx.closePath();
            ctx.fillStyle = area.color;
            ctx.fill();
        });
    }

    let accumulatedTime = 0;

    function sweepArea() {
        if (areas.length === 0 || nextCreate) {
            const startAngle = lastAngle;
            const endAngle = startAngle;

            if (areas.length > 0 && areas[0].color === colors[colorIndex]) {
                colorIndex = (colorIndex + 1) % colors.length;
            }

            areas.push({
                startAngle,
                endAngle,
                color: colors[colorIndex],
            });
            nextCreate = false;
            colorIndex = (colorIndex + 1) % colors.length;
            newAreaLen += 1;
        }

        const currentArea = areas[areas.length - 1];
        currentArea.endAngle = angle;

        accumulatedTime += 1;

        const averageSegmentTime = calculateSegmentTime();

        if (accumulatedTime >= averageSegmentTime) {
            accumulatedTime = 0;
            nextCreate = true;

            lastAngle = currentArea.endAngle;
            currentArea.endAngle = angle;

            const sweepValue = parseInt(document.getElementById('areaSize').value);

            if (newAreaLen === sweepValue || !sweepContinuously) {
                sweeping = false;
                newAreaLen = 0;

                document.getElementById('animationRate').disabled = false;
                document.getElementById('eccentricity').disabled = false;
                document.getElementById('areaSize').disabled = false;
                document.getElementById('areaDisplay').disabled = false;
                document.getElementById('areaErasing').disabled = false;
            }
        }
    }

    function updateAnimation() {
        drawOrbit();
        drawSweeps();
        draw1nd();
        drawPlanet();

        if (sweeping) {
            sweepArea();
        }
    }

    function startAnimation() {
        if (!animationInterval) {
            animationInterval = setInterval(updateAnimation, 1);
        }
    }

    function pauseAnimation() {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
    }

    function updateAnimationRate() {
        animationRate = parseFloat(document.getElementById('animationRate').value);
    }

    function updateSweepSize() {
        const sweepValue = parseInt(document.getElementById('areaSize').value);

        document.getElementById('areaSizeValue').value = sweepValue;
        sweepSize = (Math.PI * 2) / sweepValue;

        eraseSweeps();
    }

    function toggleSweepMode() {
        sweepContinuously = document.getElementById('areaErasing').checked;
    }

    function updateEccentricity() {
        eccentricity = parseFloat(document.getElementById('eccentricity').value);
        document.getElementById('eccentricityValue').value = formatNum(eccentricity.toFixed(3));

        angle = 0;
        drawOrbit();
        updateAnimation();
        eraseSweeps();
    }

    function toggleFocus() {
        showFocus = document.getElementById('showMark').checked;
        drawOrbit();
        angle = 0;
        updateAnimation();
    }

    function toggleCenter() {
        showCenter = document.getElementById('ellipseMark').checked;
        drawOrbit();
        angle = 0;
        updateAnimation();
    }

    function toggleMinorAxis() {
        showMinorAxis = document.getElementById('shortRadiusMark').checked;
        drawOrbit();
        angle = 0;
        updateAnimation();
    }

    function toggleMajorAxis() {
        showMajorAxis = document.getElementById('longRadiusMark').checked;
        drawOrbit();
        angle = 0;
        updateAnimation();
    }

    document.getElementById('orbitStart').addEventListener('click', startAnimation);
    document.getElementById('orbitStop').addEventListener('click', pauseAnimation);
    document.getElementById('animationRate').addEventListener('change', updateAnimationRate);

    document.getElementById('eccentricity').addEventListener('change', updateEccentricity);

    document.getElementById('showMark').addEventListener('change', toggleFocus);
    document.getElementById('ellipseMark').addEventListener('change', toggleCenter);
    document.getElementById('shortRadiusMark').addEventListener('change', toggleMinorAxis);
    document.getElementById('longRadiusMark').addEventListener('change', toggleMajorAxis);

    document.getElementById('areaDisplay').addEventListener('click', startSweeping);
    document.getElementById('clearArea').addEventListener('click', eraseSweeps);
    document.getElementById('areaErasing').addEventListener('change', toggleSweepMode);
    document.getElementById('areaSize').addEventListener('change', updateSweepSize);

    document.getElementById('semiMajorAxisSlider').addEventListener('input', updateFromAxis);
    document.getElementById('orbitalPeriodSlider').addEventListener('input', updateFromPeriod);

    document.getElementById('eccentricity').addEventListener('input', function () {
        const eccentricityValue = this.value;
        document.getElementById('eccentricityValue').textContent = eccentricityValue;
        updateEccentricity(eccentricityValue);
        updateAnimation();
    });

    document.getElementById('animationRate').addEventListener('input', function () {
        const animationRateValue = this.value;
        updateAnimationRate(animationRateValue);
        updateAnimation();
    });

    updateSweepSize();
    drawOrbit();
    updateAnimation();

    function calculateSegmentTime() {
        const numSamples = 1000; // 궤도를 나누어 샘플링할 횟수
        const totalAngle = Math.PI * 2; // 한 바퀴 (360도)
        const deltaAngle = totalAngle / numSamples; // 각 샘플 간의 각도 차이
        const numSegments = parseInt(document.getElementById('areaSize').value); // 구간 수 가져오기

        let totalTime = 0; // 총 시간을 누적할 변수

        for (let i = 0; i < numSamples; i++) {
            const currentAngle = i * deltaAngle;
            const nextAngle = (i + 1) * deltaAngle;

            // 현재 각도에서의 거리와 속도 계산
            const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const planetX = centerX + semiMajorAxis * Math.cos(currentAngle);
            const planetY = centerY - semiMinorAxis * Math.sin(currentAngle);
            const distanceToSun = Math.sqrt(
                (planetX - (centerX - eccentricity * semiMajorAxis)) ** 2 + (planetY - centerY) ** 2,
            );

            // 속도 조정을 위한 가중치 인자
            const adjustmentFactor = 1.2;
            const baseSpeed = 0.003 * animationRate; // 기본 속도
            const speedFactor = 1 + adjustmentFactor * (semiMajorAxis / distanceToSun - 1);
            const adjustedSpeed = baseSpeed * speedFactor; // 조정된 속도

            // 현재 구간의 시간 계산
            const segmentTime = deltaAngle / adjustedSpeed;
            totalTime += segmentTime;
        }

        // 총 시간을 밀리초 단위로 변환
        const orbitPeriodInMilliseconds = totalTime;

        // 각 구간에 걸리는 평균 시간 계산
        const segmentTimeInMilliseconds = orbitPeriodInMilliseconds / numSegments;
        return segmentTimeInMilliseconds;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
