setInterval(function(){
    const select=document.querySelector("#filter")
    const search=document.querySelector("#search-bar")
    const listSearch=document.querySelector(".list-search")
    let y=91.5-75
    var indexSellcted=select.selectedIndex;
    var wth=340+70;
    if(indexSellcted==0){
        select.style.width="65px";
        search.style.width=wth-65+"px";
        listSearch.style.width=wth-(75+y)+"px";
    }else if(indexSellcted==1){
        select.style.width="75px";
        search.style.width=wth-75+"px";
        listSearch.style.width=wth-(75+y)+"px";
    }else if(indexSellcted==2){
        select.style.width="135px";
        search.style.width=wth-135+"px";
        listSearch.style.width=wth-(135+y)+"px";
    }else if(indexSellcted==3){
        select.style.width="115px";
        search.style.width=wth-115+"px";
        listSearch.style.width=wth-(115+y)+"px";
    }else if(indexSellcted==4){
        select.style.width="115px";
        search.style.width=wth-115+"px";
        listSearch.style.width=wth-(115+y)+"px";
    }else if(indexSellcted==5){
        select.style.width="90px";
        search.style.width=wth-90+"px";
        listSearch.style.width=wth-(90+y)+"px";
    }else if(indexSellcted==6){
        select.style.width="150px";
        search.style.width=wth-150+"px";
        listSearch.style.width=wth-(150+y)+"px";
    }else if(indexSellcted==7){
        select.style.width="70px";
        search.style.width=wth-70+"px";
        listSearch.style.width=wth-(70+y)+"px";
    }else if(indexSellcted==8){
        select.style.width="140px";
        search.style.width=wth-140+"px";
        listSearch.style.width=wth-(140+y)+"px";
    }else if(indexSellcted==9){
        select.style.width="65px";
        search.style.width=wth-65+"px";
        listSearch.style.width=wth-(65+y)+"px";
    }
    if(indexSellcted==1||indexSellcted==2||indexSellcted==3||indexSellcted==4||indexSellcted==5||indexSellcted==6||indexSellcted==7||indexSellcted==8||indexSellcted==9||indexSellcted==10||indexSellcted==11||indexSellcted==12){
        select.style.fontSize="13px";
        select.style.opacity=0.55;
    
    }else{
        select.style.fontSize="20px";
        select.style.opacity=0.55;
    }
},0)