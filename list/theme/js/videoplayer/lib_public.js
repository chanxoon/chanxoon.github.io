	////////////////////////////////////////////////////////
	// Copyright(C) NEXPOLY TECHNOLOGY INC., All Rights Reserved.
	// Public Function Library .............................
	// created at 2002.9.10
	// updated at 2002.10.14 by HG.KIM
	////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////
	function checkNum(keyCode){
		//0:48, 9:57, BS:8, DEL:46 TAB:9, LA:37 RA:39
		//0:96  9:105 (Num PAD)
		if (keyCode == 8 ) return true;
		if (keyCode == 46) return true;
		if (keyCode == 9 ) return true;
		if (keyCode == 35) return true;
		if (keyCode == 36) return true;
		if (keyCode == 37) return true;
		if (keyCode == 39) return true;
		if((keyCode >= 48) && (keyCode <= 57 )) return true;
		if((keyCode >= 96) && (keyCode <= 105)) return true;		
		return false;
	}

	////////////////////////////////////////////////////////
	function checkSpecA(keyCode){
		// 16:shift 32:space 187:+ 189:- 190:. 191:/
		if (keyCode ==  16) return true;
		if (keyCode ==  32) return true;
		if (keyCode == 187) return true;
		if (keyCode == 189) return true;
		if (keyCode == 190) return true;
		if (keyCode == 191) return true;
		return false;
	}

	////////////////////////////////////////////////////////
	function onlyNum(){
		if(checkNum(event.keyCode) == true) return true;
		event.preventDefault();
	}

	////////////////////////////////////////////////////////
	function onlyTelNum(){
		if(checkNum  (event.keyCode) == true) return true;		
		if(checkSpecA(event.keyCode) == true) return true;
		event.preventDefault();
	}

	////////////////////////////////////////////////////////
	function isTelNum(s_num){
		if(!s_num) return false;
		if(myTrim(s_num) == "") return false;
		iStrLen = 0;
		for (var iA = 0 ; iA < s_num.length ; iA++){
			var c_token = s_num.charAt(iA);
			if(c_token == '-' || c_token == '+') continue;
			if(c_token >= '0' && c_token <= '9') continue;
			return false;
		}
		return true;
	}
	
	////////////////////////////////////////////////////////
	function CheckStr(sStr,iLen)
	{
		if(!sStr) return false;
		if(myTrim(sStr) == "") return false;
		iStrLen = 0;
		for (var iA = 0 ; iA < sStr.length ; iA++)
		{
			var cToken = sStr.substring(iA,iA+1);
			if (cToken>'~'){
				iStrLen ++;
			}
			iStrLen ++;
		}
		if (iStrLen>iLen) return false;
		return true;
	}

	////////////////////////////////////////////////////////
	function myRight(sStr,iLen)
	{
		if(!sStr) return "";
		if(myTrim(sStr) == "") return "";
		if (sStr.length <= iLen) return sStr;
		return sStr.substring(sStr.length-iLen,sStr.length);
	}

	////////////////////////////////////////////////////////
	function myTrim(sStr)
	{
		var sRtn="";
		for (var iA = 0 ; iA < sStr.length ; iA++)
		{
			var cToken = sStr.substring(iA,iA+1);
			if (cToken != ' '){
				sRtn = sRtn + cToken;
			}
		}
		return sRtn;
	}

	////////////////////////////////////////////////////////
	function myReplaceX(strA,chrB,chrC){
		var sRtn = "";
		for(var i=0 ; i<strA.length ; i++){
			var cToken = strA.charAt(i);
			if (cToken == chrB){
				sRtn = sRtn + chrC;
			}else{
				sRtn = sRtn + cToken;
			}		
		}
		return sRtn;
	}

	////////////////////////////////////////////////////////
	function myReplaceStr(strA,strB,strC){
		if((strA == "")||(strB == "")) return strA;
		
		var sRtn = strA;
		var iRtn = strA.indexOf(strB);
		if(iRtn > -1){
			var iTmpB = iRtn + strB.length;
			sRtn  = strA.substr(0,iRtn) + strC + strA.substr(iTmpB,strB.length);
		}
		return sRtn;
	}

	////////////////////////////////////////////////////////
	function myTruncatStr(strA,strB){
		if((strA == "")||(strB == "")) return strA;
		
		var sRtn = strA;
		var iRtn = strA.indexOf(strB);
		if(iRtn > -1) sRtn  = strA.substr(0,iRtn)
		return sRtn;
	}

	////////////////////////////////////////////////////////
	function ChkDomainStr(sStr)
	{
		var iLen = sStr.length;
		if(iLen < 3) return false;
		sStr = sStr.toLowerCase();

		if(sStr.substring(iLen-3,iLen)==".kr")    return true;
		if(sStr.substring(iLen-3,iLen)==".pk")    return true;
		if(sStr.substring(iLen-3,iLen)==".jp")    return true;
		if(sStr.substring(iLen-3,iLen)==".cn")    return true;
		if(sStr.substring(iLen-3,iLen)==".tv")    return true;

		if(sStr.substring(iLen-4,iLen)==".net")   return true;
		if(sStr.substring(iLen-4,iLen)==".com")   return true;
		if(sStr.substring(iLen-4,iLen)==".edu")   return true;
		if(sStr.substring(iLen-4,iLen)==".biz")   return true;
		if(sStr.substring(iLen-4,iLen)==".org")   return true;
		if(sStr.substring(iLen-4,iLen)==".gov")   return true;

		if(sStr.substring(iLen-5,iLen)==".info")  return true;
		/*
		if(sStr.substring(iLen-6,iLen)==".co.kr") return true;
		if(sStr.substring(iLen-6,iLen)==".or.kr") return true;
		if(sStr.substring(iLen-6,iLen)==".pe.kr") return true;
		if(sStr.substring(iLen-6,iLen)==".ac.kr") return true;
		if(sStr.substring(iLen-6,iLen)==".ne.kr") return true;
		if(sStr.substring(iLen-6,iLen)==".go.kr") return true;
		*/
		return false;
	}

	////////////////////////////////////////////////////////
	function ChkEmailStr(sEmail)
	{
		sEmail = sEmail.toLowerCase();
		if(sEmail.indexOf('@') > -1 && ChkDomainStr(sEmail) == true) return true;
		return false;
	}

	////////////////////////////////////////////////////////
	function ChkHanMail(sEmail)
	{
		var iLen = sEmail.length;
		sEmail = sEmail.toLowerCase();
		if(sStr.substring(iLen-String("@hanmail.com").length,iLen)=="@hanmail.com") return true;
		if(sStr.substring(iLen-String("@hanmail.net").length,iLen)=="@hanmail.net") return true;
		if(sStr.substring(iLen-String("@daum.net"   ).length,iLen)=="@daum.net"   ) return true;
		return false;
	}

	////////////////////////////////////////////////////////
	function getStripLocation(surl,skey)
	{
		var iswap = surl.indexOf(skey);
		if(iswap > -1) surl = surl.substring(0,iswap);
		return surl;
	}

	////////////////////////////////////////////////////////
	function getNewLocation(surl)
	{
		surl = getStripLocation(surl,"&swap=")
		surl = getStripLocation(surl,"?swap=")
		var now = new Date();
		if(surl.indexOf('?')>-1) return surl+"&swap="+now.getTime();
		else                     return surl+"?swap="+now.getTime();
	}	
	//window.document.onkeydown=fnKeyDownTrap;
	//function fnKeyDownTrap(){
	//	window.status = window.status + event.keyCode;
	//	event.returnValue=false;
	//}

	////////////////////////////////////////////////////////
	function getRealLength(str)
	{
	  return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}

	////////////////////////////////////////////////////////
	function bIsCheckIDC(cA)
	{
		var bOk = true;
		if(cA == '-' || cA == '_') bOk = true;
		else{
			if(cA <  '0') bOk = false;
			if(cA >  '9') bOk = false;
			if(cA >= 'A') bOk = true;
			if(cA >  'Z') bOk = false;
			if(cA >= 'a') bOk = true;
			if(cA >  'z') bOk = false;
		}
		return bOk;
	}

	////////////////////////////////////////////////////////
	function getBrowserPub( ){	//ie,fx,gc
		if(navigator.appName == "Microsoft Internet Explorer") return 'ie';
		if(navigator.userAgent.indexOf('Trident/')>0) return 'ie';
		if(navigator.userAgent.indexOf('Chrome/' )>0) return 'gc';
		return 'fx';
	}
	
	////////////////////////////////////////////////////////
	/*
	//function getIEver( )
	{
		var appname = navigator.appName;
		var useragent = navigator.userAgent;
		if(appname == "Microsoft Internet Explorer"){
			if     (useragent.indexOf('MSIE 5' )>0) return 5;
			else if(useragent.indexOf('MSIE 6' )>0) return 6;
			else if(useragent.indexOf('MSIE 7' )>0) return 7;
			else if(useragent.indexOf('MSIE 8' )>0) return 8;
			else if(useragent.indexOf('MSIE 9' )>0) return 9;
			else if(useragent.indexOf('MSIE 10')>0) return 10;
			else if(useragent.indexOf('MSIE 11')>0) return 11;
			else return 4;
		}
		return 0;
	}
	*/

	// String Buffer Object ////////////////////////////////////////////////////////////
	var StringBuffer = function()
	{ this.buffer = new Array(); }

	StringBuffer.prototype.append=function(str)
	{ this.buffer[this.buffer.length] = str; }

	StringBuffer.prototype.toString = function()
	{ return this.buffer.join(""); }
	// String Buffer Object ////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////
	function setToggleButton(obArray,sA,sB){
		for(var i=0;i<2;i++) obArray[i] = new Image();
		obArray[0].src = sA;
		obArray[1].src = sB;
	}

	// 기능   : 한글이든 영문이든 제대로 갯수 체크를 해준다.
	//////////////////////////////////////////////////////////////
	function getByteLength(s){
	   var len = 0;
	   if ( s == null ) return 0;
	   for(var i=0;i<s.length;i++){
		  var c = escape(s.charAt(i));
		  if ( c.length == 1 ) len ++;
		  else if ( c.indexOf("%u") != -1 ) len += 2;
		  else if ( c.indexOf("%") != -1 ) len += c.length/3;
	   }
	   return len;
	}

	//////////////////////////////////////////////////////////////
	function format_number(iNum,cPrefix,iLength){
		var sHeader = '';
		for (var i=0;i<30;i++) sHeader += cPrefix;
		sHeader += iNum;
		return sHeader.slice(-1*iLength);
	}

	//////////////////////////////////////////////////////////////
	function sec2tmstr(i_sec,b_show_hour){
		i_sec = parseInt(i_sec);
		var iHour = parseInt(i_sec / (60*60));
		i_sec    -= (iHour*60);

		var iMin  = parseInt(i_sec / 60);
		i_sec    -= (iMin *60);

		return (b_show_hour?(format_number(iHour,'0',2)+':'):'')+format_number(iMin,'0',2)+':'+format_number(i_sec,'0',2);
	}

	//////////////////////////////////////////////////////////////
	function stop_prop(e) {
		if (e && e.stopPropagation) e.stopPropagation();
		return false;
	}

	//////////////////////////////////////////////////////////////
	function getFileNameOnPath(s_path, c_parser){
		if(!c_parser) c_parser = '\\';
		var i_pt = s_path.lastIndexOf(c_parser);
		if(i_pt >= 0) return s_path.substring(i_pt+1);
		return s_path;
	}

	/////////////////////////////////////////////////////////////////////
	function getFileSize(n_size){
		if(n_size < 1024) return n_size+"B";
		n_size /= 1024;
		if(n_size < 1024) return parseInt(n_size)+"KB";
		n_size /= 1024;
		if(n_size < 1024) return parseInt(n_size)+"MB";
		n_size /= 1024;
		if(n_size < 1024) return parseInt(n_size)+"GB";
		n_size /= 1024;
		return parseInt(n_size)+"TB";
	}
	