$(document).ready(function(){
    
// 섹션1 랜덤 백그라운드
$(function(){
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    $('#sec1 .bg').addClass('bg0' + randomNumber);
    
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
    }
    
    var cnt=0;
    var arr = ['bg-sec1-1.png', 'bg-sec1-2.png', 'bg-sec1-3.png', 'bg-sec1-4.png'];
    var randomarr = shuffle(arr);
    var imgrotater = setInterval(function() { 
        if (cnt==4) cnt=0;
        $('#sec1 .bg').css('opacity','0.3').css('background','url(./img/bg/'+ randomarr[cnt] +') center no-repeat #333').css('background-size','cover').animate({opacity:1},500);
        cnt++;
    }, 4000);
});

// 섹션1 마우스 효과
// $('#sec1').mousemove(function(e) {
//     var moveForce = 80;
//     var rotateForce = 20;
    
//     var docX = $(document).width();
//     var docY = $(document).height();
    
//     var moveX = (e.pageX - docX/2) / (docX/2) * moveForce;
//     var moveY = (e.pageY - docY/8) / (docY/8) * moveForce;
    
//     var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
//     var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
//     $('#sec1 .bg').css('transform', 'translate('+moveX+'px, '+moveY+'px)');
//     //$('#sec3 .inner .img > div').css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
// });    
    
// 섹션1 숫자 카운트
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 50,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });
    setTimeout(function() { 
        $('.timer').each(count);  
    }, 1200);
    
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

// 섹션2 좌우 롤링배너
$(function() { 
    $('#left-rolling').simplyScroll({
        speed: 3,
        autoMode: 'loop',
        direction: 'forwards'
    });
    $('#right-rolling').simplyScroll({
        speed: 3,
        autoMode: 'loop',
        direction: 'backwards'
    });

    var i = 1;
    $('#sec2 .rolling-box .r1 .item').each( function() {
        $(this).addClass( 's' + i );
        i = i + 1;
        if (i == 100) {
            return false;
        }
    });
    var i = 1;
    $('#sec2 .rolling-box .r2 .item').each( function() {
        $(this).addClass( 's' + i );
        i = i + 1;
        if (i == 100) {
            return false;
        }
    });
    $('.rolling-box .r1 .item, .rolling-box .r2 .item').mouseenter(function(){ 
        $(this).addClass('on');
    });
    $('.rolling-box .r1 .item, .rolling-box .r2 .item').mouseleave(function(){ 
        $(this).removeClass('on');
    });
});
    
// 섹션3 배경 효과
$(function() { 
    for (var i = 0; i <= 4; i++) {
        var blocks1 = $('#sec3 .animate1');
        var blocks2 = $('#sec3 .animate2');
        var blocks3 = $('#sec3 .animate3');
        var blocks4 = $('#sec3 .animate4');
        $(blocks1).addClass('block1');
        $(blocks2).addClass('block2');
        $(blocks3).addClass('block3');
        $(blocks4).addClass('block4');
    }
    
    var tl1 = anime.timeline({ duration: 300, loop: true });
    // block1
    tl1.add({
        targets: ".block1",
        opacity: 0,
        scale: 0.1,
        rotate: "-15deg",
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-1').fadeIn();
            $('.block1 .i1').addClass('animate-i-1');
            $('.block1 .i2').addClass('animate-i-2');
        }
    });
    tl1.add({
        targets: ".block1",
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1000,
        delay: anime.stagger(100),
        endDelay: 1000,
    });
    tl1.add({
        targets: ".block1",
        opacity: 0.0,
        scale: 0.8,
        rotate: 0,
        duration: 500,
        delay: anime.stagger(100),
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-1').fadeOut();
            $('.block1 .i1').removeClass('animate-i-1');
            $('.block1 .i2').removeClass('animate-i-2');
        }
    });
    
    // block2
    tl1.add({
        targets: ".block2",
        opacity: 0,
        scale: 0.1,
        rotate: "-15deg",
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-2').fadeIn();
            $('.block2 .i1').addClass('animate-i-1');
            $('.block2 .i2').addClass('animate-i-2');
        }
    });
    tl1.add({
        targets: ".block2",
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1000,
        delay: anime.stagger(100),
        endDelay: 1000,
    });
    tl1.add({
        targets: ".block2",
        opacity: 0.0,
        scale: 0.8,
        rotate: 0,
        duration: 500,
        delay: anime.stagger(100),
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-2').fadeOut();
            $('.block2 .i1').removeClass('animate-i-1');
            $('.block2 .i2').removeClass('animate-i-2');
        }
    });
    
    // block3
    tl1.add({
        targets: ".block3",
        opacity: 0,
        scale: 0.1,
        rotate: "-15deg",
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-3').fadeIn();
            $('.block3 .i1').addClass('animate-i-1');
            $('.block3 .i2').addClass('animate-i-2');
        }
    });
    tl1.add({
        targets: ".block3",
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1000,
        delay: anime.stagger(100),
        endDelay: 1000,
    });
    tl1.add({
        targets: ".block3",
        opacity: 0.0,
        scale: 0.8,
        rotate: 0,
        duration: 500,
        delay: anime.stagger(100),
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-3').fadeOut();
            $('.block3 .i1').removeClass('animate-i-1');
            $('.block3 .i2').removeClass('animate-i-2');
        }
    });
    
    // block4
    tl1.add({
        targets: ".block4",
        opacity: 0,
        scale: 0.1,
        rotate: "-15deg",
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-4').fadeIn();
            $('.block4 .i1').addClass('animate-i-1');
            $('.block4 .i2').addClass('animate-i-2');
        }
    });
    tl1.add({
        targets: ".block4",
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1000,
        delay: anime.stagger(100),
        endDelay: 1000,
    });
    tl1.add({
        targets: ".block4",
        opacity: 0.0,
        scale: 0.8,
        rotate: 0,
        duration: 500,
        delay: anime.stagger(100),
    });
    tl1.add({
        targets: "#sec3 .img",
        duration: 100,
        easing: 'easeInOutCirc',
        change: function() {
            $('#sec3 .img .bg').attr('class','bg animate-map-4').fadeOut();
            $('.block4 .i1').removeClass('animate-i-1');
            $('.block4 .i2').removeClass('animate-i-2');
        }
    });
});
    
// 섹션4 상하 롤링배너
var Carousel2 = new
function() {
    var timer = null;
    var start = function() {
        doCarousel();
    };
    var sliding_top = function() {
        var item_height = $('#top-rolling .item').outerHeight() + 20;
        var top_indent = parseInt($('#top-rolling').css('top')) - item_height;
        $('#top-rolling:not(:animated)').animate({
            'top': top_indent
        }, 4000, 'linear', function() {
           $('#top-rolling .item:last').after($('#top-rolling .item:first'));
            $('#top-rolling').css({
                'top': '0px'
            });
        });
    };
    
    var sliding_bottom = function() {
        var item_height = $('#bottom-rolling .item').outerHeight() + 20;
        var bottom_indent = parseInt($('#bottom-rolling').css('bottom')) - item_height;
        $('#bottom-rolling:not(:animated)').animate({
            'bottom': bottom_indent
        }, 4000, 'linear', function() {
           $('#bottom-rolling .item:first').before($('#bottom-rolling .item:last'));
            $('#bottom-rolling').css({
                'bottom': '200px'
            });
        });
    };

    var doCarousel = function() {
        timer = setInterval(sliding_top, 0);
        timer = setInterval(sliding_bottom, 0);
    };
    var pause = function() {
        clearInterval(timer);
        timer = null;
    };
    var resume = function() {
        doCarousel();
    };
    this.init = function() {
        start();
    };
    var i = 1;
    $('#top-rolling .item').each( function() {
        $(this).addClass( 's' + i );
        i = i + 1;
        if (i == 100) {
            return false;
        }
    });
    var i = 1;
    $('#bottom-rolling .item').each( function() {
        $(this).addClass( 's' + i );
        i = i + 1;
        if (i == 100) {
            return false;
        }
    });
}();
$(function() {
   	Carousel2.init();
});
    
// 섹션4 모바일 좌우 롤링배너
var Carousel_mo = new
function () {
    var timer = null;
    var start = function() {
        doCarousel();
    };
    var sliding_left = function() {
        var item_width = $('#left-rolling-mo .item').outerWidth() + 10;
        var left_indent = parseInt($('#left-rolling-mo').css('left')) - item_width;
        $('#left-rolling-mo:not(:animated)').animate({
            'left': left_indent
        }, 4000, 'linear', function() {
           $('#left-rolling-mo .item:last').after($('#left-rolling-mo .item:first'));
            $('#left-rolling-mo').css({
                'left': '-0px'
            });
        });
    };
    var sliding_right = function() {
        var item_width = $('#right-rolling-mo .item').outerWidth() + 10;
        var right_indent = parseInt($('#right-rolling-mo').css('left')) + item_width;
        $('#right-rolling-mo:not(:animated)').animate({
            'left': right_indent
        }, 4000, 'linear', function() {
           $('#right-rolling-mo .item:first').before($('#right-rolling-mo .item:last'));
            $('#right-rolling-mo').css({
                'left': '-330px'
            });
        });
    };
    var doCarousel = function() {
        timer = setInterval(sliding_left, 0);
        timer = setInterval(sliding_right, 0);
    };
    var pause = function() {
        clearInterval(timer);
        timer = null;
    };
    var resume = function() {
        doCarousel();
    };
    this.init = function() {
        start();
    };
}();
$(function() {
    Carousel_mo.init();
});
    
// 섹션5 이미지 모션
$(function() { 
    var background = $('.background');
    for (var i = 0; i <= 100; i++) {
      var blocks = $('.animate');
        $(blocks).addClass('block');
        $(background).append(blocks);
    }
    var animateBlocks = function() {
        anime({
            targets: '.block',
            translateX: function() {
                return anime.random(-900, 900);
            },
            translateY: function() {
                return anime.random(-400, 400);
            },
            //scale: function() {
            //  return anime.random(1, 2);
            //},
            duration: 2500,
            opacity: ['4', 0],
            scale: [0, 1.2],
            loop: true,
            easing: 'easeOutSine',
            delay: anime.stagger(500),
            complete: animateBlocks
        });
    };
    animateBlocks();
});

// 섹션5 이미지 페이드
$(function(){
    var cnt=0;
    var arr = ['img-sec5-1-4.png', 'img-sec5-1-3.png', 'img-sec5-1-2.png', 'img-sec5-1-1.png'];
    var imgrotater = setInterval(function() { 
        if (cnt==4) cnt=0;
        $('#sec5 .inner .img .si img.rota').css('opacity','0').attr('src','./img/banner/' + arr[cnt] + '').animate({opacity:1},300);
        cnt++;
    }, 1500);
    $('#sec5 .inner .img .si').append('<img src="./img/banner/img-sec5-1.png" class="fixe">');
});
            
//sec7 스크롤 효과
var noMore = false;
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var innerHeight = $(window).height();
    var scrollHeight = $(document).height();
    if (scrollTop + innerHeight >= scrollHeight) {
		$('#sec7 .inner .title-box').addClass('on');
        $('#sec7').append('<div class="bg"></div>');
        $('#sec7 .bg').fadeIn();
    } else {
        $('#sec7 .inner .title-box').removeClass('on');
        $('#sec7 .bg').remove();
    }
});
    
});

/* 리사이즈 */
$(function(){
    $(window).resize(function() {
        var width = $(window).width();
        if (width<=1400) {     
            $('#sec4 #top-rolling').attr('id','left-rolling-mo').css('top','auto');
            $('#sec4 #bottom-rolling').attr('id','right-rolling-mo').css('top','auto');
        } 
        if (width>=1401) {
            $('#sec4 #left-rolling-mo').attr('id','top-rolling').css('left','auto');
            $('#sec4 #right-rolling-mo').attr('id','bottom-rolling').css('left','auto');
        }
    });
    $(window).resize();
});
