$(document).ready(function(){
    $('.containerModules').masonry({horizontalOrder: true});
    $("#input_phone_callback").inputmask({"mask": "+38 (999) 999-99-99"});
    $("#input_email_callback").inputmask("email");
});