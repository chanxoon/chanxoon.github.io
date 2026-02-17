$(document).ready(function(){
    /* 메인 슬라이드 XML */
	$.ajax({
		dataType : "xml",
		url : "./main-slide.xml",
		success : function(data){ resultHtml(data); },
		error : function(){ alert("error"); }
	});
    
    function resultHtml(data) {
        var slide = $(data).find("slide");
        var images = $(data).find("img");
        var Dimages = $(data).find("Dimg");
        var num = $(data).find("num");
        var cla = $(data).find("class");
        var cla2 = $(data).find("class2");
        var cla3 = $(data).find("class3");
        var Mtext1 = $(data).find("Mtext1");
        var Mtext2 = $(data).find("Mtext2");
        var Mtext3 = $(data).find("Mtext3");
        var poptext1 = $(data).find("poptext1");
        var name = $(data).find("name");
        var icons = $(data).find("icon");
        var icons2 = $(data).find("icon2");
        var slidebg = $(data).find("slidebg");

        var html = "";

        for(var i = 0; i < slide.length; i++) {
            var slidePath = slide.eq(i);
            var imagesPath = images.eq(i);
            var DimagesPath = Dimages.eq(i);
            var numPath = num.eq(i);
            var claPath = cla.eq(i);
            var cla2Path = cla2.eq(i);
            var cla3Path = cla3.eq(i);
            var Mtext1Path = Mtext1.eq(i);
            var Mtext2Path = Mtext2.eq(i);
            var Mtext3Path = Mtext3.eq(i);
            var poptext1Path = poptext1.eq(i);
            var namePath = name.eq(i);
            var iconsPath = icons.eq(i);
            var icons2Path = icons2.eq(i);
            var slidebgPath = slidebg.eq(i);

            html += "<div id='" + namePath.text() + "'class='swiper-slide' style='background:" + slidebgPath.text() + "'>";
            html += "<div class='Num'>" + numPath.text() + "</div>";
            html += "<div class='Img'>";
            html += "<a href='" + DimagesPath.text() + "' data-number='" + numPath.text() + "' data-confi='" + claPath.text() + "' data-confi2='" + cla2Path.text() + "' data-confi3='" + cla3Path.text() + "' title='" + Mtext1Path.text() + "' data-description='" + Mtext2Path.text() + "' data-text1='" + poptext1Path.text() + "' data-text2='" + Mtext3Path.text() + "' data-slidebg='" + slidebgPath.text() + "'>";
            html += "<div class='cate'><span>" + claPath.text() + "</span><span>" + cla2Path.text() + "</span><span>" + cla3Path.text() + "</span></div>";
            //html += "<span class='icon'><img src ='" + icons2Path.text() + "' alt='PC 이미지'><img src ='" + iconsPath.text() + "' alt='스마트폰 이미지'></span>";
            html += "<img src = '" + imagesPath.text() + "' class='mimg' alt='썸네일 이미지'/>";
            html += "</a>";
            html += "</div>";
            html += "<div class='Text'><p>" + Mtext1Path.text() + "</p><p>" + Mtext2Path.text() + "</p><p class='mo'>" + poptext1Path.text() + "</p><p class='pc'>" + Mtext3Path.text() + "</p></div>";
            html += "</div>";
        }

        $("#display").empty();
        $("#display").append(html);
        //$("#display").html(html);
    }
    
    /* 메인 슬라이드 팝업 */
    /* Overlay for images (gallery)* @param {string} theme */
    var openGallery = function(theme) {
        $(this).magnificPopup({
            mainClass: theme + /*'mfp-with-zoom'*/'', // no zoom, just for bg fadeIn
            overflowY: 'hidden',
            delegate: '> .swiper-slide > .Img > a',
            type: 'image',
            closeOnContentClick : false, 
            closeOnBgClick: false,
            enableEscapeKey: false,
            /*
            zoom: {
                enabled: true, 
                duration: 500, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            },
            */
            gallery: {          
                enabled: true, // set to true to enable gallery
                preload: [0,2], // read about this option in next Lazy-loading section
                navigateByImgClick: false,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                //tPrev: 'Previous (Left arrow key)', // title for left button
                //tNext: 'Next (Right arrow key)', // title for right button
                //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },
            callbacks: {
                markupParse: function(template, values, item) {
                    values.number = item.el.data('number');
                    values.confi = item.el.data('confi');
                    values.confi2 = item.el.data('confi2');
                    values.confi3 = item.el.data('confi3');
                    values.description = item.el.data('description');
                    values.text1 = item.el.data('text1');
                    values.text2 = item.el.data('text2');
                    values.name = item.el.data('name');   
                    values.slidebg = item.el.data('slidebg');  
                },
                //beforeOpen:function(){this.wrap.removeAttr('tabindex');},
            },
            image: {
                headerFit: true,
                captionFit: true,
                preserveHeaderAndCaptionWidth: false,
                markup: 
                    '<script> $(".mfp-content-container").mCustomScrollbar({ theme:"dark-3" }); </script>'+
                    '<script> var Sname = $(".swiper-slide-active").attr("id"); $(".mfp-header").attr("id",Sname); </script>'+
                    '<script>'+   
                    'var slidebg = $(".mfp-header .mfp-slidebg").html();'+
                    '$(".mfp-header").attr("style","background:" + slidebg);'+
                    
                    '$(".mfp-arrow").click(function(){'+
                        'var slidebg = $(".mfp-header .mfp-slidebg").html();'+
                        '$(".mfp-header").attr("style","background:" + slidebg);'+
                
                        'var Aname = $(".mfp-header .mfp-number").html();'+
                        '$(".mfp-header").attr("id","work" + Aname);'+
                        '$(".mfp-example .mfp-container .mfp-content-container").scrollTop(0);'+
                    '});'+
                    
                    '$(".mfp-arrow").bind("touchend", function() {'+
                        'setTimeout(function(){'+
                            'var Bname = $(".mfp-header .mfp-number").html();'+
                            '$(".mfp-header").attr("id","work" + Bname);'+
                        '},50);'+
                    '});'+
                    '</script>'+
                
                    '<div class="mfp-figure fadeout">'+
                        '<div class="mfp-close"></div>'+
                        '<div class="mfp-header" name="">'+
                            '<div class="mfp-slidebg"></div>'+
                            '<div class="mfp-number"></div>'+
                            '<div class="mfp-confi"></div>'+
                            '<div class="mfp-confi2"></div>'+
                            '<div class="mfp-confi3"></div>'+
                            '<div class="mfp-top-bar">'+
                                '<div class="mfp-title"></div>'+
                                '<div class="mfp-description"></div>'+
                                '<div class="mfp-text1"></div>'+
                                '<div class="mfp-text2"></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="mfp-content-container">'+
                            '<div class="mfp-img"></div>'+
                        '</div>'+
                    '</div>',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });
    };

    $('.magnific-gallery').each(function() {
        openGallery.call(this, 'mfp-example');
    });
    /* 메인 슬라이드 팝업 end */
}); 

$(window).load(function(){
    var agent = navigator.userAgent.toLowerCase();
    
    /* 익스플로러가 맞으면 */
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
        /* 메인 슬라이드 옵션 */
        var swiper = new Swiper('.swiper-container', {
            initialSlide: 0,
            loop: false,
            loopAdditionalSlides : 1,
            observer: true,
            observeParents: true,
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: false,
            mousewheel: true,
            allowTouchMove: true,
            effect: 'horizontal',
            slideToClickedSlide : true,
            speed: 400,
            threshold: 0,
            on: {
                touchStart: function(){

                },
                touchMove: function(){
                    
                },
                touchEnd: function(){
                    //alert("click");
                    $(".sec1").css("width","26%");
                    $(".sec1").removeClass("sec1-border");
                    $(".sec1 .inner .scroll").hide();
                    $(".sec1 .inner .header-text p:nth-of-type(1) img").css("max-width","250px");
                    $(".sec1 .inner .header-text p:nth-of-type(2)").css("font-size","20px").css("line-height","30px");
                    $(".sec1 .inner .header-text p:nth-of-type(3) br").css("display","none");
                },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1289: {
                    slidesPerView: 'auto',
                    centeredSlides: false,
                },
                2989: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                },
                4989: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                }
            },
        });
    }
    /* 익스플로러가 아니면 */
    else {
        /* 메인 슬라이드 옵션 */
        var swiper = new Swiper('.swiper-container', {
            initialSlide: -1,
            loop: true,
            loopAdditionalSlides : 1,
            observer: true,
            observeParents: true,
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: false,
            mousewheel: true,
            allowTouchMove: true,
            effect: 'horizontal',
            slideToClickedSlide : true,
            speed: 200,
            threshold: 10,
            on: {
                touchStart: function(){

                },
                touchMove: function(){

                },
                touchEnd: function(){
                    //alert("click");
                    $(".sec1").css("width","26%");
                    $(".sec1").removeClass("sec1-border");
                    $(".sec1 .inner .scroll").hide();
                    $(".sec1 .inner .header-text p:nth-of-type(1) img").css("max-width","250px");
                    $(".sec1 .inner .header-text p:nth-of-type(2)").css("font-size","20px").css("line-height","30px");
                    $(".sec1 .inner .header-text p:nth-of-type(3) br").css("display","none");
                },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1289: {
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    initialSlide: 0,
                },
                2989: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                },
                4989: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                }
            },
        });
    }
    
    /* ABOUT 슬라이드 옵션 */
    var swiper = new Swiper('.swiper-container-sub', {
        observer: true,
        observeParents: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1, 
        spaceBetween: 0,
        freeMode: false,
        mousewheel: true,
        loop: false,
        allowTouchMove: true,
        effect: 'horizontal',
        //slideToClickedSlide : true,
        speed: 300,
        threshold: 10,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });
    
    /* 메인 섹션 마우스 이벤트 */
    $(".swiper-container").on("mousewheel", function(event, delta){
        if(delta>0){
            //마우스 휠 up
            
        }else if(delta<0){
            //마우스 휠 down
            $(".sec1").css("width","26%");
            $(".sec1").removeClass("sec1-border");
            $(".sec1 .inner .scroll").hide();
            $(".sec1 .inner .header-text p:nth-of-type(1) img").css("max-width","250px");
            $(".sec1 .inner .header-text p:nth-of-type(2)").css("font-size","20px").css("line-height","30px");
            $(".sec1 .inner .header-text p:nth-of-type(3) br").css("display","none");
        }
    });
        
    /* 개인정보처리 팝업 */
    $(".privacy_btn").click(function() {
        $(".privacy_message").fadeIn();
        $(".BG").fadeIn();
    });

    /* 팝업 닫기 */
    $(".close").click(function() {
        $(".pop_message").fadeOut();
        $(".privacy_message").fadeOut();
        $(".BG").fadeOut();
    });
    $(".BG").click(function() {
        $(".pop_message").fadeOut();
        $(".privacy_message").fadeOut();
        $(".BG").fadeOut();
    });
    
    /* textarea 글자수 제한 */
    $("#description").keyup(function (e){
        var content = $(this).val();
        $(this).height(((content.split("\n").length + 10) * 10.5) + "px");
        $("#counter").html(content.length + "/500");
    });
    $('#description').keyup();
    
    /* 메인 메뉴 반응형 */
    jQuery(function($) {
      $.fn.responsivenav = function(args) {
        // Default settings
        var defaults = {
          responsive: true,
          width: 1289,                          // Responsive width
          button: $(this).attr('id')+'-button', // Menu button id
          animation: {                          // Menu animation
            effect: 'slide',                    // Accepts 'slide' or 'fade'
            show: 150,
            hide: 100
          },
          selected: 'selected',                 // Selected class
          arrow: 'downarrow'                    // Dropdown arrow class
        };
        var settings = $.extend(defaults, args);
        // Initialize the menu and the button
        init($(this).attr('id'), settings.button);

        function init(menuid, buttonid) {
          setupMenu(menuid, buttonid);
          // Add a handler function for the resize and orientationchange event
          $(window).bind('resize orientationchange', function(){ resizeMenu(menuid, buttonid); });
          // Trigger initial resize
          resizeMenu(menuid, buttonid);
        }

        function setupMenu(menuid, buttonid) {
          var $mainmenu = $('#'+menuid+'>ul');
          var $headers = $mainmenu.find("ul").parent();
          // Add dropdown arrows
          $headers.each(function(i) {
            var $curobj = $(this);
            $curobj.children('a:eq(0)').append('<span class="'+settings.arrow+'"></span>');
          });

          if ( settings.responsive ) {
            // Menu button click event
            // Displays top-level menu items
            $('#'+buttonid).click(function(e) {
              e.preventDefault();

              if ( isSelected($('#'+buttonid)) ) {
                // Close menu
                collapseChildren('#'+menuid);
                animateHide($('#'+menuid), $('#'+buttonid));
              } else {
                // Open menu
                animateShow($('#'+menuid), $('#'+buttonid));
              }
            });
          }
        }

        function resizeMenu(menuid, buttonid) {
          var $ww = document.body.clientWidth;
          // Add mobile class to elements for CSS use
          // instead of relying on media-query support
          if ( $ww > settings.width || !settings.responsive) {
            $('#'+menuid).removeClass('mobile');
            $('#'+buttonid).removeClass('mobile');
          } else {
            $('#'+menuid).addClass('mobile');
            $('#'+buttonid).addClass('mobile');
          }

          var $headers = $('#'+menuid+'>ul').find('ul').parent();
            
          $headers.each(function(i) {
            var $curobj = $(this);
            var $link = $curobj.children('a:eq(0)');
            var $subul = $curobj.find('ul:eq(0)');

            // Unbind events
            $curobj.unbind('mouseenter mouseleave');
            $link.unbind('click');
            animateHide($curobj.children('ul:eq(0)'));

            if ( $ww > settings.width  || !settings.responsive ) {
              // Full menu
              $curobj.hover(function(e) {
                var $targetul = $(this).children('ul:eq(0)');

                var $dims = { w: this.offsetWidth,
                              h: this.offsetHeight,
                              subulw: $subul.outerWidth(),
                              subulh: $subul.outerHeight()
                            };
                var $istopheader = $curobj.parents('ul').length == 1 ? true : false;
                $subul.css($istopheader ? {} : { top: 0 });
                var $offsets = { left: $(this).offset().left, 
                                 top: $(this).offset().top
                               };
                var $menuleft = $istopheader ? 0 : $dims.w;
                $menuleft = ( $offsets.left + $menuleft + $dims.subulw > $(window).width() ) ? ( $istopheader ? -$dims.subulw + $dims.w : -$dims.w ) : $menuleft;
                $targetul.css({ left:$menuleft+'px', 
                               width:$dims.subulw+'px' 
                              });

                animateShow($targetul);
              },
              function(e) {
                var $targetul = $(this).children('ul:eq(0)');
                animateHide($targetul);
              });
            } else {
              // Compact menu
              $link.click(function(e) {
                e.preventDefault();

                var $targetul = $curobj.children('ul:eq(0)');
                if ( isSelected($curobj) ) {
                  collapseChildren($targetul);
                  animateHide($targetul);
                } else {
                  //collapseSiblings($curobj);
                  animateShow($targetul);
                }
              });
            }
          });

          collapseChildren('#'+menuid);

          if ( settings.responsive && isSelected($('#'+buttonid)) ) {
            //collapseChildren('#'+menuid);
            $('#'+menuid).hide();
            $('#'+menuid).removeAttr('style');
            $('#'+buttonid).removeClass(settings.selected);
          }
        }

        function collapseChildren(elementid) {
          // Closes all submenus of the specified element
          var $headers = $(elementid).find('ul');
          $headers.each(function(i) {
            if ( isSelected($(this).parent()) ) {
              animateHide($(this));
            }
          });
        }

        function collapseSiblings(element) {
          var $siblings = element.siblings('li');
          $siblings.each(function(i) {
            collapseChildren($(this));
          });
        }

        function isSelected(element) {
          return element.hasClass(settings.selected);
        }

        function animateShow(menu, button) {
          if ( !button ) { var button = menu.parent(); }

          button.addClass(settings.selected);

          if ( settings.animation.effect == 'fade' ) {
            menu.fadeIn(settings.animation.show);
            $(".BG").fadeIn("fast");
          } else if ( settings.animation.effect == 'slide' ) {
            menu.fadeIn(settings.animation.show).css("left","0%");
            $(".BG").fadeIn("fast");
            $("header h2").addClass("selected");
            $("header h2 a .plogo").hide();
            $("header h2 a .mlogo").show();
          } else {
            menu.show();
            menu.removeClass('hide');
          }
        }

        function animateHide(menu, button) {
          if ( !button ) { var button = menu.parent(); }
          if ( settings.animation.effect == 'fade' ) {
            menu.fadeOut(settings.animation.hide, function() { 
                menu.removeAttr('style');
                button.removeClass(settings.selected);
                $(".BG").fadeOut("fast");
            });
          } else if ( settings.animation.effect == 'slide' ) {
            menu.fadeOut(settings.animation.hide, function() { 
                menu.removeAttr('style');
                button.removeClass(settings.selected);
                menu.css("display","block").css("left","2000px");
                $(".BG").fadeOut("fast");
                $("header h2").removeClass("selected");
                $("header h2 a .plogo").show();
                $("header h2 a .mlogo").hide();
            });
          } else {
                menu.hide();
                menu.addClass('hide');
                menu.removeAttr('style');
                button.removeClass(settings.selected);
          }
        }
        $(".BG").click(function(){
            $(".BG").fadeOut("fast");
            $("#primary-nav.mobile").hide();
            $("#primary-nav-button").removeClass("selected");
        });
      };
    });

    jQuery(function ($) {
      $('#primary-nav').responsivenav();
      $('#top-nav').responsivenav({responsive:false});
    }); 
    /* 메인 메뉴 반응형 end */
});

/* 리사이즈 */
$(function(){
    $(window).resize(function() {
        var width = $(window).width();
        /* width <= 1289 */
        if (width<=1289) {            
            var mstartX = 0,
                mendX = 0,
                mstartY = 0,
                mendY = 0;
            var startX, startY, endX, endY;
            $(".sec1").on('touchstart', function(event) {
                startX = event.originalEvent.changedTouches[0].screenX;
                startY = event.originalEvent.changedTouches[0].screenY;
            });
            $(".sec1").on('touchmove', function(event) {
                endX = event.originalEvent.changedTouches[0].screenX;
                endY = event.originalEvent.changedTouches[0].screenY;
                if (startY - endY > 50) {
                    
                } else if (endY - startY > 50) {
                    
                } else if (startY - endY < 50 || endY - startY < 50) {

                }
                if (startX - endX > 50) {
                    $(".sec1").css("width","30%");
                    $(".sec1 .inner .header-text p:nth-of-type(2)").fadeOut("");
                    $(".sec1 .inner .header-text p:nth-of-type(3)").fadeOut("");
                    $(".sec1 .inner .header-text p:nth-of-type(4)").fadeOut("");
                    $(".wrap header h2").addClass("h-on");
                    $(".wrap header #primary-nav-button").addClass("h-on");
                } else if (endX - startX > 50) {
                    
                } else if (startX - endX < 50 || endX - startX < 50) {
                    $(".sec1").css("width","100%");
                    $(".sec1 .inner .scroll").show();
                    $(".sec1 .inner .header-text").show();
                    $(".sec1 .inner .header-text p:nth-of-type(1)").removeClass("bounceInLeft");
                    $(".sec1 .inner .header-text p:nth-of-type(2)").removeClass("bounceInRight").fadeIn();
                    $(".sec1 .inner .header-text p:nth-of-type(3)").removeClass("bounceInLeft").fadeIn();
                    $(".sec1 .inner .header-text p:nth-of-type(4)").removeClass("bounceInRight").fadeIn();
                    $(".wrap header h2").removeClass("h-on");
                    $(".wrap header #primary-nav-button").removeClass("h-on");
                }
            });
            $(".sec1").on('touchend', function(event) {
                endX = event.originalEvent.changedTouches[0].screenX;
                endY = event.originalEvent.changedTouches[0].screenY;
                if (startY - endY > 50) {
                    
                } else if (endY - startY > 50) {
                    
                } else if (startY - endY < 50 || endY - startY < 50) {

                }
                if (startX - endX > 50) {
                    $(".sec1").addClass("w-on");
                    //$(".wrap header").addClass("b-on");
                    $(".wrap header h2").addClass("h-on");
                    $(".wrap header #primary-nav-button").addClass("h-on");
                    $(".sec1 .inner .scroll").hide();
                    $(".sec1 .inner .header-text").hide();
                    $(".sec1 .inner .footer").hide();
                } else if (endX - startX > 50) {
                    
                } else if (startX - endX < 50 || endX - startX < 50) {

                }
            });
            
            /* 메인 섹션 마우스 이벤트 */
            $(".sec1").on("mousewheel", function(event, delta){
                if(delta>0){
                    //마우스 휠 up

                }else if(delta<0){
                    //마우스 휠 down
                    $(".sec1").addClass("w-on");
                    //$(".wrap header").addClass("b-on");
                    $(".wrap header h2").addClass("h-on");
                    $(".wrap header #primary-nav-button").addClass("h-on");
                    $(".sec1 .inner .scroll").hide();
                    $(".sec1 .inner .header-text").hide();
                    $(".sec1 .inner .footer").hide();
                }
            });
            
            $(".sec1").css("width","100%");
            $(".sec1").removeClass("w-on");
            //$(".wrap header").removeClass("b-on");
            $(".wrap header h2").removeClass("h-on");
            $(".wrap header #primary-nav-button").removeClass("h-on");
            $(".sec1 .inner .scroll").fadeIn();
            $(".sec1 .inner .header-text").fadeIn();
            $(".sec1 .inner .header-text p:nth-of-type(1)").addClass("bounceInLeft");
            $(".sec1 .inner .header-text p:nth-of-type(2)").addClass("bounceInRight").fadeIn();
            $(".sec1 .inner .header-text p:nth-of-type(3)").addClass("bounceInLeft").fadeIn();
            $(".sec1 .inner .header-text p:nth-of-type(4)").addClass("bounceInRight").fadeIn();    
            $(".sec1 .inner .header-text p:nth-of-type(1) img").css("max-width","250px");
            $(".sec1 .inner .header-text p:nth-of-type(2)").css("font-size","20px").css("line-height","30px");
            $(".sec1 .inner .header-text p:nth-of-type(3) br").css("display","none");
            $(".sec1 .inner .footer").fadeIn();
            $(".sec1-sub .inner .scroll").fadeOut();
        }
        /* width >= 1289 */
        if (width>=1289) {
            $(".sec1").css("width","");
            $(".sec1 .inner .scroll").fadeIn();
            $(".sec1 .inner .header-text p br").show();
            $(".sec1 .inner .header-text p:nth-of-type(1) img").css("max-width","450px");
            $(".sec1 .inner .header-text p:nth-of-type(2)").css("font-size","34px").css("line-height","44px");
            $(".sec1 .inner .header-text p:nth-of-type(3) br").css("display","block");
        }
    });
    $(window).resize();
});
