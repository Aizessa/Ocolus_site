$(document).ready(()=>{
    $('.burger').bind("click", ()=>{
        $('.bar').toggleClass('open');
        $('.navigation_mb').toggleClass('open');
       $('body').toggleClass('open');
   });
    window.addEventListener('resize', ()=>{
        if($(document).innerWidth() <= 930){
            $('.header_info').removeClass('col-10');
            $('.header_info').addClass('col-12');
        }else{
            $('.header_info').removeClass('col-12');
            $('.header_info').addClass('col-10');
        }
    });
    if($(document).innerWidth() <= 930){
            $('.header_info').removeClass('col-10');
            $('.header_info').addClass('col-12');
        }else{
            $('.header_info').removeClass('col-12');
            $('.header_info').addClass('col-10');
        }
});