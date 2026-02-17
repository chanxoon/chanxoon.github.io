$(function(){
	// input focus background toggle
	$('input[type=text], input[type=password]').on({
		'focus' : function(){
			$(this).addClass('in');
		},
		'focusout' : function(){
			if($(this).val().trim() === ''){
				$(this).val('');
				$(this).removeClass('in');	
			}
		}
	});

	// 링크이동
	$('input[type=submit]').on('click', function(){
		location.href = './index.html';
	});

	/* 출입실 팝업 */
	$(".entry-btn").click(function(){
		$(".entry-layer").fadeIn("fast");
	});
	/* 출입실 변경 팝업 */
	$(".entry-btn").click(function(){
		$(".entry-layer").fadeIn("fast");
	});
	/* 비밀번호 확인 팝업 */
	$(".pw-btn").click(function(){
		$(".pw-layer").fadeIn("fast");
	});
	/* 팝업닫기 */
	$(".close-btn").click(function(){
		$(".layer-pop").fadeOut("fast");
	});
	$(".close-btn-entry").click(function(){
		location.href='./index.html';
	});
	// 출입실 선택
	$('.entry-layer .con-box .radio-box label').click(function(){
		$('.entry-layer .con-box .radio-box label').removeClass('on');
		$(this).addClass('on');
	});
});

/* nav */
$(function(){
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
		lnbUI.click('.menu li', 300);
	});
});

//  flex layout이 지원이 안되는 브라우저는  legacy.css로 따로 처리함.
if(!(cssPropertySupported('display', 'flex'))){
	var $header = document.getElementsByTagName('head')[0];
	var $link = document.createElement('link');
	var href = './assets/stylesheet/legacy.css';
	$link.setAttribute('rel', 'stylesheet');
	$link.setAttribute('href', href);
	$header.appendChild($link);
}


// 날짜 포맷 변환
Date.prototype.dateFormater = function(type, symbol){
	var date = this;
	var week = ['일', '월', '화', '수', '목', '금', '토'];
	var str = '', 
		ampm;

	symbol = symbol ? symbol : '.';

	if(type === 'Md'){
	// output - M.d
		str += (date.getMonth() + 1) + '-';
		str += date.getDate();
	}else if(type === 'MdKo'){
	// output - M월 d일
		str += (date.getMonth() + 1) + '월 ';
		str += date.getDate() + '일';
	}else if(type === 'MdWeek') {
	// output - M월 d일 week
		str += (date.getMonth() + 1) + '월 ';
		str += date.getDate() + '일 ';
		str += week[date.getDay()];
	}else if(type === 'week'){
	// output - week
		str += week[date.getDay()];
	}else if(type === 'weekKo'){
	// output - week요일
		str += week[date.getDay()] + '요일';
	}else if(type === 'yyyyMMdd'){
	// output - yyyy.MM.dd
		str += date.getFullYear() + symbol;
		str += (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + symbol : (date.getMonth() + 1) + symbol;
		str += (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate());
	}else if(type === 'ampm') {
	// output - 시간대
		var hours = date.getHours();
		if(6 <= hours && hours <= 11){
			ampm = '오전';
		}else if(12 <= hours && hours <= 17){
			ampm = '오후';
		}else if(18 <= hours && hours <= 23){
			ampm = '저녁';
		}else{
			ampm = '새벽';
		}
		str += ampm;
	}else if(type === 'hhmm'){
		// default는 12시간제
		var hours = date.getHours() < 10 ? ('0' + date.getHours()) : (date.getHours() > 12) ? '0' + (date.getHours() - 12) : date.getHours();
			minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
		str += hours + symbol + minute
	}else{
	// output - yyyy.MM.dd(week)
		str += date.getFullYear() + symbol;
		str += (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + char : (date.getMonth() + 1) + symbol;
		str += (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate());
		str += '(' + week[date.getDay()] + ')';
	}
	return str;
}

// css flex property를 지원하는지 체크
function cssPropertySupported(prop, value) {
	var d = document.createElement('div');
	d.style[prop] = value;
	return d.style[prop] === value;
}