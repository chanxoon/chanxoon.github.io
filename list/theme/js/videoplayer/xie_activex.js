////////////////////////////////////////////////////////
// NEXPOLY TECHNOLOGY INC. - javascript library
// :: ActiveX including script
// created _at_ 2006.4.23 _by_ HG.KIM
// updated _at_ 2006.4.29 _by_ BCAT
////////////////////////////////////////////////////////

var gsSvr_ipadr = "58.229.105.40:443";
var gsMainCtlURL= "http://www.nexpoly.co.kr/controls";
var gxUid_arain2= "6B92E52E-F1B5-436A-9AF0-0DD3861E360F";
var gxUid_nix25 = "A22FCC59-1921-45B8-AA99-CD01D1A01DA9";
var gxUid_nix21 = "89DA3D18-87B8-457F-A767-2A193E99739B";
var gxUid_naclp = "1EA30E22-071B-42df-AAE4-AF5E8489FADF";
var gxUid_naclpj= "2F343BF2-56A8-4eb3-9C68-BA83A38E2DD2";
var gxUid_nexfu = "C925BB85-EA0F-4928-BA07-EC75F064D8A5";
var gxUid_nlivx = "7E0CBC87-8AF4-4206-AACD-A3C9417C8F81";
var gxUid_nuplx = "5DF0A4BD-1A26-44c9-9666-59819A1A8BAA";

var gsSvr_files = "HJEFJFFNNGCGFHGDEJFBJJFEVOMGRDGUGCGKNSF"; //mail 58.229.105.40

var gsParamList = "";
var gsNexPlayer = "";
var gsNexUploader = "";

var gzParam = new Array(); //old version
var giCurDx = 0; //old version

var gz_plugin_param = new Array(); 
var gi_plugin_cur_dx = 0;

var giInstallPageDx = 0;
var gsCustomUpdate = "";
var gsPluginURL   = "http://115.68.221.112/no-ticket/app_download/boxycat_files/apps/npnclipsv_setup.exe";
var gsPluginNxURL = "http://115.68.221.112/no-ticket/app_download/boxycat_files/apps/npnexfiupv_setup.exe";
var gbStopSkip = false;

////////////////////////////////////////////////////////
function getBrowser( )
{	//ie,fx,gc
	if(navigator.appName == "Microsoft Internet Explorer") return 'ie';
	if(navigator.userAgent.indexOf('Trident/')>0) return 'ie';
	if(navigator.userAgent.indexOf('Chrome/' )>0) return 'gc';
	return 'fx';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function is64bitBrowser(){			
	if(navigator.userAgent.indexOf(' Win64')>0) return true;
	if(navigator.userAgent.indexOf(' x64')  >0) return true;
	return false;
}

////////////////////////////////////////////////////////
function getIEver( )
{
	var useragent = navigator.userAgent;
	if(navigator.appName == "Microsoft Internet Explorer"){
		if     (useragent.indexOf('MSIE 10')>0) return 10;
		else if(useragent.indexOf('MSIE 9' )>0) return 9;
		else if(useragent.indexOf('MSIE 8' )>0) return 8;
		else if(useragent.indexOf('MSIE 7' )>0) return 7;
		return 6;
	}else if(useragent.indexOf('Trident/')>0){
		if     (useragent.indexOf('rv:11')>0) return 11;
		else if(useragent.indexOf('rv:12')>0) return 12;
		else return 13;
	}
	return 0;
}

/*
// Close Player forcefully on Unload Document ........................................................
function window_onunload(){
	if(!gsNexPlayer)     return;
	var xPlayer = document.getElementById(gsNexPlayer);
	try {
		if(xPlayer && getBrowser() == 'ie') xPlayer.ForceClose();
	} catch (e) {
		return ;
	}
}
window.onunload = window_onunload;
*/

// Stop Play forcefully on Unload Document ........................................................
window.onbeforeunload =
function(){
	if(gsNexPlayer){
		var xPlayer = document.getElementById(gsNexPlayer);
		try {
			if(xPlayer && getBrowser() == 'ie'){
				if(xPlayer.OpenStatus > -2) xPlayer.Stop(); //OpenStatus == -2 : ForceClose
			}
		} catch (e) {	return ;}
	}
}
// Stop Play forcefully on Unload Document ........................................................


////////////////////////////////////////////////////////
function setSpanText(ob_span,s_text){
	try {
		if(getBrowser() == 'ie') ob_span.innerText   = s_text;
		else                     ob_span.textContent = s_text;
	}catch (e1){
		return ;
	}
}

////////////////////////////////////////////////////////
function initEmbedingVars( ){
	gsParamList = "";
	gsNexPlayer = "";
	gsNexUploader = "";

	gzParam = new Array(); //old version
	giCurDx = 0; //old version

	gz_plugin_param = new Array(); 
	gi_plugin_cur_dx = 0;

	giInstallPageDx = 0;
	gsCustomUpdate = "";
	gbStopSkip = false;
}

// making parameter ..............................................................
function add_param(name,value){
	if(getBrowser() == 'ie') 
		gsParamList += "<param name=\""+name+"\" value=\""+value+"\" />";
	else{
		gzParam[gi_plugin_cur_dx] = new Array();
		gzParam[gi_plugin_cur_dx][0] = name;
		gzParam[gi_plugin_cur_dx][1] = value;
		giCurDx++;

		gz_plugin_param[gi_plugin_cur_dx] = new Array();
		gz_plugin_param[gi_plugin_cur_dx][0] = name;
		gz_plugin_param[gi_plugin_cur_dx][1] = value;
		gi_plugin_cur_dx++; 
	}
}

// version string to number ////////////////////////////////////////////////////////////
function only_number(s_bar){
	var s_num = '';
	for(i=0; i < s_bar.length ; i++ ){
		var c_atom = s_bar.charAt(i);
		if(c_atom == '0' || parseInt(c_atom) > 0) s_num += c_atom;
	}
	return parseInt(s_num);
}

// write document contents.........................................................
function docu_echo(src){
	document.write(src);
}

// check parameter validate........................................................
function check_param(w,h,id){
	if(!w) return false;
	if(!h) return false;
	if(!id)return false;
	return true;
}

// Browser Language........................................................
function agent_lang( ){
	var type=navigator.appName;
	if (type=="Netscape") 
		var lang = navigator.language;
	else 
		var lang = navigator.userLanguage;
	return lang.substr(0,2);	
}

// String Buffer Object ////////////////////////////////////////////////////////////
var StringBufferEx = function()
{ this.buffer = new Array(); }

StringBufferEx.prototype.append=function(str)
{ this.buffer[this.buffer.length] = str; }

StringBufferEx.prototype.toString = function()
{ return this.buffer.join(""); }
// String Buffer Object ////////////////////////////////////////////////////////////

// making Autorain Embeded script .................................................
function mAutoRain2(w,h,id,svr){
	if(getBrowser() != 'ie') return; 

	//check parameter validate...
	if(check_param(w,h,id) == false) return;
	if(!svr)                         svr = gsSvr_files;

	add_param("ArainModVer",gxVer_armod);
	add_param("FileServer" ,svr        );

	// generate script...
    var sObj = "<object classid=\"CLSID:"+gxUid_arain2+"\" codebase=\""+gsMainCtlURL+"/autorain2.cab#Version="+gxVer_arain2+"\" width="+w+" ";
	sObj += "height="+h+" id="+id+">"+gsParamList+"</object>";

	return sObj;
}

// making nixmedia2.5 Player Embeded script .................................................
function mNixPlayer(w,h,id,svr){
	if(getBrowser() != 'ie') return; 

	//check parameter validate...
	if(check_param(w,h,id) == false) return;
	if(!svr)                         return;

	add_param("ArainModVer" ,gxVer_armod);
	add_param("StreamServer",svr        );

	// generate script...
	var sObj = "<object classid=\"CLSID:"+gxUid_nix25+"\" codebase=\""+gsMainCtlURL+"/nixplay25.cab#Version="+gxVer_nix25+"\" ";
	sObj += "width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";
	alert(sObj);

	return sObj;
}


// making nexfiupx Embeded script .................................................
function mNexfiupX(w,h,id){
	if(getBrowser() != 'ie') return; 

	//check parameter validate...
	if(check_param(w,h,id) == false) return;

	add_param("ArainModVer"   ,gxVer_armod);
	add_param("EncoderVersion",gxVer_nexen);
	add_param("EncoderVersionFFM" ,gxVer_enc_ffm);
	add_param("EncoderVersionMEN" ,gxVer_enc_men);
	add_param("Autorain"      ,"astp://"+gsSvr_ipadr+"/nexfiupx");
	//add_param("UpdateSupport",'0');	
	
	// generate script...
	var sObj = "<object classid=\"CLSID:"+gxUid_nexfu+"\" codebase=\""+gsMainCtlURL+"/nexfiupx.cab#Version="+gxVer_nexfu+"\" ";
	sObj += "width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";

	if(id) gsNexUploader = id;

	return sObj;
}

// making nexlivex Embeded script .................................................
function mNexLiveX(w,h,id,arain){
	if(getBrowser() != 'ie') return; 

	//check parameter validate...
	if(check_param(w,h,id) == false) return;

	add_param("ArainModVer",gxVer_armod);
	if(arain) add_param("Autorain"   ,arain);
	else      add_param("Autorain"   ,"astp://"+gsSvr_ipadr+"/nlivex");
	// generate script...
	var sObj = "<object classid=\"CLSID:"+gxUid_nlivx+"\" codebase=\""+gsMainCtlURL+"/nlivex.cab#Version="+gxVer_nlivx+"\" ";
	sObj += "width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";

	if(id) gsNexPlayer = id;

	return sObj;
}

	
// making naclipsX Embeded script .................................................
function mNaclipsX(w,h,id,arain){
	//check parameter validate...
	if(check_param(w,h,id) == false) return;
	
	var s_sub = is64bitBrowser()?'naclips_x64':'naclips';

	add_param("ArainModVer",gxVer_armod);
	if(arain) add_param("Autorain"   ,arain);
	else      add_param("Autorain"   ,"astp://"+gsSvr_ipadr+'/'+s_sub);
	//add_param("UpdateSupport",'0');	
	// generate script...	

	var sObj = "";
	if(getBrowser() == 'ie'){
		var s_cab = is64bitBrowser()?'naclipsx_x64':'naclipsx';
		sObj = "<object classid=\"CLSID:"+gxUid_naclp +"\" codebase=\""+gsMainCtlURL+'/'+s_cab+".cab#Version="    +gxVer_naclp+"\" ";
		sObj += "width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";
	}else{
		document.write("<embed id='"+id+"' type='application/x-naclips-plugin' pluginspage='"+gsPluginURL+"' width="+w+" height="+h+">");
		var xPlugin = document.getElementById(id);
		// Check and Update plugin ////////////
		var rtn = check_update_plugin(document, id,gxVer_ncspgn);
		if(rtn > 0)	run_update_plugin(rtn);

		for (i=0;i<gi_plugin_cur_dx ;i++ ){
			eval("xPlugin."+gz_plugin_param[i][0]+'="'+gz_plugin_param[i][1]+'"');
		}
	}

	if(id) gsNexPlayer = id;
	
	return sObj;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function x_burn_naclipsx_core(w,h,id,arain,bCodeBase){
	//check parameter validate...
	if(check_param(w,h,id) == false) return;
	
	var s_sub = is64bitBrowser()?'naclips_x64':'naclips';
	add_param("ArainModVer",gxVer_armod);
	if(arain) add_param("Autorain"   ,arain);
	else      add_param("Autorain"   ,"astp://"+gsSvr_ipadr+'/'+s_sub);

	var sObj = "";
	if(getBrowser() == 'ie'){
		var s_cab = is64bitBrowser()?'naclipsx_x64':'naclipsx';
		sObj = "<object classid=\"CLSID:"+gxUid_naclp +"\" ";
		if(bCodeBase)sObj += "codebase=\""+gsMainCtlURL+'/'+s_cab+".cab#Version="+gxVer_naclp+"\" ";
		sObj += "width="+w+" height="+h+" id='"+id+"'>"+gsParamList+"</object>";
	}else{
		sObj = "<embed id='"+id+"' type='application/x-naclips-plugin' ";
		if(bCodeBase)sObj += "pluginspage='"+gsPluginURL+"' ";
		sObj += "width="+w+" height="+h+">";
	}
	if(id) gsNexPlayer = id;		
	return sObj;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// no used function, but remove ////////////////////////////
function x_burn_naclipsx_core2(w,h,id,arain,bCodeBase){
	//check parameter validate...
	if(check_param(w,h,id) == false) return;

	var s_sub = is64bitBrowser()?'naclips_x64':'naclips';
	add_param("ArainModVer",gxVer_armod);
	if(arain) add_param("Autorain"   ,arain);
	else      add_param("Autorain"   ,"astp://"+gsSvr_ipadr+'/'+s_sub);

	var sObj = "";
	if(getBrowser() == 'ie'){
		var s_cab = is64bitBrowser()?'naclipsx_x64':'naclipsx';
		sObj = "<object classid=\"CLSID:"+gxUid_naclp +"\" ";
		if(bCodeBase)sObj += "codebase=\""+gsMainCtlURL+'/'+s_cab+".cab#Version="+gxVer_naclp+"\" ";
		sObj += "width="+w+" height="+h+" id='"+id+"'>"+gsParamList+"</object>";
	}else{
		sObj = "<embed id='"+id+"' type='application/x-naclips-plugin' ";
		if(bCodeBase)sObj += "pluginspage='"+gsPluginURL+"' ";
		sObj += "width="+w+" height="+h+">";
	}
	if(id) gsNexPlayer = id;
	return sObj;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function x_burn_naclipsx(w,h,id,arain){
	return x_burn_naclipsx_core(w,h,id,arain,true);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function x_burn_nexfiupx(w,h,id){
	//check parameter validate...
	if(check_param(w,h,id) == false) return;

	add_param("ArainModVer"   ,gxVer_armod);
	add_param("EncoderVersion",gxVer_nexen);
	add_param("EncoderVersionFFM" ,gxVer_enc_ffm);
	add_param("EncoderVersionMEN" ,gxVer_enc_men);
	add_param("Autorain"      ,"astp://"+gsSvr_ipadr+"/nexfiupx");

	var sObj = "";
	if(getBrowser() == 'ie'){
		sObj = "<object classid=\"CLSID:"+gxUid_nexfu+"\" codebase=\""+gsMainCtlURL+"/nexfiupx.cab#Version="+gxVer_nexfu+"\" width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";
	}else{
		add_param("LastProperty" ,1);
		sObj = "<embed id='"+id+"' type='application/x-nexfiup-plugin' pluginspage='"+gsPluginNxURL+"' width="+w+" height="+h+">";
	}
	if(id) gsNexUploader = id;		
	return sObj;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function x_burn_nuploadx(w,h,id){
	//check parameter validate...
	if(check_param(w,h,id) == false) return;

	add_param("ArainModVer"   ,gxVer_armod);
	add_param("EncoderVersion",gxVer_nexen);
	add_param("EncoderVersionFFM" ,gxVer_enc_ffm);
	add_param("EncoderVersionMEN" ,gxVer_enc_men);
	add_param("Autorain"      ,"astp://"+gsSvr_ipadr+"/nuploadx");

	var sObj = "";
	if(getBrowser() == 'ie'){
		sObj = "<object classid=\"CLSID:"+gxUid_nuplx+"\" codebase=\""+gsMainCtlURL+"/nuploadx.cab#Version="+gxVer_nuplx+"\" width="+w+" height="+h+" id="+id+">"+gsParamList+"</object>";
	}
	if(id) gsNexUploader = id;		
	return sObj;
}

// InitEnd Event for Naclips Plugin ///////////////////////
function xvnt_EndInitEx(layer_id){
	//alert(gsNexPlayer);
	if(gsNexPlayer){
		var xPlugin = document.getElementById(gsNexPlayer);
		if(xPlugin) xPlugin.xf_init_vdospace();
	}
	if(gsNexUploader){
		var xPlugin = document.getElementById(gsNexUploader);
		if(xPlugin) xPlugin.xf_init_space();
	}
}

// Update Naclips Plugin ////////////////////////////////////////////////////////////////////////////
function x_update_plugin(docu){
	if(getBrowser() == 'ie') return;
	if(!gsNexPlayer) return;
	var xPlugin = docu.getElementById(gsNexPlayer);
	// Check and Update plugin ////////////
	var rtn = check_update_plugin(docu, gsNexPlayer,gxVer_ncspgn);
	if(rtn > 0)	run_update_plugin(rtn);
	for (i=0;i<gi_plugin_cur_dx ;i++ )	eval("xPlugin."+gz_plugin_param[i][0]+'="'+gz_plugin_param[i][1]+'"');
}

// Update Naclips Plugin ////////////////////////////////////////////////////////////////////////////
function x_update_pluginEx(docu,bUpdate){
	if(getBrowser() == 'ie') return;	
	if(!gsNexPlayer) return;
	var xPlugin = docu.getElementById(gsNexPlayer);
	// Check and Update plugin ////////////
	if(bUpdate){
		var rtn = check_update_plugin(docu, gsNexPlayer,gxVer_ncspgn);
		if(rtn > 0)	run_update_plugin(rtn,docu);
	}
	for (i=0;i<gi_plugin_cur_dx ;i++ )	eval("xPlugin."+gz_plugin_param[i][0]+'="'+gz_plugin_param[i][1]+'"');
}

// Update Nexfi uploader Plugin /////////////////////////////////////////////////////////////////////
function x_update_plugin_xf(docu){
	if(getBrowser() == 'ie') return;
	if(!gsNexUploader) return;
	var xPlugin = docu.getElementById(gsNexUploader);
	// Check and Update plugin ////////////
	var rtn = check_update_plugin(docu, gsNexUploader,gxVer_nxfpgn);
	if(rtn > 0)	run_update_plugin_xf(rtn);	
	for (i=0;i<gi_plugin_cur_dx ;i++ ) eval("xPlugin."+gz_plugin_param[i][0]+'="'+gz_plugin_param[i][1]+'"');
}

// check version & update plugin object /////////////////////////////////////////////////////////////
function check_update_plugin(docu,id,sVersion){	
	var xPlugin = docu.getElementById(id);
	if(xPlugin){		
		var n_new_ver = only_number(sVersion);
		if(!n_new_ver) return -1;
		try {
			var n_obj_ver = only_number(xPlugin.version);
			if(n_obj_ver){
				if(n_new_ver > n_obj_ver) return 2; //object updated. need update
			}else return 1; //never installed. need update
		}catch (e1){
			return 1; //never installed. need update
		}
		return 0; //no need update
	}else return -1;
}

// naclips plugin_update_routine ////////////////////////////////////////////////////////////////////
function run_update_plugin(icd,docu){
	var rtn = false;
	if(agent_lang( ) == "ko"){
		if(icd == 2){
			var sA1 = decodeURI("%EC%97%85%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C%20%EB%90%9C%20%EB%B2%84%EC%A0%84%EC%9D%98%20");
			var sA2 = decodeURI("%EB%82%98%ED%81%B4%EB%A6%BD%EC%8A%A4%20%EB%AF%B8%EB%94%94%EC%96%B4%20%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%B4%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.");
			var sB1 = decodeURI("%EC%A7%80%EA%B8%88%20%EC%83%88%20%EB%B2%84%EC%A0%84%EC%9D%84%20%EC%84%A4%EC%B9%98%ED%95%98%EC%8B%9C%EA%B2%A0%EC%8A%B5%EB%8B%88%EA%B9%8C?");
			rtn = confirm(sA1+sA2+"\n"+sB1);
		}
		else{
			var sA1 = decodeURI("%EB%82%98%ED%81%B4%EB%A6%BD%EC%8A%A4%20%EB%AF%B8%EB%94%94%EC%96%B4%20%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4%20");
			var sA2 = decodeURI("%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%98%EC%96%B4%20%EC%9E%88%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.");
			var sB1 = decodeURI("%EC%A7%80%EA%B8%88%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%84%20%EC%84%A4%EC%B9%98%ED%95%98%EC%8B%9C%EA%B2%A0%EC%8A%B5%EB%8B%88%EA%B9%8C?");
			rtn = confirm(sA1+sA2+"\n"+sB1);
		}
	}else{
		if(icd == 2) rtn = confirm("You need to update Naclips Player Plugin.\nUpdate Plugin now?");
		else         rtn = confirm("You need to install Naclips Player Plugin.\nInstall Plugin now?");
	}
	if(rtn){
		if(!docu)docu=document;
		if(gsCustomUpdate) 
			docu.location.href=gsCustomUpdate;
		else if(giInstallPageDx == 0) 
			docu.location.href="http://www.nexpoly.co.kr/setup_plugin.php";
		else                     
			docu.location.href="http://www.nexpoly.co.kr/swin_setup_plugin.php?vw="+document.body.clientWidth+"&vh="+document.body.clientHeight;
	}
}

// naclips plugin_update_routine //////////////////////////////////////////////////////////////////
function run_update_plugin_xf(icd){
	var rtn = false;
	if(agent_lang( ) == "ko"){
		if(icd == 2){
			var sA1 = decodeURI("%EC%97%85%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C%20%EB%90%9C%20%EB%B2%84%EC%A0%84%EC%9D%98%20");
			var sA2 = decodeURI("%EB%84%A5%EC%8A%A4%ED%8C%8C%EC%9D%B4%20%EC%97%85%EB%A1%9C%EB%8D%94%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%B4%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.");
			var sB1 = decodeURI("%EC%A7%80%EA%B8%88%20%EC%83%88%20%EB%B2%84%EC%A0%84%EC%9D%84%20%EC%84%A4%EC%B9%98%ED%95%98%EC%8B%9C%EA%B2%A0%EC%8A%B5%EB%8B%88%EA%B9%8C?");
			rtn = confirm(sA1+sA2+"\n"+sB1);
		}
		else{
			var sA1 = decodeURI("%EB%84%A5%EC%8A%A4%ED%8C%8C%EC%9D%B4%20%EC%97%85%EB%A1%9C%EB%8D%94%20");
			var sA2 = decodeURI("%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%98%EC%96%B4%20%EC%9E%88%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.");
			var sB1 = decodeURI("%EC%A7%80%EA%B8%88%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%84%20%EC%84%A4%EC%B9%98%ED%95%98%EC%8B%9C%EA%B2%A0%EC%8A%B5%EB%8B%88%EA%B9%8C?");
			rtn = confirm(sA1+sA2+"\n"+sB1);
		}
	}else{
		if(icd == 2) rtn = confirm("You need to update Nexfip Uploader Plugin.\nUpdate Plugin now?");
		else         rtn = confirm("You need to install Nexfip Uploader Plugin.\nInstall Plugin now?");
	}
	if(rtn){
		if(gsCustomUpdate) 
			document.location.href=gsCustomUpdate;
		else if(giInstallPageDx == 0) 
			document.location.href="http://www.nexpoly.co.kr/setup_plugin_xf.php";
		else                     
			document.location.href="http://www.nexpoly.co.kr/swin_setup_plugin_xf.php?vw="+document.body.clientWidth+"&vh="+document.body.clientHeight;
	}
}

////////////////////////////////////////////////////////
function download_plugin( )
{
	var s_setup = "npnclipsv_setup";
	var s_dwnurl="http://115.68.221.112/"+Math.random()+"/app_download/boxycat_files/apps/";
	var useragent = navigator.userAgent;
	if(useragent.indexOf('Chrome/')>0){
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	else{
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	document.location.href = s_dwnurl;
}

////////////////////////////////////////////////////////
function download_plugin_xf( )
{
	var s_setup = "npnexfiupv_setup";
	var s_dwnurl="http://115.68.221.112/"+Math.random()+"/app_download/boxycat_files/apps/";
	var useragent = navigator.userAgent;
	if(useragent.indexOf('Chrome/')>0){
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	else{
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	document.location.href = s_dwnurl;
}

////////////////////////////////////////////////////////
function download_extender( )
{
	var s_setup = "nextender_setup";
	var s_dwnurl="http://115.68.221.112/"+Math.random()+"/app_download/boxycat_files/apps/";
	var useragent = navigator.userAgent;
	if(useragent.indexOf('Chrome/')>0){
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	else{
		if(agent_lang( ) == "ko")
			s_dwnurl += s_setup+".zip";
		else
			s_dwnurl += s_setup+"_en.zip";
	}
	document.location.href = s_dwnurl;
}
