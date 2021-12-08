
    function setRem() {
        var ui_w = 375;
        // 获取屏幕的宽度
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        // console.log(ui_w,clientWidth);

        // 通过js动态改变html根节点字体大小
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth/ui_w)*10 +'px';   //625%是乘100     62.5%就是乘10 
    }
    // window.onresize 浏览器被重置大小执行事件
    window.onresize = setRem;


