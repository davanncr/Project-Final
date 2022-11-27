function commentTo(data){
    var stars
    if(data.numStars==1){
        stars = "<span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==2){
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==3){
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==4){
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==5){
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span>"
    }
    var html="<div class='commented'><div class='topcomment'><img src='../image/user.png' width='40px'><label class='name'><label>"+data.name+"<br>"+data.email+"</label></label><label><br>"+stars+"</label><label class='recomnot'><br><label>"+data.recomnots+"</label></label><label><br><label>"+data.current+"</label></label></div><div class='bottoncomment'>"+data.comment+"</div></div>"
    $('#getPost').append(html)
}
var numStar
var recomnot
$(document).ready(function() {
    var recom="<i class='fa fa-thumbs-up' aria-hidden='true'></i>Recommended"
    var notrecom="<i class='fa fa-thumbs-down' aria-hidden='true'></i>Not recommended"
    $('#star1').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=notrecom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'white';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        numStar=1
        recomnot=notrecom
    })
    $('#star2').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=notrecom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        numStar=2
        recomnot=notrecom
    })
    $('#star3').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        numStar=3
        recomnot=recom
    })
    $('#star4').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'orange';
        document.querySelector('#star5').style.color = 'white';
        numStar=4
        recomnot=recom
    })
    $('#star5').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'orange';
        document.querySelector('#star5').style.color = 'orange';
        numStar=5
        recomnot=recom
    })

    var data=[]
    if(!localStorage.dataRestaurant1){
        localStorage.dataRestaurant1=[]
    }else{
        data=JSON.parse(localStorage.dataRestaurant1)
    }
    for(var i=0;i<data.length;i++){
        commentTo(data[i])
    }
    $('#post').click(function(){
        var currentDate=new Date();
        var day=currentDate.getDate();
        var month=currentDate.getMonth()+1;
        var year=currentDate.getFullYear();
        var hour=currentDate.getHours();
        var minute=currentDate.getMinutes();
        var second=currentDate.getSeconds();
        var current=day+'/'+month+'/'+year+'  '+hour+':'+minute+':'+second
        document.querySelector('#eror').innerHTML=''
        if($('#username').val()!=''&&$('#email').val()!=''&&$('#comment').val()!=''){
        var info={
            'name':$('#username').val(),
            'email':$('#email').val(),
            'comment':$('#comment').val(),
            'current':current+'',
            'numStars':numStar,
            'recomnots':recomnot+''
        }
        data.push(info)
        localStorage.dataRestaurant1=JSON.stringify(data)
        commentTo(info)
        $('#username').val('')
        $('#email').val('')
        $('#comment').val('')     
        
        document.querySelector('#star1').style.color = 'white';
        document.querySelector('#star2').style.color = 'white';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        document.querySelector('#ratingRecomment').innerHTML=''
        }else{
            document.querySelector('#eror').innerHTML='Please complete all!'
        }
        
    })
})
