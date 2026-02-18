let wrap = document.querySelector('body');
let myScroll;
let scrollY = 0;
const isMobile = window.innerWidth < 1360;

function bodyLock() {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
}

function bodyUnlock() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
}

// 스크린 높이 계산
function syncHeight() {
    document.documentElement.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
}

// popup open
function modalOpen(el) {
    $('#' + el).fadeIn('fast');
    $('#dim').fadeIn('fast');
    bodyLock();
}

// popup close
function modalClose(el) {
    $(el).parents('.popWrap').fadeOut('fast');
    $('.popWrap').fadeOut('fast');
    $('#dim').fadeOut('fast');
    bodyUnlock();
}

// 헤더 스크롤
function headerActiveCheck() {
    const TopVal = $(window).scrollTop();
    const TopFixed1 = 100;

    if (TopFixed1 <= TopVal) {
        $('#header').show();
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    }
}

// tab menu event
function tabMenuEvent() {
    $('.tabMenu li').click(function () {
        const tabId = $(this).data('tab');
        const tabParent = $(this).closest('.tabWrap');

        $(tabParent).find('.tabMenu li').removeClass('active');
        $(this).addClass('active');

        $(tabParent).find('.tabPanel').removeClass('active');
        $('#' + tabId).addClass('active');
    });
}

// 텍스트 효과
function splitToChars($el) {
    if (!$el || !$el.length) return; // 요소가 없으면 그냥 종료

    $el.each(function () {
        const $this = $(this);
        const original = $this.html();
        if (!original) return; // 내용 없으면 종료

        let result = '';
        let i = 0;
        while (i < original.length) {
            const ch = original[i];
            if (ch !== '\n' && ch !== '\t') {
                if (ch === '<') {
                    const end = original.indexOf('>', i);
                    if (end === -1) break;
                    result += original.slice(i, end + 1);
                    i = end + 1;
                } else if (ch === ' ') {
                    result += ' ';
                    i++;
                } else {
                    result += `<span class="char">${ch}</span>`;
                    i++;
                }
            } else {
                i++;
            }
        }

        $this.html(result);
    });
}

// 키워드 기준 딜레이
function revealChars($el, baseDelay = 90, spacePause = 300, keywordPause = 600) {
    const $chars = $el.find('.char');
    let accDelay = 0;
    let buffer = '';

    $chars.each(function () {
        const ch = $(this).text();
        buffer += ch;

        setTimeout(() => {
            $(this).addClass('is-active');
        }, accDelay);

        if (
            buffer.endsWith('생각,') ||
            buffer.endsWith('시선') ||
            buffer.endsWith('함께') ||
            buffer.endsWith('커뮤니케이션') ||
            buffer.endsWith('다름입니다.') ||
            buffer.endsWith('집중한') ||
            buffer.endsWith('에이전시입니다') ||
            buffer.endsWith('생각하며')
        ) {
            accDelay += keywordPause;
        } else if (ch === ' ') {
            accDelay += spacePause;
        } else {
            accDelay += baseDelay;
        }
    });
}

// 메인 이벤트
function initIntroAnimation() {
    const $t1 = $('#text1');
    const $t3 = $('#text3');
    const $logo = $('#logo');
    const $sec1 = $('.sec1');
    const $sec2 = $('.sec2');
    const $htmlBody = $('html, body');

    if (!$t1.length && !$t3.length) return;

    $('#header').hide();

    if ($t1.length) splitToChars($t1);
    if ($t3.length) splitToChars($t3);

    /* ===============================
       Text1 Reveal
    =============================== */
    if ($t1.length) {
        $t1.show();
        revealChars($t1, 110, 320, 700);
    }

    /* ===============================
       Logo
    =============================== */
    if ($logo.length) {
        setTimeout(() => {
            $logo.addClass('is-active');
        }, 5500);
    }

    /* ===============================
       Header Show
    =============================== */
    setTimeout(() => {
        $('#header').show().addClass('active');
    }, 8500);

    /* ===============================
       Scroll Control
    =============================== */
    let userScrolled = false;

    $(window).on('wheel touchmove keydown', () => {
        if (userScrolled) return;

        userScrolled = true;
        $htmlBody.stop();

        setTimeout(() => {
            if ($t3.length) revealChars($t3);
        }, 1000);
    });

    /* ===============================
       Auto Scroll
    =============================== */
    setTimeout(() => {
        if ($sec2.length && !userScrolled) {
            $htmlBody.animate(
                {
                    scrollTop: $sec2.offset().top,
                },
                500,
            );
        }
    }, 8500);

    /* ===============================
       Text3 Reveal (Fallback)
    =============================== */
    if ($t3.length) {
        setTimeout(() => {
            revealChars($t3);
        }, 10000);
    }
}

// 메인 슬라이드
let mainSwiper = null;
function toggleSwiper() {
    if (!isMobile) {
        // 이미 있으면 재생성 금지
        if (!mainSwiper) {
            mainSwiper = new Swiper('.mainSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 180,
                centeredSlides: true,
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
            });
        }
        // Mobile: Swiper 제거
    } else if (mainSwiper) {
        mainSwiper.destroy(true, false); // 이벤트만 정리, DOM 유지
        mainSwiper = null; // 반드시 null
    }
}

// resize (debounce)
let resizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(toggleSwiper, 200);
});

// 프로젝트 데이터
function loadProjectDetail() {
    const currentId = new URLSearchParams(window.location.search).get('id');
    if (!currentId) return;

    fetch('./prjt.json')
        .then(res => res.json())
        .then(data => {
            const { projects } = data;
            if (!Array.isArray(projects)) return;

            const p = projects.find(proj => proj.id === currentId);
            if (!p) return;

            /* ===============================
                공통 유틸
            =============================== */
            const setText = (id, value) => {
                const el = document.getElementById(id);
                if (el && value) el.innerHTML = value;
            };

            const setImg = (id, src) => {
                const el = document.getElementById(id);
                if (!el) return;

                if (src) {
                    el.src = src;
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            };

            const setBg = (id, src) => {
                const el = document.getElementById(id);
                if (!el) return;

                if (src) {
                    el.style.backgroundImage = `url(${src})`;
                    el.style.display = '';
                } else {
                    el.style.backgroundImage = 'none';
                    el.style.display = 'none';
                }
            };

            const hideRowByChild = childId => {
                const child = document.getElementById(childId);
                const row = child?.closest('.row');
                if (row) row.style.display = 'none';
            };

            /* ===============================
                Theme
            =============================== */
            const applyTheme = theme => {
                if (!theme) return;
                const root = document.getElementById('container');
                root.style.setProperty('--themecolor', theme.color);
                root.style.setProperty('--themeborder', theme.border);
            };

            applyTheme(p.theme);

            /* ===============================
                Background / Info
            =============================== */
            setBg('projectBg', p.bg);
            document.getElementById('container')?.classList.add(p.id);
            setText('projectTitle', p.title);

            setText('client', p.info?.client);
            setText('period', p.info?.period);
            setText('category', p.info?.category);

            const urlEl = document.getElementById('url');
            if (urlEl) {
                if (p.info?.url?.link) {
                    urlEl.innerHTML = `<a href="${p.info.url.link}" target="_blank">${p.info.url.label}</a>`;
                } else {
                    urlEl.innerHTML = p.info?.url?.label || '';
                }
            }

            /* ===============================
                Video
            =============================== */
            if (p.video?.src) {
                document.getElementById('videoSource').src = p.video.src;
                document.getElementById('projectVideo').load();
            } else {
                document.getElementById('videoWrap').style.display = 'none';
            }

            /* ===============================
                Section Helper
            =============================== */
            const toggleSection = (cond, titleId, fn) => {
                if (cond) fn();
                else hideRowByChild(titleId);
            };

            toggleSection(p.overview?.title || p.overview?.text || p.overview?.image, 'overviewTitle', () => {
                setText('overviewTitle', p.overview.title);
                setText('overviewText', p.overview.text);
                setImg('overviewImg', p.overview.image);
            });

            toggleSection(
                p.analyze?.title || p.analyze?.asis?.length || p.analyze?.tobe?.length,
                'analyzeTitle',
                () => {
                    setText('analyzeTitle', p.analyze.title);
                    ['analyzeAsis', 'analyzeTobe'].forEach(id => {
                        const el = document.getElementById(id);
                        el.innerHTML = '';
                        p.analyze[id === 'analyzeAsis' ? 'asis' : 'tobe']?.forEach(v => {
                            el.innerHTML += `<li>${v}</li>`;
                        });
                    });
                    setImg('analyzeImg', p.analyze.image);
                },
            );

            toggleSection(p.strategy?.title || p.strategy?.text || p.strategy?.points?.length, 'strategyTitle', () => {
                setText('strategyTitle', p.strategy.title);
                setText('strategyText', p.strategy.text);
                const ul = document.getElementById('strategyPoints');
                ul.innerHTML = '';
                p.strategy.points?.forEach(v => {
                    ul.innerHTML += `<li>${v}</li>`;
                });
                setText('strategyPointsText', p.strategy.pointsText);
                setImg('strategyImg', p.strategy.image);
            });

            toggleSection(p.projectGoal?.title || p.projectGoal?.text || p.projectGoal?.image, 'goalTitle', () => {
                setText('goalTitle', p.projectGoal.title);
                setText('goalText', p.projectGoal.text);
                setImg('goalImg', p.projectGoal.image);
            });

            toggleSection(p.concept?.title || p.concept?.text || p.concept?.image, 'conceptTitle', () => {
                setText('conceptTitle', p.concept.title);
                setText('conceptText', p.concept.text);
                setImg('conceptImg', p.concept.image);
            });

            /* ===============================
                Elements
            =============================== */
            if (p.elements?.images?.length) {
                setText('elementsTitle', p.elements.title);
                const box = document.getElementById('elementsImages');
                box.innerHTML = '';
                p.elements.images.forEach(src => {
                    box.innerHTML += `<img src="${src}" alt="">`;
                });
            } else {
                hideRowByChild('elementsTitle');
            }

            /* ===============================
                Credits
            =============================== */
            toggleSection(p.credits?.management || p.credits?.planning || p.credits?.design, 'creditsTitle', () => {
                setText('creditsTitle', p.credits.title);
                Object.keys(p.credits).forEach(k => setText(k, p.credits[k]));
            });

            /* ===============================
                Prev / Next
            =============================== */
            const footerNav = document.querySelector('.footerNav');
            if (!footerNav) return;

            const idx = projects.findIndex(v => v.id === currentId);
            const prev = projects[idx - 1];
            const next = projects[idx + 1];

            const setNav = (el, proj) => {
                if (!el) return;
                if (proj) el.href = `project_view.html?id=${proj.id}`;
                else {
                    el.classList.add('disabled');
                    el.removeAttribute('href');
                }
            };

            setNav(footerNav.querySelector('.prev a'), prev);
            setNav(footerNav.querySelector('.next a'), next);
        });
}

// 어바웃 섹션2 이벤트
function initAboutSec2Cards() {
    /* global ScrollTrigger */
    gsap.registerPlugin(ScrollTrigger);

    const section2 = document.querySelector('.aboutSec2.cards-wrap');
    const cards2 = gsap.utils.toArray('.aboutSec2 .card');

    // 기존 section2 관련 ScrollTrigger 제거
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section2) {
            trigger.kill();
        }
    });

    if (section2 && cards2.length) {
        if (window.innerWidth <= 1360) {
            // cards2.forEach((card, i) => {
            //     gsap.fromTo(
            //         card,
            //         { y: 0, opacity: 1 },
            //         {
            //             y: 0 - i * 0,
            //             opacity: 1,
            //             scrollTrigger: {
            //                 trigger: section2,
            //                 start: 'top top',
            //                 end: '+=100%',
            //                 pin: false,
            //                 scrub: 1.5,
            //             },
            //         },
            //     );
            // });

            // 카드 5개가 모두 끝날 때까지 pin 유지
            const totalScroll = cards2.length * 100; // 더 천천히 진행되도록 스크롤 길이 증가 // 카드 수에 비례한 스크롤 길이
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section2,
                    start: 'top top',
                    end: '+=' + totalScroll + '%',
                    pin: true,
                    scrub: true,
                },
            });
            // 카드가 위로 올라가면서 자연스럽게 사라짐
            cards2.forEach((card, index) => {
                // 아래에서 천천히 올라와 위로 빠져나감
                tl.fromTo(
                    card,
                    { y: 600, opacity: 1 },
                    { y: -400, opacity: 1, ease: 'none', duration: 1.5 },
                    index * 0.5, // 카드 간 간격 증가 (더 천천히)
                );
                // 중앙에서 머무는 구간 확대
                tl.to(card, { opacity: 1, duration: 0.4 }, index * 1.2 + 0.3);
                tl.to(card, { opacity: 1, duration: 0.4 }, index * 1.2 + 1);
            });
        } else {
            cards2.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { y: 400, opacity: 1 },
                    {
                        y: -400 - i * 40,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: section2,
                            start: 'top top',
                            end: 'bottom top',
                            pin: true,
                            scrub: true,
                        },
                    },
                );
            });
        }
    }
}

// 어바웃 섹션3 이벤트
function initAboutSec3Cards() {
    gsap.registerPlugin(ScrollTrigger);

    const section3 = document.querySelector('.aboutSec3.cards-wrap');
    const sec3Cards = gsap.utils.toArray('.aboutSec3 .card');

    if (!section3 || !sec3Cards.length) return;

    // 기존 section3 관련 ScrollTrigger 제거 (중복 방지)
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section3) {
            trigger.kill();
        }
    });

    gsap.set(sec3Cards, {
        zIndex: (i, el, arr) => arr.length - i,
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section3,
            start: 'top top',
            end: `+=${(sec3Cards.length - 1) * 150}%`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
        },
    });

    sec3Cards.forEach((card, index) => {
        tl.fromTo(
            card,
            { y: 0, opacity: 1 },
            {
                y: -1000,
                opacity: 1,
                duration: 1 - index * 0.15,
                ease: 'power1.out',
            },
        );
    });
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
    });

    wrap = document.getElementById('wrap');
    // selectbox
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
            selBtn.text($(this).text());
            selWrap.removeClass('open');
            selLayer.slideUp('fast');
        });
    });
    // selectbox close
    $(document).on('click', e => {
        e.stopPropagation();
        const selWrap = $('.custom-sel');
        const selLayer = selWrap.find('ul');

        if (selWrap.has(e.target).length === 0) {
            selWrap.removeClass('open');
            selLayer.slideUp('fast');
        }
    });

    // 메뉴 버튼 액티브
    $('.navBtn button').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).toggleClass('active');
        $('#header').toggleClass('on');
        $('.navListWrap').toggleClass('active');

        if ($(this).hasClass('active')) {
            bodyLock();
        } else {
            bodyUnlock();
        }
    });

    // 스크롤 버튼 공통 함수 (top 기준)
    function scrollToElementTop($target, duration = 500) {
        const targetTop = $target.offset().top; // top 기준
        const currentScroll = $(window).scrollTop();

        // 이미 스크롤 위치가 targetTop 이상이면 이동 안 함
        if (currentScroll >= targetTop) return;

        $('html, body').animate({ scrollTop: targetTop }, duration);
    }

    // 버튼 클릭 이벤트
    $('.scrollBtn button').on('click', () => {
        scrollToElementTop($('.sub .conArea'));
    });

    $('.scrollBtnMain button').on('click', () => {
        scrollToElementTop($('.sec3'));
    });

    // 스크롤탑
    const $scrollBtn = $('#scrollTopBtn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $scrollBtn.fadeIn();
        } else {
            $scrollBtn.fadeOut();
        }
    });
    $scrollBtn.click(() => {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // 섹션4 백그라운드
    const layer = $('.background');
    const bgPool = [];

    $.getJSON('prjt.json', data => {
        const usedBg = new Set();
        bgPool.length = 0;

        data.projects.forEach(p => {
            if (p.bg && !usedBg.has(p.bg)) {
                usedBg.add(p.bg);
                bgPool.push(p.bg);
            }
        });
        if (!bgPool.length) {
            // console.warn('bgPool is empty');
            return;
        }
        initCards();
    });

    function spawnItemResponsive() {
        if (!bgPool.length) return;

        const $block = $('<div class="block"></div>');
        const $img = $('<img>');
        const src = bgPool[Math.floor(Math.random() * bgPool.length)];

        const winW = $(window).width();
        const winH = $(window).height();

        // 이미지 크기 설정 (반응형)
        const MIN_W = winW <= 767 ? 40 : 120;
        const MAX_W = winW <= 767 ? 140 : 320;
        const MIN_H = winW <= 767 ? 40 : 120;
        const MAX_H = winW <= 767 ? 140 : 320;

        const width = Math.random() * (MAX_W - MIN_W) + MIN_W;
        const height = Math.random() * (MAX_H - MIN_H) + MIN_H;

        // 중앙 회피 최소 거리 및 최대 offset (모바일/PC 분기)
        let MIN_OFFSET_X;
        let MAX_OFFSET_X;
        let MIN_OFFSET_Y;
        let MAX_OFFSET_Y;

        if (winW <= 767) {
            MIN_OFFSET_X = 40;
            MAX_OFFSET_X = Math.min(120, winW / 2 - 40);
            MIN_OFFSET_Y = 30;
            MAX_OFFSET_Y = Math.min(100, winH / 2 - 30);
        } else {
            MIN_OFFSET_X = winW * 0.1;
            MAX_OFFSET_X = winW * 0.45;
            MIN_OFFSET_Y = winH * 0.1;
            MAX_OFFSET_Y = winH * 0.35;
        }

        const dirX = Math.random() < 0.5 ? -1 : 1;
        const dirY = Math.random() < 0.5 ? -1 : 1;

        const offsetX = dirX * (Math.random() * (MAX_OFFSET_X - MIN_OFFSET_X) + MIN_OFFSET_X);
        const offsetY = dirY * (Math.random() * (MAX_OFFSET_Y - MIN_OFFSET_Y) + MIN_OFFSET_Y);

        // 이미지 적용
        $img.attr('src', src).css({
            width: width + 'px',
            height: height + 'px',
            objectFit: 'cover',
        });

        // offset 저장 (resize 대응)
        $block.data('offset-x', offsetX);
        $block.data('offset-y', offsetY);

        // 초기 transform (작게, opacity 0)
        $block.css({
            transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(0.6)`,
            opacity: 0,
        });

        $block.append($img);
        layer.append($block);

        // 등장 애니메이션
        setTimeout(() => {
            $block.css({
                transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(1)`,
                opacity: 1,
            });
        }, 50);

        // 제거
        setTimeout(() => $block.remove(), 5000);
    }

    // 반응형: 윈도우 리사이즈 시 transform 재적용
    $(window).resize(() => {
        $('.block').each(function () {
            const offsetX = $(this).data('offset-x');
            const offsetY = $(this).data('offset-y');
            if (offsetX != null && offsetY != null) {
                $(this).css({
                    transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(1)`,
                });
            }
        });
    });
    // spawn 반복 (화면 크기에 따라 주기 조정 가능)
    setInterval(spawnItemResponsive, 600);

    // 어바웃섹션5 백그라운드
    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function initCards() {
        const CARD_COUNT = 8;

        $('.col').each(function () {
            const $col = $(this);
            const $track = $col.find('.track');

            // 카드 초기화
            $track.empty();

            // 컬럼마다 이미지 셔플 (중복 없음)
            let source = [];
            while (source.length < CARD_COUNT) {
                source = source.concat(shuffle(bgPool));
            }
            source.length = CARD_COUNT;

            const finalImages = source.concat(source);

            finalImages.forEach(img => {
                $track.append(`<div class="card" style="background-image:url('${img}');"></div>`);
            });

            const trackHeight = $track[0].scrollHeight / 2;

            let pos = $col.hasClass('up') ? 0 : -trackHeight;
            const speed = $col.hasClass('up') ? -0.3 : 0.3;

            function animate() {
                pos += speed;

                if (speed < 0 && pos <= -trackHeight) pos = 0;
                if (speed > 0 && pos >= 0) pos = -trackHeight;

                $track.css('transform', `translateY(${pos}px)`);
                requestAnimationFrame(animate);
            }

            animate();
        });
    }
});

window.addEventListener('load', () => {
    toggleSwiper();
    syncHeight();
    loadProjectDetail();
    initIntroAnimation();
    headerActiveCheck();
    tabMenuEvent();
    initAboutSec2Cards();
    initAboutSec3Cards();
});

window.addEventListener('resize', () => {
    syncHeight();
    initAboutSec2Cards();
    initAboutSec3Cards();
});

window.addEventListener('scroll', () => {
    headerActiveCheck();
});
