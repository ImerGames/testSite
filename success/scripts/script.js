$(document).ready(function(){
    $("#btn_open_close_more_modules").click(function(){
        let isOpen = $(this).attr("data-open");
        
        if(isOpen == "true"){
            //open
            for(let i = 0 ; i < $(".secondOrderModules").length; i++){
                $(".secondOrderModules").eq(i).show(300);
            }
            setTimeout(function(){
                $('.containerModules').masonry({horizontalOrder: true});
            },500);
            $(this).attr("data-open" , "false");
            $(this).text("Менше модулів");
        }else{
            //close
            for(let i = 0 ; i < $(".secondOrderModules").length; i++){
                $(".secondOrderModules").eq(i).hide(300);
            }
            setTimeout(function(){
                $('.containerModules').masonry({horizontalOrder: true});
            },300);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
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