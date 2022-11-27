function commentTo(data){
    var html="<div class='commented'><div class='topcomment'><img src='../image/user.png' width='50px'><label class='name'><label>"+data.name+"<br>"+data.email+"</label></label><label><br><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span></label><label><br><label><i class='fa fa-thumbs-up' aria-hidden='true'></i>Recommended</label></label><label><br><label>"+data.current+"</label></label></div><div class='bottoncomment'>"+data.comment+"</div></div>  "
    $('#getPost').append(html)
}
$(document).ready(function() {
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
            'current':current+''
        }
        data.push(info)
        localStorage.dataRestaurant1=JSON.stringify(data)
        commentTo(info)
        $('#username').val('')
        $('#email').val('')
        $('#comment').val('')            
        }else{
            document.querySelector('#eror').innerHTML='Please complete all!'
        }

    })
})

