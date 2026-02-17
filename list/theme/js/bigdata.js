$(document).ready(function() {

    //개체명 팝업
    var btnObject= $('.bigdata .left-cont .btn-object'),
    filterCont=$('.bigdata .left-cont .local-tales .object-dim'),
    btnPopClose=$('.bigdata .left-cont .local-tales .btn-pop-close');  

    btnObject.click(function(){       
        filterCont.show();        
    });   
    btnPopClose.click(function(){    
        filterCont.hide();
    });  

    //워드 클라우드
    var btnCloud= $('.bigdata .word-cloud .btn-toggle-cloud');
    btnCloud.click(function(){    
        $(this).toggleClass('active');
        $('.word-cloud').toggleClass('active');   
        if($(this).text() == '워드 클라우드 열기'){
            $(this).text('워드 클라우드 닫기');
        } else {
            $(this).text('워드 클라우드 열기');
        }
    }); 

    listSwipe();
    moreToggle();

    $(window).resize(function() {
        listSwipe();
        moreToggle();
    });
});

function listSwipe() {
    if($(window).width() <= 768) {
    	$('.list-article .list-wrap').addClass('swiper-container');
    	$('.list-article .list-wrap .list').addClass('swiper-wrapper');
        $('.list-article .list-wrap .list li').addClass('swiper-slide');
        
        //모바일 리스트 swipe
        mobileListArticleSwiper = new Swiper('.list-article .swiper-container', {       
            freeMode: true,
            slidesPerView : 'auto',
            spaceBetween: 10,
            centeredSlides: true        
        }); 
    } else{
        $('.list-article .list-wrap').removeClass('swiper-container');
        $('.list-article .list-wrap .list').removeClass('swiper-wrapper');
        $('.list-article .list-wrap .list li').removeClass('swiper-slide');  
        mobileListArticleSwiper = new Swiper('.list-article .swiper-container', {  
            mode: 'vertical', 
        });   
    }
}

function moreToggle() {
    $('.btn-list-toggle').on('click', function( e ) {
        e.preventDefault();
        if($(this).hasClass('close-list')) {          
            $('.right-cont').removeClass('active');
            $('.list-article').removeClass('yScroll');
            $(this).removeClass('close-list');
            $(this).addClass('open-list');
            $(this).text('이야기 자료 열기');  
            $('.list-article .list-wrap').addClass('swiper-container');
            $('.list-article .list-wrap .list').addClass('swiper-wrapper');
            $('.list-article .list-wrap .list li').addClass('swiper-slide');
        } else {         
            $('.right-cont').addClass('active');   
            $('.list-article').addClass('yScroll');
            $(this).removeClass('open-list');
            $(this).addClass('close-list');
            $(this).text('이야기 자료 접기');
            $('.list-article .list-wrap').removeClass('swiper-container');
            $('.list-article .list-wrap .list').removeClass('swiper-wrapper');
            $('.list-article .list-wrap .list li').removeClass('swiper-slide');  
            mobileListArticleSwiper = new Swiper('.list-article .swiper-container', {  
                mode: 'vertical', 
            }); 
        }
    });   
}

// function filterToggle() {
//     var btnObject= $('.bigdata .left-cont .btn-object'),
//         filterCont=$('.bigdata .left-cont .local-tales'),
//         btnPopClose=$('.bigdata .left-cont .local-tales .btn-pop-close');  

//     btnObject.click(function(){       
//         filterCont.show();       
//     });   
//     btnPopClose.click(function(){    
//         filterCont.hide();
//     });   
// }

// function cloudToggle() {
//     var btnCloud= $('.bigdata .word-cloud .btn-toggle-cloud');

//     btnCloud.click(function(){    
//         $(this).toggleClass('active');
//         $('.word-cloud').toggleClass('active');   
//     }); 
    
// }




// $(document).ready(function() {
// 	//listScrollWrap();
//     moreToggle();
//     // typeOnOffToggle();
//     gnbMenuMotion();
//     userSetPop();
//     //serchTypeChange(); 내부에서 사용으로 주석처리합니다.
//     originPlace();
    
//     // 모바일 메뉴 닫기 
//     $(document).on('click', '.btn-hidemenu-close', function () {
//         $('#wrap').removeClass('open-menu');
//     });

//     // 모바일 지도 검색
//     $(document).on('click', '.hide-btn-wrap .btn-search', function() {
//         $('.search-wrap').fadeIn();
//     });

//     // 모바일 지도 검색 닫기
//     $(document).on('click', '.btn-m-search-close', function (e) {
//     	e.preventDefault(); // 닫기시 액션이 취해져서 추가했음.
//         $('.search-wrap').fadeOut();
//     });

//     // 모바일 인포정보 열고 닫기 
//     $(document).on('click', '.info-here', function () {
//         $(this).toggleClass('open');
//     });

//     // 모바일 타입필터 열기 
//     $(document).on('click', '.btn-pin-list-view', function () {
//         $('.pin-list').fadeIn();
//         $('body').addClass('dimd');
//     });

//     // 모바일 타입필터 닫기 
//     $(document).on('click', '.pin-list .btn-close', function () {
//         $('.pin-list').fadeOut();
//         $('body').removeClass('dimd');
//     });


// });


// //사용자설정 팝업
// function userSetPop() {
//     //닫기버튼 클릭
//     $('.pop-user-set .btn-close-pop').on('click', function () {
//         $(this).parents('.popup').fadeOut();
//     });

//     //팝업 열기
//     $('.btn-user-set').on('click', function () {
//         $('.pop-user-set').fadeIn();
//     });
// }

// var mobileListArticleSwiper;

// // list scroll
// function listScrollWrap() {

//     listHeight();

//     $(window).resize(function() {
//         listHeight();
//     });
    
//     // 스크롤 영역 높이
//     function listHeight() {
//         $('.list-article .scroll-wrap').height($(window).height() - $('.top-head').height() - 80);
//     }
    
    
//     if($(window).width() <= 768) {
//     	$(".list-article .scroll-wrap").mCustomScrollbar("destroy");
//     	$('#wrap').addClass('small-wrap');
//     	$('.list-article .scroll-wrap').addClass('swiper-container');
//     	$('.list-article .scroll-wrap .list').addClass('swiper-wrapper');
//     	$('.list-article .scroll-wrap .list li').addClass('swiper-slide');
    	
//         //모바일 리스트 스크롤
//     	mobileListArticleSwiper = new Swiper('.list-article .swiper-container', {
//             freeMode: true,
//         	slidesPerView : 'auto',
//             spaceBetween: 10,
//             centeredSlides: true
//         });
        
//     } else {    	
//     	$(".list-article .scroll-wrap").mCustomScrollbar({
//     		theme: "dark"
//     	});
// 	}
// }

// // list open close
// function moreToggle() {
//     $('.btn-list-toggle').on('click', function( e ) {
//     	e.preventDefault();
//         if($(this).hasClass('open-list')) {
        	
//             $('#wrap').addClass('more-wrap');
//             $('#wrap').removeClass('small-wrap');
//             $(this).removeClass('open-list');
//             $(this).addClass('close-list');
//             $(this).text('접기');
            
//             if($(window).width() <= 768) {
//             	mobileListArticleSwiper.destroy();
//             	$('.list-article .scroll-wrap').removeClass('swiper-container');
//             	$('.list-article .scroll-wrap .list').removeClass('swiper-wrapper');
//             	$('.list-article .scroll-wrap .list li').removeClass('swiper-slide');
//             	$('.list-article .scroll-wrap').height($(window).height() - $('.top-head').height() - 80);
//             }
            
//         } else {
//             $('#wrap').removeClass('more-wrap');
//             $('#wrap').addClass('small-wrap');
//             $(this).removeClass('close-list');
//             $(this).addClass('open-list');
//             $(this).text('더보기');
            
//             if($(window).width() <= 768) {
//             	$(".list-article .scroll-wrap").mCustomScrollbar("destroy");
//             	$('#wrap').addClass('small-wrap');
//             	$('.list-article .scroll-wrap').addClass('swiper-container');
//             	$('.list-article .scroll-wrap .list').addClass('swiper-wrapper');
//             	$('.list-article .scroll-wrap .list li').addClass('swiper-slide');
//             	 //모바일 리스트 스크롤
//             	mobileListArticleSwiper = new Swiper('.swiper-container', {
//                     freeMode: true,
//                 	slidesPerView : 'auto',
//                     spaceBetween: 10,
//                     centeredSlides: true
//                 });
//             }
            
//         }
        
//         if (typeof(shaveEllipseMyPage) === 'function') {
// 			setTimeout(function() {
// 				shaveEllipseMyPage(); // 말줄임표
// 			}, 500);
//         }
        
//     });
    
    
// }


// // 유형 버튼 on/off
// function typeOnOffToggle() {
//     $('.pin-list .icon-pin').on('click', function() {
//         if (!$(this).hasClass('off')) {
//             $(this).addClass('off');
//         } else {
//             $(this).removeClass('off');
//         }
//     });
// }


// // menu open close
// function gnbMenuMotion() {

//     // menu button click
//     $('.btn-menu').on('click', function () {
//         if ($(window).width() <= 768) {
//             $('#wrap').addClass('open-menu');
//         } else {

//             if ($(this).hasClass('open')) {
//                 $(this).removeClass('open');
//                 $(this).addClass('close');
//                 $('#wrap').addClass('open-menu');
//             } else {
//                 $(this).removeClass('close');
//                 $(this).addClass('open');
//                 $('#wrap').removeClass('open-menu');
                
//             }
//         }
        
//     });

//     // menu auto height
//     $('.menu .scroll-wrap').height($(window).height() - 67);
    
//     if ($(window).height() <= 847) {
//         if ($(window).width() <= 768) {

//             $('.menu .scroll-inner').height(560);
//         } else {
            
//             $('.menu .scroll-inner').height(780);
//         }
//     } else {
//         $('.menu .scroll-inner').height($(window).height() - 67);
//     }

//     $(window).resize(function() {
//         $('.menu .scroll-wrap').height($(window).height() - 67);
//         if ($(window).height() <= 847) {
//             if ($(window).width() <= 768) {

//                 $('.menu .scroll-inner').height(560);
//             } else {

//                 $('.menu .scroll-inner').height(780);
//             }
//         } else {
//             $('.menu .scroll-inner').height($(window).height() - 67);
//         }
//     });

//     $(".menu .scroll-wrap").mCustomScrollbar({
//         theme: "dark"
//     });

// }


// // 지도 검색 선택
// function serchTypeChange() {
//     $(document).on('change', '.search-type-select', function () {
//         var thisVal =  $(this).val(); 
//         console.log(thisVal)
//         if (thisVal == '콘텐츠') {
//             $(this).parents('.search-box-inner').addClass('contents');
//             $(this).parents('.search-box-inner').removeClass('local');
//         } else if (thisVal == '지역') {
//             $(this).parents('.search-box-inner').removeClass('contents');
//             $(this).parents('.search-box-inner').addClass('local');
//         }
//     });
// }

// // 모바일 지도 콘텐츠 목록 슬라이드 함수 
// function mobileListMoveSilde(idx) {
// 	var pinIdx = (idx!=null)?idx:0; // 선택한 핀과 일치하는 슬라이드의 인덱스 값 
// 	if ($(window).width() <= 768) {
// 		var moveSpeed = 500 //해당 슬라이드로 이동하는 시간 
// 		mobileListArticleSwiper.slideTo(pinIdx,moveSpeed);
// 	}
// }

// //지명유래
// function originPlace() {
// 	var $cityDtail=$('.origin-place .list-article'),
// 		   $cityList=$('.city-list li'),
// 	       $btnClose=$('.city-detail-wrap .btn-detail-close');	
	
// 	$cityList.click(function(){
// 		$(this).addClass('active').siblings('li').removeClass('active');		
// 		if($(this).hasClass('active')){
// 			$cityDtail.show();
// 		}
// 	});
	
// 	$btnClose.click(function(){
// 		$cityDtail.hide();
// 	})
	
// }















