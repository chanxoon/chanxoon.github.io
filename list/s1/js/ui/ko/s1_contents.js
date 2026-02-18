/*---------------------
	## UI - 모듈공통
---------------------*/
var contUi = {
    init: function () {
        if ($('.aos_wrap').length) {
            this.aosEvt.init();
        } //aos animate
        if ($('.coffer_wrap').length) {
            this.cofferColor.init();
        } //safety coffer event
        if ($('.btn_number_box').length) {
            this.btnCount.init();
        } //count event
        if ($('.myinfo_wrap .info_form').length) {
            this.btnRowDel.init();
        } //btn row delete event
        if ($('.card_temp_slide').length) {
            this.cardTempSlide.init();
        }
        if ($('.section_link').length) {
            this.sectionLink.init();
        }
        if ($('.space_config').length) {
            this.viewBox.init();
        }
        if ($('.full_wrap').length) {
            this.menuToggle.init();
        }
    },
    aosEvt: {
        init: function () {
            AOS.init({
                easing: 'ease-in-out-sine',
                delay: 50,
                duration: 1000,
                //once: true,
                mirror: true,
                anchorPlacement: 'center-bottom',
            });
        },
    },
    cofferColor: {
        wrap: '.coffer_wrap',
        btn: '.btn_color',
        init: function () {
            var _this = this;

            $(_this.btn).on('click', function () {
                if (!$(this).hasClass('active')) {
                    _this.event($(this), $(this).parents('.btn_color_box, .btn_img').siblings('img'));
                }
            });
        },
        event: function ($this, $img) {
            var _this = this;
            var btnColType = $this.attr('data-color-type');
            var imgsrc = $img.attr('src');

            $this.siblings('button').removeClass('active');
            $this.addClass('active');

            var array = imgsrc.split('.jpg');
            var strarray = array[0].slice(0, -1);

            $img.attr('src', strarray + btnColType + '.jpg');
        },
    },
    btnCount: {
        btnCountAnchor: '.btn_amount',
        init: function () {
            var _this = this;

            _this.event();
        },
        event: function () {
            // count -,+
            $(this.btnCountAnchor).on('click', function () {
                var idx = 0;
                var itemQty = parseInt($(this).siblings('input').eq(idx).val());
                var btnCountType = $(this).attr('data-count-type');

                if (btnCountType == 'plus') {
                    if (itemQty > 998) {
                        $(this).attr('disabled', true);
                    } else {
                        $(this)
                            .siblings('input')
                            .eq(idx)
                            .val(parseInt(itemQty + 1));
                        $(this).siblings('.minus').attr('disabled', false);
                    }
                } else if (btnCountType == 'minus') {
                    if (itemQty > 1) {
                        $(this)
                            .siblings('input')
                            .eq(idx)
                            .val(parseInt(itemQty - 1));
                        $(this).attr('disabled', false);
                        $(this).siblings('.plus').attr('disabled', false);
                    } else {
                        $(this).attr('disabled', true);
                    }
                }
            });
        },
    },
    btnRowDel: {
        init: function () {
            var _this = this;

            _this.event();
        },
        event: function () {
            $(document).on('click', '.btn_row_del', function () {
                $(this).parents('.form_area').remove();
            });
        },
    },
    cardTempSlide: {
        init: function () {
            var _this = this;

            _this.event();
        },
        event: function () {
            $('.card_temp_slide').each(function (i, el) {
                i += 1;
                var slickfor = $(el)
                    .find('.slick_slide')
                    .addClass('for' + i);
                var slicknav = $(el)
                    .find('.slick_nav')
                    .addClass('nav' + i);
                slickfor.not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    asNavFor: slicknav,
                });
                slicknav.slick({
                    slidesToShow: 'auto',
                    slidesToScroll: 1,
                    asNavFor: slickfor,
                    focusOnSelect: true,
                    arrows: false,
                    prevArrow: '.slick-prev',
                    nextArrow: '.slick-next',
                    infinite: true,
                });

                $(el)
                    .find('.slick-prev')
                    .click(function () {
                        slickfor.slick('slickPrev');
                    });
                $(el)
                    .find('.slick-next')
                    .click(function () {
                        slickfor.slick('slickNext');
                    });
            });
        },
    },

    sectionLink: {
        btn: '.move_btn',
        init: function () {
            var _this = this;
            _this.event();
        },
        event: function () {
            $(this.btn).click(function () {
                var st = $($(this).attr('href')).offset().top - 140;
                $('html,body').animate({ scrollTop: st }, 500);
            });
        },
    },
    viewBox: {
        item: '.item',
        btn: '.item_btn',
        closeBtn: '.close_btn',
        init: function () {
            var _this = this;
            $(_this.btn).on('click', function () {
                var $this = $(this);
                _this.eventOn($this);
            });
            $(_this.btn).on('focus', function () {
                var $this = $(this);
                _this.eventOn($this);
            });
            $(_this.closeBtn).on('click', function () {
                var $this = $(this);
                _this.eventOff($this);
            });
        },
        eventOn: function ($this) {
            var _this = this;
            $(_this.item).removeClass('on');
            $this.parents(_this.item).addClass('on');
        },
        eventOff: function ($this) {
            var _this = this;
            $this.parents(_this.item).removeClass('on');
        },
    },
    menuToggle: {
        wrap: '.full_wrap',
        btn: '.btn_menu',
        init: function () {
            var _this = this;

            $(_this.btn).on('click', function () {
                if (!$(this).hasClass('active')) {
                    _this.event($(this), $(this).parents('.btn_menu_box').siblings('img'));
                } else {
                    $(this).removeClass('active').parents('.btn_menu_box').siblings('img').css('display', 'none');
                }
            });
        },
        event: function ($this, $img) {
            var _this = this;
            var btnColType = $this.attr('data-img-type');
            var imgsrc = $img.attr('src');

            $this.siblings('button').removeClass('active');
            $this.addClass('active').parents('.btn_menu_box').siblings('img').css('display', 'block');

            var array = imgsrc.split('.jpg');
            var strarray = array[0].slice(0, -1);

            $img.attr('src', strarray + btnColType + '.jpg');
        },
    },
};

var fileTarget = $('.filebox #ex_filename');
fileTarget.on('change', function () {
    if (window.FileReader) {
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.file_wrap').val(filename);
});

$(window).load(function () {
    contUi.init();
});

function rowAdd() {
    var trCnt = $('#rowGrid .form_area').length + 1;
    if (trCnt < 20) {
        var innerHtml = '';
        innerHtml += '<div class="form_area">';
        innerHtml += '	<div class="form_tit">';
        innerHtml += '		<label for="phoneNum' + trCnt + '">연락처 정보 ' + trCnt + '</label>';
        innerHtml += '	</div>';
        innerHtml += '	<div class="input_area">';
        innerHtml +=
            '		<input type="text" id="phoneNum' + trCnt + '" placeholder="이름을 입력해주세요" style="width:248px">';
        innerHtml += '		<div class="number_box">';
        innerHtml += '			<div class="select_box" style="width:100px">';
        innerHtml += '				<select class="sel" title="휴대전화번호 앞자리">';
        innerHtml += '					<option value="">010</option>';
        innerHtml += '					<option value="">011</option>';
        innerHtml += '				</select>';
        innerHtml += '			</div>';
        innerHtml +=
            '			<input type="text" placeholder="-를 빼고 입력해주세요" title="휴대전화번호 중간자리와 마지막자리" style="width:251px">';
        innerHtml += '		</div>';
        innerHtml += '		<a href="#none" class="btn_m col_type4 bg_type4 font_medium btn_row_del"><span>삭제</span></a>';
        innerHtml += '	</div>';
        innerHtml += '</div>';

        $('#rowGrid:last').append(innerHtml);
    } else {
        alert('최대 20개까지만 가능합니다');
        return false;
    }
}

function rowAdd2() {
    var trCnt = $('#rowGrid2 .form_area').length + 1;
    if (trCnt < 20) {
        var innerHtml = '';
        innerHtml += '<div class="form_area">';
        innerHtml += '	<div class="form_tit">';
        innerHtml += '		<label for="mgName' + trCnt + '">담당자 ' + trCnt + '</label>';
        innerHtml += '	</div>';
        innerHtml += '	<div class="input_area">';
        innerHtml +=
            '		<input type="text" id="mgName' + trCnt + '" placeholder="이름을 입력해주세요" style="width:169px">';
        innerHtml += '		<div class="email_box">';
        innerHtml += '			<input type="text" placeholder="이메일 입력" title="이메일 아이디" style="width:176px">';
        innerHtml += '			<span class="at">@</span>';
        innerHtml += '			<div class="select_box" style="width:139px">';
        innerHtml += '				<select class="sel" title="이메일 도메인">';
        innerHtml += '					<option value="">직접입력</option>';
        innerHtml += '					<option value="">gmail.com</option>';
        innerHtml += '					<option value="">naver.com</option>';
        innerHtml += '				</select>';
        innerHtml += '			</div>';
        innerHtml += '			<input type="text" placeholder="" title="이메일 도메인 직접입력" style="width:122px">';
        innerHtml += '		</div>';
        innerHtml += '		<a href="#none" class="btn_m col_type4 bg_type4 font_medium btn_row_del"><span>삭제</span></a>';
        innerHtml += '	</div>';
        innerHtml += '</div>';

        $('#rowGrid2:last').append(innerHtml);
    } else {
        alert('최대 20개까지만 가능합니다');
        return false;
    }
}
