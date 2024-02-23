'use strict';
//获取navbar
var navbar = document.getElementById("navbar");
var menubox = document.getElementById("menubox");
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
        // 滚动触底
        if (scrollTop + clientHeight + threshold >= scrollHeight) {
            console.log("滚动触底");
        }
    } else {
        // 滚动到顶部
        if (scrollTop <= threshold) {
        console.log("滚动到顶部");
        }
    }

    if(document.documentElement.scrollTop > 50){
        navbar.style.opacity = '1';

        // menubox.classList.add("menubox_pos"); /*添加样式*/
    }else{
        // menubox.classList.remove("menubox_pos"); /*删除样式*/
        navbar.style.opacity = '0.8';
    }

    beforeScrollTop = scrollTop;
  }
  
// 监听滚动事件
window.addEventListener('scroll', scrollToShowImage);

