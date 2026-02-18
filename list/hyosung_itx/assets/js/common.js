let scrollY;
let wrap;

// 스크린 높이 계산
function syncHeight() {
    document.documentElement.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
}

// mobile check
function isMobile() {
    const width = window.innerWidth;
    if (width < 1025) {
        return true;
    }
    return false;
}

// body scroll lock
function bodyLock() {
    scrollY = window.scrollY;
    document.documentElement.classList.add('is-locked');
    wrap.style.top = `-${scrollY}px`;
    // AOS 사용시 refresh 필요
    // AOS.refresh();
}

// body scroll unlock
function bodyUnlock() {
    document.documentElement.classList.remove('is-locked');
    window.scrollTo(0, scrollY);
    wrap.style.top = '';
    // AOS 사용시 refresh 필요
    // AOS.refresh();
}

// popup open
// popup open
function modalOpen(el) {
    $('#' + el).fadeIn('fast');
    $('#dim').fadeIn('fast');
    bodyLock();
}

// popup close
function modalClose(el) {
    $(el).parents('.popup').fadeOut('fast');
    $('#dim').fadeOut('fast');
    bodyUnlock();
}
// datepicker 년/월/일
$(() => {
    // 모든 datepicker에 대한 공통 옵션 설정
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd', // Input Display Format 변경
        showOtherMonths: true, // 빈 공간에 현재월의 앞뒤월의 날짜를 표시
        showMonthAfterYear: true, // 년도 먼저 나오고, 뒤에 월 표시
        changeYear: true, // 콤보박스에서 년 선택 가능
        changeMonth: true, // 콤보박스에서 월 선택 가능
        showOn: 'both', // button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        buttonImage: '/assets/img/btn-menu.png', // 버튼 이미지 경로
        buttonImageOnly: true, // 기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        buttonText: '선택', // 버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        yearSuffix: '년', // 달력의 년도 부분 뒤에 붙는 텍스트
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 달력의 월 부분 텍스트
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // 달력의 요일 부분 텍스트
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], // 달력의 요일 부분 Tooltip 텍스트
        // minDate: '-1M', // 최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        // maxDate: '+1M', // 최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        beforeShow(input, inst) {
            const offset = $(input).offset();
            const height = $(input).height();
            window.setTimeout(() => {
                $(inst.dpDiv).css({ top: offset.top + height + 'px', left: offset.left + 'px' });
            }, 1);
        },
    });
});

document.addEventListener('DOMContentLoaded', () => {
    wrap = document.getElementById('wrap');
    syncHeight();
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
    // datapicker 버튼 이미지
    $('.datepicker').datepicker({
        showOn: 'both',
        buttonImage: './assets/img/btn-calender.svg',
        buttonImageOnly: true,
    });
});

$(document).ready(() => {
    const currentUrl = window.location.pathname; // 현재 페이지 경로
    $('#nav .navList li a').each(function () {
        const link = $(this).attr('href');

        // 현재 URL과 메뉴의 href가 일치하면 active 클래스 추가
        if (currentUrl === link) {
            $('#nav .navList li a').removeClass('active');
            $(this).addClass('active');
        }
    });

    // 파일업로드
    $('#fileUpload').on('change', function () {
        const file = this.files[0];
        const $nameEl = $('#fileName');
        if (file) {
            $nameEl.text(file.name);
        } else {
            $nameEl.text('');
        }
    });

    // 타입별 datepicker color
    $('#contents').each(function () {
        const $this = $(this);
        const classes = ['callBotType', 'chatBotType', 'chatCounType'];

        classes.forEach(cls => {
            if ($($this).hasClass(cls)) {
                $('.ui-datepicker').addClass(cls);
            }
        });
    });

    /* 프로그레스바 컬러 */
    $('.progress-container').each(function () {
        const bar = $(this).find('.progress-bar');
        const valueElem = $(this).find('.progress-value');
        const value = parseInt(bar.data('value'), 10);
        bar.css('clip-path', 'inset(0 ' + (100 - value) + '% 0 0)');
        valueElem.text(value + '%');
    });

    // 상담히스토리 버튼
    $('.btnBox .icoArrDown').on('click', function () {
        $(this).toggleClass('active');
        const chatinner = $('.chat .innerWrap .inner');
        if ($(this).hasClass('active')) {
            $(chatinner).find('.row').eq(0).css('height', '96%');
            $(chatinner).find('.row').eq(1).css('height', '4%');
        } else {
            $(chatinner).find('.row').eq(0).css('height', '65%');
            $(chatinner).find('.row').eq(1).css('height', '35%');
        }
    });

    // 솔팅 아이콘
    $('.icoSorting').on('click', function () {
        $(this).toggleClass('active');
    });

    // 로그인 패스워드 토글 btn
    $('.toggleBtn').on('click', function () {
        const $pw = $('.togglePw');
        if ($pw.attr('type') === 'password') {
            $pw.attr('type', 'text');
            $(this).text('숨기기').addClass('active');
        } else {
            $pw.attr('type', 'password');
            $(this).text('보기').removeClass('active');
        }
    });

    // 메뉴레이어
    $('.panelBtn').on('click', function () {
        $(this).parent().toggleClass('active');

        if ($(this).parent().hasClass('active')) {
            $('#nav').css('width', '200px');
            $('#contents').css('min-width', 'calc(100% - 200px)');
        } else {
            $('#nav').css('width', '');
            $('#contents').css('min-width', '');
        }
    });

    // 탭메뉴
    $('.tabMenu li').click(function () {
        const tabId = $(this).data('tab');

        $('.tabMenu li').removeClass('active');
        $(this).addClass('active');

        $('.tabPanel').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    const sideBtn = document.querySelector('.btn-side');
    const closeBtn = document.querySelector('.btn-close');

    if (sideBtn) {
        sideBtn.addEventListener('click', () => {
            const userView = document.querySelector('.user-history');
            userView?.classList.add('open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const userView = document.querySelector('.user-history');
            userView?.classList.remove('open');
        });
    }
});

window.addEventListener('load', () => {});

window.addEventListener('resize', () => {
    syncHeight();
});

window.addEventListener('scroll', () => {});
