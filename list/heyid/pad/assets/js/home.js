window.path = '../pad';

$(function($){

	// Main visual 노출
	var sceenSetting = {
		$element : {
			container : $('div.container'),
			stage : $('div.stage'),
			intro : $('div.intro'),
			besides : $('div.besides'),
			toast : $('div.toast-container'),
			otp_pop : $('.otp-layer')
		},
		password: '',
		swiper : null,
		current : 'barcode',
		sequenceTimer : null,
		sequenceCount : 0,
		timing : true,		// 유저가 선택한 방식 animation complete check
		items : {
			intro : {type:'intro', path: window.path + '/step/intro.html'},
			barcode : {type:'barcode', path: window.path + '/intro/barcode.html'},
			nfc : {type:'nfc', path: window.path + '/intro/nfc.html'},
			qr : {type:'qr', path: window.path + '/intro/qr.html'},
			direct : {type:'direct', path: window.path + '/intro/direct.html'}
		},
		isSuccess : false,
		restoreTimer : null,
		init : function(){
			var _this = this;

			// 첫 화면 설정
			this.intro();
			
			/* Event bind */
			// 로그인 방식 선택 배너
			this.$element.besides.find('.swiper-slide').on('click', function(){
				var type = $(this).data('cssName');
				_this.request(_this.items[type]);
			});

			// 팝업 닫기
			this.$element.toast.find('button.confirm').on('click', function(){
				_this.$element.toast.fadeOut();
			});
			// this.$element.otp_pop.find('button.close-btn').on('click', function(){
			// 	_this.$element.otp_pop.fadeOut();
			// });
		},
		intro : function(){
			var _this = this;

			$.get(this.items.intro.path).then(function(res){
				_this.$element.intro.html(res);

				// Event bind
				_this.$element.intro.find('ul.login-type li').on('click', function(){
					_this.request(_this.items[$(this).attr('class')]);
				});
			})
		},
		request : function(data){
			var _this = this;

			this.reset(); 				// timer clear, count, password 초기화
			this.current = data.type; 	// 현재 타입 저장

			$.get(data.path).then(function(res){
				// 처음 한번만
				if(_this.$element.intro.length){
					// 첫 화면 fadeOut 후에 삭제
					_this.$element.intro.fadeOut(function(){
						$(this).remove();
						_this.$element.stage.fadeIn();
						_this.swap(res, data.type);
					});
				}else{
				// 로그인 방식 변경시
					_this.swap(res, data.type);
				}
			});
		},

		// 해당 방식으로 화면 변경
		swap : function(html, type){
			var _this = this;
			var $way;


			if(this.timing){

				// 유저가 확인버튼을 눌렀거나 방식변경을 했다면 setTimeout 해제
				if(this.restoreTimer){
					clearTimeout(this.restoreTimer);
				}

				// 기존에 html이 있다면 비우고 선택된 html 적용
				this.$element.container.empty().append(html);
				_this.move(); // animation 시작
	
				$way = this.$element.container.find('.way');
				$way.removeClass().addClass('way ' + type);

				
				// 직접입력 방식이라면 키패드 이벤트 bind
				if(type === 'direct'){
					this.insertNumber();
				}else{
					// progress bar 노출
					this.sequenceTimer = setInterval(function(){
						_this.sequence();
					}, 50);

					// 바코드 형식은 scanner event bind
					if(type === 'barcode'){
						this.scanner();
					}
				}

				// 선택된 방식 외에 다른 방식의 배너 순서 update
				this.banner();
			}
		},
		sequence: function(){
			var count = this.sequenceCount < 10 ? '0' + this.sequenceCount : this.sequenceCount;
			var $sequence = this.$element.container.find('.sequence');
		
			var src = window.path + './images/home/'+ this.current +'/sequence/'+ this.current +'_000'+ count +'.png';
			$sequence.find('img').attr('src', src);
			if(this.sequenceCount >= 47){
				this.sequenceCount = 0;
			}else{
				this.sequenceCount++;
			}
		},

		// barcode only
		scanner: function(){
			var _this = this;
			$('#user-barcode-scanner').focus();
			$('#user-barcode-scanner').on('keypress', function(e){
				//e.key = 'enter'; // test
				if(e.key.toLowerCase() === 'enter'){
					_this.result(true);
				}
			})//.trigger('keypress'); // test
		},

		// direct only
		insertNumber : function(){
			// otp 확인방법 팝업 
			$('.otp-btn').click(function(){
				$('.otp-layer').fadeIn();
			});
			$('.close-btn').click(function(){
				$('.layer-pop').fadeOut();
			});

			$('.otp-layer .con-box .txt-sec .list').each(function(index){
				$(this).attr('class', 'list list' + index);
				$('.otp-layer .con-box .txt-sec .list0').addClass('on');
			});

			$('.otp-layer .con-box .txt-sec .list').click(function(){
				$('.otp-layer .con-box .txt-sec .list').removeClass('on');
				$(this).addClass('on');

				if($('.otp-layer .con-box .txt-sec .list0').hasClass('on')){
					swiper_otp.slideTo(0);
					return;
				}
				if($('.otp-layer .con-box .txt-sec .list1').hasClass('on')){
					swiper_otp.slideTo(1);
					return;
				}
				if($('.otp-layer .con-box .txt-sec .list2').hasClass('on')){
					swiper_otp.slideTo(2);
					return;
				}
			});

			var _this = this; 
			_this.password = ['0','0','0','0','0','0'];
			_this.passwordNumber = []; 
			_this.cnt = 0; 
			_this.compChk = false; 
			_this.dots = document.querySelectorAll('.pwSection .dot');
			_this.numbers = document.querySelectorAll('.numberSection .number');

			// 숫자버튼 click이벤트 연동
			_this.handleListener = function(){
				if(!_this.compChk) {
					_this.numbers.forEach(function(number){
						number.addEventListener('click', function(){_this.handleNumber(number)});
					})
				}
			}
			// 숫자키를 눌렀을때 이벤트 
			_this.handleNumber = function(number){
				if(!_this.compChk) {
					_this.passwordNumber[_this.cnt] = number.textContent;
					_this.handleDotActive(true);
					_this.cnt++;
					if(_this.cnt === 6) {
						//_this.handleResult();
						_this.compChk = true;
						_this.cnt;
					}
				}
				console.log(_this.password, _this.passwordNumber)
			}
			// dot 활성화 
			_this.handleDotActive = function(type){
				if(type) {
					$(_this.dots).each(function () {
						var a = $(this).text();
						if (!a) {
							$(this).text(_this.passwordNumber[_this.cnt]);
							$(this).addClass('active');
							return false;
						}
					})
				} else {
					$($(_this.dots).get().reverse()).each(function(){
						var a = $(this).text();
						if (a) {
							$(this).text("");
							$(this).removeClass('active');
							return false;
						}
					})
				}
			}
			// 비밀번호 비교
			_this.handleCheckPw = function(){
				var compare = JSON.stringify(_this.password) === JSON.stringify(_this.passwordNumber);
				return compare; 
			}
			// 결과처리 
			_this.handleResult = function(){
				if(_this.handleCheckPw()) {
					_this.result(true);

					// 입력상태 초기화 
					_this.passwordNumber = [];
					_this.cnt = 0; 
					_this.compChk = true; // 일시적인 클릭 방지 
					setTimeout(function(){
						_this.compChk = false;
						_this.handleDotActive();
						$(_this.dots).text('').removeClass('active');
					}, 1000);
				} else {
					_this.result(false);

					// 입력상태 초기화 
					_this.passwordNumber = [];
					_this.cnt = 0; 
					_this.compChk = true; // 일시적인 클릭 방지 
					setTimeout(function(){
						_this.compChk = false;
						_this.handleDotActive();
						$(_this.dots).text('').removeClass('active');
					}, 1000);
				}
			}
			_this.init = function(){
				_this.handleListener();
			}();
			// 삭제버튼
			$('.del-btn').click(function(){
				_this.handleDotActive(false);
				_this.compChk = false;
				if(_this.cnt > 0) {
					_this.cnt--;
				} else {
					_this.cnt;
				}
			});
			// 초기화버튼
			$('.reset-btn').click(function(){
				_this.handleDotActive();
				$(_this.dots).text('').removeClass('active');
				_this.compChk = false;
				_this.passwordNumber = [];
				_this.cnt = 0;
			});	
			// 확인버튼
			$('.con-btn').click(function(){
				_this.handleResult();
			});	
			// 버튼효과
			$('.numberSection button').click(function(){
				$(this).addClass('on');
				setTimeout(function(){
					$('.numberSection button').removeClass('on');
				}, 200);
			});	
		},
		banner : function(){
			var _this = this;
			this.$element.besides.find('.swiper-slide').each(function(){
				var cssName = $(this).attr('class');
				if(cssName.indexOf(_this.current) > -1){
					$(this).hide();
				}else{
					$(this).show();
				}
			});
			this.swiper = new Swiper('.swiper-container',  {
				slidesPerView: 3,
				spaceBetween: 16,
				allowTouchMove: false
			});
		},
		reset : function(){
			if(this.sequenceTimer){
				clearInterval(this.sequenceTimer);
			}
			this.password = '';
			this.sequenceCount = 0;
		},
		move: function(){
			var _this = this;
			var $primary = this.$element.container.find('div.primary');
			var option = {
				left:0,
				top:0,
				opacity:1,
				//width:1800,
				scale: 1,
				ease: Power1.easeOut,
				ease:  Expo.easeOut,
				onComplete:function(){
					_this.timing = true;
				}
			};

			this.timing = false;

			// 초기화
			$primary.css({opacity:0})
			gsap.to(this.$element.container, 0, {css:{left:1282, width:162, opacity:0, scale:0}}); 

			// 새로운 방식 노출
			gsap.to(this.$element.container, 1.5, option);
			gsap.to($primary, 1.5, {css:{opacity:1}}).delay(1);
			
		},
		result : function(is){
			var _this = this;
			var $primary = this.$element.container.find('.primary');
			var url = window.path + '/step/success.html';
			// 인증성공시
			if(is){
				if(!$primary.has('.result-state').length){
				// ajax호출은 한번만
					$.get(url).then(function(res){
						$primary.append(res).addClass('result');
						_this.isSuccess = true;
						_this.success();

						// 인증성공 페이지에 확인 버튼 Event bind
						$primary.find('.result-state input[type=submit]').on('click', function(){
							$primary.removeClass('result').addClass('restore');
							clearTimeout(_this.restoreTimer); // 유저가 확인버튼을 눌렀거나 방식변경을 했다면 setTimeout 해제
							_this.success();
						});
					});
				}else{
					$primary.removeClass('restore').addClass('result');
					this.isSuccess = true;
					this.success();
				}
			}else{
			// 비밀번호 오류시
				this.$element.toast.fadeIn();
			}
		},
		success : function(){
			var _this = this;
			var $primary = this.$element.container.find('.primary');
			var $to, $from, $field;

			if($primary.hasClass('result')){
				$to = $primary.find('.result-state');
				$from = $primary.has('.progress').length ? $primary.find('.progress') : $primary.find('.user-direct');
			}else{
				$to = $primary.has('.progress').length ? $primary.find('.progress') : $primary.find('.user-direct');
				$from = $primary.find('.result-state');
			}

			// 현재 보이는 화면 숨김
			$to.css({top:'165px'}).show();
			gsap.to($to, 0.5, {css:{top:0, opacity:1}});

			// 새로 보여지는 화면 노출 - 바코드(로딩화면), 직접입력 키패드, 결과화면 등등
			gsap.to($from, 0.3, {
				css:{top:-50, opacity:0}, 
				onComplete:function(){
					$from.hide().css({top:'165px'});
				}
			});

			
			if(this.current === 'direct' && $to.get(0).classList.contains('user-direct')){
			// 다시 입력창으로 돌아왔다면 저장된 비밀번호 초기화
				$field = $to.find('.field input'),
				$field.removeClass().val('');
				// this.password = '';
			}else if(this.current === 'barcode'){
				$('#user-barcode-scanner').focus();
			}
			if(this.isSuccess){
				this.isSuccess = false;
				this.restoreTimer = setTimeout(function(){
					$primary.removeClass('result').addClass('restore');
					_this.success();
				}, 5000);
			}

		}

	}

	// 현재 시각 노출
	var todayData = {
		$element : {
			day : $('div.day'),
			time : $('div.time')
		},
		option : {
			blank : 40,	// layout 상하단 여백 
		},
		init : function(){
			var _this = this;

			this.timer();
			setInterval(function(){
				_this.timer();
			}, 1000);
		},
		timer : function(){
			var today = new Date();
			var day = today.dateFormater('yyyyMMdd', ' - '); // Date.prototype  import /assets/js/common.js;
			var hhmm = today.dateFormater('hhmm', ' : ');

			// reflow 최소로
			if(hhmm !== this.$element.time.text()){
				this.$element.time.text(hhmm);
			}
			if(day !== this.$element.day.text()){
				this.$element.day.text(day);
			}
		}
	}
	sceenSetting.init();
	todayData.init();

});