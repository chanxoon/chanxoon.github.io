/*---------------------
	## UI - PC메인 모듈공통
---------------------*/

var detailView = function () {
    var $container = $('.port_view');
    var $items = $container.find('li');
    var $current = $container.find('.count .current');
    var $navPrev = $container.find('.navigator .prev');
    var $navNext = $container.find('.navigator .next');

    var data = {
        currentIndex: 0, // 시작 index 0 ~
        loop: true, // 반복 Boolean
        total: $items.length,
    };

    var events = {
        init() {
            this.set();
            this.bindEvent();
        },
        set() {
            this.changeView();
        },
        bindEvent() {
            $items.on('click', this.handleClickItem);
            $navPrev.on('click', { dir: -1 }, this.handleClickNav);
            $navNext.on('click', { dir: 1 }, this.handleClickNav);
        },
        handleClickItem() {
            var $handle = $(this);
            data.currentIndex = $handle.index();

            events.changeView();
        },
        handleClickNav(e) {
            var { dir } = e.data;
            var nextIndex = data.currentIndex + dir;

            if (!data.loop && (nextIndex == data.total || nextIndex < 0)) return false;
            nextIndex = nextIndex == data.total ? 0 : nextIndex < 0 ? data.total - 1 : nextIndex;

            data.currentIndex = nextIndex;
            events.changeView();
        },
        changeView() {
            $items.eq(data.currentIndex).addClass('active').siblings().removeClass('active');

            events.syncCurrentIndex();
        },
        syncCurrentIndex() {
            var activeIndex = data.currentIndex + 1;
            var calcIndex = String(activeIndex).length < 2 ? '0' + activeIndex : activeIndex;

            $current.text(calcIndex);
        },
    };

    events.init();
};
window.addEventListener('DOMContentLoaded', detailView);

var scrollToggleClass = function (el) {
    var $el = $(el);
    var $win = $(window);

    var data = {
        className: 'fixed', // fixed 되는 시점의 추가되는 클래스명
        fixedStart: 370, // fixed 되는 scrollTop
        fixedEnd: 350, // fixedEnd 되고 scroll 따라가는 scrollTop
    };

    var events = {
        init() {
            this.bindEvent();
        },
        bindEvent() {
            $win.on('scroll', this.detectScroll);
        },
        detectScroll() {
            var scrollTop = $win.scrollTop();
            var fixedHeight = data.fixedStart + data.fixedEnd;
            var isFixed = scrollTop >= data.fixedStart;
            var isFixedEnd = scrollTop >= fixedHeight;

            if (isFixed) {
                $el.addClass(data.className);
                var gapY = isFixedEnd ? fixedHeight - scrollTop : 0;
                $el.find('.media_box').css('transform', 'translateY(' + gapY + 'px)');
            } else {
                $el.removeClass(data.className);
                $el.find('.media_box').css('transform', 'translateY(0)');
            }
        },
    };

    events.init();
};
window.addEventListener('DOMContentLoaded', function () {
    scrollToggleClass('.mov_visual');
});

$('.counter').counterUp({
    delay: 20,
    time: 1000,
});
