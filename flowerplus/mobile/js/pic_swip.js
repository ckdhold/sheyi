var width=$(".comm-pics").width();
var count=$("#swip a").length;
var i=0;
$("#swip a").each(function(){
	$(this).css("-webkit-transform","translate3d("+i*width+"px,0,0)");
	if(i==0){
		$(".swip-nav").append("<em class=\"on\">•</em>");
	}else{
		$(".swip-nav").append("<em>•</em>");
	}
	i++;
});
setTimeout(
function(){
for(var i=0;i<count&&i<10;i++){
	var img=$("#swip img:eq("+i+")");
	img.attr("src",img.attr("data-src")).attr("data-src","");
}
},500);
var starttime=0,startx=0,starty=0,endx=0,dx=0,index=0;
function touchStart(event){
	//event.preventDefault();
	starttime=event.timeStamp;
	var touch = event.touches[0];
    startx = endx=touch.pageX;
	starty = touch.pageY;
	$("#swip").removeClass("animate");
}

function touchMove(event){
	if(startx==0){
		return;
	}
	var touch = event.touches[0];
	endx=touch.pageX;
	if(starty>0){
		var endy=touch.pageY;
		if(Math.abs(endy-starty)>=Math.abs(endx-startx)){
			startx=0;
			starty=0;
			return;
		}
	}
	event.preventDefault();
	if(index==0 && endx-startx>0 || index==count-1 && endx-startx<0){
		dxt=dx+(endx-startx)/2;
	}else{
		dxt=dx+endx-startx;
	}
	//dxt=Math.min(0,dxt);
	//dxt=Math.max(-1*(count-1)*width,dxt);
	$("#swip").css("-webkit-transform","translate3d("+dxt+"px,0,0)");

}

function touchEnd(event){
	event.preventDefault();
	if(Math.abs(endx-startx)<3 && typeof(pic_click) == "function"){
		pic_click(index);
		return;
	}
	if(startx==0){
		return;
	}
	if(Math.abs(endx-startx)>width/2 || Math.abs(endx-startx)/(event.timeStamp-starttime)>0.3){
		if(endx>startx){
			if(index==0){
				//return;
			}
			index--;
		}else{
			if(index==count-1){
				//return;
			}
			index++;
		}
	}
	index=Math.max(0,Math.min(count-1,index));
	dx=-1*index*width;
	$("#swip").addClass("animate").css("-webkit-transform","translate3d("+dx+"px,0,0)");
	$(".swip-nav em.on").removeClass("on");
	$(".swip-nav em:eq("+index+")").addClass("on");
	var img=$("#swip img:eq("+(index+1)+")");
	if(img.length>0 && img.attr("data-src")!=""){
		img.attr("src",img.attr("data-src")).attr("data-src","");
	}
}

function moveto(i){
	index=i;
	dx=-1*index*width;
	$("#swip").addClass("animate").css("-webkit-transform","translate3d("+dx+"px,0,0)");
	$(".swip-nav em.on").removeClass("on");
	$(".swip-nav em:eq("+index+")").addClass("on");
}

document.getElementById("swip").addEventListener("touchstart", touchStart, false);
document.getElementById("swip").addEventListener("touchmove", touchMove, false);
document.getElementById("swip").addEventListener("touchend", touchEnd, false);
