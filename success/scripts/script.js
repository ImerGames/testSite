$(document).ready(function(){
    let activeBlock = 0;
    let configButton = {
        "1920" : [-400 , -600],
        "1800" : [-300 , -550],
        "1750" : [-250 , -500],
        "1700" : [-200 , -450],
        "1650" : [-150 , -400],
        "1600" : [-100 , -350],
        "1550" : [-50 , -300],
        "1500" : [0 , -250],
        "1450" : [50 , -200],
        "1400" : [100 , -150],
        "1350" : [150 , -100],
        "1300" : [200 , -50],
        "1250" : [100 , -100],
        "1200" : [100 , -100],
        "1150" : [100 , -100],
        "1100" : [100 , -100],
        "1050" : [100 , -100],
    }; 

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
                    horizontalOrder: true,
                    gutter: 50
                });
                $(".secondOrderModules").css({"opacity":"1"});
            },500);
        }else{
            //close
            $(".secondOrderModules").hide(300);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
            setTimeout(() => {
                $('.containerModuless').masonry({
                    itemSelector: '.module',
                    fitWidth: true,
                    horizontalOrder: true,
                    gutter: 50
                });
            }, 500);
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
    $('.video').click(function(){
        $(".popups-comment .comment").hide();
        $(".popups-comment .comment-video").show();
        let link = $(this).closest(".comment").attr("data-link");
        $('.popups-comment .comment-video > iframe').attr('src' , link);
        $(".popups-comment").fadeIn(300);
    });
    $(".open-comments").click(function(){
        $(".popups-comment .comment").show();
        $(".popups-comment .comment-video").hide();
        let name = $(this).closest(".comment").attr("data-name");
        let link = $(this).closest(".comment").attr("data-link");
        let text = $(this).closest(".comment").attr("data-text");
        let social = $(this).closest(".comment").attr("data-social");

        $(".popups-comment").find(".name").html(name);
        if(social == "telegram"){
            $(".popups-comment").find(".link").text("Telegram");
        }else{
            $(".popups-comment").find(".link").text("Instagram");
        }
        $(".popups-comment").find(".link").attr("href",link);
        $(".popups-comment").find(".txt").html(text);
        $(".popups-comment").fadeIn(300);
    });
    $(".close_popup_FSQvideo").click(function(){
        $(".popups-comment").fadeOut(300);
        $(this).parent().children('iframe').attr("src" , "");
    });
    $(".close_popup_FSQs").click(function(){
        $(".popups-comment").fadeOut(300);
    });
    //function 
    $("body>.section-result>.container>.container_block>.wrapper").mousemove(function(e){
        //viriable
        console.log(e);
        let cursorPosition = getPositionCursorToBlock($(this).offset() , e);
        let button = $(this).find('button');
        let buttonPosition = button.offset();
        let conf = getVirSize();

        $("body>.section-result>.container>.container_block>.wrapper").mouseenter(function(){
            $(this).find('button').fadeIn(300);
        });
        $("body>.section-result>.container>.container_block>.wrapper").mouseleave(function(){
            $(this).find('button').fadeOut(300);
        });

        if(conf == 'mobile'){
            $("body>.section-result>.container>.container_block>.wrapper > li").find('button').css({
                left:'auto',
                right:'100px'
            });
            return;
        }
        console.log(e.pageY);
        if(e.pageY >=3260 && e.pageY <=3580 && activeBlock !== 1){
            activeBlock = 1;
            console.log("one");
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }else if(e.pageY >=3580 && e.pageY <=3915 && activeBlock != 2){
            activeBlock = 2;
            console.log("two");
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }else if(e.pageY >=3915 && activeBlock != 3){
            console.log("three");
            activeBlock = 3;
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }

        if( cursorPosition.left - buttonPosition.left > conf.left ){ //#1
            button.css({ left:cursorPosition.left-250  });
        }else if(cursorPosition.left - buttonPosition.left < conf.right - 20 ){ //#2
            button.css({ left:cursorPosition.left  });
        }
        if( cursorPosition.top - buttonPosition.top < -1200 ){ //#3
            button.css({ top:cursorPosition.top-100  });
        } 
       });
    //func
    function getVirSize(){
        let conf = {};
        if($(window).width() >= 1850){
            conf = {left : configButton['1920'][0] , right : configButton['1920'][1] };
        }else if($(window).width() >= 1800){
            conf = {left : configButton['1800'][0] , right : configButton['1800'][1] };
        }else if($(window).width() >= 1750){
            conf = {left : configButton['1750'][0] , right : configButton['1750'][1] };
        }else if($(window).width() >= 1700){
            conf = {left : configButton['1700'][0] , right : configButton['1700'][1] };
        }else if($(window).width() >= 1650){
            conf = {left : configButton['1650'][0] , right : configButton['1650'][1] };
        }else if($(window).width() >= 1600){
            conf = {left : configButton['1600'][0] , right : configButton['1600'][1] };
        }else if($(window).width() >= 1550){
            conf = {left : configButton['1550'][0] , right : configButton['1550'][1] };
        }else if($(window).width() >= 1500){
            conf = {left : configButton['1500'][0] , right : configButton['1500'][1] };
        }else if($(window).width() >= 1450){
            conf = {left : configButton['1450'][0] , right : configButton['1450'][1] };
        }else if($(window).width() >= 1400){
            conf = {left : configButton['1400'][0] , right : configButton['1400'][1] };
        }else if($(window).width() >= 1350){
            conf = {left : configButton['1350'][0] , right : configButton['1350'][1] };
        }else if($(window).width() >= 1300){
            conf = {left : configButton['1300'][0] , right : configButton['1300'][1] };
        }else if($(window).width() >= 1250){
            conf = {left : configButton['1250'][0] , right : configButton['1250'][1] };
        }else if($(window).width() >= 1200){
            conf = {left : configButton['1200'][0] , right : configButton['1200'][1] };
        }else if($(window).width() >= 1150){
            conf = {left : configButton['1150'][0] , right : configButton['1150'][1] };
        }else if($(window).width() >= 1100){
            conf = {left : configButton['1100'][0] , right : configButton['1100'][1] };
        }else if($(window).width() >= 1050){
            conf = {left : configButton['1050'][0] , right : configButton['1050'][1] };
        }else if($(window).width() < 1050){
            conf = 'mobile';
        }else{
            conf = {left : configButton['1920'][0] , right : configButton['1920'][1] };
        }

        return conf;
    }
    function getPositionCursorToBlock(positionElem , e){
        let elem_left = positionElem.left;
        let elem_top = positionElem.top;
        // положение курсора внутри элемента
        var x = e.pageX - elem_left;
        var y = e.pageY - elem_top;
        return {left: x , top: y};
    }
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