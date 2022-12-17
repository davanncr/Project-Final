const getData = localStorage.getItem("restaurantData")
const similarity = JSON.parse(getData)
// console.log(similarity[0][0][1])

let you_may_like = document.querySelector(".similar-res-title")
you_may_like.innerText = "You may also like"

let a = Math.floor(Math.random()*6) //random category

let my_restaurant = document.querySelector(".similarRestaurant")
for(let i=1; i<=8 ; i++){
    let menu = my_restaurant.querySelector(`.similarRestaurant .menu:nth-child(${i})`)
    menu.classList.add(`menu-${i}`)
}

get_Data(my_restaurant,8)
// console.log(tmp_restaurant)
for(let j = 1 ; j<=8 ; j++){
    console.log(similarity[a][0][j])
}
console.log(my_restaurant)
function get_Data(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let link = menu.querySelector("a")
        let img = menu.querySelector("img")
        let name_link = menu.querySelector(".link_res")
        let name = menu.querySelector(".name-restaurant")
        let res_category = menu.querySelector(".span-popular")
        let Time = menu.querySelector(".span-popular1")
        modify(menu,link,img,name_link,name,res_category,Time,i-1)
    }

}

function modify(menu,link,img,name_link,name,res_category,Time,i){
    link.href = similarity[a][i][1]
    img.src = similarity[a][i][2]
    name_link = link
    name.innerText = similarity[a][i][4]
    res_category.innerText = similarity[a][i][5]
    Time.innerText = similarity[a][i][6]
}
