// 탭키 기능 막음
window.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        // 여기에서 커스텀 탭 동작을 정의합니다.
    }
});

// audioPlay
function audioPlay(name, type) {
    const $audioRoute = window.location.href.split('/').pop().split('?')[0].replace('.html', ''); // url에서 audio 경로 추출
    let $audio = $('#audio');
    let $src = '../media/' + $audioRoute + '/' + name + '.mp3';
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

// audioStop
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
