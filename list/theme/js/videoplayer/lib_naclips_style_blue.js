////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NACLIPS HTML5 Player : Skin-Style Pack for Neon-blue V1.0
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cx_naclips_video_style(){
	////////////////////////////////////////////////
	cx_naclips_styler.call(this); //DO NOT REMOVE //
	////////////////////////////////////////////////
	
	// Set Styles Here !! /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var s_style = '';	
	
	this.setStyle('btn_gab_la' ,"width: 10px;");
	this.setStyle('btn_gab_ra' ,"width: 4px;");
	this.setStyle('btn_gab_rc' ,"padding-left:1px;");	
	this.setStyle('btn_gab_r0' ,"width: 8px;");
	this.setStyle('btn_gab_bar',"width: 13px; text-align: center;");
	this.setStyle('td_jamak'   ,"width: 28px; text-align: center;");
	this.setStyle('td_speed'   ,"width: 28px; text-align: center;");
	this.setStyle('td_repeat'  ,"width: 28px; text-align: center;");
	
	this.setStyle('td_mulbps_label' ,"width: 38px; text-align: right;");
	this.setStyle('td_mulbps_ico'   ,"width: 28px; text-align: center;");
	
	this.setStyle('td_volume'  ,"background-repeat: no-repeat; background-position:left center;");		
	this.setStyle('tx_speed'   ,"font-family:Verdana; font-size: 11px; font-weight:bold; line-height: 15px;");
	this.setStyle('tx_mulbps'  ,"font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; color:#fff; font-size: 11px; font-weight:bold; line-height: 18px; text-align:right;");
	this.setStyle('td_jamakbox',"text-align:left;");
  this.setStyle('td_mulbpsbox',"text-align:right;");
	
  this.setStyle('tx_jamaksp' ,"font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 11px; font-weight:bold; line-height: 18px;");

  this.setStyle('tx_mulbpssp',"font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 11px; font-weight:bold; line-height: 18px;");
  this.setStyle('im_thumb'   ,"margin-left: 5px; margin-right: 5px;");
	this.setStyle('bx_about'   ,"color:#888; font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 11px; font-weight: bold; letter-spacing:1px; line-height:12px;");
	
	this.setStyle('head_mesg'  ,"font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 11px; color:#888;");		
	
	this.setStyle('main_play_button' ,"padding-left : 30px; padding-right : 30px;");
	this.setStyle('main_close_button',"width : 46px;"); //used in mobile player only
		
	//new added //////////////////
	this.setStyle('main_play_button' ,"width : 200px;");
		
	s_style = "font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 11px; color:#B5194D; text-align: left; vertical-align:top;";
	s_style+= "height:42px; padding-top:6px; padding-left :16px; padding-right:20px; line-height:13px;"
	this.setStyle('body_mesg_a',s_style);

	s_style = "font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; font-size: 12px; color:#B5194D; text-align:center; vertical-align:bottom;"
	s_style+= "height:28px; font-weight:bold; padding-bottom:4px; line-height:28px;"
	this.setStyle('body_mesg_b',s_style);
	
	this.setStyle('tail_mesg' ,"text-align: center;");	
	this.setStyle('close_btn' ,"padding-top:3px; padding-right:3px;");

	this.setStyle('mulbps_back'  ,"border-spacing:0; margin:0px; border-collapse:collapse; width:44px;");
	
	this.setStyle('ctrl_table'   ,"border-spacing:0; margin:0px; border-collapse:collapse;");
	
	this.setStyle('panel_time'   ,"vertical-align:middle;	padding-top:4px;");	
	this.setStyle('panel_time_fx',"vertical-align:middle;");	
	this.setStyle('spn_curtime'  ,"font-family:Verdana; font-size: 11px; font-weight:bold; color:#71B9FF;");		
	this.setStyle('spn_duration' ,"font-family:Verdana; font-size: 11px; font-weight:bold; color:#E0E0E0;");
	this.setStyle('cur_time'     ,"font-family:Verdana; font-size: 11px; color:#2E2E2E; letter-spacing:0px; text-align: center;");
	
	this.setStyle('subtitle_tb'   ,"border-spacing:0; margin:0px; border-collapse:collapse; padding:0px;");	
	this.setStyle('wmark_tb'      ,"border-spacing:0; margin:0px; border-collapse:collapse; padding:0px;");		
	
	s_style = "text-align: center; vertical-align: bottom;padding-bottom: 6px; font-family: 'Malgun Gothic', 'Trebuchet MS', 'Apple SD Gothic Neo', 'dotum', verdana, sans-serif; color: rgba(255,255,255,1.0);";
	s_style+= "text-shadow: 1px 1px 2px rgba(0,0,0,0.8), 2px 2px 3px rgba(0,0,0,0.5);";
	this.setStyle('subtitle_td', s_style);
	
	//161021 /////////////////////////////////
	this.setStyle('tb_bxmenu_width', "width:151px;");
	this.setStyle('td_bxmenu_t' , "height:26px;");	
	this.setStyle('td_bxmenu_tl', "padding:0px; padding-left :7px; padding-top:3px; font-family:Verdana; font-size: 9.5px; letter-spacing:0.2px; font-weight:bold; color:#aaa;");
	this.setStyle('td_bxmenu_tr', "padding:0px; padding-right:6px; padding-top:3px; text-align:right; vertical-align:top;");
	this.setStyle('td_bxmenu_m' , "height:64px; vertical-align:middle;");
	this.setStyle('td_bxmenu_m_tb',"margin-top:1px; height:100%; margin-bottom:2px;");
	this.setStyle('td_bxmenu_ml', "padding:0px; padding-left:7px; padding-top:2px; font-family:Verdana; font-size: 9.5px; letter-spacing:0.2px; color:#ace600; font-weight:bold;");
	this.setStyle('td_bxmenu_mr', "padding:0px; padding-left:2px; padding-right:4px; padding-top:2px; font-family:Verdana; font-size: 9.5px; letter-spacing:0.5px; color:white;");
	this.setStyle('td_bxmenu_b' , "padding:0px; height:80px; vertical-align:top; padding-left:7px; padding-right:7px;");
	this.setStyle('td_bxmenu_b_tb',"margin-top:9px; padding:0px; border-spacing:0; text-align:center; height:64px;");
	this.setStyle('td_bxico_tl' , "width:33%; vertical-align:top;");
	this.setStyle('td_bxico_tc' , "width:34%; vertical-align:top;");
	this.setStyle('td_bxico_tr' , "width:33%; vertical-align:top;");
	this.setStyle('td_bxico_mc' , "height:7px;");
	
	//161212 //////////////////////////////////////
	this.setStyle('sz_volume_f' , "width:4px; height:14px;"); /////////////////////////////////////// blue:14 / green:5
	this.setStyle('sz_about'    , "width:316px; height:96px;");
	this.setStyle('sz_messg'    , "width:365px; height:128px;");
	this.setStyle('sz_ctrl'     , "height:36px;");
	this.setStyle('sz_bgcurs'   , "height:6px;");
	this.setStyle('sz_dvcurs'   , "margin-top:4px;");
	this.setStyle('sz_iccurs'   , "size:15px;");  //exteneded style	
	this.setStyle('sz_repcur'   , "width:10px; margin-top:7px;"); //10-3
	this.setStyle('sz_curtime'  , "left :43px; top:16px; margin-top:5px;");
	this.setStyle('sz_spdtop'   , "height:2px;");
	this.setStyle('sz_spdback'  , "width:46px; height:80px;");
	this.setStyle('sz_spdbkgap' , "height:8px;");
	this.setStyle('sz_bxmenugap', "height:4px;");
	this.setStyle('sz_bgjmkgap' , "height:2px;");
	
	this.setStyle('dv_bkmsg' , "background-color:#444;");
	this.setStyle('tb_bkmsg' , "border-spacing:0; margin:0px; border-collapse:collapse; padding:0px;");		
	this.setStyle('td_bkmsg' , "color:white; font-size:24px; font-family:'Trebuchet MS', 'Apple SD Gothic Neo', 'Malgun Gothic', verdana; text-align:center; vertical-align:middle;");
	
	//160704 //////////////////////////////////////	
	this.setStyle('tab_focus' , "outline:2px solid red;");
	//this.setStyle('tab_focus' , "outline:2px solid #80bfff;");
		
	
	// Set Styles Here !! /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
};
//DO NOT REMOVE ///////////////////////////////////////////////////////////////////////////////
try{		                                                                                     //
	cx_naclips_video_style.prototype = Object.create(cx_naclips_styler.prototype);		         //
	cx_naclips_video_style.prototype.constructor = cx_naclips_video_style;                     //
}catch(e){};                                                                                 //
//DO NOT REMOVE ///////////////////////////////////////////////////////////////////////////////
