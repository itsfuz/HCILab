$(document).ready(function(){

    var visible = false;
    var sliderCount = $('.slider div.slides div.slidescontent').length;
    var sliderWidth = $('.slider div.slides div.slidescontent').width();
    var sliderHeight = $('.slider div.slides div.slidescontent').height();
    
    $('.slider').css({width:sliderWidth, height:sliderHeight});
    $('.slider div.slides').css({width:sliderCount * sliderWidth, marginLeft:-sliderWidth});

    $('.Container').show();
    // $('#showImage').click(function(){
    //     $('#containSlider').slideDown(500);
    //     $('#containText').slideUp(500);
    // })
    // $('#showText').click(function(){
    //     $('#containSlider').slideUp(500);
    //     $('#containText').slideDown(500);
    // })
    $('#leftBtn').click(function(){
        $('#slider div.slides').animate({left: +sliderWidth}, 1000, function(){
            $('.slider div.slides div.slidescontent:last-child').prependTo('.slider div.slides');
            $('.slider div.slides').css('left','');
        });
    })
    $('#rightBtn').click(function(){
        $('.slider div.slides').animate({left: -sliderWidth}, 1000, function(){
            $('.slider div.slides div.slidescontent:first-child').appendTo('.slider div.slides');
            $('.slider div.slides').css('left','');
        });
    })
});