var bodys=document.querySelector('.body')
var prePos=window.pageYOffset;
window.onscroll=function(){
    var newPos=window.pageYOffset;
    if(prePos>=newPos){
        document.querySelector('.header-bar').style.top="0";
    }else{
        if(prePos>200){
        document.querySelector('.header-bar').style.top="-127px";            
        }
    }
    prePos=newPos;
    /////////////////////////
    var statePos=window.pageYOffset;
    if(statePos>100){
        bodys.classList.add('bodys');
    }
}
window.onreset=function(){
    document.querySelector('.header-bar').style.top="0";
}