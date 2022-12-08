let myform=document.querySelector('form');
let cd=document.querySelector('#currentDate');

myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var currentDate=new Date();
    var day=currentDate.getDate();
    var month=currentDate.getMonth()+1;
    var year=currentDate.getFullYear();
    var hour=currentDate.getHours();
    var minute=currentDate.getMinutes();
    var second=currentDate.getSeconds();
    var current=hour+':'+minute+':'+second+' '+year+'/'+month+'/'+day+'  '
    cd.value=current+"";
    let mydataform=new FormData(myform);
    fetch('https://script.google.com/macros/s/AKfycbxdzqG2qBRqSuqwuzb0VYnOXwi0eDv2KTkTZQ7LE93QAwxrcYf0YNOmRXOGI2Fol3zH2g/exec',{method:'POST',body:mydataform})
})