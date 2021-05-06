var items = document.getElementsByClassName('item');//图片
var points = document.getElementsByClassName('point');//点
var focus_leftBtn = document.getElementsByClassName('focus_left');//上一张
var focus_rightBtn = document.getElementsByClassName('focus_right');//下一张
var time = 0;//定义轮播时间
var index = 0;//index表示第几张图片在展示，第index张图片有active属性
var clearActive = function(){
    for(var i = 0;i<points.length;i++){
        points[i].className = 'point';
    }
    for(var i = 0;i<items.length;i++){
        items[i].className = 'item';
    }
}
var goindex = function(){
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}
var focus_right = function(){
    if(index < 4) {
        index ++;
    }else{
        index = 0;
    }
    goindex();
}
var focus_left = function(){
    if(index == 0) {
        index = 4;
    }else{
        index --;
    }
    goindex();
    }
focus_rightBtn.addEventListener('click',function(){
    focus_right();
    time = 0;
}) 
focus_leftBtn.addEventListener('click',function(){
    focus_left();
    time = 0;
})
for (var i = 0;i < points.length;i++){
    points[i].num = i;
    points[i].onclick = function(){
        index = this.num;
        goindex();
        time = 0;
    } 
}
setInterval(function(){
    time ++;
    if(time == 30){
        focus_right();
        time = 0;
    }
},100)