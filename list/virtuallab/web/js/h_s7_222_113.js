/* [고등1] > 물리학 */
// 스피커에서 전류의 자기 작용
/** ******************************************************************************
 * Modification Information
 * Date              Developer           Content
 * ----------        -------------       -------------------------
 * 2024/09/05                            신규생성
 * -------------------------------------------------------------------------------
 ******************************************************************************** */

/* 오디오 선언 */
const audioGoal = new Audio('../../media/h_s7_222_113/1-goal.mp3'); // 활동목표 오디오
const audioAct1_01 = new Audio('../../media/h_s7_222_113/2-act1_01.mp3'); // 활동1_01 오디오
const audioAct1_02 = new Audio('../../media/h_s7_222_113/2-act1_02.mp3'); // 활동1_02 오디오
const audioGoal_pop = new Audio('../../media/h_s7_113_035/click.mp3'); // 활동목표 팝업

/* 오디오 볼륨 [0~1] 선언 */
audioGoal.volume = 1;
audioAct1_01.volume = 1;
audioAct1_02.volume = 1;
audioGoal_pop.volume = 1;

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

        audioGoal_pop.load();
        audioGoal_pop.play();
        audioGoal_pop.mute = true;
        audioGoal_pop.pause();
        audioGoal_pop.currentTime = 0;
        audioGoal_pop.mute = false;

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
    var wConHsound = $('.click-sound');
    const wConHhome = $('.header-area .click-home');
    const wConHclose = $('.header-area .click-close');

    // 음소거 버튼
    wConHsound.on('click', function () {
        toggleMute();

        // 음소거 버튼 활성화
        if (!$('.click-sound').hasClass('active')) {
            $('.click-sound').addClass('active');
            /* 오디오 볼륨 [0] 설정 */
            audioGoal.volume = 0;
            audioAct1_01.volume = 0;
            audioAct1_02.volume = 0;
            audioGoal_pop.volume = 0;
        }
        // 음소거 버튼 비활성화
        else {
            $('.click-sound').removeClass('active');
            /* 오디오 볼륨 [1] 설정 */
            audioGoal.volume = 1;
            audioAct1_01.volume = 1;
            audioAct1_02.volume = 1;
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
        let audioTimeout, hideTimeout, showTimeout;
        let coilTimeout;
        let contentStartSet;

        // 가이드 모달 활성화
        $('.guide-balloon-tip-wrap1').addClass('active');
        $('.guide-balloon-tip-wrap1 .bubble-text1').addClass('active');

        // 1.5초 후 오디오 재생 (타이머 설정)
        audioTimeout = setTimeout(function () {
            audioAct1_01.load();
            audioAct1_01.play();
        }, 1500);

        // 11초 후 모달과 텍스트 비활성화 (타이머 설정)
        hideTimeout = setTimeout(function () {
            $('.guide-balloon-tip-wrap1').removeClass('active');
            $('.guide-balloon-tip-wrap1 .bubble-text1').removeClass('active');
        }, 11000);

        // 12초 후 모달과 텍스트 활성화 (타이머 설정)
        showTimeout = setTimeout(function () {
            $('.guide-balloon-tip-wrap2').addClass('active');
            $('.guide-balloon-tip-wrap2 .bubble-text2').addClass('active');
        }, 12000);

        // 13.5초 후 오디오 재생 (타이머 설정)
        audioTimeout = setTimeout(function () {
            audioAct1_02.load();
            audioAct1_02.play();
        }, 13500);

        // 19초 후 모달과 텍스트 비활성화 (타이머 설정)
        hideTimeout = setTimeout(function () {
            $('.guide-balloon-tip-wrap2').removeClass('active');
            $('.guide-balloon-tip-wrap2 .bubble-text2').removeClass('active');
        }, 19000);

        // 20초 후 손가락 가이드
        setTimeout(function () {
            $('.gesture-magnet-finger1').addClass('active');
            $('#chooseFile').prop('disabled', false);
            setup();
        }, 17500);

        // 조건에 따라 타이머를 취소할 경우
        // clearTimeout(audioTimeout); // 오디오 재생 타이머 취소
        // clearTimeout(hideTimeout);  // 모달 비활성화 타이머 취소
        // clearTimeout(magnetTimeout);  // 자석 모션 비활성화 타이머 취소
    }

    // 파일 업로드
    $('#chooseFile').bind('change', function () {
        var filename = $('#chooseFile').val();
        if (/^\s*$/.test(filename)) {
            $('.file-upload').removeClass('active');
            $('#noFile').text('No file chosen...');
        } else {
            stopFunction();
            const file = $('#chooseFile')[0].files[0];
            setupAudio(file);
            speakerElement.classList.remove('active');

            $('.file-upload').addClass('active');
            $('#noFile').text(filename.replace('C:\\fakepath\\', ''));
        }

        if ($('.file-upload').hasClass('active')) {
            $('.item-speaker').addClass('active');
            $('.time-area').hide();
            $('.music').addClass('active');
        }
    });
    $('.item-file-uplode').on('click', function () {
        $('.gesture-magnet-finger1').removeClass('active');

        if ($('.file-upload').hasClass('active')) {
            stopFunction();
            $('.file-upload').removeClass('active');
            $('.item-speaker').removeClass('active');

            if (audioSource) {
                audioSource.stop();
            }
            return false;
        }
    });
    $('.close-btn').on('click', function () {
        $('.popup-layer').removeClass('active');
        $('.scene-layer-area1').css('z-index', '2');
    });

    var d, h, m;
    function displayTime() {
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();

        if (h <= 9) h = '0' + h;
        if (m <= 9) m = '0' + m;

        time = h + ':' + m;
        document.getElementById('Time').innerHTML = time;

        setTimeout(displayTime, 1000);
    }
    displayTime();

    const randomCanvas = document.getElementById('randomCanvas');
    const canvas = document.getElementById('visualizer');

    const randomCtx = randomCanvas.getContext('2d');
    const waveCtx = canvas.getContext('2d');

    randomCanvas.width = window.innerWidth;
    randomCanvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var wave_data = new Array(60);
    var waving, randomParticleAnimation;
    var x = 0,
        x_0 = window.innerWidth / 2 - 100,
        y_0 = window.innerHeight / 2,
        long_depth = 30;
    var y_1 = y_0 + long_depth + 50,
        osc_width = 10;
    var interval = 55;
    var frequency = 0.5,
        amplitude = 8;
    var step_number = 0,
        go = 0,
        stop = 0;
    let audioContext, analyser, audioSource;
    let pitchUpdateInterval, speedNormalizationInterval;
    let particlePositions = [],
        randomParticles = [];
    let nextFrequency = frequency;
    let lerpFrequency = 0.3;
    let targetInterval = 55;
    const particleRadius = 3.5;
    let waveParticleAnimation;
    let endTimeout;
    let speakerElement = document.querySelector('.item-speaker');
    let slowMotionTimeout;

    function setup() {
        initializeRandomParticles();
        animateRandomParticles();
        initializeParticles();
    }

    function animateWaveParticlesWithWaveEffect() {
        const canvasWidth = randomCanvas.width;
        const canvasHeight = randomCanvas.height;

        waveParticleAnimation = setInterval(() => {
            waveCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            waveCtx.fillStyle = '#4da6ff';

            particlePositions.forEach((particle, index) => {
                const waveEffect = wave_data[index % wave_data.length];
                particle.x += particle.direction * particle.offset;

                if (particle.x > particle.initialX + 20 || particle.x < particle.initialX - 20) {
                    particle.direction *= -1;
                }

                const x = particle.x + waveEffect;
                const y = particle.y;

                waveCtx.beginPath();
                waveCtx.arc(x, y, particle.radius, 0, 2 * Math.PI);
                waveCtx.fill();
            });
        }, 80);
    }
    function setupAudio(file) {
        const reader = new FileReader();
        reader.onload = e => {
            if (audioContext) audioContext.close();

            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(e.target.result, buffer => {
                if (audioSource) {
                    audioSource.disconnect();
                    clearInterval(pitchUpdateInterval);
                }

                audioSource = audioContext.createBufferSource();
                analyser = audioContext.createAnalyser();

                audioSource.buffer = buffer;
                audioSource.connect(analyser);
                analyser.connect(audioContext.destination);

                audioSource.playbackRate.value = 1.0;

                resetWave();
                audioSource.start();
                switchCanvas();
                goFunction();
                startPitchMonitoring();

                // 2분 후에 'active' 클래스를 추가하도록 수정
                if ($('.file-upload').hasClass('active')) {
                    slowMotionTimeout = setTimeout(function () {
                        $('.gesture-magnet-finger2').addClass('active');
                    }, 120000);
                }

                audioSource.onended = () => {
                    clearTimeout(endTimeout);
                    endTimeout = setTimeout(() => {
                        stopFunction();
                    }, 5000);
                };

                speedNormalizationInterval = setInterval(normalizeSpeed, 700);
            });
        };
        reader.readAsArrayBuffer(file);
    }

    function startSlowMotion() {
        audioSource.playbackRate.value = 0.5;

        clearInterval(waving);
        interval = 110;
        waving = setInterval(run_waves, interval);

        speedNormalizationInterval = setInterval(normalizeSpeed, 700);
    }

    function normalizeSpeed() {
        if (interval > targetInterval) {
            interval -= 5;
            clearInterval(waving);
            waving = setInterval(run_waves, interval);
        }

        if (audioSource.playbackRate.value < 1.0) {
            audioSource.playbackRate.value += 0.05;
        } else {
            clearInterval(speedNormalizationInterval);
        }
    }

    function switchCanvas(showRandom = false) {
        const rCanvas = document.getElementById('randomCanvas');
        const wCanvas = document.getElementById('visualizer');

        if (showRandom) {
            rCanvas.style.display = 'block';
            wCanvas.style.display = 'none';
        } else {
            rCanvas.style.display = 'none';
            wCanvas.style.display = 'block';
        }
    }

    function goFunction() {
        if (go === 0) {
            go = 1;
            stop = 0;
            waving = setInterval(run_waves, interval);
            animateWaveParticlesWithWaveEffect();
        }
    }

    function run_waves() {
        if (stop === 1) return;

        lerpFrequency = lerp(lerpFrequency, nextFrequency, 0.05);
        const enhancedAmplitude = amplitude * 6;
        const waveEffect = enhancedAmplitude * Math.sin((step_number * lerpFrequency * Math.PI) / 10);

        wave_data.unshift(waveEffect);
        wave_data.pop();

        step_number++;
    }

    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    function initializeRandomParticles() {
        const canvasWidth = randomCanvas.width;
        const canvasHeight = randomCanvas.height;

        const density = 0.003; //밀도
        const particleCount = Math.floor(canvasWidth * canvasHeight * density);

        randomParticles = [];
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * canvasWidth;
            const y = Math.random() * canvasHeight;

            randomParticles.push({
                x,
                y,
                radius: particleRadius,
                initialX: x,
                direction: Math.random() < 0.5 ? -1 : 1,
                offset: Math.random() * 1.5,
            });
        }
    }

    function animateRandomParticles() {
        const canvasWidth = randomCanvas.width;
        const canvasHeight = randomCanvas.height;

        randomParticleAnimation = setInterval(() => {
            randomCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            randomCtx.fillStyle = '#4da6ff';

            randomParticles.forEach(particle => {
                particle.x += particle.direction * particle.offset;

                if (particle.x > particle.initialX + 20 || particle.x < particle.initialX - 20) {
                    particle.direction *= -1;
                }

                randomCtx.beginPath();
                randomCtx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
                randomCtx.fill();
            });
        }, 80);
    }

    function initializeParticles() {
        const rowCount = 35;
        const particleCount = 120;
        const spacing = 10;
        const maxYOffset = 200;
        const maxXOffset = 15;
        const minDistance = particleRadius * 2 + 5;

        wave_data = new Array(particleCount).fill(0);
        particlePositions = [];

        for (let row = 0; row < rowCount; row++) {
            for (let i = 0; i < particleCount; i++) {
                let x, y;
                let attempts = 0;

                do {
                    x = x_0 + i * spacing + getRandomOffset(-maxXOffset, maxXOffset);
                    y =
                        y_1 -
                        (rowCount * spacing) / 2 +
                        row * spacing +
                        getRandomOffset(-maxYOffset * (i / particleCount), maxYOffset * (i / particleCount));
                    attempts++;
                } while (attempts < 100 && checkOverlap(x, y, particlePositions, minDistance));

                particlePositions.push({
                    x,
                    y,
                    radius: particleRadius,
                    initialX: x,
                    direction: Math.random() < 0.5 ? -1 : 1,
                    offset: Math.random() * 1.5,
                });
            }
        }
    }

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    function checkOverlap(x, y, particles, minDist) {
        for (let particle of particles) {
            if (distance(x, y, particle.x, particle.y) < minDist) {
                return true;
            }
        }
        return false;
    }

    function getRandomOffset(min, max) {
        return Math.random() * (max - min) + min;
    }

    function startPitchMonitoring() {
        pitchUpdateInterval = setInterval(monitorPitch, 500);
    }

    function monitorPitch() {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);

        const maxFrequency = Math.max(...dataArray);
        const normalizedFreq = (maxFrequency / 255) * 0.6 + 0.1;

        nextFrequency = normalizedFreq;
    }

    function resetWave() {
        step_number = 0;
        wave_data = new Array(60).fill(0);
        initializeParticles();
    }

    function stopFunction() {
        if (stop === 0) {
            stop = 1;
            go = 0;

            clearInterval(randomParticleAnimation);
            clearInterval(pitchUpdateInterval);
            clearInterval(speedNormalizationInterval);
            clearInterval(waving);
            clearTimeout(slowMotionTimeout);

            $('.item-speaker').removeClass('active');
            $('.file-upload').removeClass('active');
            $('.time-area').show();
            $('.music').removeClass('active');

            wave_data = new Array(60).fill(0);
            step_number = 0;

            if (audioSource) {
                audioSource.disconnect();
                audioSource = null;
                $('#chooseFile').val(null);
                $('.gesture-magnet-finger1').addClass('active');
                $('.popup-layer').addClass('active');
                $('.scene-layer-area1').css('z-index', '4');

                if ($('.file-upload').hasClass('active') === false) {
                    $('.gesture-magnet-finger2').removeClass('active');
                }
            }

            interval = 55;
        }
    }

    window.addEventListener('resize', () => {
        randomCanvas.width = window.innerWidth;
        randomCanvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeRandomParticles();
    });

    let isMuted = false; // 음소거 상태 변수

    function toggleMute() {
        isMuted = !isMuted;

        if (audioContext && analyser) {
            if (isMuted) {
                analyser.disconnect(audioContext.destination);
            } else {
                analyser.connect(audioContext.destination);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageView();
});
