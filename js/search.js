//for add Name restraurant and url
const bodySeach=document.querySelector('.body-search')
const divSeachList=document.createElement('div')
divSeachList.className='list-search'
let subLink='https://davanncr.github.io/Project-Final/page/'
let popular=[
    {name:'Mealea Restaurant',link:`${subLink}restaurant1`},
    {name:'Malis Restaurant',link:`${subLink}restaurant2`},
    {name:'CUTS ROSEWOOD',link:`${subLink}`},
    {name:'Burgershack',link:`${subLink}`},
    {name:'Deja Vu -The Garden Pub',link:`${subLink}`},
    {name:'KYO Wagyu Omakase',link:`${subLink}`},
    {name:"Frist Time Buffet",link:`${subLink}`},
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
let chineseAndJapanese=[
    {name:'S',link:''},
    {name:'T',link:''},
    {name:'U',link:''},

]//6
let nearly=[
    {name:'Y',link:''},
    {name:'Z',link:''},
    {name:'$',link:''},
]//7
let barAndRooftop=[
    {name:'Deja Vo -The Garden Club',link:`${subLink}`},
    {name:"Digby's Bar and Grill",link:`${subLink}`},
    {name:'Burgershark',link:`${subLink}`},
    {name:'Eclipse Sky Bar',link:`${subLink}`},
    {name:'FiveFive Rooftop',link:`${subLink}`},
    {name:'Le moon Rooftop',link:`${subLink}`},
    {name:'Juniper Gin',link:`${subLink}`},
]//8
let bufet=[
    {name:'First Time',link:`${subLink}`},
    {name:'Oishi Buffet Sukisoup & BBQ',link:`${subLink}`},
    {name:'HaNa Buffet BBBQ&Sukisoup',link:`${subLink}`},
    {name:'Lunch Time',link:`${subLink}`},
]//9
let popularCode=''
let lunchCode=''
let breakfastCode=''
let dinnerCode=''
let fastfoodCode=''
let chineseAndJapaneseCode=''
let nearlyCode=''
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
chineseAndJapanese.forEach(data=>{
    chineseAndJapaneseCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
nearly.forEach(data=>{
    nearlyCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})

barAndRooftop.forEach(data=>{
    barAndRooftopCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
bufet.forEach(data=>{
    bufetCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})

let codeString=popularCode+breakfastCode+lunchCode+dinnerCode+fastfoodCode+chineseAndJapaneseCode+nearlyCode+barAndRooftopCode+bufetCode
divSeachList.innerHTML=codeString
bodySeach.appendChild(divSeachList)

let filterID=document.querySelector('#filter')
filterID.addEventListener('change',(e)=>{
    let index=filterID.selectedIndex
    if(index==1){
        divSeachList.innerHTML=popularCode
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
        divSeachList.innerHTML=barAndRooftopCode
    }else if(index==9){
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
