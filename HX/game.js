function Game(){
	this.hero={
	keynum:0,
	atk:40,
	hp:1500,
	df:45,
	floor:1,
	keynum_blue:0,
	keynum_red:0,
	// floorx:null,
	// floory:null
	}
	this.maparray = [
		[
			[0,0,2,2,0,1,0,2,2,0,0,],
			[2,2,9,6,3,0,3,6,9,2,2,],
			[3,5,9,2,0,3,0,2,9,5,3,],
			[2,2,2,2,2,6,2,2,2,2,2,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,0,5,2,0,0,0,2,5,0,3,],
			[0,0,10,6,11,2,11,6,10,0,0,],
			[0,9,0,2,3,0,3,2,0,9,0,],
			[3,0,5,2,0,7,0,2,5,0,3,],
		],
		[
			[0,19,0,2,15,0,15,2,0,0,0,],
			[3,0,5,2,14,0,14,2,5,0,3,],
			[0,0,0,2,0,4,0,2,0,10,0,],
			[2,6,2,2,2,21,2,2,2,6,2,],
			[0,12,0,6,0,0,0,0,0,0,0,],
			[0,0,0,2,2,2,2,2,2,2,2,],
			[11,0,3,0,0,0,0,0,0,0,0,],
			[6,2,2,6,2,2,2,6,2,2,6,],
			[0,2,0,10,0,2,14,12,5,2,0,],
			[0,2,9,0,3,2,0,0,0,2,1,],
			[7,2,3,9,0,2,0,0,0,2,8,],
		],
		[
			[3,2,14,14,14,2,0,2,3,19,16,],
			[5,2,15,15,15,2,0,2,15,15,5,],
			[13,2,2,20,2,2,0,2,4,4,5,],
			[0,0,0,0,0,0,0,2,23,4,5,],
			[6,2,2,2,2,0,2,2,21,2,2,],
			[10,3,10,3,2,0,6,0,20,19,5,],
			[2,2,6,2,2,0,2,2,6,2,2,],
			[7,0,0,0,0,0,2,9,11,9,11,],
			[2,2,2,6,2,0,2,9,11,14,15,],
			[2,3,5,4,2,0,2,2,2,2,2,],
			[2,2,2,2,2,0,0,0,0,1,8,],
		],
		[
			[0,0,0,2,0,0,6,4,0,3,19,],
			[0,31,0,2,0,25,2,0,0,0,5,],
			[0,0,0,2,6,2,2,2,2,2,26,],
			[2,22,2,2,0,0,2,0,0,2,0,],
			[0,18,0,2,0,0,6,0,0,2,0,],
			[0,0,0,2,2,2,2,0,0,2,0,],
			[0,24,0,0,0,0,6,0,0,2,0,],
			[2,21,2,2,2,2,2,2,2,2,0,],
			[0,26,0,25,6,0,0,0,0,10,0,],
			[3,0,0,0,2,1,2,2,6,2,0,],
			[3,3,3,3,2,8,2,5,25,2,7,],
		],[
			[14,14,14,2,5,14,5,2,5,5,5,],
			[15,15,15,2,0,2,0,2,0,0,0,],
			[29,0,0,2,28,0,27,2,0,0,25,],
			[6,2,2,2,2,6,2,2,2,2,6,],
			[0,0,0,6,0,27,0,2,5,0,25,],
			[6,2,2,2,0,0,27,6,0,15,0,],
			[3,3,0,2,0,0,0,2,3,0,14,],
			[3,19,28,2,2,2,2,2,21,2,6,],
			[2,2,6,2,2,2,2,2,26,0,27,],
			[2,2,6,2,5,3,5,2,2,0,2,],
			[7,0,0,10,0,0,0,10,0,1,8,],
		],
		[
			[32,32,32,32,32,32,32,32,32,32,32,],
			[32,32,32,32,32,32,32,32,32,32,32,],
			[32,32,32,32,32,32,32,32,32,32,32,],
			[32,32,32,32,2,2,2,32,32,32,32,],
			[32,32,32,32,2,33,2,32,32,32,32,],
			[32,32,32,32,2,2,2,32,32,32,32,],
			[32,32,32,32,32,32,32,32,32,32,32,],
			[32,32,32,32,32,32,32,32,32,32,32,],
			[32,32,32,32,32,32,32,32,32,32,32,],
			[2,2,2,2,2,22,2,2,2,2,2,],
			[8,1,0,0,0,0,0,0,0,0,7,],
		],
		[
			[8,0,2,14,14,24,15,15,2,3,14,],
			[1,3,2,14,14,2,15,15,2,25,0,],
			[6,2,2,29,2,2,2,29,2,6,2,],
			[4,0,2,0,0,2,0,0,2,0,0,],
			[0,0,2,5,0,2,0,5,2,26,26,],
			[6,2,2,0,28,0,28,0,2,0,0,],
			[25,3,2,2,2,21,2,2,2,2,6,],
			[0,3,26,0,0,0,0,0,0,0,0,],
			[6,2,2,2,2,24,2,2,0,0,0,],
			[0,2,0,6,3,0,3,2,2,2,25,],
			[26,0,25,2,0,7,0,6,3,19,0,],
		],
		[
			[0,3,0,3,0,0,29,0,0,0,8,],
			[0,0,2,2,2,6,2,2,2,0,1,],
			[30,2,2,2,2,0,2,2,2,2,0,],
			[0,2,2,2,2,0,2,2,2,2,0,],
			[3,2,2,2,14,28,14,2,2,2,24,],
			[0,6,0,0,30,5,30,0,0,6,3,],
			[3,2,2,2,15,28,15,2,2,2,27,],
			[28,2,2,2,2,0,2,2,2,2,0,],
			[0,2,2,2,2,0,2,2,2,2,0,],
			[0,0,2,2,2,6,2,2,2,0,0,],
			[0,0,0,3,28,0,3,29,0,0,7,],
		],
		[
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,34,0,0,0,0,0,],
			[0,0,23,23,23,0,23,23,23,0,0,],
			[0,24,24,24,0,0,0,24,24,24,0,],
			[0,0,28,28,28,0,28,28,28,0,0,],
			[2,2,2,14,0,0,0,15,2,2,2,],
			[2,2,2,14,0,0,0,15,2,2,2,],
			[2,2,2,2,5,0,5,2,2,2,2,],
			[14,14,14,2,2,22,2,2,0,0,0,],
			[15,15,15,2,30,18,30,2,0,0,0,],
			[5,5,5,21,19,0,3,6,3,1,8,],
		],
	]
	this.createMap = function(arrayTwo){//创建地图
		document.getElementsByClassName('gamebox')[0].innerHTML = ''
		for(var i =0;i<arrayTwo.length;i++){
			for(var k = 0;k<arrayTwo[i].length;k++){
				this.createdom(arrayTwo[i][k])
			}
		}
	}
	this.createdom = function(srcnum){//创建节点
		
		var src = srcnum+'.png';
		//创建节点
		
		var dom = document.createElement('img');
		dom.src = src;
		//给节点添加类名
		dom.classList.add('box');
	
		//给节点设置宽度
		dom.style.width = '50px'
		//给节点设置高度
		dom.style.height = '50px'
		//给节点设置背景颜色
		dom.style.backgroundColor = "green"
		//给节点添加浮动元素
		dom.style.float = 'left'
		//把创建的节点添加到body里面
		document.getElementsByClassName('gamebox')[0].appendChild(dom)
		
	}
	this.move = function(nowarray){//位置移动
		var that = this;
		window.onkeydown = function(event){
			console.log(event)
			console.log(that.getpersonposition(nowarray)) 
			var x = that.getpersonposition(nowarray)[0];
			var y = that.getpersonposition(nowarray)[1]
			if(event.keyCode ==39){
				//向右移动
				that.moveP(x,y,x+1,y,nowarray)
			}else if(event.keyCode ==40){
				//向下移动
				that.moveP(x,y,x,y+1,nowarray)
			}else if(event.keyCode ==37){
				//向左移动
				that.moveP(x,y,x-1,y,nowarray)
			}
			else if(event.keyCode ==38){
				//向上移动
				that.moveP(x,y,x,y-1,nowarray)
			}else if(event.keyCode==82){
				this.createMap(this.maparray[0])
				this.move(this.maparray[0])
			}
		}
	}
	this.gamestart = function(){
		// this.createMap(this.maparray[8])
		// this.move(this.maparray[8])
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
	}
	this.getpersonposition = function(nowarray){
		for(var i= 0;i<nowarray.length;i++){
			for(var k = 0;k<nowarray[i].length;k++){
				if(nowarray[i][k]==1){
					var position = [k,i];
					return position
				}
			}
		}
	}
	this.moveP = function(x,y,movetox,movetoy,nowarray){
		
		if(nowarray[movetoy][movetox]==2||nowarray[movetoy][movetox]==null||nowarray[movetoy][movetox]==undefined){
			console.log('这是墙')
		}
		else if(nowarray[movetoy][movetox]==3){//黄钥匙
			nowarray[movetoy][movetox]=0;
			this.keynumchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}else if(nowarray[movetoy][movetox]==19){//蓝钥匙
			nowarray[movetoy][movetox]=0;
			this.keynumchange_bule();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}else if(nowarray[movetoy][movetox]==18){//红钥匙
			nowarray[movetoy][movetox]=0;
			this.keynumchange_red();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}
		else if(nowarray[movetoy][movetox]==14){//+攻击
			nowarray[movetoy][movetox]=0;
			this.atkchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}else if(nowarray[movetoy][movetox]==16){//剑+攻击
			nowarray[movetoy][movetox]=0;
			this.swordchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}else if(nowarray[movetoy][movetox]==31){//盾
			nowarray[movetoy][movetox]=0;
			this.guardchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}
		else if(nowarray[movetoy][movetox]==15){//+防御
			nowarray[movetoy][movetox]=0;
			this.dfchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}
		else if(nowarray[movetoy][movetox]==5){//药水
			nowarray[movetoy][movetox]=0;
			this.hpchange();
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}else if(nowarray[movetoy][movetox]==6){//黄门
			this.door(x,y,movetox,movetoy,nowarray)	
		}else if(nowarray[movetoy][movetox]==21){//蓝门
			this.door_blue(x,y,movetox,movetoy,nowarray)	
		}
		else if(nowarray[movetoy][movetox]==22){//红门
			this.door_red(x,y,movetox,movetoy,nowarray)	
		}
		else if(nowarray[movetoy][movetox]==4){//盾骷髅怪物
			 if(this.monster(52,12,55)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==34){//boss
			 if(this.monster(75,40,100)==1){
				 nowarray[movetoy][movetox]=0;
				 alert('恭喜你通关了！')
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==23){//骷髅队长
			 if(this.monster(65,15,100)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==11){//红史莱姆
			 if(this.monster(20,2,45)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==26){//黑史莱姆
			 if(this.monster(60,3,130)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==24){//红史莱姆
			 if(this.monster(95,30,100)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==27){//兽人
			 if(this.monster(85,5,260)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==29){//盾牌兽人
			 if(this.monster(120,15,320)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==28){//石头人
			 if(this.monster(80,30,200)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==25){//大蝙蝠
			 if(this.monster(100,8,60)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==30){//幽灵
			 if(this.monster(140,20,320)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==7){//上楼
			this.upstair()
		}else if(nowarray[movetoy][movetox]==8){//下楼
			this.downstair()
		}
			else if(nowarray[movetoy][movetox]==9){//绿史莱姆怪物
			 if(this.monster(18,1,35)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==10){//骷髅
			 if(this.monster(42,6,50)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else if(nowarray[movetoy][movetox]==13){//骷髅
			 if(this.monster(38,3,35)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==20){//守卫兵
			 if(this.monster(48,22,50)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}else if(nowarray[movetoy][movetox]==12){//法师
			 if(this.monster(32,8,60)==1){
				 nowarray[movetoy][movetox]=0;
				 this.changeposition(x,y,movetox,movetoy,nowarray)
			 }else{
				 alert('怪物太强了！')
			 }
		}
		else{
			this.changeposition(x,y,movetox,movetoy,nowarray)
		}
	}
	this.keynumchange=function(){
		this.hero.keynum++;
		document.getElementsByClassName('keynum')[0].innerHTML=this.hero.keynum
	}
	this.keynumchange_bule=function(){
		this.hero.keynum_blue++;
		document.getElementsByClassName('keynum_bule')[0].innerHTML=this.hero.keynum_blue
	}
	this.keynumchange_red=function(){
		this.hero.keynum_red++;
		document.getElementsByClassName('keynum_red')[0].innerHTML=this.hero.keynum_red
	}
	this.hpchange=function(){
		this.hero.hp+=150;
		document.getElementsByClassName('hp')[0].innerHTML=this.hero.hp
	}
	this.atkchange=function(){
		this.hero.atk+=1;
		document.getElementsByClassName('atk')[0].innerHTML=this.hero.atk
	}
	this.swordchange=function(){
		this.hero.atk+=5;
		document.getElementsByClassName('atk')[0].innerHTML=this.hero.atk
	}
	this.guardchange=function(){
		this.hero.df+=10;
		document.getElementsByClassName('df')[0].innerHTML=this.hero.df
	}
	this.dfchange=function(){
		this.hero.df+=1;
		document.getElementsByClassName('df')[0].innerHTML=this.hero.df
	}
	this.door=function(x,y,movetox,movetoy,nowarray){
		if(this.hero.keynum>=1){
			nowarray[movetoy][movetox]=0;
			this.hero.keynum--
			this.changeposition(x,y,movetox,movetoy,nowarray)
			document.getElementsByClassName('keynum')[0].innerHTML=this.hero.keynum
		}else{
			alert('黄钥匙不够！')
		}
	}
	this.door_blue=function(x,y,movetox,movetoy,nowarray){
		if(this.hero.keynum_blue>=1){
			nowarray[movetoy][movetox]=0;
			this.hero.keynum_blue--
			this.changeposition(x,y,movetox,movetoy,nowarray)
			document.getElementsByClassName('keynum_bule')[0].innerHTML=this.hero.keynum_blue
		}else{
			alert('蓝钥匙不够！')
		}
	}
	this.door_red=function(x,y,movetox,movetoy,nowarray){
		if(this.hero.keynum_red>=1){
			nowarray[movetoy][movetox]=0;
			this.hero.keynum_red--
			this.changeposition(x,y,movetox,movetoy,nowarray)
			document.getElementsByClassName('keynum_red')[0].innerHTML=this.hero.keynum_red
		}else{
			alert('红钥匙不够！')
		}
	}
	this.monster=function(atk,df,hp){
		var hurt=this.hero.atk-df;
		var hurted=atk-this.hero.df;
		var nowhp=this.hero.hp;
		var monsterhp=hp;
		if(hurted<0){
			hurted=0;
		}if(hurt<0){
			hurt=0;
		}
		if(hurted==0&&hurt==0){
			return 0;
		}
		for(var a=0;nowhp>=0 && monsterhp>=0;a++){
			nowhp-=hurted;
			monsterhp-=hurt;
		}
		if(nowhp>0){
			for(var a=0;hp>=0&&this.hero.hp>=0;a++){
				this.hero.hp-=hurted;
				hp-=hurt;
				document.getElementsByClassName('hp')[0].innerHTML=this.hero.hp
			}
			return 1;
		}else{
			return 0;
		}
	}
	this.restart=function(){
		this.createMap(this.maparray[0])
		this.move(this.maparray[0])
	}
	this.upstair=function(){
		this.hero.floor++;
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
		document.getElementsByClassName('floor')[0].innerHTML=this.hero.floor
	}
	this.downstair=function(){
		this.hero.floor--;
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
		document.getElementsByClassName('floor')[0].innerHTML=this.hero.floor
	}
	this.changeposition=function(x,y,movetox,movetoy,nowarray){
		var a = nowarray[y][x];
		nowarray[y][x] = nowarray[movetoy][movetox];
		nowarray[movetoy][movetox] = a
		this.createMap(nowarray)
	}
	
}
var game = new Game();
game.gamestart()
