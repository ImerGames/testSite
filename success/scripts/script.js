$(document).ready(function(){
    let mouseOffset = { x : "110" , y : "110" }
    let targetOffset = { x : "0" , y : "0" } 

    $("#close_popup_FSQ").click(function(){
        $(".popups").fadeOut(300);
    });
    $("#form-send").click(function(){
        let name = $("#input_name_callback");
        let phone = $("#input_phone_callback");
        let mail = $("#input_email_callback");

        let patternMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(name.val().length < 2){
            name.addClass("error");
        }else if(phone.val().length < 5){
            name.removeClass("error");
            phone.addClass("error");
        }else if(patternMail.test(mail.val()) == false){
            phone.removeClass("error");
            mail.addClass("error");
        }else{
            mail.removeClass("error");
            phone.removeClass("error");
            name.removeClass("error");

            $.ajax({
                method: "POST",
                url: "success/scripts/mail.send.php",
                data: { 'name': name.val(), 'phone': phone.val() , 'mail': mail.val() }
              })
                .done(function() {
                    $(".popups").fadeIn(300);
                });
        }
    });
    $("#close_burger").click(function(){
        $(".section-menu>.main").css("right" , "-390px");
        $(".section-menu").fadeOut(500);
        $("body").css("overflow-y" , "auto");
    });
    $(".burger").click(function(){
        $(".section-menu>.main").css("right" , "0px");
        $(".section-menu").fadeIn(500);
        $("body").css("overflow-y" , "hidden");    
    });
    $("#btn_open_close_more_modules").click(function(){
        let isOpen = $(this).attr("data-open");
        
        if(isOpen == "true"){
            //open
            $(".secondOrderModules").show();
            $(this).attr("data-open" , "false");
            $(this).text("Менше модулів");
            setTimeout(function(){
                $('.containerModuless').masonry({
                    itemSelector: '.module',
                    fitWidth: true,
                    horizontalOrder: true
                });
                $(".secondOrderModules").css({"opacity":"1"});
            },400);
        }else{
            //close
            $(".secondOrderModules").hide(300);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
            setTimeout(() => {
                $('.containerModuless').masonry({
                    itemSelector: '.module',
                    fitWidth: true,
                    horizontalOrder: true
                });
            }, 400);
        }
    });
    $("#answer_sect > li > .open").click(function(){
        let parent = $(this).parent();
        let block = $(parent).children(".block");
        if(block.is(":hidden")){
            block.show(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(450deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(360deg)"
            });
        }else{
            block.hide(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
        }
    });
    $(".open-comments").click(function(){
        let name = $(this).closest(".comment").attr("data-name");
        let link = $(this).closest(".comment").attr("data-link");
        let text = $(this).closest(".comment").attr("data-text");

        $(".popups-comment").find(".name").html(name);
        $(".popups-comment").find(".link").attr("href",link);
        $(".popups-comment").find(".txt").html(text);
        $(".popups-comment").fadeIn(300);
    });
    $("#close_popup_FSQs").click(function(){
        $(".popups-comment").fadeOut(300);
    });
    //scroll section
    $(".scrollToElem").click(function(){
        let block = $(this).attr("data-scroll-to");
        $('html, body').animate({
            scrollTop: $(block).offset().top
        }, 1000 ,'swing'); 
        $(".section-menu>.main").css("right" , "-390px");
        $(".section-menu").fadeOut(500);
        $("body").css("overflow-y" , "auto");
    });
    
});