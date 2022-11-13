var bodys=document.querySelector('#body-bar');
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
    if(statePos>=58){
        bodys.classList.add('body-bar');
        //window.alert(statePos)

    }
}
window.onreset=function(){
    document.querySelector('.header-bar').style.top="0";
    
}