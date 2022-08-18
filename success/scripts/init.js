$(document).ready(function(){
    console.log(screen.width);
    if(screen.width <= 900){
        $('.containerModuless , body>.section-comments>.container>.list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:false,
            adaptiveHeight: true
        });
    }else{
        $('.containerModuless').masonry({
            itemSelector: '.module',
            fitWidth: true,
            horizontalOrder: true
        });
    }

    $("#input_phone_callback").inputmask({"mask": "+38 (999) 999-99-99"});
    $("#input_email_callback").inputmask("email");
    
    // $(window).resize(function(e){
    //     let ScreenWidth = screen.width;     
    //     if(ScreenHeight <= 1000){
    //         $('.containerModules').masonryGrid({'columns': 2});
    //     } 
    // });
});