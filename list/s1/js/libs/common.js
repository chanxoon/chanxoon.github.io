var returnFocusElem;

/*---------------------
	## UI - 모듈공통
---------------------*/

var ui = {
    init() {
        this.isTablet.init(); // android tablet check
        if ($('.expanded_select').length) {
            this.expanded_select.init();
        } // select box
        if ($('.location_wrap').length) {
            this.location_box.init();
        } // select box
        if ($('.box_file_add').length) {
            this.file_add.init();
        } // file add
        if ($('.box_tab_menu').length) {
            this.tab_menu.init();
        } // tab_menu
        if ($('[data-toggle=toggleAnchor]').length) {
            this.toggleAction.init();
        } // toggle
        if ($('.box_datepicker').length) {
            this.datePickerCustom.init();
        } // datepicker
        if ($('.board_wrap table').length) {
            this.tableInit.init();
        } // table caption
        if ($('.d_modal_open').length) {
            this.layerOpen.init();
        } // layerpop
        if ($('.tooltip_wrap').length) {
            this.tooltip.init();
        } // tooltip
        if ($('.box_conts_top .btn_print').length) {
            this.print.init();
        } // print(-)
        if ($('.btn_gotop').length) {
            this.btnGotop.init();
        } // btnGotop (-)
        if ($('.swiper_wrap').length) {
            this.swiperSlide.init();
        } // swiper slide (영상+비주얼)
        if ($('.slick_wrap').length) {
            this.slickSlide.init();
        } // slick slide (영상+비주얼)
        if ($('.sticky_wrap').length) {
            this.activeSticky.init();
        } // sticky 활성화
        if ($('.video_box').length) {
            this.videoControl.init();
        } // video control 활성화
        if ($('.star_radio').length) {
            this.starCheck.init();
        } // 별점체크
        if ($('.header_wrap').length) {
            this.gnb_dropdown.init();
        } // Gnb Dropdown
        if ($('.btn-floating').length) {
            this.quickMenu.init();
        } // layerpop
    },
    isTablet: {
        init() {
            // tablet 판별
            var pf = navigator.platform;
            var ua = navigator.userAgent;
            var uaString = ua.toLowerCase();
            var ios = /iphone|ipod|ipad|macintosh/i.test(uaString); // iphone, ipad
            var android = /linux armv7/i.test(pf); // gallexy tablet
            var androidModel = /SHW-M/i.test(uaString); // gallexy tablet model

            if (ios) {
                document.body.classList.add('_ios');
            } else if (android) {
                document.body.classList.add('_galtab');
            }
        },
    },
    expanded_select: {
        expandedWrap: '.expanded_select_box',
        expandedAnchor: '.expanded_select_box .expanded_anchor',
        expandedValue: '.expanded_select_box .expanded_select a',
        init() {
            var _this = this;
            $(this.expandedWrap).removeClass('on');
            _this.event();
        },
        event(e) {
            var _this = this;
            $(this.expandedAnchor).on('click', function () {
                _this.action($(this).parents('.expanded_select_box'));
            });

            $(this.expandedValue).on('click', function () {
                _this.value($(this));
            });

            $('body').on('click', function (e) {
                if (
                    $(e.target).closest('.expanded_select_box').length === 0 &&
                    $('.expanded_select_box').hasClass('on')
                ) {
                    _this.close();
                }
            });
        },
        action($this) {
            $(this.expandedWrap).not($this).removeClass('on');
            if (!$this.hasClass('on')) {
                $this.addClass('on').attr('aria-expanded', 'true');
                $this.find('.expanded_select').attr('aria-expanded', 'true');
            } else {
                $this.removeClass('on').attr('aria-expanded', 'false');
                $this.find('.expanded_select').attr('aria-expanded', 'false');
            }
        },
        value($item) {
            var _this = this;
            var $val = $item.text();
            $item.parents('.expanded_select_box').find('.expanded_anchor .selected').text($val);
            $item.parents('.expanded_select').attr('aria-expanded', 'false');
            _this.close();
        },
        close($this) {
            var _this = this;
            $('.expanded_select_box').removeClass('on').attr('aria-expanded', 'false');
            return false;
        },
    },
    gnb_dropdown: {
        gnbWrap: '.header_wrap',
        gnbboxWrap: '.header_wrap .gnb_wrap',
        gnbLink: '.gnb_box .gnb_item',
        gnbDepth: '.gnb_box .depth2',
        sticky: '.sticky_wrap',
        stickylink: '.sticky_link',
        init() {
            var _this = this;
            _this.event();
        },
        event($this) {
            var _this = this;
            var setTime = null;

            $(this.gnbLink)
                .not('.is-entered')
                .on('mouseenter focusin click', function () {
                    clearTimeout(setTime);
                    $(this).parents('.header_wrap').addClass('on');
                    $(this)
                        .addClass('is-active')
                        .find('button')
                        .attr({ 'aria-expanded': 'true', 'aria-selected': 'true' });
                    $(this)
                        .siblings()
                        .removeClass('is-active')
                        .find('button')
                        .attr({ 'aria-expanded': 'false', 'aria-selected': 'false' });
                })
                .addClass('is-entered');

            $(this.gnbWrap)
                .not('.is-leaved')
                .on('mouseleave focusout', function () {
                    var $this = $(this);
                    var $gnbLink = $(this).find('.gnb_item');
                    setTime = setTimeout(function () {
                        $gnbLink.removeClass('is-active');

                        // 스크롤하던 중일땐 open 클래스 삭제하지 않음.
                        if ($('body').hasClass('scroll')) {
                            return false;
                        }
                        $gnbLink.parents('.header_wrap').removeClass('on');
                    });
                })
                .addClass('is-leaved');

            var stickyTop = 0;
            var stickyH = 0;
            $(window).on('scroll', function () {
                var scrT = $(this).scrollTop();

                if ($(_this.sticky).length > 0) {
                    stickyTop = $(_this.sticky).offset().top;
                    stickyH = $(_this.stickylink).outerHeight();
                }

                if (scrT > 0) {
                    $(_this.gnbWrap).addClass('scroll');

                    if ($(_this.sticky).length > 0) {
                        if (stickyTop <= scrT) {
                            $(_this.sticky)
                                .removeClass('flex')
                                .addClass('on')
                                .css({ 'padding-top': stickyH + 'px' });
                            $(_this.gnbWrap).addClass('sticky');
                        } else if (stickyTop - 120 <= scrT) {
                            $(_this.sticky)
                                .addClass('on flex')
                                .css({ 'padding-top': stickyH + 'px' });
                            $(_this.gnbWrap).removeClass('sticky');
                        } else {
                            $(_this.sticky).removeClass('on flex').attr('style', '');
                            $(_this.gnbWrap).removeClass('sticky');
                        }
                    }
                } else {
                    $(_this.gnbWrap).removeClass('scroll');
                }

                scrL = scrT;
            });
        },
        scrolled($this) {},
        down(stickyTop, updown) {
            var _this = this;
            if (!$(_this.gnbWrap).hasClass('down') && updown) {
                updown = false;
                $(_this.stickylink).stop().stop().animate({ top: '0px' }, 500);
                $(_this.gnbWrap).stop().stop().animate({ top: '-120px' }, 500);
                $(_this.gnbWrap).addClass('down');
            }
        },
        up(stickyTop, updown) {
            var _this = this;
            if ($(_this.gnbWrap).hasClass('down') && updown) {
                updown = false;
                $(_this.stickylink)
                    .stop()
                    .stop()
                    .animate({ top: '120px' }, 500, function () {
                        $(this).css('top', '');
                    });
                $(_this.gnbWrap)
                    .stop()
                    .stop()
                    .animate({ top: '0px' }, 500, function () {
                        $(this).css('top', '');
                        updown = true;
                    });
                $(_this.gnbWrap).removeClass('down');
            }
        },
    },
    location_box: {
        depthWrap: '.location_list > li',
        depthAnchor: '.location_list .depth_link',
        selectLink: '.location_list .depth_list a',
        init() {
            var _this = this;
            $(this.depthWrap).removeClass('on');
            _this.event();
        },
        event(e) {
            var _this = this;
            $(this.depthAnchor).on('click', function () {
                _this.action($(this).parents('.location_list > li'));

                $('body').on('click', function (e) {
                    if (
                        $(e.target).closest('.location_list > li').length === 0 &&
                        $('.location_list > li').hasClass('on')
                    ) {
                        _this.close();
                    }
                });
            });

            $(this.selectLink).on('click', function () {
                if ($(this).hasClass('not_active')) {
                    _this.close();
                } else {
                    _this.value($(this));
                }
            });
        },
        action($this) {
            $(this.depthWrap)
                .not($this)
                .removeClass('on')
                .attr({ 'aria-expanded': 'false', title: '펼치기' })
                .find('.depth_list')
                .slideUp()
                .attr({ 'aria-expanded': 'false', title: '펼치기' });
            if (!$this.hasClass('on')) {
                $this.addClass('on').attr({ 'aria-expanded': 'true', title: '접기' });
                $this.find('.depth_list').attr({ 'aria-expanded': 'true', title: '접기' }).slideDown();
            } else {
                $this.removeClass('on').attr({ 'aria-expanded': 'false', title: '펼치기' });
                $this.find('.depth_list').attr({ 'aria-expanded': 'false', title: '펼치기' }).slideUp();
            }
        },
        value($item) {
            var _this = this;
            var $val = $item.text();
            $item.parents('.location_list > li').find('.depth_link span').text($val);
            $item.parents('.location_list > li').find('.depth_link').focus();

            _this.close();
        },
        close($this) {
            $('.location_list > li')
                .removeClass('on')
                .attr({ 'aria-expanded': 'false', title: '펼치기' })
                .find('.depth_list')
                .slideUp()
                .attr({ 'aria-expanded': 'false', title: '펼치기' });
            return false;
        },
    },
    file_add: {
        fileLabel: '.box_file_add .btn_add_file',
        init() {
            var _this = this;
            _this.event();
        },
        event() {
            var _this = this;
            var inputId;

            $(this.fileLabel).on('click', function (e) {
                var $this = $(this);
                inputId = '#' + $(this).data('file-input');

                $(inputId).on('change', function (e) {
                    e.stopImmediatePropagation();
                    if (this.value == '') {
                        return false;
                    }
                });

                _this.fileAction(inputId);
            });

            $(document).on('click', '.box_file_add .btn_del', function () {
                _this.close($(this));
            });
        },
        fileAction($id) {
            var _this = this;
            var $inputId = $id;

            $($inputId).trigger('click');
        },
        close($item) {
            var _this = $item;

            if (_this.parents('.file_wrap').find('li').length == 1) {
                _this.parents('.box_file_add').removeClass('on');
            }
            _this.parents('li').remove();
        },
    },
    tab_menu: {
        tabBox: '.box_tab_menu',
        tabParents: '.box_tab_menu > ul',
        init() {
            var _this = this;
            _this.event();
        },
        event() {
            var _this = this;

            $(this.tabParents).each(function () {
                var $this = $(this);

                if (!$('.box_tab_menu li').hasClass('on')) {
                    $('.box_tab_menu li:first-of-type, .box_tab_menu .tab_cont:first-of-type')
                        .addClass('on')
                        .attr({ 'aria-selected': 'true' });
                }
                if ($('li', this).length > 7) {
                    $(this).addClass('fs16');
                }

                // tab conts open
                $this
                    .parents('.box_tab_menu')
                    .find('.tab_link:not(.not_active)')
                    .on('click', function () {
                        if ($(this).is('[aria-controls]')) {
                            _this.action2($(this));
                        } else {
                            _this.action($(this).parents('li'));
                        }
                    });
            });
        },
        action($this) {
            var $target = $this.parents('.box_tab_menu');
            var tabContent = $this.find('.tab_link').attr('aria-controls');

            $this.addClass('on').siblings().removeClass('on');
            $this.find('.tab_link').attr({ 'aria-selected': 'true' }).focus();
            $this.siblings('li').find('.tab_link').attr({ 'aria-selected': 'false' });

            // $('#' + $this.find('.tab_link').attr('aria-controls')).attr('tabindex', '0').addClass('on').siblings('.tab_cont').attr('tabindex', '0').removeClass('on');
            $('#' + $this.find('.tab_link').attr('aria-controls'))
                .addClass('on')
                .siblings('.tab_cont')
                .removeClass('on');
        },
        action2($this) {
            var $target = $this.attr('aria-controls');
            var tabLink = $this.parents('li');

            tabLink.addClass('on').siblings().removeClass('on');
            tabLink.find('.tab_link').attr({ 'aria-selected': 'true' }).focus();
            tabLink.siblings('li').find('.tab_link').attr({ 'aria-selected': 'false' });

            // $('#' + $target).attr('tabindex', '0').addClass('on').siblings('.tab_cont').attr('tabindex', '0').removeClass('on');
            $('#' + $target)
                .addClass('on')
                .siblings('.tab_cont')
                .removeClass('on');
            $('#' + $target).focus();
        },
    },
    toggleAction: {
        toggleWrap: '[data-toggle=togglewrap]',
        toggleWrapSingle: '[data-toggle=togglewrapSingle]',
        toggleAnchor: '[data-toggle=toggleAnchor]',
        init() {
            var _this = this;

            _this.event();
        },
        event() {
            var _this = this;
            $(this.toggleAnchor).on('click', function () {
                _this.action($(this));
            });
        },
        action($this) {
            var $toggleWrap = $this.parents('[data-toggle=togglewrap]');
            var $toggleWrapSingle = $this.parents('[data-toggle=togglewrapSingle]');
            var toggleButtons = $toggleWrapSingle.find('.btn_more');
            var $control = $this;
            var toggleContent = $control.attr('aria-controls');

            if ($toggleWrap.length) {
                // multi open type
                ariaCheck();
            } else if ($toggleWrapSingle.length) {
                // siblings remove type
                toggleSingleCheck($control[0]);
                ariaCheck();
            }

            function ariaCheck() {
                isAriaExp = $control.attr('aria-expanded');
                isTitleExp = $control.attr('title');
                newAriaExp = isAriaExp == 'false' ? 'true' : 'false';
                titleExp = isTitleExp == '접기' ? '펼치기' : '접기';
                $control.attr('aria-expanded', newAriaExp);
                $control.attr('title', titleExp);

                isAriaHid = $('#' + toggleContent).attr('aria-hidden');
                if (isAriaHid == 'true') {
                    $('#' + toggleContent).attr('aria-hidden', 'false');
                    $('#' + toggleContent).addClass('on');
                    $control.parents('li').addClass('on');
                } else {
                    $('#' + toggleContent).attr('aria-hidden', 'true');
                    $('#' + toggleContent).removeClass('on');
                    $control.parents('li').removeClass('on');
                }
            }

            function toggleSingleCheck(elem) {
                for (var i = 0; i < toggleButtons.length; i++) {
                    if (toggleButtons[i] != elem) {
                        if ($(toggleButtons[i]).attr('aria-expanded') == 'true') {
                            $(toggleButtons[i]).attr('aria-expanded', 'false').attr('title', '펼치기');
                            $(toggleButtons[i]).parents('li').removeClass('on');
                            content = $(toggleButtons[i]).attr('aria-controls');
                            $('#' + content).attr('aria-hidden', 'true');
                            $('#' + content).removeClass('on');
                        }
                    }
                }
            }
        },
    },
    datePickerCustom: {
        datePicker: '.box_datepicker',
        init() {
            var _this = this;
            $(this.datePicker).each(function () {
                // datepicker 공통 옵션
                $.datepicker.setDefaults({
                    dateFormat: 'yy.mm.dd',
                    prevText: '이전 달',
                    nextText: '다음 달',
                    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    changeYear: true,
                    changeMonth: true,
                    showOtherMonths: true,
                    showMonthAfterYear: true,
                    showOn: 'both',
                    buttonText: '달력',
                    // showButtonPanel: true,
                    showButtonPanel: false,
                    // minDate:0
                });
                // type 구분
                if ($(this).attr('data-calendar') == 'multi') {
                    _this.multi($(this));
                } else {
                    var target = $('#' + $(this).find('input').attr('id'));
                    _this.single(target);
                }

                // date input mask
                var RegNotNum = /[^0-9]/g;

                $('.datepicker').attr('maxlength', 10);
                $('.datepicker').keyup(function () {
                    var date = this.value;
                    date = date.replace(RegNotNum, '');
                    if (date == '' || date == null || date.length < 5) {
                        this.value = date;
                        _this.selectBtn();
                        return;
                    }

                    var DataFormat;
                    var RegPhonNum;

                    // date format (yyyy-mm-dd)
                    if (date.length <= 6) {
                        DataFormat = '$1.$2'; // 포맷을 바꾸려면 이곳을 변경
                        RegPhonNum = /([0-9]{4})([0-9]+)/;
                    } else if (date.length <= 8) {
                        DataFormat = '$1.$2.$3'; // 포맷을 바꾸려면 이곳을 변경
                        RegPhonNum = /([0-9]{4})([0-9]{2})([0-9]+)/;
                    }
                    date = date.replace(RegPhonNum, DataFormat);
                    this.value = date;
                });
                setInterval(function () {
                    _this.selectBtn();
                });
                setInterval(function () {
                    _this.selectBtn();
                });
            });
        },
        single($this) {
            var _this = this;
            $this.datepicker({
                beforeShow(textbox, instance) {
                    $this.parents('.box_datepicker').append($('#ui-datepicker-div'));
                },
            });
        },
        multi($this) {
            var _this = this;
            var dateFormat = 'yy.mm.dd';
            var $from = $this.find('input:eq(0)');
            var $to = $this.find('input:eq(1)');

            (from = $from
                .datepicker({
                    beforeShow(textbox, instance) {
                        $from.parents('.from_box').append($('#ui-datepicker-div'));
                    },
                })
                .on('change', function () {
                    to.datepicker('option', 'minDate', getDate(this));
                })),
                (to = $to
                    .datepicker({
                        beforeShow(textbox, instance) {
                            $to.parents('.to_box').append($('#ui-datepicker-div'));
                        },
                    })
                    .on('change', function () {
                        from.datepicker('option', 'maxDate', getDate(this));
                    }));

            function getDate(element) {
                var date;
                try {
                    date = $.datepicker.parseDate(dateFormat, element.value);
                } catch (error) {
                    date = null;
                }

                return date;
            }
        },
        selectBtn() {
            var select = $('.ui-datepicker-title').find('select');
            if ($('#ui-datepicker-div').css('display') == 'block') {
                if (!select.parents('.select_box').length) {
                    select.wrap('<div class="select_box"></div>');
                    select
                        .parents('.ui-datepicker-header')
                        .append(
                            '<button type="button" class="btn_calendar_close"><span class="a11y">닫기</span></button>',
                        );
                }
                $('.btn_calendar_close').on('click', function () {
                    $('#ui-datepicker-div').hide();
                });
            }
        },
    },
    tableInit: {
        tableTarget: '.board_wrap table',
        init() {
            var _this = this;

            $(this.tableTarget).each(function () {
                var _this = $(this);
                tableCaption(_this);
            });
            function tableCaption(scope) {
                var tableCaption = $(scope).find('> caption');
                var captionPElem = tableCaption.find('p');

                if (tableCaption.length > 0 && (captionPElem.length == 0 || $.trim(captionPElem.text()) == '')) {
                    var msg = '';
                    $(scope)
                        .find('> thead > tr >  th, > tbody > tr > th')
                        .each(function () {
                            var amsg = String($(this).clone().end().text() || '');
                            amsg = $.trim(amsg);

                            if ($.trim(amsg) != '') {
                                msg += (msg == '' ? '' : ', ') + amsg;
                            }
                        });

                    captionPElem.remove();
                    $(document.createElement('p'))
                        .html(msg + '로 구성된 표입니다.')
                        .appendTo(tableCaption);
                }
            }
        },
    },
    layerOpen: {
        layerAnchor: '.d_modal_open',
        layerClose: '.d_modal_close',
        init() {
            var _this = this;

            _this.event();
        },
        event($id) {
            var _this = this;
            var $target;

            $(_this.layerAnchor).on('click', function () {
                $target = $(this);
                var $ariaExp = $(this).attr('aria-controls');
                var $id = $('#' + $ariaExp);

                _this.open($id);
            });

            $(_this.layerClose).on('click', function () {
                var $id = $(this).parents('.modal_wrap').attr('id');
                _this.close($id, $target);
            });

            $('.btn_modal_close').on('keydown', function (e) {
                _this.focus(e);
            });
        },
        open($id) {
            var $id = $id;
            var layerBtn = $(this.layerAnchor)[0];

            $('body').addClass('fixed');
            $($id).addClass('on').attr('tabIndex', 0).focus();
            setAriaHidden($($id));

            // 비활성 처리 함수 선언
            function setAriaHidden(dialog) {
                var ommits = 'script, meta, link, style, base';

                dialog.attr('aria-hidden', 'false');
                dialog.siblings().not(ommits).attr('aria-hidden', 'true');
            }

            // 카드템플릿 모달 띄웠을때 리사이징
            if ($($id).find('.card_temp_slide').length) {
                $($id).find('[data-type="cardTemp"] .slick_slide').resize().slick('refresh');
                $($id).find('.slick_nav').slick('init'); // [06-18 수정]
            }
        },
        close($id, el) {
            var $el = el;
            var $id = '#' + $id;

            if (!$el) {
                if (!returnFocusElem) {
                    $el = $('#' + $($id).attr('data-focus-return'));
                } else {
                    $el = returnFocusElem;
                }
            }

            $('body').removeClass('fixed');
            if ($($id).find('.box_tab_menu').length) {
                $($id).find('.box_tab_menu .tab_menu li').eq(0).find('a').trigger('click');
            }

            // 레이어팝업 내 영상 존재시
            if ($($id).find('iframe').length) {
                // 영상 Youtube
                var target = $($id).find('iframe');
                var targetSrc = target.attr('src');
                if (targetSrc.indexOf('youtube') > 0) {
                    target.attr('src', '');
                    target.attr('src', targetSrc);
                }
            } else if ($($id).find('video').length) {
                // 영상 video
                var target = $($id).find('video');
                target.get(0).pause();
                target.get(0).currentTime = 0;
            }

            $($id).removeClass('on').find('.box_tab_menu .tab_menu li > a').removeAttr('tabindex');
            $el ? $el.focus() : '';
            unsetAriaHidden($($id));
            returnFocusElem = null;

            // 비활성화 처리 해제 함수 선언
            function unsetAriaHidden(dialog) {
                var ommits = 'script, meta, link, style, base';

                dialog.removeAttr('aria-hidden');
                dialog.siblings().not(ommits).removeAttr('aria-hidden');
            }
        },
        focus(e) {
            if (!e.shiftKey && e.keyCode === 9) {
                $('.modal_inner').focus();
            }
        },
    },
    tooltip: {
        wrapTooltip: '.tooltip_wrap',
        btnTooltip: '.btn_tooltip',
        boxTooltip: '.tooltip_box',
        btnTooltipClose: '.tooltip_wrap .btn_tip_close',
        init() {
            var _this = this;
            _this.event();
        },
        event() {
            var _this = this;
            $(this.btnTooltip).on('click', function () {
                _this.action($(this).parents('.tooltip_wrap'));
            });

            $(this.btnTooltipClose).on('click', function () {
                _this.close($(this).parents('.tooltip_wrap'));
            });
        },
        action($item) {
            var _this = this;
            var $target = $item;
            $(_this.wrapTooltip).not($target).removeClass('on');
            $target.toggleClass('on').find('.tooltip_box').attr('tabindex', '0').focus();
            $target.find('.btn_tooltip').find('span').text('툴팁 닫기');
        },
        close($item) {
            var _this = this;
            var $target = $item;
            $target.removeClass('on').find('.btn_tooltip').focus().find('span').text('툴팁 열기');
        },
    },
    print: {
        btnPrint: '.box_conts_top .btn_print',
        init() {
            var _this = this;

            _this.event();
        },
        event() {
            var _this = this;

            $(_this.btnPrint).on('click', function () {
                window.print();
            });
        },
    },
    btnGotop: {
        btnTop: '.btn_gotop',
        init() {
            var _this = this;

            _this.event();
        },
        event() {
            var _this = this;

            $(_this.btnTop).on('click', function () {
                $('html, body').stop().animate(
                    {
                        scrollTop: 0,
                    },
                    300,
                );
            });
        },
    },
    swiperSlide: {
        target: '.swiper_wrap',
        init() {
            var _this = this;

            $(this.target).each(function () {
                var slideType = $(this).attr('data-type');

                _this.event($(this), $(this).find('.swiper-container'), slideType);
            });
        },
        event($this, $target, type) {
            var _this = this;
            var $btnNext;
            var $btnPrev;
            var option;
            if (type == 'main') {
                $btnNext = $this.find('.swiper-next'); // left button class name
                $btnPrev = $this.find('.swiper-prev'); // left button class name
                option = {
                    mode: 'horizontal',
                    loop: true,
                    speed: 600,
                    nextButton: $btnNext,
                    prevButton: $btnPrev,
                };
            } else if (type == 'type name') {
                option = {
                    mode: 'horizontal',
                    loop: true,
                };
            }

            var mySwiper = $target.swiper(option);

            // 좌우 버튼
            if ($btnNext != undefined) {
                $btnNext.on('click', function () {
                    mySwiper.swipeNext();
                });
            }
            if ($btnPrev != undefined) {
                $btnPrev.on('click', function () {
                    mySwiper.swipePrev();
                });
            }

            // 영상 관련 callback
            mySwiper.addCallback('SlideChangeStart', function (swiper) {
                var prevIdx = swiper.previousIndex;
                var actIdx = swiper.activeIndex;

                // Video 태그 컨트롤
                var _prevVidTarget = $(swiper.slides[prevIdx]).find('video');
                var _actVidTarget = $(swiper.slides[actIdx]).find('video');
                if (_prevVidTarget.length > 0) {
                    _prevVidTarget.get(0).pause();
                }

                if (_actVidTarget.length > 0) {
                    _actVidTarget.get(0).play();
                }

                // Youtube Iframe 컨트롤
                var _prevTubeTarget = $(swiper.slides[prevIdx]).find('iframe');
                var _actTubeTarget = $(swiper.slides[actIdx]).find('iframe');
                if (_prevTubeTarget.length > 0) {
                    var playerPrev = _prevTubeTarget.attr('id');
                    $('#' + playerPrev)[0].contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        '*',
                    );
                    // $('#'+_prevTubeTarget.attr('id')).get(0).pauseVideo();
                }
                if (_actTubeTarget.length > 0) {
                    var playerNext = _actTubeTarget.attr('id');
                    $('#' + playerNext)[0].contentWindow.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        '*',
                    );
                }
            });
        },
    },
    slickSlide: {
        target: '.slick_wrap',
        init() {
            var _this = this;
            $(this.target).each(function () {
                var slideType = $(this).attr('data-type');

                // 메인 관련 slick은 main.html에서 처리하여 렌더링 이슈 개선 20210609 khlee
                if (slideType != 'main') {
                    _this.event($(this), $(this).find('.slick_slide'), slideType);
                }
            });
        },
        event($this, $target, type) {
            var _this = this;
            var option;
            if (type == 'main') {
                // 메인 관련 slick은 main.html에서 처리하여 렌더링 이슈 개선 20210609 khlee
                /* option = {
					arrows: false,
					dots : true,
					customPaging : function(slider, i) {
						return '<div>'+ (i < 10 ? '0' + (i+1) : (i+1)) +'</div>';
					},
					autoplay: true,
					autoplaySpeed: 10000,
					dotsClass : "slick-num",
					prevArrow: ".slick-prev",
					nextArrow: ".slick-next",
					asNavFor: '.main_thumb',
					fade:true,
				}
				var thumb = $('.main_thumb');
				var main = $('.main_slick_slide');
				thumb.slick({
					slidesToShow: 5,
					slidesToScroll: 1,
					asNavFor: '.main_slick_slide',
					dots: false,
				});

				$target.slick(option);
				$("#video").get(0).play();

				$('.btn_control').on('click', function(){
					var $pauseBtn = $(this);
					if ($pauseBtn.hasClass('paused')){
						$(".main_slick_slide").slick('slickPlay');
						$pauseBtn.removeClass('paused');
					} else {
						$(".main_slick_slide").slick('slickPause');
						$pauseBtn.addClass('paused');
					}
				}); */
            } else if (type == 'main_card') {
                option = {
                    arrows: false,
                    dots: true,
                    customPaging(slider, i) {
                        return '<div>' + (i < 10 ? '0' + (i + 1) : i + 1) + '</div>';
                    },
                    dotsClass: 'slick-num',
                    infinite: true,
                    fade: true,
                    waitForAnimate: false,
                    speed: 800,
                };
                $target.slick(option);
            } else if (type == 'company_main') {
                option = {
                    arrows: false,
                    dots: true,
                    customPaging(slider, i) {
                        return '<div>' + (i < 10 ? '0' + (i + 1) : i + 1) + '</div>';
                    },
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dotsClass: 'slick-num',
                    prevArrow: '.slick-prev',
                    nextArrow: '.slick-next',
                    infinite: true,
                };
                $target.slick(option);

                $('.btn_control').on('click', function () {
                    var $pauseBtn = $(this);
                    if ($pauseBtn.hasClass('paused')) {
                        $('.main_slick_slide').slick('slickPlay');
                        $pauseBtn.removeClass('paused');
                    } else {
                        $('.main_slick_slide').slick('slickPause');
                        $pauseBtn.addClass('paused');
                    }
                });
            } else if (type == 'card') {
                var slideShowLength = 3;
                option = {
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: slideShowLength,
                    slidesToScroll: 3,
                };
                $target.slick(option);
                if ($target.find('.slick-slide').length <= slideShowLength) {
                    $target.siblings('.slick-button-box').hide();
                }
            } else if (type == 'pr_center') {
                var slideShowLength = 3;
                option = {
                    adaptiveHeight: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: '.slick-prev',
                    nextArrow: '.slick-next',
                };
                $target.slick(option);
                if ($target.find('.slick-slide').length <= slideShowLength) {
                    $target.siblings('.slick-button-box').hide();
                }
            } else if (type == 'image') {
                option = {
                    arrows: false,
                    dots: true,
                };
                $target.slick(option);
            } else if (type == 'channel') {
                option = {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                };
                $target.slick(option);
            } else if (type == 'step') {
                option = {
                    infinite: false,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true,
                    customPaging(slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return '<div><button type="button">' + (i < 10 ? '0' + (i + 1) : i + 1) + '</button></div>';
                    },
                };
                $target.slick(option);
            }
            // else if ( type == 'cardTemp' ){ [06-17] 카드템플릿 슬라이드 제거
            // 	option = {
            // 		arrows: false,
            // 		dots : false,
            // 		asNavFor: '.slick_nav'
            // 	}
            // 	$target.slick(option);
            // }
            else if (type == 'videoList') {
                option = {
                    arrows: false,
                    dots: false,
                    asNavFor: '.slick_nav',
                };
                $target.slick(option);
            } else if (type == 'gallery') {
                var main = $('.gallery_main');
                var thumb = $('.gallery_thumb');
                main.slick({
                    rows: 0,
                    useTransform: false,
                    fade: true,
                    asNavFor: thumb,
                    arrows: false,
                });
                thumb.slick({
                    rows: 0,
                    slidesToShow: 4,
                    arrows: false,
                    draggable: false,
                    vertical: true,
                    focusOnSelect: true,
                    asNavFor: main,
                    arrows: true,
                    prevArrow: '.slick-prev',
                    nextArrow: '.slick-next',
                });
            } else if (type == 'gallery2') {
                var main = $('.gallery_main');
                var thumb = $('.gallery_thumb');
                main.slick({
                    useTransform: false,
                    fade: true,
                    asNavFor: thumb,
                    arrows: false,
                });
                thumb.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    draggable: false,
                    focusOnSelect: true,
                    asNavFor: main,
                    arrows: true,
                    dots: true,
                    prevArrow: '.slick-prev2',
                    nextArrow: '.slick-next2',
                });
                return false;
            } else if (type == 'experience') {
                var step = $('.experience_step');
                var slide = $('.experience_slide');
                step.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: slide,
                    focusOnSelect: true,
                    prevArrow: '.slick-prev',
                    nextArrow: '.slick-next',
                });
                slide.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: step,
                    adaptiveHeight: true,
                });
            }

            /* 슬라이드시 자동재생
			$target.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				//Video 태그 컨트롤
				var $beforeVid = $(slick.$slides[currentSlide]).find('video');
				var $currentVid = $(slick.$slides[nextSlide]).find('video');

				if( $beforeVid.length > 0 ){
					$beforeVid.get(0).pause();
				};
				if( $currentVid.length > 0 ){
					$currentVid.get(0).play();
				};

				//Youtube Iframe 컨트롤
				var _prevTubeTarget = $(slick.$slides[currentSlide]).find('iframe');
				var _actTubeTarget = $(slick.$slides[nextSlide]).find('iframe');
				if( _prevTubeTarget.length > 0 ){
					var playerPrev = _prevTubeTarget.attr('id');
					$('#'+playerPrev)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
					//$('#'+_prevTubeTarget.attr('id')).get(0).pauseVideo();
				};
				if( _actTubeTarget.length > 0 ){
					var playerNext = _actTubeTarget.attr('id');
					$('#'+playerNext)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
				};
			});
			*/

            $this.find('.slick-prev').click(function () {
                $target.slick('slickPrev');
            });

            $this.find('.slick-next').click(function () {
                $target.slick('slickNext');
            });
        },
    },
    activeSticky: {
        header: '.header_wrap',
        sticky: '.sticky_wrap',
        stickylink: '.sticky_link',
        target: '.sticky_link .tab_menu',
        anchor: '.anchor-scroll',
        init() {
            var _this = this;
            var lastScrollTop = 0;
            var headerH = $(_this.stickylink).outerHeight();
            var delta = 5;
            var tabCurrent = null;

            // Scroll Event
            $(window).on('scroll', function () {
                var scrollt = $(document).scrollTop();

                if (Math.abs(lastScrollTop - scrollt) <= delta) return;
                if (scrollt > lastScrollTop) {
                    // dowm
                    _this.down(headerH);
                } else {
                    // upscroll code
                    _this.up(headerH, tabCurrent);
                    tabCurrent = null;
                }
                lastScrollTop = scrollt;
            });

            // Click Event
            $(_this.target)
                .find('button')
                .on('click', function () {
                    _this.click($(this), headerH);
                });

            $(_this.target)
                .find('a')
                .on('click', function () {
                    tabCurrent = $(this).parents('.tab').index();
                });
        },
        down(headerH) {
            var _this = this;

            $(this.anchor).each(function (idx) {
                var $this = $(this);
                var $curruntTop = $this.offset().top;
                var sitemapScrTop = $(window).scrollTop();
                var winH = $(window).height();
                var totalH = $('.container').outerHeight();

                if (sitemapScrTop + winH >= totalH - headerH - 10) {
                    $(_this.target).find('li').last().addClass('on').siblings('li').removeClass('on');
                    return false;
                }
                if ($curruntTop - headerH - 10 <= sitemapScrTop) {
                    $this.addClass('active');
                    $(_this.target).find('li').eq(idx).addClass('on').siblings('li').removeClass('on');
                }
            });
        },
        up(headerH, tabCurrent) {
            var _this = this;

            $(this.anchor).each(function (idx) {
                var $this = $(this);
                var $curruntTop = $this.offset().top;
                var upheight = $curruntTop - headerH - 10;
                var sitemapScrTop = $(window).scrollTop();

                if ($curruntTop > 0 && upheight > sitemapScrTop && $this.hasClass('active')) {
                    if (idx - 1 < 0) {
                        return false;
                    }
                    $(this).removeClass('active');
                    // $(_this.target).find('li').eq(idx - 1).addClass('on').siblings('li').removeClass('on')
                    if (tabCurrent !== null) {
                        $(_this.target).find('li').eq(tabCurrent).addClass('on').siblings('li').removeClass('on');
                    } else {
                        $(_this.target)
                            .find('li')
                            .eq(idx - 1)
                            .addClass('on')
                            .siblings('li')
                            .removeClass('on');
                    }
                }
            });
        },
        click($this, headerH) {
            var _this = this;
            var idx = $this.parents('li').index();
            var offsetT = $(_this.anchor).eq(idx).offset().top;
            var scrollT = offsetT - headerH;

            $('html, body').stop().animate({ scrollTop: scrollT }, 600);
        },
    },
    videoControl: {
        target: '.video_box',
        init() {
            var _this = this;

            $(_this.target).each(function () {
                var $this = $(this);
                if ($(_this.target).find('video').length > 0) {
                    _this.event($this);
                }
            });
        },
        event($this) {
            var player = $($this).find('video');
            var btnPlay = $($this).find('.btn_vid_play');
            var btnPause = $($this).find('.btn_vid_pause');

            btnPlay.on('click', function () {
                player.get(0).play();
                btnPlay.hide();
                btnPause.show().focus();
            });

            btnPause.on('click', function () {
                player.get(0).pause();
                btnPlay.show().focus();
                btnPause.hide();
            });

            player.get(0).onended = function () {
                player.get(0).currentTime = 0;
                btnPlay.show();
                btnPause.hide();
            };
        },
    },
    starCheck: {
        inputStar: '.input_star',
        starBtn: '.star',
        init() {
            var _this = this;
            $(_this.inputStar).on({
                // 마우스 오버시
                // mouseover: function() {
                // 	_this.starOn($(this));
                // },
                click() {
                    _this.starOn($(this));
                },
            });
        },
        starOn($this) {
            var _this = this;
            $this.find(_this.starBtn).addClass('on');
            $this.prevAll().find(_this.starBtn).addClass('on');
            $this.nextAll().find(_this.starBtn).removeClass('on');
        },
    },
    quickMenu: {
        quick: '.btn-floating',
        pnClose: '.floating-sticky .menu-list li a',
        show: '.msg',
        msgClose: '.msg_close',
        init() {
            var _this = this;
            _this.event();
        },
        event() {
            var _this = this;
            $(_this.quick).on('click', function () {
                this.parentNode.classList.toggle('on');

                if ($(_this.inner).hasClass('on')) {
                    $(_this.menu).attr('tabindex', '');
                    $(_this.menu).find('a').attr('tabindex', '');
                } else {
                    $(_this.menu).attr('tabindex', '-1');
                    $(_this.menu).find('a').attr('tabindex', '-1');
                }
            });
            $(_this.pnClose).on('click', function () {
                // 2021-10-07 접근성 보완
                // $(this).parents('.inner').removeClass('on');
                // /2021-10-07 접근성 보완
            });
            $(_this.show).on('click', function () {
                $(this).parents('.inner').addClass('on');
            });
            $(_this.msgClose).on('click', function () {
                _this.close($(this).parents('.pop_msg'));
            });
            // 2021-10-07 접근성 보완
            $(_this.pnClose).on('focus', function () {
                $(this).parent('li').addClass('hover');
            });
            $(_this.pnClose).on('blur', function () {
                $(this).parent('li').removeClass('hover');
            });
            // /2021-10-07 접근성 보완
        },
        close($item) {
            var _this = this;
            var $target = $item;
            $target.css('display', 'none');
        },
    },
    // $('.counter').counterUp({
    // 	delay: 1,
    // 	time: 200
    // });

    // imgTabView : {
    // 	viewImg : '.view_img',
    // 	thumbList : '.thumb_list ul li',
    // 	init : function() {
    // 		var _this = this;
    // 		_this.event();
    // 	},
    // 	event : function() {
    // 		var _this = this;
    // 		$(_this.thumbList).on('click', function(){
    // 			var srcLink = ($(this).find('img').attr('src'));
    // 			$(this).siblings().removeClass('on');
    // 			$(this).addClass('on');
    // 			$(_this.viewImg).find('img').attr('src', srcLink)
    // 		})
    // 	}
    // }
};

// scroll event

$(function () {
    ui.init();
    // scrollUi.winEvent();
});

var $w = $(window);
var footerHei = $('.footer_wrap').outerHeight();
var $banner = $('.floating-sticky');
$w.on('scroll', function () {
    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHei;
    var valPos = val > 100 ? val - 50 : val;
    if (sT >= valPos) {
        $banner.addClass('hidden');
    } else {
        $banner.removeClass('hidden');
    }
});

function LoadingWithMask() {
    var loadingImg = '';

    loadingImg += "<div id='loadingImg'>";
    loadingImg += " <img src='LoadingImg.gif' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += '</div>';

    // 화면에 레이어 추가
    $('body').append(mask).addClass('fixed');

    // 로딩중 이미지 표시
    $('#loadingImg').show();
}

// 2021-10-10 접근성 관련 수정
$(function () {
    // $("#container").attr("tabindex","0");

    $('.skip_navi a').on('click', function () {
        var href = $(this).attr('href');
        $(href).attr('tabindex', 0).focus();
    });

    // 퀵메뉴 접근성 보완
    $('.btn-floating').attr('title', '에스원 빠른 메뉴 보기');
    $('.btn-floating').find('span').text('에스원 빠른 메뉴 보기');
});

// 퀵메뉴 접근성 보완
$('.btn-floating').on('click', function () {
    if ($('.menu-list .inner').hasClass('on')) {
        $(this).attr('title', '에스원 빠른 메뉴 보기');
        $(this).find('span').text('에스원 빠른 메뉴 보기');
        // $('#btnPop1on1 a').focus();
    } else {
        $(this).attr('title', '에스원 빠른 메뉴 닫기');
        $(this).find('span').text('에스원 빠른 메뉴 닫기');
    }
});

// $('.floating-sticky .menu-list ul').mouseenter(function() {
// 	$('#btnPop1on1 a').blur();
// });
