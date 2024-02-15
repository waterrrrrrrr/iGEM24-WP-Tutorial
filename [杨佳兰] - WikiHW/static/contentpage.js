'use strict';
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

// 滚动方向枚举值
const DIRECTION_ENUM = {
    DOWN: "down",
    UP: "up",
};
// 距离顶部或底部的阈值
const threshold = 20;
// 记录前一个滚动位置
let beforeScrollTop = 0;

//获取navbox
var navbox = document.getElementById("navbox");

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
    
    // 确定滚动方向
    let direction = DIRECTION_ENUM.DOWN;
    if (beforeScrollTop > scrollTop) {
        direction = DIRECTION_ENUM.UP;
    }

    // 通过滚动方向判断是触底还是触顶
    if (direction == DIRECTION_ENUM.DOWN) {
        navbox.classList.add("navboxnew"); /*添加样式*/

        // 滚动触底
        if (scrollTop + clientHeight + threshold >= scrollHeight) {
            console.log("滚动触底");
        }
    } else {
        // 滚动到顶部
        if (scrollTop <= threshold) {
            navbox.classList.remove("navboxnew"); /*添加样式*/
            console.log("滚动到顶部");
        }
    }

    beforeScrollTop = scrollTop;
  }
  
  // 监听滚动事件
  window.addEventListener('scroll', scrollToShowImage);