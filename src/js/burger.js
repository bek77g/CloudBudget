$(document).ready(function() {
    $(".burger").click(function(){
        $(".burger, .header__nav").toggleClass("is-active")
        
        if($(this).hasClass("is-active")){
        $(".header__nav").slideLeft(300);
        }else{
        $(".header__nav").slideRight(300);
        }
    });
});