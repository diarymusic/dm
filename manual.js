function blur(s){
    if(s==1){
        $('.ld').addClass('unblur');
        $('.ld').removeClass('ldblur');
    }else{
        $('.ld').addClass('ldblur');
        $('.ld').removeClass('unblur');
    }
}
window.onload = function(){
    scrControl(0);
    // document.getElementsByClassName('placehold').style="height:"currh";";
blur()

    $.ajax({
        url: "data.json",
        dataType: "json",
        //读取成功后执行
        success: function(data){
            // alert(data)
            for (let ix = 0; ix < data.length; ix++) {
                var c = data[ix].cover
                var l = data[ix].link
                var ti = data[ix].title
                var ct = data[ix].idct
                var au = data[ix].author
                var el = $('<img src='+'"'+c+'"'+'alt=""'+'data-title='+'"'+ti+'"'+'data-author='+'"'+au+'"'+'data-idct='+'"'+ct+'"'+'data-link='+'"'+l+'"'+'class="gallery"'+'data-bs-toggle="modal"'+'data-bs-target="#modalGallery"'+'>');
            el.appendTo($('.glry'));
            } 
        }
    });


    $.ajax({
        url: "artworks.json",
        dataType: "json",
        //读取成功后执行
        success: function(dataa){
            // alert(data)
            // for (let ix = 0; ix < data.length; ix++) {
            //     var c = data[ix].cover
            //     var l = data[ix].link
            //     var ti = data[ix].title
            //     var ct = data[ix].idct
            //     var au = data[ix].author
            //     var el = $('<img src='+'"'+c+'"'+'alt=""'+'data-title='+'"'+ti+'"'+'data-author='+'"'+au+'"'+'data-idct='+'"'+ct+'"'+'data-link='+'"'+l+'"'+'class="gallery"'+'data-bs-toggle="modal"'+'data-bs-target="#modalGallery"'+'>');
            // el.appendTo($('.glry'));
            // } 
            for (let ixx =0; ixx < dataa.length; ixx++) {
                var s = dataa[ixx].src
                var ell = $('<img src='+'"'+s+'"'+'alt=""'+'class="gallery"'+'data-bs-toggle="modal"'+'data-bs-target="#modalGallery"'+'>');
                ell.appendTo($('.gl'));
            }
        }
    });
/*
<img src="http://p2.music.126.net/bj3_5woeaQ3RXQ5VX0pxOA==/109951168535560762.jpg" alt="" data-title="I'll Be There For U" data-idct="“心神之域本无末端和边界，
但我可以为你永远投奔和找寻。”" data-link="https://music.163.com/song?id=2037851000" class="gallery" data-bs-toggle="modal" data-bs-target="#modalGallery">
*/

blur(1);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // $('.epbgimg').addClass('hidd');
        $('.loading').addClass('hidden');
        
        var ind = 0
        var i = setInterval(function() {
                var shows = document.getElementsByClassName("shows");
                show(shows[ind])
                // $(shows[ind]).addClass('showed');
                $(shows[ind]).removeClass('shows');
                ind+1;
            
                    if (ind == shows.length) {
                        clearInterval(i);
                        ind = 0;
                    }
                }, 500);

}
function show(cl,sh){
    if(sh!==1){
        $(cl).addClass('showed');
        $(cl).removeClass('lishows');
    }else{
        $(cl).removeClass('showed');
        $(cl).addClass('lishows');
    }
}

$(function () {
    $(document).on('scroll', function () {
        $('.h').addClass('hid')
        var h = $(window).scrollTop();
        var maxh = $(document).height();
        var currh = $(window).height();
        var num = Math.ceil((h - 100) / 160);
        var str = ".s" + num;
        // $(str).addClass('lishows');
        if (h > 100 && h < (maxh - currh - 1)) {
            // $(str).addClass('showed');
            show(str)
        } else if (h >= (maxh - currh - 1)) {
            // $('.lishows').addClass('showed');
            show('.lishows')
        } else {
            // $('.h').removeClass('hid')
            $('.lishows').removeClass('showed');
            show('.lishow',1)
        }
    });
});


jQuery(document).ready(function($){
        var tptxt = document.getElementsByClassName('typing');
        var tp = tptxt[0].getAttribute('data-text');
    $(".typing").lbyl({
        content:tp,
        speed: 50,
        type: 'show',
        finished: function(){ 
            $('.cursor').addClass('cursorfinish');
            $('.cursor').removeClass('cursor');
            setTimeout(
                $('.cursorfinish').lbyl({
                content:"Diarymusic /?",
                speed:100,
                type:"show",
                finished:function(){
                    scrControl(1);
                    $(".epbgimg").addClass('showed');
                    // $(".epbgimg").removeClass('hidd');
                    document.onkeydown = function () {
                        var e = window.event || arguments[0];
                        if (e.keyCode == 13) {
                            $('.h').addClass('hid');
                            show(str);
                            return false;
                        }
                }}
            }),400);
        } // Finished Callback
    });
});

function bodyScroll(event){
    event.preventDefault();
}

function scrControl(t){
    if(t == 0){ //禁止滚动
        document.body.style="overflow:hidden";
        document.body.addEventListener('touchmove', this.bodyScroll, { passive: false });
    }else if( t == 1){ //开启滚动
        document.body.style="";
        document.body.removeEventListener('touchmove',this.bodyScroll, {passive: false});
        window.onmousewheel=function(){
            return true
        }
    }
}

$(function() {
$(document).on("click", ".gallery", function(){
        $(".img-content").attr("src",$(this).attr('src'));
        // $(".idct").attr("data-idct",$(this).attr('data-idct'));
        $('.idct').empty().text($(this).attr('data-idct'));
        $('.author').empty().text($(this).attr('data-author'));
        $('.title').empty().text($(this).attr('data-title'));
        $(".link").attr("href",$(this).attr('data-link'));
        
    })
});

$(function(){
    
    $(document).on("click", ".gallery", function(){
        $('.fl').css({
        "visibility": "visible"
    })
        if($('body').hasClass('modal-open')){
            blur()
        }
        $('#modalGallery').click(function(){
                blur(1)
        })  
    })
})

$(function(){
    $(document).on("click", ".gl", function(){
        $('.fl').css({
            "visibility": "hidden"
        })
    })
})

$(function() {
	var scroll_width = 100;  // 设置每次滚动的长度，单位 px
	var scroll_events = "mousewheel DOMMouseScroll MozMousePixelScroll";  // 鼠标滚轮滚动事件名
        $('.glry').mouseenter(function(){
            $('.glry').on(scroll_events, function(e) {
            scrControl(0)
            var delta = e.originalEvent.wheelDelta;  // 鼠标滚轮滚动度数
            // 滑轮向上滚动，滚动条向左移动，scrollleft-
            if(delta > 0) {
                $(".glry").scrollLeft($(".glry").scrollLeft() - scroll_width);  
                // 这里的两个html是指包含横向滚动条的那一层
            }
            // 滑轮向下滚动，滚动条向右移动，scrollleft+
            else {
                $(".glry").scrollLeft($(".glry").scrollLeft() + scroll_width);
            }
        });
    })    
    $('.glry').mouseleave(function(){
        scrControl(1)
    })
});
$(function() {
	var scroll_width = 100;  // 设置每次滚动的长度，单位 px
	var scroll_events = "mousewheel DOMMouseScroll MozMousePixelScroll";  // 鼠标滚轮滚动事件名
        $('.gl').mouseenter(function(){
            $('.gl').on(scroll_events, function(e) {
            scrControl(0)
            var delta = e.originalEvent.wheelDelta;  // 鼠标滚轮滚动度数
            // 滑轮向上滚动，滚动条向左移动，scrollleft-
            if(delta > 0) {
                $(".gl").scrollLeft($(".gl").scrollLeft() - scroll_width);  
                // 这里的两个html是指包含横向滚动条的那一层
            }
            // 滑轮向下滚动，滚动条向右移动，scrollleft+
            else {
                $(".gl").scrollLeft($(".gl").scrollLeft() + scroll_width);
            }
        });
    })    
    $('.gl').mouseleave(function(){
        scrControl(1)
    })
});