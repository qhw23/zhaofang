let xian = document.getElementsByClassName('xian')[0],
    yin = document.getElementsByClassName('yin')[0],
    yanZheng = document.getElementsByClassName('yanzheng')[0],
    phone = document.getElementsByClassName('phone')[0];

xian.addEventListener('click', function () {
    yanZheng.style.display = 'block';
    // phone.style.display = 'none';
})

yin.addEventListener('click', function () {
    yanZheng.style.display = 'none';
    phone.style.display = 'black';
})