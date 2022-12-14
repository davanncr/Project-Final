const searchList=document.querySelector('.list-search')
const search=document.querySelector('#search-bar')
searchList.children[1].style.display="none"
//console.log(searchList.children[7].textContent)
// searchList.style.display="inline"
// console.log(searchList.style)
// console.log(list)
search.addEventListener('keyup',(e)=>{
    let keyword=e.target.value.toLowerCase()
    let list=searchList.children
    if(keyword==''){
        searchList.style.display="none"
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
    if(search!=e.target){
        searchList.style.display="none"
    }
})