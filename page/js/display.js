let uname=document.querySelector('#username');
let umail=document.querySelector('#email');
if(!localStorage.yourData){
    uname.style.display="inline";
    umail.style.display="inline";
}else{
    uname.style.display="none";
    umail.style.display="none";
}