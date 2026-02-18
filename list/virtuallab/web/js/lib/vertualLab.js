// audio
function audioPlay(name, type) {
    let $audio = $('#audio');
    let $src = 'common/media/' + name + '.mp3';
    if (type !== undefined) {
        $audio = $('#' + type);
        if (type !== 'bgm') {
            $src = 'media/' + name;
        }
    }
    $audio[0].pause();
    $audio.attr('src', $src);
    $audio[0].load();
    $audio[0].oncanplaythrough = $audio[0].play();
}

function audioStop(type) {
    if (type === undefined) {
        var $audio = $('audio').not('#bgm'); // 일부만 멈춤
    } else {
        var $audio = $('audio'); // 전체 멈춤
    }
    $audio.each(function () {
        $(this)[0].pause();
        $(this).removeAttr('src');
        if (!isNaN($(this)[0].duration)) {
            $(this)[0].currentTime = 0;
        }
    });
}

// 문항 - 알럿메시지
function showMsg(target, text, time, prop) {
    const delay = time || 1500;
    $(target).stop().fadeIn(200);

    !prop && $(target).delay(delay).fadeOut(200);
    $(target).find('p').html(text);
}

/* 리셋 */
const virtualReset = {
    basicFn() {
        // 전체적으로 공통
        $('[drop-refresh]').trigger('click');
        $('#wrap, .modal')
            .find('.active-show, .active, .answered, .corrected, .hidden, .guide-open')
            .removeClass('active answered corrected hidden guide-open');
        $('[data-show-target]').each(function () {
            const t = $(this);
            const type = t.data('type');
            const target = t.data('show-target');

            t.removeClass('active-show');
            $(target).each(function () {
                if (type) {
                    $(this).addClass('invisible');
                } else {
                    $(this).hide();
                }
            });
        });
        $('input[type=checkbox], input[type=radio]').prop('checked', false);
        $('.nav [data-toggle="tab"]:first-child, .tab-content>.tab-pane:first-child').addClass('active');
        charAniClear();
        $('[data-ani]').each(function () {
            $(this)
                .children('img')
                .attr('src', '../../../common/images/' + $(this).attr('data-ani') + '/1.png')
                .data('stemp', 1);
        });
    },
    themeFn() {}, // 각페이지별
    run() {
        this.basicFn();
        this.themeFn();
    },
};

const virtualStart = {
    basicFn() {
        // 전체적으로 공통
        $('#wrap').addClass('start');
        $('#intro').hide();
        // $('.virtual-wrap').show();
        audioStop();
        const $tg = $('.virtual').first();
        $tg.addClass('active').siblings().removeClass('active');
    },
    themeFn() {}, // 각페이지별
    run() {
        this.basicFn();
        this.themeFn();
        charAniStart();
    },
};

jQuery($ => {
    if ($('#wrap').hasClass('lab-dubble')) {
        console.log('더블');
        $('#intro').hide();
    }

    audioPlay('bgm', 'bgm');
    charAniStart();
    $('[data-toggle="modal"], [data-toggle="pane"]').on('click', function () {
        charAniClear();
        const aniObj = $($(this).attr('data-target')).find('.char-ani');
        setTimeout(() => {
            charAniStart(aniObj);
        }, 1000);
    });

    $('.sbtn, .btn-sound, .btn-plus, .btn-start').click(() => {
        audioPlay('click');
    });

    $('#wrap').addClass('ready');
    let bubbleSoundPlay;
    // 클릭 이벤트
    $(document).on('click', '[data-audio]', function () {
        const $t = $(this);
        const $tg = $t.attr('data-target');
        const $parent = $t.parent();
        const $showtg = $(this).data('target');
        const $steps = $($showtg).find('.modal-body');

        if ($tg) {
            bubbleSoundPlay = setTimeout(() => {
                audioStop();
                audioPlay($(this).attr('data-audio'), 'voice');
            }, 2000);
            $steps.find('.intro-step').eq(0).show().siblings().hide();
        } else {
            clearTimeout(bubbleSoundPlay);
            audioPlay($(this).attr('data-audio'), 'voice');
        }

        if ($parent.hasClass('intro-step')) {
            $parent.next().show().siblings().hide();
            charAniStart($('.modal-intro').filter('.show').find('.char-ani'));
        }

        $('#voice')[0].addEventListener('ended', () => {
            charAniClear();
        });
    });

    $('.modal')
        .on('hide.bs.modal', function (e) {
            clearTimeout(bubbleSoundPlay);
            audioStop();
            charAniClear();
            $(this)
                .find('[data-ani]')
                .each(function () {
                    $(this)
                        .children('img')
                        .attr('src', '../../../common/images/' + $(this).attr('data-ani') + '/1.png')
                        .data('stemp', 1);
                });
        })
        .on('hidden.bs.modal', e => {
            charAniStart();
        });

    $('.icon-modal-close').on('click', () => {
        audioStop();
    });

    $('.btn-start').on('click', () => {
        virtualStart.run();
    });

    $('.btn-show-home').on('click', () => {
        $('#wrap').removeClass('ready');
    });

    $('.guide-wrp').on('click', function () {
        $(this).closest('.guide-open').removeClass('guide-open');
    });
    /* 홈버튼 */

    $('#wrap').on('click', '[data-toggle="reset"]', () => {
        clearTimeout(guideOpen);
        clearTimeout(guideAudioPlay);

        $('#wrap').removeClass('start');
        $('#wrap').addClass('ready');
        $('.virtual-wrap').hide();
        $('.virtual').removeClass('active');
        audioStop(bgm);
        if (!$('.btn-mute').hasClass('muted')) {
            audioPlay('bgm', 'bgm');
        }
        virtualReset.run();
        charAniStart();

        if ($('#wrap').hasClass('lab-dubble')) {
            $('#intro .intro').hide();
            $('.lab-before').show();
        } else {
            $('#intro').show();
        }
    });

    $('[data-reload="restart"]').on('click', () => {
        clearTimeout(guideOpen);
        clearTimeout(guideAudioPlay);
        $('#wrap').removeClass('start');
        $('#wrap').addClass('ready');
        $('.virtual-wrap').hide();
        $('.virtual').removeClass('active');
        virtualReset.run();
        charAniStart();
    });

    $('.lab-dubble .lab-before').on('click', 'button', function () {
        const tIntroName = $(this).attr('data-intro-name');
        $('.lab-before').hide();
        $('.lab-main').show();
        $('.' + tIntroName)
            .show()
            .siblings()
            .hide();
    });

    // $('[data-toggle="reset"]').on('click', function(){
    // 	clearTimeout(guideOpen);
    // 	clearTimeout(guideAudioPlay);
    // 	$('#wrap').removeClass('start');
    // 	$('#intro').show();
    // 	$('.virtual-wrap').hide();
    // 	audioStop(bgm);
    // 	if(!$('.btn-mute').hasClass('muted')){
    // 		audioPlay('bgm', 'bgm');
    // 	}
    // 	virtualReset.run();
    // 	charAniStart();
    // });

    $('.btn-mute').on('click', function () {
        if ($(this).hasClass('muted')) {
            $(this).removeClass('muted');
            audioPlay('bgm', 'bgm');
        } else {
            $(this).addClass('muted');
            audioStop(bgm);
        }
    });

    $('.modal-alert .icon-modal-close').click(function () {
        $(this).closest('.modal').stop().fadeOut(0);
    });

    let guideAudioPlay;
    let guideOpen;
    /* 다음 버튼 */
    $('[data-toggle="pane"]').click(function (e) {
        clearTimeout(guideOpen);
        clearTimeout(guideAudioPlay);
        e.preventDefault();
        audioStop();
        virtualReset.run();
        $(this).closest('.virtual').removeClass('active');
        $(this.dataset.target).addClass('active');
        // $(this).data('target').addClass('active');
    });
    $('[data-toggle="pane"], .btn-start').click(function (e) {
        $('#wrap').removeClass('ready');
        let tg = $(this).data('target');
        $(tg).show();
        if (this.dataset.target == undefined) {
            tg = $('.virtual').eq(0);
        } else {
            tg = $(this).data('target');
        }
        $(tg).removeClass('_hide');
        $(tg).find($('.virtual')).first().addClass('active');
        const guideBubble = $(tg).find('.guide-wrp.shown');
        if (guideBubble.length) {
            $(tg).addClass('guide-open');

            guideAudioPlay = setTimeout(() => {
                const mute = guideBubble.attr('data-mute');
                if (!mute) {
                    audioPlay('bubble');
                }
            }, 1500);
        }

        const guideHand = $(tg).find('.guide-wrp').not('.shown');
        if (guideHand.length) {
            let $time;
            if (guideHand.attr('data-time') == undefined) {
                $time = 5000;
            } else {
                $time = guideHand.attr('data-time');
            }
            $(tg).addClass('guide-open');

            guideOpen = setTimeout(() => {
                $(tg).removeClass('guide-open');
            }, $time);
        }
    });
    // 실험실 단계 이동

    // active 클래스 토글
    $('[data-toggle=change]').click(function () {
        const target = this.dataset.target || this;
        $(target).toggleClass('active');
    });

    // 클래스 제거
    $('[data-remove-class]').click(function () {
        audioStop();
        $(this.dataset.target).removeClass(this.dataset.removeClass);
    });

    // img-change
    $('[data-toggle*=img-change]').click(function () {
        const t = $(this);
        const target = t.data('target');
        $(target).toggleClass('active');
    });

    // show
    $('[data-show-target]:not(.active-show)').each(function () {
        const t = $(this);
        const type = t.data('type');
        const target = t.data('show-target');
        $(target).each(function () {
            if (type) {
                $(this).addClass('invisible');
            } else {
                $(this).hide();
            }
        });
    });

    $('[data-show-target]').click(function () {
        const t = $(this);
        const type = t.data('type');
        const target = t.data('show-target');

        if (t.hasClass('active-show') && !t.hasClass('is-show-fix')) {
            t.removeClass('active-show');
            $(target).each(function () {
                if (type) {
                    $(this).addClass('invisible');
                } else {
                    $(this).hide();
                }
            });
        } else {
            t.addClass('active-show');
            $(target).each(function () {
                if (type) {
                    $(this).removeClass('invisible');
                } else {
                    $(this).show();
                }
            });
        }
    });

    // hide
    $('[data-hide-target]').click(function () {
        const t = $(this);
        const type = t.data('type');
        const target = t.data('hide-target');
        const other = $('[data-show-target="' + target + '"]');

        other.removeClass('active-show');
        $(target).each(function () {
            if (type) {
                $(this).addClass('invisible');
            } else {
                $(this).hide();
            }
        });
    });

    // active-target
    $('[data-toggle*=active-target]').click(function () {
        const t = $(this);
        const o = t.data('active-target');
        const className = t.data('active-name') || 'active';

        if (t.hasClass(className)) {
            t.removeClass(className);
            $(o).removeClass(className);
        } else {
            t.addClass(className);
            $(o).addClass(className);
        }
    });
});

// dragdrop 공통
$('.drop-refresh').click(function () {
    const target = this.dataset.target ? $(this.dataset.target) : $('body');
    target
        .find('.drop-item, .drop-fix')
        .droppable('option', 'disabled', false)
        .children()
        .not('[data-invisible]')
        .remove();
    target.find('.drag-item, .drag-fix').draggable('option', 'disabled', false).data('chance', 0);
    target
        .find('.disabled, .dropped, .drop-start, .drop-end, .drop-ex')
        .removeClass('disabled dropped drop-start drop-end drop-ex');
});

$('[drop-ex]').click(function () {
    const target = this.dataset.target ? $(this.dataset.target) : $('body');
    target.find('.drop-refresh').click();
    target.find('.dragdrop').addClass('drop-ex');
});

// 3D 캐릭터 reset
$('[data-ani]').each(function () {
    $(this).children('img').data('stemp', 1);
});

// 3D 캐릭터 loop
let charAniSet;
function charAniStart($target) {
    charAniClear();
    let tg;
    if ($target !== undefined) {
        tg = $target;
    } else {
        tg = $('[data-ani]').filter(':visible');
    }
    tg.each(function () {
        const $img = $(this).children('img');
        const $type = $(this).attr('data-ani');
        let idx = $img.data('stemp');
        charAniSet = setInterval(() => {
            if (idx > 60) {
                idx = 1;
            }
            $img.attr('src', '../../../common/images/' + $type + '/' + idx + '.png').data('stemp', idx);
            idx++;
        }, 70);
    });
}
$(document).on('click', '[data-role=finish]', () => {
    window.close();
});

function charAniClear() {
    clearInterval(charAniSet);
}
