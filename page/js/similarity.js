//current time
var realTime
var currentHour
var currentMinute
const getCurrentTimeDate = () => {
        let currentTimeDate = new Date();
        var hours   =  currentTimeDate.getHours();

        var minutes =  currentTimeDate.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;


        if(hours === 24){
            hours=24;
        }else{
            hours = hours%24;
        }

        currentHour = hours
        currentMinute = minutes
        setTimeout(getCurrentTimeDate, 500);

    }
    getCurrentTimeDate();
    realTime = `${currentHour}:${currentMinute}`;


//get class from similar restaurant
const getData = localStorage.getItem("restaurantData")
const similarity = JSON.parse(getData)

//change from similar restaurant to you may also like
let you_may_like = document.querySelector(".similar-res-title")
you_may_like.innerText = "You may also like"


let a = Math.floor(Math.random()*6) //random category

//create a child class
let my_restaurant = document.querySelector(".similarRestaurant")
for(let i=1; i<=8 ; i++){
    let menu = my_restaurant.querySelector(`.similarRestaurant .menu:nth-child(${i})`)
    menu.classList.add(`menu-${i}`)
}

get_Data(my_restaurant,8)
menu_hover(my_restaurant,8)
check_restaurant(my_restaurant,8)

//remove overflow contact in each restaurant
let websitID = document.querySelector("#website")
let website = websitID.parentElement
website.style.width = "10vw"
website.style.overflow = "hidden"
website.style.textOverflow = "ellipsis"
website.style.whiteSpace = "nowrap"
//target all links to new blank
websitID.setAttribute("target","_blank")
let location_link = document.querySelector("#location")
location_link.setAttribute("target","_blank")

//image full screen on click

//create a new element to display fullscreen
function getPics() {}
const trending = document.querySelector(".trending")
const fullPage = document.createElement("div")
trending.appendChild(fullPage)
fullPage.id = "fullpage"
fullPage.setAttribute("Onclick","this.style.display='none';")

const imgs = document.querySelectorAll(".trending-content img")

imgs.forEach(img => {
    img.addEventListener('click', function() {
      fullPage.style.backgroundImage = 'url(' + img.src + ')';
      fullPage.style.display = 'block';
    });
  });


//change contents
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
//modify contents
function modify(menu,link,img,name_link,name,res_category,Time,i){
    link.href = similarity[a][i][1]
    img.src = similarity[a][i][2]
    name_link = link
    name.innerText = similarity[a][i][4]
    res_category.innerText = similarity[a][i][5]
    Time.innerText = similarity[a][i][6]
}


//hover functions
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


//time functions
function check_restaurant(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let open_time = menu.querySelector(".span-popular1").innerText
        result = compare_time(open_time,realTime)
        if (result == true){
            let close = menu.querySelector(".close")
            close.style.display = ""
            close.style.color = "red"
            let open = menu.querySelector(".open")
            open.style.display = "none"
        }
        else{
            let open = menu.querySelector(".open")
            open.style.display = ""
            let close = menu.querySelector(".close")
            close.style.display = "none"
        }
    }
}

function compare_time(open_time,realTime) {
    let result
    let array_time = open_time.split("-")
    let am = array_time[0].split(":")
    let pm = array_time[1].split(":")
    let num_am = Number(am[0])
    let num_pm = Number(pm[0])
    if (num_am == 12 && num_pm == 12) result = false
    else {
        if(currentHour <= 12){

            if (currentHour-num_am >= 0) {
                result = false
            }
            else {
                result = true
            }
        }
        else{
            currentHour-=12
            if (currentHour-num_pm <= 0){
                result = false
            }
            else if(currentHour-num_pm > 0) {
                result = true
            }
            currentHour+=12
        }
    }
    return result
}

//fullscreen

function fullscreenImage1(){     
    fullscreen(1)
}

function fullscreen(n){
    let my_image = document.querySelector(`.trending-content${n} img`)
    my_image.style.maxWidth = "100%"
    my_image.style.maxHeight = "100%"
    my_image.style.bottom = "0"
    my_image.style.top = "0"
    my_image.style.left = "0"
    my_image.style.right = "0"
    my_image.style.margin = "auto"
    my_image.style.overflow = "auto"
    my_image.style.position = "fixed"
    my_image.style.objectFit = "contain"
}