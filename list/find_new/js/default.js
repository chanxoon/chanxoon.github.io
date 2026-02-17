    
var findDifferentimg = {
    "imgL":null,
	"imgR":null,
    "imgLtrue":null,
    "imgLclear":null,
    "imgLlink":null,
    "imgLlink2":null,
    "imgLlink3":null,
	"canvasL":null,
	"canvasR":null,
	"divClickL":null,
	"divClickR":null,
	"stageTitle":null,
    "stageDesc":null,
    "slideTitle":null,
    "slideList":null,
    "slideDesc":null,
    "slideTitle_desc":null,
    "slideDesc_desc":null,
    "slideList_desc":null,
    "imgLlink_desc":null,
    "imgLtrue_desc":null,
	"gameTimer":null,
	"timer":null,
	"stageInfo":null,
    "divL":null,
    "figureL":null,
    "stagecount":null,
	"stageInfos":[],
	"stageInfosIdx":-1,
	"contnets":null,
	"stat":0,
	"isDebug":false,
	"preloadImgsCallback":null,
	"init":function(){
		this.initIds();
		this.setEventImgLR();
	},
	"initIds":function (){
		this.stageTitle = $("#stageTitle").get(0);
        this.stageDesc = $("#stageDesc").get(0);
        this.stage = $("#stage").get(0);
        this.slideTitle = $("#slideTitle").get(0);
        this.slideList = $("#slideList").get(0);
        this.slideDesc = $("#slideDesc").get(0);
		this.gameTimer = $("#gameTimer").get(0);
		this.imgL = $("#imgL").get(0);
		this.imgR = $("#imgR").get(0);
        this.imgLtrue = $("#imgLtrue").get(0);
        this.imgLclear = $("#imgLclear").get(0);
        this.imgLlink = $("#imgLlink").get(0);
        this.imgLlink2 = $("#imgLlink2").get(0);
        this.imgLlink3 = $("#imgLlink3").get(0);
		this.canvasL = $("#canvasL").get(0);
		this.canvasR = $("#canvasR").get(0);
		this.divClickL = $("#divClickL").get(0);
		this.divClickR = $("#divClickR").get(0);
		this.searchCnt = $("#searchCnt").get(0);
		this.goalCnt = $("#goalCnt").get(0);
		this.contnets = $("#contnets").get(0);
        this.divL = $("#divL").get(0);
        this.figureL = $("#figureL").get(0);
        this.stagecount = $("#stagecount").get(0);
        this.slideTitle_desc = $("#slideTitle-desc").get(0);
        this.slideDesc_desc = $("#slideDesc-desc").get(0);
        this.slideList_desc = $("#slideList-desc").get(0);
        this.imgLlink_desc = $("#imgLlink-desc").get(0);
        this.imgLtrue_desc = $("#imgLtrue-desc").get(0);
		
		this.setStat(0);
		$(this.imgL).bind("load",{"std":this},function(evt){
			evt.data.std.onloadImgLR(this);
		});
		$(this.imgR).bind("load",{"std":this},function(evt){
			evt.data.std.onloadImgLR(this);
		});
	},
    "setStat":function(stat){
		this.stat = stat;
		setTimeout(
			function(thisC){
				return function(){
					console.log("stat:"+thisC.stat);
					thisC.contnets.className = "stat-"+thisC.stat;
				};
			}(this),0);
	},
	/* 초기이미지로 돌린다.(게임 끝났을 때 동작)	*/
	"intImgs":function(){
		var fn = function(thisC){
			return function(){
				thisC.imgL.stat = "";
				thisC.imgR.stat = "";
				thisC.imgL.src = "./img/gate-L.png";
				thisC.imgR.src = "./img/gate-R.png";
				thisC.resetCanvas();
				$(thisC.searchCnt).text("0");
				$(thisC.goalCnt).text("0");
			};
		}(this);
		setTimeout(fn,0);
	},
    "preloadImgs":function(callback){
		this.setStat(1);
		this.imgL.stat = "init0";
		this.imgR.stat = "init0";
		this.imgL.src = "./img/loading-L.png";
		this.imgR.src = "./img/loading-R.png";
		if(callback){ this.preloadImgsCallback = callback;}
	},
    "loadImgs":function(){
		this.imgL.stat = "load0";
		this.imgR.stat = "load0";
		this.imgL.src = this.stageInfo.urlImgL;
		this.imgR.src = this.stageInfo.urlImgR;
	},
    "getImgScale":function(){
		var scale = this.imgL.naturalWidth/this.imgL.width;
		return scale;
	},
    "setStageInfos":function(stageInfos){
		this.stageInfos = stageInfos;
		this.stageInfosIdx = 0;
	},
    "setStageInfo":function(stageInfo){ //단일 동작, 옛날버전 호환용
		this.setStageInfos([stageInfo]);
	},
    "loadStageInfo":function(stageInfo){
        //this.loadImgs();
		this.resetCanvas();
		this.stageInfo = stageInfo;
		this.imgL.src = this.stageInfo.urlImgL;
		this.imgR.src = this.stageInfo.urlImgR;
        this.imgLtrue.src = this.stageInfo.urlImgLtrue;
        this.imgLclear.src = this.stageInfo.urlImgLtrue;
        this.imgLlink.href = this.stageInfo.urlImgLlink;
        this.imgLlink2.href = this.stageInfo.urlImgLlink;
        this.imgLlink3.href = this.stageInfo.urlImgLlink;
        this.imgLtrue_desc.src = this.stageInfo.urlImgLtrue;
        this.imgLlink_desc.href = this.stageInfo.urlImgLlink;
        
		$(this.stageTitle).text(stageInfo.stageTitle);
        $(this.stageDesc).text(stageInfo.stageDesc);
        $(this.stage).text(stageInfo.stage);
        $(this.slideTitle).text(stageInfo.slideTitle);
        $(this.slideList).text(stageInfo.slideList);
        $(this.slideDesc).text(stageInfo.slideDesc);
        $(this.divL).text(stageInfo.divL);
        $(this.figureL).text(stageInfo.figureL);
        $(this.stagecount).text(stageInfo.stagecount);
        $(this.gameTimer).text(stageInfo.gameTimer);
        $(this.slideTitle_desc).text(stageInfo.slideTitle);
        $(this.slideDesc_desc).text(stageInfo.slideDesc);
        $(this.slideList_desc).text(stageInfo.slideList);
        
		this.reset();
	},
    "onloadImgLR":function (img){
		if(img.stat=="load0"){
			img.stat="load1";
		}else if(img.stat=="init0"){
			img.stat="init1";
		}

		if(this.imgL.stat=="load1" && this.imgR.stat=="load1" && this.imgL.complete && this.imgR.complete){
			this.canvasL.width = this.canvasR.width = this.imgL.naturalWidth;
			this.canvasL.height = this.canvasR.height = this.imgL.naturalHeight;
			this.divClickL.style.width = this.divClickR.style.width = this.canvasL.width+"px";
			//this.divClickL.style.height = this.divClickR.style.height = this.canvasL.height+"px";
			this.diffImgs();
			this.checkClear();
			//console.log(this.imgL.src+","+this.imgR.src);
			this.imgL.stat = this.imgR.stat = "load2";
			this.gamestart();
		}else if(this.imgL.stat=="init1" && this.imgR.stat=="init1"	&& this.imgL.complete && this.imgR.complete){
			if(this.preloadImgsCallback){
				this.preloadImgsCallback();
			}
		}
	},
    "reset":function(){
		if(!this.stageInfo) return false;//스테이지가 로드된 후에만 동작
		this.resetCanvas();
		this.preloadImgs(function(thisC){
            return function(){
                thisC.loadImgs();
            };
        }(this));
        $("#info").removeClass("tslide");
        $(".bg2").removeClass("on");
        $(".pause-bg").fadeOut("fast");
        $(".description-pop").fadeIn("slow");
	},
    "start":function(){
		this.stageInfosIdx = 0;
		this.startGame();
        stageInfos.shuffle();
        $("#info").removeClass("tslide");
        $(".bg2").removeClass("on");
        $(".bg").fadeOut("fast");
	},
    "solve":function(){
		if(!this.stageInfo) return false;//스테이지가 로드된 후에만 동작
		for(var i=0,m=this.stageInfo.solutions.length;i<m;i++){
			this.stageInfo.solutions[i].checked=true;
		}
		this.drawCanvasCheckedPos();
		this.checkClear();
	},
    "startGame":function(){
		if(this.stageInfos.length > this.stageInfosIdx){
			this.loadStageInfo(this.stageInfos[this.stageInfosIdx]);
		}else{
			this.gameclear(); //게임 클리어
		}
	},
	//게임을 성공적으로 완료
	"gameclear":function(){
		var ts = [];
		var sumT = 0;
		for(var i=0,m=this.stageInfos.length;i<m;i++){
		var si = this.stageInfos[i];
			ts.push("Stage "+(i+1)+" : "+si.stageTitle+" : "+si.clearTime+" sec");
			if(si.clearTime>0){
				sumT+=si.clearTime;
			}
		}
		ts.push("Total : "+sumT+" sec");
        
        this.stopTimer();
        $(this.stageTitle).text("STAGE CLEAR");
        $(this.stageDesc).text("축하합니다. 모든 스테이지를 클리어 하였습니다");
        
		//this.gameover("축하합니다. 모든 스테이지를 클리어 하였습니다,\n" /*+ts.join("\n")*/)
		//$(this.stageTitle).text("## CLEAR ##");
	},
    "gamestart":function(){
		this.stopTimer();
		//alert("GAME START\n stage "+(this.stageInfosIdx+1)+" : "+this.stageInfo.stageTitle);
        this.setStat(2);
        this.startTimer();
        $(".bar").show();
        $(".pause-bg .inner .pause-box .play-btn").show();
        
        /********** 카운트 효과음 **********/
        var count = document.getElementById("count");
        if (count.paused) { 
            count.play(); 
            count.volume = 0.0;
        }else{ 
            count.pause(); 
            count.currentTime = 0;
        }
        /********** 카운트 효과음 **********/
	},
    "ongameover":function(){
        $("#sectionImgs").click(function(e){
            $(".wrong").css("opacity","0");
        });
	},
    "gameover":function(msg){
        //alert("## GAME OVER ##\n"+msg);
		this.setStat(0);
		this.stopTimer();
		this.intImgs();
		this.ongameover();
        $(".bar").hide();
        $(".rain").fadeIn("fast");
        $(".pause-bg .inner .pause-box .play-btn").hide();
        
        /* 게임오버 팝업 */
        $(".stage-pop").fadeIn("fast");
        $(".bg").fadeIn("fast");
        
        /* 닫기 버튼 */
        $(".close").click(function(){
            $(".stage-pop").fadeOut("fast");
            $(".bg").fadeOut("fast");
            $(".rain").fadeOut("fast");
        });
        
        /* 다시하기 버튼 */
        $(".reStart").click(function(){
            $(".stage-pop").fadeOut("fast");
            $(".bg").fadeOut("fast");
            $(".rain").fadeOut("fast");
            
            $(".count-pop span").addClass("Count1");
            setTimeout(function() {
                $(".count-pop span").removeClass("Count1");
            }, 2000);
        });
        
        /* 포커스/반전모드 해제 */
        $("#divL").removeClass("horizontal");
        $("#figureL").removeClass("focus");
        
        /* 레인 효과 */
        var nbDrop = 158; 
        function randRange( minNum, maxNum) {
          return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        }

        function createRain() {
          for( i=1;i<nbDrop;i++) {
          var dropLeft = randRange(0,3000);
          var dropTop = randRange(-1000,1400);

          $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
          $('#drop'+i).css('left',dropLeft);
          $('#drop'+i).css('top',dropTop);
          }
        }
        createRain();
        /* 레인효과 end */
        
        /********** 게임오버 효과음 **********/
        var gover = document.getElementById("gameover");
        if (gover.paused) { 
            gover.play(); 
            gover.volume = 1.0;
        }else{ 
            gover.pause(); 
            gover.currentTime = 0;
        }
        /********** 게임오버 효과음 **********/
	},
    "stageclear":function(msg){
		this.stageInfo.clearTime = this.gameTimer.max-this.gameTimer.value;
		//this.stageInfosIdx++;
		//this.startGame();
        this.stopTimer();
        
        /* 스테이지 클리어 팝업 */
        $(".clear-pop").fadeIn("fast");
        $("#confetti-container").fadeIn();
        $(".bg").fadeIn("fast");
        $(".rain").hide();
        $(".pause-bg .inner .pause-box .play-btn").hide();
        
        /* 팝업 닫기 버튼 */
        $(".close").click(function(){
            $(".clear-pop").fadeOut("fast");
            $("#confetti-container").fadeOut().empty();
            $(".bg").fadeOut("fast");
        });
        
        /* 재도전 버튼 */
        $(".reStart").click(function(){
            $(".clear-pop").fadeOut("fast");
            $("#confetti-container").fadeOut().empty();
            $(".bg").fadeOut("fast");
            
            $(".count-pop span").addClass("Count1");
            setTimeout(function() {
                $(".count-pop span").removeClass("Count1");
            }, 2000);
        });
        
        /* 다른그림하기 버튼 */
        $(".otherStart").click(function(){
            $(".clear-pop").fadeOut("fast");
            $("#confetti-container").fadeOut().empty();
            //$(".bg").fadeOut("fast");
        });

        /* 꽃가루 이벤트 */
        var vw = $( window ).width(),
            vh = $(window).height(),
            num = vw/20;

        num = Math.max(num, 160);

        function random(high){
          return Math.random() * high;
        }
        for(var i = 0; i<= num; i++){
          $("#confetti-container").append("<div class='confetti' style='background-color: rgb(" + Math.round(random(155)) + "," + Math.round(random(155)) + "," + Math.round(random(155)) + ");'></div>");
        }
        var $confetti = $(".confetti"), 
            tl = new TimelineMax();

        tl.add("start");
        $confetti.each(function(index, element){
          var dot = $(this), 
              dotTL = new TimelineMax();

          dotTL.set(dot, {
            x: random(vw),
            y: random(-vh) - 10,
            scale: random(1) + 1,
            opacity: random(1),
            transformStyle:"preserve-3d"
          });

          tl.to(dot, 6, {
            y: vh + 100,
            ease:Sine.easeInOut,
            repeat:-1,
            opacity: random(2),
            delay: -6,
            scale: random(1) + 1
          }, random(6), "start");

          tl.to(dot, 2,{
           x:"+=" + random(100), 
           repeat:-1,
           yoyo:true,
           ease:Sine.easeInOut
          }, random(2), "start");

          tl.to(dot, random(4),{
           repeat:-1,
           yoyo:true,
           rotationX: random(270),
           rotationY: random(270), 
           ease:Sine.easeInOut
          }, random(2), "start");
        });
        /* 꽃가루 이벤트 end */
        
        /********** 게임성공 효과음 **********/
        var fanffare = document.getElementById("fanffare");
        if (fanffare.paused) { 
            fanffare.play(); 
            fanffare.volume = 1.0;
        }else{ 
            fanffare.pause(); 
            fanffare.currentTime = 0;
        }
        /********** 게임성공 효과음 **********/
	},
    /* 기본값 스타트 */
    "startTimer":function(){
        /********** 스피드모드 **********/
        var Speed = $("#stage").text();
        var str = "SPEED";
        if(Speed.indexOf(str) != -1) {
            //alert("스피드"); 
            var limitTime = Math.min(Math.max(this.stageInfo.solutions.length*10,10),20);
            this.gameTimer.max = limitTime;
        } else {
            //alert("기본값");
            var limitTime2 = Math.min(Math.max(this.stageInfo.solutions.length*50,10),150);
            this.gameTimer.max = limitTime2;
        }
        /********** 스피드모드 **********/
        
        var millisecondsToWait = 31000; //타이머bar 30초 딜레이
        this.gameTimer.value = this.gameTimer.max;
        this.stageInfo.startTime = (new Date).getTime() + millisecondsToWait;
        
        /* 일시정지 팝업 닫기 */
        $(".pause-bg").fadeOut("fast");
        
        /* 카운트 팝업 열기 */
        $(".count-pop").fadeIn("fast"); 
        
        /* 카운트다운 팝업 */
        var num = 30; // 카운트다운 30초
        var myVar;
        function time(){
            myVar = setInterval(alertFunc, 1000); 
        }
        time();
        
        function alertFunc() {
            var min = num / 60; 
            min = Math.floor(min);

            var sec = num - (60 * min);
            //console.log(min);
            console.log(sec);

            var $input = $(".Count").text(sec);

            if(num === 0){
                clearInterval(myVar);
                $(".count-pop").fadeOut("slow");
                $(".description-pop").fadeOut("slow");
            }
            $(".Start").click(function(){
                clearInterval(myVar);
            });
            $(".otherStart").click(function(){
                clearInterval(myVar);
                $(".count-pop span").addClass("Count1");
                setTimeout(function() {
                    $(".count-pop span").removeClass("Count1");
                }, 2000);
            });
            num--;
        }

		this.timer = setInterval(
			function(thisC){
				return function(){
					thisC.inertvalTimer();
                    
                    /* 게임타이머 넘버 */
                    var TimerNum = document.querySelector("#gameTimer").value;
                    document.querySelector(".Num").innerText = TimerNum;
				};
			}(this),500);
	},
    /* 일시정지 후 리스타트 */
    "restartTimer":function(){
        /********** 스피드모드 **********/
        var Speed = $("#stage").text();
        var str = "SPEED";
        if(Speed.indexOf(str) != -1) {
            //alert("스피드"); 
            var limitTime = Math.min(Math.max(this.stageInfo.solutions.length*10,10),21);
            this.gameTimer.max = limitTime;
        } else {
            //alert("기본값");
            var limitTime2 = Math.min(Math.max(this.stageInfo.solutions.length*50,10),150);
            this.gameTimer.max = limitTime2;
        }
        /********** 스피드모드 **********/
    
        $(".pause-bg").fadeOut("fast");
        
        this.timer = setInterval(
			function(thisC){
				return function(){
					thisC.reinertvalTimer();
                    
                    /* 게임타이머 넘버 */
                    var TimerNum = document.querySelector("#gameTimer").value;
                    document.querySelector(".Num").innerText = TimerNum;
				};
			}(this),1000);
	},
    /* 바로 스타트 */
    "nowstartTimer":function(){
        $(".pause-bg").fadeOut("fast");
        $(".count-pop").fadeOut("slow");
        $(".description-pop").fadeOut("slow");
        var millisecondsToWait = 0;
        this.gameTimer.value = this.gameTimer.max;
        this.stageInfo.startTime = (new Date).getTime() + millisecondsToWait; //시작카운트 0초 딜레이
	},
    /* 스탑 타이머 */
    "stopTimer":function(){
		if(this.timer){
			clearInterval(this.timer);
		}
		this.timer = null;
	},
    /* 기본값 타이머 */
    "inertvalTimer":function(){
		var t = Math.floor(((new Date).getTime()-this.stageInfo.startTime)/1000);
		var sec = this.gameTimer.max-t
		//alert(t+":"+sec+":"+this.stageInfo.limitTime);
		//var p = (()/this.stageInfo.limitTime)*100; //퍼센트로 바꾼다.
		//alert(t2);
		if(sec<=0){
			this.drawTimer(0);
			this.gameover("TIME OUT!");
		}else{
			//this.gameTimer.value = sec;
			this.drawTimer(sec);
		}
	},
    /* 일시정지 후 리스타트 타이머 */
    "reinertvalTimer":function(){
        var sec = this.gameTimer.value - 1;
        this.gameTimer.value = Math.floor(((new Date).getTime()-this.stageInfo.startTime)/1000);
        if(sec<=0){
			this.drawTimer(0);
			this.gameover("TIME OUT!");
		}else{
			//this.gameTimer.value = sec;
			this.drawTimer(sec);
		}
	},
    "drawTimer":function(p){
		this.gameTimer.value = p;
	},
    "setEventImgLR":function(){
		$(this.divClickL).bind("mousedown",{"std":this},function(evt){
			evt.data.std.onclickImgLR(evt);
			evt.stopPropagation();
			});
		$(this.divClickR).bind("mousedown",{"std":this},function(evt){
			evt.data.std.onclickImgLR(evt);
			evt.stopPropagation();
			});
		$(this.divClickL).bind("touchstart",{"std":this},function(evt){
			evt.data.std.onclickImgLR(evt);
			evt.stopPropagation();
			});
		$(this.divClickR).bind("touchstart",{"std":this},function(evt){
			evt.data.std.onclickImgLR(evt);
			evt.stopPropagation();
			});
        
        /* // 모바일에서 경고
		$(document).bind("touchmove",function(evt){
			evt.stopPropagation();
			evt.preventDefault();
			evt.cancelBubble = true;
			return false;
			});
		$(document).bind("mousedown",function(evt){
			evt.stopPropagation();
			evt.preventDefault();
			evt.cancelBubble = true;
			return false;
			});
        */
	},
    "onclickImgLR":function(evt){
		if(!this.stageInfo) return false;//스테이지가 로드된 후에만 동작
		var target = evt.target;
		var x = evt.offsetX!==undefined?evt.offsetX:evt.pageX-$(evt.target).offset().left; //FF에서는 offsetX,Y가 없다.
		var y = evt.offsetY!==undefined?evt.offsetY:evt.pageY-$(evt.target).offset().top;

		this.checkAnswer(x,y);
	},
	/* return : 0:못찾음, 1:찾음, 2:중복찾음	*/
	"checkAnswer":function(x,y){
		var getImgScale = this.getImgScale();
		var x1 = Math.round(x*getImgScale);
		var y1 = Math.round(y*getImgScale);
		if(!this.stageInfo && !this.stageInfo.solutions){
			return false;
		}
		var sls = this.stageInfo.solutions;
		var isCheck = 0;
		var info = null;
        
		for(var i=0,m = sls.length;i<m && !isCheck;i++){
			//if(sls[i].checked){continue;}
			var poss = sls[i].poss;

			if(sls[i].checked){
				continue; //이미 체크된건 체크 안함.
			}
			for(var i2=0,m2=poss.length;i2<m2 && !isCheck;i2++){
				var pos = poss[i2];
				if(this.isXyInPos(x1,y1,pos)){
					if(sls[i].checked){
						isCheck = 2;
					}else{
						isCheck = 1;
						sls[i].checked = true;
                        
                        /********** 스피드모드 **********/
                        var Speed = $("#stage").text();
                        var str = "SPEED";
                        if(Speed.indexOf(str) != -1) {
                            //alert("스피드"); 
                            $("#gameTimer").val(21);
                            this.stageInfo.startTime = (new Date).getTime();
                        } else {
                            //alert("기본값");
                        }
                        /********** 스피드모드 **********/
                        
					}
					info = sls[i];
				}else{
					
				}
			}
		}
		if(isCheck==1){
			this.drawCanvasCheckedPos();
		}
		this.showClickMsg(isCheck,x1,y1,info);
		return isCheck;
	},
    "showClickMsg":function(isCheck,x,y,info){
		var msg = "";
		switch(isCheck){
            case 1:msg=""+info.title+"을 찾았어요!";break;
			case 2:msg="이미 찾은 부분이네요.";break;
			case 0:;break;
			default:msg="여기가 아니에요!";break;
		}
		//alert(msg);
        
        if(isCheck==1){
			this.drawCanvasCheckedPos();
            /* 틀린그림 클릭시 O CHECK */
            $("#sectionImgs").click(function(e){
                var sWidth2 = window.innerWidth;
                var sHeight2 = window.innerHeight;
                var oWidth2 = $(".bubbly").width();
                var oHeight2 = $(".bubbly").height();
                var divLeft2 = e.clientX + -30;
                var divTop2 = e.clientY + -30;
                if( divLeft2 + oWidth2 > sWidth2 ) divLeft2 -= oWidth2;
                if( divTop2 + oHeight2 > sHeight2 ) divTop2 -= oHeight2;
                if( divLeft2 < 0 ) divLeft2 = 0;
                if( divTop2 < 0 ) divTop2 = 0;    
                
                $(".wrong").hide().css({
                "opacity":0,
                "display":"none",
                "top": "-999px",
                "left": "-999px",
                "position": "absolute"
                }).hide(0).removeClass("animate2");
                $(".bubbly2").hide().css({
                "opacity":0,
                "display":"none",
                "top": "-999px",
                "left": "-999px",
                "position": "absolute"
                }).hide(0).removeClass("animate2");
                
                $(".bubbly").css({
                    "top": divTop2,
                    "left": divLeft2,
                    "position": "fixed"
                }).show().css("opacity","1").addClass("animate");
                
            });
            
            setTimeout(function() {
                $(".bubbly").fadeOut("fast");
            }, 400);
            
            /********** 성공 효과음 **********/
            var succ = document.getElementById("succ");
            if (succ.paused) { 
                succ.play(); 
                succ.volume = 1.0;
            }else{ 
                succ.pause(); 
                succ.currentTime = 0;
            }
            /********** 성공 효과음 **********/
            
		} else if(isCheck==0) {
            /* 틀린그림 클릭시 X CHECK */
            $("#sectionImgs").click(function(e){
                var sWidth = window.innerWidth;
                var sHeight = window.innerHeight;
                var oWidth = $(".wrong").width();
                var oHeight = $(".wrong").height();
                var divLeft = e.clientX + -6;
                var divTop = e.clientY + -35;
                if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
                if( divTop + oHeight > sHeight ) divTop -= oHeight;
                if( divLeft < 0 ) divLeft = 0;
                if( divTop < 0 ) divTop = 0;

                var sWidth3 = window.innerWidth;
                var sHeight3 = window.innerHeight;
                var oWidth3 = $(".bubbly2").width();
                var oHeight3 = $(".bubbly2").height();
                var divLeft3 = e.clientX + -30;
                var divTop3 = e.clientY + -30;
                if( divLeft3 + oWidth3 > sWidth3 ) divLeft3 -= oWidth3;
                if( divTop3 + oHeight3 > sHeight3 ) divTop3 -= oHeight3;
                if( divLeft3 < 0 ) divLeft3 = 0;
                if( divTop3 < 0 ) divTop3 = 0;
                
                $(".bubbly").hide().css({
                "opacity":0,
                "display":"none",
                "top": "-999px",
                "left": "-999px",
                "position": "absolute"
                }).hide(0).removeClass("animate");
            
                $(".wrong").css({
                    "top": divTop,
                    "left": divLeft,
                    "position": "absolute"
                }).show().css("opacity","1");
                
                $(".bubbly2").css({
                    "top": divTop3,
                    "left": divLeft3,
                    "position": "fixed"
                }).show().css("opacity","1").addClass("animate2");
                
            });

            setTimeout(function() {
                $(".wrong").fadeOut("fast");
                $(".bubbly2").fadeOut("fast");
            }, 400);
            
            /********** 실패 효과음 **********/
            var fail = document.getElementById("fail");
            if (fail.paused) { 
                fail.play(); 
                fail.volume = 1.0;
                
            }else{ 
                fail.pause(); 
                fail.currentTime = 0;
            }
            /********** 실패 효과음 **********/
            
            /* 리사이즈 */
            $(function(){
                $(window).resize(function() {
                    var width = $(window).width();
                    /* width <= 967 */
                    if (width<=967) { 
                        $("#sectionImgs").click(function(e){
                            var sWidth = window.innerWidth;
                            var sHeight = window.innerHeight;
                            var oWidth = $(".wrong").width();
                            var oHeight = $(".wrong").height();
                            var divLeft = e.clientX + -3;
                            var divTop = e.clientY + -20;
                            if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
                            if( divTop + oHeight > sHeight ) divTop -= oHeight;
                            if( divLeft < 0 ) divLeft = 0;
                            if( divTop < 0 ) divTop = 0;

                            $(".wrong").css({
                                "top": divTop,
                                "left": divLeft,
                                "position": "absolute"
                            }).show().css("opacity","1");

                            setTimeout(function() {
                                $(".wrong").fadeOut("fast");
                            }, 400);
                        });
                    }
                    /* width >= 1400 */
                    if (width>=1400) {
                        $("#sectionImgs").click(function(e){
                            var sWidth = window.innerWidth;
                            var sHeight = window.innerHeight;
                            var oWidth = $(".wrong").width();
                            var oHeight = $(".wrong").height();
                            var divLeft = e.clientX + -8;
                            var divTop = e.clientY + -48;
                            if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
                            if( divTop + oHeight > sHeight ) divTop -= oHeight;
                            if( divLeft < 0 ) divLeft = 0;
                            if( divTop < 0 ) divTop = 0;

                            $(".wrong").css({
                                "top": divTop,
                                "left": divLeft,
                                "position": "absolute"
                            }).show().css("opacity","1");

                            setTimeout(function() {
                                $(".wrong").fadeOut("fast");
                            }, 400);
                        });
                    }
                });
            $(window).resize();
            });
        }
        
		if(this.checkClear()){
			//alert();
			//this.gameover("축하합니다.\n스테이지 클리어!");
			this.stageclear("축하합니다.\n스테이지 클리어!");
		}
		if(this.isDebug){
			var str = "click: x="+x+",y="+y;
			console.log(str);
		}
	},
    "isXyInPos":function(x,y,pos){
		var x2 = pos["x"];
		var y2 = pos["y"];
		if(pos["type"]=="circle"){
			var r = Math.sqrt( Math.pow(x2-x,2)+Math.pow(y2-y,2));
			if(r <= pos["r"]){
				return true;
			}

		}else if(pos["type"]=="rect"){
			var x3 = x2+pos["w"];
			var y3 = y2+pos["h"];
			if(x2<=x && x<=x3 && y2<=y && y<=y3){
				return true;
			}
		}else{
			alert("ERROR : isXyInPos()");
		}
		return false;
	},
    "resetCanvas":function(canvas){
		if(canvas){
			canvas.width = canvas.width;
		}else{
			var canvasL = this.canvasL;
			canvasL.width = canvasL.width;
			this.syncCanvas();
		}
	},
    "syncCanvas":function(){
		var canvasL = this.canvasL;
		var context2dL = canvasL.getContext("2d");
		var canvasR = this.canvasR;
		var context2dR = canvasR.getContext("2d");
		context2dR.putImageData(context2dL.getImageData(0, 0, canvasL.width, canvasL.height), 0, 0);
	},
    "drawCanvasCheckedPos":function(){
		this.resetCanvas();
		var colorTable = ["rgba(255,51,51,1)","rgba(51,255,51,1)","rgba(51,51,255,1)","rgba(255,255,51,1)","rgba(255,51,255,1)","rgba(51,255,255,1)"];
		var canvasL = this.canvasL;
		var sls = this.stageInfo.solutions;
		for(var i=0,m = sls.length;i<m;i++){
			if(!sls[i].checked){
				continue;
			}
			var pos = sls[i].poss[0]; //첫번째 위치만 표시한다.
			this.drawCanvasPos(canvasL,pos,colorTable[(i%colorTable.length)]);
		}
		this.syncCanvas();
	},
    "drawCanvasPos":function (canvas,pos,strokeStyle){
		var context2d = canvas.getContext("2d");
        
		context2d.fillStyle = "rgba(255,255,255,0.0)"; //채우기 색
		if(strokeStyle){
			context2d.strokeStyle = /*strokeStyle*/"rgba(251,200,62,1)"; //선색
		}else{
			context2d.strokeStyle = "rgba(251,200,62,1)"; //선색
		}
        
		context2d.globalAlpha = 1;
		context2d.opacity = 1; //투명도
		//context2d.lineWidth = 10; //
		context2d.lineWidth = Math.max(3,this.imgL.naturalWidth/50);
        context2d.shadowColor = "rgba(49,14,16,1.0)";
        context2d.shadowOffsetX = 0;
        context2d.shadowOffsetY = 0;
        context2d.shadowBlur = 8;
        
		if(pos["type"]=="circle"){
			context2d.beginPath();
			context2d.arc(pos["x"], pos["y"], pos["r"], 0, Math.PI*2.0,null);
			context2d.fill();
			context2d.stroke();
			context2d.closePath();
		}else if(pos["type"]=="rect"){
			context2d.beginPath();
			context2d.strokeRect(pos["x"], pos["y"],pos["w"], pos["h"]);
			context2d.fill();
			context2d.stroke();
			context2d.closePath();
		}
		context2d.globalAlpha = 1;        
	},
    "checkClear":function(){
		if(!this.stageInfo) return false;
		var sls = this.stageInfo.solutions;
		var slCnt = 0;
		for(var i=0,m = sls.length;i<m;i++){
			if(sls[i].checked){
				slCnt++;
			}
		}
		//console.log(slCnt+">="+sls.length)
		$(this.searchCnt).text(slCnt);
		$(this.goalCnt).text(sls.length);

		if(slCnt>=sls.length){
			return true;
		}
        
		return false;
	},
    "diffImgs":function(){
		if( this.imgL.naturalWidth !=  this.imgR.naturalWidth ||  this.imgL.naturalHeight != this.imgR.naturalHeight){
			//alert(this.imgR.naturalWidth);
			alert("서로 크기가 다른 이미지입니다.");
			this.stageInfo = false;
			return false;
		}

		//alert("diffImgs0");
		var canvasL = this.canvasL;
		var canvasR = this.canvasR;
		var canvasD = $("#canvasD").get(0);
		var context2dL = canvasL.getContext("2d");
		var context2dR = canvasR.getContext("2d");

		canvasD.width = canvasL.width;
		canvasD.height = canvasL.height;
		var context2dD = canvasD.getContext("2d");
		context2dL.drawImage(this.imgL,0,0);
		context2dR.drawImage(this.imgR,0,0);
		var imgDataL = context2dL.getImageData(0, 0, canvasL.width, canvasL.height);
		var imgDataR = context2dR.getImageData(0, 0, canvasL.width, canvasL.height);
		var imgDataD = context2dD.getImageData(0, 0, canvasL.width, canvasL.height);
		//alert("diffImgs1");

		context2dD.fillStyle = "rgba(100,100,100,1)"; //채우기 색
		context2dD.strokeStyle = "rgba(255,51,51,1)"; //선색
		context2dD.opacity = 1; //투명도
		context2dD.lineWidth = 10;

		var diffCnt = 0;
		var i;
		//context2dD.beginPath();

		for(i=0,m=imgDataL.data.length;i<m;i+=4){
			var rL = imgDataL.data[i];
			var gL = imgDataL.data[i+1];
			var bL = imgDataL.data[i+2];
			var aL = imgDataL.data[i+3];
			var rR = imgDataR.data[i];
			var gR = imgDataR.data[i+1];
			var bR = imgDataR.data[i+2];
			var aR = imgDataR.data[i+3];

			var rD = Math.abs(rL-rR);
			var gD = Math.abs(gL-gR);
			var bD = Math.abs(bL-bR);
			var aD = Math.abs(aL-aR);
				
			if(rD > 20 || gD > 20 || bD > 20 || aD > 20){
				imgDataD.data[i] = 0;
				imgDataD.data[i+1] = 0;
				imgDataD.data[i+2] = 0;
				imgDataD.data[i+3] = 90;
				diffCnt++;
				//context2d.fillRect(i/4%canvasL.width,Math.floor(i/4/canvasL.width),1,1);
			}
			//if(i>10000){break;}
			if(i % (4*1000)===0){
				document.title = document.title;
			}
		}
		//alert(i);
		//alert("diffImgs2");
		//return false;
		//alert(diffCnt);
		context2dD.putImageData(imgDataD, 0, 0);
		this.resetCanvas();
		this.parseDiffRange();
	},
    "parseDiffRange":function(){
		var canvasD = $("#canvasD").get(0);
		var context2dD = canvasD.getContext("2d");
		var imgDataD = context2dD.getImageData(0, 0, canvasL.width, canvasL.height);
		var w = canvasL.width;
		var h = canvasL.height;
		var solutions = [];
		for(var i=0,m=imgDataD.data.length;i<m;i+=4){
			if(imgDataD.data[i] < 1 &&imgDataD.data[i+3]>0 ){
				var rarr = this.searchDiffRange(imgDataD,i);
				if(rarr.length < 20){continue;} //10픽셀 이상 차이가 있어야한다.
				//alert(rarr.length);
				solutions.push(rarr);
			}
		}
		//-- 최대x,y 최소x,y를 구해서 원을 그림
		var sls = [];
		this.stageInfo.solutions = [];
		for(var i=0,m=solutions.length;i<m;i++){
			var rarr = solutions[i];
			var x0 = w+0;
			var x1 = -0;
			var y0 = h+0;
			var y1 = -0;
			var x,y,posIdx;
			for(var i2=0,m2=rarr.length;i2<m2;i2++){
				posIdx = rarr[i2];
				x = posIdx/4%w;
				y = Math.floor(posIdx/4/w);
				x0 = Math.min(x0,x);
				x1 = Math.max(x1,x);
				y0 = Math.min(y0,y);
				y1 = Math.max(y1,y);
				imgDataD.data[posIdx] = (i*100)%250; //그룹에 맞춰서 색바꾸기
                
			}
			//alert(x0+","+x1+","+y0+","+y1)
			var r= Math.max(Math.sqrt(Math.pow(x0-x1,2)+Math.pow(y0-y1,2))/2.5,20);
			var sl = {"checked":false,"id":"pos"+(i+1),"title":"틀린부분"+(i+1),"poss":[{"type":"circle","x":(x0+x1)/2,"y":(y0+y1)/2,"r":r}]};
			sls.push(sl);
		}
		//-- 가까운(겹쳐지는) 부분을 하나로 만듬.
		//alert("시작"+sls.length);
		/*
		for(var i=0;i<sls.length;i++){
			var sl0 = sls[i];
			var pos0 = sl0["poss"][0];
			this.drawCanvasPos(canvasD,pos0);
		}
		*/
		this.resetCanvas(canvasD);
		//alert(sls.length);
		for(var i=0;i<sls.length;i++){
			var sl0 = sls[i];
			var pos0 = sl0["poss"][0];
			var ch = false;

			this.drawCanvasPos(canvasD,pos0,"rgba(255,255,51,0.5)");
			//alert(sls.length);
			for(var i2=sls.length-1;i2>i;i2--){
				var sl2 = sls[i2];
				var pos2 = sl2["poss"][0];
				var r2 = Math.sqrt(Math.pow(pos0["x"]-pos2["x"],2)+Math.pow(pos0["y"]-pos2["y"],2));
				this.drawCanvasPos(canvasD,pos2);
				if(r2<= pos0["r"]+pos2["r"]){
					if(r2 <= pos0["r"]){ //속에 포함될 때

					}else if(r2 <= pos2["r"]){ //속에 포함될 때
						pos0["x"] = pos2["x"];
						pos0["y"] = pos2["y"];
						pos0["r"] = pos2["r"];
					}else{
						pos0["x"] = (pos0["x"]+pos2["x"])/2;
						pos0["y"] = (pos0["y"]+pos2["y"])/2;
						pos0["r"] = (pos0["r"]+pos2["r"])/2; /*Math.max(pos0["r"],pos2["r"],r2,120);*/
					}
					sls.splice(i2,1);
					this.drawCanvasPos(canvasD,pos2);
					//alert("x");
					//alert("가까운 부분을 합침"+":"+i+":"+i2+":"+sls.length);
					i = -1; //처음부터 다시
					break;
				}
				
			}
			this.resetCanvas(canvasD);
		}
		//*/
		//--- title들을 재정의
		var minR = this.imgL.naturalWidth/20; //원의 최소 너비
		for(var i=0;i<sls.length;i++){
			var sl  = sls[i];
			sl.id="pos"+(i+1);
			sl.title="틀린부분"+(i+1);
			if(sl.poss[0].r < minR){ 
				sl.poss[0].r = minR;
			}
		}
		this.stageInfo.solutions = sls;
		//alert(solutions.length+"개의 틀린 부분 존재");
		context2dD.putImageData(imgDataD, 0, 0);
	},
    "searchDiffRange":function(imgDataD,posIdx){
		var data = imgDataD.data;
		var w = imgDataD.width;
		var h = imgDataD.height;
		var x = posIdx/4%w;
		var y = Math.floor(posIdx/4/w);
		var rarr =[];
		var shArr = [];
		shArr.push(posIdx);
		var i,i2;
		var stPosIdx = posIdx;
		//console.log(stPosIdx+":시작");
		while(shArr.length>0){
			var posIdx = shArr.shift();
			if(data[posIdx]>0){continue;} //이미 체크한 것이다.
			//console.log(posIdx+":"+data[posIdx+3]+":"+data[posIdx]);
			rarr.push(posIdx);
			data[posIdx]+=100; //체크했다고 표시한다.
			
			x = posIdx/4%w;
			y = Math.floor(posIdx/4/w);
			for(var i3=1,m3=2;i3<m3;i3++){
				if(y-i3>=0){//위
					i = (x+(y-i3)*w)*4;
					if(data[i+3]>0 && data[i]<1 ){ shArr.push(i); 
					//console.log(stPosIdx+":"+posIdx+":"+i+":"+"위"+shArr.length);
					}
				}
				if(y+i3 < h){//아래
					i = (x+(y+i3)*w)*4;
					if(data[i+3]>0 && data[i]<1 ){ shArr.push(i); 
					//console.log(stPosIdx+":"+posIdx+":"+i+":"+"아래"+shArr.length);
					}
				}
				if(x-i3 >= 0){//왼쪽
					i = ((x-i3)+y*w)*4;
					if(data[i+3]>0 && data[i]<1 ){ shArr.push(i); 
					//console.log(stPosIdx+":"+posIdx+":"+i+":"+"왼쪽"+shArr.length);
					}
				}
				if(x+i3 < w){//오른쪽
					i = ((x+i3)+y*w)*4;
					if(data[i+3]>0 && data[i]<1 ){ shArr.push(i); 
					//console.log(stPosIdx+":"+posIdx+":"+i+":"+"오른쪽"+shArr.length);
					}
				}
			}
		}
		//console.log(stPosIdx+":끝");
		//alert(rarr.length);
		return rarr;
	}
}

$(document).ready(function(){
    /* 슬라이드 팝업 */
    $(".btn").click(function() {
        $("#info").toggleClass("tslide");
        $(".bg2").toggleClass("on");
        
        $("#info .btn button").attr("onclick","findDifferentimg.stopTimer()");
        $("#info.tslide .btn button").attr("onclick","findDifferentimg.restartTimer()");
    });
    
    /* Ex 스타트 버튼 */
    $(".Ex").click(function() {
        $(".intro").fadeOut(1000);
        $(".description-pop").fadeIn("fast");
        $(".count-pop span").addClass("Count1");
        setTimeout(function() {
            $(".count-pop span").removeClass("Count1");
        }, 2000);
    });
    
    /* 튜토리얼 버튼 */
    $(".Tu").click(function() {
        $(".ex-pop").fadeIn("fast");
    });
    
    /* Desc 스타트 버튼 */
    $(".Desc").click(function() {
        $(".description-pop").fadeIn("fast");
    });
    
    /* Ex 닫기 버튼 */
    $(".ex-pop .close").click(function(){
        $(".ex-pop").fadeOut("fast");
    });
    
    /* 인트로 스타트 버튼 BGM 시작 */
    $(".Start").click(function() {
        $(".intro").fadeOut("fast");
        var BGM = document.querySelector(".myAudio");
        BGM.volume = 0.3;
        BGM.play();
    });
    
    /* 클릭 효과 페이드아웃 */
    $("#contnets").click(function(){
        setTimeout(function() {
            $(".wrong").fadeOut("fast");
            $(".bubbly").fadeOut("fast");
            $(".bubbly2").fadeOut("fast");
        }, 400);
    });
    
    /* 재도전 버튼 */
    $(".reStart").click(function(){        
        $(".count-pop span").addClass("Count1");
        setTimeout(function() {
            $(".count-pop span").removeClass("Count1");
        }, 2000);
    });
    
    /* 게임 일시정지 토글버튼 NEW */
    $(".pause").click(function(){
        $(".pause").toggleClass("on");
        
        if($(".pause").hasClass("on") == true){
            $(".pause").attr("onclick","findDifferentimg.restartTimer()");
            $(".pause").val("게임 시작하기");
            $(".pause-bg").fadeIn("fast");
        } else {
            $(".pause").attr("onclick","findDifferentimg.stopTimer()");
            $(".pause").val("게임 일시정지");
            $(".pause-bg").fadeOut("fast");
        }
    });
    
    /* 게임 일시정지 버튼 */
    $(".pause-fixed").click(function(){
        $(".pause-bg").fadeIn("fast");
    });
    
    /* BGM 토글 버튼 */
    $(".audio").click(function(){
        $(".audio").toggleClass("on");
        var BGM = document.querySelector(".myAudio");
        
        if ($(".audio").hasClass("on") == true) {
            $(".audioPlay").removeClass("audioPlay").addClass("audioStop");
            BGM.pause();
            BGM.volume = 0.3;
        } else {
            $(".audioStop").removeClass("audioStop").addClass("audioPlay");
            BGM.play();
            BGM.volume = 0.3;
        }
    });
    
    // BGM
    var BGM = document.querySelector(".myAudio");
    BGM.volume = 0.3;
    BGM.pause();
    
    // 풀스크린
    function isFullscreen() {
      return document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
    }
    function fullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }
    }
    function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    document.addEventListener('dblclick', () => {
      if (!isFullscreen()) fullscreen();
      else exitFullscreen();
    });
    
    // F12 버튼 방지
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
    
    // 우측 클릭 방지
    document.onmousedown=disableclick;
    status="마우스 오른쪽 클릭 제한";
    function disableclick(event){
        if (event.button==2) {
            //alert(status);
            return false;
        }
    };
});

/* BGM 랜덤 */
var player;
var audioFiles = [
    "./sound/bgm.mp3",
    "./sound/bgm2.mp3",
    "./sound/bgm3.mp3",
    "./sound/bgm4.mp3",
    "./sound/bgm5.mp3"
];
// 현재 재생 곡 정보 manually 불러오기
var playinginfo;
var lists = [
    "BGM1",
    "BGM2",
    "BGM3",
    "BGM4",
    "BGM5"
];
// 방문할 때마다 순서 다르게
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
function preloadAudio(url) {
    var audio = new Audio();
    audio.addEventListener("canplaythrough", loadedAudio, false);
    audio.src = url;
}
var loaded = 0;
function loadedAudio() {
    loaded += 1;
    if (loaded === audioFiles.length) {
        // 전부 로드됐으면 플레이
        init();
    }
}
function play(index) {
    player.src = audioFiles[index];
    getSRC();
    setTimeout(function() {
        player.play();
    }, 0);
}
var i = 0;
function init() {
    play(i);
    player.onpause = function () {
        // 커스텀 플레이 버튼 조작 (toPlay Icon)
    };
    player.onended = function () {
        next();
    };
    player.onplay = function () {
        if (!player.seeking) {
            // 커스텀 플레이 버튼 조작 (toPause Icon)
        }
    };
}
function next() {
    i += 1;
    if (i >= audioFiles.length) {
        i = 0;
    }
    play(i);
}
function getSRC() {
    switch (player.src) {
        case "./sound/bgm.mp3": 
            playinginfo = lists[0];
            document.getElementById("current").innerHTML = playinginfo;
            break;
        case "./sound/bgm2.mp3":
            playinginfo = lists[1];
            document.getElementById("current").innerHTML = playinginfo;
            break;
        case "./sound/bgm3.mp3":
            playinginfo = lists[2];
            document.getElementById("current").innerHTML = playinginfo;
            break;
        case "./sound/bgm4.mp3":
            playinginfo = lists[3];
            document.getElementById("current").innerHTML = playinginfo;
            break;
        case "./sound/bgm5.mp3":
            playinginfo = lists[4];
            document.getElementById("current").innerHTML = playinginfo;
            break;
        default:
            playinginfo = "";
            document.getElementById("current").innerHTML = playinginfo;
            break;
    }
}
// 오디오 목록 셔플
function BGMrandom(index) {
    shuffle(audioFiles);
    
    player = document.getElementById("player");
    for (var i=0; i<audioFiles.length; i++) {
        preloadAudio(audioFiles[i]);
        //console.log(audioFiles[i]);
    }
}

/* 틀린그림 랜덤 generateRandom(1, 3) */
var generateRandom = function(min, max) {
var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
return ranNum;
};

/* 스테이지 배열 랜덤 */
Array.prototype.shuffle = function() {
    var length = this.length;
    while (length) {
        // 랜덤한 배열 index 추출
        var index = Math.floor((length--) * Math.random());
        // 배열의 끝에서부터 0번째 아이템을 순차적으로 대입
        var temp = this[length];
        // 랜덤한 위치의 값을 맨뒤(this[length])부터 셋팅
        this[length] = this[index];
        // 랜덤한 위치에 위에 설정한 temp값 셋팅
        this[index] = temp;
    }
    return this;
};






/* 스테이지 시작 */
var stageInfo1 = {
    /* 이미지 정보 */
    "urlImgL":"./img/S1-L"+generateRandom(1, 1)+".png",
	"urlImgR":"./img/S1-R"+generateRandom(1, 1)+".png",
    "urlImgLtrue":"./img/S1-L1-original.png",
    "urlImgLlink":"https://local.nculture.org/6jkr2",
    /* 스테이지 정보 */
    "stagecount":"일반 모드",
    "stageTitle":"삼칠일 동안 걸어두는 금줄",
	"stageDesc":"관련 콘텐츠 정보는 우측 슬라이딩 메뉴에서 확인 가능합니다.",
    /* 팝업슬라이드 정보 */
    "slideTitle":"삼칠일 동안 걸어두는 금줄",
    "slideList":"관혼상제 / 출생의례 > 출생의례의 절차와 풍습",
	"slideDesc":"금줄은 부정을 막기 위해서 집 대문이나 길 어귀에 걸어두는, 공간을 구분하는 새끼줄이다. 일반적으로 집안에 새로운 아이 가 태어나거 나 중요한 제의를 준비할 때 집 대문의 양쪽 기둥 사이에 걸어둔다. 금줄을 걸어두는 기간은 삼칠일(21일) 정도 이다. 금줄은 왼 새끼를 사용하고, 지역에 따라 차이가 있지만 숯과 종이, 성별에 따라 남자 아이는 빨간 고추를 여자 아이는 솔가지를 함께 엮어 걸어둔다.",
    /* 틀린그림 xy정보 */
	"solutions":[
        {"id":"pos1","title":"ex1","poss":[{"type":"circle","x":790,"y":316,"r":0}]},
		{"id":"pos2","title":"ex2","poss":[{"type":"circle","x":221,"y":144,"r":0}]},
		{"id":"pos3","title":"ex3","poss":[{"type":"circle","x":73,"y":437,"r":0}]},
        {"id":"pos4","title":"ex4","poss":[{"type":"circle","x":666,"y":786,"r":0}]},
        {"id":"pos5","title":"ex5","poss":[{"type":"circle","x":505,"y":332,"r":0}]}
    ],
    /* 반전모드 remove 해제 */
    "divL":function(){this.classList.remove("horizontal");},
    /* 포커스모드 remove 해제 */
    "figureL":function(){this.classList.remove("focus");},
    /* 스피드모드 SPEED */
    "stage":"",
}

var stageInfo2 = {
    /* 이미지 정보 */
    "urlImgL":"./img/S1-L"+generateRandom(1, 1)+".png",
	"urlImgR":"./img/S1-R"+generateRandom(1, 1)+".png",
    "urlImgLtrue":"./img/S1-L1-original.png",
    "urlImgLlink":"https://local.nculture.org/6jkr2",
    /* 스테이지 정보 */
    "stagecount":"포커스 모드",
    "stageTitle":"삼칠일 동안 걸어두는 금줄",
	"stageDesc":"관련 콘텐츠 정보는 우측 슬라이딩 메뉴에서 확인 가능합니다.",
    /* 팝업슬라이드 정보 */
    "slideTitle":"삼칠일 동안 걸어두는 금줄",
    "slideList":"관혼상제 / 출생의례 > 출생의례의 절차와 풍습",
	"slideDesc":"금줄은 부정을 막기 위해서 집 대문이나 길 어귀에 걸어두는, 공간을 구분하는 새끼줄이다. 일반적으로 집안에 새로운 아이 가 태어나거 나 중요한 제의를 준비할 때 집 대문의 양쪽 기둥 사이에 걸어둔다. 금줄을 걸어두는 기간은 삼칠일(21일) 정도 이다. 금줄은 왼 새끼를 사용하고, 지역에 따라 차이가 있지만 숯과 종이, 성별에 따라 남자 아이는 빨간 고추를 여자 아이는 솔가지를 함께 엮어 걸어둔다.",
    /* 틀린그림 xy정보 */
	"solutions":[
        {"id":"pos1","title":"ex1","poss":[{"type":"circle","x":790,"y":316,"r":0}]},
		{"id":"pos2","title":"ex2","poss":[{"type":"circle","x":221,"y":144,"r":0}]},
		{"id":"pos3","title":"ex3","poss":[{"type":"circle","x":73,"y":437,"r":0}]},
        {"id":"pos4","title":"ex4","poss":[{"type":"circle","x":666,"y":786,"r":0}]},
        {"id":"pos5","title":"ex5","poss":[{"type":"circle","x":505,"y":332,"r":0}]}
    ],
    /* 반전모드 remove 해제 */
    "divL":function(){this.classList.remove("horizontal");},
    /* 포커스모드 add 선택 */
    "figureL":function(){this.classList.add("focus");},
    /* 스피드모드 SPEED */
    "stage":"",
}

var stageInfo3 = {
    /* 이미지 정보 */
    "urlImgL":"./img/S1-L"+generateRandom(1, 1)+".png",
	"urlImgR":"./img/S1-R"+generateRandom(1, 1)+".png",
    "urlImgLtrue":"./img/S1-L1-original.png",
    "urlImgLlink":"https://local.nculture.org/6jkr2",
    /* 스테이지 정보 */
    "stagecount":"반전 모드",
    "stageTitle":"삼칠일 동안 걸어두는 금줄",
	"stageDesc":"관련 콘텐츠 정보는 우측 슬라이딩 메뉴에서 확인 가능합니다.",
    /* 팝업슬라이드 정보 */
    "slideTitle":"삼칠일 동안 걸어두는 금줄",
    "slideList":"관혼상제 / 출생의례 > 출생의례의 절차와 풍습",
	"slideDesc":"금줄은 부정을 막기 위해서 집 대문이나 길 어귀에 걸어두는, 공간을 구분하는 새끼줄이다. 일반적으로 집안에 새로운 아이 가 태어나거 나 중요한 제의를 준비할 때 집 대문의 양쪽 기둥 사이에 걸어둔다. 금줄을 걸어두는 기간은 삼칠일(21일) 정도 이다. 금줄은 왼 새끼를 사용하고, 지역에 따라 차이가 있지만 숯과 종이, 성별에 따라 남자 아이는 빨간 고추를 여자 아이는 솔가지를 함께 엮어 걸어둔다.",
    /* 틀린그림 xy정보 */
	"solutions":[
        {"id":"pos1","title":"ex1","poss":[{"type":"circle","x":790,"y":316,"r":0}]},
		{"id":"pos2","title":"ex2","poss":[{"type":"circle","x":221,"y":144,"r":0}]},
		{"id":"pos3","title":"ex3","poss":[{"type":"circle","x":73,"y":437,"r":0}]},
        {"id":"pos4","title":"ex4","poss":[{"type":"circle","x":666,"y":786,"r":0}]},
        {"id":"pos5","title":"ex5","poss":[{"type":"circle","x":505,"y":332,"r":0}]}
    ],
    /* 반전모드 add 선택 */
    "divL":function(){this.classList.add("horizontal");},
    /* 포커스모드 remove 해제 */
    "figureL":function(){this.classList.remove("focus");},
    /* 스피드모드 SPEED */
    "stage":"",
}

var stageInfo4 = {
    /* 이미지 정보 */
    "urlImgL":"./img/S1-L"+generateRandom(1, 1)+".png",
	"urlImgR":"./img/S1-R"+generateRandom(1, 1)+".png",
    "urlImgLtrue":"./img/S1-L1-original.png",
    "urlImgLlink":"https://local.nculture.org/6jkr2",
    /* 스테이지 정보 */
    "stagecount":"스피드 모드",
    "stageTitle":"삼칠일 동안 걸어두는 금줄",
	"stageDesc":"관련 콘텐츠 정보는 우측 슬라이딩 메뉴에서 확인 가능합니다.",
    /* 팝업슬라이드 정보 */
    "slideTitle":"삼칠일 동안 걸어두는 금줄",
    "slideList":"관혼상제 / 출생의례 > 출생의례의 절차와 풍습",
	"slideDesc":"금줄은 부정을 막기 위해서 집 대문이나 길 어귀에 걸어두는, 공간을 구분하는 새끼줄이다. 일반적으로 집안에 새로운 아이 가 태어나거 나 중요한 제의를 준비할 때 집 대문의 양쪽 기둥 사이에 걸어둔다. 금줄을 걸어두는 기간은 삼칠일(21일) 정도 이다. 금줄은 왼 새끼를 사용하고, 지역에 따라 차이가 있지만 숯과 종이, 성별에 따라 남자 아이는 빨간 고추를 여자 아이는 솔가지를 함께 엮어 걸어둔다.",
    /* 틀린그림 xy정보 */
	"solutions":[
        {"id":"pos1","title":"ex1","poss":[{"type":"circle","x":790,"y":316,"r":0}]},
		{"id":"pos2","title":"ex2","poss":[{"type":"circle","x":221,"y":144,"r":0}]},
		{"id":"pos3","title":"ex3","poss":[{"type":"circle","x":73,"y":437,"r":0}]},
        {"id":"pos4","title":"ex4","poss":[{"type":"circle","x":666,"y":786,"r":0}]},
        {"id":"pos5","title":"ex5","poss":[{"type":"circle","x":505,"y":332,"r":0}]}
    ],
    /* 반전모드 remove 해제 */
    "divL":function(){this.classList.remove("horizontal");},
    /* 포커스모드 remove 해제 */
    "figureL":function(){this.classList.remove("focus");},
    /* 스피드모드 SPEED */
    "stage":"SPEED",
}

var stageInfos = [stageInfo1, stageInfo2, stageInfo3, stageInfo4];
stageInfos.shuffle();




