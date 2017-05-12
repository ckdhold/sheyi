$(document).ready(function() {
    var $key=0; 
    var num=0;   
    var Height=40;
$(".nav_login").click(function(event) {
        $(".gray,.login-page").show();
        qrlogin.init("imgwrap","/");
    }); 

    // 登入框部分的代码
    $(".login-page .wrap .close").click(function(event) {
        $(".gray,.login-page").hide();
    }); 
    // 判断手机号码
$("#uclogin_mobile").bind("input",function(){
    if(/^1\d{10}$/.test($(this).val())){
        $("#SendCode").prop("disabled",false);
    }else{
        $("#SendCode").prop("disabled",true);
    }
});
$("#SendCode").bind("click",function(){
    sendCode();
});
$("#submit").bind("click",function(){
    if(isloading){
        return;
    }
    var data={uclogin_scode:$("#uclogin_scode").val()};
    if(data.uclogin_scode==""){
        alert("请填写短信验证码!");
        return;
    }
    isloading=true;
    flushvcode();
    ajaxpost(
        '/uclogin/logincheck/',
        data,
        function(v){
            isloading=false;
            if(v.f){
                window.location.reload();
            }else{
                alert(v.data);
            }
            
        },
        function(){
            isloading=false;
            alert("请重试");
        }
    );
});

//发送验证码
var wait=60,isloading=false;
function sendCode(){    
    if(isloading){
        return;
    }
    isloading=true;
    ajaxpost(
        '/uclogin/getsmscode/',
        {uclogin_vcode:$("#uclogin_vcode").val(),uclogin_mobile:$("#uclogin_mobile").val()}, 
        function(v){
            isloading=false;
            if(v.f){
                flushTimer(wait);
            }else{
                alert(v.data);
            }
       
        },
        function(){
            isloading=false;
            alert("请重试");
        }
    );
}

function flushTimer(t){
    if(t<=0){
        $("#SendCode").html("获取短信验证码");
        $("#SendCode").prop("disabled",false);
        $("#uclogin_mobile").prop("disabled",false);
    }else{
        t--;  
        $("#SendCode").text(t+"秒");
        $("#uclogin_mobile").prop("disabled",true);                  
        setTimeout(function(){flushTimer(t)},1000);
    }
}
function flushvcode(){
    $("#uclogin_vcode").val("");
    $(".code-box img").attr("src","/uclogin/vcode/?_t="+(new Date()).getTime());
}
$(".code-box img").bind("click",function(){flushvcode();})
    // 登入框部分的代码
});