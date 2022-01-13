$('.add-btn').click(function(){
    $('.container div').addClass('active')// 괄호안에 . 없이 클래스명 입력 
})
$('.remove-btn').click(function(){
    $('.container div').removeClass('active') 
})
$('.toggle-btn').click(function(){
    $('.container div').toggleClass('active') 
})
