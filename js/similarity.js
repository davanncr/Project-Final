const similar = document.querySelector(".similarRestaurant")
for(let i=1; i<=8 ; i++){
    let menu = similar.querySelector(`.similarRestaurant .menu:nth-child(${i})`)
    menu.classList.add(`menu-${i}`)
}


let popupar = document.querySelector(".restaurant1")
let Bar_and_Rooftop = document.querySelector(".restaurant2")
let nearby = document.querySelector(".restaurant3")
let BLDserved = document.querySelector(".restaurant4")
let fast_food = document.querySelector(".restaurant5")
let chinese_res = document.querySelector(".restaurant6")
const restaurant_categories = [popupar,Bar_and_Rooftop,nearby,BLDserved,fastfood,chinese]

restaurant_data(popupar,8)
restaurant_data(Bar_and_Rooftop,8)
restaurant_data(nearby,8)
restaurant_data(BLDserved,8)
restaurant_data(fast_food,8)
restaurant_data(chinese_res,8)

function restaurant_data(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let link = menu.querySelector("a").href
        let img = menu.querySelector("img").src
        let name_link = menu.querySelector(".link_res")
            name_link = link
        let name = menu.querySelector(".name-restaurant").innerText
        let res_category = menu.querySelector(".span-popular").innerText
        let Time = menu.querySelector(".span-popular1").innerText
        restaurant[i] = [menu,link,img,name_link,name,res_category,Time]
    }
}