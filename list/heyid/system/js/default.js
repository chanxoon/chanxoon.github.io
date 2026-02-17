$(document).ready(function(){

    /* 팝업 */
    $(".privacy-btn").click(function(){
        $(".privacy-layer").fadeIn("fast");
    });
    $(".telecom-btn").click(function(){
        $(".telecom-layer").fadeIn("fast");
    });
    /* 팝업닫기 */
    $(".close-btn").click(function(){
        $(".layer-pop").fadeOut("fast");
    });

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

    /* 인풋 */
    $(function() {
        // 본인인증 인풋 포커스
        $(".sms-verification .sms .input-box input").keyup(function () {
            var charLimit = $(this).attr("maxlength");
            if (this.value.length >= charLimit) {
                $(this).nextAll('.inputs').focus();
                return false;
            }
        });
        $(".input-box input").focusout(function () {
            $(this).parents('.input-box').css('outline','');
            $(this).parents('.input-box').find('.input-title').css('color','');
        });
        $(".input-box input").focus(function () {
            $(this).parents('.input-box').css('outline','3px solid #3b7ddd');
            $(this).parents('.input-box').find('.input-title').css('color','#3b7ddd');
        });

        // 사진및정보등록 인풋 자동완성
        $(".register-photo .input-wrap .input-box.position input").keyup(function () {
            $('.keyword-box').show();
            var stringposition = $(".register-photo .input-wrap .input-box.position input").val();
            if(stringposition == 0){
                $('.keyword-box').hide();
            }
        });
        $(".register-photo .input-wrap .input-box.position input").focusout(function () {
            $('.keyword-box').hide();
        });

        $("#typingcode").keyup(function () {
            $('.btn-box button.type1').addClass('on');
        });
    });

});

/* 리사이즈 */
$(function(){
    $(window).resize(function() {
        var width = $(window).width();
        if (width<=375) {    
            
        } 
        if (width>=376) {
            
        }
    });
    $(window).resize();
});