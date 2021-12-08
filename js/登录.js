let iphone = document.getElementById('iphone'),
    iphone2 = document.getElementsByClassName('iphone2')[0],
    gain = document.getElementsByClassName('gain')[0],
    duanXin = document.getElementById('duanxin'),
    psd = document.getElementById('psd'),
    psd2 = document.getElementById('psd2');
    // console.log(iphone.value);


    // 手机号正则
iphone.onblur=function () {
    // console.log(iphone.value);
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (iphone.value == '') {
        iphone.placeholder = '手机号不能为空';
        return false;
    }else if(!reg.test(iphone.value)){
        iphone.value =  '请输入正确的手机号';
        return false;
    }else{
        iphone.value =  '输入正确';
        return true;
    }
}

iphone2.onblur=function () {
    // console.log(iphone.value);
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (iphone2.value == '') {
        iphone2.placeholder = '手机号不能为空';
        return false;
    }else if(!reg.test(iphone2.value)){
        iphone2.value =  '请输入正确的手机号';
        return false;
    }else{
        iphone2.value =  '输入正确';
        return true;
    }
}

// 验证码

gain.addEventListener('click',function(){
    // window.event?window.event.cancelBubble = true:window.event.stopPropagation();
    alert('2323');
})


// 短信码
gain.addEventListener('click',function(){
    duanXin.value = '2323';
})

// 确认密码
psd.addEventListener('focus',function(){
    psd.placeholder = '只能是英文加字母哦 6-12位';
})

psd.addEventListener('blur',function(){
    var reg = /^\w{6,12}$/;
    var reg1=/[^0-9]/;
    var reg2=/[^A-z]/;
    if(psd.value == ''){
        psd.placeholder='不能为空哦';
        return false; 
    }else if(!reg.test(psd.value)){            //长度在6-12之间 字母数字下划线  
        psd.value = '长度不在范围内或有非法字符';
        return false; 
    }else if(!reg1.test(psd.value)){           //不能全是字母
        psd.value = '不能全是字母';
        return false;
    }else if(!reg1.test(psd.value)){           //不能全是数字
        psd.value = '不能全是数字';
        return false
    }else{
        return true;
    }
})


// 再次确认
psd2.addEventListener('blur',()=>{
    if(psd2.value==''){
        psd2.value='不能为空哦 是不der';
        return false;
    }else if(psd2.value !=psd.value){
        psd2.value = '两次密码不一样';
        return false;
    }else{
        return true;
    }
})