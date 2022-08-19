$(document).ready(function(){
    let mouseOffset = { x : "110" , y : "110" }
    let targetOffset = { x : "0" , y : "0" } 

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
            $(".secondOrderModules").show(300);
            $(this).attr("data-open" , "false");
            $(this).text("Менше модулів");
            $(".containerModules>div>div.secondOrderModules").show(300);
            setTimeout(function(){
                $('.containerModules').masonry();
            },320);
        }else{
            //close
            $(".secondOrderModules").hide(300);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
            setTimeout(() => {
                $('.containerModules').masonry();
            }, 320);
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
});