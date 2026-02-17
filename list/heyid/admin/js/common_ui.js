$(function(){

    /* 패스워드 변경 팝업 */
	$(".password-change-btn").click(function(){
		$(".password-change-layer").fadeIn("fast");
	});
    /* 마이페이지 팝업 */
	$(".inquiry-btn").click(function(){
		$(".inquiry-layer").fadeIn("fast");
	});
    /* 기관관리자 삭제 팝업 */
	$(".agency-del-btn").click(function(){
		$(".agency-del-layer").fadeIn("fast");
	});
    /* 패스워드 재설정 팝업 */
	$(".password-edit-btn").click(function(){
		$(".password-edit-layer").fadeIn("fast");
	});
    /* 설문 삭제 팝업 */
	$(".survey-del-btn").click(function(){
		$(".survey-del-layer").fadeIn("fast");
	});
    /* 설문 저장 팝업 */
	$(".survey-save-btn").click(function(){
		$(".survey-edit-view-layer").fadeIn("fast");
	});
    /* 설문 수정 팝업 */
	$(".survey-edit-btn").click(function(){
		$(".survey-edit-layer").fadeIn("fast");
	});
    /* 설문 보기 팝업 */
	$(".survey-view").click(function(){
		$(".survey-layer").fadeIn("fast");
	});
    /* 설문 등록하기 팝업 */
	$(".survey-reg-btn").click(function(){
		$(".survey-reg-layer").fadeIn("fast");
	});
    /* 공지사항 수정 팝업 */
	$(".notice-edit-btn").click(function(){
		$(".notice-edit-layer").fadeIn("fast");
	});
    /* 공지사항 삭제 팝업 */
	$(".notice-del-btn").click(function(){
		$(".notice-del-layer").fadeIn("fast");
	});
    /* 공지사항 view 팝업 */
	$(".notice-view").click(function(){
		$(".notice-layer").fadeIn("fast");
	});
    /* 공지사항 등록 팝업 */
	$(".notice-reg-btn").click(function(){
		$(".notice-reg-layer").fadeIn("fast");
	});
    /* 신분증신고내역 팝업 */
	$(".dec-btn").click(function(){
		$(".declaration-layer").fadeIn("fast");
	});
    /* 출입실관리 팝업 */
	$(".ee-btn").click(function(){
		$(".ee-layer").fadeIn("fast");
	});
    /* 출입실삭제 팝업 */
	$(".ee-del-btn").click(function(){
		$(".ee-del-layer").fadeIn("fast");
	});
    /* 신분증정지해제 팝업 */
	$(".cancel-stop-btn").click(function(){
		$(".cancel-stop-layer").fadeIn("fast");
	});
    /* 신분증정지 팝업 */
	$(".stop-btn").click(function(){
		$(".stop-layer").fadeIn("fast");
	});
    /* 출입방문이력 팝업 */
	$(".visit-btn").click(function(){
		$(".visit-layer").fadeIn("fast");
	});
    /* 신분증폐기 팝업 */
	$(".dispose-btn").click(function(){
		$(".dispose-layer").fadeIn("fast");
	});
    /* 링크재전송 팝업 */
	$(".resend-btn").click(function(){
		$(".resend-layer").fadeIn("fast");
	});
    /* 신청승인 팝업 */
	$(".reject-btn").click(function(){
		$(".reject-layer").fadeIn("fast");
	});
    /* 신청승인 팝업 */
	$(".approval-btn").click(function(){
		$(".approval-layer").fadeIn("fast");
	});
    /* 처리이력 더보기 팝업 */
	$(".pro-btn").click(function(){
		$(".pro-history-layer").fadeIn("fast");
	});
	/* 팝업닫기 */
	$(".close-btn").click(function(){
		$(".layer-pop").fadeOut("fast");
	});

    /* 메인 탭링크 */
    $(function(){
        if (location.hash == "#all"){
            $('.tabs').find('li').eq(0).addClass('active').siblings().removeClass();
            $('.tab-content').find('#all').addClass('active').siblings().removeClass('active');
        } else if(location.hash == "#unuse"){
            $('.tabs').find('li').eq(1).addClass('active').siblings().removeClass();
            $('.tab-content').find('#unuse').addClass('active').siblings().removeClass('active');
        } else if(location.hash == "#inuse"){
            $('.tabs').find('li').eq(2).addClass('active').siblings().removeClass();
            $('.tab-content').find('#inuse').addClass('active').siblings().removeClass('active');
        } else if(location.hash == "#stop"){
            $('.tabs').find('li').eq(3).addClass('active').siblings().removeClass();
            $('.tab-content').find('#stop').addClass('active').siblings().removeClass('active');
        } else if(location.hash == "#dispose"){
            $('.tabs').find('li').eq(4).addClass('active').siblings().removeClass();
            $('.tab-content').find('#dispose').addClass('active').siblings().removeClass('active');
        }
    })

    /* 인풋박스 추가/삭제 */
    $(document).on("click", ".btnAdd", function() {                                       
        $('.buttons').append(                        
            '<span class="row"><input type="text" name="txt" class="answer-input"><button type="button" class="btnAdd" value="Add">더하기</button></span>'                    
        );
        $(this).parent('.row').find('button').hide();
        $('.btnRemove').on('click', function () { 
            $(this).parent('.row').remove();
            $(this).prev().prev().remove();
            $(this).prev().remove();
            $(this).remove();
            $(this).parent('.row').find('button').show();
        });
    });

    /* 출입실관리 버튼 */
    $('.ee-layer .con-box .list-box .list').click(function(){
        $('.ee-layer .con-box .list-box .list').removeClass('on');
        $(this).addClass('on');
    });
    var oldVal = $('.ee-input').val();
    $('.edit-btn').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $(this).text('저장');
            $(this).parent().find('.ee-del-btn').hide();
            $(this).parent().find('.cancel-btn').show();
            $(this).parent().parent().find('.ee-input').attr('readonly', false).addClass('on');
        } else {
            $(this).text('수정');
            $(this).parent().find('.ee-del-btn').show();
            $(this).parent().find('.cancel-btn').hide();
            $(this).parent().parent().find('.ee-input').attr('readonly', true).removeClass('on');
        }
    });
    $('.cancel-btn').click(function(){
        $(this).hide();
        $(this).parent().find('.ee-del-btn').show();
        $(this).parent().find('.edit-btn').text('수정').removeClass('on');
        $(this).parent().parent().find('.ee-input').attr('readonly', true).removeClass('on').val(oldVal);
    });

    //lnb
    $('.lnb > li > a').on('click',function(){
        var $parent = $(this).parent();
       
        if($parent.hasClass('active')){            
            $parent.removeClass('active').find('ul').slideUp();            
        }
        else {
            $parent.addClass('active').find('ul').slideDown();
            $parent.siblings('li').removeClass('active').find('ul').slideUp();            
        }
    });
    $('.lnb ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // autocomplete
    $(function() {
        var agency = [
            '복지생활국',
            '복지생활국 보육지원과',
        ];
        $('#agency').autocomplete({
            source: agency,
            focus: function (event, ui) {
              return false;
            },
            select: function (event, ui) {},
            minLength: 1,
            delay: 100,
            autoFocus: true,
        });

        var position = [
            '사원',
            '주임',
            '대리',
            '과장',
            '차장',
            '부장',
            '대표',
        ];
        $('#position').autocomplete({
            source: position,
            focus: function (event, ui) {
              return false;
            },
            select: function (event, ui) {},
            minLength: 1,
            delay: 100,
            autoFocus: true,
        });
    });

    // 인풋
    $(function() {        
        $('.tableWrap.type01 td input').focusout(function () {
            $(this).css('outline','');
        });
        $('.tableWrap.type01 td input').focus(function () {
            $(this).css('outline','1px solid #3B7DDD');
        });
    });

    //datepicker
    $(function() {
        //input을 datepicker로 선언
        $(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd' //Input Display Format 변경
            ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
            ,changeYear: true //콤보박스에서 년 선택 가능
            ,changeMonth: true //콤보박스에서 월 선택 가능                
            ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
            ,buttonImage: "./images/icon/icon-calendar-gray.png" //버튼 이미지 경로
            ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
            ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
            ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
            ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
            ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
            ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
            ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
            ,minDate: "-1Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            ,maxDate: "+1Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                
        });         

        //초기값을 오늘 날짜로 설정
        $('.datepicker1').datepicker('setDate', 'today'); 
        $('.datepicker2').datepicker('setDate', '+1M'); 
        //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
    });

    //스크롤
    $(window).on('load',function(){
        $(".yScroll").mCustomScrollbar();        
    }); 

    $(function(){
        function getTodayLabel() {
            var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
            var today = new Date().getDay();
            var todayLabel = week[today];
            return todayLabel;
        }
        var now = new Date();
        // $('.date-box .date span').text(now); //전체
        var year = now.getFullYear();//연도
        $('.date-box .date span.year').text(year); 
        var month = now.getMonth()+1;//월
        $('.date-box .date span.month').text(month);
        var date = now.getDate();//일
        $('.date-box .date span.date').text(date);
        $('.date-box .date span.day').text(getTodayLabel());
        var hr = now.getHours();//시간
        $('.date-box .date span.hour').text(hr);
        var min = now.getMinutes();//분
        $('.date-box .date span.minute').text(min);
        //var sec = now.getSeconds();//초
        //$('.date-box .date span').text(sec);
    });

    //메뉴버튼 토글
    $('.containerHeader .btnMenu').on('click',function(){
        $('#sideBar').toggleClass('close');
    });
    
    //header 검색
    $('.containerHeader .inputSearch').focusin(function(){
        $('.containerHeader .btnBack').show();
        $('.btnSearch').css('left','490px');
    }).focusout(function(){
        $('.containerHeader .btnBack').hide();
        $('.btnSearch').css('left','90px');
    });

    //tab
    $('.tabs li').eq(0).addClass('active');
    $('.tabCont').eq(0).addClass('active');
    $('.tabs li').click(function () {
        var i = $(this).index();
        $('.tabs li').removeClass('active').eq(i).addClass('active');
        $('.tabCont').removeClass('active').eq(i).addClass('active');
        $('.tabs li').hasClass('active',function () {
            $(this).show();
        });
    });  

    //tab2
    $(function(){
        var $tab = $('div.tab-menu ul li');
        $tab.eq(0).addClass('active');
        $('.tabContent').eq(0).addClass('active');
        $tab.click(function () {
            var i = $(this).index();
            $tab.removeClass('active').eq(i).addClass('active');
            $('.tabContent').removeClass('active').eq(i).addClass('active');
            $tab.hasClass('active',function () {
                $(this).show();
            });
        });
    });
    
    //테이블 검색
    $('.tableTitle .btnTableSearch').on('click',function(){
        $('.tableSearch').append('<button type="submit" class="spUtil btnTableSearch">검색</button>').fadeIn();
        $('.tabs, .tableSelect, .tableTitle .btnWrap').hide();        
    });   
    $('.tableSearch .btnBack').on('click',function(){
        $('.tableSearch').hide();
        $('.tabs, .tableSelect, .tableTitle .btnWrap').fadeIn();
    });   

    //필터 팝업
    $('.btnFilter').on('click',function(){
        $(this).addClass('active');
        $('.popFilter').show();
    });
    $('.popFilter .popClose, .popFilter .popClose2').on('click',function(){
        $('.btnFilter').removeClass('active');
        $('.popFilter').hide();
    });  

    //체크박스 전체 선택
    $('.btnCheckAll').on('click',function(){
        $('.table .check').prop('checked', this.checked);
    });

    //관리자 등록 팝업_포커스    
    // $('.btnPopup').click(function(){       
    //     $('#popRegistration').show();            
    //     $('.popLayer').attr('tabindex','0').focus(); //열린 레이어팝업 전체에 tabindex를 주고, 포커스를 준다.
    // });
    //사진 등록 팝업
    // $('.userPicBg .rectangle').click(function(){       
    //     $('#popPhoto').show();            
    //     $('.popLayer').attr('tabindex','0').focus(); //열린 레이어팝업 전체에 tabindex를 주고, 포커스를 준다.
    // });
    //팝업 닫기
    // $('.popClose, .btnCancel').click(function(){
    //     var $focus=$(this);//누른버튼 (닫을때 쓰인다)
    //     $('.popLayer').hide();
    //     $focus.focus();//레이어팝업이 시작된 버튼에서 다시 포커스가 시작되게 이동한다.
    // });
    
    //관리자 등록 팝업_load 
    $('.btnPopup').on('click', function(){ 
        $('#popup').load('/popup/pop_registration.html');
    });
    $('.userPicBg button').on('click', function(){ 
        $('#popup').load('/popup/pop_photo.html');
    });
    $(document).on('click', '.popClose, .btnCancel', function(){
        $('#popup').empty();       
    });      
});

/* 리사이즈 */
// $(function(){
//     $(window).resize(function() {
//         var width = $(window).width();
//         if (width<=1869) {     
//             $('#sideBar').addClass('close');
//         } 
//         if (width>=1870) {
//             $('#sideBar').removeClass('close');
//         }
//     });
//     $(window).resize();
// });
