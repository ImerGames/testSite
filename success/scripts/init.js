$(document).ready(function(){
    let settingsColumn = 3;
    let waterfall = new Waterfall({ 
        containerSelector: '.containerModules',
        boxSelector: '.module',
        minBoxWidth: 250
    });
    $("#input_phone_callback").inputmask({"mask": "+38 (999) 999-99-99"});
    $("#input_email_callback").inputmask("email");
    
    // $(window).resize(function(e){
    //     let ScreenWidth = screen.width;     
    //     if(ScreenHeight <= 1000){
    //         $('.containerModules').masonryGrid({'columns': 2});
    //     } 
    // });
});