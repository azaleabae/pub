// $('.show-btn').click(function(){
//     $('.container div').slideDown()
// })
// $('.hide-btn').click(function(){
//     $('.container div').slideUp()
// })
// $('.toggle-btn').click(function(){
//     $('.container div').slideToggle()
// })

$('.show-btn').click(function(){
    $('.container div').fadeIn('fast') // 메서드 뒤의 () 에는 시간(속도)이 들어간다.
})
$('.hide-btn').click(function(){
    $('.container div').fadeOut('slow')
})
$('.toggle-btn').click(function(){
    $('.container div').fadeToggle(3000) // 숫자로 시간을 정해줄 때에는 따옴표를 쓰지 않는다.
})