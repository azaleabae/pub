$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown() // menu li 의 자식요소 
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp() // stop은 이벤트가 지속되는걸 멈춰준다.
})