$(document).ready(function(){

    /* 팝업 */
    $(".color-btn").click(function(){
        $(".color-layer").fadeIn("fast");
    });
    $(".edit-btn").click(function(){
        $(".edit-layer").fadeIn("fast");
    });
    $(".privacy-btn").click(function(){
        $(".privacy-layer").fadeIn("fast");
    });
    $(".telecom-btn").click(function(){
        $(".telecom-layer").fadeIn("fast");
    });
    $(".error-btn").click(function(){
        $(".report-error-layer").fadeIn("fast");
    });
    $(".com-btn").click(function(){
        $(".report-complete-layer").fadeIn("fast");
    });
    $(".logtype-btn").click(function(){
        $(".login-type-layer").fadeIn("fast");
    });
    $(".theme-btn").click(function(){
        $(".notice-theme-layer").fadeIn("fast");
    });
    $(".nfc-btn").click(function(){
        $(".nfc-layer").fadeIn("fast");
    });
    $(".qr-btn").click(function(){
        $(".qr-layer").fadeIn("fast");
    });
    $(".dispose-btn").click(function(){
        $(".dispose-layer").fadeIn("fast");
    });
    $(".logout-btn").click(function(){
        $(".logout-layer").fadeIn("fast");
    });
    $(".order-btn").click(function(){
        $(".order-apply-layer").fadeIn("fast");
    });
    /* 팝업닫기 */
    $(".close-btn").click(function(){
        $(".layer-pop").fadeOut("fast");
    });
    $(".close-access").click(function(){
        $(".access-layer").fadeOut("fast");
    });

    // nfc 이미지
    $(function(){
        var cnt=0;
        var arr = ['1', '2', '3', '4', '5', '6', '7'];
        setInterval(function() { 
            if (cnt==7) cnt=0;
            $('.nfc-layer .con-box .nfc-img img').attr('src','./images/img/img-nfc-' + arr[cnt] + '.png');
            cnt++;
        }, 200);
    });

    // 네트워크오류 이미지
    $(function(){
        var cnt=0;
        var arr = ['1', '2', '3', '4', '5', '6'];
        setInterval(function() { 
            if (cnt==6) cnt=0;
            $('.network-error .con-box p img').attr('src','./images/bg/icon-network-' + arr[cnt] + '.png');
            cnt++;
        }, 500);
    });

    /* 바코드 OTP */
    $(function(){
        $('.idcard-use .con-box .card-box .code-box').click(function(){
            $(this).toggleClass('on');
            if($(this).hasClass('on')){
                $('.idcard-use .con-box .card-box .barcode').hide();
                $('.idcard-use .con-box .card-box .numcode').show();
                $('.idcard-use .btn-box .otp').html('<img src="./images/icon/icon-barcode.svg" alt="Barcode"> Barcode').removeClass('otp').addClass('barcode');
            }else{
                $('.idcard-use .con-box .card-box .barcode').show();
                $('.idcard-use .con-box .card-box .numcode').hide();
                $('.idcard-use .btn-box .barcode').html('<img src="./images/icon/icon-otp.svg" alt="otp"> OTP').removeClass('barcode').addClass('otp');
            }
        });
        $('.idcard-use .btn-box .barotp').click(function(){
            $('.idcard-use .con-box .card-box .code-box').toggleClass('on');
            if($('.idcard-use .con-box .card-box .code-box').hasClass('on')){
                $(this).html('<img src="./images/icon/icon-barcode.svg" alt="Barcode"> Barcode').removeClass('otp').addClass('barcode');
                $('.idcard-use .con-box .card-box .barcode').hide();
                $('.idcard-use .con-box .card-box .numcode').show();
            } else {
                $(this).html('<img src="./images/icon/icon-otp.svg" alt="OTP"> OTP').removeClass('barcode').addClass('otp');
                $('.idcard-use .con-box .card-box .barcode').show();
                $('.idcard-use .con-box .card-box .numcode').hide();
            }
        });
    });

    /* 설문조사 라벨 */
    $(function(){
        var checked = $('.notified-view.survey .view-box .view-survey .check-box input').prop('checked');

        $('.notified-view.survey .view-box .view-survey .radio-box label').click(function(){
            $('.notified-view.survey .view-box .view-survey .radio-box label').removeClass('on');
            $(this).addClass('on');
        });
        $('.notified-view.survey .view-box .view-survey .check-box input').click(function(){
            if(checked === false){
                $(this).parent().toggleClass('on');
            }
        });

        $('.sur-btn').click(function(){
            $(this).removeClass('on').text('답변완료');
            $('.notified-view.survey .view-box .view-survey .radio-box input').attr('onclick','return(false)');
            $('.notified-view.survey .view-box .view-survey .radio-box label.on').css('background','#EAF6FD').css('border','2px solid #279CE7');
            $('.notified-view.survey .view-box .view-survey .radio-box label').unbind();

            $('.notified-view.survey .view-box .view-survey .check-box input').attr('onclick','return(false)');
            $('.notified-view.survey .view-box .view-survey .check-box label.on').css('background','#EAF6FD').css('border','2px solid #279CE7');
            $('.notified-view.survey .view-box .view-survey .check-box label').unbind();
        });
    });

    /* 셀렉트박스 탭 */
    $(function(){
        var $tabButtonItem = $('#tab-button li'),
            $tabSelect = $('#tab-select'),
            $tabContents = $('.tab-contents'),
            activeClass = 'is-active';

        $tabButtonItem.first().addClass(activeClass);
        $tabContents.not(':first').hide();

        // button
        $tabButtonItem.find('a').on('click', function(e) {
            var target = $(this).attr('href');

            $tabButtonItem.removeClass(activeClass);
            $(this).parent().addClass(activeClass);
            $tabSelect.val(target);
            $tabContents.hide();
            $(target).show();
            e.preventDefault();
        });

        // select
        $tabSelect.on('change', function() {
            var target = $(this).val(),
                targetSelectNum = $(this).prop('selectedIndex');

            $tabButtonItem.removeClass(activeClass);
            $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
            $tabContents.hide();
            $(target).show();
        });
    });

    /* 테마설정 */
    $('.theme-btn').click(function(){
        var main_backbtn = $('.main #nav .back-btn');
        var main_menubtn_1 = $('.main #nav .menu-btn i');
        var main_menubtn_2 = $('.main #nav .menu-btn i::before, #nav .menu-btn i::after');
        var main_tith2 = $('.main .tit-box h2');
        var main_titp = $('.main .tit-box p');
        var main_editbtnimg = $('.main .edit-btn img');
        var main_editbtn = $('.main .edit-btn img');

        if($('.theme_Swiper .swiper-slide.slide1').hasClass('swiper-slide-active')){
            $('body').attr('style','');
            $(main_backbtn).attr('style','');
            $(main_menubtn_1).css('background','');
            $(main_menubtn_2).css('background','');
            $(main_tith2).css('color','');
            $(main_titp).css('color','');
            $(main_editbtnimg).attr('src','');
            $(main_editbtn).css('color','');
        }
        if($('.theme_Swiper .swiper-slide.slide2').hasClass('swiper-slide-active')){
            $('body').attr('style','background:url(./images/bg/bg-theme-1.png) no-repeat center / cover;');
            $(main_backbtn).attr('style','background: url(./images/icon/icon-back-white.svg) center no-repeat;');
            $(main_menubtn_1).css('background','#fff');
            $(main_menubtn_2).css('background','#fff');
            $(main_tith2).css('color','#fff');
            $(main_titp).css('color','#fff');
            $(main_editbtnimg).attr('src','./images/icon/icon-edit-white.svg');
            $(main_editbtn).css('color','#fff');
        }
        if($('.theme_Swiper .swiper-slide.slide3').hasClass('swiper-slide-active')){
            $('body').attr('style','background:url(./images/bg/bg-theme-2.png) no-repeat center / cover;');
            $(main_backbtn).attr('style','background: url(./images/icon/icon-back.svg) center no-repeat;');
            $(main_menubtn_1).css('background','#000');
            $(main_menubtn_2).css('background','#000');
            $(main_tith2).css('color','#000');
            $(main_titp).css('color','#000');
            $(main_editbtnimg).attr('src','./images/icon/icon-edit.svg');
            $(main_editbtn).css('color','#000');
        }
        if($('.theme_Swiper .swiper-slide.slide4').hasClass('swiper-slide-active')){
            $('body').attr('style','background:url(./images/bg/bg-theme-3.png) no-repeat center / cover;');
            $(main_backbtn).attr('style','background: url(./images/icon/icon-back-white.svg) center no-repeat;');
            $(main_menubtn_1).css('background','#fff');
            $(main_menubtn_2).css('background','#fff');
            $(main_tith2).css('color','#fff');
            $(main_titp).css('color','#fff');
            $(main_editbtnimg).attr('src','./images/icon/icon-edit-white.svg');
            $(main_editbtn).css('color','#000');
        }
        if($('.theme_Swiper .swiper-slide.slide5').hasClass('swiper-slide-active')){
            $('body').attr('style','background:url(./images/bg/bg-theme-4.png) no-repeat center / cover;');
            $(main_backbtn).attr('style','background: url(./images/icon/icon-back-white.svg) center no-repeat;');
            $(main_menubtn_1).css('background','#fff');
            $(main_menubtn_2).css('background','#fff');
            $(main_tith2).css('color','#fff');
            $(main_titp).css('color','#fff');
            $(main_editbtnimg).attr('src','./images/icon/icon-edit-white.svg');
            $(main_editbtn).css('color','#fff');
        }
        if($('.theme_Swiper .swiper-slide.slide6').hasClass('swiper-slide-active')){
            $('body').attr('style','background:url(./images/bg/bg-theme-5.png) no-repeat center / cover;');
            $(main_backbtn).attr('style','background: url(./images/icon/icon-back-white.svg) center no-repeat;');
            $(main_menubtn_1).css('background','#fff');
            $(main_menubtn_2).css('background','#fff');
            $(main_tith2).css('color','#fff');
            $(main_titp).css('color','#fff');
            $(main_editbtnimg).attr('src','./images/icon/icon-edit-white.svg');
            $(main_editbtn).css('color','#fff');
        }
    });

    /* 알림 스위치 */
    $(document).on('click','#push-all', function(e) {
        if($(this).is(":checked")){
            $("input[type='checkbox']").not(0).prop("checked","checked");
            $('.push-service').show();
            $('.push-idcard').show();
        }else{
            $("input[type='checkbox']").not(0).prop("checked","");
            $('.push-service').hide();
            $('.push-idcard').hide();
        }
    });
    $(document).on('click','.switch-btn', function(e) {
        $('#push-all').prop("checked","");
    });

    /* 스플래시 */
    $(function(){
        setTimeout(function() {
            $('.splash-layer .s1 .logo').fadeOut(800);
            $('.splash-layer .s1 .title').fadeIn(800);
        }, 1500);
        setTimeout(function() {
            $('.splash-layer').fadeOut();
        }, 4500);
    }); 

    /* 앱 비밀번호 설정 */
    // $(function(){
    //     $('#pw_1').keyup(function () {
    //         var pwd1 = $('#pw_1').val()
    //         var pwd1len = pwd1.length;
    //         var p6 = 6;

    //         if(pwd1len === p6){
    //             $('#pw_1').hide();
    //             $('#pw_2').show().focus();
    //             $('.app-password .tit-box h2').text('앱 비밀번호 확인');
    //             $('.app-password .tit-box p').text('비밀번호를 재입력 해주세요.');
    //         }
    //     });
    //     $('#pw_2').keyup(function () {
    //         var pwd1 = $('#pw_1').val();
    //         var pwd2 = $('#pw_2').val();
    //         var pwd2len = pwd2.length;
    //         var p6 = 6;

    //         if (pwd1 != '' && pwd2 == '') {
    //             null;
    //         } else if (pwd1 != '' || pwd2 != '', pwd2len === p6) {
    //             if (pwd1 == pwd2) {
    //                 location.href='index.html';
    //             } else {
    //                 alert('비밀번호가 일치하지 않습니다. 비밀번호를 재입력 해주세요.');
    //             }
    //         }
    //     });
    // }); 

    /* 탭 */
    $(function(){
        $('ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();
            g.preventDefault();
        });
    });  

    /* 체크박스 전체선택 */
    $("#cbx_chkAll").click(function() {
        if($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
        else $("input[name=chk]").prop("checked", false);
    });
    $("input[name=chk]").click(function() {
        var total = $("input[name=chk]").length;
        var checked = $("input[name=chk]:checked").length;
        if(total != checked) $("#cbx_chkAll").prop("checked", false);
        else $("#cbx_chkAll").prop("checked", true); 
    });

    /* 본인인증페이지 동의 숨김 버튼 */
    $('.sms-verification .consent .all .open-btn').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.sms-verification .consent .list').show();
            $(this).css('transform','rotate(0deg)');
        } else {
            $('.sms-verification .consent .list').hide();
            $(this).css('transform','rotate(180deg)');
        }
    });

    /* 포커스 */
    $(function() {
        $(".inputs").keyup(function () {
            var charLimit = $(this).attr("maxlength");
            if (this.value.length >= charLimit) {
                $(this).nextAll('.inputs').focus();
                return false;
            }
        });
        $("#typingcode").keyup(function () {
            $('.btn-box button.type1').addClass('on');
        });

        $('.app-password .con-box .input-box .pw').focus();
    });

    /* 화면편집 팝업 드래그 */
    $(function(){
        dragula([
            document.getElementById('drag-list-1'),
        ])
        .on('drag', function(el) {
            el.classList.add('is-moving');
        })
        .on('dragend', function(el) {
            el.classList.remove('is-moving');
            window.setTimeout(function() {
                el.classList.add('is-moved');
                window.setTimeout(function() {
                    el.classList.remove('is-moved');
                }, 600);
            }, 100);
        });
    });

    /* 색상변경 버튼 */
    var colorlist = $('.color-layer .color-list .list');
    $(colorlist).click(function(){
        $(colorlist).removeClass('on');
        $(this).addClass('on');

        var selectcolor = $('.color-layer .color-list .list.on').attr('style');
        $('.heyid_Swiper .swiper-slide-active .card-box').attr('style',selectcolor);
    });
        
    /* nav btn */
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
    });

    $(".menu-btn").click(function(){
        if($(".menu-btn").hasClass("active") == true ) {
            $(".menu").fadeIn("fast");
        } else {
            $(".menu").fadeOut("fast");
            $(".menu ul li ul").slideUp("fast");
            $(".menu ul li").removeClass("on");
        }
    });

    /* nav list */
    (function($){
        var lnbUI = {
        click : function (target, speed) {
            var _self = this,
                $target = $(target);
            _self.speed = speed || 300;

            $target.each(function(){
            if(findChildren($(this))) {
                return;
            }
            $(this).addClass('noDepth');
            });

            function findChildren(obj) {
            return obj.find('> ul').length > 0;
            }

            $target.on('click','a', function(e){
                e.stopPropagation();
                var $this = $(this),
                    $depthTarget = $this.next(),
                    $siblings = $this.parent().siblings();
                $this.parent('li').find('ul li').removeClass('on');
                $siblings.removeClass('on');
                $siblings.find('ul').slideUp(250);

                if($depthTarget.css('display') == 'none') {
                    _self.activeOn($this);
                    $depthTarget.slideDown(_self.speed);
                } else {
                    $depthTarget.slideUp(_self.speed);
                    _self.activeOff($this);
                }
            })
        },
        activeOff : function($target) {
            $target.parent().removeClass('on');
        },
        activeOn : function($target) {
            $target.parent().addClass('on');
        }
        };

        // Call lnbUI
        $(function(){
        lnbUI.click('.menu li', 300)
        });

        $('.idcard-use .menu-btn').click(function(){
            if($(this).hasClass('active') == true){
                $('.idcard-use #nav .back-btn').hide();
            }else{
                $('.idcard-use #nav .back-btn').show();
            }
        });
    }(jQuery));

    /* 신분증 사용 타이머 */
    $(function(){
        var timer = $('.idcard-use .timer');
        var timercount = 10;

        function clearCountdown(interval) {
        clearTimeout(interval);
        }
        
        function countdown() {
            var countdownBegin = timercount;
            var count = setInterval(function() {
                if (countdownBegin <= 0) {
                    clearCountdown(count);
                } else {
                    --countdownBegin;
                    timer.html('<span>'+countdownBegin+'</span>');  
                }    
            }, 1000);
        }
        countdown();
        $('.idcard-use .con-box .card-box .timer-box svg .circle').attr('style','animation: '+timercount+'s circletimer infinite linear;');
        $('.idcard-use .con-box .card-box .timer-box .timer').attr('style','animation: '+timercount+'s circletimer1 infinite linear;');

        function randombar(){
            var randombar = String(Math.floor(Math.random()*2)).padStart(1, "0")
            $('.idcard-use .con-box .card-box .barcode .bar img').attr('src','./images/img/img-bar-'+ randombar +'.png');
        }
        function randomotp(){
            var randomotp = String(Math.floor(Math.random()*999999)).padStart(6, "0")
            $('.idcard-use .con-box .card-box .numcode .code').text(randomotp);
        }
        function randomcode(){
            var randomcode1 = String(Math.floor(Math.random()*9999)).padStart(4, "0")
            var randomcode2 = String(Math.floor(Math.random()*9999)).padStart(4, "0")
            var randomcode3 = String(Math.floor(Math.random()*9999)).padStart(4, "0")
            var randomcode4 = String(Math.floor(Math.random()*9999)).padStart(4, "0")
            $('.idcard-use .con-box .card-box .barcode .code .co1').text(randomcode1);
            $('.idcard-use .con-box .card-box .barcode .code .co2').text(randomcode2);
            $('.idcard-use .con-box .card-box .barcode .code .co3').text(randomcode3);
            $('.idcard-use .con-box .card-box .barcode .code .co4').text(randomcode4);
        }
        setInterval(function() {
            countdown();
            randombar();
            randomcode();
            randomotp();
        }, timercount*1000);
    });

});

/* 리사이즈 */
$(function(){
    $(window).resize(function() {
        var width = $(window).width();
        if (width<=375) {    
            $('.idcard-use .btn-box .barotp').html('<img src="./images/icon/icon-barcode.svg" alt="Barcode"> Barcode').removeClass('otp').addClass('barcode');
            $('.idcard-use .con-box .card-box .code-box').addClass('on');
            $('.idcard-use .con-box .card-box .sec-box .sec2').hide();

            $('.idcard-use .btn-box .barotp').click(function(){
                $('.idcard-use .con-box').attr('style','background:#fff');
                if($('.idcard-use .con-box .card-box .code-box').hasClass('on')){
                    $('.idcard-use .con-box .card-box .barcode').show();
                    $('.idcard-use .con-box .card-box .numcode').hide();
                    $('.idcard-use .con-box .card-box .sec-box .sec2').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec1').hide();
                    $('.idcard-use .con-box .card-box .sec-box .sec3').hide();
                } else {
                    $('.idcard-use .con-box .card-box .barcode').hide();
                    $('.idcard-use .con-box .card-box .numcode').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec2').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec1').hide();
                    $('.idcard-use .con-box .card-box .sec-box .sec3').hide();
                }
            });

            $('.idcard-use .con-box .card-box .code-box .back .back-btn').click(function(){
                $('.idcard-use .con-box .card-box .code-box').toggleClass('on');
                $('.idcard-use .con-box').attr('style','');
                if($('.idcard-use .con-box .card-box .code-box').hasClass('on')){
                    $('.idcard-use .con-box .card-box .code-box').removeClass('on');
                    $('.idcard-use .btn-box .barotp').html('<img src="./images/icon/icon-barcode.svg" alt="Barcode"> Barcode').removeClass('otp').addClass('barcode');
                    $('.idcard-use .con-box .card-box .sec-box .sec2').hide();
                    $('.idcard-use .con-box .card-box .sec-box .sec1').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec3').show();
                }else{
                    $('.idcard-use .con-box .card-box .code-box').removeClass('on');
                    $('.idcard-use .btn-box .barotp').html('<img src="./images/icon/icon-barcode.svg" alt="Barcode"> Barcode').removeClass('otp').addClass('barcode');
                    $('.idcard-use .con-box .card-box .sec-box .sec2').hide();
                    $('.idcard-use .con-box .card-box .sec-box .sec1').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec3').show();
                }
            });
        } 
        if (width>=376) {
            $('.idcard-use .btn-box .barotp').html('<img src="./images/icon/icon-otp.svg" alt="OTP"> OTP').removeClass('barcode').addClass('otp');
            $('.idcard-use .con-box .card-box .code-box').removeClass('on');
            $('.idcard-use .con-box .card-box .sec-box .sec1').show();
            $('.idcard-use .con-box .card-box .sec-box .sec2').show();
            $('.idcard-use .con-box .card-box .sec-box .sec3').show();

            $('.idcard-use .btn-box .barotp').click(function(){
                if($('.idcard-use .con-box .card-box .code-box').hasClass('on')){
                    $('.idcard-use .con-box .card-box .barcode').hide();
                    $('.idcard-use .con-box .card-box .numcode').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec2').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec1').show();
                    $('.idcard-use .con-box .card-box .sec-box .sec3').show();
                } else {
                    $('.idcard-use .con-box .card-box .barcode').show();
                    $('.idcard-use .con-box .card-box .numcode').hide();
                }
            });
        }
    });
    $(window).resize();
});