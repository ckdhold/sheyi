// JavaScript Document
$(function(){
	searchbox();
	classifytab();
	$('#pt-search').click(function(){
		$('#js-searchbox').toggle();
	});
})
//搜索框
function searchbox(){
	var _default=$("#js-search").val();
	$("#js-search").focus(function(){
			//alert(11);
		if($(this).val()==_default){
				$(this).val("");
			}
		});
	$("#js-search").blur(function(){
		if($(this).val()==""){
				$(this).val(_default);
			}
		});
	}
//分类选项卡
function classifytab(){
	var _li=$("#js-classify-title").find("li");
	$.each(_li,function(i){
			$(this).click(function(){
				$(this).addClass("on").siblings().removeClass("on");
				var _con=$(".js-con-"+i);
				_con.css("display","block").siblings().css("display","none");
				});
		});
	}
