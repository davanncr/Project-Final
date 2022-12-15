//for add Name restraurant and url
const bodySeach=document.querySelector('.body-search')
const divSeachList=document.createElement('div')
divSeachList.className='list-search'
let ListName=[
    {name:'Zhan Liang Chinese',link:''},
    {name:'YiSang',link:''},
    {name:'Terraza',link:''},
    {name:'Sundown Social Club',link:''},
    {name:'Red Bar',link:''},
    {name:'One More',link:''},
    {name:'Metro Azura',link:''},
    {name:'Ming Palace',link:''},
]
let codeString=''
ListName.forEach(data=>{
    codeString+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
divSeachList.innerHTML=codeString
bodySeach.appendChild(divSeachList)


//for searching
const searchList=document.querySelector('.list-search')
const search=document.querySelector('#search-bar')
searchList.children[1].style.display="none"
search.addEventListener('keyup',(e)=>{
    let keyword=e.target.value.toLowerCase()
    let list=searchList.children
    if(keyword==''||keyword==' '){
        searchList.style.display="none"
        search.value=''
    }else{
        searchList.style.display="inline"
    }
    for(let i=0;i<list.length;i++){
        let word=list[i].textContent.toLowerCase()
        if(word.indexOf(keyword)>=0){
            list[i].style.display="inline"
        }else{
            list[i].style.display="none"
        }
       
    }
})
setInterval(function(){
    if(search.value==''){
        searchList.style.display="none"
    }
},0)
document.addEventListener('click',(e)=>{
    if(search==e.target&&search.value!=''){
        searchList.style.display="inline"
    }else{
        searchList.style.display="none"
    }
})