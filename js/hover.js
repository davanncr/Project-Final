const popular_hover = document.querySelector(".restaurant1")
const BR_hover = document.querySelector(".restaurant2")
const nearby_hover = document.querySelector(".restaurant3")
const BLDS_hover = document.querySelector(".restaurant4")
const fastfood_hover = document.querySelector(".restaurant5")
const chinese_hover = document.querySelector(".restaurant6")
menu_hover(popular_hover,8)
menu_hover(BR_hover,8)
menu_hover(nearby_hover,8)
menu_hover(BLDS_hover,8)
menu_hover(fastfood_hover,8)
menu_hover(chinese_hover,8)

function menu_hover(restaurant,n){
    for(let i = 1 ; i<=n ; i++){
        let categories = restaurant.querySelector(`.menu-${i}`)
        let category = categories.querySelector(".span-popular").innerText
        categories.addEventListener("mouseover",mousehover(categories,category))
    }
    
}

function mousehover(categories,category){
    categories.style.setProperty("--my-content",`"${category}"`)
}