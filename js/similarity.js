const similar = document.querySelector(".similarRestaurant")
for(let i=1; i<=8 ; i++){
    let menu = similar.querySelector(`.similarRestaurant .menu:nth-child(${i})`)
    menu.classList.add(`menu-${i}`)
}
