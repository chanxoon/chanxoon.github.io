$(document).ready(function(){

  $('.open-btn').click(function(){
    $(this).toggleClass('on');
    if($(this).hasClass('on')){
      $('.mainSwiper .swiper-slide.slide6 .inner .reference > div').show();
      $(this).css('transform','rotate(180deg)');
      $('.mainSwiper .swiper-slide.slide6 .inner').css('margin-top','300px');
      //$('.mainSwiper .swiper-slide.slide6').css('overflow-y','auto');
    } else {
      $('.mainSwiper .swiper-slide.slide6 .inner .reference > div').hide();
      $(this).css('transform','rotate(0deg)');
      $('.mainSwiper .swiper-slide.slide6 .inner').css('margin-top','0px');
      //$('.mainSwiper .swiper-slide.slide6').css('overflow-y','initial');
    }
  });
  $('.scroll-down').click(function(){
    mainswiper.slideTo(1);
  });

  // 메인슬라이드
  var mainswiper = new Swiper('.mainSwiper', {
    direction: 'vertical',
    speed:1500,
    autoHeight : true,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    // on: {
    //   slideChangeTransitionStart: function(){
    //         if($('.mainSwiper .swiper-slide.slide2').hasClass('swiper-slide-active')){
    //           $('.mainSwiper .swiper-slide.slide2').css('background-position','20% 0%');
    //         }
    //         if($('.mainSwiper .swiper-slide.slide3').hasClass('swiper-slide-active')){
    //           $('.mainSwiper .swiper-slide.slide3').css('background-position','40% 0%');
    //         }
    //         if($('.mainSwiper .swiper-slide.slide4').hasClass('swiper-slide-active')){
    //           $('.mainSwiper .swiper-slide.slide4').css('background-position','60% 0%');
    //         }
    //         if($('.mainSwiper .swiper-slide.slide5').hasClass('swiper-slide-active')){
    //           $('.mainSwiper .swiper-slide.slide5').css('background-position','80% 0%');
    //         }
    //         if($('.mainSwiper .swiper-slide.slide6').hasClass('swiper-slide-active')){
    //           $('.mainSwiper .swiper-slide.slide6').css('background-position','100% 0%');
    //         }
    //     },
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
  });

  var subswiper = new Swiper('.subSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    //simulateTouch: true,
    autoplay: 'false',
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination-sub',
      clickable: true,
    },
    breakpoints: {
      1400: {
        allowTouchMove : false,
        watchOverflow : true, 
        initialSlide: 0,
      }
    }
  });

  /* 리사이즈 */
  $(function(){
    $(window).resize(function() {
        var width = $(window).width();
        if (width<=1400) {     
            
        } 
        if (width>=1401) {
          $('.subSwiper .swiper-wrapper').attr('style','transform: translate3d(0px, 0px, 0px)');
        }
    });
    $(window).resize();
  });

  // var ww = $(window).width();
  // var subswiper = undefined;
  // function initSwiper() {
  //   if (ww < 1400 && subswiper == undefined) {

  //   } else if (ww >= 1400 && subswiper != undefined) {
  //     subswiper.destroy();
  //     subswiper = undefined;
  //     $('.subSwiper .swiper-wrapper').attr('style','transform: translate3d(0px, 0px, 0px)');
  //     $('.subSwiper .swiper-slide').attr('style','');
  //     alert('1');
  //   }
  // }
  // initSwiper();
  // $(window).on('resize', function () {
  //   ww = $(window).width();
  //   initSwiper();
  // });

  // 섹션1 타이핑 효과
  function typing() {
    var data = [
      {TypeText: "<strong>월드스마트시티</strong><br><strong>엑스포</strong>에서 만나는,<br><strong>특별한 컨퍼런스</strong>"},
      {TypeText: "특별한 주제<br><strong>특별한 연사</strong>"},
      {TypeText: "<strong>경험</strong>하지 못한<br><strong>지식의 세계</strong>가<br><strong>여러분을 기다립니다.</strong>"}
    ];

    var allElements = document.getElementsByClassName("typeing");
    for (var j = 0; j < allElements.length; j++) {
      var currentElementId = allElements[j].id;
      var element = document.getElementById(currentElementId);
      var currentElementIdContent = data[0][currentElementId];
      var currentElementIdContent1 = data[1][currentElementId];
      var currentElementIdContent2 = data[2][currentElementId];

      // type code
      var i = 0, isTag, text;
      (function type() {
        text = currentElementIdContent.slice(0, ++i);
        if (text === currentElementIdContent) return;
        element.innerHTML = text + '<span class="blinker">&#32;</span>';
        var char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 100);
      })();

      setTimeout(() => {
        var i = 0, isTag, text;
        (function type() {
          text = currentElementIdContent1.slice(0, ++i);
          if (text === currentElementIdContent1) return;
          element.innerHTML = text + '<span class="blinker">&#32;</span>';
          var char = text.slice(-1);
          if (char === "<") isTag = true;
          if (char === ">") isTag = false;
          if (isTag) return type();
          setTimeout(type, 100);
        })();
      }, 5000);

      setTimeout(() => {
        var i = 0, isTag, text;
        (function type() {
          text = currentElementIdContent2.slice(0, ++i);
          if (text === currentElementIdContent2) return;
          element.innerHTML = text + '<span class="blinker">&#32;</span>';
          var char = text.slice(-1);
          if (char === "<") isTag = true;
          if (char === ">") isTag = false;
          if (isTag) return type();
          setTimeout(type, 100);
        })();
      }, 8000);
    };
  }
  typing();



  // 아코디언
  $(function() {
    window.setTimeout(function() {
      $('.subSwiper').css('opacity', '1');
    }, 2000);
    $('.subSwiper .swiper-slide').addClass('default');
    
    $('.slide2 .subSwiper .swiper-slide').hover(function() {
      var e = $('.slide2 .subSwiper .swiper-slide');
      if(e.hasClass('expand')){
          e.removeClass('expand');
          $(this).addClass('expand');
      } else { 
          $(this).addClass('expand'); 
      }
    });
    $('.slide3 .subSwiper .swiper-slide').hover(function() {
      var e = $('.slide3 .subSwiper .swiper-slide');
      if(e.hasClass('expand')){
          e.removeClass('expand');
          $(this).addClass('expand');
      } else { 
          $(this).addClass('expand'); 
      }
    });
    $('.slide4 .subSwiper .swiper-slide').hover(function() {
      var e = $('.slide4 .subSwiper .swiper-slide');
      if(e.hasClass('expand')){
          e.removeClass('expand');
          $(this).addClass('expand');
      } else { 
          $(this).addClass('expand'); 
      }
    });
    $('.slide5 .subSwiper .swiper-slide').hover(function() {
      var e = $('.slide5 .subSwiper .swiper-slide');
      if(e.hasClass('expand')){
          e.removeClass('expand');
          $(this).addClass('expand');
      } else { 
          $(this).addClass('expand'); 
      }
    });
    $('.slide6 .subSwiper .swiper-slide').hover(function() {
      var e = $('.slide6 .subSwiper .swiper-slide');
      if(e.hasClass('expand')){
          e.removeClass('expand');
          $(this).addClass('expand');
      } else { 
          $(this).addClass('expand'); 
      }
    });
  });

});

document.cookie = "safeCookie1=foo; SameSite=Lax"; 
document.cookie = "safeCookie2=foo";  
document.cookie = "crossCookie=bar; SameSite=None; Secure";






