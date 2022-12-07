
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
}
