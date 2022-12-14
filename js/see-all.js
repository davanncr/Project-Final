const button1 = document.querySelector("#see-more-1").addEventListener("click",seeAll1)
const button2 = document.querySelector("#see-more-2").addEventListener("click",seeAll2)
const button3 = document.querySelector("#see-more-3").addEventListener("click",seeAll3)
const button4 = document.querySelector("#see-more-4").addEventListener("click",seeAll4)
const button5 = document.querySelector("#see-more-5").addEventListener("click",seeAll5)
const button6 = document.querySelector("#see-more-6").addEventListener("click",seeAll6)

const seeless1 = document.querySelector("#seeless1")
const seeless2 = document.querySelector("#seeless2")

let j = 0

function seeAll1(){
    style(1)
    create_button_seeless(1)
}

function seeAll2(){
    style(2)
    create_button_seeless(2)
}

function seeAll3(){
    style(3)
    create_button_seeless(3)
}

function seeAll4(){
    style(4)
    create_button_seeless(4)
}

function seeAll5(){
    style(5)
    create_button_seeless(5)
}

function seeAll6(){
    style(6)
    create_button_seeless(6)
}

function style(i){
    let contents = document.getElementsByClassName(`restaurant${i}`)
        contents[0].style.flexWrap = "wrap"
        contents[0].style.overflow = "hidden"
        contents[0].style.height = "33rem"
}
function style_see_less(i){
    let contents = document.getElementsByClassName(`restaurant${i}`)
        contents[0].style.flexWrap = "nowrap"
        contents[0].style.overflow = "auto"
        contents[0].style.height = "18.75rem"
    let remove = document.querySelector(`#seeless${i}`)
        remove.remove()
}

function create_button_seeless(i){
    const seeless = document.createElement("button")
    const restaurant = document.querySelector(`#category${i}`)
    restaurant.append(seeless)
    seeless.classList.add("see-more","seeless")
    seeless.setAttribute("id",`seeless${i}`)
    seeless.innerText = "see less"
    seeless.style.width = "87vw"
    seeless.style.marginLeft = "auto"
    seeless.style.opacity = "0.5"
    j = i
    seeless.addEventListener("click",see_less)
}

function see_less(){
    style_see_less(j)
}

