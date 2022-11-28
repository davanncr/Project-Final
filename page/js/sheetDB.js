let myform=document.querySelector('form');
myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let mydataform=new FormData(myform);
    fetch('https://script.google.com/macros/s/AKfycbzPdG4zWGNHU-NDystbIiVjWRYYW56QcEU2t-Hr4TRzqxAkDn-efK_WIUDh0ghpYZ54/exec',{method:'POST',body:mydataform})
})