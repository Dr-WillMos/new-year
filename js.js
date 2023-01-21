var myvideo = document.getElementById("video");
var str = '身体健康<br>学业有成<br>心想事成<br>天天开心';
var i = 0;
var divTyping = document.getElementById('zhuf');
function typing(){
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout('typing()', 200);
    }
    else{
        divTyping.innerHTML = str;
    }
}
function play(){
    myvideo.play();
    document.getElementById("top").classList.add("tran");
    document.getElementById("bottom").classList.add("trans");
    setTimeout("typing();", 2*1000);
}
