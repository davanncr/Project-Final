
let forLog=document.querySelector('#forLogin');
let wLog=document.querySelector('#wantLogin');
let menuBar=document.querySelector('.menu-bar');

    if(!localStorage.yourData){
        alert('one')
        localStorage.url=window.location.href
        forLog.innerHTML = "<button class='login' id='wantLogin' onclick='goLoging()'><a>Log In</a></button>"
    }else{
        alert("two")
        const divsms=document.createElement('div');
        //let getData=JSON.parse(localStorage.yourData)
        let profileData=JSON.parse(localStorage.yourData);
        let username=profileData.firstname+' '+profileData.lastname
        divsms.id='sms'
        divsms.innerHTML=`<img src="image/letter.png" alt="" id="letter"><div id="info"><p>Name: ${username}</p><p>Email: ${profileData.email}</p><a href="" id="logout">Logout</a></div>`
        forLog.innerHTML=`<img src="image/user1.png" class='yourname' width="50px">`
        menuBar.appendChild(divsms)
    }
let i=0;
document.querySelector('.yourname').addEventListener('click',()=>{
    if(i==0){
        divsms.style.display='inline'   
        i=1     
    }else if(i==1){
        divsms.style.display='none' 
        i=0
    }

})
document.querySelector('#logout').addEventListener('click',()=>{
    delete localStorage.yourData
    window.location.reload()
})

