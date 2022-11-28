var recom="<i class='fa fa-thumbs-up' aria-hidden='true'></i>Recommended"
var notrecom="<i class='fa fa-thumbs-down' aria-hidden='true'></i>Not recommended"
function commentTo(data){
    var stars
    var recomnots
    if(data.numStars==1){
        recomnots=notrecom
        stars = "<span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==2){
        recomnots=notrecom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==3){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==4){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==5){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span>"
    }else{
        recomnots=notrecom
        stars = "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }
    var html="<div class='commented'><div class='topcomment'><img src='../image/user.png' width='40px'><label class='name'><label>"+data.name+"<br>"+data.email+"</label></label><label><br>"+stars+"</label><label class='recomnot'><br><label>"+recomnots+"</label></label><label><br><label>"+data.current+"</label></label></div><div class='bottoncomment'>"+data.comment+"</div></div>"
    $('#getPost').append(html)
}
function readData(){
    fetch('https://script.google.com/macros/s/AKfycbw9BUMRUsAj9PoBBjtQRbOcJ5sQAnaLBLX9HPfCw-cglXHGZlfKXgaz_twYlWRmIv5B/exec')
    .then(res=>res.json()).then(data=>{
        // console.log(data.content.length);
        document.querySelector('#numRecomment').innerHTML=data.content.length-1
        let tData=[]
        for(var i=1; i<data.content.length;i++){
            let getData={'name':'','email':'','numStars':0,'comment':'','current':''}
            getData.name=data.content[i][0]
            getData.email=data.content[i][1]
            getData.numStars=data.content[i][2]
            getData.comment=data.content[i][3]
            getData.current=data.content[i][4]
            tData[i-1]=getData
        }
        for(var j=tData.length-1;j>=0;j--) {
            commentTo(tData[j])
        }
    })
}
readData()
var i=1;
$(document).ready(function() {
    $('#post').click(function(){
        if(i%2==0){
            document.querySelector('#logoRefresh').style.transform='rotate(-1000deg)'            
        }else{
            document.querySelector('#logoRefresh').style.transform='rotate(1000deg)'            
        }
        i++
        document.querySelector('#getPost').innerHTML=''
        readData()
    })
    $('#refresh').click(function(){
        if(i%2==0){
            document.querySelector('#logoRefresh').style.transform='rotate(-1000deg)'            
        }else{
            document.querySelector('#logoRefresh').style.transform='rotate(1000deg)'            
        }
        i++
        document.querySelector('#getPost').innerHTML=''
        readData()
    })
})
