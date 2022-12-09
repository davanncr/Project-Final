let forLog=document.querySelector('#forLogin');
let wLog=document.querySelector('#wantLogin');
    if(!localStorage.yourData){
        localStorage.url=window.location.href
        forLog.innerHTML = "<button class='login' id='wantLogin' onclick='goLoging()'><a>Log In</a></button>"
    }else{
        let getData=JSON.parse(localStorage.yourData)
        forLog.innerHTML="<label class='yourname' onclick='goLoging()'>"+getData.firstname+" "+getData.lastname+"<label>"
    }

