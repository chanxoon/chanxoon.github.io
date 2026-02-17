/* gnb 이벤트 */

/* 상단 메뉴 Fixed */
$( window ).scroll(function() {
	var TopVal = $( window ).scrollTop();
	var TopFixed1 = 300;
	var TopFixed2 = 303;
	if( TopFixed1 <= TopVal){
		$("#gnb").removeClass("ScrollC_OFF");
		$("#gnb").addClass("ScrollC_ON");
	}else{
		$("#gnb").removeClass("ScrollC_ON");
		$("#gnb").addClass("ScrollC_OFF");
	}
});


/* POPUP ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {

	var embed = $('.cont').html(); //동영상 코드
	var opacity = $(".all_bg");

	var btn = $("#popbtn");
	var con = $(".Con");
	var close = $(".Con #Close");

	var btn_space = $("#popbtn_space");
	var con_space = $(".Con_space");
	var close_space = $(".Con_space #Close_space");

	var btn_tech = $("#popbtn_tech");
	var con_tech = $(".Con_tech");
	var close_tech = $(".Con_tech #Close_tech");

	var btn_draw = $(".popbtn_draw");
	var con_draw = $(".Con_draw");
	var close_draw = $(".Con_draw #Close_draw");

	var btn_success = $(".popbtn_success");
	var con_success = $(".Con_success");
	var close_success = $(".Con_success #Close_success");

	var btn_mgnb = $(".popbtn_mgnb");
	var con_mgnb = $(".Con_mgnb");
	var close_mgnb = $(".Con_mgnb #Close_mgnb");

	$('.cont').empty();

	//동영상 팝업
	$(btn).on("click", function () {
		if ($(con).addClass("Dblock")) {
			$(opacity).addClass("Dblock");
			$('.cont').html(embed);
		}
	});

	$(close).on("click", function () {
		$(con).removeClass("Dblock");
		$(opacity).removeClass("Dblock");
		$('.cont').empty();
	});

	$(".all_bg").click(function () {
		$(con).removeClass("Dblock");
		$(opacity).removeClass("Dblock");
		$('.cont').empty();
	});

	//SPACE 팝업
	$(btn_space).on("click", function () {
		if ($(con_space).addClass("Opblock")) {
			$(opacity).addClass("Dblock");
		}
	});

	$(close_space).on("click", function () {
		$(con_space).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	$(".all_bg").click(function () {
		$(con_space).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	//TECH 팝업
	$(btn_tech).on("click", function () {
		if ($(con_tech).addClass("Opblock")) {
			$(opacity).addClass("Dblock");
		}
	});

	$(close_tech).on("click", function () {
		$(con_tech).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').removeClass('fade_b01');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').removeClass('fade_b02');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').removeClass('fade_b03');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').removeClass('fade_b04');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').removeClass('fade_b05');
	});

	$(".all_bg").click(function () {
		$(con_tech).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').removeClass('fade_b01');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').removeClass('fade_b02');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').removeClass('fade_b03');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').removeClass('fade_b04');
		$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').removeClass('fade_b05');
	});

	//도면보기 팝업
	$(btn_draw).on("click", function () {
		$(con_draw).addClass("Opblock");
		$(opacity).addClass("Dblock");
	});

	$(close_draw).on("click", function () {
		$(con_draw).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	$(".all_bg").click(function () {
		$(con_draw).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	//제출완료
	$(btn_success).on("click", function () {
		fregisFormSubmit(fregisForm);
//		if ($(con_success).addClass("Opblock")) {
//			$(opacity).addClass("Dblock");
//		}
	});

	$(close_success).on("click", function () {
		$(con_success).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	$(".all_bg").click(function () {
		$(con_success).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	//모바일gnb
if (document.body.clientWidth < 870) {
	$(btn_mgnb).on("click", function () {
		if ($(con_mgnb).addClass("Opblock")) {
			$(opacity).addClass("Dblock");
		}
	});

	$(close_mgnb).on("click", function () {
		$(con_mgnb).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});

	$(".all_bg").click(function () {
		$(con_mgnb).removeClass("Opblock");
		$(opacity).removeClass("Dblock");
	});
}

})
/* POPUP end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
$(document).ready(function () {
	var conList_all = $('#fullpage .section');

	$(conList_all).on('mousewheel DOMMouseScroll', function(e) {
		if ($(conList_all).hasClass('active') == true) {
			$("#gnb").addClass("ScrollC_ON");
			$("#gnb").removeClass("ScrollC_OFF");
		} else {
			$("#gnb").removeClass("ScrollC_ON");
			$("#gnb").addClass("ScrollC_OFF");
		}
	});
})

$(document).ready(function () {
	var conList_s1 = $('#fullpage #section1');

	$(conList_s1).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 > 0){
		if ($(conList_s1).hasClass('active') == false) {
			$("#gnb").addClass("ScrollC_ON");
			$("#gnb").removeClass("ScrollC_OFF");
			alert("yes");
		} else {
			$("#gnb").removeClass("ScrollC_ON");
			$("#gnb").addClass("ScrollC_OFF");
			alert("no");
		}
	}
	});
})



$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var next_btn = $('#menu li a');

	$(next_btn).click(function () {
		if ($(conList_all).hasClass('active') == true) {
			$("#gnb").addClass("ScrollC_ON");
			$("#gnb").removeClass("ScrollC_OFF");
		} else {
			$("#gnb").removeClass("ScrollC_ON");
			$("#gnb").addClass("ScrollC_OFF");
		}
	});

})

$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var next_btn_first = $('#menu li.first a');

	$(next_btn_first).click(function () {
		if ($(conList_all).hasClass('active') == false) {
			$("#gnb").addClass("ScrollC_ON");
			$("#gnb").removeClass("ScrollC_OFF");
			alert("yes");
		} else {
			$("#gnb").removeClass("ScrollC_ON");
			$("#gnb").addClass("ScrollC_OFF");
			alert("no");
		}
	});

})

*/


/* main Gnb color ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s1).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 < 0){
		if ($(conList_s1).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("down");
		}
	}
	});
})

$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s2).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 > 0){
		if ($(conList_s2).hasClass('active') == false) {

		} else {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("up");
		}
	}
	});
})

$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s2).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 < 0){
		if ($(conList_s2).hasClass('active') == false) {

		} else {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("up");
		}
	}
	});
})


$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s3).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 > 0){
		if ($(conList_s3).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("03_up");
		}
	}
	});
})

$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s3).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 < 0){
		if ($(conList_s3).hasClass('active') == false) {

		} else {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("up");
		}
	}
	});
})



$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var next_btn = $('#menu li a');

	$(next_btn).click(function () {
		if ($(conList_all).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("btn_on");
		} else {

			//alert("btn_off");
		}
	});

})


$(document).ready(function () {
	var conList_2 = $('#fullpage #section2');
	var next_btn_3 = $('#menu li:nth-of-type(3) a');

	$(next_btn_3).click(function () {
		if ($(conList_2).hasClass('active') == true) {

			//alert("btn_on");
		} else {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("btn_off");
		}
	});

})

$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var next_btn_all = $('#menu li a');

	$(next_btn_all).click(function () {
		if ($(conList_all).hasClass('active') == true) {
			$("#menu li").removeClass("sec2_bg");
			$("#menu li a").removeClass("sec2_co");
			$("#menu li .line").removeClass("sec2_bg");
			//alert("btn_on");
		} else {
			//$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			//$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			//$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("btn_off");
		}
	});

})


$(document).ready(function () {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');
	var next_btn_all = $('#menu li a');

	$(next_btn_all).mouseenter(function () {
		if ($(conList_s2).hasClass('active') == true) {
			$("#menu li:hover").addClass("sec2_bg");
			$("#menu li:hover a").addClass("sec2_co");
			//alert("up:hover");
		} else {
			//$("#menu li:hover").removeClass("sec2_bg");
			// $("#menu li:hover a").removeClass("sec2_co");
			//alert("up:hover else");
		}
	});

	$(next_btn_all).mouseleave(function () {
		if ($(conList_s2).hasClass('active') == true) {
			$("#menu li").removeClass("sec2_bg");
			$("#menu li a").removeClass("sec2_co");
			$("#menu li:hover").removeClass("sec2_bg");
			$("#menu li:hover a").removeClass("sec2_co");

			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("up:hover");
		} else {
			$("#menu li:hover").removeClass("sec2_bg");
			$("#menu li:hover a").removeClass("sec2_co");
			//alert("up:hover else");
		}
	});
})
/* main Gnb color end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */







/* space btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {

	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_btn).click(function () {
		if ($(conList_first).hasClass('active') == false) {


		} else {
			$(space_next_btn).removeClass('Dnone');
			$(space_next_btn).addClass('Dblock');
			$(space_prev_btn).removeClass('Dblock');
			$(space_prev_btn).addClass('Dnone');

		}
	});
})

$(document).ready(function () {

	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_next_btn).click(function () {
		if ($(conList_first).hasClass('active') == false) {


		} else {
			$(space_next_btn).addClass('Dnone');
			$(space_next_btn).removeClass('Dblock');
			$(space_prev_btn).removeClass('Dnone');
			$(space_prev_btn).addClass('Dblock');
		}
	});
})

$(document).ready(function () {

	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_prev_btn).click(function () {
		if ($(conList_last).hasClass('active') == false) {


		} else {
			$(space_next_btn).addClass('Dblock');
			$(space_next_btn).removeClass('Dnone');
			$(space_prev_btn).removeClass('Dblock');
			$(space_prev_btn).addClass('Dnone');
		}
	});
})
/* space btn end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */








/* tech btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == false) {


		} else {
			$(tech_next_btn).removeClass('Dnone');
			$(tech_next_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');

		}
	});
})

$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == true) {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');
		} else {
			//$(tech_next_btn).addClass('Dnone');
			//$(tech_next_btn).removeClass('Dblock');
			//$(tech_prev_btn).removeClass('Dnone');
			//$(tech_prev_btn).addClass('Dblock');
		}
	});
})

$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_next_btn).addClass('Dnone');
			$(tech_next_btn).removeClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');
		} else {
			//$(tech_next_btn).addClass('Dnone');
			//$(tech_next_btn).removeClass('Dblock');
			//$(tech_prev_btn).removeClass('Dnone');
			//$(tech_prev_btn).addClass('Dblock');
		}
	});
})

$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s3).hasClass('active') == true) {
			//$(tech_next_btn).addClass('Dblock');
			//$(tech_next_btn).removeClass('Dnone');
			//$(tech_prev_btn).removeClass('Dblock');
			//$(tech_prev_btn).addClass('Dnone');
		} else {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');
		}
	});
})

$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');
		} else {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');
		}
	});
})

$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');
			//alert("prev 1");
		} else {
			$(tech_prev_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
			//alert("prev 2");
		}
	});
})




$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == true) {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').addClass('fade_b01');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').addClass('fade_b02');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').addClass('fade_b03');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').addClass('fade_b04');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').addClass('fade_b05');
			//alert("s1");
		} else {

		}
	});
})


$(document).ready(function () {

	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == true) {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li img').addClass('fade_bike_img');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li').addClass('fade_bike');
			//alert("s1");
		} else {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li img').removeClass('fade_bike_img');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li').removeClass('fade_bike');

			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').removeClass('fade_b01');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').removeClass('fade_b02');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').removeClass('fade_b03');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').removeClass('fade_b04');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').removeClass('fade_b05');
		}
	});
})

/* tech btn end -----------------------------------------------------------------------------------------------------------------------------------------------------------------*/








/* draw btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {

	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_btn).click(function () {
		if ($(draw_conList_s1).hasClass('active') == false) {


		} else {
			$(draw_next_btn).removeClass('Dnone');
			$(draw_next_btn).addClass('Dblock');
			$(draw_prev_btn).removeClass('Dblock');
			$(draw_prev_btn).addClass('Dnone');

		}
	});
})

$(document).ready(function () {

	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_next_btn).click(function () {
		if ($(draw_conList_s1).hasClass('active') == false) {


		} else {
			$(draw_next_btn).addClass('Dnone');
			$(draw_next_btn).removeClass('Dblock');
			$(draw_prev_btn).removeClass('Dnone');
			$(draw_prev_btn).addClass('Dblock');
		}
	});
})

$(document).ready(function () {

	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_prev_btn).click(function () {
		if ($(draw_conList_s2).hasClass('active') == false) {


		} else {
			$(draw_next_btn).addClass('Dblock');
			$(draw_next_btn).removeClass('Dnone');
			$(draw_prev_btn).removeClass('Dblock');
			$(draw_prev_btn).addClass('Dnone');
		}
	});
})
/* draw btn end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* sec1 motion ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
	var conList_s1 = $('#fullpage #section1');
	var next_btn = $('#menu li a');

	$(next_btn).click(function () {
		if ($(conList_s1).hasClass('active') == true) {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").removeClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").removeClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").removeClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").removeClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").removeClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").removeClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").removeClass("fade_mar");
			//alert("btn_on");
		} else {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").addClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").addClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").addClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").addClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").addClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").addClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").addClass("fade_mar");
			//alert("btn_off");
		}
	});

})

$(document).ready(function () {
	var conList_s0 = $('#fullpage #section0');
	var conList_s1 = $('#fullpage #section1');
	var next_btn = $('#menu li a');

	$(conList_s0).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 < 0){
		if ($(conList_s1).hasClass('active') == true) {
			//$("#section1 .myContent .Box ul:nth-child(1) li").removeClass("fade_st");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").removeClass("fade_st");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").removeClass("fade_st");

			//$("#section1 .myContent .Box ul:nth-child(3) li").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").removeClass("fade_mar");
			//alert("btn_on");
		} else {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").addClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").addClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").addClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").addClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").addClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").addClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").addClass("fade_mar");
			 //alert("btn_off");
		}
	}
	});
})

$(document).ready(function () {
	var conList_s0 = $('#fullpage #section0');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_all = $('#fullpage .section');
	var next_btn = $('#menu li a');

	$(conList_s1).on('mousewheel DOMMouseScroll', function(e) {
	if(e.originalEvent.wheelDelta /120 > 0){
		if ($(conList_s1).hasClass('active') == true) {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").removeClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").removeClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").removeClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").removeClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").removeClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").removeClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").removeClass("fade_mar");
			//alert("btn_on");
		} else {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").addClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").addClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").addClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").addClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").addClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").addClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").addClass("fade_mar");
			//alert("btn_off");
		}
	}
	});
})
/* sec1 motion end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */












/* MOBILE =========================================================================================*/

/* space btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_btn).click(function () {
		if ($(conList_first).hasClass('active') == false) {

		} else {
			$(space_next_btn).removeClass('Dnone');
			$(space_next_btn).addClass('Dblock');
			$(space_prev_btn).removeClass('Dblock');
			$(space_prev_btn).addClass('Dnone');
		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_next_btn).click(function () {
		if ($(conList_first).hasClass('active') == false) {
			$(space_next_btn).addClass('Dnone');
			$(space_next_btn).removeClass('Dblock');
			$(space_prev_btn).removeClass('Dnone');
			$(space_prev_btn).addClass('Dblock');

		} else {


		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {

	var space_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b01');
	var space_next_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-next');
	var space_prev_btn = $('.Con_space .Con_inner_space .fp-controlArrow.fp-prev');
	var conList_first = $('.Con_space .Con_inner_space .fp-slidesContainer #slide1');
	var conList_last = $('.Con_space .Con_inner_space .fp-slidesContainer #slide2');

	$(space_prev_btn).click(function () {
		if ($(conList_last).hasClass('active') == false) {
			$(space_next_btn).addClass('Dblock');
			$(space_next_btn).removeClass('Dnone');
			$(space_prev_btn).removeClass('Dblock');
			$(space_prev_btn).addClass('Dnone');
		} else {

		}
	});
}
})
/* space btn end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* tech btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == false) {
			$(tech_next_btn).removeClass('Dnone');
			$(tech_next_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');

		} else {


		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == true) {


		} else {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');

		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_next_btn).removeClass('Dnone');
			$(tech_next_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');

		} else {
			$(tech_next_btn).addClass('Dnone');
			$(tech_next_btn).removeClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');

		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s3).hasClass('active') == true) {
			//$(tech_next_btn).addClass('Dblock');
			//$(tech_next_btn).removeClass('Dnone');
			//$(tech_prev_btn).removeClass('Dblock');
			//$(tech_prev_btn).addClass('Dnone');
		} else {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_prev_btn).removeClass('Dnone');
			$(tech_prev_btn).addClass('Dblock');
		} else {
			$(tech_next_btn).addClass('Dblock');
			$(tech_next_btn).removeClass('Dnone');
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');
		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_prev_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$(tech_prev_btn).addClass('Dblock');
			$(tech_prev_btn).removeClass('Dnone');
		} else {
			$(tech_prev_btn).removeClass('Dblock');
			$(tech_prev_btn).addClass('Dnone');
		}
	});
}
})




$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_btn).click(function () {
		if ($(tech_conList_s1).hasClass('active') == true) {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').addClass('fade_b01');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').addClass('fade_b02');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').addClass('fade_b03');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').addClass('fade_b04');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').addClass('fade_b05');

		} else {

		}
	});
}
})


$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var tech_btn = $('#section1 .myContent .Box ul:nth-child(1) li span:nth-child(2) p:nth-child(4) a.b02');
	var tech_next_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-next');
	var tech_prev_btn = $('.Con_tech .Con_inner_tech .fp-controlArrow.fp-prev');
	var tech_conList_s1 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide1');
	var tech_conList_s2 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide2');
	var tech_conList_s3 = $('.Con_tech .Con_inner_tech .fp-slidesContainer #slide3');

	$(tech_next_btn).click(function () {
		if ($(tech_conList_s2).hasClass('active') == true) {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li img').addClass('fade_bike_img');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li').addClass('fade_bike');
		} else {
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li img').removeClass('fade_bike_img');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content_02 ul:nth-of-type(2) li').removeClass('fade_bike');

			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(1) span').removeClass('fade_b01');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(2) span').removeClass('fade_b02');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(3) span').removeClass('fade_b03');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(4) span').removeClass('fade_b04');
			$('.Con_tech .Con_inner_tech .slide .s4 .inner .Content ul:nth-of-type(2) li:nth-child(5) span').removeClass('fade_b05');
		}
	});
}
})

/* tech btn end -----------------------------------------------------------------------------------------------------------------------------------------------------------------*/








/* draw btn ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_btn).click(function () {
		if ($(draw_conList_s1).hasClass('active') == false) {


		} else {
			$(draw_next_btn).removeClass('Dnone');
			$(draw_next_btn).addClass('Dblock');
			$(draw_prev_btn).removeClass('Dblock');
			$(draw_prev_btn).addClass('Dnone');

		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_next_btn).click(function () {
		if ($(draw_conList_s1).hasClass('active') == false) {
			$(draw_next_btn).addClass('Dnone');
			$(draw_next_btn).removeClass('Dblock');
			$(draw_prev_btn).removeClass('Dnone');
			$(draw_prev_btn).addClass('Dblock');

		} else {


		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var draw_btn = $('#section5 .myContent .Box ul:nth-child(2) .content-slider li .s2 ul li div:nth-child(5) a');
	var draw_next_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-next');
	var draw_prev_btn = $('.Con_draw .Con_inner_draw .fp-controlArrow.fp-prev');
	var draw_conList_s1 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:first-child');
	var draw_conList_s2 = $('.Con_draw .Con_inner_draw .fp-slidesContainer .slide:last-child');

	$(draw_prev_btn).click(function () {
		if ($(draw_conList_s2).hasClass('active') == false) {
			$(draw_next_btn).addClass('Dblock');
			$(draw_next_btn).removeClass('Dnone');
			$(draw_prev_btn).removeClass('Dblock');
			$(draw_prev_btn).addClass('Dnone');

		} else {


		}
	});
}
})
/* draw btn end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* main Gnb color ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s1).bind('touchend', function(e) {

		if ($(conList_s1).hasClass('active') == true) {
			//$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			//$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			//$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s1");
		} else {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s4");
		}

	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s0 = $('#fullpage #section0');
	var conList_s1 = $('#fullpage #section1');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s1).bind('touchend', function(e) {

		if ($(conList_s0).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s1");
		} else {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s4");
		}

	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s2).bind('touchend', function(e) {

		if ($(conList_s2).hasClass('active') == false) {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s2");
		} else {
			//$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			//$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			//$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s3");
		}

	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');

	$(conList_s2).bind('touchend', function(e) {

		if ($(conList_s2).hasClass('active') == false) {
			//alert("s2");
		} else {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s3");
		}

	});
}
})


$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');
	var conList_s4 = $('#fullpage #section4');
	var conList_s5 = $('#fullpage #section5');
	var conList_s6 = $('#fullpage #section6');

	$(conList_s3).bind('touchend', function(e) {

		if ($(conList_s2).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s4");
		} else {
			//$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			//$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			//$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s5");
		}

	});
}
})


$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');
	var conList_s4 = $('#fullpage #section4');
	var conList_s5 = $('#fullpage #section5');
	var conList_s6 = $('#fullpage #section6');

	$(conList_s4).bind('touchend', function(e) {

		if ($(conList_s4).hasClass('active') == false) {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s8");
		} else {

			//alert("s10");
		}

	});
}
})



$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var next_btn = $('#menu li a');

	$(next_btn).click(function () {
		if ($(conList_all).hasClass('active') == true) {
			$("#menu li:nth-of-type(3)").removeClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").removeClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").removeClass("sec2_bg");
			//alert("s1");
		} else {

			//alert("s2");
		}
	});
}
})


$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_2 = $('#fullpage #section2');
	var next_btn_3 = $('#menu li:nth-of-type(3) a');

	$(next_btn_3).click(function () {
		if ($(conList_2).hasClass('active') == true) {

			//alert("s3");
		} else {
			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s4");
		}
	});
}
})

$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_all = $('#fullpage .section');
	var next_btn_all = $('#menu li a');

	$(next_btn_all).click(function () {
		if ($(conList_all).hasClass('active') == true) {
			//$("#menu li").removeClass("sec2_bg");
			//$("#menu li a").removeClass("sec2_co");
			//$("#menu li .line").removeClass("sec2_bg");
			//alert("s5");
		} else {
			//$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			//$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			//$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("s6");
		}
	});
}
})


$(document).ready(function () {
if (document.body.clientWidth < 580) {

	var conList_all = $('#fullpage .section');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_s3 = $('#fullpage #section3');
	var next_btn_all = $('#menu li a');

	$(next_btn_all).mouseenter(function () {
		if ($(conList_s2).hasClass('active') == true) {
			$("#menu li:hover").addClass("sec2_bg");
			$("#menu li:hover a").addClass("sec2_co");
			//alert("up:hover");
		} else {
			//$("#menu li:hover").removeClass("sec2_bg");
			// $("#menu li:hover a").removeClass("sec2_co");
			//alert("up:hover else");
		}
	});

	$(next_btn_all).mouseleave(function () {
		if ($(conList_s2).hasClass('active') == true) {
			$("#menu li").removeClass("sec2_bg");
			$("#menu li a").removeClass("sec2_co");
			$("#menu li:hover").removeClass("sec2_bg");
			$("#menu li:hover a").removeClass("sec2_co");

			$("#menu li:nth-of-type(3)").addClass("sec2_bg");
			$("#menu li:nth-of-type(3) a").addClass("sec2_co");
			$("#menu li:nth-of-type(3) .line").addClass("sec2_bg");
			//alert("up:hover");
		} else {
			$("#menu li:hover").removeClass("sec2_bg");
			$("#menu li:hover a").removeClass("sec2_co");
			//alert("up:hover else");
		}
	});

}
});
/* main Gnb color end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* sec1 motion ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_s0 = $('#fullpage #section0');
	var conList_s1 = $('#fullpage #section1');
	var next_btn = $('#menu li a');

	$(conList_s0).bind('touchend', function(e) {
		if ($(conList_s1).hasClass('active') == true) {
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1)").addClass("fade_smart_01");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2)").addClass("fade_smart_02");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3)").addClass("fade_smart_03");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4)").addClass("fade_smart_04");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5)").addClass("fade_smart_05");

			$("#section1 .myContent .Box ul:nth-child(1) li").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").addClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").addClass("fade_mar");
			//alert("btn_on");
		} else {
			//$("#section1 .myContent .Box ul:nth-child(1) li").removeClass("fade_st");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").removeClass("fade_st");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").removeClass("fade_st");

			//$("#section1 .myContent .Box ul:nth-child(3) li").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").removeClass("fade_mar");
			//$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").removeClass("fade_mar");
			 //alert("btn_off");
		}
	});
}
})
/*
$(document).ready(function () {
if (document.body.clientWidth < 580) {
	var conList_s0 = $('#fullpage #section0');
	var conList_s1 = $('#fullpage #section1');
	var conList_s2 = $('#fullpage #section2');
	var conList_all = $('#fullpage .section');
	var next_btn = $('#menu li a');

	$(conList_s1).bind('touchend', function(e) {
		if ($(conList_s1).hasClass('active') == true) {
			$("#section1 .myContent .Box ul:nth-child(1) li").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").addClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").addClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").addClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").addClass("fade_mar");
			alert("btn_on");
		} else {
			$("#section1 .myContent .Box ul:nth-child(1) li").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(1) span:nth-child(2)").removeClass("fade_st");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(5) span:nth-child(2)").removeClass("fade_st");

			$("#section1 .myContent .Box ul:nth-child(3) li").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(2) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(3) span:nth-child(2)").removeClass("fade_mar");
			$("#section1 .myContent .Box ul:nth-child(2) li:nth-child(4) span:nth-child(2)").removeClass("fade_mar");
			alert("btn_off");
		}
	});
}
})
*/
/* sec1 motion end ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* MOBILE END =========================================================================================*/