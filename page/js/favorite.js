//create new class for favorite icon on click
const content_sign2  = document.querySelector(".content-sign2")
content_sign2.addEventListener("mouseover",MouseOver)
content_sign2.addEventListener("mouseout",MouseOut)
function MouseOver(){
    let favIcon = document.querySelector(".favorite-icon")
    favIcon.setAttribute("icon","material-symbols:favorite")
    favIcon.style.color = "orange"
}
function MouseOut(){
    let favIcon = document.querySelector(".favorite-icon")
    favIcon.setAttribute("icon","mdi:cards-heart-outline")
    favIcon.style.color = "black"
}
 
