
let downLoad = document.getElementsByClassName('download')[0];
// console.log(downLoad);
let close_ = document.getElementsByClassName('close')[0];

close_.addEventListener('click',function(){
    downLoad.style.display = 'none';
})