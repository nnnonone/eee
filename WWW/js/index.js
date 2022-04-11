

$(function(){

//    $('.main-box>li').mouseenter(function(){
//
//        $(this).children('.sub-box').stop().slideDown();
//    });
//        
//    $('.main-box>li').mouseleave(function(){
//        $(this).children('.sub-box').stop().slideUp();
//    });
//	
    

    $('.main-box>li').mouseenter(function(){
        
        $(this).children('.sub-box').addClass('active');
        $(this).children(' .main-box > li  > a').css('color','pink')
        
    });
    
    $('.main-box>li').mouseleave(function(){
        
        $('.sub-box').removeClass('active');
        $(' .main-box > li  > a').css('color','#333')
    });
    
    $('.search_box>i').mouseenter(function(){
        
        $('.search_box>input').css('opacity','1')
        
    });
        
//    $('.search_box').mouseleave(function(){
//        
//        $('.search_box>input').css('opacity','0')
//        
//    });
    
    
});























