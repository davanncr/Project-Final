var myData=[]
fetch('https://script.google.com/macros/s/AKfycbx4mVyh9NAA_VZCFTfnhWhtpUy21IbxLbAUCq8MoIsMUjRLvqNHiMO5zpgpcKXjhGKh/exec',{method: 'GET'})
.then(res=>res.json()).then(data=>{
    let ld=document.querySelector('#loginData')
    let eml=document.querySelector('#email')
    let psw=document.querySelector('#password')
    let ans=document.querySelector('#answer')
    let remember=document.querySelector('#remember')
    // if(localStorage.rememberData.length>0){
    //     let reData=JSON.parse(localStorage.rememberData)
    //     // eml.value=reData.email
    //     // psw.value=reData.password
    //     console.log(reData.email,reData.password)
    // }
    // console.log(localStorage.rememberData)
    for(var i=1;i<data.content.length;i++){
        let obj={firstname:'',lastname:'',email:'',password:''};
        obj.firstname=data.content[i][0];
        obj.lastname=data.content[i][1];
        obj.email=data.content[i][2];
        obj.password=data.content[i][3];
        myData[i-1]=obj
    }
    var bool=1;
  
    ld.addEventListener('click',function(){
        for(let i=0;i<myData.length;i++){
           
            if(myData[i].email==eml.value&&myData[i].password==psw.value){
                localStorage.yourData=JSON.stringify(myData[i]);
                location.replace('index.html')
                if(remember.checked){
                    localStorage.rememberData=JSON.stringify(myData[i])
                }else{
                    delete localStorage.rememberData
                }
                bool=0;
                break;
            }
        }
        if(bool==1){
            ans.innerHTML='Something went wrong!'
        }
    })
})









