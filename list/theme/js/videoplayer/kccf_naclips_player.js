function loadPlayer(vod_domain, player_id, gi_video_w, gi_video_h, media_url){
    const gs_vod_server = "assp://"+vod_domain+"/"; //Naclips VOD Server
    const gs_img_server = "cssp://"+vod_domain+"/"; //Nextube Image Server
    const gs_skin_path  = "/images/videoplayer/skin/neon_blue"; //HTML5 Player Skin Image Path
    //var gs_rovcat_pgm = "/iface_rovecat.php"; // 플레이어 웹페이지 HTTPS 프로토콜 사용시

//            const gi_video_w = 864; //Player Width
//            const gi_video_h = 486; //Player Height

    this.gx_vodloader = new cx_ncsloader('auto', 'html5');

    var i_ret = this.gx_vodloader.burnPlayer(player_id,gi_video_w,gi_video_h,'NACLIPS_PLAYER',document);
    if     (i_ret == 0) alert('abnormal layer options');
    else if(i_ret  < 0) alert('burning player failed.');
    else{
        //add Params ///////////////////////////////////////
        this.gx_vodloader.addParam("BaseLayerID", this.gx_vodloader.getLayerId());

        this.gx_vodloader.addParam("FileName"   ,gs_vod_server + media_url); //동영상 파일 소스 지정
        this.gx_vodloader.addParam("NexTube"    ,gs_img_server);//+"/demo/"); //넥스튜브 이미지 서버 + 서브디렉토리 지정
        // this.gx_vodloader.addParam("title_url"  ,"http://www.nexpoly.co.kr/image/temp/logo_nexpoly.jpg"); //대표 이미지 대신 회사로고 Display

        // ActiveX & Plugin Player Only ////////////////////
        this.gx_vodloader.addParam("SkinURL"  ,"http://www.nexpoly.co.kr/controls/skins/naclipsx/nacs_smoke.zip#Version="+gxVer_nacs_smoke);	//ActiveX Player 스킨위치
        this.gx_vodloader.addParam("IsTitleSnap"  ,1);

        //Activex Player parameter /////////////////////////
        this.gx_vodloader.addParam("UpdateSupport",1);
        this.gx_vodloader.addParam("EnableSpeed",1);
        this.gx_vodloader.addParam("EnableSnapshot",1);
        this.gx_vodloader.addParam("EnableTitleSnap",1);
        this.gx_vodloader.addParam("ThumbCount",6);
        this.gx_vodloader.addParam("IsSaveSnapOnNet",1);
        this.gx_vodloader.addParam("ThumbArrayPattern", 1);
        this.gx_vodloader.addParam("ShowNextBtn", 1);

        //HTML5 Player Only ///////////////////////////////
        this.gx_vodloader.addParam('skin_path'       , gs_skin_path);
        //this.gx_vodloader.addParam('vod_query_url'   , gs_rovcat_pgm); // 플레이어 웹페이지 HTTPS 프로토콜 사용시
        this.gx_vodloader.addParam('fire_status_ex'  , true);
        this.gx_vodloader.addParam('fire_subtitle_ex', true);
        this.gx_vodloader.addParam('enable_vod_ssl'  , true); //https protocol  <--추가
        this.gx_vodloader.addParam('enable_img_ssl'  , true); //https protocol <--추가

        //자막 지정....................................
        //this.gx_vodloader.setSubtitleDisablingLabel("무자막");
        //this.gx_vodloader.addSubtitle('/sect01/demo_k.srt', '한국어');
        //this.gx_vodloader.addSubtitle('/sect01/demo_e.srt', 'English');

        //다중 대역폭 스트리밍 메뉴 ..................
        //this.gx_vodloader.addMultiBpsMenu('1080P');
        //this.gx_vodloader.addMultiBpsMenu('720P');

        //this.gx_vodloader.enableExtender(true);

        //HTML5 Player Load ..........................
        var i_rtn = this.gx_vodloader.loadPlayer();
        if(i_rtn == 1){
            if(this.gx_vodloader.curr_player == 'html5'){
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                //HTML5 플레이어 이벤트 처리부분 ................................................................

                //naclips player : extra status change event for HTML5 /////////////////////////////////////////
                document.addEventListener("naclips_status_change", function(evt){
                    ////////////////////////////////////////////////
                    // contacting, waiting, pause, play, error, suspend, ended, stalled, timeupdate, loadedmetadata,
                    // click, mouseover, mouseout, change_media, fullscreen(1/0), progress(buffered_len), change_bandwidth(idx),
                    ////////////////////////////////////////////////
                    if(evt.detail.status == 'loadedmetadata'){ // emulate Media Open Event ///////////////////////////////
                        //var i_opt = evt.detail.option;
                        try{
                            if(xvnt_OpenStatusChange) xvnt_OpenStatusChange(2,evt.detail.layer_id); //opened
                        }catch(e){};
                    }
                    ////////////////////////////////////////////////
                }, false);
                {
                    //naclips player : extra subtitle change event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_subtitle_change", function(evt){
                     ////////////////////////////////////////////////
                     if(evt.detail.layer_id == this.gx_vodloader.getLayerId()){
                     // 자막 페이지에 뿌려주기 .............................
                     //var ob_spn = document.getElementById('ex_jamak');
                     //if(ob_spn){
                     //	var s_text = evt.detail.text.replace(/\<br\>/g, " ").replace(/(<([^>]+)>)/ig,"");
                     //	ob_spn.innerHTML = evt.detail.start +" &raquo; "+ evt.detail.end + ' : '+s_text;
                     //}
                     }
                     ////////////////////////////////////////////////
                     }, false);
                     */

                    //naclips player : naclips_extender event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_extender_loader", function(evt){
                     ////////////////////////////////////////////////
                     if(evt.detail.layer_id == this.gx_vodloader.getLayerId()){
                     if(evt.detail.s_id == this.gx_vodloader.FX_IDNAEX_SETUP){
                     document.location = "http://www.nexpoly.co.kr/swin_setup_extender.php";
                     }
                     }
                     ////////////////////////////////////////////////
                     }, false);
                     */

                    //naclips player Loader : check speed event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_loader_check_speed", function(evt){
                     //alert(evt.detail.return_code+'/'+evt.detail.error_mesg+'/'+evt.detail.bps);
                     }, false);
                     */

                    /*
                     //naclips player : error event /////////////////////////////////////////////////
                     document.addEventListener("naclips_error", function(e){
                     alert("error > "+e.detail.code+" : "+e.detail.message);
                     }, false);
                     */

                    //HTML5 플레이어 이벤트 처리부분 ..........................................................................
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////////////////
                    //this.gx_vodloader.runCheckSpeed(5*1024,5); //인터넷 속도 측정 사용여부 5초안에 5MByte 수신. (OLD 버전, 지원 안함)
                    ///////////////////////////////////////////
                }
            }

        }
        else if(i_rtn == -2) alert('VOD-Query Interface Failed!!');
        else if(i_rtn ==  0) alert('Load Player Failed!!');
    }

}


function createPlayer(vod_domain, player_id, gi_video_w, gi_video_h, media_url){
    const gs_vod_server = "assp://"+vod_domain+"/"; //Naclips VOD Server
    const gs_img_server = "cssp://"+vod_domain+"/"; //Nextube Image Server
    const gs_skin_path  = "/images/videoplayer/skin/neon_blue"; //HTML5 Player Skin Image Path
    //var gs_rovcat_pgm = "/iface_rovecat.php"; // 플레이어 웹페이지 HTTPS 프로토콜 사용시

    var b_width = window.innerWidth;
    if (b_width < 430) {
        gi_video_w = 372;
        gi_video_h = 251;
    }

    gx_vodloader = new cx_ncsloader('auto', 'html5');

    var i_ret = gx_vodloader.burnPlayer(player_id,gi_video_w,gi_video_h,'NACLIPS_PLAYER_'+player_id,document);
    if     (i_ret == 0) alert('abnormal layer options');
    else if(i_ret  < 0) alert('burning player failed.');
    else{
        //add Params ///////////////////////////////////////
        gx_vodloader.addParam("BaseLayerID", gx_vodloader.getLayerId());

        gx_vodloader.addParam("FileName"   ,gs_vod_server + media_url); //동영상 파일 소스 지정
        gx_vodloader.addParam("NexTube"    ,gs_img_server);//+"/demo/"); //넥스튜브 이미지 서버 + 서브디렉토리 지정
        // this.gx_vodloader.addParam("title_url"  ,"http://www.nexpoly.co.kr/image/temp/logo_nexpoly.jpg"); //대표 이미지 대신 회사로고 Display

        // ActiveX & Plugin Player Only ////////////////////
        gx_vodloader.addParam("SkinURL"  ,"http://www.nexpoly.co.kr/controls/skins/naclipsx/nacs_smoke.zip#Version="+gxVer_nacs_smoke);	//ActiveX Player 스킨위치
        gx_vodloader.addParam("IsTitleSnap"  ,1);

        //Activex Player parameter /////////////////////////
        gx_vodloader.addParam("UpdateSupport",1);
        gx_vodloader.addParam("EnableSpeed",1);
        gx_vodloader.addParam("EnableSnapshot",1);
        gx_vodloader.addParam("EnableTitleSnap",1);
        gx_vodloader.addParam("ThumbCount",6);
        gx_vodloader.addParam("IsSaveSnapOnNet",1);
        gx_vodloader.addParam("ThumbArrayPattern", 1);
        gx_vodloader.addParam("ShowNextBtn", 1);

        //HTML5 Player Only ///////////////////////////////
        gx_vodloader.addParam('skin_path'       , gs_skin_path);
        //this.gx_vodloader.addParam('vod_query_url'   , gs_rovcat_pgm); // 플레이어 웹페이지 HTTPS 프로토콜 사용시
        gx_vodloader.addParam('fire_status_ex'  , true);
        gx_vodloader.addParam('fire_subtitle_ex', true);
        gx_vodloader.addParam('enable_vod_ssl'  , true); //https protocol  <--추가
        gx_vodloader.addParam('enable_img_ssl'  , true); //https protocol <--추가

        //자막 지정....................................
        //this.gx_vodloader.setSubtitleDisablingLabel("무자막");
        //this.gx_vodloader.addSubtitle('/sect01/demo_k.srt', '한국어');
        //this.gx_vodloader.addSubtitle('/sect01/demo_e.srt', 'English');

        //다중 대역폭 스트리밍 메뉴 ..................
        //this.gx_vodloader.addMultiBpsMenu('1080P');
        //this.gx_vodloader.addMultiBpsMenu('720P');

        //this.gx_vodloader.enableExtender(true);

        //HTML5 Player Load ..........................
        var i_rtn = gx_vodloader.loadPlayer();
        if(i_rtn == 1){
            if(gx_vodloader.curr_player == 'html5'){
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                //HTML5 플레이어 이벤트 처리부분 ................................................................

                //naclips player : extra status change event for HTML5 /////////////////////////////////////////
                document.addEventListener("naclips_status_change", function(evt){
                    ////////////////////////////////////////////////
                    // contacting, waiting, pause, play, error, suspend, ended, stalled, timeupdate, loadedmetadata,
                    // click, mouseover, mouseout, change_media, fullscreen(1/0), progress(buffered_len), change_bandwidth(idx),
                    ////////////////////////////////////////////////
                    if(evt.detail.status == 'loadedmetadata'){ // emulate Media Open Event ///////////////////////////////
                        //var i_opt = evt.detail.option;
                        try{
                            if(xvnt_OpenStatusChange) xvnt_OpenStatusChange(2,evt.detail.layer_id); //opened
                        }catch(e){};
                    }
                    ////////////////////////////////////////////////
                }, false);
                {
                    //naclips player : extra subtitle change event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_subtitle_change", function(evt){
                     ////////////////////////////////////////////////
                     if(evt.detail.layer_id == this.gx_vodloader.getLayerId()){
                     // 자막 페이지에 뿌려주기 .............................
                     //var ob_spn = document.getElementById('ex_jamak');
                     //if(ob_spn){
                     //	var s_text = evt.detail.text.replace(/\<br\>/g, " ").replace(/(<([^>]+)>)/ig,"");
                     //	ob_spn.innerHTML = evt.detail.start +" &raquo; "+ evt.detail.end + ' : '+s_text;
                     //}
                     }
                     ////////////////////////////////////////////////
                     }, false);
                     */

                    //naclips player : naclips_extender event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_extender_loader", function(evt){
                     ////////////////////////////////////////////////
                     if(evt.detail.layer_id == this.gx_vodloader.getLayerId()){
                     if(evt.detail.s_id == this.gx_vodloader.FX_IDNAEX_SETUP){
                     document.location = "http://www.nexpoly.co.kr/swin_setup_extender.php";
                     }
                     }
                     ////////////////////////////////////////////////
                     }, false);
                     */

                    //naclips player Loader : check speed event for HTML5 /////////////////////////////////////////
                    /*
                     document.addEventListener("naclips_loader_check_speed", function(evt){
                     //alert(evt.detail.return_code+'/'+evt.detail.error_mesg+'/'+evt.detail.bps);
                     }, false);
                     */

                    /*
                     //naclips player : error event /////////////////////////////////////////////////
                     document.addEventListener("naclips_error", function(e){
                     alert("error > "+e.detail.code+" : "+e.detail.message);
                     }, false);
                     */

                    //HTML5 플레이어 이벤트 처리부분 ..........................................................................
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////////////////
                    //this.gx_vodloader.runCheckSpeed(5*1024,5); //인터넷 속도 측정 사용여부 5초안에 5MByte 수신. (OLD 버전, 지원 안함)
                    ///////////////////////////////////////////
                }
            }

        }
        else if(i_rtn == -2) alert('VOD-Query Interface Failed!!');
        else if(i_rtn ==  0) alert('Load Player Failed!!');
    }

    return gx_vodloader;
}