setInterval(function(){
    const select=document.querySelector("#choosen-bar")
    const search=document.querySelector("#search-bar")
    var indexSellcted=select.selectedIndex;
    if(indexSellcted==0){
        select.style.width="50px";
        search.style.width="325px";
    }else if(indexSellcted==1){
        select.style.width="60px";
        search.style.width="315px";
    }else if(indexSellcted==2){
        select.style.width="80px";
        search.style.width="295px";
    }else if(indexSellcted==3){
        select.style.width="60px";
        search.style.width="315px";
    }
},0)