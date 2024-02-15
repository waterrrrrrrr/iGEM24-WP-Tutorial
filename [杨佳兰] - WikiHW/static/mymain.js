'use strict';
var footprint = document.getElementById("footprint");
var logo = document.getElementById("logo");

function initPage()   
{   
    var objLoading = document.getElementById("loaderbox");   
    if (objLoading != null)   
    {   
        objLoading.style.display = "none";   
    }
}
window.onload = initPage;

let footbox = document.getElementById("footbox");
// var footprint = document.getElementsByClassName("footprint");
var logo = document.getElementById("logo");
var logoRect = logo.getBoundingClientRect();
var i;

var vh = window.innerHeight/100;
var mypxw = 90*vh/1500;
var topdis =  window.innerHeight/837*80;
var footnumber = window.innerHeight/837*18;
var centerw = window.innerWidth/2;
var xdis = (centerw - 650*mypxw-logoRect.left-logoRect.width)/3;
var centerh = 90*vh/15*6;
if(window.innerWidth >= 700){
    for (var i = 0; i < 36; i++) {
        var newfoot = document.createElement('img');
        newfoot.src = "static/pic/f.png";
        // 设置footprint的宽度等于logo的宽度
        newfoot.style.width = logoRect.width + "px";
        newfoot.style.height = logoRect.width + "px";
        // 设置footprint与logo垂直对齐
        if(i<4){
            newfoot.style.left = logoRect.left + "px";
            newfoot.style.top = i*topdis + "px";
        }else if(i>=4 && i<8){
            newfoot.style.transform = "rotate(-90deg)";
            // newfoot.style.left = logoRect.left-50 + topdis*(i-3) + "px";
            newfoot.style.left = centerw - 650*mypxw - xdis*(7-i) + "px";
            newfoot.style.top = centerh + "px";
        }else if(i>=8 && i<12){
            newfoot.style.transform = "rotate(-90deg)";
            // newfoot.style.left = logoRect.left + 900 + topdis*(i-8) + "px";
            newfoot.style.left = centerw + 550*mypxw + xdis*(i-8) + "px";
            newfoot.style.top = centerh + "px";
        }else{
            newfoot.style.left = window.innerWidth - logoRect.left - logoRect.width/2 + "px";
            newfoot.style.top = centerh + logoRect.width + (i-12)*topdis + "px";
        }
        // 设置逐个显示
        if(i<8){
            newfoot.style.animationDelay = i*0.5 + "s";
        }else{
            newfoot.style.animationDelay = 5 + (i-8)*0.5 + "s";
        }
        if(i == 16){
            newfoot.id = "hintfoot";
            newfoot.className = "hintfoot";
        }
        if(i < 16) newfoot.className = "footprint";
        if(i > 16) newfoot.className = "invisiblefoot";
        footbox.appendChild(newfoot);
    }
}


// 滚动方向枚举值
const DIRECTION_ENUM = {
    DOWN: "down",
    UP: "up",
};
// 距离顶部或底部的阈值
const threshold = 20;
// 记录前一个滚动位置
let beforeScrollTop = 0;
//获取footprint
var hintfoot = document.getElementById("hintfoot");
var invisiblefoot = document.getElementsByClassName("invisiblefoot");//array
var invisiblefootArray = Array.from(invisiblefoot);
function scrollToShowImage() {
    // 距顶部
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    // 可视区高度
    var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    // 滚动条总高度
    var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

    var i=0;
    while(i*topdis < scrollTop-clientHeight/2 || (i>12)&&(i<invisiblefootArray.length)){
        invisiblefootArray[i].className = "visiblefoot";
        console.log(i);
        if(i>12){
            invisiblefootArray[i].className = "visiblefootplus";
            invisiblefootArray[i].style.animationDelay = (i-12)*0.5 + "s";
        }
        // invisiblefoot[i].style.opacity = 1;
        i++;
    }
    
    // 确定滚动方向
    let direction = DIRECTION_ENUM.DOWN;
    if (beforeScrollTop > scrollTop) {
        direction = DIRECTION_ENUM.UP;
    }

    // 通过滚动方向判断是触底还是触顶
    if (direction == DIRECTION_ENUM.DOWN) {
        var i=0;
        while(i*topdis < scrollTop-clientHeight/2 || (i>12)&&(i<invisiblefootArray.length)){
            invisiblefootArray[i].className = "visiblefoot";
            console.log(i);
            if(i>12){
                invisiblefootArray[i].className = "visiblefootplus";
                invisiblefootArray[i].style.animationDelay = (i-12)*0.5 + "s";
            }
            // invisiblefoot[i].style.opacity = 1;
            i++;
        }

        // 滚动触底
        if (scrollTop + clientHeight + threshold >= scrollHeight) {
            console.log("滚动触底");
        }
    } else {
        while(i*topdis > scrollTop-clientHeight/2 || i>12){
            invisiblefootArray[i].className = "invisiblefoot";
            console.log(i);
            i--;
        }
        var ss;
        for(ss = 12; ss <= footnumber; ss++){
            invisiblefootArray[ss].className = "invisiblefoot";
        }
        // 滚动到顶部
        if (scrollTop <= threshold) {
        console.log("滚动到顶部");
        }
    }

    beforeScrollTop = scrollTop;
  }
  
// 监听滚动事件
window.addEventListener('scroll', scrollToShowImage);