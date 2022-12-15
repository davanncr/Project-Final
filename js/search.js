//for add Name restraurant and url
const bodySeach=document.querySelector('.body-search')
const divSeachList=document.createElement('div')
divSeachList.className='list-search'
let popular=[
    {name:'Mealea Restaurant',link:''},
    {name:'Malis Restaurant',link:''},
    {name:'Banh Chhav Ela',link:''},
    {name:'Burgershack',link:''},
    {name:'CUTS ROSEWOOD',link:''},
    {name:'Champei Garden',link:''},
    {name:'Deja Vu -The Garden Pub',link:''},
    {name:"Digby's Bar and Grill",link:''},
]//1
let breakfast=[
    {name:'Malis Restaurant',link:''},
    {name:'CUTS ROSEWOOD',link:''},
    {name:'Deja Vu -The Garden Pub',link:''},
    {name:'Burgershack',link:''},
]//2
let lunch=[
    {name:'A',link:''},
    {name:'B',link:''},
    {name:'C',link:''},

]//3
let dinner=[
    {name:'G',link:''},
    {name:'H',link:''},
    {name:'I',link:''},

]//4
let fastfood=[
    {name:'M',link:''},
    {name:'N',link:''},
    {name:'O',link:''},

]//5
let chinese=[
    {name:'S',link:''},
    {name:'T',link:''},
    {name:'U',link:''},

]//6
let nearly=[
    {name:'Y',link:''},
    {name:'Z',link:''},
    {name:'$',link:''},
]//7
let natural=[
    {name:'V',link:''},
    {name:'W',link:''},
    {name:'x',link:''},
]//8
let realsonablePrice=[
    {name:'P',link:''},
    {name:'Q',link:''},
    {name:'R',link:''},
]//9
let drink=[
    {name:'G',link:''},
    {name:'K',link:''},
    {name:'L',link:''},
]//10
let barAndRooftop=[
    {name:'D',link:''},
    {name:'E',link:''},
    {name:'F',link:''},
]//11
let bufet=[
    {name:'@',link:''},
    {name:'#',link:''},
    {name:'!',link:''},
]//12
let popularCode=''
let lunchCode=''
let breakfastCode=''
let dinnerCode=''
let fastfoodCode=''
let chineseCode=''
let nearlyCode=''
let naturalCode=''
let realsonablePriceCode=''
let drinkCode=''
let barAndRooftopCode=''
let bufetCode=''

popular.forEach(data=>{
    popularCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
breakfast.forEach(data=>{
    breakfastCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
lunch.forEach(data=>{
    lunchCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
dinner.forEach(data=>{
    dinnerCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
fastfood.forEach(data=>{
    fastfoodCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
chinese.forEach(data=>{
    chineseCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
nearly.forEach(data=>{
    nearlyCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
natural.forEach(data=>{
    naturalCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
realsonablePrice.forEach(data=>{
    realsonablePriceCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
drink.forEach(data=>{
    drinkCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
barAndRooftop.forEach(data=>{
    barAndRooftopCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
bufet.forEach(data=>{
    bufetCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})

let codeString=popularCode+breakfastCode+lunchCode+dinnerCode+fastfoodCode+chineseCode+nearlyCode+naturalCode+realsonablePriceCode+drinkCode+barAndRooftopCode+bufetCode
divSeachList.innerHTML=codeString
bodySeach.appendChild(divSeachList)

let filterID=document.querySelector('#filter')
filterID.addEventListener('change',(e)=>{
    let index=filterID.selectedIndex
    if(index==1){
        divSeachList.innerHTML=popularCod
    }else if(index==2){
        divSeachList.innerHTML=breakfastCode
    }else if(index==3){
        divSeachList.innerHTML=lunchCode
    }else if(index==4){
        divSeachList.innerHTML=dinnerCode
    }else if(index==5){
        divSeachList.innerHTML=fastfoodCode
    }else if(index==6){
        divSeachList.innerHTML=chineseCode
    }else if(index==7){
        divSeachList.innerHTML=nearlyCode
    }else if(index==8){
        divSeachList.innerHTML=naturalCode
    }else if(index==9){
        divSeachList.innerHTML=realsonablePriceCode
    }else if(index==10){
        divSeachList.innerHTML=drinkCode
    }else if(index==11){
        divSeachList.innerHTML=barAndRooftopCode
    }else if(index==12){
        divSeachList.innerHTML=bufetCode
    }else{
        divSeachList.innerHTML=codeString
    }
    document.querySelector('#search-bar').value=''
})
document.querySelector('#search-bar').value=''
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
