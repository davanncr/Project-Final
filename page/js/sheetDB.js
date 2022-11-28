let myform=document.querySelector('form');
myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let mydataform=new FormData(myform);
    fetch('https://script.google.com/macros/s/AKfycbxuGPx8V2_2OGfj91d2L7kCzDhKHfDDUqQ5j2kQOWwPpcw-2G7w0IcgsD_JQkXRBfep/exec',{method:'POST',body:mydataform})
})