jQuery(document).ready(function($){

    $('.list-bar').click(function(){
        $('.nav-top').addClass('open_menu')
    })
    $('.cross_toggle').click(function(){
        $('.nav-top').removeClass('open_menu')
    })
    AOS.init();
})