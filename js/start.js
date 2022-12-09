let forLog=document.querySelector('#forLogin');
setInterval(function(){
    if(!localStorage.yourData){
        forLog.innerHTML = "<button class='login' id='wantLogin' onclick='window.open('form.html','_parent')'><a>Log In</a></button>"
    }else{
        let getData=JSON.parse(localStorage.yourData)
        forLog.innerHTML="<label class='yourname'>"+getData.firstname+" "+getData.lastname+"<label>"
    }
},0)


