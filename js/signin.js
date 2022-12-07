
fetch('https://script.google.com/macros/s/AKfycbx4mVyh9NAA_VZCFTfnhWhtpUy21IbxLbAUCq8MoIsMUjRLvqNHiMO5zpgpcKXjhGKh/exec',{method: 'GET'})
.then(res=>res.json()).then(data=>{
    let ld=document.querySelector('#loginData')
    let eml=document.querySelector('#email')
    let psw=document.querySelector('#password')
    let myData=[]
    let obj={firstname:'',lastname:'',email:'',password:''};
    for(let i=1;i<data.content.length;i++){
        obj.firstname=data.content[i][0];
        obj.lastname=data.content[i][1];
        obj.email=data.content[i][2];
        obj.password=data.content[i][3];
        myData[i-1]=obj
   
    }
    // localStorage.yourData=JSON.stringify(obj);
    ld.addEventListener('click',function(){
        for(let i=0;i<myData.length;i++){
            if(obj.email==eml.value){
                localStorage.yourData=JSON.stringify(obj);
                //window.location.assign("index.html")
                location.replace('index.html')
                alert("Success")
            }else{
                alert('something wrong!')
            }
        }
    
    })
})









